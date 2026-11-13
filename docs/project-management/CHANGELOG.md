# Project Changelog

## 2026-11-13 — OPT-003 and LAB-B released and verified live

- Released `ba76696b3caa7279957acadc974ea54005550a68` after [candidate Optimization checks](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43498940635) and [candidate site checks](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43498940862) passed. [Main Optimization](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43499389410), [main site-wide](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43499389515) and [Pages deployment](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43499387957) all succeeded.
- Added the complete Feasibility and Trade-offs lesson, reusable/standalone two-dimensional LAB-B, resource/minimum switches, candidate checks, slack, coordinate alternatives and explicit area/line/point/empty cases. Included five knowledge checks and an independent downloadable Python example.
- All 109,368 supported settings match the independent JS geometric oracle; 26 Node tests pass. Three new Python tests include 2,688 exact dimension certificates; previous regressions pass. Strict build, 4,297 local references, all browser suites and 21 accessibility/reflow audits pass.
- Observed the public lesson/lab and navigation, live constraint behavior and all 61 equations/MathML alternatives. Updated homepage, OPT-002 next link, blueprint, tasks and release records.
- BL-007D/E/F and BL-008 complete in the stated scope. AT-001 remains the compatibility follow-up; OPT-004 is next and has not been started. M3/MVP remain in progress.

## 2026-11-13 — OPT-002 released and verified live

- Released `718c887e2cfa3a0eb48557c36a1c7c57b335f3a9` after candidate checks passed; main-branch [Optimization validation](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824236), [site-wide checks](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824295) and [Pages deployment](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824146) all succeeded.
- Published the complete lesson, standalone Decision Model Builder and Python example. Updated homepage and OPT-001/002 previous/next navigation.
- Verified both implementations against independent certificates for 15,639 models each; 19 Node and three Python tests passed. All browser suites and 15 accessibility/reflow audits passed.
- Direct live-browser review confirmed learning links, all 38 rendered mathematical passages/MathML alternatives and budget $220 → n=6/profit $200. AT-001 remains the documented compatibility follow-up. OPT-003 is not started.


## 2026-11-13 — OPT-002 release candidate

- Added the complete lesson, Decision Model Builder, parameter/goal controls, exact feasibility/optimization statuses, explicit constraint violations, downloadable Python, five knowledge checks and linked lesson navigation.
- Both implementations match independent certificates across all 15,639 supported models; 19 Node and 3 Python tests passed locally. Production build and 4,219 local references passed.
- Repaired Markdown-sensitive set braces, new code-token contrast and keyboard table scrolling. Release CI and live verification are pending this checkpoint.
- Dedicated screen-reader compatibility remains the existing documented follow-up. OPT-003 is not started.

## 2026-11-13 — OPT-001 and LAB-A live release completed

- Released `f732ad071dfcdc0f9f02c3e35ab72492b494c775` after candidate build/browser checks passed, then observed successful main-branch validation and Pages deployment.
- Published the completed OPT-001 lesson, canonical profit playground, legacy redirect and homepage entry points. Added downloadable Python, the full 13-choice reference table, accessible code scrolling, improved contrast and repaired equation markup/layout.
- Release evidence: [Optimization checks](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479191871), [site-wide checks](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479192207), [deployment](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479191240) — all success. Production navigation, lesson status, equations and optimum result verified directly.
- Updated blueprint, task register, release review, validation and session handoff. BL-001–006 are complete within the explicit review boundary; dedicated screen-reader compatibility remains AT-001. OPT-002 has not been started.


## 2026-11-13 — OPT-001 release candidate and verified repairs

- Recovered the prior exact CI failure: two robots tags, rather than the previously suspected network timing, stopped the LAB-A browser test. Fixed at `2156fd213ed82386c1d201926e8a72d2ae5b439c`; deployment succeeded and the simulator browser test passed.
- That run exposed a separate 375 px OPT-001 equation overflow. Added contained equation scrolling, keyboard-accessible code scrollers, higher-contrast links/code/focus, and repaired a superscript that Markdown had parsed as emphasis.
- Prepared the completed lesson, canonical public lab, legacy redirect, homepage learning entry points, 13-row accessible reference table and downloadable Python reproduction.
- Local Jekyll production build, 12 Node tests, Python reproduction, same-site link validation and nine browser-based accessibility/reflow checks passed. All 23 mathematical passages have assistive MathML.
- Added repeatable CI accessibility audits. Final release CI and production verification remain pending at this checkpoint.
- Recorded the dedicated screen-reader compatibility test limitation and release review method in ADR-029. OPT-002 remains untouched.


## 2026-11-11 — Direct GitHub run diagnosis and isolated Chromium checks

- **Direct GitHub Actions evidence, obtained without user intervention:** workflow run [#21](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43093220722), ID `43093220722`, was completed with conclusion `failure`. Its job `verify-lab` passed Node model/UI tests, Python script, Ruby/Bundler, Jekyll build, output/asset checks and Chromium installation; only combined `Browser-test rendered profit simulator` step failed.
- **Original job log retrieval:** GitHub's job-logs connector returned `ReadTimeout`; artifact 146 MB also timed out. Therefore no exact exception text from #21 was recovered.
- **Action taken:** split combined Chromium test into separately reported `Browser-test LAB-A simulator` and `Browser-test OPT-001 lesson` steps, preserving nonzero exit codes. Commit `264d3226c51f8a51f292eccc5f1d0dc2457080d9`.
- **Diagnostics:** capture each test's complete stdout/stderr with `tee` and upload a small `optimization-browser-diagnostics` artifact including logs and rendered OPT-001/LAB-A HTML. Commit `e9fe2b57a6ddb0cc097a2193eb7d4a90c6f7b187`.
- **Reliability fix:** change LAB-A Playwright `page.goto` waiting condition from `networkidle` to `domcontentloaded`, avoiding dependency on all third-party HTTP requests falling idle; synchronous scripts are loaded before DOMContentLoaded. Commit `3b6ef1ed7380d6a97e8643d59ec704d1125c079d`.
- **Fresh GitHub API observation:** runs #22 (`43095585577`), #23 (`43095774023`) and #24 (`43095830880`) were still **queued** when last checked; they were **not successful** and no new browser-test result was available.
- **Publication remains blocked:** OPT-001 stays `draft`, `noindex,nofollow`, unlisted; BL-006C remains `In Review`. No OPT-002 work.
- **Next action when a queued run completes:** inspect job step conclusions directly through GitHub API, fetch small browser diagnostics artifact to identify exact failure, apply targeted fix and verify on a subsequent CI run. If an automated step passes, manual screen-reader/color-contrast acceptance still remains.


## 2026-11-11 — GitHub Actions repeated failures and deterministic browser-test repair

- User screenshot shows optimization-lab-validation workflow runs **#16–#20 failed**, including #20 after the accessibility/stylesheet assertions were added. Screenshot shows only run summaries, **not the failing job step or exception**; exact shared root cause remains unconfirmed.
- Independent source audit revealed a guaranteed mismatch in `scripts/optimization/opt001-browser.test.cjs`: previous selector `.ol-lesson-body details` selected **six** disclosures (five in the OPT-001 article plus one inside the reused LAB-A simulator) but asserted there were **five**. The browser test would fail when reaching this check even with correct HTML.
- Corrected the selector to restrict to lesson-originated disclosures containing a bold `summary`:
  `page.locator('.ol-lesson-body details').filter({ has: page.locator('summary strong') })`.
- Fix commit: `1cb1186bf593bb76614ea16d944dc737ed09a77e`.
- Verification: GitHub readback, JavaScript parse check passed; counted five lesson-source `<details markdown="1">` and one lab-source `<details>` independently. This supports the specific repair; **does not establish that it caused all five CI failures**.
- Outstanding: Let GitHub Actions complete new run, inspect exact failing step and error if red; confirm OPT-001 MathJax/browser outputs, keyboard, mobile and human accessibility before changing its draft/noindex status.
- Status: BL-006C **In Review**, no release, no OPT-002.


## 2026-11-11 — BL-006C OPT-001 technical and academic review
- **Reviewed:** Exact mathematical model, teaching sequence, official citations, draft metadata, quiz explanations and accessibility structure.
- **Fixed:** LAB-A stylesheet moved from nested section to shared page head for applicable lesson pages.
- **Added:** OPT-001 Playwright rendered-page regression and CI invocation (equations, disclosures, keyboard, mobile and robot meta checks).
- **Verified:** All relevant GitHub source readback checks and JavaScript syntax; independently recomputed model outcomes and exact optimizer; MIT/Stanford links reviewed.
- **Not verified:** Updated CI/Chromium run, Jekyll rendered route, MathJax output and manual screen-reader/contrast.
- **Decision:** **No publication**; BL-006C remains In Review. Next: capture CI/browser logs and manual accessibility evidence. OPT-002 not started.


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
