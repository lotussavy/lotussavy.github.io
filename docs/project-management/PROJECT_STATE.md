# Project State — Optimization Learning Lab

**Updated:** 2026-11-11  
**Milestone:** M2 — First verified interactive lab  
**Active task:** BL-005 — Interactive LAB-A UI (**In Review**)  
**Last fully completed:** BL-004 — Mathematical profit engine and exhaustive oracle

## Verified progress
| Task | Status | Evidence / remaining |
|---|---|---|
| BL-000 | Done | Continuity infrastructure |
| BL-001 | In Review | Core Jekyll source audit; build/deployment checks open |
| BL-002 | In Review | Homepage and navigation source committed; live route/browser tests open |
| BL-003 | In Review | Shared lesson framework committed; Jekyll render/QA open |
| BL-004 | Done | Exact model, 13 fixtures, 7 passing mathematical tests, analytical certificate |
| BL-005 | **In Review** | LAB-A UI, CSS, nonindexed preview, Node test harness committed; 78 direct UI assertions and five committed test cases (98 additional assertions) passed in simulated DOM; Jekyll/real browser still unverified |
| BL-006–BL-015 | Proposed | See TASKS.md; OPT-001 is not published |

## BL-005 files
- `_includes/optimization/labs/profit.html` — accessible, reusable interactive controls and chart
- `assets/js/optimization/profit-ui.js` — controller using verified BL-004 model only
- `assets/css/optimization-profit.scss` — scoped responsive theme
- `optimization/labs/profit-preview.md` — nonindexed editorial integration preview
- `scripts/optimization/profit-ui.test.cjs` — Node fake-DOM integration tests
- [LAB_A_UI.md](LAB_A_UI.md) — implementation, evidence, pending acceptance

## Verified simulation results
For each `n=0…12`, computed text and plotted selection match `OptimizationProfitModel`. At `n=4`: revenue $320, cost $180, profit $140. Exact optimum `n=8, P=$220`. Reset restores `n=4`; invalid inputs alert without changing last valid outcome. 78 assertions passed running actual GitHub source in a JavaScript isolate with a fake DOM. This is not a real browser test.

## Pending acceptance
- Run both committed Node test files and a Jekyll build in an appropriate environment.
- Check preview CSS/JS delivery, narrow mobile viewport, screen reader, keyboard behavior, contrast and production routing.
- Validate earlier BL-001/002/003 work; do not mark closed without evidence.
- Publish OPT-001 only under BL-006 after content and technical review.

## Next action
Complete BL-005 Jekyll + real-browser validation. Then develop OPT-001 using the existing verified engine and UI, preserving all teaching assumptions and review requirements. Never claim source commit alone is a live release.
