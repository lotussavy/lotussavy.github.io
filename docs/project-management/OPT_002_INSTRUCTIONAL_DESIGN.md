# OPT-002 — Instructional Design

**Date:** November 13, 2026. Owner authorized completing OPT-002, including implementation, review and publication, in this session; the earlier design-only session allocation is superseded.

## Outcome and scope

A beginner can distinguish the chosen variable n, supplied parameters A/B, the selected objective, and all constraints; formulate a small maximize/minimize model; and explain why changing the goal differs from changing the permitted decisions.

Prerequisite: released OPT-001. Keep the same synthetic revenue/cost functions to reduce cognitive load. Add n ≤ A and C(n) ≤ B; permit goal = maximize profit, maximize revenue, or minimize cost. A is an integer 0–12; B is integer illustrative USD 0–400; n remains an integer 0–12. This is a one-variable introductory model builder, not the later two-dimensional LAB-B feasibility explorer.

## Five aligned objectives

1. Classify a decision, an outcome and a supplied parameter.
2. State an objective and its maximize/minimize direction.
3. Check every inequality and the integer domain for a candidate.
4. Separate objective changes from changes to the feasible set.
5. Interpret an empty feasible set and a trivial optimum caused by a missing service requirement.

## Learning sequence

Prediction → choose a candidate → inspect its rule checks → change a parameter → compare objectives with the same constraints → formulate the model → enumerate and independently verify → reproduce in Python → answer five knowledge checks.

The lesson follows the established eleven-section template. Its reusable builder also has a standalone route. State stays in the browser; no accounts or analytics are introduced.

## Independent reference scenarios

| Goal | Budget B | Available A | Feasible choices | Exact best fleet | Goal value |
|---|---:|---:|---|---:|---:|
| Max profit | 260 | 12 | 0–8 | 8 | 220 |
| Max profit | 220 | 12 | 0–6 | 6 | 200 |
| Max profit | 260 | 4 | 0–4 | 4 | 140 |
| Max revenue | 400 | 12 | 0–12 | 10 | 500 |
| Min cost | 400 | 12 | 0–12 | 0 | 100 |
| Max profit | 80 | 12 | Empty | None | None |
| Max profit | 100 | 12 | 0 | 0 | -100 |

Independent oracle: if B < 100 the set is empty; otherwise its largest element is K = min(12, A, floor((B−100)/20)). Best profit fleet is min(8,K), best revenue fleet is min(10,K), and minimum-cost fleet is 0. Exhaustively compare all 15,639 legal goal/budget/availability settings against this oracle.

## Acceptance contract

- Reuse the existing verified financial module; do not copy its browser formulas.
- Compare every candidate with both constraints; report violation amounts.
- Report infeasible with no numeric optimizer; preserve a feasible optimum with negative profit honestly.
- Invalid input preserves the last valid result with an explicit warning and disables solving until corrected.
- Keyboard, 320/375 px reflow, contrast, disclosure behavior and mathematical typesetting must pass.
- Publish after candidate CI passes; verify production, link OPT-001 → OPT-002 and update records.
- Preserve ADR-029's documented screen-reader compatibility boundary; no unperformed assistive-technology test is claimed.

## Completion checkpoint

All stages completed and published November 13, 2026 on `718c887e2cfa3a0eb48557c36a1c7c57b335f3a9`. See OPT_002_REVIEW.md for successful candidate/main CI, deployment and live-browser evidence. OPT-003 is not started.
