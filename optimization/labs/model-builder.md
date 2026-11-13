---
layout: optimization-lesson
title: "Decision Model Builder"
seo_title: "Decision Model Builder | Optimization Lab"
description: "Change an objective, budget and available fleet; compare feasible choices and verify an exact optimum for a synthetic one-variable model."
permalink: /optimization/labs/model-builder/
lesson_id: OPT-002-ACTIVITY
lesson_status: published
level: foundations
level_label: Foundations
difficulty: Beginner
estimated_minutes: 7
subtitle: "Separate the decision, the goal and the rules. Change one ingredient at a time."
learning_objectives:
  - "Distinguish a candidate fleet from the supplied budget and availability."
  - "Compare objectives and constraints without confusing their effects."
prerequisites:
  - title: "OPT-001: What Is Optimization?"
    url: /optimization/learn/foundations/what-is-optimization/
concepts: [decision-variable, parameter, objective-function, constraint, infeasibility]
labs: [decision-model-builder]
reviewed_on: 2026-11-13
last_modified_at: 2026-11-13
math_reviewed: true
accessibility_reviewed: true
code_verified: true
robots: index,follow
sitemap: true
---

## Build your model

Start with profit maximization, budget $260 and 12 available vehicles. Predict the best choice, then solve. Change the budget to $220, compare revenue and profit at budget $400, and test a budget below the fixed $100 cost.

{% include optimization/labs/model-builder.html %}

## Understand the answer

A candidate must be a whole number from 0 to 12 and satisfy both availability and cost limits. A goal ranks the candidates that pass. An infeasible candidate can have an arithmetic value, but it cannot be selected as a solution.

The builder exhaustively checks all 13 choices. It reports no optimizer when the feasible set is empty. Cost minimization may select zero because the model has no minimum-service requirement. This is a synthetic teaching activity, not an operating-fleet recommendation.

## Continue learning

Read [OPT-002: Decisions, Objectives, and Constraints]({{ '/optimization/learn/foundations/decisions-objectives-constraints/' | relative_url }}) for the full formulation, independent verification, Python code and knowledge checks.
