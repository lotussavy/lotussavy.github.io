/* OPT-002: exact finite modeling activity, reusing LAB-A financial values. */
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('./profit-model.js'));
  } else {
    root.OptimizationModelBuilder = factory(root.OptimizationProfitModel);
  }
}(typeof globalThis !== 'undefined' ? globalThis : this, function (financial) {
  'use strict';
  if (!financial) throw new Error('Verified financial model is required.');
  var DEFAULTS = Object.freeze({ objective: 'profit', budget: 260, available: 12 });
  var OBJECTIVES = Object.freeze({
    profit: Object.freeze({ label: 'profit', sense: 'maximize', formula: 'P(n) = 80n − 5n² − 100' }),
    revenue: Object.freeze({ label: 'revenue', sense: 'maximize', formula: 'R(n) = 100n − 5n²' }),
    cost: Object.freeze({ label: 'cost', sense: 'minimize', formula: 'C(n) = 20n + 100' })
  });
  function validate(settings) {
    if (!settings || !Object.prototype.hasOwnProperty.call(OBJECTIVES, settings.objective)) {
      throw new TypeError('Choose profit, revenue or cost as the objective.');
    }
    if (!Number.isInteger(settings.budget) || settings.budget < 0 || settings.budget > 400) {
      throw new RangeError('Budget must be a whole-dollar amount from 0 to 400.');
    }
    if (!Number.isInteger(settings.available) || settings.available < 0 || settings.available > 12) {
      throw new RangeError('Available vehicles must be an integer from 0 to 12.');
    }
    return Object.freeze({ objective: settings.objective, budget: settings.budget, available: settings.available });
  }
  function evaluateCandidate(n, settings) {
    var scenario = validate(settings);
    var row = financial.evaluateFleet(n);
    var violations = [];
    if (n > scenario.available) violations.push(Object.freeze({ rule: 'availability', excess: n - scenario.available }));
    if (row.cost > scenario.budget) violations.push(Object.freeze({ rule: 'budget', excess: row.cost - scenario.budget }));
    return Object.freeze({ fleet: n, revenue: row.revenue, cost: row.cost, profit: row.profit,
      objectiveValue: row[scenario.objective], feasible: violations.length === 0,
      violations: Object.freeze(violations) });
  }
  function solve(settings) {
    var scenario = validate(settings);
    var goal = OBJECTIVES[scenario.objective];
    var rows = [];
    var best = null;
    var optimizers = [];
    for (var n = 0; n <= 12; n += 1) {
      var row = evaluateCandidate(n, scenario);
      rows.push(row);
      if (!row.feasible) continue;
      if (best === null || (goal.sense === 'maximize' ? row.objectiveValue > best : row.objectiveValue < best)) {
        best = row.objectiveValue;
        optimizers = [n];
      } else if (row.objectiveValue === best) optimizers.push(n);
    }
    return Object.freeze({ status: optimizers.length ? 'optimal' : 'infeasible',
      method: 'exhaustive-enumeration', scenario: scenario, sense: goal.sense,
      candidateCount: 13, feasibleCount: rows.filter(function (r) { return r.feasible; }).length,
      optimalFleet: optimizers.length ? optimizers[0] : null, objectiveValue: best,
      optimizers: Object.freeze(optimizers), rows: Object.freeze(rows) });
  }
  return Object.freeze({ DEFAULTS: DEFAULTS, OBJECTIVES: OBJECTIVES,
    validate: validate, evaluateCandidate: evaluateCandidate, solve: solve });
}));
