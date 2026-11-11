# Project State — Optimization Learning Lab

**Updated:** 2026-11-11  
**Working policy:** One main development milestone per working day; see [DAILY_TARGETS.md](DAILY_TARGETS.md).  
**Today's scope:** BL-005 validation infrastructure, not writing/publishing OPT-001.  
**Next daily target:** Validate the GitHub Actions build and LAB-A preview in an actual browser, then address any failures.

## Verified project status

| Task | Status | Evidence / outstanding |
|---|---|---|
| BL-000 | Done | GitHub project continuity documents |
| BL-001 | In Review | Jekyll architecture source audit complete; full build/publish verification still open |
| BL-002 | In Review | Landing page and navigation links committed; live browser verification still open |
| BL-003 | In Review | Shared lesson layout and preview source committed; Jekyll rendering still open |
| BL-004 | Done | Exact profit model, all 13 choices verified, prior 7/7 mathematical tests |
| BL-005 | In Review | Reusable UI and noindexed preview committed; simulated-DOM assertions passed; browser, Jekyll and assistive-technology acceptance pending |
| BL-006 | Proposed | Full OPT-001 editorial draft intentionally deferred to another daily milestone |

## Changes during 2026-11-11 daily QA milestone

- Created `.github/workflows/optimization-lab-validation.yml`, triggered on relevant pushes, pull requests, and manually, with Node 22 tests, Ruby/Jekyll production build, generated-page/assets/noindex checks and an optional generated-site artifact.
- Created [DAILY_TARGETS.md](DAILY_TARGETS.md) with an explicit single-target-per-day rule and rolling dates.
- GitHub readback verified both files. GitHub combined status lookup for workflow commit returned an empty status array; **no successful Actions run was established**.
- Direct external web checks for `/optimization/` and `/optimization/labs/profit-preview/` returned inaccessible via the web tool. This **does not prove the live routes are down**.
- Local environment has Ruby and Node but no Bundler/Jekyll commands; `git ls-remote` fails because GitHub cannot be resolved from the container. Full local build could not be run.
- No change to LAB-A computational formulas or published content; no OPT-001 lesson created.

## Release-gate strengthening
- Added a committed Chromium Playwright regression test for the generated LAB-A preview, plus a GitHub Actions stage to run it against a local server after the Jekyll build.
- GitHub readback and syntax inspection passed. No successful GitHub Actions execution or live-browser artifact could be retrieved; BL-005 remains **In Review**.
- The public preview route remained inaccessible through the external verifier, which does not establish a production failure.

## Next exact action

1. Check the [Optimization Lab validation Actions workflow](https://github.com/lotussavy/lotussavy.github.io/actions/workflows/optimization-lab-validation.yml) and its real execution logs. Run via GitHub's 'Run workflow' control if needed.
2. Fix any genuinely reported CI failures and record rerun evidence.
3. Verify live `https://lotussavy.github.io/optimization/labs/profit-preview/` on mobile/desktop, input via keyboard, visible chart, Find optimum, Reset and screen-reader announcements.
4. Record verification evidence and close BL-005 only after its acceptance criteria pass.
5. Start BL-006 as a **separate future daily target**, following the authoring guide.

## Primary references

[MASTER_BLUEPRINT.md](MASTER_BLUEPRINT.md) · [LAB_A_MODEL.md](LAB_A_MODEL.md) · [LAB_A_UI.md](LAB_A_UI.md) · [LESSON_AUTHORING.md](LESSON_AUTHORING.md) · [DAILY_TARGETS.md](DAILY_TARGETS.md) · [VALIDATION.md](VALIDATION.md)

**Continuity:** Do not imply any automatic background work or completed deployment merely because a workflow was committed.
