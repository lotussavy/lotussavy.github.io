# Task Register — Optimization Learning Lab

Status vocabulary: **Proposed**, **Ready**, **In Progress**, **In Review**, **Blocked**, **Done**. Done requires specific evidence, not merely a draft.

| ID | Priority | Task | Dependency | Status | Acceptance evidence |
|---|---|---|---|---|---|
| BL-000 | P0 | Create continuity documentation and resumption procedure | None | Done | Canonical files in GitHub, readable, build exclusion recorded |
| BL-001 | P0 | Audit repository/framework/build/deployment | BL-000 | In Review | Source inventory in ARCHITECTURE_AUDIT.md; Jekyll build/deploy verification pending |
| BL-002 | P0 | Finalize /optimization/ routes | BL-001 source audit | In Review | Landing page and main/footer links committed; build/live-route/mobile QA pending |
| BL-003 | P0 | Shared article layout and metadata | BL-001 source audit | In Review | Layout/includes/CSS and nonindexed example committed; 13 source assertions passed; Jekyll render/browser review pending |
| BL-004 | P0 | LAB-A computational core and exhaustive tests | None | Ready | All n=0–12 test cases verified |
| BL-005 | P0 | LAB-A UI interaction and explanation | BL-003, BL-004 | Proposed | Keyboard/mobile, consistent result display |
| BL-006 | P0 | OPT-001 content and mathematical review | BL-005 | Proposed | Approved content review |
| BL-007 | P0 | OPT-002–004 lessons | BL-003 | Proposed | Four linked reviewed lessons |
| BL-008 | P0 | LAB-B constraint explorer | BL-003 | Proposed | Constraint fixtures pass |
| BL-009 | P0 | 20-term glossary and search | BL-003 | Proposed | Crosslinks and search work |
| BL-010 | P0 | MVP SEO/accessibility/release checklist | BL-006–009 | Proposed | Release QA report |
| BL-011 | P1 | LP feasible-region explorer | MVP | Proposed | Solver cross-check |
| BL-012 | P1 | Branch-and-bound explorer | OPT-010 | Proposed | Verified bounds/pruning trace |
| BL-013 | P2 | Draggable TSP lab | OPT-015 | Proposed | Tour validator, tiny-instance optimum |
| BL-014 | P2 | Prize-collecting route lab | OPT-019 | Proposed | Reward and cost cross-check |
| BL-015 | P3 | eVTOL dispatch lab | Scheduling + routing tracks | Proposed | Resource/model assumptions audited |

## Task record template
- **ID / owner / last update:**
- **Goal and dependencies:**
- **Files/paths touched:**
- **Changes made:**
- **Tests performed (command and result):**
- **Acceptance evidence (links/commits):**
- **Blockers and next action:**

Keep this list synchronized with PROJECT_STATE.md; the blueprint defines the complete lesson and lab registers.
