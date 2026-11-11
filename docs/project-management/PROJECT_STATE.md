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

## Latest CI diagnosis
- Screenshot shows four failed workflow runs; the latest job passed checkout, Node setup, and mathematical/UI tests, then failed at Ruby/Bundler setup (later steps skipped).
- Workflow requested Ruby 3.1 while `Gemfile.lock` contains ActiveSupport 8.1.3, requiring Ruby >=3.2; changed workflow to Ruby 3.3 (commit `690972daa6d5fc92c042eb19a1ad79c5fbe0fe87`).
- A new run is required to confirm the fix. No build/Chromium pass is claimed.

## Next exact action
## 2026-11-11 — LAB-A homepage access fix

- User reported that LAB-A could only be opened by manually typing its URL.
- Updated `optimization/index.md`: added a prominent **Try LAB-A preview** link in the homepage hero and **Open Interactive LAB-A Preview** in the Interactive Learning Laboratories section.
- Both links use `{{ '/optimization/labs/profit-preview/' | relative_url }}` and lead to the existing non-indexed simulator preview.
- Homepage wording now distinguishes accessible development preview from unpublished full OPT-001.
- Commit: `74ea98a2538c2b5ca4724eea1ab7675b810386e3`.
- Source checks: both links, labels and development-preview disclaimer verified by GitHub readback.
- **Production publication and click-through not independently verified**; awaiting GitHub Pages deployment.



1. Check the [Optimization Lab validation Actions workflow](https://github.com/lotussavy/lotussavy.github.io/actions/workflows/optimization-lab-validation.yml) and its real execution logs. Run via GitHub's 'Run workflow' control if needed.
2. Fix any genuinely reported CI failures and record rerun evidence.
3. Verify live `https://lotussavy.github.io/optimization/labs/profit-preview/` on mobile/desktop, input via keyboard, visible chart, Find optimum, Reset and screen-reader announcements.
4. Record verification evidence and close BL-005 only after its acceptance criteria pass.
5. Start BL-006 as a **separate future daily target**, following the authoring guide.

## Primary references

[MASTER_BLUEPRINT.md](MASTER_BLUEPRINT.md) · [LAB_A_MODEL.md](LAB_A_MODEL.md) · [LAB_A_UI.md](LAB_A_UI.md) · [LESSON_AUTHORING.md](LESSON_AUTHORING.md) · [DAILY_TARGETS.md](DAILY_TARGETS.md) · [VALIDATION.md](VALIDATION.md)

**Continuity:** Do not imply any automatic background work or completed deployment merely because a workflow was committed.
