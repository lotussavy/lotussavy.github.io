# LAB-A — Exact Profit Model: Contract and Verification

**Project task:** BL-004  
**Model version:** 1.0.0  
**Date:** 2026-11-11  
**Status:** Computational engine and tests complete; **no simulator UI** is connected.

## Files

- `assets/js/optimization/profit-model.js` — dependency-free pure calculation API, usable from a plain browser script or Node CommonJS.
- `scripts/optimization/profit-fixtures.json` — separately recorded expected outputs for every possible fleet size.
- `scripts/optimization/profit-model.test.cjs` — seven Node built-in test suites covering all candidates, boundaries, exact optimum, algebraic proof, determinism and immutability.
- `docs/project-management/LAB_A_MODEL.md` — this verification and integration note.

`scripts/` is excluded from the generated Jekyll site via `_config.yml`, while `assets/js/optimization/profit-model.js` is intended to be publicly served for future labs.

## Problem definition

The **only** feasible decisions are integer fleet sizes `n ∈ {0,1,…,12}`.

- Revenue: `R(n) = 100n - 5n²`.
- Cost: `C(n) = 20n + 100`.
- Objective: `maximize P(n) = R(n) - C(n) = 80n - 5n² - 100`.
- Units: **illustrative USD**; the coefficients are synthetic and not based on observed vehicle economics.
- Objective status: single-period illustrative maximization. No constraints or decision variables beyond the stated discrete domain.
- No actual passenger demand, capacity, fuel, batteries, charging, time schedules or operational feasibility are modeled.

### Exact solution

Enumerating all 13 feasible integers yields the **unique** maximizer `n*=8` with `P(8)=$220`. At this decision, `R(8)=$480` and `C(8)=$260`.

Independently, completing the square provides the analytical upper bound:

```
P(n) = 220 - 5(n - 8)^2 <= 220
```

Equality is achieved if and only if `n=8`. This independently certifies the global optimum on the specified integer domain (and, for this polynomial, even over the real numbers).

## API contract

```js
// Node
const model = require('../../assets/js/optimization/profit-model.js');
const selected = model.evaluateFleet(4);
// { fleet: 4, revenue: 320, cost: 180, profit: 140,
//   feasible: true, status: 'feasible', method: 'direct-evaluation' }

const all = model.enumerateFeasible(); // frozen array with 13 frozen records
const solution = model.solveExact();
// status: 'optimal'; method: 'exhaustive-enumeration';
// optimalFleet: 8; optimalProfit: 220; optimizers: [8]
// candidateCount: 13; candidates: all feasible records
```

For browser use, include `/assets/js/optimization/profit-model.js` with a plain `<script src="..."></script>` tag; the API is available as `window.OptimizationProfitModel`. This file never accesses the DOM or a network endpoint; its functions are deterministic.

### Error behavior

- `validateFleet(n)` and `evaluateFleet(n)` reject noninteger inputs with `TypeError` (including strings, `NaN`, infinity, `null`).
- Integer values outside `0…12` raise `RangeError`.
- No silent coercion or clipping is performed.
- `enumerateFeasible()` and `solveExact()` require no inputs.
- The API and outputs are frozen to prevent callers from changing the published reference values.

## Reproduce tests

From the repository root with **Node.js 18 or newer** (Node 22.16.0 used for the verified run):

```bash
node --test scripts/optimization/profit-model.test.cjs
```

Expected result: **7 tests passed, 0 failed**.

The tests cover:
1. All 13 integer inputs against an explicitly stored fixture table.
2. Both domain endpoints, out-of-range integers and invalid types/values.
3. Order, completeness and uniqueness of the feasible enumeration.
4. Unique argmax, status and objective from fixed independent expected values.
5. A separate completing-the-square proof.
6. Revenue–cost accounting identity and integer-valued outputs.
7. Repeated-call determinism and frozen result objects.

A separate smoke test executed the module in a browser-like JavaScript VM without CommonJS and verified the global export and optimum.

**Committed-source integrity:** Tool-side readback of all three GitHub files yielded the same byte lengths and FNV-1a character hashes as the tested files:
- Model JS: 2931 bytes, `a164a192`
- Fixture JSON: 433 bytes, `da7d3fcd`
- Test CJS: 3522 bytes, `9cc3acbc`

FNV-1a is only a lightweight comparison check; it is not a cryptographic authenticity mechanism. GitHub itself provides SHA blob IDs.

## What BL-004 does **not** deliver

- No interactive sliders, chart, lesson include or browser UI.
- No published OPT-001 lesson.
- No hosted Gurobi/solver service, and no solver claim beyond exact enumeration of the toy domain.
- No verification of live GitHub Pages routing, Jekyll build or the previous lesson-template rendering.

## BL-005 integration guidance

When the UI is developed:
- Render one selected fleet `n` with `evaluateFleet(n)`.
- Generate chart points from `enumerateFeasible()`, not duplicated UI-side formulas.
- Use `solveExact()` only for the explicitly documented optimum/proof of this instance.
- Always label outputs as **illustrative** and show the `n∈[0,12]` integer domain.
- Keep displayed revenue, cost, profit, chart point and written interpretation synchronized to the same evaluated result.
- Provide accessible native controls, reset, prediction prompt, and status handling.
- Do not label this model a practical eVTOL/operations profit optimizer.
