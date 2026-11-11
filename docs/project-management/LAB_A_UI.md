# LAB-A Interactive Simulator — BL-005 Implementation Record

**Date:** November 11, 2026  
**Status:** In Review — source and simulated-DOM checks passed; Jekyll and live-browser QA unverified.

## Deliverables
- `_includes/optimization/labs/profit.html` — reusable semantic UI component with native fleet slider (0–12), Find optimum, Reset, revenue/cost/profit outputs, SVG graph, explanation status, model disclosure and error alert.
- `assets/js/optimization/profit-ui.js` — DOM controller that exclusively calls `OptimizationProfitModel.evaluateFleet`, `enumerateFeasible`, and `solveExact`; does not reimplement mathematical formulas.
- `assets/css/optimization-profit.scss` — scoped, responsive styling; native keyboard controls and reduced-motion support.
- `optimization/labs/profit-preview.md` — non-indexed development preview using the reusable `optimization-lesson` layout.
- `scripts/optimization/profit-ui.test.cjs` — reproducible Node test using a fake DOM; run with `node --test scripts/optimization/profit-ui.test.cjs`.

## Verified behavior
- Initial selection `n=4`: revenue $320, cost $180, profit $140.
- Each of 13 fleet choices updates selected fleet, numerical outputs, SVG selected point and accessible chart description consistently.
- Find optimum selects `n=8` and profit $220; wording specifies exact enumeration over 13 integers.
- Reset selects baseline `n=4`.
- Invalid input displays warning without replacing last valid computed outputs; valid input clears warning.
- Missing required controls produce predictable initialization error.
- All five committed UI test cases also executed successfully with compatible test/assert shims in V8 (**98 assertions**); this is not native `node --test` execution.
- The chart is data-driven from the established BL-004 engine and does not duplicate objective calculations.
- 78 runtime assertions passed in a JavaScript isolate using the **actual committed model and UI source** with a simulated DOM. This is not real browser rendering.
- BL-004's prior 7/7 mathematical Node tests remain the numerical reference; the new Node UI test file is committed but **was not executed as a Node command during this BL-005 session**.

## Accessibility implementation
- Native range input, label, help text, numeric output, and buttons with keyboard semantics.
- `role=status` and `aria-live=polite` provide interpretation updates.
- SVG has a title/description and dynamically updated description of the selected point; explanatory text is also independent of the plot.
- Error region uses `role=alert`; error is hidden after valid interactions.
- Responsive single-column values at narrow widths; motion-reduction CSS present.
- **Still required:** manual screen-reader, keyboard-only and mobile browser QA, WCAG contrast validation.

## Release restrictions
- No claim of live deployment: public preview and /optimization/ returned inaccessible from the external web tool.
- No Jekyll build verified; prior BL-001/002/003 acceptance gaps remain.
- The preview uses `robots: noindex,nofollow` and `sitemap: false`; it is not the published OPT-001 lesson.
- The Optimization Lab homepage still describes the first lab as upcoming. No homepage lab launch link was added.

## Next acceptance steps
1. Run `bundle exec jekyll build`; confirm generated `/optimization/labs/profit-preview/`, CSS and JS assets.
2. Execute `node --test scripts/optimization/profit-model.test.cjs scripts/optimization/profit-ui.test.cjs`.
3. Perform browser QA: n=0, 4, 7, 8, 12; Find optimum; Reset; keyboard arrows; narrow 375px screen; reduced motion; a screen reader.
4. Fix any discovered problems and record evidence in VALIDATION.md.
5. Only after acceptance integrate LAB-A into final OPT-001 lesson (BL-006) and add a public release link.
