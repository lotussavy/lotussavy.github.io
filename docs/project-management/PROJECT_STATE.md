# Project State — Optimization Learning Lab

**Updated:** November 17, 2026.

**Current checkpoint:** BL-009 glossary/search is completed, reviewed and published. Four foundation lessons, LAB-A/B, the introductory activities, 30 glossary terms and local search are live. M3 is complete in the recorded review scope. M4/full MVP acceptance remains in progress; BL-010 has not been executed.

**Latest released source:** `e557de698779f0c8afa219ec1a1bc1d5f2ae5b8d`. The subsequent documentation-only commit records verified results without changing tested website code.

| Work item | State | Verified result |
|---|---|---|
| BL-001–007 / OPT-001–004 | Done | Earlier mathematical/Python/browser regressions pass |
| BL-008 / LAB-B | Done | Independent geometry and browser checks retained |
| BL-009 / glossary | Done | 30 definitions/examples, aliases, 90 related-term links and published-lesson links |
| BL-009 / search | Done | 38 entries: 30 terms, four lessons and four activities; local matching/filtering and shareable fragments |
| M3 / foundation package | Complete in stated scope | Four lessons, required labs and glossary/cross-links released |
| BL-010 / full MVP review | Ready; not executed | Next task; inspect and finish remaining package requirements using MVP_REVIEW_PLAN.md |
| M4 / full MVP launch | In Progress | Start-guide/editorial requirements and overall acceptance remain |
| AT-001 / dedicated screen-reader compatibility | Ready; unexecuted | Existing explicitly documented follow-up under ADR-029 |

## Live reference and learning journey

- [Glossary](https://lotussavy.github.io/optimization/concepts/): alphabetical browsing/filtering, stable term anchors, examples, aliases and related lessons/terms.
- [Search](https://lotussavy.github.io/optimization/search/): published names, aliases, definitions, examples, summaries, IDs and key concepts; all-word matching and type filters.
- [Optimization homepage](https://lotussavy.github.io/optimization/) links to the reference pages. All released lesson/activity headers expose the same links; every current concept chip has a glossary destination.
- The four lessons remain OPT-001 What Is Optimization?, OPT-002 Decisions, Objectives, and Constraints, OPT-003 Feasibility and Trade-offs, and OPT-004 What Does ‘Optimal’ Mean?. Existing canonical lesson/lab paths and the legacy profit redirect remain valid.

Search matching runs in the browser using a generated catalog. Query state is stored in the URL fragment; no search API receives it. Definitions and browse links remain usable with JavaScript off. Draft/preview and unreleased advanced content are excluded from the index. Related-term links reveal their targets even if a filter hid them.

## Release evidence

- [Candidate Optimization validation: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44187684114); [candidate site-wide checks: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44187684170), before promotion.
- [Main Optimization validation: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44188093671); [main site-wide checks: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44188093583); [Pages deployment: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/44188091799).
- 43 Node tests pass: 40 model/data/search regressions plus three generated-index tests. Earlier Python checks also pass. Glossary identities, alphabetical order, aliases, related targets, current concept chips and published-lesson links are checked.
- Generated catalog has exactly 30 terms, four lessons and four activities. Each entry points to a built page/anchor; definitions and aliases match their shared source; exact titles/IDs and representative aliases retrieve the expected result.
- Strict local production Jekyll build and same-site validation pass: 112 HTML pages and 4,689 link/asset references.
- All six browser suites pass, including the new reference suite: filters, alias/ID matching, shared-fragment reload, skip-link state retention, target reveal, no-result/error/retry states, keyboard, mobile and no-JavaScript navigation.
- 33 open-disclosure WCAG-tagged axe/reflow audits pass: eleven routes × 1280/375/320 px, with no violations, document overflow, raw TeX or math-renderer errors.
- Direct public review confirmed glossary/search navigation, alias lookup, filtered results, share/reload behavior, direct term/lesson links and reference availability from lesson navigation.

## Review boundary

Automated audits, keyboard, accessible names/status, visual reflow, text alternatives and fallback behavior were reviewed. Dedicated NVDA/VoiceOver/Orca compatibility remains unverified AT-001. Passing axe and reviewed flags do not claim full WCAG conformance or universal assistive-technology compatibility. Earlier mathematical/proof scopes are retained.

## Next exact action

When requested, begin **BL-010: full MVP review** using MVP_REVIEW_PLAN.md and MASTER_BLUEPRINT.md §5/§10. Inspect and finish the dedicated beginner start-guide and editorial/corrections requirements, assess the basic concept relationships and complete an end-to-end learner/release review. The output is an acceptance report with passed gates, repaired issues, remaining limits and a release verdict. The plan itself is not a completed review. OPT-005 and advanced LP/routing work have not started. No background work is implied.
