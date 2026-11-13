'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const model = require('../../assets/js/optimization/model-builder-model.js');
const fixture = require('./profit-fixtures.json').rows;

test('seven independently specified modeling scenarios have the expected answer', () => {
  const cases = [
    ['profit',260,12,8,220,9], ['profit',220,12,6,200,7],
    ['profit',260,4,4,140,5], ['revenue',400,12,10,500,13],
    ['cost',400,12,0,100,13], ['profit',80,12,null,null,0],
    ['profit',100,12,0,-100,1]
  ];
  for (const [objective,budget,available,fleet,value,count] of cases) {
    const r = model.solve({objective,budget,available});
    assert.equal(r.optimalFleet,fleet); assert.equal(r.objectiveValue,value);
    assert.equal(r.feasibleCount,count); assert.equal(r.candidateCount,13);
    assert.equal(r.status,fleet === null ? 'infeasible' : 'optimal');
  }
});

test('all 15,639 supported scenarios agree with independent capacity/vertex certificates', () => {
  let checked = 0;
  for (const objective of ['profit','revenue','cost']) {
    for (let budget=0; budget<=400; budget++) for (let available=0; available<=12; available++) {
      const k = Math.min(12,available,Math.floor((budget-100)/20));
      const expectedFleet = k < 0 ? null : objective === 'cost' ? 0 : Math.min(k,objective === 'profit' ? 8 : 10);
      const column = {revenue:1,cost:2,profit:3}[objective];
      const r = model.solve({objective,budget,available});
      assert.equal(r.optimalFleet,expectedFleet);
      assert.equal(r.objectiveValue,k < 0 ? null : fixture[expectedFleet][column]);
      assert.equal(r.feasibleCount,Math.max(0,k+1));
      for (const row of r.rows) {
        assert.equal(row.feasible,row.fleet<=k);
        assert.deepEqual([row.revenue,row.cost,row.profit],fixture[row.fleet].slice(1));
      }
      checked++;
    }
  }
  assert.equal(checked,15639);
});

test('changing only the objective preserves the feasible set', () => {
  const sets = ['profit','revenue','cost'].map(objective =>
    model.solve({objective,budget:245,available:9}).rows.filter(r=>r.feasible).map(r=>r.fleet));
  assert.deepEqual(sets,[Array.from({length:8},(_,i)=>i),sets[0],sets[0]]);
});

test('constraint checks override base-domain feasibility and report both exact violations', () => {
  const r = model.evaluateCandidate(7,{objective:'profit',budget:220,available:6});
  assert.equal(r.feasible,false);
  assert.deepEqual(r.violations,[{rule:'availability',excess:1},{rule:'budget',excess:20}]);
  const equality = model.evaluateCandidate(6,{objective:'profit',budget:220,available:6});
  assert.equal(equality.feasible,true); assert.deepEqual(equality.violations,[]);
});

test('an empty feasible set is distinct from a feasible optimum with negative profit', () => {
  const empty = model.solve({objective:'profit',budget:99,available:12});
  assert.equal(empty.status,'infeasible'); assert.equal(empty.optimalFleet,null);
  assert.equal(empty.objectiveValue,null); assert.deepEqual(empty.optimizers,[]);
  const loss = model.solve({objective:'profit',budget:100,available:0});
  assert.equal(loss.status,'optimal'); assert.equal(loss.optimalFleet,0); assert.equal(loss.objectiveValue,-100);
});

test('invalid settings and noninteger or out-of-domain decisions are rejected', () => {
  for (const budget of [-1,401,260.5,NaN,Infinity,'260',null,true]) {
    assert.throws(()=>model.solve({objective:'profit',budget,available:12}));
  }
  for (const available of [-1,13,4.5,'4',null,true]) {
    assert.throws(()=>model.solve({objective:'profit',budget:260,available}));
  }
  for (const objective of ['toString','__proto__','unknown',null]) {
    assert.throws(()=>model.solve({objective,budget:260,available:12}));
  }
  for (const n of [-1,13,7.5,'4',null]) assert.throws(()=>model.evaluateCandidate(n,model.DEFAULTS));
});

test('results are deterministic and immutable without modifying supplied settings', () => {
  const settings = {objective:'profit',budget:260,available:12};
  const a = model.solve(settings), b = model.solve(settings);
  assert.deepEqual(a,b); assert.deepEqual(settings,{objective:'profit',budget:260,available:12});
  assert.ok(Object.isFrozen(a) && Object.isFrozen(a.rows) && Object.isFrozen(a.rows[0]));
  assert.throws(()=>{ a.rows[0].feasible=false; },TypeError);
});
