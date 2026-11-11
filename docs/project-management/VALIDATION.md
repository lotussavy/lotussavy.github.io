# Validation Ledger — Optimization Learning Lab

Record **what was tested**, its expected/actual output, and evidence. Never report an unexecuted test as passed.

## BL-000 — Documentation infrastructure (2026-11-11)
- Confirmed Jekyll configuration, Gemfile, navigation file and public repository through connected GitHub reads.
- Created repository-level project-management docs from the original blueprint.
- Documentation readback and updated Jekyll exclusion are the acceptance checks.
- **Not run:** full Jekyll build, GitHub Pages deployment, browser regression, solver tests.

## BL-001 — Core source architecture inspection (2026-11-11)
- Direct GitHub reads: `_config.yml`, `Gemfile`, `_layouts/default.html`, `_data/navigation.yml`, `index.md`, `research.md`, `blog.md`, `_includes/home-merged.html`, `_includes/research-interactive-hub.html`, `_includes/head-custom.html`, and `assets/css/style.scss`.
- Verified: Jekyll theme/SEO configuration, shared layout, navigation loop, static front-matter routing patterns, source interaction styles and scripts, scoped responsiveness and motion support, exclusion of continuity documents.
- **Not tested:** clean build, actual GitHub Pages deployment, precise publishing workflow, entire repository tree, keyboard/browser QA or production route.
- Evidence: [ARCHITECTURE_AUDIT.md](ARCHITECTURE_AUDIT.md).
- Status: Source audit **passed**; full BL-001 acceptance **pending**.

## BL-002 — Landing page source validation (2026-11-11)
- **Committed file:** `optimization/index.md` at `07d85b68154f2a6ce12fc39f4bdb5980e824f66b`.
- **Source readback:** Passed; file present on `main`, front matter declares `layout: default` and `permalink: /optimization/`, with meaningful title and description.
- **Static source inspection:** Passed for scoped `ol-` CSS, 560px/850px responsive breakpoints, reduced-motion handling, native button/ARIA pressed state, five content sections, and JavaScript path-selection listener. No unpublished lesson links; first lab is labeled a static preview.
- **Navigation:** Deliberately unchanged until live route is verified.
- **GitHub commit combined statuses:** Returned empty statuses; **not evidence of CI success**.
- **Commit workflow lookup:** Returned empty PR-triggered workflow runs; **not evidence of Pages deployment status**.
- **Public URL check:** Request via available browser could not access `https://lotussavy.github.io/optimization/`. Thus the route is **not verified live**.
- **Local build:** Not run; container has Ruby but no available `bundle` or `jekyll` command, and network access to fetch repository/dependencies was unavailable.
- **UI/browser QA:** Not run; keyboard, mobile, JavaScript behavior and production render remain pending.
- **Status:** BL-002 **In Review**, not Done; finish build/deploy checks before navigation change.

## Required test categories for future features
1. **Mathematical unit and property tests:** objective, constraints, boundary cases.
2. **Independent oracle:** exhaustive enumeration or trusted solver on tiny instances.
3. **UI integration:** controls, plots, numbers and narrative agree.
4. **Accessibility:** keyboard, readable labels, contrast, motion preferences.
5. **Responsive/performance:** desktop, narrow mobile, dependency weight.
6. **Publishing:** links, metadata, citations, site build, deployed route.
7. **Regression:** retained results after changes to UI or libraries.

## First lab oracle (illustrative teaching model)
- n integer in [0,12]; revenue = 100n - 5n²; cost = 20n + 100; profit = 80n - 5n² -100.
- n=0 => -100; n=4 => 140; n=8 => 220; n=12 => 140.
- Exhaustive enumeration confirms maximum at n=8 and profit=220.
- **Status:** Reference expected results only; automated test implementation not yet written.

## Test log format
| Date | Task | Type | Command or method | Expected | Actual | Status | Evidence |
|---|---|---|---|---|---|---|---|
| 2026-11-11 | BL-000 | Repository inspection | GitHub read `_config.yml`, `Gemfile`, `_data/navigation.yml` | Recognize baseline stack | Jekyll/GitHub Pages | Passed | GitHub source reads |

A passing repository read is not evidence of a successful production site deployment.
