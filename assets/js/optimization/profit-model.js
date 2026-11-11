/*
 * Optimization Lab LAB-A: a deterministic, dependency-free teaching model.
 * n is an integer fleet size in [0, 12]. Monetary amounts are illustrative USD.
 * Revenue(n) = 100n - 5n^2; Cost(n) = 20n + 100.
 * Profit(n) = Revenue(n) - Cost(n).
 *
 * Browser: window.OptimizationProfitModel
 * Node: require('./profit-model.js')
 * No DOM, IO, solver, random numbers, or network dependency.
 */
(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  } else {
    root.OptimizationProfitModel = api;
  }
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var MIN_FLEET = 0;
  var MAX_FLEET = 12;
  var MODEL = Object.freeze({
    id: 'LAB-A',
    version: '1.0.0',
    objective: 'maximize-profit',
    domain: 'integer',
    minFleet: MIN_FLEET,
    maxFleet: MAX_FLEET,
    monetaryUnit: 'illustrative USD',
    formulation: 'P(n) = 80n - 5n^2 - 100',
    scope: 'Synthetic teaching example; not calibrated fleet economics'
  });

  function validateFleet(n) {
    if (!Number.isInteger(n)) {
      throw new TypeError('Fleet size must be a finite integer number.');
    }
    if (n < MIN_FLEET || n > MAX_FLEET) {
      throw new RangeError('Fleet size must be between 0 and 12, inclusive.');
    }
    return n;
  }

  function evaluateFleet(n) {
    validateFleet(n);
    var revenue = 100 * n - 5 * n * n;
    var cost = 20 * n + 100;
    return Object.freeze({
      fleet: n,
      revenue: revenue,
      cost: cost,
      profit: revenue - cost,
      feasible: true,
      status: 'feasible',
      method: 'direct-evaluation'
    });
  }

  function enumerateFeasible() {
    var candidates = [];
    for (var n = MIN_FLEET; n <= MAX_FLEET; n += 1) {
      candidates.push(evaluateFleet(n));
    }
    return Object.freeze(candidates);
  }

  function solveExact() {
    var candidates = enumerateFeasible();
    var bestProfit = -Infinity;
    var optimizers = [];
    for (var i = 0; i < candidates.length; i += 1) {
      var current = candidates[i];
      if (current.profit > bestProfit) {
        bestProfit = current.profit;
        optimizers = [current.fleet];
      } else if (current.profit === bestProfit) {
        optimizers.push(current.fleet);
      }
    }
    return Object.freeze({
      status: 'optimal',
      objective: 'maximize-profit',
      method: 'exhaustive-enumeration',
      candidateCount: candidates.length,
      optimalFleet: optimizers[0],
      optimalProfit: bestProfit,
      optimizers: Object.freeze(optimizers),
      candidates: candidates,
      proof: 'All integers from 0 through 12 were evaluated; the largest profit was selected.'
    });
  }

  return Object.freeze({
    MODEL: MODEL,
    validateFleet: validateFleet,
    evaluateFleet: evaluateFleet,
    enumerateFeasible: enumerateFeasible,
    solveExact: solveExact
  });
}));
