---
layout: optimization-lesson
title: "LAB-A — Profit Playground (Development Preview)"
seo_title: "LAB-A Interactive Preview | Optimization Lab"
description: "Non-indexed development preview for the LAB-A profit optimization interface. Not a published lesson."
permalink: /optimization/labs/profit-preview/
robots: noindex,nofollow
sitemap: false
lesson_id: LAB-A-PREVIEW
lesson_status: draft
level: foundations
level_label: Foundations
difficulty: Beginner
estimated_minutes: 5
subtitle: "Interface integration test. This is not the published OPT-001 lesson."
learning_objectives:
  - Explore how an integer choice changes revenue, cost and profit.
  - Compare a feasible decision with the proven best choice.
prerequisites: []
concepts: [optimization, decision-variable, objective-function]
labs: [profit-playground]
reviewed_on:
math_reviewed: false
accessibility_reviewed: false
code_verified: false
---

## Interactive intuition

{% include optimization/labs/profit.html %}

## What you observed

Try a few fleet choices before using **Find optimum**. A feasible choice is not necessarily the most profitable one. After finding the best decision, return to the slider and examine how reducing or increasing fleet size affects profit.

## Mathematical formulation

The toy objective is P(n) = 80n − 5n² − 100 for integer n from 0 to 12. It is a synthetic teaching model, not operational advice.

## Next steps

The complete OPT-001 lesson, including code discussion and knowledge checks, is a separate publication task (BL-006). This draft preview is for integration and accessibility testing only.
