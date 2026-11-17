# Task Register — Optimization Learning Lab

**Updated:** November 17, 2026. Completion requires the recorded evidence and review scope.

| ID | Priority | Work item | State | Acceptance evidence / next action |
|---|---|---|---|---|
| BL-000 | P0 | Continuity documentation | Done | Versioned records and handoff |
| BL-001 | P0 | Repository/framework/build audit | Done | Local and CI production builds and architecture inventory |
| BL-002 | P0 | Routes and navigation | Done | Live homepage and published lesson/lab paths |
| BL-003 | P0 | Shared lesson layout and metadata | Done | Four rendered lessons, preview exclusion, responsive and keyboard review |
| BL-004 | P0 | LAB-A computational core | Done | Seven model tests, independent fixtures and exact proof |
| BL-005 | P0 | LAB-A interface | Done | Five UI tests and browser regression |
| BL-006 | P0 | Complete and release OPT-001 | Done | BL-006A/B/C and original release record; current regressions pass |
| BL-006A | P0 | OPT-001 design | Done | Instructional design |
| BL-006B | P0 | OPT-001 implementation | Done | Published lesson and Python |
| BL-006C | P0 | OPT-001 release review | Done | OPT_001_REVIEW.md; boundary ADR-029 |
| BL-007 | P0 | OPT-002–004 reviewed lessons | Done | OPT-002/003/004 released, with all earlier regressions retained |
| BL-007A | P0 | OPT-002 instructional design | Done | Five objectives, aligned activity/certificate/assessment |
| BL-007B | P0 | OPT-002 implementation | Done | Full lesson, reusable/standalone model builder and Python |
| BL-007C | P0 | OPT-002 review and release | Done | [Release CI](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824236), [site checks](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824295), [deployment](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824146); direct live verification |
| BL-007D | P0 | OPT-003 instructional design | Done | OPT_003_INSTRUCTIONAL_DESIGN.md |
| BL-007E | P0 | OPT-003 lesson, LAB-B and Python | Done | Full lesson, reusable/standalone lab and independent Python; all checks passed |
| BL-007F | P0 | OPT-003 release review | Done | [Validation](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43499389410), [site checks](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43499389515), [deployment](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43499387957); direct live verification |
| BL-007G | P0 | OPT-004 instructional design | Done | Five aligned objectives, independent proofs and assessments |
| BL-007H | P0 | OPT-004 lesson and comparator | Done | Full lesson, reusable/standalone comparator, Python and browser verification |
| BL-007I | P0 | OPT-004 review and release | Done | [Validation](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44180283470), [site checks](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44180283444), [deployment](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44180283070); public interaction verified |
| BL-008 | P0 | LAB-B feasibility explorer | Done | 109,368 settings independently checked; area/line/point/empty cases and browser controls verified |
| BL-009 | P0 | Glossary/search | Ready | Next: minimum 20 terms, cross-links and working browser-local search; not started |
| BL-010 | P0 | Complete MVP review | Proposed | Four lessons and LAB-A/B are live; glossary/search and remaining start/concept/editorial requirements still needed |
| BL-011 | P1 | LP region explorer | Proposed | Solver cross-check after MVP |
| BL-012 | P1 | Branch-and-bound explorer | Proposed | Verified tree trace after OPT-010 |
| BL-013 | P2 | TSP lab | Proposed | Tiny-instance oracle and tour validator |
| BL-014 | P2 | Prize-collecting lab | Proposed | Independent reward/cost checks |
| BL-015 | P3 | eVTOL dispatch lab | Proposed | Resource and assumption audit |
| AT-001 | P1 | Dedicated screen-reader compatibility | Ready | Not run; preserved under ADR-029 |

**Latest released source:** `1a6a36102a71f65fbba7549b8fd6ba119e682fab`. See OPT_004_REVIEW.md for evidence and the explicit accessibility boundary. AT-001 remains unexecuted. M3/MVP remain in progress; BL-009 is next.
