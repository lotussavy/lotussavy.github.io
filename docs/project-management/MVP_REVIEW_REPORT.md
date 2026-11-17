# Foundation MVP Review — BL-010

**Review date:** November 17, 2026. **Current disposition:** Local package review passed; candidate CI, promotion, deployment and public verification are pending. This checkpoint does not yet close BL-010/M4.

## Package and acceptance boundary

The owner requested completing the full review and wrapping up the MVP. The P0 foundation package is OPT-001–004, LAB-A/B, the landing page, beginner guide, at least 20 glossary terms, basic concept relationships and an editorial/corrections page. Four activities and 30 terms are implemented. OPT-005 and advanced labs are outside this release.

The review uses the explicit ADR-029 accessibility boundary. Dedicated screen-reader compatibility remains AT-001. Assisted editorial inspection and reproducible mathematical/technical checks were performed; independent external human peer review and novice-learner outcome testing were not performed. The owner's instruction authorizes publication, without implying those unperformed reviews.

## Gaps repaired during the review

1. Added `/optimization/start/`: prerequisites, reading estimates, ordered lesson/activity experiments, a completion check, keyboard/Python guidance and concept relationships.
2. Added `/optimization/about/`: synthetic-data scope, review method/evidence, accessibility limits, citation/reuse terms and a correction/access-problem route. Its mailto template targets the existing public maintainer address and requests the page, steps, expected/observed result and optional access context. No test message was sent.
3. Exposed Start, Glossary, Search and About/corrections consistently in resource navigation. Lesson/reference footers expose the review method and correction path.
4. Replaced OPT-004's stale statement that glossary/search were still missing with the completed path's reference and reflection destinations. OPT-005 remains clearly planned with no dead link.
5. Extended regressions to the integrated learner journey, all four published downloads, correction template, canonical/robots/sitemap metadata and the two new routes. Added targeted mobile Lighthouse measurements for the start guide and OPT-004; these report laboratory baselines, not field-user performance.

**Relationship scope:** The start guide explicitly connects decisions → domain/constraints → feasible set → objective → local/global/best-known/certificate. Each term links to an accessible glossary definition, example, related terms and lesson. The 30 glossary terms provide 90 related-term links; lesson prerequisites connect the sequence. This satisfies the P0 basic relationship requirement without a separate visual graph at the proposed `/optimization/map/` route. No public link promises that route.

## Content and mathematical review

| Component | Independent evidence and reviewed interpretation |
|---|---|
| OPT-001 / LAB-A | All 13 fleets match the fixed reference table; profit is revenue minus cost. Completing the square proves the unique n=8, profit $220 answer; revenue instead peaks at n=10, $500. Fixed $100 cost applies even at zero. USD are illustrative per model period. |
| OPT-002 | All 15,639 supported parameter/objective settings agree with a capacity/vertex certificate. B<100 is infeasible; otherwise allowed fleets are 0 through min(12,A,floor((B−100)/20)). No minimum service rule is invented. Changing the goal preserves feasibility; changing a limit can remove choices. |
| OPT-003 / LAB-B | All 109,368 rule/limit settings agree with boundary intersections; Python checks exact rational geometry. Checked resource units, every-rule AND, selected-point violations, slack/tightness, removal of a rule and trade-offs. Default vertices, empty set, included segment and singleton agree. Continuous choices are distinct from half-step controls; no objective or optimizer is claimed. |
| OPT-004 | Every supported U agrees with the independent piecewise certificate. Reviewed the 14/3 crossover, one-sided local classifications, branch bounds, infeasible records and all 22,528 integer candidate-record cases. At U=10, x=8/value10 is global and x=2/value6 is local; U=6 has two optimizers, and U=0 a singleton. A record alone is not a global proof; a positive bound gap does not prove suboptimality. |
| Glossary/search | Reviewed all 30 definitions and examples, objective direction, decision/value distinction, bounds, local/global definitions and attainment caveat. Source/index integrity tests validate aliases, 90 related targets and lesson links. Search has 38 lesson/activity/term entries and explicit lexical all-word matching; guides remain available in shared navigation. |

Lesson prose, formulations, displayed values, assumptions and knowledge-check answers were inspected. Primary references were reopened on November 17: [MIT Lecture 1](https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/40d1bb14223439515ac3df1aa229ecdd_MIT15_053S13_lec1.pdf) for formulation/terminology, [Boyd and Vandenberghe's author-hosted book](https://stanford.edu/~boyd/cvxbook/) for feasibility/optimality, [Google's OR-Tools introduction](https://developers.google.com/optimization/introduction/python) for modeling steps, and [Python Fraction documentation](https://docs.python.org/3/library/fractions.html) for exact arithmetic. Teaching coefficients remain original; these sources are background, not empirical validation of the synthetic examples.

## Executed local checks

- 44 Node tests pass: 40 model/data/search regressions plus four generated-index/metadata tests.
- All four downloadable Python examples execute. OPT-001 source/download copies match; the three OPT-002, three OPT-003 and three OPT-004 Python regression tests pass, including displayed/downloaded code consistency.
- Strict production Jekyll build passes. Same-site validation checks 114 HTML pages and 4,833 link/asset references with no missing targets.
- Direct browser journey: homepage → Start → OPT-001 → OPT-002 → OPT-003 → OPT-004 → search → glossary → About/corrections. Keyboard Enter and slider arrows work; profit optimum/arrow/reset gives $220/$215/$140; budget80 yields no optimizer; feasibility empty and line cases remain distinct; optimality verification and tied answers match the model; “incumbent” retrieves the correct term. Inspected correction recipient, subject and body fields without sending mail.
- Managed-browser harness completed 39 audits: 13 routes × widths1280/375/320, opening every disclosure and waiting for math/search/fonts. No WCAG-tagged axe violations, document overflow, raw TeX or math errors. New guide was visually inspected at desktop and narrow width. Detailed repeatable browser regressions run in candidate CI before promotion.
- All 13 published routes have exactly one h1, canonical and index/follow robots directive, and appear in the sitemap. Draft template/legacy redirect are excluded from the sitemap and search catalog; the draft retains noindex/nofollow. Code downloads and reference anchors resolve.

## Release gates still pending at this checkpoint

Both candidate workflows must pass before promotion. Then main checks, Pages deployment and direct public behavior must be verified. The final checkpoint will record source SHA, run links, targeted Lighthouse measurements and the release verdict here and in the continuity files.

## Remaining limits

- AT-001: dedicated NVDA/VoiceOver/Orca compatibility is unexecuted. Axe, browser accessibility trees, MathML, keyboard and reflow checks do not constitute full WCAG conformance or universal assistive-technology certification.
- No external independent human peer review or novice learning-outcome study. Reading times are estimates.
- Live interactions/search require JavaScript; MathJax uses an external CDN. Static lesson/reference text and browse navigation remain available. Correction email requires the learner's email app or manually composing to the visible address; delivery/response is not claimed as tested.
- The release covers synthetic bounded teaching models and supported controls, not arbitrary optimization problems or production AAM operations. Later levels remain planned.
