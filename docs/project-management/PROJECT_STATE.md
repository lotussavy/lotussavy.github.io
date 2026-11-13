# Project State — Optimization Learning Lab

**Updated:** 2026-11-13
**Current milestone:** BL-006C — final OPT-001 release verification.
**Scope:** Complete the foundation work through OPT-001 and LAB-A, publish it on the existing website, and stop before OPT-002. The owner explicitly authorized this scope and live publication on November 13.

## Current checkpoint

- Recovered the exact earlier CI exception: duplicate `meta[name="robots"]` elements caused Playwright strict-mode failure. Removed duplicate emission from the shared layout; retained the existing head include as the single source.
- Repair commit `2156fd213ed82386c1d201926e8a72d2ae5b439c` deployed successfully. Its LAB-A browser test passed; its OPT-001 test identified horizontal overflow at 375 px.
- Repaired equation overflow, a Markdown-parsed optimum superscript, inline link contrast/underlining, code-token contrast, keyboard focus indicators and focusable code scrollers.
- Added a complete 13-choice table and a no-JavaScript explanation; retained a single coherent live result announcement.
- Prepared the canonical `/optimization/labs/profit/` route, a redirect from the existing preview URL, the completed OPT-001 lesson, homepage entry points and a downloadable Python example.
- Local production Jekyll build and same-site link checks pass. Browser review verified 23 rendered mathematical passages and 23 assistive MathML alternatives. Keyboard slider and answer disclosure behavior passed.
- Nine browser-based axe checks (three routes at desktop and two phone widths), with disclosures open, found no WCAG-tagged violations or page overflow. The same checks are now part of CI.
- Final release-commit CI and production observation are pending this checkpoint. Do not claim these until recorded.

## Accessibility review boundary

The review includes actual browser accessibility-tree inspection, accessible names/status text, assistive MathML, keyboard operation, contrast and automated axe checks. **A dedicated NVDA, VoiceOver or Orca compatibility session was not completed.** Native screen-reader setup was attempted, but the available desktop control could not establish a usable test session. This is a documented compatibility follow-up, not a claim of full WCAG conformance or independent human sign-off. See ADR-029.

## Next action

Verify all release-commit CI results and production routes, then finalize the task/review/validation records. OPT-002 is not started.

## Previous checkpoint history

The detailed November 11 investigations remain in CHANGELOG.md and VALIDATION.md. Their earlier pending statements describe historical checkpoints, not the current result.
