# Project Changelog

## 2026-11-11 — BL-006B complete OPT-001 draft
- **Created:** `optimization/learn/foundations/what-is-optimization.md` as a draft lesson (noindex/nofollow, sitemap false) with all required conceptual, experiment, mathematical, Python and review sections.
- **Reused:** LAB-A profit include unchanged, avoiding duplicate solver or UI formulas.
- **Added:** Versioned Python reproduction under `scripts/optimization/opt001_example.py`, executed with output n=8/P=220.
- **Fixed:** Shared layout now honors `page.robots`; lesson-specific MathJax load; Markdown inside knowledge-check disclosures.
- **Extended CI:** Python reproduction and Jekyll output/noindex checks for the draft.
- **Verified:** GitHub source readback and ten structural checks; exact Python file locally executed, matching GitHub blob.
- **Not verified:** New CI run, browser-rendered equations and accessibility. BL-006C remains the release gate.
- **No publication:** No homepage OPT-001 link, no `published` status, no OPT-002 work.


## 2026-11-11 — BL-006A OPT-001 instructional design
- **Added:** `docs/project-management/OPT_001_INSTRUCTIONAL_DESIGN.md` with target audience, five aligned objectives, timed storyboard, activity sequence, rigorous mathematics, misconceptions and four planned knowledge checks.
- **Verified:** GitHub readback and nine structural/content checks.
- **Scope limit:** No lesson page, new UI or publication created.
- **Status:** BL-006A Done (instructional design only). BL-006B complete lesson drafting is a future daily milestone.
- **Commit:** `be1e62086cd59defdc02d31b7e228b32d74b083e`.


## 2026-11-11 — LAB-A link added to Optimization homepage

- **Fixed:** Visitors can navigate to the existing interactive LAB-A development preview from the Optimization homepage instead of typing the URL manually.
- **Changed:** Added top-of-page and lab-section call-to-action links in `optimization/index.md`; corrected outdated "not yet active simulator" copy.
- **Verified:** GitHub readback confirms both URLs use Jekyll `relative_url`; preview disclosure retained.
- **Pending:** Live deployment and click-through confirmation.
- **Commit:** `74ea98a2538c2b5ca4724eea1ab7675b810386e3`.


## 2026-11-11 — CI Ruby setup failure diagnosis and compatibility fix
- User-provided GitHub Actions screenshot: all four workflow runs failed; latest `verify-lab` job passed checkout, Node setup and Node mathematical/UI tests, then failed at **Set up Ruby and Bundler**. Jekyll/build/Chromium steps were skipped.
- GitHub source check: workflow used `ruby-version: '3.1'` while `Gemfile.lock` resolves `activesupport (8.1.3)`, which requires Ruby >= 3.2 according to RubyGems. **This is a verified incompatibility**, though the exact step log was not provided, so additional errors remain possible.
- Changed Ruby version to `3.3` in `.github/workflows/optimization-lab-validation.yml`; commit `690972daa6d5fc92c042eb19a1ad79c5fbe0fe87`.
- Node test step verified passed via screenshot. **New workflow execution and downstream Jekyll/Chromium tests are not yet verified**. BL-005 remains In Review.
- Next: inspect the new GitHub Actions run; if setup passes, review build and browser results, address failures one at a time.


## 2026-11-11 — BL-005 Chromium acceptance-test gate
- **Added:** `scripts/optimization/profit-browser.test.cjs`, testing the generated preview in Playwright Chromium.
- **Updated:** GitHub Actions to install browser tooling, serve generated Jekyll site and run Chromium tests.
- **Source verification:** GitHub readback and browser-test JavaScript syntax passed.
- **Still open:** Successful CI run, Jekyll-generated files, actual Chromium results, production route, screen-reader manual QA.
- **Decision:** Retain BL-005 **In Review**; do not advance to OPT-001 publication.


## 2026-11-11 — BL-005 daily verification infrastructure
- **Added:** GitHub Actions workflow to run Node profit model/UI tests, build Jekyll, and smoke-check generated Lab assets.
- **Added:** `DAILY_TARGETS.md` to enforce one primary working milestone per day and prevent rushing into full OPT-001.
- **Verified:** Workflow and daily plan committed and readable; no combined commit statuses available.
- **Unverified:** Actual workflow run/result, live Lab routes, browser/keyboard/screen-reader QA; local Bundler/Jekyll and GitHub network unavailable.
- **Status:** BL-005 still In Review; BL-006 deliberately not started.
- **Next day:** Check Actions outcome and actual page/interaction behavior, repair only concrete failures.


## 2026-11-11 — BL-005 profit optimization interactive simulator
- **Implemented:** Reusable profit lab Jekyll include, scoped stylesheet, source-of-truth-driven DOM controller, and noindexed lab preview page.
- **Tested:** 78 runtime assertions against actual GitHub JS in simulated DOM; full range of feasible inputs, chart values, Find optimum, Reset and invalid input.
- **Pending:** Node command for new test file, Jekyll rendering, live deployment, real browser/mobile/keyboard/screen-reader checks.
- **Status:** In Review; LAB-A not publicly released and OPT-001 is not yet published.
- **Documentation:** Added LAB_A_UI.md and updated project state, validations, decisions and backlog.

## 2026-11-11 — BL-004 profit optimization mathematical core
- **Added:** `assets/js/optimization/profit-model.js` (browser/Node deterministic engine), `scripts/optimization/profit-fixtures.json` (13 independently fixed candidates), `scripts/optimization/profit-model.test.cjs` (seven test suites), and `docs/project-management/LAB_A_MODEL.md` (API and reproducibility contract).
- **Validated:** `node --test scripts/optimization/profit-model.test.cjs` locally with 7/7 passes; matched committed GitHub file lengths/hashes; passed browser-global smoke test.
- **Mathematics:** Unique exact optimum at `n=8`, `P=220` illustrative USD; separate completing-the-square certificate.
- **Status:** BL-004 **Done**. No LAB-A UI or published OPT-001 lesson.
- **Next:** BL-005 UI implementation; pending BL-002/003 Jekyll and browser verifications stay open.

## 2026-11-11 — BL-003 reusable lesson framework
- **Implemented:** Jekyll `optimization-lesson` layout, shared header/footer includes, scoped stylesheet, non-indexed lesson preview and authoring guide.
- **Shared layout:** Conditionally loads `optimization-lesson.css` for lesson pages only.
- **Source verification:** Seven file readbacks and 13 source-level assertions passed.
- **Not verified:** Jekyll build, generated CSS, rendered preview, accessibility/browser QA and live deployment.
- **Status:** BL-003 In Review pending build and browser verification.
- **Next:** Validate generated preview; then BL-004 computational model and oracle.

## 2026-11-11 — Optimization Lab navigation discoverability
- **Changed:** Added `Optimization Lab` in `_data/navigation.yml` between Research and Publications, and in shared footer of `_layouts/default.html`.
- **Rationale:** Visitors should discover the Lab from existing website navigation, not only by typing its URL.
- **Source commits:** `5dce6aaf4535dbb7f76e702d62beebc8fb4516ca` and `af85c0d4c63da2cff234cd44db13438f09e0c0f2`.
- **Pending:** Verify published navigation and `/optimization/` HTTP route; full Jekyll build and browser QA remain unverified.

## 2026-11-11 — Optimization Lab landing page (BL-002)
- **Changed:** Added `optimization/index.md` Jekyll landing page with existing design identity, six curriculum paths, interactive experience-level recommender, foundational learning philosophy and static lab preview.
- **Commit:** `07d85b68154f2a6ce12fc39f4bdb5980e824f66b` (page source).
- **Verified:** File exists on `main`; source front matter, responsive CSS, ARIA controls and links checked.
- **Not verified:** Jekyll production build, GitHub Pages deployment, browser behavior, mobile rendering.
- **Navigation:** Initially left unchanged; navigation was subsequently added in a separate commit (see entry above).
- **Status:** BL-002 In Review.
- **Next:** Verify Pages deployment/build and route, then add nav link and finalize acceptance.

## 2026-11-11 — Core website architecture audit (BL-001)
- **Changed:** Added `ARCHITECTURE_AUDIT.md`; updated project status, tasks, decisions and validation ledger.
- **Verified:** Jekyll theme, layout, navigation, SCSS and existing client-side interactive patterns by direct GitHub reads.
- **Not verified:** clean build, workflow and deployment, browser regression, complete file tree.
- **Public site:** No Lab pages or public navigation changes.
- **Next:** BL-002 public route prototype with Jekyll build and deploy checks.

## 2026-11-11 — Continuity infrastructure (BL-000)
- Added the complete Optimization Lab Blueprint v1.0 as the canonical Markdown master.
- Added project-state handoff, task register, decisions, validation ledger, and continuation instructions.
- Documented repository/public-visibility policy and excluded project documentation from Jekyll build.
- No public Optimization Lab page or simulator was created.
- Next: BL-001 architecture audit.

## Changelog entry template
### YYYY-MM-DD — [task / milestone]
- **Changed:**
- **Verified:**
- **Not verified / blockers:**
- **Commit or reference:**
- **Next action:**
