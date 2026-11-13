# OPT-001 / LAB-A — Final Release Review

**Review/release date:** November 13, 2026

**Disposition:** Released on the existing website following owner authorization, passing build/browser gates and direct production verification. The accessibility testing boundary below is part of this disposition.

**Released source:** `f732ad071dfcdc0f9f02c3e35ab72492b494c775`

## 1. Mathematical and instructional review

The synthetic model is `n ∈ {0,…,12}`, `R(n)=100n−5n²`, `C(n)=20n+100`, and `P(n)=80n−5n²−100`. Independent enumeration checks all 13 feasible choices. The identity `P(n)=220−5(n−8)²` independently proves the unique optimum `n=8`, `P=$220`. Revenue instead peaks at `n=10`, with revenue $500 and profit $200. This distinction is correctly taught.

The lesson identifies the variable, objective and feasible domain; uses prediction before revealing the optimum; explains feasible versus optimal; provides an executable Python reproduction, four answer disclosures and an optional independent proof. It explicitly identifies the example as nonlinear, discrete and synthetic. No operational fleet-economics, demand, routing, battery or charging validity is claimed.

MIT OCW introductory optimization slides and the Stanford author-hosted Boyd/Vandenberghe resource are appropriate foundational references. Both links returned HTTP 200 in the release review. Synthetic financial coefficients are attributed to this teaching example.

## 2. Verified repairs and resulting behavior

- Removed duplicate robots metadata. The prior exact job exception was a strict-mode locator resolving two robots tags; the existing shared head include now emits the single directive.
- Confined wide MathJax displays to their own horizontal scroller, preserving narrow page width.
- Replaced Markdown-sensitive optimum superscripts with explicit TeX notation. All 23 mathematical passages now render and expose assistive MathML.
- Improved inline-link and syntax-token contrast; underlined inline links; used stronger focus indicators and keyboard-focusable code scrollers.
- Added all 13 reference rows as a semantic table, a no-JavaScript explanation and one coherent live result announcement.
- Published the full lesson, downloadable Python reproduction and canonical profit lab; retained the old preview URL through a redirect and updated homepage entry points.
- Retained the authoring-template preview as nonindexed and excluded from the sitemap. OPT-002 is not linked or created prematurely.

## 3. Acceptance evidence

| Check | Result | Evidence |
|---|---|---|
| Model and UI tests | 12 passed; 0 failed | Seven model and five UI cases in the release workflow |
| All feasible numerical values | Pass | 13 independent fixed fixtures, browser values and generated reference-table comparison |
| Independent optimality proof | Pass | Completing-the-square identity plus finite enumeration |
| Python example | Pass | Expected fleet 8 / profit $220; downloadable and test copies identical |
| Production Jekyll build | Pass | Local strict-front-matter build and both release workflows |
| Local routes/assets | Pass | 104 HTML pages / 4,138 same-site references checked locally; CI link/media checks passed |
| LAB-A browser regression | Pass | All 13 inputs, optimum/reset, keyboard, mobile and reduced motion |
| OPT-001 browser regression | Pass | Released metadata, 11 sections, reused lab, disclosures, math, keyboard and mobile |
| Accessibility and reflow | Pass within stated automated scope | Three pages × 1280/375/320 px; disclosures open; no WCAG-tagged axe violations, raw TeX or page overflow |
| Manual browser review | Pass within stated scope | Accessibility tree, labels, live status, keyboard slider/disclosure, desktop and phone visuals; 23 MathJax/MathML passages |
| Dedicated screen-reader compatibility | Not completed | AT-001; not a claimed pass |
| Production deployment and navigation | Pass | Live homepage → lesson; old preview → canonical lab; published lesson and 8-vehicle / $220 output observed |

## 4. Reproducibility and release references

- [Main-branch Optimization Lab validation: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479191871)
- [Main-branch site-wide build/browser workflow: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479192207)
- [GitHub Pages deployment: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479191240)
- Candidate checks also passed before promotion: runs `43478771860` and `43478771844` on the identical released SHA.
- CI uses Node 22, Ruby 3.3, the committed GitHub Pages/Jekyll lockfile, Playwright 1.56.1 and axe-core 4.10.3. The Python example uses standard features compatible with Python 3.10+.
- Reproduce the relevant checks through `.github/workflows/optimization-lab-validation.yml`; its generated report is uploaded with the small browser diagnostics.

## 5. Accessibility boundary and authorization

This was a mathematical/editorial review with actual browser inspection, keyboard tests, assistive-MathML verification and automated contrast/accessibility checks. A native screen-reader setup was attempted but no usable dedicated compatibility session was completed. **NVDA, VoiceOver and Orca compatibility are unverified.** Do not describe this as independent human screen-reader sign-off or full WCAG certification. AT-001 preserves that follow-up; ADR-029 records the explicit supported-review scope.

The owner directly authorized completion and live publication on November 13. That authorization supplies the publication decision; a separate human editorial panel is not claimed.

## 6. Published URLs and next step

[OPT-001](https://lotussavy.github.io/optimization/learn/foundations/what-is-optimization/) · [Profit Playground](https://lotussavy.github.io/optimization/labs/profit/) · [Optimization homepage](https://lotussavy.github.io/optimization/).

BL-001–006 are complete within the recorded review scope. The next work item is BL-007A, OPT-002 instructional design, in a subsequent owner-directed session. The rest of the MVP remains planned.
