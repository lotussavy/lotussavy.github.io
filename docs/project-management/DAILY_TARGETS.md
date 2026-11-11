# Optimization Lab — Daily Development Targets

**Adopted:** 2026-11-11  
**Policy:** One primary, demonstrably verifiable development milestone per working day. Do not bundle unrelated lessons or claim unperformed tests as complete. A blocked item rolls to the next working session; no fabricated percent completion.

## Daily working agreement

1. At session start, read `PROJECT_STATE.md`, this plan, and relevant task acceptance criteria.
2. Set **one primary target**, bounded by a tangible deliverable and test evidence. Smaller maintenance updates are permitted if needed to complete that target.
3. Do not expand into another major lesson/lab in the same session merely because the current code has been committed.
4. Run feasible automated checks, record exact commands and actual results; mark unavailable browser/CI checks as pending.
5. End with an updated handoff and **one next-day target**. Dates below are targets, not promises of automatic/asynchronous work.
6. Keep unpublished experiments in nonindexed preview routes and distinguish source, test and live deployment status.

## Rolling working-day targets

| Date | Primary target | Acceptance evidence | Current state |
|---|---|---|---|
| 2026-11-11 | BL-005 verification infrastructure: automated tests + Jekyll smoke-check workflow; capture remaining QA gaps | Workflow committed, source checked, CI results if available; browser/Jekyll uncertainties documented | In Review |
| 2026-11-12 | BL-005 live/deployment and browser QA, including Chromium Actions log inspection and repair | Successful Jekyll build, correct preview CSS/JS, responsive/keyboard checks, linked evidence | Planned; do not presume completion |
| 2026-11-13 | BL-006 editorial design for OPT-001: narrative structure, learning objectives, prediction exercise, assumptions | Article outline, citations/lesson plan reviewed; no premature 'published' label | Planned |
| 2026-11-16 | BL-006 first full OPT-001 draft using the existing lesson template and LAB-A | Complete draft with math, interpretation, knowledge checks; draft is noindex | Planned |
| 2026-11-17 | BL-006 scientific/editorial/functional QA and publication decision | Math/content checks, references, full browser verification, release record | Planned |

The date sequence is an illustrative allocation; if a predecessor check fails or a session does not take place, move the incomplete target forward rather than silently skipping the gate. There is **no automatic work** between user sessions.

## Actual work completed outside originally suggested date allocation

- **2026-11-11:** The user explicitly authorized starting BL-006A in this session, superseding the previously illustrative November 13 allocation. Instructional design has been completed as a single scoped milestone; no article implementation has begun.
- **Next distinct session:** BL-006B complete draft. Remaining CI/manual QA should be tracked independently and not silently called complete.
- The dates in the rolling plan are planning suggestions, not fixed assertions about the work's execution.

## BL-006B scoped work checkpoint (2026-11-11)

- User separately authorized BL-006B in this session. The complete OPT-001 **draft** has been implemented and verified at source level.
- The source is noindexed and remains unlisted; publication, manual accessibility checks and final academic acceptance are not claimed.
- **Next distinct working session:** BL-006C review and explicit publication decision, not OPT-002 or the rest of the curriculum.
- The original November 16/17 dates are illustrative planning allocations superseded by actual user-authorized working sessions.

## Today's hard stop

**Do not publish OPT-001 during the BL-006B drafting session.** Draft creation and isolated Python/source verification are today's acceptance scope; full review and release belong to BL-006C.

## Next-session restart instruction

> Resume the Optimization Learning Lab. Read `docs/project-management/PROJECT_STATE.md`, `DAILY_TARGETS.md`, and `VALIDATION.md`. Work only on the next one-day target, collect verifiable evidence, then update all project records. Do not advance to the next lesson until today's acceptance gate is addressed.
