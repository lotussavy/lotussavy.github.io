# Project State — Optimization Learning Lab

**Updated:** November 13, 2026.

**Current checkpoint:** OPT-003, Feasibility and Trade-offs, and LAB-B are completed, reviewed and published. Three foundation lessons are live. M3 and the full MVP remain in progress; OPT-004 has not been started.

**Latest released source:** `ba76696b3caa7279957acadc974ea54005550a68`. The subsequent documentation-only commit records this verified release; it does not alter website code.

| Work item | State | Verified result |
|---|---|---|
| BL-001–006 / OPT-001 and LAB-A | Done | Existing mathematical/UI/browser regressions pass |
| BL-007A–C / OPT-002 and its model builder | Done | Existing regressions and exact certificates retained |
| BL-007D / OPT-003 design | Done | Five aligned objectives, continuous model and five assessments |
| BL-007E / OPT-003 implementation | Done | Eleven-section lesson, reusable/standalone LAB-B and independent Python |
| BL-007F / OPT-003 release review | Done in the documented scope | Candidate/main validation, site checks, deployment and production verified |
| BL-008 / LAB-B | Done | Two-dimensional feasible region, rule toggles, checks, slack, trade-offs and degenerate sets |
| BL-007 / OPT-002–004 | In Progress | OPT-002/003 released; OPT-004 not started |
| BL-007G / OPT-004 design | Ready; not started | Next owner-directed task |
| BL-009–010 / glossary/search and full MVP review | Proposed | Still required for the full foundation package |
| AT-001 / dedicated screen-reader compatibility | Ready; unexecuted | Existing follow-up under ADR-029 |

## Live learning journey

1. [OPT-001: What Is Optimization?](https://lotussavy.github.io/optimization/learn/foundations/what-is-optimization/)
2. [OPT-002: Decisions, Objectives, and Constraints](https://lotussavy.github.io/optimization/learn/foundations/decisions-objectives-constraints/)
3. [OPT-003: Feasibility and Trade-offs](https://lotussavy.github.io/optimization/learn/foundations/feasibility-and-trade-offs/)

[Profit Playground](https://lotussavy.github.io/optimization/labs/profit/) · [Decision Model Builder](https://lotussavy.github.io/optimization/labs/model-builder/) · [LAB-B: Feasibility Explorer](https://lotussavy.github.io/optimization/labs/feasibility/) · [Optimization homepage](https://lotussavy.github.io/optimization/).

The homepage shows three lessons and links to LAB-B. OPT-002 links forward to OPT-003; OPT-003 links back. OPT-004 is identified as planned text without a dead route. The legacy profit-preview redirect remains covered by regression tests.

## Release evidence

- [Candidate Optimization validation: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43498940635) and [candidate site-wide checks: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43498940862) before promotion.
- [Main Optimization validation: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43499389410), [main site-wide checks: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43499389515), [Pages deployment: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43499387957).
- 26 Node tests passed, including all 109,368 LAB-B settings checked against an independent boundary-intersection oracle, plus five candidate substitutions per setting. The earlier 15,639 OPT-002 model certificates still pass.
- Three new Python tests passed, including exact dimension checks across 2,688 representative settings against an analytic certificate. Earlier Python checks pass. Downloaded and displayed excerpts agree. Exhaustive Python coverage of LAB-B is not claimed.
- Strict local production build and same-site validation passed: 108 HTML pages, 4,297 link/asset references. All four lesson/lab browser suites passed, including no-JavaScript fallbacks.
- 21 WCAG-tagged axe/reflow audits passed: seven routes × 1280/375/320 px, with no violations, page overflow, raw TeX or MathJax errors.
- Direct production review confirmed homepage → OPT-003, OPT-002 ↔ OPT-003 links, standalone LAB-B, staffing violation/toggle, empty and line presets, reset, and all 61 rendered equations with 61 assistive-MathML alternatives.

## Review boundary

Browser/keyboard, visual reflow, accessible names, one live-status channel, numerical chart alternatives, MathJax assistive MathML and automated axe audits were reviewed. Dedicated NVDA/VoiceOver/Orca compatibility remains unverified AT-001. Passing axe and `accessibility_reviewed` do not claim full WCAG conformance or universal assistive-technology compatibility. See ADR-029 and OPT_003_REVIEW.md.

## Next exact action

When the owner asks to proceed, begin **BL-007G: OPT-004 — What Does “Optimal” Mean?** Define examples and assessments that distinguish feasible, global/local optimal and best-known answers, building on the three released lessons. Do not start LP solvers or advanced routing implicitly. After OPT-004, glossary/search and the remaining MVP acceptance criteria still require implementation and review. No background work is implied.
