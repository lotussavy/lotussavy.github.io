# Project State — Optimization Learning Lab

**Updated:** November 13, 2026

**Current checkpoint:** M2 / BL-006C completed and released. OPT-001 and LAB-A are live. OPT-002 has not been started.

**Released source:** `f732ad071dfcdc0f9f02c3e35ab72492b494c775`

| Deliverable | State | Evidence |
|---|---|---|
| BL-001 repository/build audit | Done | Clean local production build and successful site-wide CI |
| BL-002 routes and navigation | Done | Live homepage entry points, lesson and canonical lab verified |
| BL-003 reusable lesson layout | Done | Rendered header/footer, metadata, equations, responsive layout and keyboard review |
| BL-004 LAB-A model | Done | Seven model tests, all 13 choices and independent algebraic proof |
| BL-005 LAB-A interface | Done | Five UI tests plus browser verification of all 13 values, controls, keyboard, mobile and reduced motion |
| BL-006A instructional design | Done | Five objectives, prediction-first activity and aligned knowledge checks |
| BL-006B full OPT-001 | Done | Released lesson, reusable lab, executable/downloadable Python and four knowledge checks |
| BL-006C release review | Done, with documented compatibility boundary | Passing CI, production deployment and direct live-browser verification; see accessibility scope below |
| BL-007A OPT-002 instructional design | Ready; not started | Next owner-directed working session |

## Live learning journey

- [Optimization Lab homepage](https://lotussavy.github.io/optimization/)
- [OPT-001: What Is Optimization?](https://lotussavy.github.io/optimization/learn/foundations/what-is-optimization/)
- [LAB-A: Profit Playground](https://lotussavy.github.io/optimization/labs/profit/)
- Existing `/optimization/labs/profit-preview/` links redirect to the canonical lab; this was observed in the live browser.

## Release evidence

- [Optimization validation: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479191871) — model/UI tests, Python reproduction, production build, both browser suites and nine accessibility/reflow audits.
- [Site-wide validation: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479192207) — clean Jekyll build, link/media checks and existing desktop/mobile/Lighthouse workflow.
- [GitHub Pages deployment: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43479191240).
- Direct production browser observation: homepage links to OPT-001; lesson is published and indexable with one robots directive; all 23 mathematical passages have rendered MathJax and assistive MathML; the old lab link redirects correctly; Find optimum reports 8 vehicles and $220.

## Resolved defects

Duplicate robots tags had caused the earlier strict-mode browser failure. Equation overflow, a Markdown-parsed optimum superscript, low-contrast inline links/code tokens, keyboard focus and code scrolling have been repaired. LAB-A now includes the complete 13-choice reference table and a no-JavaScript explanation. Original failing run records remain in history.

## Accessibility scope and follow-up

The completed review covers the actual browser accessibility tree, labels, live status, assistive MathML, keyboard operation, visual phone layouts and automated WCAG-tagged axe checks. A dedicated NVDA/VoiceOver/Orca session was **not completed** after the native test setup could not establish usable control. AT-001 records this compatibility follow-up. This release does not claim universal screen-reader compatibility, independent human screen-reader sign-off, or full WCAG conformance. ADR-029 defines this explicit review boundary.

## Next exact action

In the next owner-directed session, begin **BL-007A: instructional design for OPT-002 — Decisions, Objectives, and Constraints**. Define its objectives, motivating example, mathematical scope and assessment before implementation. No OPT-002 page, placeholder link or lab has been created. The full MVP (OPT-001–004, LAB-A/B and glossary) is still in development.
