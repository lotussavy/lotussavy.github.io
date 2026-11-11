# BL-006C — OPT-001 Academic, Technical, Accessibility and Citation Review

**Review date:** 2026-11-11  
**Reviewed lesson:** `optimization/learn/foundations/what-is-optimization.md`  
**Milestone:** BL-006C  
**Disposition:** **In Review — NOT APPROVED FOR PUBLICATION**  
**Scope boundary:** Existing OPT-001 draft and reused LAB-A only. OPT-002 is not created or edited.

## 1. Decision and evidence standard

The full draft is substantially complete and passes source-level checks for scientific content, instructional structure, correct inputs, and intended publication status. This review fixed a verified HTML markup issue and added an automated rendered-page release gate. However, **the updated CI run, actual Jekyll-generated page, MathJax display, mobile browser execution, WCAG contrast, and manual screen-reader testing have not been independently verified**. Consequently, publication would overstate acceptance.

The draft retains:
- `lesson_status: draft`
- `robots: noindex,nofollow`, `sitemap: false`
- `math_reviewed: false`, `accessibility_reviewed: false`, `code_verified: false` (page-level flags are reserved for formal review completion)
- No homepage link labelling OPT-001 as a released lesson.

A direct URL remains possible because the draft is committed to a public GitHub Pages source repository. **Noindex is a request to search engines, not an access-control or confidentiality mechanism.**

## 2. Mathematical review

**Model definition:** integer fleet size `n ∈ {0,1,...,12}`, fixed single-period synthetic assumptions, revenue `R(n)=100n−5n²`, cost `C(n)=20n+100`, profit `P(n)=80n−5n²−100`.

**Exact independent algebraic certificate:**
```
P(n) = 80n - 5n² - 100
     = 220 - 5(n - 8)²
     <= 220 for every real n
```
At integer `n=8`, equality holds, proving this is the unique global maximizer on the feasible integer set.

**Independently recomputed anchors:**

| n | Revenue | Cost | Profit |
|---:|---:|---:|---:|
| 0 | 0 | 100 | -100 |
| 4 | 320 | 180 | 140 |
| 8 | 480 | 260 | **220** |
| 10 | **500** | 300 | 200 |
| 12 | 480 | 340 | 140 |

All thirteen values satisfy the completing-the-square identity; revenue peaks at n=10 (not 8), profit peaks uniquely at n=8. The problem is **nonlinear and discrete**, not a linear program. The distinction between feasible and optimal is described correctly. The slider is a visualization, not proof; full enumeration and the identity are proof.

**Limits of claim:** No passenger, routing, battery, charging, time, safety, availability, demand or real economics represented. Authors must preserve these limitations at publication.

**Math verdict:** Passed conceptual and algebraic source review. Does not certify browser typesetting.

## 3. Instructional and editorial review

- The draft contains all eleven required narrative sections, in order; the initial `In one minute` segment is 158 words including its learning-goal line (within the 100–160-word goal).
- Five measurable objectives align with prediction, the existing interactive experiment, definitions, proof and four knowledge-check explanations.
- Prediction-first learning flow is retained, followed by interpretation, formal language, model, exact solution, code and transfer.
- Strong central counterexample: revenue improves from 480 to 500 between n=8 and n=10 while profit drops from 220 to 200.
- Quiz answers are placed in four closed native `details` elements; an additional disclosure contains optional algebraic proof. Browser check will confirm disclosure rendering.
- The content does not overclaim a calibrated transportation model, operating fleet size, real revenue, or transfer of n=8 to real aircraft.
- The separate Python 3.10+ example and its source were previously executed and verified; the new workflow runs that script.
- The lesson intentionally does not link to nonexistent OPT-002 or call itself published.

**Editorial verdict:** Substantive content is ready for final rendered-page review; no content publication approval until rendering and accessibility verification.

## 4. Technical findings and corrections

### Fixed: stylesheet incorrectly nested in the lab section
**Finding:** `_includes/optimization/labs/profit.html` included a `<link rel="stylesheet">` inside the lab `<section>`, which is not the intended location for a stylesheet resource.

**Fix:** Move the LAB-A stylesheet link into `_layouts/default.html` inside the existing lesson-layout block, conditional on `page.labs contains 'profit-playground'`. Remove the nested link from the shared lab include. Both the OPT-001 draft and the existing LAB-A preview declare this lab in front matter.

**Why:** Keeps resource loading in the document head, avoids duplicate loads when the include is reused, and preserves the common source component.

### Added: rendered OPT-001 browser regression
**File:** `scripts/optimization/opt001-browser.test.cjs`, invoked from `.github/workflows/optimization-lab-validation.yml`.

**Checks planned for actual execution:**
- Route HTTP 200, document title, explicit draft noindex.
- One shared lesson layout; eleven section headings; one reused LAB-A instance.
- Initial LAB-A values and Find Optimum updates.
- Native slider accessible name, SVG chart title, LAB-A stylesheet in `<head>` and none in lab section.
- Five disclosures, including four knowledge checks; test opening a disclosure and seeing explanatory feedback.
- MathJax initialization and at least six rendered math containers; a third-party CDN problem must not silently count as success.
- 375 px responsive layout, no unexpected page-level overflow, native arrow-key control, reduced-motion emulation and uncaught JS errors.

**Status:** GitHub source committed, JavaScript syntax and source checks passed. **Actual Playwright execution is not yet verified.**

### Environment limits
- The connected GitHub tool can fetch/update source but its available workflow lookup is PR-run scoped; no verified successful run/job log from the new commit was obtainable.
- The public lesson URL was inaccessible through the available external web verifier; this is not proof that GitHub Pages itself is unavailable.
- The local environment has Ruby and Node but lacks installed Jekyll/Bundler project dependencies and cannot resolve github.com for a checkout. A clean full Jekyll build was not executed locally.
- MathJax relies on `cdn.jsdelivr.net`; its actual availability and rendering must be observed in the CI/browser result.

## 5. References audit

**MIT OpenCourseWare:** The course `15.053 Optimization Methods in Management Science`, 2013 Lecture 1 PDF is accessible. Its slides distinguish decision variables, objective functions and constraints, and explicitly define feasible and optimal solutions. This is appropriate foundational support for OPT-001.

URL: `https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/40d1bb14223439515ac3df1aa229ecdd_MIT15_053S13_lec1.pdf`

**Boyd and Vandenberghe:** The Stanford author-hosted `Convex Optimization` resource page is accessible and identifies the authors and Cambridge University Press. It is relevant as optional advanced reading, not as the source of our synthetic fleet coefficients or a claim that this exercise uses a convex-program solver.

URL: `https://stanford.edu/~boyd/cvxbook/`

**Synthetic example:** Revenue/cost/profit figures and exact solution originate from the project's version-controlled LAB-A model and tests. No fabricated field data or misattributed citations detected.

**References verdict:** The two links and their intended scope were independently checked at the official hosts; the final publication still needs a rendered-link check from the deployed page.

## 6. Accessibility matrix

| Requirement | Source/automated evidence | Status |
|---|---|---|
| Semantic section hierarchy and document title | HTML/Markdown source audit; 11 headings | Source pass; browser pending |
| Accessible range label and help text | Native slider with `label for` and `aria-describedby`; new browser assertions | Source pass; browser pending |
| Chart independent textual status | `role=status`, numeric outputs, SVG `title` and `desc` | Source pass; screen-reader pending |
| Native quiz disclosure control | Five `details`/`summary` blocks and explanatory answers | Source pass; browser pending |
| Keyboard fleet adjustment and visible focus | Native range input; tests configured | Browser CI pending |
| Mobile 375px and reduced motion | Scoped CSS and Playwright checks configured | Browser CI pending |
| WCAG AA color contrast | No measured/verified computed contrast report | **Open** |
| NVDA/VoiceOver or equivalent manual review | No manual assistive-technology observation | **Open** |
| TeX reading/accessibility | MathJax configured and browser check added | Render/readability pending |

**Accessibility verdict:** Promising source semantics, but incomplete acceptance. Automated testing does **not** substitute for manual screen-reader review.

## 2026-11-11 — GitHub Actions repeated failures and deterministic browser-test repair

- User screenshot shows optimization-lab-validation workflow runs **#16–#20 failed**, including #20 after the accessibility/stylesheet assertions were added. Screenshot shows only run summaries, **not the failing job step or exception**; exact shared root cause remains unconfirmed.
- Independent source audit revealed a guaranteed mismatch in `scripts/optimization/opt001-browser.test.cjs`: previous selector `.ol-lesson-body details` selected **six** disclosures (five in the OPT-001 article plus one inside the reused LAB-A simulator) but asserted there were **five**. The browser test would fail when reaching this check even with correct HTML.
- Corrected the selector to restrict to lesson-originated disclosures containing a bold `summary`:
  `page.locator('.ol-lesson-body details').filter({ has: page.locator('summary strong') })`.
- Fix commit: `1cb1186bf593bb76614ea16d944dc737ed09a77e`.
- Verification: GitHub readback, JavaScript parse check passed; counted five lesson-source `<details markdown="1">` and one lab-source `<details>` independently. This supports the specific repair; **does not establish that it caused all five CI failures**.
- Outstanding: Let GitHub Actions complete new run, inspect exact failing step and error if red; confirm OPT-001 MathJax/browser outputs, keyboard, mobile and human accessibility before changing its draft/noindex status.
- Status: BL-006C **In Review**, no release, no OPT-002.

## 7. Release gate and next action

| Release criterion | Result |
|---|---|
| Verified mathematical formulas and exact optimum | Pass |
| Full learner narrative and aligned assessments | Pass at source level |
| Reused LAB-A component, no duplicated UI formulas | Pass |
| Reference URLs and scope | Pass (official primary sources) |
| Python reproduction | Previously passed; CI rerun pending |
| Correct draft metadata | Pass in source |
| Jekyll-generated page and noindex meta | **Pending actual run evidence** |
| Rendered MathJax, disclosures, chart, browser JS | **Pending actual run evidence** |
| Mobile, keyboard, WCAG and screen-reader acceptance | **Pending** |
| Explicit human publication approval | **Pending** |

**Final decision:** Do **not** publish or index OPT-001 yet. Keep **BL-006C In Review** until the latest GitHub Actions workflow has a successful complete run and the remaining human accessibility/release checks are recorded. Do not start OPT-002.

**Exact resumption task:** Open <https://github.com/lotussavy/lotussavy.github.io/actions/workflows/optimization-lab-validation.yml>, inspect the latest run for the new `OPT-001` browser test, capture the exact failing step or passed run ID, and handle discovered defects. After green CI, complete manual accessibility/visual review and explicitly approve or reject release.
