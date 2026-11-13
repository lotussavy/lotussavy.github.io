# OPT-002 — Release Review

**Date:** November 13, 2026. **Checkpoint:** release candidate; CI and production verification pending.

## Scope

Complete OPT-002, Decisions, Objectives, and Constraints, with the established eleven-section lesson layout, five objectives, five knowledge checks, an optional independent certificate, a downloadable Python example and a reusable Decision Model Builder. Link OPT-001 → OPT-002 and add homepage/standalone activity entry points. Do not implement OPT-003 or claim the later two-dimensional LAB-B explorer is complete.

## Mathematical review

The builder reuses LAB-A's financial engine. It adds integer availability A ∈ [0,12], integer budget B ∈ [0,400], n ≤ A and C(n) ≤ B. The selected objective is max profit, max revenue or min cost. Every solution is obtained by enumerating all 13 domain choices and comparing only those satisfying both constraints.

An independent certificate first handles B < 100 as infeasible. Otherwise K = min(12,A,floor((B−100)/20)) defines the feasible integers 0…K. Profit is uniquely maximized at min(8,K); revenue at min(10,K); cost at 0. The JS and independent Python implementations were each checked against this certificate for all 15,639 supported scenarios. Separate fixed reference rows supply the expected values. The model distinguishes no optimizer/null value from an optimal but negative profit.

The lesson explains that editing parameters between solves does not make them optimization variables, that the domain and all constraints must hold together, and that zero-service cost minimization reflects the absence of a service requirement. The $100 fixed cost applies even at n = 0. Synthetic coefficients are not presented as operating data or fleet recommendations.

## Executed local evidence

- Nineteen Node tests passed, including seven new modeling tests and all existing model/UI regressions.
- Three Python tests passed, including all 15,639 scenarios, invalid parameters and exact equality of the downloadable and displayed code.
- The seven-reference-model Python script passed, including infeasibility and a loss.
- Strict-front-matter production Jekyll build passed. Same-site validation passed on 106 HTML pages and 4,219 links/assets.
- Browser interaction verified default optimum n=8/profit $220, budget $220 → n=6/profit $200, budget $80 → no feasible solution, keyboard candidate updates and invalid-input preservation/disabled solving.
- All 38 mathematical passages render with assistive MathML. A Markdown-sensitive set delimiter was repaired using explicit TeX brace commands, including the same notation in OPT-001.
- Fifteen local page/viewport accessibility and reflow checks passed with disclosures open and no WCAG-tagged axe violations or page overflow. Contrast/scroll-focus repairs and the narrow builder layout were visually reviewed. Candidate CI and production evidence remain pending at this checkpoint.

## Review boundary

Follow ADR-029: actual browser/keyboard/MathML inspection plus automated WCAG-tagged axe checks. Dedicated NVDA/VoiceOver/Orca compatibility remains the existing AT-001 follow-up, not a claimed pass or full WCAG certification.

## Release gate

The release branch must pass the expanded Optimization Lab validation and site-wide workflow before promotion. After deployment, verify live navigation, the lesson and an interaction result, then record run IDs and final disposition. OPT-003 remains unstarted.
