# Project State — Optimization Learning Lab

**Updated:** November 17, 2026.

**Current checkpoint:** OPT-004, What Does ‘Optimal’ Mean?, and its Optimality Comparator are completed, reviewed and published. All four planned foundation lessons are live. BL-009 glossary/search is implemented and in candidate review; its publication is pending. BL-007 is complete; M3 and the full MVP remain in progress because glossary/search and remaining foundation-package requirements are outstanding.

**Latest released source:** `1a6a36102a71f65fbba7549b8fd6ba119e682fab`. The subsequent documentation-only commit records this verified release without changing the tested website code.

| Work item | State | Verified result |
|---|---|---|
| BL-001–006 / OPT-001 and LAB-A | Done | Earlier mathematical/UI/browser regressions pass |
| BL-007A–F / OPT-002/003 | Done | Earlier lessons, model builder and LAB-B retained and checked |
| BL-007G / OPT-004 design | Done | Five aligned objectives/checks and original two-peak model |
| BL-007H / OPT-004 implementation | Done | Eleven-section lesson, reusable/standalone comparator and exact Python |
| BL-007I / OPT-004 release review | Done in the documented scope | Candidate/main validation, deployment and public interaction verified |
| BL-007 / OPT-002–004 lessons | Done | All three released, with OPT-001 retained |
| BL-008 / LAB-B | Done | Area/line/point/empty cases still pass independent and browser checks |
| BL-009 / glossary/search | In Review | 30 terms, 38-entry local catalog and shared navigation implemented; release verification pending |
| BL-010 / full MVP review | Proposed | Glossary plus remaining start/concept/editorial requirements still required |
| AT-001 / dedicated screen-reader compatibility | Ready; unexecuted | Existing follow-up under ADR-029 |

## Live learning journey

1. [OPT-001: What Is Optimization?](https://lotussavy.github.io/optimization/learn/foundations/what-is-optimization/)
2. [OPT-002: Decisions, Objectives, and Constraints](https://lotussavy.github.io/optimization/learn/foundations/decisions-objectives-constraints/)
3. [OPT-003: Feasibility and Trade-offs](https://lotussavy.github.io/optimization/learn/foundations/feasibility-and-trade-offs/)
4. [OPT-004: What Does ‘Optimal’ Mean?](https://lotussavy.github.io/optimization/learn/foundations/what-does-optimal-mean/)

[Profit Playground](https://lotussavy.github.io/optimization/labs/profit/) · [Decision Model Builder](https://lotussavy.github.io/optimization/labs/model-builder/) · [LAB-B: Feasibility Explorer](https://lotussavy.github.io/optimization/labs/feasibility/) · [Optimality Comparator](https://lotussavy.github.io/optimization/labs/optimality/) · [Optimization homepage](https://lotussavy.github.io/optimization/).

Homepage shows four lessons. OPT-003 links forward to OPT-004, which links back. The standalone comparator links to its full lesson and Python example. OPT-005 is planned text without a dead route. The legacy profit-preview redirect remains covered by regression tests.

## Release evidence

- [Final candidate Optimization validation: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44179772940) and [candidate site-wide checks: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44179772751) passed before promotion.
- [Main Optimization validation: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44180283470), [main site-wide checks: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44180283444), [Pages deployment: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44180283070).
- 33 Node tests passed. OPT-004 covers all 11 supported limits, 11,011 hundredth-step candidate/limit probes with independent piecewise arithmetic and local derivative checks, and all 22,528 integer-point subset/limit records. Analytic bounds, rather than sampling, establish continuous global optimality.
- Three new Python tests passed: exact piecewise score/certificate checks for every supported U, comparison/tie/infeasible-record cases and excerpt consistency. Earlier Python and model certificates pass, including 109,368 LAB-B settings and 15,639 OPT-002 models.
- Local strict production Jekyll build and same-site validation passed: 110 HTML pages and 4,375 link/asset references. All five lesson/lab browser suites passed, including disabled-controls/no-JavaScript fallbacks.
- 27 open-disclosure WCAG-tagged axe/reflow audits passed: nine routes × 1280/375/320 px, with no violations, overflow, raw TeX or MathJax errors. OPT-004 has 54 rendered passages and 54 assistive-MathML alternatives.
- Direct public review confirmed homepage → OPT-004, OPT-003 ↔ OPT-004 links, standalone comparator, exact global result, ties, infeasible-point exclusion and certificate invalidation/reset.
- Initial candidate browser setup failed because `ubuntu-latest` selected Ubuntu 26.04, unsupported by pinned Playwright 1.56.1. Both workflows now pin Ubuntu 24.04. Final runs above passed without removing checks or weakening thresholds.

## Review boundary

Native controls, keyboard, visual reflow, accessible names, numerical chart alternatives, one polite status channel, MathJax assistive MathML and automated axe audits were reviewed. Dedicated NVDA/VoiceOver/Orca compatibility remains unverified AT-001. `accessibility_reviewed` and passing axe do not claim full WCAG conformance or universal assistive-technology compatibility. See ADR-029 and OPT_004_REVIEW.md.

## Next exact action

Finish BL-009 browser/CI review, publish after gates pass and verify production. Explain the planned full MVP review using MVP_REVIEW_PLAN.md; BL-010 itself has not been executed.
