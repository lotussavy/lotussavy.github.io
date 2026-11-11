# Validation Ledger — Optimization Learning Lab

Record **what was tested**, its expected/actual output, and evidence. Never report an unexecuted test as passed.

## BL-000 — Documentation infrastructure (2026-11-11)
- Confirmed Jekyll configuration, Gemfile, navigation file and public repository through connected GitHub reads.
- Created repository-level project-management docs from the original blueprint.
- Documentation readback and updated Jekyll exclusion are the acceptance checks.
- **Not run:** full Jekyll build, GitHub Pages deployment, browser regression, solver tests.

## BL-001 — Core source architecture inspection (2026-11-11)
- Direct GitHub reads: `_config.yml`, `Gemfile`, `_layouts/default.html`, `_data/navigation.yml`, `index.md`, `research.md`, `blog.md`, `_includes/home-merged.html`, `_includes/research-interactive-hub.html`, `_includes/head-custom.html`, and `assets/css/style.scss`.
- Verified: Jekyll theme/SEO configuration, shared layout, navigation loop, static front-matter routing patterns, source interaction styles and scripts, scoped responsiveness and motion support, exclusion of continuity documents.
- **Not tested:** clean build, actual GitHub Pages deployment, precise publishing workflow, entire repository tree, keyboard/browser QA or production route.
- Evidence: [ARCHITECTURE_AUDIT.md](ARCHITECTURE_AUDIT.md).
- Status: Source audit **passed**; full BL-001 acceptance **pending**.

## BL-002 — Landing page source validation (2026-11-11)
- **Committed file:** `optimization/index.md` at `07d85b68154f2a6ce12fc39f4bdb5980e824f66b`.
- **Source readback:** Passed; file present on `main`, front matter declares `layout: default` and `permalink: /optimization/`, with meaningful title and description.
- **Static source inspection:** Passed for scoped `ol-` CSS, 560px/850px responsive breakpoints, reduced-motion handling, native button/ARIA pressed state, five content sections, and JavaScript path-selection listener. No unpublished lesson links; first lab is labeled a static preview.
- **Navigation:** Main navigation and shared footer now link to `/optimization/`; source readback pending in this session. Live rendered link and production routing not yet verified.
- **GitHub commit combined statuses:** Returned empty statuses; **not evidence of CI success**.
- **Commit workflow lookup:** Returned empty PR-triggered workflow runs; **not evidence of Pages deployment status**.
- **Public URL check:** Request via available browser could not access `https://lotussavy.github.io/optimization/`. Thus the route is **not verified live**.
- **Local build:** Not run; container has Ruby but no available `bundle` or `jekyll` command, and network access to fetch repository/dependencies was unavailable.
- **UI/browser QA:** Not run; keyboard, mobile, JavaScript behavior and production render remain pending.
- **Status:** BL-002 **In Review**, not Done; finish build/deploy checks before navigation change.

## BL-003 — Reusable lesson template source verification (2026-11-11)
- **Source committed:** `_layouts/optimization-lesson.html`, `_includes/optimization/lesson-header.html`, `_includes/optimization/lesson-footer.html`, `assets/css/optimization-lesson.scss`, `optimization/learn/template-preview.md`, `docs/project-management/LESSON_AUTHORING.md`. Also updated `_layouts/default.html` for conditional CSS.
- **GitHub readback:** Confirmed all seven source files.
- **13 source assertions:** Passed: expected lesson layout/front matter, stable preview permalink, noindex, sitemap false, section headings, nested layout, common includes, parent layout stylesheet conditional, SCSS front matter, responsive breakpoints, reduced-motion CSS and review flags.
- **Jekyll execution:** NOT RUN. Bundler/Jekyll binaries unavailable in current environment; repository cloning from GitHub blocked by network DNS.
- **Live browser:** NOT VERIFIED. Public `/optimization/` and `/optimization/learn/template-preview/` URLs returned inaccessible in web verifier; no claim that deployment failed or succeeded.
- **Outstanding acceptance:** Clean `bundle exec jekyll build`, preview HTML/CSS generated, browser/keyboard/mobile and review metadata tests. BL-003 remains **In Review**.
- **Note:** This only creates a reusable editorial preview, not OPT-001 or LAB-A. Neither algorithm nor numerical outputs are claimed.

## BL-004 — Mathematical core and independent verification (2026-11-11)

**Sources:**
- `assets/js/optimization/profit-model.js`
- `scripts/optimization/profit-fixtures.json`
- `scripts/optimization/profit-model.test.cjs`
- [LAB_A_MODEL.md](LAB_A_MODEL.md)

**Exact test execution:** `node --test /mnt/data/bl004/scripts/optimization/profit-model.test.cjs` on Node.js `v22.16.0`; result **7 tests passed, 0 failed**. The local files were then compared with the GitHub readback by byte length and FNV-1a hash; all three matched (below). The suite is reproducible from repository root with `node --test scripts/optimization/profit-model.test.cjs`.

| GitHub path | Bytes / chars | FNV-1a 32-bit | Match |
|---|---:|---|---|
| `assets/js/optimization/profit-model.js` | 2931 | `a164a192` | Yes |
| `scripts/optimization/profit-fixtures.json` | 433 | `da7d3fcd` | Yes |
| `scripts/optimization/profit-model.test.cjs` | 3522 | `9cc3acbc` | Yes |

**Coverage and results:**
1. All **13** feasible integer decisions independently checked against fixed revenue/cost/profit tuples.
2. Endpoints `0` and `12`, out-of-bounds integers, noninteger, string, null, NaN, infinities and other wrong types rejected appropriately.
3. Exhaustive sorted set without duplicate candidates.
4. Unique reported optimizer `n=8`, `P=220`, candidate count 13, exact-enumeration status.
5. Independent algebraic certificate: `P(n)=220−5(n−8)²`.
6. Revenue minus cost = profit for all feasible integers.
7. Immutability/determinism; separate browser-like VM smoke test of `OptimizationProfitModel.solveExact()` passed.

**Task disposition:** BL-004 **Done** (source and mathematical tests complete). This does **not** constitute a browser GUI, a verified Jekyll build, or a published lesson. BL-002/003 browser and build acceptance remain open.

## BL-005 — Interactive profit simulator source and runtime (2026-11-11)
- **Committed:** `_includes/optimization/labs/profit.html`, `assets/css/optimization-profit.scss`, `assets/js/optimization/profit-ui.js`, `optimization/labs/profit-preview.md`, `scripts/optimization/profit-ui.test.cjs`, and [LAB_A_UI.md](LAB_A_UI.md).
- **Actual runtime:** Executed committed BL-004 model and BL-005 UI JavaScript via V8 with a simulated DOM, passing **78 assertions** for initialization, all 13 fleet settings, SVG highlighted selection, updated accessible descriptions, profit/cost/revenue, Find optimum, Reset, invalid-input alerts, recovery and missing-control errors.
- **Numerical oracle:** All values came from the verified BL-004 model; optimum = 8 vehicles, $220 profit.
- **Additional test-file execution:** Executed the five committed `profit-ui.test.cjs` test cases in V8 with compatible `node:test` / `assert` shims against the committed model and UI: **5 passed, 98 test assertions**, without invoking the native Node test runner.
- **Reproducible Node test:** Added `scripts/optimization/profit-ui.test.cjs`, but that file's Node command was **not executed** during this turn. Run with `node --test scripts/optimization/profit-ui.test.cjs`.
- **Source-level accessibility:** Native range/label/buttons, live region, SVG title/description, alert semantics, reduced motion and responsive CSS.
- **Outstanding:** Real browser and screen-reader behavior, 375px QA, Jekyll build/asset deployment, page status; external web check returned both `/optimization/` and preview route inaccessible.
- **Disposition:** **BL-005 In Review** until remaining verification passes. A simulator component exists in source, but OPT-001 remains unpublished.

## November 11 daily validation-infrastructure milestone (BL-005 remains In Review)

- **Committed workflow:** `.github/workflows/optimization-lab-validation.yml`, commit `d3654ce3f163f86e284d6a9de291323d48c614cb`.
- Workflow configured to run `node --test scripts/optimization/profit-model.test.cjs scripts/optimization/profit-ui.test.cjs`, a Jekyll production build, generated page/asset checks, and preview noindex and documentation-exclusion checks.
- Workflow file confirmed readable from GitHub. Combined statuses for its initial commit were **empty**, not a passing result. Workflow logs/execution outcome **unverified**.
- **Web verifier:** Couldn't access `https://lotussavy.github.io/optimization/` or `https://lotussavy.github.io/optimization/labs/profit-preview/`; the verifier did not establish a live-site success or failure.
- **Local machine:** Ruby exists, Bundler/Jekyll binaries missing; GitHub remote resolution failed; no local build was executed.
- **Outstanding:** Confirm actual Actions run and log output, live browser keyboard/mobile/screen-reader QA, production routing and asset delivery.
- **Daily scope:** Created `DAILY_TARGETS.md` and deferred OPT-001 editorial drafting to a later daily milestone. BL-005 remains **In Review**.


## BL-005 release-gate follow-up (2026-11-11)

**Implemented and committed:** `scripts/optimization/profit-browser.test.cjs` (Playwright Chromium regression) and extended `.github/workflows/optimization-lab-validation.yml` to install Chromium, serve the generated Jekyll `_site` locally, and run that regression after Node tests, Jekyll build and artifact checks.

**Browser suite design:** HTTP 200 route; robots `noindex,nofollow`; initial values; all 13 independently listed revenue/cost/profit fixtures; selected SVG point; Find optimum; Reset; arrow-key interaction; 375px viewport and unexpected overflow; reduced motion; uncaught page errors.

**Verified during this turn:** GitHub readback of test/workflow; JavaScript syntax validation of committed browser test passed; Playwright package version `1.56.1` exists; input-range interaction uses explicit `input` event dispatch.

**Not verified:** Successful GitHub Actions workflow run or Jekyll artifact, actual Chromium execution, production GitHub Pages HTML/CSS/JS and accessibility with assistive technology. Public site could not be accessed through available web verifier; GitHub Actions status not observable as a completed run via available connector.

**Release decision:** BL-005 **In Review**, not Done. The automation is a test specification, not test-execution evidence. No OPT-001 publication work has been started.

**Next action:** Inspect the <https://github.com/lotussavy/lotussavy.github.io/actions/workflows/optimization-lab-validation.yml> run and exact logs; if successful, capture evidence and perform real-screen-reader QA. Otherwise repair the concrete failure and rerun. Mark BL-005 Done only after the acceptance criteria have evidence.

## 2026-11-11 — CI Ruby setup failure diagnosis and compatibility fix
- User-provided GitHub Actions screenshot: all four workflow runs failed; latest `verify-lab` job passed checkout, Node setup and Node mathematical/UI tests, then failed at **Set up Ruby and Bundler**. Jekyll/build/Chromium steps were skipped.
- GitHub source check: workflow used `ruby-version: '3.1'` while `Gemfile.lock` resolves `activesupport (8.1.3)`, which requires Ruby >= 3.2 according to RubyGems. **This is a verified incompatibility**, though the exact step log was not provided, so additional errors remain possible.
- Changed Ruby version to `3.3` in `.github/workflows/optimization-lab-validation.yml`; commit `690972daa6d5fc92c042eb19a1ad79c5fbe0fe87`.
- Node test step verified passed via screenshot. **New workflow execution and downstream Jekyll/Chromium tests are not yet verified**. BL-005 remains In Review.
- Next: inspect the new GitHub Actions run; if setup passes, review build and browser results, address failures one at a time.

## Required test categories for future features
## 2026-11-11 — Homepage navigation to interactive LAB-A

- `optimization/index.md` source committed at `74ea98a2538c2b5ca4724eea1ab7675b810386e3`.
- GitHub source readback verified **two** links resolving through `relative_url` to `/optimization/labs/profit-preview/`.
- Verified distinct CTAs in the hero and the interactive-labs section, with explicit development-preview status and unpublished OPT-001 disclosure.
- No real-browser click-through or deployed Jekyll build was observed for this latest commit. Keep that acceptance requirement open.
- **Status:** Source discoverability defect fixed; production verification pending.


1. **Mathematical unit and property tests:** objective, constraints, boundary cases.
2. **Independent oracle:** exhaustive enumeration or trusted solver on tiny instances.
3. **UI integration:** controls, plots, numbers and narrative agree.
4. **Accessibility:** keyboard, readable labels, contrast, motion preferences.
5. **Responsive/performance:** desktop, narrow mobile, dependency weight.
6. **Publishing:** links, metadata, citations, site build, deployed route.
7. **Regression:** retained results after changes to UI or libraries.

## First lab oracle (illustrative teaching model)
- n integer in [0,12]; revenue = 100n - 5n²; cost = 20n + 100; profit = 80n - 5n² -100.
- n=0 => -100; n=4 => 140; n=8 => 220; n=12 => 140.
- Exhaustive enumeration confirms maximum at n=8 and profit=220.
- **Status:** Reference expected results only; automated test implementation not yet written.

## Test log format
| Date | Task | Type | Command or method | Expected | Actual | Status | Evidence |
|---|---|---|---|---|---|---|---|
| 2026-11-11 | BL-000 | Repository inspection | GitHub read `_config.yml`, `Gemfile`, `_data/navigation.yml` | Recognize baseline stack | Jekyll/GitHub Pages | Passed | GitHub source reads |

A passing repository read is not evidence of a successful production site deployment.
