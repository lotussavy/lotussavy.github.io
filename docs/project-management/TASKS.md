# Task Register — Optimization Learning Lab

**Updated:** November 13, 2026. Completion refers to the recorded acceptance scope, not merely committed source.

| ID | Priority | Work item | Dependency | State | Acceptance evidence |
|---|---|---|---|---|---|
| BL-000 | P0 | Continuity documentation | None | Done | Versioned project records |
| BL-001 | P0 | Repository/framework/build audit | BL-000 | Done | Architecture inventory, local production build and site-wide CI |
| BL-002 | P0 | Optimization routes and navigation | BL-001 | Done | Live homepage, lesson, canonical lab and legacy redirect |
| BL-003 | P0 | Shared lesson layout and metadata | BL-001 | Done | Rendered lesson, noindexed template, responsive/keyboard/contrast review |
| BL-004 | P0 | LAB-A computational core | None | Done | Seven model tests; all 13 fixtures; independent square-completion proof |
| BL-005 | P0 | LAB-A interface | BL-003,004 | Done | Five UI tests, browser checks for all 13 choices, accessible table and live result |
| BL-006 | P0 | Complete and release OPT-001 | BL-005 | Done | A/B/C complete; live lesson and successful release CI |
| BL-006A | P0 | OPT-001 instructional design | Blueprint | Done | Objectives, storyboard and assessments |
| BL-006B | P0 | OPT-001 full lesson | BL-006A | Done | Full released narrative, mathematical proof, Python, four knowledge checks |
| BL-006C | P0 | OPT-001 release review | BL-006B | Done | [Passing release validation](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479191871), [site-wide checks](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479192207), [deployment](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479191240); review scope in ADR-029 |
| BL-007A | P0 | OPT-002 instructional design | BL-006C | Ready | Not started; next owner-directed session |
| BL-007 | P0 | OPT-002–004 reviewed lessons | BL-003,006 | Ready | Only OPT-001 currently released |
| BL-008 | P0 | LAB-B feasibility explorer | BL-003 | Proposed | Constraint-substitution fixtures and review required |
| BL-009 | P0 | 20-term glossary and search | BL-003 | Proposed | Cross-links and search checks required |
| BL-010 | P0 | Complete MVP release review | BL-006–009 | Proposed | Full foundational package remains outstanding |
| BL-011 | P1 | LP region explorer | MVP | Proposed | Independent solver cross-check |
| BL-012 | P1 | Branch-and-bound explorer | OPT-010 | Proposed | Verified bounds and tree trace |
| BL-013 | P2 | TSP lab | OPT-015 | Proposed | Tiny-instance optimum and tour validator |
| BL-014 | P2 | Prize-collecting routing lab | OPT-019 | Proposed | Independent reward/cost checks |
| BL-015 | P3 | eVTOL dispatch lab | Routing/scheduling | Proposed | Assumption and resource audit |
| AT-001 | P1 | Dedicated screen-reader compatibility session | Released lesson | Ready | Not run; test NVDA/Firefox and VoiceOver/Safari when those environments are available |

AT-001 is an explicitly recorded compatibility follow-up under ADR-029. Do not relabel it as passed or treat the axe result as a universal accessibility certificate.

**Released source:** `f732ad071dfcdc0f9f02c3e35ab72492b494c775`. See PROJECT_STATE.md and OPT_001_REVIEW.md for the exact release scope and evidence.
