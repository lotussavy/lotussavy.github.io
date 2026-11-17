# BL-009 — Glossary and Search Review

**Date:** November 17, 2026. **State:** Candidate review; publication pending at this checkpoint.

Thirty foundation terms have a definition, synthetic example, aliases, related-term links and a link to a published foundation lesson. Definitions distinguish feasible points from infeasible models, a decision from its value, local/global/best-known claims, bound directions and the limitations of a positive gap. Later vocabulary does not link to unimplemented lessons.

One JSON glossary source renders both the alphabetical reference and term search records. The generated local catalog contains 38 entries: 30 terms, four published lessons and four activities. Lesson/activity metadata comes from published Jekyll pages, excluding previews and drafts. Stable glossary anchors implement the proposed concept paths without creating thirty thin duplicate pages.

Search supports case/punctuation/diacritic normalization, aliases, all-word matching, deterministic ranking, type filters and shareable URL-fragment state. Queries are matched locally; there is no search API. Server-rendered definitions and lesson links remain usable without JavaScript. Index failure has an explicit fallback and retry. Related-term navigation reveals a target hidden by a filter.

All ten new model/data/index tests pass (seven pure data/search tests and three generated-index tests). The earlier 33 Node regressions also pass. Strict local production build and same-site validation pass on 112 HTML pages and 4,689 references. Direct browser checks passed for budget/lesson filtering, alias lookup, fragment sharing, skip-link state preservation, related-term target recovery, empty results and clear actions. Thirty-three local open-disclosure WCAG-tagged axe/reflow audits passed on eleven routes at 1280/375/320 px, with no violations, page overflow, raw TeX or math-renderer errors. CI browser/error-retry/static-fallback and production evidence will be added after execution. Dedicated screen-reader compatibility remains unexecuted AT-001 under ADR-029.

The full MVP review is specified separately in MVP_REVIEW_PLAN.md. This feature release does not declare the MVP complete or claim that BL-010 has been performed.
