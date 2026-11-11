---
layout: optimization-lesson
title: "What Is Optimization?"
seo_title: "What Is Optimization? | Optimization Learning Lab"
description: "Learn optimization through a small decision problem: choose a fleet size, explore revenue and cost, and verify the best feasible profit."
permalink: /optimization/learn/foundations/what-is-optimization/
lesson_id: OPT-001
lesson_status: draft
level: foundations
level_label: Foundations
difficulty: Beginner
estimated_minutes: 15
subtitle: "From a simple decision to a provably best choice—through intuition, an interactive experiment, and a small mathematical model."
learning_objectives:
  - "Identify a decision variable and distinguish it from the outcomes it produces."
  - "State the objective and the feasible choices for a simple optimization problem."
  - "Compare revenue, cost, and profit without confusing their maxima."
  - "Explain the difference between a feasible solution and an optimal one."
  - "Describe how exhaustive enumeration certifies an optimum for a finite model."
prerequisites: []
concepts:
  - optimization
  - decision-variable
  - objective-function
  - feasible-set
  - global-optimum
labs:
  - profit-playground
reviewed_on:
math_reviewed: false
accessibility_reviewed: false
code_verified: false
license: "Draft educational material; license decision pending review"
robots: noindex,nofollow
sitemap: false
---

> **Draft lesson — editorial and accessibility review pending.** This material is available for development review, not yet released as the completed OPT-001 lesson. The fleet example is a synthetic teaching model, not a validated transportation or business forecast.

## In one minute

Optimization is the process of choosing the best option according to a clearly defined goal, while respecting the rules that determine which options are allowed. Imagine deciding how many vehicles a small service should operate. Adding vehicles might bring in more revenue, but it also increases costs. The largest fleet is not automatically the most profitable.

A mathematical optimization problem makes three things explicit: **what we can choose** (a decision variable), **what we want to improve** (an objective), and **which choices are permitted** (the feasible set or constraints). Once those pieces are clear, we can compare alternatives systematically rather than relying on a guess.

In this lesson, you will change the fleet size in an interactive example, observe the resulting revenue, cost, and profit, and discover how we can prove that one particular choice is optimal **for this small model**.

**Your goal:** Identify the decision, the objective, and the allowed choices—and explain what makes the best answer convincing.

## Driving question

Suppose a hypothetical service operator must choose the number of vehicles to deploy for one planning period. We are not modeling actual requests, passengers, batteries, routes, or driver schedules. This simplified exercise is about recognizing the structure of a decision problem.

Consider four different questions:

- **Decision:** How many vehicles should the operator use?
- **Outcome:** How much revenue would that number generate under our assumed formula?
- **Cost:** What would operating that many vehicles cost under our assumed formula?
- **Objective:** Which permitted fleet size would produce the **highest profit**, calculated as revenue minus cost?

These questions are related, but they are not interchangeable. The number of vehicles is something we select. Profit is a value calculated *from* that choice.

**Think first:** If revenue increases when more vehicles are added, must profit also keep increasing? Try to form a prediction before using the simulator.

## Interactive intuition

**Prediction challenge:** Before pressing **Find optimum**, decide whether you think profit will always increase as fleet size grows. Your provisional answer can be *yes*, *no*, or *not sure*—the purpose is to test it against evidence, not to guess the correct answer immediately.

Use the simulator below to carry out this short investigation:

1. Begin at the default fleet size of **4**. Read the revenue, cost, and profit cards.
2. Move the slider to **8** and compare all three quantities.
3. Try **10**. Is revenue higher or lower than at 8? What happened to profit?
4. Try **12** and describe the direction of the change.
5. Finally, press **Find optimum**. The simulator uses the verified computational engine to compare every allowable integer fleet size.
6. Press **Reset** to return to 4 vehicles and see whether your interpretation still makes sense.

{% include optimization/labs/profit.html %}

**Accessibility note:** The fleet-size slider also works with keyboard arrow keys. The numerical results and written explanation communicate the same information as the highlighted point, so interpreting the chart's color is not required.

## What you observed

The key observation is that **greater revenue is not always greater profit**.

| Fleet size (vehicles) | Illustrative revenue | Illustrative cost | Illustrative profit |
|---:|---:|---:|---:|
| 0 | $0 | $100 | −$100 |
| 4 | $320 | $180 | $140 |
| 8 | $480 | $260 | **$220** |
| 10 | **$500** | $300 | $200 |
| 12 | $480 | $340 | $140 |

Look carefully at the comparison between **8 and 10 vehicles**. Revenue increases from $480 to $500, but cost rises from $260 to $300. Consequently, profit falls from $220 to $200. In this model, revenue is highest at 10 vehicles, whereas profit is highest at 8.

The point of an optimization problem is not to choose the largest value of the **decision variable**. It is to find the permitted decision that performs best under the **specified objective**.

The result for 4 vehicles is a valid choice under our rules. It is *feasible* but not *optimal*, because there is another feasible decision with higher profit.

## Formal definition

An optimization problem can be described with three parts:

1. **Decision variable:** A quantity whose value we choose. Here it is the fleet size, denoted by \\(n\\).
2. **Objective function:** A rule that evaluates a choice, such as profit \\(P(n)\\). We want to maximize it.
3. **Feasible set:** All choices permitted by the problem. Here the only allowed values are whole-number fleet sizes from 0 to 12.

A **feasible solution** satisfies every rule defining the problem. An **optimal solution** is feasible *and* achieves an objective value at least as good as every other feasible solution.

For example, both \\(n=4\\) and \\(n=8\\) are feasible, because each is an integer between 0 and 12. But \\(n=4\\) is not the best profit-producing choice under this specific formula.

Our upper limit of 12 and our integer requirement are **constraints on the decision**. This model does *not* contain demand-satisfaction, route-assignment, charging, battery or service-time constraints.

> **A useful distinction:** A mathematical *model* defines what counts as a good and allowed decision. An *algorithm* provides a method for finding a solution to that model. Moving a slider is a way to explore alternatives; it is not, by itself, a proof of optimality.

## Mathematical formulation

Let \\(n\\) represent the number of vehicles. For this intentionally simplified example, suppose the following accounting rules hold during a single illustrative planning period:

\\[
R(n)=100n-5n^2
\\]

This assumed **revenue function** increases initially but experiences diminishing returns.

\\[
C(n)=20n+100
\\]

This assumed **cost function** consists of a fixed $100 cost plus $20 per vehicle.

The **profit** for a fleet of size \\(n\\) is revenue less cost:

\\[
\begin{aligned}
P(n)&=R(n)-C(n)\\
&=(100n-5n^2)-(20n+100)\\
&=80n-5n^2-100.
\end{aligned}
\\]

Our full optimization problem is therefore

\\[
\boxed{
\begin{aligned}
\text{maximize}\quad &P(n)=80n-5n^2-100\\
\text{subject to}\quad &n\in\{0,1,2,\ldots,12\}.
\end{aligned}
}
\\]

The objective is a **nonlinear quadratic expression**, not a linear program. The decision domain is **discrete** because we require whole vehicles. All money values are illustrative US dollars per model period; no real cost data were used to estimate the coefficients.

**Interpretation check:** The number 8 represents an allowed fleet decision. The number $220 represents the objective value achieved *at* that decision. They are different kinds of quantities.

## Solution approach

How can we confidently conclude that \\(n=8\\) is globally optimal in this exercise?

We can use **exhaustive enumeration** because the feasible set contains only 13 possible fleet sizes: \\(0,1,2,\ldots,12\\). The verified LAB-A engine calculates the profit for each integer and selects the highest one. The full comparison identifies a **unique** maximizer:

\\[
n^*=8,\qquad P(n^*)=\$220.
\\]

<details markdown="1">
<summary><strong>Optional deeper look: an independent algebraic certificate</strong></summary>

We can rewrite the objective by completing the square:

\\[
P(n)=220-5(n-8)^2.
\\]

For any real number \\(n\\), the squared term satisfies \\((n-8)^2\geq 0\\), so

\\[
P(n)\leq 220.
\\]

Equality holds exactly when \\(n=8\\). Because 8 belongs to the feasible integer set, it attains that upper bound. This independently establishes global optimality for the stated problem.

This proof is unusually simple because our teaching example has a special quadratic structure. Large routing and scheduling models generally need more sophisticated methods and validation.

</details>

This is a **global** optimality claim only for the **13-choice synthetic problem**—not a claim that eight aircraft or vehicles would be best in an actual operation.

## Python implementation

You can repeat the same calculation with plain Python. This example uses only Python's standard language features—no optimization package is required. It deliberately enumerates every allowed choice.

```python
# OPT-001 / LAB-A — reproducible synthetic example
# Compatible with Python 3.10+
# Monetary values are illustrative USD per model period.

def revenue(n: int) -> int:
    return 100 * n - 5 * n**2

def cost(n: int) -> int:
    return 20 * n + 100

def profit(n: int) -> int:
    return revenue(n) - cost(n)

feasible_fleets = range(13)  # Whole vehicles: 0 through 12
results = [(n, profit(n)) for n in feasible_fleets]
best_fleet, best_profit = max(results, key=lambda item: item[1])

assert len(results) == 13
assert (best_fleet, best_profit) == (8, 220)
assert profit(4) == 140
assert revenue(10) == 500 and profit(10) == 200

print(f"Optimal fleet: {best_fleet} vehicles")
print(f"Maximum profit: ${best_profit}")
```

**Expected output:**

```text
Optimal fleet: 8 vehicles
Maximum profit: $220
```

The Python example and interactive LAB-A are conceptually equivalent, but the **website simulator uses the already-tested JavaScript engine**. We do not maintain a separate objective formula in a second user-interface script.

The complete interactive model and its fixed reference results are available in the [LAB-A source repository](https://github.com/lotussavy/lotussavy.github.io/blob/main/assets/js/optimization/profit-model.js). A [standalone Python version](https://github.com/lotussavy/lotussavy.github.io/blob/main/scripts/optimization/opt001_example.py) is version-controlled for reproducibility; its exact GitHub blob was executed locally and passed the assertions. This does not replace the lesson's final editorial and browser review.

## Failure modes and assumptions

Even a correctly solved mathematical problem can lead to a misleading practical conclusion if its assumptions are unrealistic.

- **Confusing revenue with profit:** At 10 vehicles, the toy revenue is largest, but cost is also higher, and profit is lower than at 8.
- **Confusing feasible with optimal:** A fleet of 4 is permitted, but it does not maximize the stated objective.
- **Checking only a few choices:** Exploring 4, 8, 10 and 12 builds intuition; it does not alone establish an optimum. The complete comparison or proof does.
- **Ignoring decision restrictions:** A value such as \\(n=7.5\\) is excluded even if a continuous calculation could evaluate it, because the model describes whole vehicles.
- **Assuming synthetic coefficients represent reality:** The revenue and cost formulas were chosen to teach a concept. They do not account for passengers, aircraft availability, energy, charging, schedules, maintenance, uncertainties, or external constraints.
- **Generalizing the answer:** Change the objective or allowed choices and the best decision may change. The eight-vehicle result is not transferable without a new model and evidence.

## Knowledge check

Try these questions *before* opening each explanation. No answers are sent or stored.

<details markdown="1">
<summary><strong>1. Which quantity is the decision variable?</strong> Revenue, fleet size, or profit?</summary>

**Answer: Fleet size \\(n\\).** We choose \\(n\\). Revenue and profit are numerical outcomes calculated from that choice. If you chose profit, notice that it measures the outcome we want to improve rather than something directly controlled.

</details>

<details markdown="1">
<summary><strong>2. Is a fleet size of 7.5 feasible in this model?</strong></summary>

**Answer: No.** Our feasible set contains only integers from 0 to 12. A real-number fleet size such as 7.5 violates the integer-domain requirement, even though the formula itself can be evaluated at that number.

</details>

<details markdown="1">
<summary><strong>3. Why is a fleet of 4 feasible but not optimal?</strong></summary>

**Answer:** Four is an allowed integer, so it is feasible. However, it produces a profit of $140, whereas another feasible fleet size—eight—produces $220. Being allowed does not automatically mean being best.

</details>

<details markdown="1">
<summary><strong>4. What justifies calling eight vehicles globally optimal?</strong></summary>

**Answer:** We evaluated **all 13 feasible integer choices** and found no higher profit. Independently, \\(P(n)=220-5(n-8)^2\leq220\\) proves the same upper bound. The visual appearance of a peak alone is not the mathematical guarantee.

</details>

**Apply it elsewhere:** Imagine a fixed budget or a limited number of available drivers. How would that additional restriction change the set of permitted choices? We will explore formal constraints more deeply in a subsequent lesson; these particular restrictions are **not** in the current LAB-A model.

## Recap and next step

You have learned three essential distinctions:

1. A **decision variable** is what you control; an **objective** evaluates how good that choice is.
2. A **feasible solution** satisfies the rules, but an **optimal solution** is the best feasible solution according to the objective.
3. A claim of **global optimality** needs evidence. Here, exhaustive enumeration and an independent algebraic bound both establish the best decision for our 13-choice problem.

You can [return to the Optimization Lab homepage]({{ '/optimization/' | relative_url }}) to explore the broader curriculum. The planned next lesson, **OPT-002: Decisions, Objectives, and Constraints**, will be linked after it has been developed and reviewed.

### References and reproducibility

- MIT OpenCourseWare. (2013). *15.053 Optimization Methods in Management Science — Lecture 1: Introduction*. [Original lecture slides](https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/40d1bb14223439515ac3df1aa229ecdd_MIT15_053S13_lec1.pdf). General background on decision variables, objectives and constraints.
- Boyd, S., & Vandenberghe, L. (2004). *Convex Optimization*. Cambridge University Press. [Official author-hosted book resources](https://stanford.edu/~boyd/cvxbook/). Further reading for learners who want mathematical optimization theory.
- Optimization Learning Lab. *LAB-A synthetic profit model and tests* (version 1.0.0). [Verified model source](https://github.com/lotussavy/lotussavy.github.io/blob/main/assets/js/optimization/profit-model.js) · [Mathematical test cases](https://github.com/lotussavy/lotussavy.github.io/blob/main/scripts/optimization/profit-model.test.cjs).

**Source note:** Every LAB-A financial value comes from a deliberately constructed model. There is no empirical fleet dataset or external funding assumption associated with this example. The author has not yet completed the final lesson's mathematical, accessibility or publication review.
