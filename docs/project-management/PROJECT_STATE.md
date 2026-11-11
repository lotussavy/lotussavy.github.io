# Project State — Optimization Learning Lab

**Updated:** 2026-11-11  
**Current milestone:** BL-006A — OPT-001 instructional design (**Done; documentation milestone only**)  
**Next daily milestone:** BL-006B — Draft the complete OPT-001 lesson (not started)  
**Daily policy:** One principal development objective per working session; see [DAILY_TARGETS.md](DAILY_TARGETS.md).

## Verified status
| ID | Status | Evidence / outstanding |
|---|---|---|
| BL-000 | Done | Version-controlled continuity documentation |
| BL-001 | In Review | Source architecture audit; live production verification not fully recorded |
| BL-002 | In Review | Landing page and navigation source; user confirmed lab link works, full release checklist not closed |
| BL-003 | In Review | Shared lesson layout and authoring guide; complete accessibility review not recorded |
| BL-004 | Done | Exact profit model, 13 candidate fixtures and mathematical tests |
| BL-005 | In Review | User reports GitHub Actions green and lab preview looks good; successful run ID/log not independently fetched in this session, manual assistive-tech checks not recorded |
| **BL-006A** | **Done** | [OPT_001_INSTRUCTIONAL_DESIGN.md](OPT_001_INSTRUCTIONAL_DESIGN.md) created and read back; nine source-content design checks passed |
| BL-006B | Not started | Full draft and lesson-page implementation explicitly deferred |
| BL-006C | Not started | Technical, mathematical and editorial release review deferred |

## BL-006A artifact and scope
- Design file: `docs/project-management/OPT_001_INSTRUCTIONAL_DESIGN.md`.
- Detailed audience description, five measurable LOs, mapping to assessment, 12–15 minute sequence, prediction-first LAB-A experiment, mathematical formulation/proof limits, knowledge-check prompts and answers, accessibility/editorial gates, planned citation verification.
- Exact teaching contrast: `n=8` yields profit 220; `n=10` yields higher revenue 500 but lower profit 200 (illustrative USD).
- Source file commit: `be1e62086cd59defdc02d31b7e228b32d74b083e`.
- Did **not** create a public OPT-001 route, a full article, quiz UI, or another simulator.

## Next exact action: BL-006B (separate daily session)
1. Read the instructional design, blueprint and [LESSON_AUTHORING.md](LESSON_AUTHORING.md).
2. Implement a **noindexed, draft** `optimization/learn/foundations/what-is-optimization.md` using `layout: optimization-lesson`.
3. Reuse `{% include optimization/labs/profit.html %}` without copying mathematical formulas into JavaScript.
4. Add accurate narrative, interpretation, model definition, verified math, versioned Python example, limitations, four assessment items, and citations as appropriate.
5. Run available checks and update `VALIDATION.md` before any release decision.

## Integrity notes
A green GitHub Actions check was reported by the user in this conversation, but the exact run logs and manual screen-reader QA were not retrieved. These are not prerequisites to **planning** BL-006A but remain relevant before publishing the actual lesson.
