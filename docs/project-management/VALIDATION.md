# Current Validation Checkpoint — OPT-002 / November 13, 2026

**Released source:** `718c887e2cfa3a0eb48557c36a1c7c57b335f3a9`. This checkpoint supersedes earlier pending OPT-002 statements.

- Nineteen Node tests and three Python tests passed. Both implementations match independently derived capacity/vertex certificates over all 15,639 supported models. Downloadable and displayed Python code match exactly.
- Local production Jekyll build passed. Same-site validation passed on 106 HTML pages and 4,219 links/assets. Existing OPT-001/LAB-A regressions passed.
- OPT-002 browser checks passed on lesson and standalone routes: seven reference models, simultaneous constraint handling, invalid inputs, row values, keyboard, disclosures, math, 320 px layout and disabled-controls/no-JavaScript fallback.
- Fifteen WCAG-tagged axe/reflow checks passed: five routes × 1280/375/320 px. No renderer errors, raw TeX or page overflow. Direct browser inspection verified all 38 MathJax passages and assistive MathML alternatives.
- [Main Optimization validation: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824236); [site-wide workflow: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824295); [Pages deployment: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824146). Identical candidate runs 43484481890 / 43484481886 passed before promotion.
- Production navigation and budget interaction were observed directly. Dedicated screen-reader/device testing remains unexecuted AT-001, as defined by ADR-029.
- OPT-002 is complete; OPT-003 remains unstarted.

---

# Current Validation Checkpoint — November 13, 2026

**Released source:** `f732ad071dfcdc0f9f02c3e35ab72492b494c775`. Earlier pending statements below describe historical checkpoints and are superseded for this release by the following evidence.

- Exact earlier failure recovered from job `130775351326`: two robots tags caused the strict-mode browser exception. Removed the duplicate; subsequent testing exposed and repaired mobile equation overflow.
- Twelve Node model/UI tests passed with zero failures. Python printed fleet 8 / profit $220; the public download matches the tested file. Independently compared all 13 generated table rows with the fixed fixture.
- Local `JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter` passed under Ruby 3.3.8. The same-site checker passed on 104 HTML pages and 4,138 references. Local Node was v24.22.1 and Python was 3.12.14; CI uses its recorded versions.
- Browser review and the release workflow verified the simulator, 11 lesson sections, disclosures, all 23 rendered math passages, keyboard, mobile reflow, published metadata and sitemap/template status.
- Nine open-disclosure axe audits (three routes at 1280/375/320 px) passed. No WCAG-tagged violations, page overflow, raw TeX or MathJax errors were reported.
- [Optimization validation run 43479191871: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479191871); job `132069495761` belongs to the also-passing identical candidate run `43478771860`.
- [Site-wide validation run 43479192207: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479192207).
- [Pages deployment run 43479191240: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479191240). Direct production browser observation confirmed homepage lesson navigation, single indexable robots metadata, 23 MathML alternatives, the legacy redirect and the optimum result.
- **Not executed:** dedicated NVDA/VoiceOver/Orca compatibility. This remains AT-001 under ADR-029, not a passed test or a universal accessibility certificate.
- **Handoff:** BL-001–006 complete in the recorded scope; OPT-002 not started.

---

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

## BL-006C — OPT-001 release review (2026-11-11)

**Detailed results:** [OPT_001_REVIEW.md](OPT_001_REVIEW.md). **Decision: NO PUBLICATION YET.**

- **Mathematics:** Recomputed all 13 feasible integers; unique profit optimizer n=8/P=220; independent certificate P(n)=220−5(n−8)². Revenue at n=10 is 500 versus 480 at n=8 while profit is lower (200 versus 220). Synthetic assumptions accurately distinguished from actual fleet economics.
- **Instructional:** Eleven sections, five learning objectives, 158-word introduction, four explanatory knowledge checks and optional proof. No premature OPT-002 navigation.
- **Citation audit:** MIT OCW 15.053 2013 Lecture 1 PDF and Stanford Boyd/Vandenberghe official book page found/reviewed; appropriate scope. No evidence the synthetic coefficients were sourced from real data.
- **Markup fix:** Stylesheet link formerly nested in LAB-A section moved to document head, conditional on `page.labs contains 'profit-playground'`; removed nested link.
- **Added browser gate:** `scripts/optimization/opt001-browser.test.cjs` executed by `.github/workflows/optimization-lab-validation.yml` after build. Asserts 200/noindex/11 headings/LAB-A/quiz disclosures/MathJax/keyboard/375px/low-motion and absence of JS errors.
- **Source confirmation:** GitHub readback checks verified new files, conditional CSS and script wiring; new test JS parsed without syntax errors. No claim that Chromium test executed.
- **Unverified:** Latest GitHub Actions run and generated Jekyll/MathJax output; manual NVDA/VoiceOver, WCAG contrast measurements, cross-browser QA and explicit release approval. Web verifier could not retrieve public lesson URL, which is not proof of a broken route.
- **Status:** BL-006C **In Review** and OPT-001 remains draft/noindex/unlisted. No publication.

## BL-006B — OPT-001 full non-indexed draft (2026-11-11)

**Changes committed:**
- `optimization/learn/foundations/what-is-optimization.md` — complete draft, eleven learning sections, synthetic case, exact proof, LAB-A include and four answer-feedback disclosures.
- `scripts/optimization/opt001_example.py` — runnable Python 3.10+ standard-library example.
- `_layouts/default.html` — output `<meta name="robots" ...>` when front matter provides `page.robots`; conditionally include MathJax for optimization lesson layouts.
- `.github/workflows/optimization-lab-validation.yml` — run Python example; assert generated draft HTML, noindex and embedded LAB-A.

**Verified:**
- Ten checks against GitHub readback passed: lesson ID/layout, draft/noindex/sitemap flags, existing LAB-A include, eleven sections in expected order, disclosure Q&A structure, research references, no premature next-lesson link, robots meta instruction, lesson-scoped MathJax instruction and updated CI checks.
- Standalone Python script executed locally and passed all assertions; printed `Optimal fleet: 8 vehicles` and `Maximum profit: $220`. Exact script local Git blob `8919283fb9ea5bac793910395c2fad2ea694cf4c` matches connected GitHub's blob SHA.
- Mathematical cases in the draft are consistent with the already verified LAB-A formulas and exact algebraic identity.
- Introductory references were looked up at official MIT OpenCourseWare and Stanford author-hosted sites.

**Not verified:** Latest GitHub Actions green result after the new CI checks; actual generated HTML and CSS; real rendered MathJax formulas; collapsible details rendering; mobile/keyboard/screen-reader, human academic copy review and release link. These belong to **BL-006C**.

**Status:** BL-006B **Done as draft implementation only**. Article is committed on `main` at a stable direct URL but intentionally not indexed or linked as a released lesson. `math_reviewed`, `code_verified`, `accessibility_reviewed` remain false pending editorial acceptance even though isolated code was executed.

## BL-006A — OPT-001 instructional design verification (2026-11-11)

- **Artifact:** `docs/project-management/OPT_001_INSTRUCTIONAL_DESIGN.md`; committed `be1e62086cd59defdc02d31b7e228b32d74b083e`.
- **GitHub readback:** Passed; 15,287-character Markdown design artifact available on `main`.
- **Nine content checks:** Passed: OPT-001 ID, five learning objectives, required article sections, correct n=8/n=10 teaching contrast, analytical certificate, noindex future draft, explicit out-of-scope full article, accessibility and synthetic-data integrity.
- **Numerical alignment:** design uses the existing LAB-A reference values; no new computational model or numerical tests introduced.
- **Out of scope / unverified:** Full OPT-001 Markdown lesson, Jekyll build of that future page, interactive quiz, external bibliography verification, human editorial review and publication.
- **Status:** BL-006A **Done** as an instructional design milestone, **not** a published or reviewed lesson.

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
