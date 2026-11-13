# Project State — Optimization Learning Lab

**Updated:** November 13, 2026.

**Current checkpoint:** OPT-002 completed, reviewed and published. M3 (the full foundation package) remains in progress. OPT-003 and LAB-B are implemented and in candidate review; the last verified live release remains OPT-002.

**Latest released source:** `718c887e2cfa3a0eb48557c36a1c7c57b335f3a9`

| Work item | State | Verified result |
|---|---|---|
| BL-001–006 / OPT-001 and LAB-A | Done | Existing release retained; all mathematical/UI/browser regressions pass |
| BL-007A / OPT-002 instructional design | Done | Five objectives, shared example, prediction-first activity and aligned checks |
| BL-007B / OPT-002 implementation | Done | Full lesson, reusable builder, standalone route and Python reproduction |
| BL-007C / OPT-002 release review | Done in the documented scope | Nineteen Node tests, three Python checks, browser regressions, 15 accessibility/reflow audits and live deployment |
| BL-007 / OPT-002–004 | In Progress | OPT-002 released; OPT-003 in review; OPT-004 not started |
| BL-007D / OPT-003 design | Done | Five objectives, continuous model, independent fixtures and assessments |
| BL-007E/F / OPT-003 implementation/release | In Review | Local verification passed; candidate CI and live publication pending |
| BL-008 / LAB-B | In Review | Two-dimensional explorer implemented with rule toggles and degenerate sets |
| BL-009–010 / glossary and full MVP release | Proposed | Remaining foundation package still required |
| AT-001 / dedicated screen-reader compatibility | Ready; unexecuted | Existing explicitly documented follow-up under ADR-029 |

## Live learning journey

1. [OPT-001: What Is Optimization?](https://lotussavy.github.io/optimization/learn/foundations/what-is-optimization/)
2. [OPT-002: Decisions, Objectives, and Constraints](https://lotussavy.github.io/optimization/learn/foundations/decisions-objectives-constraints/)

[Profit Playground](https://lotussavy.github.io/optimization/labs/profit/) · [Decision Model Builder](https://lotussavy.github.io/optimization/labs/model-builder/) · [Optimization homepage](https://lotussavy.github.io/optimization/).

The homepage shows two lessons. OPT-001 links forward to OPT-002; OPT-002 links back to its prerequisite. The old profit-preview URL still redirects to the canonical profit lab. No link to an unimplemented OPT-003 was added.

## Release evidence

- [Main-branch Optimization Lab validation: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824236). Includes all existing regressions, seven new model tests, Python verification, OPT-002 and standalone-builder browser checks, and 15 page/viewport accessibility audits.
- [Main-branch site-wide workflow: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824295). Production build, local links/media and existing desktop/mobile/Lighthouse checks passed.
- [GitHub Pages deployment: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824146). Identical candidate checks also passed before promotion (runs 43484481890 / 43484481886).
- Both JS and independent Python implementations match independent mathematical certificates for all 15,639 supported objective/budget/availability settings.
- Direct live-browser verification confirmed homepage → OPT-002, previous/next navigation through OPT-001, 38 MathJax/assistive-MathML passages with no renderer errors, and budget $220 → exact n=6/profit $200. The standalone builder opened successfully with nine default feasible choices.

## Review boundary

Actual browser, keyboard, visual layout, accessible-name/live-status and assistive-MathML inspection plus WCAG-tagged axe audits were performed. Dedicated NVDA/VoiceOver/Orca compatibility remains unverified (AT-001). Neither `accessibility_reviewed` nor passing axe results claim universal assistive-technology compatibility or full WCAG conformance. See ADR-029 and OPT_002_REVIEW.md.

## Next exact action

Complete candidate CI for OPT-003/LAB-B, promote only after successful checks, verify Pages and production, then record the release. OPT-004 remains unstarted.
