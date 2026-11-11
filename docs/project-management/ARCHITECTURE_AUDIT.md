# BL-001 — Website Architecture Audit

**Date:** 2026-11-11  
**Repository:** `lotussavy/lotussavy.github.io` (public)  
**Branch inspected:** `main`  
**Audit state:** Source inspection completed for core Jekyll files; deployment workflow and end-to-end build verification remain open.

## 1. Verified site architecture

| Area | Source | Finding |
|---|---|---|
| Generator | `_config.yml`, `Gemfile` | Jekyll with `jekyll-theme-slate` and `github-pages` gem; includes `jekyll-seo-tag` and `jekyll-sitemap` |
| Site URLs | `_config.yml` | `url: https://lotussavy.github.io`; empty `baseurl` |
| Page shell | `_layouts/default.html` | Shared header/main/footer; CSS linked to `/assets/css/style.css` via `relative_url`; default layout renders `{{ content }}` |
| Navigation | `_data/navigation.yml` | Home, Research, Publications, CV, Blog, Contact; looped into default layout |
| Homepage | `index.md` | Uses `layout: default`, `permalink: /`, and `_includes/home-merged.html` |
| Research page | `research.md` | Uses `layout: default`, `permalink: /research/`, `_includes/research-interactive-hub.html` |
| Blog | `blog.md` | Uses `layout: default`, `permalink: /blog/`, page-local CSS/JS |
| Global styles | `assets/css/style.scss` | Jekyll front matter + `@import "jekyll-theme-slate"`; extensive project-specific styles (~80 KB source) |
| Embedded interactions | `_includes/home-merged.html`, `_includes/research-interactive-hub.html`, `blog.md` | Existing components have scoped inline style blocks and inline JavaScript, no package-based SPA required |
| Head SEO | `_includes/head-custom.html`, `_layouts/default.html` | Shared metadata, JSON-LD and Jekyll SEO; publication-specific markup in layout |
| Accessibility baseline | `_layouts/default.html`, global style, interactive includes | Skip link, nav label, focus-visible styles; research/home components use responsive rules and reduced-motion styles |
| Publication safety | `_config.yml` | `docs/project-management/` excluded from generated Jekyll site; repository itself remains public |
| Current Optimization Lab | Directory/path check | No `optimization/` directory yet; no public lab page has been built |

## 2. Integration recommendation

**Use native Jekyll + HTML/CSS + progressively enhanced vanilla JavaScript for the first MVP** rather than migrating the entire site to React or introducing a separate app build.

- Put the public entry point at `optimization/index.md` with front matter `layout: default` and `permalink: /optimization/`. This path matches the existing permalink convention.
- Keep major lesson content in Markdown pages with stable front matter; use reusable Jekyll includes for lesson chrome, lab widgets, prerequisite links and controls.
- Place Lab-specific styling in scoped CSS (`assets/css/optimization-lab.scss` or compatible existing pipeline), avoiding edits to the large global stylesheet unless necessary.
- Place core mathematical logic in pure JavaScript modules and separate from DOM event code. Avoid runtime services for first release.
- Use native SVG for small route graphs and objective plots, add charting libraries only when a verified teaching need justifies them.
- Consider KaTeX or MathJax after measuring required math features, mobile legibility and load cost; neither is confirmed installed globally from the files inspected.
- Preserve existing page components and navigation. Add a nav item only after a functioning homepage is verified.
- Use synthetic problem instances and document mathematical provenance and exact/heuristic status.

## 3. Proposed paths (not yet implemented)

```text
optimization/
  index.md
  learn/
    foundations/
      what-is-optimization.md
  labs/
    profit-optimization.md
_includes/optimization/
  lesson-header.html
  lab-a-profit.html
assets/
  css/optimization-lab.scss
  js/optimization/
    profit-model.js
    profit-ui.js
tests/
  optimization/
    profit-model.test.js
docs/project-management/
  ... (current project continuity files)
```

The proposed layout preserves the existing `default` shell and `/blog/` links. An app framework or server should not be introduced unless later requirements demonstrate a concrete need.

## 4. Compatibility and risks

- Existing scoped inline CSS/JS demonstrates feasibility but copying large inline blocks into every new article would create maintenance debt; reuse common includes and standalone assets for the Lab.
- The global SCSS source is large; constrain Lab selectors with a dedicated prefix (`ol-`), avoid collisions with `rh-`, `hm-`, `bj-`.
- Validate keyboard access, narrow-screen layouts, reduced-motion handling and text alternatives for every interactive chart.
- Large optimization instances should not block the browser; exact small instances may run locally; advanced cases should use validated results or external reproducible notebooks.
- Do not expose project internal documentation in page navigation, and do not put private information in this public repository.

## 5. Verified versus outstanding

**Verified by direct GitHub file reads:** Jekyll config and Gemfile, layout and navigation templates, homepage/research/blog source, relevant interactive includes, shared SCSS, SEO include, project documentation exclusion, and absence of `optimization/` path when checked.

**Not verified:** complete recursive file inventory, exact GitHub Pages workflow filename and settings, clean local `bundle exec jekyll build`, full browser regression, production deployment result, external script dependency inventory across all site pages, or site-wide accessibility audit. Do not describe these as passed.

## 6. BL-001 acceptance and next actions

Source compatibility: **supported**. A Jekyll-native `/optimization/` section is consistent with existing layout and permalink patterns.

The remaining **release prerequisite** is a build/deployment smoke test. When a working clone/CI environment is available:
1. Record exact current revision and GitHub Pages publishing mechanism.
2. Run `bundle exec jekyll build` with the repository's bundle environment.
3. Verify `docs/project-management/` is absent from generated `_site`.
4. Add a staging `/optimization/` page, confirm stable routing and regression against Home/Research/Blog.
5. Test at desktop and 375px viewport, keyboard, reduced-motion, and SEO metadata.

Next project task: **BL-002 — Finalize and verify the public route**, starting with a minimal Jekyll-native landing-page prototype. Preserve the distinction between source-level architecture approval and verified deployment.
