'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const model = require('../../assets/js/optimization/profit-model.js');
const fixtures = require('./profit-fixtures.json');

// The 13 expected tuples are fixed independent fixtures, not outputs of the model.
test('all 13 feasible fleet sizes agree with the independent reference table', () => {
  assert.equal(fixtures.rows.length, 13);
  for (const [fleet, revenue, cost, profit] of fixtures.rows) {
    assert.deepEqual(model.evaluateFleet(fleet), {
      fleet, revenue, cost, profit,
      feasible: true,
      status: 'feasible',
      method: 'direct-evaluation'
    });
  }
});

test('explicit domain boundaries and noninteger/invalid inputs', () => {
  assert.equal(model.validateFleet(0), 0);
  assert.equal(model.validateFleet(12), 12);
  for (const invalid of [-1, 13, -100, 100]) {
    assert.throws(() => model.evaluateFleet(invalid), RangeError);
  }
  for (const invalid of [0.5, 8.001, NaN, Infinity, -Infinity, '8', null, undefined, {}, []]) {
    assert.throws(() => model.evaluateFleet(invalid), TypeError);
  }
});

test('full enumeration is ordered, exhaustive and has no duplicated decisions', () => {
  const candidates = model.enumerateFeasible();
  assert.equal(candidates.length, 13);
  assert.deepEqual(candidates.map(row => row.fleet), Array.from({ length: 13 }, (_, n) => n));
  assert.equal(new Set(candidates.map(row => row.fleet)).size, 13);
  assert.equal(candidates.every(row => row.feasible), true);
});

test('reported optimum agrees with fixed fixture oracle and unique argmax', () => {
  const result = model.solveExact();
  const bestFixture = fixtures.rows.reduce((best, row) => row[3] > best[3] ? row : best);
  assert.equal(result.status, 'optimal');
  assert.equal(result.method, 'exhaustive-enumeration');
  assert.equal(result.candidateCount, 13);
  assert.equal(result.optimalFleet, 8);
  assert.equal(result.optimalProfit, 220);
  assert.deepEqual(result.optimizers, [8]);
  assert.equal(result.optimalFleet, bestFixture[0]);
  assert.equal(result.optimalProfit, bestFixture[3]);
  assert.equal(fixtures.rows.filter(row => row[3] === 220).length, 1);
});

test('independent completing-the-square bound certifies global maximum', () => {
  // Algebraically: P(n) = 220 - 5(n - 8)^2, which is <= 220 for all real n.
  for (let n = 0; n <= 12; n += 1) {
    const certified = 220 - 5 * (n - 8) ** 2;
    assert.equal(model.evaluateFleet(n).profit, certified);
    assert.ok(certified <= 220);
    if (n !== 8) assert.ok(certified < 220);
  }
});

test('revenue minus cost always equals profit; all values are integer USD', () => {
  for (const row of model.enumerateFeasible()) {
    assert.equal(row.revenue - row.cost, row.profit);
    assert.ok(Number.isInteger(row.revenue));
    assert.ok(Number.isInteger(row.cost));
    assert.ok(Number.isInteger(row.profit));
  }
});

test('model metadata and results are immutable, repeated calls deterministic', () => {
  assert.equal(model.MODEL.minFleet, 0);
  assert.equal(model.MODEL.maxFleet, 12);
  assert.equal(model.MODEL.objective, 'maximize-profit');
  assert.ok(Object.isFrozen(model.MODEL));
  assert.ok(Object.isFrozen(model));
  const first = model.solveExact();
  const second = model.solveExact();
  assert.deepEqual(first, second);
  assert.ok(Object.isFrozen(first));
  assert.ok(Object.isFrozen(first.candidates));
  assert.ok(Object.isFrozen(first.candidates[0]));
  assert.ok(Object.isFrozen(first.optimizers));
});
