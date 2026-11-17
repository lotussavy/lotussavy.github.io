# OPT-004 — Instructional Design

**Date:** November 17, 2026. The owner requested completing the next step after OPT-003. Following the prior authorized release workflow, this includes design, implementation, verification and live publication of OPT-004.

## Outcome and alignment

A beginner can distinguish feasible, best recorded, local and global answers; separate an optimizer from its objective value; recognize ties; use a matching bound/feasible value as a certificate; and reconsider claims when the model changes. Five explanation-based knowledge checks align with five objectives.

Prerequisite: OPT-003. Follow the eleven-section lesson template with a 158-word introduction and prediction-first activity. The reusable comparator also has a standalone route. It is an OPT-004 activity, not the later LAB-C LP solver/geometry lab.

## Model and interaction contract

Maximize f(x) = max{6−(x−2)², 10−(x−8)²} on the continuous interval [0,U], with integer U = 0,…,10. Candidate controls sample x in half-steps on [0,10]; samples do not redefine the continuous domain. Candidate values outside [0,U] are arithmetic values but cannot compete for the best feasible score.

The initial comparison record contains 0,2,4, whose best feasible score is 6 at 2. The record is an explicit subset and does not establish global optimality. The full plotted objective supplies context but not a proof. Add/clear operations affect only the record. A separate Verify entire model action supplies the analytic certificate. Changing U invalidates it and rechecks all recorded points; moving only the candidate preserves it.

## Independent fixtures and proofs

| U | Global optimizer(s) | Optimal value | Purpose |
|---:|---|---:|---|
| 0 | 0 | 2 | Singleton feasible set |
| 1 | 1 | 5 | Constrained endpoint |
| 2–5 | 2 | 6 | First peak wins under a tighter rule |
| 6 | 2 and 6 | 6 | Two optimizers, one value |
| 7 | 7 | 9 | Higher branch cut off before its peak |
| 8–10 | 8 | 10 | Higher peak is feasible |

The browser bounds each quadratic separately at its peak clamped into [0,U]. Their larger bound is attained by each reported optimizer and covers every real feasible point. This is a continuous proof, not inference from the displayed samples. With U=10, x=2 is a strict local maximum but not global. With U=5, the endpoint x=5 is also a constrained local maximum while the global optimum remains 2.

The independent JS score oracle uses expanded piecewise polynomials separated at 14/3; the global oracle is the table above. Local classification uses one-sided derivative signs. Python independently checks interval endpoints, permitted peaks and the exact crossover using Fraction. Neither implementation claims a general nonlinear optimizer.

## Acceptance and review scope

- All 11 upper limits must match exact fixtures, all optimizers retained. Probe 11,011 candidate/limit combinations with independent piecewise arithmetic and local derivative checks. Check all 22,528 subsets of integer candidate points across limits for feasible ranking and ties; do not imply this enumerates every possible continuous record.
- Verify record deduplication, empty/no-feasible-record status, certificate invalidation, infeasible values, singleton and reset. Distinguish empty records from infeasible models.
- Native labeled sliders/buttons, shape/text alternatives, record table, exact numerical proof, one polite status, disabled-controls/static fallback and reduced motion are required.
- Build and link checks; previous regressions; new lesson/activity browser tests; nine routes × three viewports for axe/reflow/math; candidate CI before promotion; deployment and direct production verification.
- Preserve the explicit AT-001 dedicated screen-reader compatibility follow-up under ADR-029. Do not claim universal assistive-technology compatibility or full WCAG conformance.

## Handoff boundary

OPT-004 completes the four authored foundation lessons. M3/MVP still require BL-009 glossary/search and BL-010 overall acceptance review, including remaining foundation-package requirements. OPT-005 and LP/routing algorithms are not started here.

## Completion checkpoint

Implemented, reviewed and published on `1a6a36102a71f65fbba7549b8fd6ba119e682fab` after successful final candidate/main checks, deployment and direct public verification. See OPT_004_REVIEW.md for evidence and review limits. BL-009 glossary/search is the next unstarted task.
