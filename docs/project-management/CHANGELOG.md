# Project Changelog

## 2026-11-11 — Optimization Lab navigation discoverability
- **Changed:** Added `Optimization Lab` in `_data/navigation.yml` between Research and Publications, and in shared footer of `_layouts/default.html`.
- **Rationale:** Visitors should discover the Lab from existing website navigation, not only by typing its URL.
- **Source commits:** `5dce6aaf4535dbb7f76e702d62beebc8fb4516ca` and `af85c0d4c63da2cff234cd44db13438f09e0c0f2`.
- **Pending:** Verify published navigation and `/optimization/` HTTP route; full Jekyll build and browser QA remain unverified.

## 2026-11-11 — Optimization Lab landing page (BL-002)
- **Changed:** Added `optimization/index.md` Jekyll landing page with existing design identity, six curriculum paths, interactive experience-level recommender, foundational learning philosophy and static lab preview.
- **Commit:** `07d85b68154f2a6ce12fc39f4bdb5980e824f66b` (page source).
- **Verified:** File exists on `main`; source front matter, responsive CSS, ARIA controls and links checked.
- **Not verified:** Jekyll production build, GitHub Pages deployment, browser behavior, mobile rendering.
- **Navigation:** Initially left unchanged; navigation was subsequently added in a separate commit (see entry above).
- **Status:** BL-002 In Review.
- **Next:** Verify Pages deployment/build and route, then add nav link and finalize acceptance.

## 2026-11-11 — Core website architecture audit (BL-001)
- **Changed:** Added `ARCHITECTURE_AUDIT.md`; updated project status, tasks, decisions and validation ledger.
- **Verified:** Jekyll theme, layout, navigation, SCSS and existing client-side interactive patterns by direct GitHub reads.
- **Not verified:** clean build, workflow and deployment, browser regression, complete file tree.
- **Public site:** No Lab pages or public navigation changes.
- **Next:** BL-002 public route prototype with Jekyll build and deploy checks.

## 2026-11-11 — Continuity infrastructure (BL-000)
- Added the complete Optimization Lab Blueprint v1.0 as the canonical Markdown master.
- Added project-state handoff, task register, decisions, validation ledger, and continuation instructions.
- Documented repository/public-visibility policy and excluded project documentation from Jekyll build.
- No public Optimization Lab page or simulator was created.
- Next: BL-001 architecture audit.

## Changelog entry template
### YYYY-MM-DD — [task / milestone]
- **Changed:**
- **Verified:**
- **Not verified / blockers:**
- **Commit or reference:**
- **Next action:**
