/* OPT-004: continuous two-peak model, comparison record and exact certificate. */
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OptimizationOptimality = factory();
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var EPS = 1e-9;
  var DEFAULTS = Object.freeze({ cap: 10, candidate: 2, recorded: Object.freeze([0, 2, 4]) });
  function validateCap(cap) {
    if (!Number.isInteger(cap) || cap < 0 || cap > 10) throw new RangeError('The limit U must be an integer from 0 through 10.');
    return cap;
  }
  function validateX(x) {
    if (!Number.isFinite(x) || x < 0 || x > 10) throw new RangeError('Choose a finite real x from 0 through 10.');
    return x;
  }
  function score(x) {
    validateX(x);
    return Math.max(6 - Math.pow(x - 2, 2), 10 - Math.pow(x - 8, 2));
  }
  function evaluate(x, cap) {
    validateX(x); validateCap(cap);
    return Object.freeze({ x: x, score: score(x), feasible: x <= cap });
  }
  function compare(recorded, cap) {
    validateCap(cap);
    if (!Array.isArray(recorded)) throw new TypeError('The comparison record must be an array.');
    var points = Array.from(new Set(recorded.map(validateX))).sort(function (a, b) { return a - b; });
    var rows = points.map(function (x) { return evaluate(x, cap); });
    var allowed = rows.filter(function (r) { return r.feasible; });
    var best = allowed.length ? Math.max.apply(null, allowed.map(function (r) { return r.score; })) : null;
    return Object.freeze({ rows: Object.freeze(rows), bestValue: best,
      bestPoints: Object.freeze(allowed.filter(function (r) { return Math.abs(r.score - best) <= EPS; }).map(function (r) { return r.x; })) });
  }
  function certify(cap) {
    validateCap(cap);
    // max_x max(qA(x),qB(x)) = max(max_x qA(x),max_x qB(x)).
    // Each branch reaches its peak at its vertex clamped into [0,U].
    var a = Math.min(2, cap), b = Math.min(8, cap);
    var branchA = Object.freeze({ point: a, value: 6 - Math.pow(a - 2, 2) });
    var branchB = Object.freeze({ point: b, value: 10 - Math.pow(b - 8, 2) });
    var value = Math.max(branchA.value, branchB.value);
    var optimizers = [];
    if (branchA.value === value) optimizers.push(a);
    if (branchB.value === value && !optimizers.includes(b)) optimizers.push(b);
    return Object.freeze({ cap: cap, value: value, optimizers: Object.freeze(optimizers.sort(function (x, y) { return x - y; })),
      branchA: branchA, branchB: branchB, method: 'analytic-branch-bounds' });
  }
  function classify(x, cap) {
    var selected = evaluate(x, cap), certificate = certify(cap);
    var localPoints = cap < 2 ? [cap] : [2];
    if (cap >= 5 && cap <= 8) localPoints.push(cap);
    else if (cap > 8) localPoints.push(8);
    var local = selected.feasible && localPoints.some(function (p) { return Math.abs(x - p) <= EPS; });
    var global = selected.feasible && certificate.optimizers.some(function (p) { return Math.abs(x - p) <= EPS; });
    return Object.freeze({ x: x, feasible: selected.feasible, local: local, global: global,
      status: !selected.feasible ? 'Infeasible candidate' : cap === 0 ? 'Only feasible point; globally optimal' : global ? 'Globally optimal' : local ? 'Local maximum; not global' : 'Feasible; not a local maximum' });
  }
  return Object.freeze({ EPS: EPS, DEFAULTS: DEFAULTS, score: score, evaluate: evaluate,
    compare: compare, certify: certify, classify: classify });
}));
