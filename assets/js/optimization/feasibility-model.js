/* LAB-B: continuous feasibility on a bounded square. No objective is assumed. */
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OptimizationFeasibility = factory();
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var EPS = 1e-9;
  var DEFAULTS = Object.freeze({ time: 8, staff: 10, minimum: 6, timeOn: true, staffOn: true, minimumOn: false });
  function validate(s) {
    if (!s) throw new TypeError('Supply the model settings.');
    [['time', 20], ['staff', 30], ['minimum', 20]].forEach(function (item) {
      if (!Number.isInteger(s[item[0]]) || s[item[0]] < 0 || s[item[0]] > item[1]) {
        throw new RangeError(item[0] + ' must be an integer from 0 to ' + item[1] + '.');
      }
    });
    ['timeOn', 'staffOn', 'minimumOn'].forEach(function (key) {
      if (typeof s[key] !== 'boolean') throw new TypeError(key + ' must be true or false.');
    });
    return Object.freeze({ time: s.time, staff: s.staff, minimum: s.minimum,
      timeOn: s.timeOn, staffOn: s.staffOn, minimumOn: s.minimumOn });
  }
  function rules(s) {
    return [
      { id: 'time', label: 'Time', a: 1, b: 1, c: s.time, enabled: s.timeOn, sense: '≤' },
      { id: 'staff', label: 'Staffing', a: 2, b: 1, c: s.staff, enabled: s.staffOn, sense: '≤' },
      { id: 'minimum', label: 'Minimum activity', a: -1, b: -1, c: -s.minimum, enabled: s.minimumOn, sense: '≥' }
    ];
  }
  function unique(points) {
    return points.filter(function (p, i) {
      return !points.slice(0, i).some(function (q) { return Math.abs(p[0] - q[0]) <= EPS && Math.abs(p[1] - q[1]) <= EPS; });
    });
  }
  function clip(points, rule) {
    if (!points.length) return [];
    var result = [];
    points.forEach(function (p, i) {
      var q = points[(i + 1) % points.length];
      var fp = rule.a * p[0] + rule.b * p[1] - rule.c;
      var fq = rule.a * q[0] + rule.b * q[1] - rule.c;
      var pin = fp <= EPS, qin = fq <= EPS;
      if (pin) result.push(p);
      if (pin !== qin) {
        var t = fp / (fp - fq);
        result.push([p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])]);
      }
    });
    return unique(result);
  }
  function area(points) {
    return Math.abs(points.reduce(function (sum, p, i) {
      var q = points[(i + 1) % points.length];
      return sum + p[0] * q[1] - q[0] * p[1];
    }, 0)) / 2;
  }
  function freezePoints(points) {
    return Object.freeze(points.map(function (p) {
      return Object.freeze(p.map(function (v) { return Math.abs(v) < EPS ? 0 : v; }));
    }));
  }
  function boundary(rule) {
    var points = [];
    if (rule.b !== 0) [0, 10].forEach(function (x) { points.push([x, (rule.c - rule.a * x) / rule.b]); });
    if (rule.a !== 0) [0, 10].forEach(function (y) { points.push([(rule.c - rule.b * y) / rule.a, y]); });
    return freezePoints(unique(points.filter(function (p) { return p.every(function (v) { return v >= -EPS && v <= 10 + EPS; }); })));
  }
  function analyze(settings) {
    var s = validate(settings), all = rules(s);
    var points = [[0, 0], [10, 0], [10, 10], [0, 10]];
    all.filter(function (r) { return r.enabled; }).forEach(function (r) { points = clip(points, r); });
    var size = area(points), dimension = !points.length ? -1 : points.length === 1 ? 0 : size <= EPS ? 1 : 2;
    if (dimension === 1) {
      var pair = [points[0], points[1]], distance = -1;
      points.forEach(function (p) { points.forEach(function (q) {
        var d = Math.pow(p[0] - q[0], 2) + Math.pow(p[1] - q[1], 2);
        if (d > distance) { distance = d; pair = [p, q]; }
      }); });
      points = pair;
    }
    return Object.freeze({ settings: s, vertices: freezePoints(points), area: size, dimension: dimension,
      status: dimension === -1 ? 'Empty feasible set' : dimension === 0 ? 'Single feasible point' : dimension === 1 ? 'Nonempty line segment' : 'Nonempty area',
      rules: Object.freeze(all.map(function (r) { return Object.freeze(Object.assign({}, r, { boundary: boundary(r) })); })) });
  }
  function evaluatePoint(x, y, settings) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) throw new TypeError('Candidate coordinates must be finite numbers.');
    var s = validate(settings);
    var checks = [Object.freeze({ id: 'domain', label: 'Domain', enabled: true,
      feasible: x >= -EPS && y >= -EPS && x <= 10 + EPS && y <= 10 + EPS,
      tight: [x, y, 10 - x, 10 - y].some(function (v) { return Math.abs(v) <= EPS; }),
      slack: Math.min(x, y, 10 - x, 10 - y), lhs: null, rhs: null, sense: 'box' })];
    rules(s).forEach(function (r) {
      var residual = r.c - r.a * x - r.b * y;
      checks.push(Object.freeze({ id: r.id, label: r.label, enabled: r.enabled,
        feasible: !r.enabled || residual >= -EPS, tight: r.enabled && Math.abs(residual) <= EPS,
        slack: r.enabled ? residual : null, lhs: (r.id === 'minimum' ? -1 : 1) * (r.a * x + r.b * y),
        rhs: r.id === 'minimum' ? -r.c : r.c, sense: r.sense }));
    });
    var feasible = checks.every(function (c) { return c.feasible; });
    return Object.freeze({ x: x, y: y, feasible: feasible, checks: Object.freeze(checks),
      status: !feasible ? 'Infeasible' : checks.some(function (c) { return c.tight; }) ? 'Feasible boundary' : 'Feasible interior' });
  }
  return Object.freeze({ EPS: EPS, DEFAULTS: DEFAULTS, validate: validate, analyze: analyze, evaluatePoint: evaluatePoint });
}));
