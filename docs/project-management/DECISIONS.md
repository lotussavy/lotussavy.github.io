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

| ADR-013 | Implement LAB-A as dependency-free deterministic JavaScript, exposed to CommonJS and browsers | Accepted 2026-11-11 | Avoid solver/server dependency; keep mathematics separate from UI and usable with current Jekyll stack |
| ADR-014 | Report exact optimality only for fixed integer domain 0–12 with full enumeration plus analytical bound | Accepted 2026-11-11 | Guarantees are proven for toy model, not actual fleet operation |
| ADR-015 | Store independent fixtures and Node tests under excluded `scripts/optimization/` | Accepted 2026-11-11 | Reproducible tests without exposing test assets as production pages |

| ADR-016 | Implement LAB-A as a reusable Jekyll include plus scoped SCSS and DOM controller | Accepted 2026-11-11 (source-level) | Fits existing stack and keeps educational computation isolated |
| ADR-017 | Keep LAB-A preview noindexed until browser/lesson review | Accepted 2026-11-11 | Prevent premature claims and avoid linking unfinished OPT-001 publicly |
| ADR-018 | Drive numerical labels and chart through BL-004 model API only | Accepted 2026-11-11 | Single audited source of objective, candidate list and optimum |

| ADR-019 | Adopt one major milestone per working day and track daily gates | Accepted 2026-11-11 | Protect learning quality and avoid rushing the full curriculum; incomplete gates roll forward |
| ADR-020 | Use GitHub Actions Node+Jekyll checks as repeatable release evidence | Accepted 2026-11-11 (execution unverified) | Host reproducible build/test checks in repository; a workflow commit alone is not a pass |

| ADR-021 | Use prediction-first pedagogy and align five OPT-001 objectives to LAB-A interactions and knowledge checks | Accepted 2026-11-11 (design) | Demonstrate decision/objective/feasibility distinction before mathematical formalization; no lesson published |
| ADR-022 | Split OPT-001 work into instructional design, draft implementation and separate release review | Accepted 2026-11-11 | Enforce one milestone per session and avoid conflating lesson plan with published page |

| ADR-023 | Keep OPT-001 on a stable but nonindexed draft route until separate BL-006C release review | Accepted 2026-11-11 | Complete article can be tested while preserving user preference for daily milestones and preventing premature public release |
| ADR-024 | Use an existing LAB-A include and versioned Python reproduction; never duplicate browser mathematical logic | Accepted 2026-11-11 | Retain a single audited JavaScript source of interactive results; Python aids independent comprehension |
| ADR-025 | Emit robots metadata from Jekyll front matter and load MathJax only for lesson pages | Accepted 2026-11-11 (render validation pending) | Ensure development previews request no indexing and equations have a dedicated presentation path |

| ADR-026 | Block OPT-001 publication until current rendered Chromium/MathJax checks and manual accessibility review pass | Accepted 2026-11-11 | Accurate source alone does not establish accessible live math or release readiness |
| ADR-027 | Load LAB-A stylesheet in the shared lesson head based on declared labs | Accepted 2026-11-11 | Semantic HTML and one consistent reusable component; source change verified, deployed render pending |

## Decision template
- **ID / date / proposer:**
- **Context and evidence:**
- **Decision and status:**
- **Alternatives and trade-offs:**
- **Consequences / testing:**
- **Revisit trigger:**

## 2026-11-13 — release scope and verification decisions

### ADR-028 — owner-authorized completion through OPT-001

**Accepted.** The owner's instruction to complete all work before OPT-002 and update the live website supersedes the earlier illustrative dates and separate-session allocation. Complete and publish OPT-001 and LAB-A, then stop. The owner has authorized publication; no additional editorial permission prompt is required.

### ADR-029 — precise accessibility evidence and compatibility follow-up

**Accepted; revises ADR-026's test-method requirement.** Retain the blocking production build, mathematical, rendered-equation, browser, keyboard, mobile-reflow and measured-contrast checks. Use manual browser accessibility-tree and assistive-MathML inspection plus automated WCAG-tagged axe audits as the supported accessibility review for this release. A dedicated screen-reader session could not be completed after an attempted native setup; record this explicitly as AT-001, a compatibility follow-up, and do not claim independent human screen-reader approval, universal assistive-technology compatibility, or full WCAG conformance. `accessibility_reviewed` means the documented review was performed, not that every device combination was certified.

### ADR-030 — canonical profit lab and stable existing links

**Accepted.** Publish LAB-A at `/optimization/labs/profit/` and preserve `/optimization/labs/profit-preview/` through the GitHub Pages-supported redirect plugin already present in the dependency lock. Link the homepage to the released lesson and canonical lab. Keep the authoring template nonindexed.
