# Task Register — Optimization Learning Lab

**Updated:** November 13, 2026. Completion requires the recorded evidence and review scope.

| ID | Priority | Work item | State | Acceptance evidence / next action |
|---|---|---|---|---|
| BL-000 | P0 | Continuity documentation | Done | Versioned records and handoff |
| BL-001 | P0 | Repository/framework/build audit | Done | Local and CI production builds and architecture inventory |
| BL-002 | P0 | Routes and navigation | Done | Live homepage and published lesson/lab paths |
| BL-003 | P0 | Shared lesson layout and metadata | Done | Two rendered lessons, preview exclusion, responsive and keyboard review |
| BL-004 | P0 | LAB-A computational core | Done | Seven model tests, independent fixtures and exact proof |
| BL-005 | P0 | LAB-A interface | Done | Five UI tests and browser regression |
| BL-006 | P0 | Complete and release OPT-001 | Done | BL-006A/B/C and original release record; current regressions pass |
| BL-006A | P0 | OPT-001 design | Done | Instructional design |
| BL-006B | P0 | OPT-001 implementation | Done | Published lesson and Python |
| BL-006C | P0 | OPT-001 release review | Done | OPT_001_REVIEW.md; boundary ADR-029 |
| BL-007 | P0 | OPT-002–004 reviewed lessons | In Progress | OPT-002 released; OPT-003 in review; OPT-004 not started |
| BL-007A | P0 | OPT-002 instructional design | Done | Five objectives, aligned activity/certificate/assessment |
| BL-007B | P0 | OPT-002 implementation | Done | Full lesson, reusable/standalone model builder and Python |
| BL-007C | P0 | OPT-002 review and release | Done | [Release CI](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824236), [site checks](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824295), [deployment](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824146); direct live verification |
| BL-007D | P0 | OPT-003 instructional design | Done | OPT_003_INSTRUCTIONAL_DESIGN.md |
| BL-007E | P0 | OPT-003 lesson, LAB-B and Python | In Review | Local model/Python/build and 21 browser accessibility audits passed |
| BL-007F | P0 | OPT-003 release review | In Review | Candidate CI and production verification pending |
| BL-007G | P0 | OPT-004 instructional design | Ready | Next target after OPT-003 release; not started |
| BL-008 | P0 | LAB-B feasibility explorer | In Review | Implemented; 109,368 supported settings independently checked |
| BL-009 | P0 | Glossary/search | Proposed | 20 terms, cross-links and search tests required |
| BL-010 | P0 | Complete MVP review | Proposed | Remaining foundation lessons, LAB-B and glossary still required |
| BL-011 | P1 | LP region explorer | Proposed | Solver cross-check after MVP |
| BL-012 | P1 | Branch-and-bound explorer | Proposed | Verified tree trace after OPT-010 |
| BL-013 | P2 | TSP lab | Proposed | Tiny-instance oracle and tour validator |
| BL-014 | P2 | Prize-collecting lab | Proposed | Independent reward/cost checks |
| BL-015 | P3 | eVTOL dispatch lab | Proposed | Resource and assumption audit |
| AT-001 | P1 | Dedicated screen-reader compatibility | Ready | Not run; preserved under ADR-029 |

**Latest released source:** `718c887e2cfa3a0eb48557c36a1c7c57b335f3a9`. See OPT_002_REVIEW.md for its explicit accessibility boundary and test evidence. The model builder does not complete LAB-B, and passing axe is not a universal accessibility certificate.
