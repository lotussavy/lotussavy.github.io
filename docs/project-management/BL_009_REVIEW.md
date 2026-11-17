# BL-009 — Glossary and Search Review

**Date:** November 17, 2026. **Outcome:** Published after all feature-release gates passed in the documented scope.

**Released source:** `e557de698779f0c8afa219ec1a1bc1d5f2ae5b8d`. Candidate branch: `bl009-release-2026-11-17`.

## Content and index review

Thirty concise definitions have synthetic examples, aliases, related terms and a published foundation-lesson link. The 90 related-term links and current concept chips resolve. Definitions separate feasible candidates from infeasible models, decisions from values, local/global/best-known claims, maximization/minimization bound roles and what a positive gap does or does not establish. Later vocabulary does not claim an unreleased lesson or solver exists.

One JSON glossary source generates alphabetical HTML and term index records. The catalog derives lesson/activity entries from published lesson-layout pages: 30 terms, four lessons and four activities, 38 entries total. It excludes drafts, previews, the legacy redirect and unimplemented advanced content. Stable anchors implement term destinations without thin duplicate pages.

Search matches names, aliases, definitions, examples, summaries, IDs and key concepts. It uses all-word partial matching, case/punctuation/diacritic normalization, deterministic ranking and content-type filters. This is lexical matching, with no typo correction or semantic-search claim. Query state uses URL fragments; matching runs locally without a search API. Native skip/top links preserve current search state.

## Verification

- 43 Node tests pass: the 33 earlier model/UI regressions, seven new glossary/search tests and three generated-index tests. Coverage includes data identities/order/relationships, current concept coverage, aliases/ID retrieval, query intersection/ranking/type filters, invalid records/links, immutable outputs and shared-source/index consistency.
- Earlier Python checks pass. Strict local production Jekyll build and same-site validation pass: 112 HTML pages, 4,689 link/asset references.
- All six browser suites pass. New reference checks cover alias and compact-ID search, type filtering, fragment reload, native skip-link state retention, related-term target reveal, clear/empty states, error/static navigation/retry, 375/320 px reflow and no-JavaScript glossary/browse availability.
- Thirty-three open-disclosure WCAG-tagged axe/reflow audits pass: eleven routes × 1280/375/320 px, with no violations, document overflow, raw TeX or math-renderer errors. Visual/keyboard review covers new controls and result/definition layouts. Existing lesson/lab behavior remains covered.
- Direct production review confirms reference links from homepage/lessons, alias lookup, type filtering, share/reload behavior and term/lesson navigation. Browser matching does not submit query fragments to a search service.

## Release evidence

| Gate | Result | Evidence |
|---|---|---|
| Candidate Optimization validation | Success | [44187684114](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44187684114) |
| Candidate site-wide workflow | Success | [44187684170](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44187684170) |
| Main Optimization validation | Success | [44188093671](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44188093671) |
| Main site-wide workflow | Success | [44188093583](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44188093583) |
| Pages deployment | Success | [44188091799](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44188091799) |
| Public observation | Verified | Glossary/search, shared state, filters and cross-links |

Candidate checks passed before promotion. Production was observed after deployment. The subsequent documentation-only commit records evidence without changing tested website code.

## Test timing

The initial candidate’s reference suite in run 44186910640 checked the URL before the native anchor hash-change event completed. Waiting for the actual expected URL makes the assertion reflect the completed interaction; query/filter checks and all release thresholds remain enabled. Final replacement runs above passed.

## Scope and handoff

BL-009 and M3 are complete in the recorded scope. The full MVP review is planned in MVP_REVIEW_PLAN.md; BL-010 has not been executed. Start-guide/editorial requirements and overall package acceptance remain. OPT-005 is not started.

Dedicated NVDA/VoiceOver/Orca compatibility remains unexecuted AT-001 under ADR-029. Passing axe and feature review do not claim full WCAG conformance or universal assistive-technology compatibility.
