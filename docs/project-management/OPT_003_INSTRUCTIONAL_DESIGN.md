# OPT-003 — Instructional Design

**Date:** November 13, 2026. The owner requested moving on to OPT-003 after complete live releases of OPT-001/002. This session covers design, implementation, independent verification and publication, not a design-only handoff.

## Learning outcome and alignment

The beginner can test a two-variable candidate against every active rule, interpret their intersection, calculate slack/tightness, explain a resource substitution, and distinguish an infeasible candidate from an empty model. Five explanation-based knowledge checks map to those five objectives.

Prerequisite: OPT-002. The new example introduces two continuous activity-hour decisions rather than adding routing or an objective solver. Follow the established eleven-section lesson template: predict → explore → observe → define → formulate → verify → reproduce → diagnose → assess → continue.

## LAB-B model contract

- Continuous x/y hours, each in the included interval [0,10]. The domain is part of the model, not merely a chart crop. Native sliders sample half-hours without redefining the continuous feasible set.
- Time x+y ≤ T, T an integer 0–20; staffing 2x+y ≤ S, S an integer 0–30. Each rule has an independent on/off switch.
- Optional minimum x+y ≥ M, integer 0–20, initially off. It makes genuine model infeasibility teachable without negative capacities.
- Default T=8, S=10, M=6 off; candidate (3,4). No objective is supplied, so no “optimal” status or numerical optimizer is invented.
- All 8 switch combinations × 21 time limits × 31 staffing limits × 21 minimum values = 109,368 supported settings. Disabled limit values are stored but excluded from the model.

## Independent reference scenarios

| Scenario | Feasible set / selected result | Instructional purpose |
|---|---|---|
| Default | Polygon (0,0), (5,0), (2,6), (0,8); (3,4) feasible, staffing tight, time slack 1 | AND logic and tightness |
| Candidate (4,4) | Time passes, staffing fails by 2 | One passed rule is insufficient |
| Staffing off at (4,4) | Feasible on time boundary | Removing a rule can enlarge the set |
| Trade-off (4,2) | Feasible, same staffing as (3,4), one extra A-hour and two fewer B-hours | Resource substitution does not rank plans |
| Minimum on M=9, T=8 | Empty | Contradictory rules, not just a failed point |
| Minimum on M=T=8, S=10 | Segment (0,8) to (2,6) | Zero area can be nonempty |
| T=0, minimum off | Singleton (0,0) | Exactly one feasible point |

## Implementation and acceptance

Pure immutable JS model clips the bounded square with active half-planes and explicitly retains lower-dimensional sets. UI renders model outputs, including substitutions, slack/violation, line styles, coordinate alternatives and one live-status sentence. Keyboard-native sliders/checkboxes, no color-only status, labeled SVG, disabled-controls/static fallback, readable mobile tables and reduced motion are required.

The independent JS oracle solves every pair of boundary equations and substitutes the intersections into all rules for every supported setting. Five candidate points per setting also receive direct substitution checks. The downloadable Python code independently uses Fraction and boundary intersections; its exact geometry is checked for 2,688 representative settings against an analytic capacity/dimension certificate. Do not claim exhaustive Python coverage.

Release gates: production Jekyll build/internal links; model/Python tests; previous lesson/lab regressions; dedicated OPT-003/LAB-B browser interactions; seven routes × three desktop/mobile viewports for axe/reflow/math; candidate CI before promotion; successful Pages deployment and observed production navigation/interactions. Dedicated screen-reader compatibility remains unexecuted AT-001 under ADR-029.

## Scope boundary

This completes the planned LAB-B constraint/feasibility explorer. LP objective geometry, solvers, sensitivity prices, integer lattice algorithms and formal multiobjective/Pareto optimization remain later topics. OPT-004 is the next lesson and is not implemented here. M3/MVP still require OPT-004, glossary/search and the remaining acceptance review.
