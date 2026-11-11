# Architecture & Project Decision Register

A decision is **Proposed**, **Accepted**, **Superseded**, or **Rejected**. Include rationale, alternatives, and evidence. Revising an accepted decision requires a new entry or explicit supersession.

| ID | Decision | State | Rationale / trigger |
|---|---|---|---|
| ADR-000 | Treat GitHub version-controlled files as continuity source of truth | Accepted 2026-11-11 | Chat context can expire; reconstruct work from verifiable artifacts |
| ADR-001 | Use existing academic site as public home | Accepted 2026-11-11 (source-level) | Existing shared Jekyll shell supports new permalink; deployment test pending |
| ADR-002 | Prefer static-first Jekyll + vanilla JavaScript for MVP | Accepted 2026-11-11 (provisional until build QA) | Existing site includes client-side interactions; no framework migration needed for first four lessons |
| ADR-003 | Six-level beginner-to-researcher curriculum | Baseline | Defined in blueprint; revisit after reader testing |
| ADR-004 | Single article pattern and lab contract | Baseline | Consistency, instructional quality, testability |
| ADR-005 | MVP: OPT-001–004 and LAB-A/B | Baseline | Keep first release focused |
| ADR-006 | Advanced eVTOL/PCMTSP after foundational track | Baseline | Avoid blocking MVP on research complexity |
| ADR-007 | Store non-sensitive project docs in repository, excluded from Jekyll published site | Accepted 2026-11-11 | Easy versioning while avoiding public-site navigation; **GitHub contents remain public** |

| ADR-008 | Add visible main/footer links to /optimization/ after committing page source | Supersedes earlier hold, 2026-11-11 | User requested discoverability; site currently contains the landing page source. Deployment remains to be verified. |
| ADR-009 | Use landing page with preview-only lab and no links to unpublished lessons | Accepted 2026-11-11 | Avoid misleading users into thinking LAB-A or OPT-001 are already released |

| ADR-010 | Use `optimization-lesson` nested Jekyll layout with shared header/footer includes | Accepted 2026-11-11 (source-level) | Single maintainable lesson structure, inherits site shell and page SEO without framework migration |
| ADR-011 | Front matter is the lesson metadata contract; draft previews are noindex and off sitemap | Accepted 2026-11-11 | Stable IDs, prerequisites, review flags and editorial controls without server/database |
| ADR-012 | Scoped `ol-` CSS compiled by Jekyll and conditional load on lesson pages | Accepted 2026-11-11 (pending build verification) | Avoid global stylesheet changes and keep lesson assets isolated |

## Decision template
- **ID / date / proposer:**
- **Context and evidence:**
- **Decision and status:**
- **Alternatives and trade-offs:**
- **Consequences / testing:**
- **Revisit trigger:**
