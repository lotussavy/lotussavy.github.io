# Project State — Optimization Learning Lab

**Updated:** 2026-11-11  
**Current milestone:** **BL-006B — OPT-001 complete non-indexed draft (Done as a drafting milestone)**  
**Next milestone:** **BL-006C — Mathematical/editorial/accessibility review and release decision**  
**Daily development policy:** One primary milestone per working session; see [DAILY_TARGETS.md](DAILY_TARGETS.md).

## Task register snapshot

| ID | Status | Evidence / remaining |
|---|---|---|
| BL-000 | Done | Continuity documents in GitHub |
| BL-001 | In Review | Source architecture audited; full deployment-check evidence not fully captured |
| BL-002 | In Review | Optimization Lab homepage implemented; user confirms LAB-A link works, full release checklist not formally closed |
| BL-003 | In Review | Shared lesson layout in source; human accessibility QA outstanding |
| BL-004 | Done | Exact LAB-A engine, reference cases, and mathematical tests |
| BL-005 | In Review | LAB-A simulator implemented; user reported green CI and usable interface, but exact run ID and screen-reader QA not independently recorded |
| BL-006A | Done | [OPT_001_INSTRUCTIONAL_DESIGN.md](OPT_001_INSTRUCTIONAL_DESIGN.md) |
| **BL-006B** | **Done (draft)** | Complete 11-section lesson, reusable LAB-A include, Python reproduction, source checks; not editorially reviewed or published |
| BL-006C | Ready for next session | Review equation rendering, citations, content, accessibility, build and publication gate |
| BL-007 and later | Proposed | Not started |

## BL-006B artifacts

- **Draft lesson:** `optimization/learn/foundations/what-is-optimization.md`
- **Intended route:** `/optimization/learn/foundations/what-is-optimization/` (not linked from homepage yet)
- **Safety metadata:** `lesson_status: draft`, `robots: noindex,nofollow`, `sitemap: false`; all review booleans remain false.
- **LAB-A reuse:** `{% include optimization/labs/profit.html %}` consumes the existing model/UI. No second interactive implementation was created.
- **Reproduction:** `scripts/optimization/opt001_example.py`; identical Git blob to locally executed script, correct n=8/P=220 output and assertions.
- **Shared layout fix:** `_layouts/default.html` now emits a robots meta tag for `page.robots`, and conditionally loads MathJax for lesson pages.
- **Workflow extension:** GitHub Actions tests the Python script and checks that the Jekyll-generated draft page contains LAB-A and the noindex directive.
- **References:** MIT OpenCourseWare introductory slides; Stanford author-hosted Boyd & Vandenberghe textbook resources; verified URLs in article.

## Verified this session

- Ten source checks passed: metadata, noindex/draft flags, LAB-A include, all eleven sections in order, five collapsible answer/proof blocks, reference links, no premature OPT-002 navigation, robots layout rendering instruction, MathJax loading instruction, CI smoke assertions.
- Exact source of the standalone Python file was executed locally under Python; output `Optimal fleet: 8 vehicles` and `Maximum profit: $220`. Local `git hash-object` matched GitHub blob `8919283fb9ea5bac793910395c2fad2ea694cf4c`.
- **Not independently verified:** newest GitHub Actions result, compiled Jekyll HTML, MathJax rendering in the browser, screen-reader/mobile review, external-link health from production.
- **Not done:** publication, adding OPT-001 to the homepage navigation, OPT-002 development.

## Next exact action (BL-006C, separate daily session)

1. Inspect GitHub Actions result for `optimization-lab-validation.yml`, including generated OPT-001 page and noindex checks.
2. Visually inspect rendered mathematics (especially backslash-escaped delimiters and `details` content), code blocks, embedded LAB-A, responsive layout and contrast.
3. Check copy, equations, citation accuracy, quiz explanations, source attribution and Python output; document human review findings.
4. Test keyboard/screen reader interactions, 375px mobile and reduced motion; fix issues in the existing draft only.
5. Only **after evidence and approval** decide whether to change draft status/indexing and add a public link. Until then, remain noindexed and unlisted.

## Resume references
[OPT_001_INSTRUCTIONAL_DESIGN.md](OPT_001_INSTRUCTIONAL_DESIGN.md), [LESSON_AUTHORING.md](LESSON_AUTHORING.md), [LAB_A_MODEL.md](LAB_A_MODEL.md), [LAB_A_UI.md](LAB_A_UI.md), [VALIDATION.md](VALIDATION.md), [DAILY_TARGETS.md](DAILY_TARGETS.md).
