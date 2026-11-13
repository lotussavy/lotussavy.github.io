'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('../../assets/js/optimization/feasibility-model.js');
const base = m.DEFAULTS;
const key = p => p.map(v => Number(v.toFixed(7))).join(',');
const sorted = points => points.map(key).sort();

// Independent oracle: solve every pair of boundary equations and substitute
// into all active inequalities. It never clips a polygon or calls model rules.
function oracle(s) {
  const r = [[-1, 0, 0], [0, -1, 0], [1, 0, 10], [0, 1, 10]];
  if (s.timeOn) r.push([1, 1, s.time]);
  if (s.staffOn) r.push([2, 1, s.staff]);
  if (s.minimumOn) r.push([-1, -1, -s.minimum]);
  const points = new Map();
  for (let i = 0; i < r.length; i++) for (let j = i + 1; j < r.length; j++) {
    const [a, b, c] = r[i], [d, e, f] = r[j], det = a * e - b * d;
    if (!det) continue;
    const p = [(c * e - b * f) / det, (a * f - c * d) / det];
    if (r.every(([u, v, w]) => u * p[0] + v * p[1] <= w)) points.set(key(p), p);
  }
  const p = [...points.values()];
  let dim = p.length ? 0 : -1;
  if (p.length > 1) {
    const [x, y] = p[0], [u, v] = p[1];
    dim = p.some(([a, b]) => (u - x) * (b - y) !== (v - y) * (a - x)) ? 2 : 1;
  }
  return { points: p, dim };
}

test('default polygon, candidate violations and resource slack', () => {
  assert.deepEqual(sorted(m.analyze(base).vertices), sorted([[0, 0], [5, 0], [2, 6], [0, 8]]));
  const p = m.evaluatePoint(3, 4, base);
  assert.equal(p.status, 'Feasible boundary');
  assert.equal(p.checks.find(c => c.id === 'time').slack, 1);
  assert.equal(p.checks.find(c => c.id === 'staff').tight, true);
  const bad = m.evaluatePoint(4, 4, base);
  assert.equal(bad.feasible, false);
  assert.equal(bad.checks.find(c => c.id === 'staff').slack, -2);
  assert.equal(m.evaluatePoint(4, 2, base).feasible, true);
  assert.equal(m.evaluatePoint(1, 1, base).status, 'Feasible interior');
});

test('all 109,368 supported settings agree with independent boundary intersections', () => {
  let count = 0;
  for (let flags = 0; flags < 8; flags++) for (let time = 0; time <= 20; time++)
    for (let staff = 0; staff <= 30; staff++) for (let minimum = 0; minimum <= 20; minimum++) {
      const s = { time, staff, minimum, timeOn: Boolean(flags & 1), staffOn: Boolean(flags & 2), minimumOn: Boolean(flags & 4) };
      const expected = oracle(s), actual = m.analyze(s);
      assert.equal(actual.dimension, expected.dim, JSON.stringify(s));
      assert.deepEqual(sorted(actual.vertices), sorted(expected.points), JSON.stringify(s));
      for (const [x, y] of [[0, 0], [3, 4], [4, 4], [10, 10], [0.25, 0.75]]) {
        const pass = (!s.timeOn || x + y <= time) && (!s.staffOn || 2 * x + y <= staff) && (!s.minimumOn || x + y >= minimum);
        assert.equal(m.evaluatePoint(x, y, s).feasible, pass);
      }
      count++;
    }
  assert.equal(count, 109368);
});

test('empty, line and singleton remain distinct, including domain extremes', () => {
  assert.equal(m.analyze({ ...base, minimumOn: true, minimum: 9 }).dimension, -1);
  assert.deepEqual(sorted(m.analyze({ ...base, minimumOn: true, minimum: 8 }).vertices), sorted([[0, 8], [2, 6]]));
  assert.deepEqual(m.analyze({ ...base, time: 0 }).vertices, [[0, 0]]);
  assert.deepEqual(m.analyze({ ...base, timeOn: false, staffOn: false, minimumOn: true, minimum: 20 }).vertices, [[10, 10]]);
  assert.equal(m.analyze({ ...base, timeOn: false, staffOn: false, minimumOn: false }).area, 100);
});

test('disabled constraints are excluded; coordinates remain continuous and bounded', () => {
  const s = { ...base, staffOn: false };
  assert.equal(m.evaluatePoint(4, 4, s).feasible, true);
  const check = m.evaluatePoint(4, 4, s).checks.find(c => c.id === 'staff');
  assert.equal(check.enabled, false); assert.equal(check.slack, null);
  assert.equal(m.evaluatePoint(0.1, 0.2, base).feasible, true);
  for (const p of [[-1, 0], [0, -1], [11, 0], [0, 11]]) assert.equal(m.evaluatePoint(...p, s).feasible, false);
});

test('boundaries obey closed inequalities and documented floating-point tolerance', () => {
  assert.equal(m.evaluatePoint(2, 6, base).feasible, true);
  assert.equal(m.evaluatePoint(2, 6 + m.EPS / 4, base).feasible, true);
  assert.equal(m.evaluatePoint(2, 6 + 10 * m.EPS, base).feasible, false);
  const r = m.analyze(base).rules;
  assert.deepEqual(sorted(r.find(c => c.id === 'staff').boundary), sorted([[0, 10], [5, 0]]));
});

test('invalid settings and nonfinite candidates fail explicitly', () => {
  for (const bad of [{ time: -1 }, { time: 21 }, { time: 1.5 }, { staff: 31 }, { minimum: 21 }, { timeOn: 1 }, { minimumOn: 'false' }]) {
    assert.throws(() => m.analyze({ ...base, ...bad }));
  }
  assert.throws(() => m.analyze(null));
  for (const bad of [NaN, Infinity, '3', undefined]) assert.throws(() => m.evaluatePoint(bad, 4, base));
});

test('results, settings and nested coordinates are immutable and inputs unchanged', () => {
  const input = { ...base }, result = m.analyze(input);
  assert.deepEqual(input, base);
  assert.throws(() => { result.vertices[0][0] = 2; }, TypeError);
  assert.throws(() => { result.rules[0].boundary.push([0, 0]); }, TypeError);
  assert.throws(() => { m.evaluatePoint(3, 4, base).checks[0].feasible = false; }, TypeError);
});
