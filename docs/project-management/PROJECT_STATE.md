# Project State — Optimization Learning Lab

**Updated:** 2026-11-11  
**Current milestone:** **BL-006C — OPT-001 academic, technical and accessibility release review (In Review)**  
**Release decision:** **Do not publish/index OPT-001** until the outstanding acceptance evidence is verified.  
**Next working target:** Inspect latest complete CI run for `opt001-browser.test.cjs`, then finish human accessibility/visual checks.  
**One-major-milestone-per-session policy:** [DAILY_TARGETS.md](DAILY_TARGETS.md).

## Verified tasks and status

| ID | State | Evidence / outstanding |
|---|---|---|
| BL-000 | Done | Continuity system |
| BL-001 | In Review | Repository framework audit completed; full production acceptance records incomplete |
| BL-002 | In Review | Homepage/navigation present and user confirmed lab link works; remaining checklist open |
| BL-003 | In Review | Reusable lesson layout implemented; manual accessibility audit open |
| BL-004 | Done | Exact synthetic LAB-A engine, 13 fixtures and independent analytical proof |
| BL-005 | In Review | LAB-A usable, prior user reported green CI, screen-reader acceptance still unrecorded |
| BL-006A | Done | Detailed instructional design |
| BL-006B | Done (draft) | OPT-001 draft, noindex, LAB-A reuse, Python example |
| **BL-006C** | **In Review** | [OPT_001_REVIEW.md](OPT_001_REVIEW.md) technical/math/editorial audit and fixes; new CI/browser/assistive-technology evidence pending |
| BL-007+ | Proposed | Nothing started |

## BL-006C work completed

- Inspected OPT-001 lesson, instructional design, authoring contract, LAB-A model/UI, Jekyll layouts, workflow, project state and prior validation records.
- Independently recomputed all 13 fleet outcomes, mathematical identity `P(n)=220−5(n−8)²`, unique n=8/P=220 maximum; checked n=10 has larger revenue but lower profit.
- Confirmed the eleven lesson sections, learning objectives, 158-word introduction, five native answer/proof disclosures, noindex draft metadata and absence of premature OPT-002 links.
- Verified official MIT OCW introductory optimization lecture and Stanford Boyd/Vandenberghe textbook resource are relevant and reachable.
- Fixed LAB-A CSS placement: moved stylesheet into lesson-layout document head conditionally via `page.labs contains 'profit-playground'`, removed link nested in lab section.
- Added `scripts/optimization/opt001-browser.test.cjs`; wired into GitHub Actions. Test is designed to verify actual rendered draft, robots directive, math, slider/keyboard, disclosures, stylesheet placement, narrow screen and JS errors.
- GitHub source readback and structural checks for changes passed; Playwright test script parsed successfully.
- **Full CI execution after these modifications was not observed** through accessible connector; the public page also could not be fetched by the external web tool. Do not infer CI outcome from an earlier green run.
- **No real manual screen-reader or measured WCAG contrast assessment was completed.**

## Publication controls

OPT-001 stays `lesson_status: draft`, `robots: noindex,nofollow`, `sitemap: false`, and `math_reviewed/accessibility_reviewed/code_verified: false`. The page's source is in a public repository; noindex does not make the page private. No homepage publication link added.

## 2026-11-11 — GitHub Actions repeated failures and deterministic browser-test repair

- User screenshot shows optimization-lab-validation workflow runs **#16–#20 failed**, including #20 after the accessibility/stylesheet assertions were added. Screenshot shows only run summaries, **not the failing job step or exception**; exact shared root cause remains unconfirmed.
- Independent source audit revealed a guaranteed mismatch in `scripts/optimization/opt001-browser.test.cjs`: previous selector `.ol-lesson-body details` selected **six** disclosures (five in the OPT-001 article plus one inside the reused LAB-A simulator) but asserted there were **five**. The browser test would fail when reaching this check even with correct HTML.
- Corrected the selector to restrict to lesson-originated disclosures containing a bold `summary`:
  `page.locator('.ol-lesson-body details').filter({ has: page.locator('summary strong') })`.
- Fix commit: `1cb1186bf593bb76614ea16d944dc737ed09a77e`.
- Verification: GitHub readback, JavaScript parse check passed; counted five lesson-source `<details markdown="1">` and one lab-source `<details>` independently. This supports the specific repair; **does not establish that it caused all five CI failures**.
- Outstanding: Let GitHub Actions complete new run, inspect exact failing step and error if red; confirm OPT-001 MathJax/browser outputs, keyboard, mobile and human accessibility before changing its draft/noindex status.
- Status: BL-006C **In Review**, no release, no OPT-002.

## 2026-11-11 — Direct GitHub run diagnosis and isolated Chromium checks

- **Direct GitHub Actions evidence, obtained without user intervention:** workflow run [#21](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43093220722), ID `43093220722`, was completed with conclusion `failure`. Its job `verify-lab` passed Node model/UI tests, Python script, Ruby/Bundler, Jekyll build, output/asset checks and Chromium installation; only combined `Browser-test rendered profit simulator` step failed.
- **Original job log retrieval:** GitHub's job-logs connector returned `ReadTimeout`; artifact 146 MB also timed out. Therefore no exact exception text from #21 was recovered.
- **Action taken:** split combined Chromium test into separately reported `Browser-test LAB-A simulator` and `Browser-test OPT-001 lesson` steps, preserving nonzero exit codes. Commit `264d3226c51f8a51f292eccc5f1d0dc2457080d9`.
- **Diagnostics:** capture each test's complete stdout/stderr with `tee` and upload a small `optimization-browser-diagnostics` artifact including logs and rendered OPT-001/LAB-A HTML. Commit `e9fe2b57a6ddb0cc097a2193eb7d4a90c6f7b187`.
- **Reliability fix:** change LAB-A Playwright `page.goto` waiting condition from `networkidle` to `domcontentloaded`, avoiding dependency on all third-party HTTP requests falling idle; synchronous scripts are loaded before DOMContentLoaded. Commit `3b6ef1ed7380d6a97e8643d59ec704d1125c079d`.
- **Fresh GitHub API observation:** runs #22 (`43095585577`), #23 (`43095774023`) and #24 (`43095830880`) were still **queued** when last checked; they were **not successful** and no new browser-test result was available.
- **Publication remains blocked:** OPT-001 stays `draft`, `noindex,nofollow`, unlisted; BL-006C remains `In Review`. No OPT-002 work.
- **Next action when a queued run completes:** inspect job step conclusions directly through GitHub API, fetch small browser diagnostics artifact to identify exact failure, apply targeted fix and verify on a subsequent CI run. If an automated step passes, manual screen-reader/color-contrast acceptance still remains.

## Next exact action

1. Inspect [Optimization Lab GitHub Actions](https://github.com/lotussavy/lotussavy.github.io/actions/workflows/optimization-lab-validation.yml) after the latest code commits. Capture the run ID and inspect both Node/Python/Jekyll checks and new OPT-001 Playwright results. Repair only concrete failures, then rerun.
2. If the rendered checks pass, inspect the real draft page for math typesetting, disclosure behavior, content legibility and 375px layout.
3. Conduct and document a manual screen-reader test (NVDA or VoiceOver), keyboard-only path and computed WCAG AA contrast check.
4. Complete final academic/editorial approval, update review flags only with evidence, and **then** make an explicit release decision. Do not begin OPT-002.

## Resume materials

[OPT_001_REVIEW.md](OPT_001_REVIEW.md) · [OPT_001_INSTRUCTIONAL_DESIGN.md](OPT_001_INSTRUCTIONAL_DESIGN.md) · [LESSON_AUTHORING.md](LESSON_AUTHORING.md) · [VALIDATION.md](VALIDATION.md) · [DAILY_TARGETS.md](DAILY_TARGETS.md).
