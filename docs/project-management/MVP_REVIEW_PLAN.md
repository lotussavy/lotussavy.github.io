# Full MVP Review — BL-010

**Prepared:** November 17, 2026. **State:** Planned; this is a review specification, not a passed release report.

## What MVP means here

MVP means **minimum viable product**: the first complete, usable public version of the Optimization Learning Lab. It is the foundation package defined in MASTER_BLUEPRINT.md §5, not all thirty planned lessons or the advanced routing/research labs.

The full MVP review checks the package as one learner journey after its individual features have passed their own checks. It asks whether a new learner can start, understand the four foundation lessons, use the required labs, look up an unfamiliar word, find content, verify an example and report a problem without encountering misleading claims or missing paths.

## Required package and current starting point

| Package component | Starting point before BL-010 |
|---|---|
| OPT-001–004 | Released, with mathematical examples, knowledge checks and Python |
| LAB-A and LAB-B | Released; additional OPT-002/004 activities also available |
| Landing page | Released |
| Glossary and local search | Released on `e557de698779f0c8afa219ec1a1bc1d5f2ae5b8d`: 30 terms and 38 indexed entries; see BL_009_REVIEW.md for passing release evidence |
| Beginner start guide | Homepage orientation exists; the dedicated start-page requirement still needs completion or an explicitly documented equivalent |
| Basic concept relationships | Glossary related-term links, concept chips and lesson prerequisites provide initial relationships; assess clarity and coverage across the beginner path |
| Editorial method and corrections | Dedicated public editorial/corrections route still needs completion |

These are package requirements and evidence to inspect, not a claim that the entire MVP is ready. A graph at the originally proposed `/optimization/map/` route is not silently required if the approved basic relationship requirement is met by accessible links; any scope decision must be recorded.

## Review gates

| Gate | Concrete checks | Evidence required |
|---|---|---|
| Learning journey | Start → OPT-001 → OPT-004; prerequisites; labs; glossary and search; returns to the path | Observed end-to-end task script, including keyboard use and mobile |
| Content and mathematics | Definitions, notation, units, assumptions, worked values, ties, infeasibility and the limits of optimality claims | Separate content/mathematical review record; independent calculations remain reproducible |
| Interactions and code | Every control/reset/error state, downloads, constraint changes and exact status labels | Passing model/Python/browser regressions and verified public behavior |
| Reference and discovery | Minimum 20 accurate terms, aliases, related links, search relevance, direct anchors and static fallbacks | Data/index integrity checks and representative search/navigation tasks |
| Accessibility and reflow | Labels, focus, keyboard, contrast, text alternatives, MathML, reduced motion, 320/375 px layouts and no-JavaScript navigation | Browser/axe report plus explicit manual-test scope; retain AT-001 if dedicated screen-reader compatibility is untested |
| Editorial and corrections | Reviewed dates, teaching-data labels, licensing, references, correction/reporting route and clear release/planned labels | Public pages and tested correction path; no claim of an unperformed review |
| Links and search engines | Canonical/robots/sitemap, no public dead links or draft discovery, consistent metadata | Production build, link/metadata checks and public observation |
| Release and continuity | Current commit, green workflows, deployment, live URLs, remaining issues and next task | Final BL-010 release report, updated state/tasks/changelog and explicit go/no-go decision |

## How to carry it out

1. Inspect current GitHub source and the latest feature-release evidence.
2. Complete the start-guide and editorial/corrections requirements and any other verified package gaps.
3. Run one representative beginner journey across all released components. Record confusing transitions and broken assumptions, not just HTTP responses.
4. Run the defined checks, fix observed defects, and rerun checks affected by those fixes.
5. Publish only after the agreed gates pass, verify production and write a release verdict with any explicit limits.

The output is a concrete acceptance report listing passed checks, repaired issues, unresolved items and the release verdict. It records accessibility-test scope and learner-feedback limits explicitly. Dedicated screen-reader compatibility retains its separate AT-001 status until performed and recorded. OPT-005 follows the completed MVP package.

## Current scope of this session

The owner requested completing glossary/search and explaining this review. BL-009 is now verified and published. BL-010 has not been performed by creating this plan; its first execution is the next owner-directed task.
