# Project State — Optimization Learning Lab

**Last updated:** 2026-11-11  
**Milestone:** M1 — Reusable learning experience  
**Active task:** BL-003 — Reusable lesson layout and metadata, **In Review**  
**Completed:** BL-000 (project continuity infrastructure)  
**Related open items:** BL-001/BL-002 build and production QA, still **In Review**

## Latest verified repository state
- Repository: `lotussavy/lotussavy.github.io`; branch: `main`; Jekyll with a customized shared default layout.
- The public landing page exists in `optimization/index.md`, with a visible Optimization Lab link in the site navigation/footer (source confirmed). Live publication and full Jekyll build have not been verified.
- BL-003 files created:
  - `_layouts/optimization-lesson.html` — nested shared lesson layout.
  - `_includes/optimization/lesson-header.html` — breadcrumbs, lesson ID, difficulty, estimated duration, objectives, review badge.
  - `_includes/optimization/lesson-footer.html` — next/previous navigation, editorial verification and license.
  - `assets/css/optimization-lesson.scss` — scoped Jekyll-compiled stylesheet.
  - `optimization/learn/template-preview.md` — non-indexed editorial example, **not** OPT-001.
  - `docs/project-management/LESSON_AUTHORING.md` — canonical authoring schema and acceptance checklist.
- `_layouts/default.html` loads lesson CSS only for pages with `layout: optimization-lesson`.
- GitHub readback and 13 source assertions passed. Neither a clean Jekyll build nor browser rendering was run; the public preview URL could not be accessed by the web verifier.

## Task status
| ID | Status | Evidence / pending work |
|---|---|---|
| BL-000 | Done | Core continuity docs committed |
| BL-001 | In Review | Source architecture audited; production build workflow unverified |
| BL-002 | In Review | Landing page and main/footer links committed; live verification pending |
| BL-003 | In Review | Layout, reusable includes, CSS, preview, authoring standard committed; Jekyll and browser acceptance pending |
| BL-004 | Ready | Write independently testable LAB-A profit model and exhaustive oracle |
| BL-005–BL-015 | Proposed | Follow dependencies in TASKS.md |

## Next exact action
1. Run `bundle exec jekyll build` in a checkout with GitHub Pages dependencies; verify `_site/optimization/learn/template-preview/index.html` and `_site/assets/css/optimization-lesson.css`.
2. Confirm rendered preview displays objectives, draft status, sidebar, body sections, and footer; verify `noindex`, desktop/mobile, keyboard, links and no console errors.
3. Inspect the live `/optimization/` route and navigation to close BL-002. Record precise evidence in VALIDATION.md; only then mark BL-003 Done.
4. Proceed with BL-004: pure mathematical computation and tests for the first profit lab, independently of the lesson UI.

## Governance
Never equate source checks with full published-page validation. The preview is explicitly a non-indexed draft and does not count as a reviewed lesson.
