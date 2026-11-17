'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('../../assets/js/optimization/optimality-model.js');
// Independent piecewise oracle: branch crossover is 14/3.
const oracleScore = x => x <= 14 / 3 ? -x * x + 4 * x + 2 : -x * x + 16 * x - 54;
const expected = [[2, [0]], [5, [1]], [6, [2]], [6, [2]], [6, [2]], [6, [2]], [6, [2, 6]], [9, [7]], [10, [8]], [10, [8]], [10, [8]]];

test('exact global values and all optimizers for every supported upper limit', () => {
  for (let cap = 0; cap <= 10; cap++) {
    const certificate = m.certify(cap);
    assert.equal(certificate.value, expected[cap][0]);
    assert.deepEqual(certificate.optimizers, expected[cap][1]);
    assert.equal(certificate.method, 'analytic-branch-bounds');
    for (const x of certificate.optimizers) assert.equal(m.evaluate(x, cap).score, certificate.value);
  }
});

test('11,011 hundredth-step probes and crossover agree with independent piecewise arithmetic and bounds', () => {
  let checked = 0;
  for (let cap = 0; cap <= 10; cap++) for (let i = 0; i <= 1000; i++) {
    const x = i / 100, point = m.evaluate(x, cap);
    assert.ok(Math.abs(point.score - oracleScore(x)) < 1e-10);
    assert.equal(point.feasible, x <= cap);
    if (point.feasible) assert.ok(point.score <= expected[cap][0] + 1e-10);
    checked++;
  }
  assert.equal(checked, 11011);
  assert.ok(Math.abs(m.score(14 / 3) + 10 / 9) < 1e-10);
});

test('all 22,528 integer-candidate records correctly exclude infeasible points and preserve ties', () => {
  for (let cap = 0; cap <= 10; cap++) for (let mask = 0; mask < 2048; mask++) {
    const recorded = Array.from({ length: 11 }, (_, x) => x).filter(x => mask & (1 << x));
    const feasible = recorded.filter(x => x <= cap), values = feasible.map(oracleScore);
    const best = values.length ? Math.max(...values) : null;
    const comparison = m.compare(recorded, cap);
    assert.equal(comparison.bestValue, best);
    assert.deepEqual(comparison.bestPoints, feasible.filter(x => oracleScore(x) === best));
    assert.equal(comparison.rows.length, recorded.length);
  }
  assert.deepEqual(m.compare([2, 2, 0, 4], 10).rows.map(r => r.x), [0, 2, 4]);
  assert.equal(m.compare([8], 5).bestValue, null);
});

test('local classifications agree with an independent one-sided derivative oracle', () => {
  for (let cap = 0; cap <= 10; cap++) for (let i = 0; i <= 1000; i++) {
    const x = i / 100, feasible = x <= cap;
    const derivative = x < 14 / 3 ? 4 - 2 * x : 16 - 2 * x;
    const local = feasible && (cap === 0 || (x === cap ? derivative >= 0 : x === 0 ? derivative <= 0 : derivative === 0));
    const actual = m.classify(x, cap);
    assert.equal(actual.local, local, JSON.stringify({ x, cap }));
    assert.equal(actual.global, feasible && expected[cap][1].includes(x));
  }
  assert.equal(m.classify(5, 5).status, 'Local maximum; not global');
  assert.equal(m.classify(2, 10).status, 'Local maximum; not global');
  assert.equal(m.classify(8, 5).status, 'Infeasible candidate');
  assert.equal(m.classify(14 / 3, 10).local, false);
});

test('best recorded can equal the optimum, differ from it, or have no feasible incumbent', () => {
  assert.equal(m.compare([0, 2, 4], 10).bestValue, 6);
  assert.equal(m.certify(10).value, 10);
  assert.equal(m.compare([8], 10).bestValue, m.certify(10).value);
  assert.deepEqual(m.compare([2, 6], 6).bestPoints, [2, 6]);
  assert.equal(m.compare([], 10).bestValue, null);
  assert.equal(m.compare([8], 5).bestValue, null);
  assert.deepEqual(m.certify(0).optimizers, [0]);
});

test('invalid limits, coordinates and comparison records fail explicitly', () => {
  for (const cap of [-1, 11, 2.5, NaN, Infinity, '6', true, null]) assert.throws(() => m.certify(cap));
  for (const x of [-1, 11, NaN, Infinity, '2', true, null]) assert.throws(() => m.score(x));
  assert.throws(() => m.compare(null, 10));
  assert.throws(() => m.compare([2, NaN], 10));
});

test('model and nested results are immutable and do not modify the supplied record', () => {
  const record = [4, 2, 2, 0], copy = record.slice(), result = m.compare(record, 10);
  assert.deepEqual(record, copy);
  assert.throws(() => { result.rows[0].score = 4; }, TypeError);
  assert.throws(() => { m.certify(6).optimizers.push(3); }, TypeError);
  assert.throws(() => { m.certify(6).branchA.value = 9; }, TypeError);
  assert.throws(() => { m.DEFAULTS.recorded.push(8); }, TypeError);
});
