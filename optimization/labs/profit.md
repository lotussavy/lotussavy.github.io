---
layout: optimization-lesson
title: "LAB-A — Profit Playground"
seo_title: "Profit Playground | Optimization Lab"
description: "Explore all 13 feasible fleet sizes, compare revenue, cost and profit, and verify the exact best decision."
permalink: /optimization/labs/profit/
robots: index,follow
sitemap: true
lesson_id: LAB-A
lesson_status: published
level: foundations
level_label: Foundations
difficulty: Beginner
estimated_minutes: 5
subtitle: "Choose a fleet size, test your prediction, and explain the difference between a feasible decision and the best one."
learning_objectives:
  - Explore how an integer choice changes revenue, cost and profit.
  - Compare a feasible decision with the proven best choice.
prerequisites: []
concepts: [optimization, decision-variable, objective-function]
labs: [profit-playground]
reviewed_on: 2026-11-13
last_modified_at: 2026-11-13
math_reviewed: true
accessibility_reviewed: true
code_verified: true
---

## Interactive intuition

{% include optimization/labs/profit.html %}

## What you observed

Try a few fleet choices before using **Find optimum**. A feasible choice is not necessarily the most profitable one. After finding the best decision, return to the slider and examine how reducing or increasing fleet size affects profit.

## Mathematical formulation

The toy objective is P(n) = 80n − 5n² − 100 for integer n from 0 to 12. It is a synthetic teaching model, not operational advice.

## Next steps

Continue with [OPT-001: What Is Optimization?]({{ '/optimization/learn/foundations/what-is-optimization/' | relative_url }}) for the full explanation, an independent proof, Python code, and four knowledge checks.
