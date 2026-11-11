# Optimization Lab — Lesson Authoring Standard (BL-003)

**Date:** 2026-11-11  
**Status:** Reusable template source created; production render remains to be verified.  
**Scope:** Every OPT-001 through OPT-030 lesson.

## Use the common layout

Create `optimization/learn/<track>/<slug>.md` and set `layout: optimization-lesson`. The layout delegates to `default` (site header/footer), uses:
- `_includes/optimization/lesson-header.html`
- `_includes/optimization/lesson-footer.html`
- `assets/css/optimization-lesson.scss` (compiled by Jekyll into CSS)
- `_layouts/optimization-lesson.html`

**Do not** reproduce the header/footer or copy CSS into every lesson. Use the `ol-` class prefix for new lesson UI.

## Required front matter

```yaml
---
layout: optimization-lesson
title: "What Is Optimization?"
seo_title: "What Is Optimization? | Optimization Lab"
description: "A plain-language and experimentally grounded introduction."
permalink: /optimization/learn/foundations/what-is-optimization/
lesson_id: OPT-001
lesson_status: draft        # proposed | draft | reviewed | published
level: foundations
level_label: Foundations
difficulty: Beginner
estimated_minutes: 12
subtitle: "A short, helpful subtitle."
learning_objectives:
  - "Recognize a decision variable, objective, and constraint."
prerequisites: []            # objects: {title: "...", url: "/.../"} only if target exists
concepts:
  - optimization
  - decision-variable
labs:
  - profit-playground
reviewed_on:
math_reviewed: false
accessibility_reviewed: false
code_verified: false
license: "License to be finalized"
robots: noindex,nofollow   # drafts and previews
sitemap: false             # drafts and previews
---
```

Remove `noindex,nofollow` and enable sitemap only when the complete lesson passes the publication gates. The status badge alone does not prevent search indexing.

Do not link to unpublished or nonexistent lessons in previous/next metadata. For released neighbors:
```yaml
previous_lesson:
  title: "What Is Optimization?"
  url: /optimization/learn/foundations/what-is-optimization/
next_lesson:
  title: "Feasibility and Trade-offs"
  url: /optimization/learn/foundations/feasibility-and-trade-offs/
```

The template deliberately shows missing review or verification as unverified; never set a boolean to true without a corresponding review or test record.

## Standard section order

1. **In one minute** — plain-language summary (target 100–160 words) and objective.
2. **Driving question** — relatable decision and why the objective matters.
3. **Interactive intuition** — interactive experiment with prediction prompt, or explicitly label it unavailable.
4. **What you observed** — conceptual explanation of behavior.
5. **Formal definition** — decision variables, parameters, units, assumptions.
6. **Mathematical formulation** — terms and constraints with annotations.
7. **Solution approach** — exact / heuristic / illustrative status.
8. **Python implementation** — tested code or versioned notebook; no unverified output.
9. **Failure modes and assumptions** — feasibility, limits, numerical/interpretation errors.
10. **Knowledge check** — ≥2 questions and explanations.
11. **Recap and next step** — prerequisites/next and references/citation sources.

The demonstration page at `optimization/learn/template-preview.md` exists only for layout review. It uses noindex/nofollow and is not OPT-001.

## Reusable interaction contract

For future labs, place static explanation in Markdown and interactive UI in a reusable include (for example `_includes/optimization/labs/profit.html`) with computation in a separate pure JavaScript module. Include it explicitly only when code and validation exist.

An interactive lab should identify: question, method, model scope, input units/ranges, baseline, outputs, feasibility/solver status, interpretation, reset, and reproduction notes. A browser graphic is not evidence of mathematical correctness.

## Acceptance checklist

- [ ] Accurate front matter and stable lesson ID/permalink.
- [ ] Shared layout/header/footer/stylesheet render correctly.
- [ ] Objective and assumptions are scientifically valid.
- [ ] Graphs, controls and textual interpretations agree.
- [ ] No broken prerequisites, next links or citations.
- [ ] Keyboard, 375px mobile and reduced-motion checks pass.
- [ ] Screen-reader alternatives and contrast are checked.
- [ ] Source and mathematical tests committed; numerical claims independently verified.
- [ ] SEO status matches publication status.
- [ ] `PROJECT_STATE.md`, `VALIDATION.md`, `TASKS.md`, and `CHANGELOG.md` updated.

## To validate in a Jekyll environment

```bash
bundle exec jekyll build
test -f _site/optimization/learn/template-preview/index.html
test -f _site/assets/css/optimization-lesson.css
! test -d _site/docs/project-management
```

Open the preview URL at desktop and narrow mobile widths, inspect the browser console, verify `robots=noindex,nofollow`, read objectives and footer in a screen reader, check all navigation and styles. This build has **not yet been run** in the current working environment.

## Status and provenance

BL-003 is not marked Done until the sample page has rendered successfully in a Jekyll build and browser checks. Its source scaffold is an implementation step, not a published validated lesson.
