# OPT-004 — Release Review

**Date:** November 17, 2026. **Outcome:** Published after all release gates in the documented scope passed.

**Released source:** `1a6a36102a71f65fbba7549b8fd6ba119e682fab`. Candidate branch: `opt004-release-2026-11-17`.

## Mathematical and instructional review

The eleven-section lesson has a 158-word introduction, a concrete tuning decision, five aligned objectives and five explanation-based knowledge checks. It distinguishes feasible, best recorded, local and global answers; decisions from values; ties; infeasible recorded points; changed models; and nonattainment. All scores and coefficients are clearly synthetic.

The continuous objective is the maximum of two downward quadratics on [0,U]. The browser maximizes each branch over the interval and uses their larger attained bound as a global certificate. Every supported integer U=0,…,10 agrees with an independent closed-form table. This analytic argument covers the continuum; the slider and plotting grid are not presented as a proof. At U=10, x=2 is local but not global; at U=6, x=2 and 6 tie globally; at U=5, x=8 is infeasible and the endpoint 5 is a constrained local maximum below the global answer 2.

Seven new model tests and earlier regressions pass: 33 Node tests total. They cover all 11 limits; 11,011 hundredth-step candidate/limit probes against expanded piecewise arithmetic and one-sided derivative classification; all 22,528 integer-point subset/limit records; no-feasible/empty records; duplicate records; invalid inputs and immutable results. Finite tests are not described as exhaustive coverage of all possible continuous records.

The independent Python implementation uses Fraction, interval endpoints, permitted peaks and the exact crossover 14/3. Three new Python tests pass on all limit certificates, exact piecewise probes, comparison/tie/infeasible cases and displayed/downloaded code consistency. Earlier Python and model certificates still pass.

## Technical and browser verification

Strict local production Jekyll build and same-site validation pass on 110 HTML pages and 4,375 references. Generated lesson/activity/assets, indexable metadata and project-document exclusion are checked. Earlier LAB-A and OPT-001/002/003 browser suites pass.

The new browser suite passes on lesson and standalone routes: record versus certificate, local/global labels, ties and two diamond markers, invalidation on U change, preservation on candidate change, exclusion of infeasible scores, clear/deduplicate/add/reset, singleton case, keyboard half-steps, 375/320 px reflow, five disclosures, MathJax, one robots tag and no-JavaScript fallback. No page-script errors occurred. Visual review found and repaired a light hover background with white primary-button text; a dedicated hover-color regression now passes.

All 27 open-disclosure WCAG-tagged axe/reflow audits pass (nine routes at 1280/375/320 px), with no violations, overflow, raw TeX or MathJax errors. Direct review confirms 54 typeset mathematical passages with 54 assistive-MathML alternatives. Numerical record/certificate alternatives, text/shape markers, labeled native controls, one polite status and keyboard-scrollable tables/code accompany the graph.

## Release evidence

| Gate | Result | Evidence |
|---|---|---|
| Final candidate Optimization validation | Success | [44179772940](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44179772940) |
| Final candidate site-wide workflow | Success | [44179772751](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44179772751) |
| Main Optimization validation | Success | [44180283470](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44180283470) |
| Main site-wide workflow | Success | [44180283444](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44180283444) |
| Pages deployment | Success | [44180283070](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44180283070) |
| Production observation | Verified | Homepage four-lesson entry, OPT-003 ↔ OPT-004, standalone comparator, global/tie/infeasible/invalidation/reset behavior and rendered math |

The final candidate passed before fast-forward promotion. Production was observed after deployment. The subsequent documentation-only commit records results without changing tested website code.

## CI environment repair

Initial candidate `984c3e75e32f1ffbb1fd4856968920b2cbe51acd` passed model/Python/build checks but Chromium setup failed in runs 44179055994 and 44179056048. Jobs 134378153649 and 134378153007 report `Playwright does not support chromium on ubuntu26.04-x64`. The moving `ubuntu-latest` image had advanced beyond pinned Playwright 1.56.1 support. Both validation workflows now explicitly use Ubuntu 24.04; no checks or thresholds were removed. The final replacement runs above passed.

## Review boundary and remaining work

Dedicated NVDA/VoiceOver/Orca compatibility remains unexecuted AT-001 under ADR-029. Passing axe and `accessibility_reviewed` do not claim full WCAG conformance or universal assistive-technology compatibility.

OPT-004 and BL-007 are complete. M3/MVP remain in progress: BL-009 glossary/search and remaining P0 start/concept/editorial requirements plus BL-010 acceptance review are outstanding. OPT-005 and LAB-C are not started.
