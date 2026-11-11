# Project State — Optimization Learning Lab

**Last updated:** 2026-11-11  
**Current milestone:** M0 — Audit and foundation  
**Active task:** BL-001 — Repository/framework/build audit  
**Completed task:** BL-000 — Establish project continuity documentation  
**Project stage:** Documentation infrastructure implemented; no Optimization Lab public pages or simulators implemented yet.  
**Canonical blueprint:** [MASTER_BLUEPRINT.md](MASTER_BLUEPRINT.md)

## Verified facts
- Source repository: `lotussavy/lotussavy.github.io`; default branch: `main`; repository is public.
- Jekyll configuration is stored in `_config.yml`; `Gemfile` includes `github-pages`.
- Navigation is in `_data/navigation.yml`; menu currently includes Home, Research, Publications, CV, Blog, Contact.
- This documentation directory did not exist before BL-000.
- Full site architecture/build/deployment audit is **not complete**.

## Status
| ID | Status | Evidence | Next action |
|---|---|---|---|
| BL-000 | Done (documentation created; files readable) | GitHub committed markdown files, blueprint and continuation procedure | Maintain after each development session |
| BL-001 | Ready | Preliminary inspection of Jekyll config and navigation | Full repo audit: layouts, page source, assets, JS, CSS, math, build/deploy, mobile constraints |
| BL-002–BL-015 | Proposed | Blueprint backlog only | Respect dependencies in TASKS.md |

## Decisions and open questions
- Proposed public path: `/optimization/` (not yet finalized).
- The site should remain visually/functionally unchanged in BL-000.
- Static-first teaching interfaces are provisional pending BL-001.
- Private or sensitive materials belong in a separate private repository, not here.

## Next exact action
Complete **BL-001**: inspect the current repository structure, theme/layouts, assets, build workflow and dependencies; write a concise architecture inventory and record whether `/optimization/` is compatible. Do not begin public UI implementation before this audit.

## Last-session handoff
- Work: established canonical markdown blueprint, status, decisions, tasks, validation, changelog, and resumption instructions.
- Validation: GitHub file reads after commits; Jekyll `exclude` list checked (if configured).
- Not validated: whole-site Jekyll build/deployment and any Optimization Lab UI.
- Next owner: future ChatGPT session or user.
