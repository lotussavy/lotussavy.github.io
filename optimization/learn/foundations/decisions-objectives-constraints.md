---
layout: optimization-lesson
title: "Decisions, Objectives, and Constraints"
seo_title: "Decisions, Objectives, and Constraints | Optimization Lab"
description: "Build a small optimization model: distinguish decisions from parameters, choose a goal, check budget and availability, and verify the best feasible choice."
permalink: /optimization/learn/foundations/decisions-objectives-constraints/
lesson_id: OPT-002
lesson_status: published
level: foundations
level_label: Foundations
difficulty: Beginner
estimated_minutes: 18
subtitle: "Turn a question into a model: what can you choose, what counts as better, and what must every choice satisfy?"
learning_objectives:
  - "Distinguish a decision variable, a supplied parameter and a calculated outcome."
  - "Choose an objective and state whether to maximize or minimize it."
  - "Check every constraint and the decision domain for a candidate."
  - "Explain why changing the objective differs from changing the feasible set."
  - "Recognize an infeasible model and an optimum caused by a missing requirement."
prerequisites:
  - title: "OPT-001: What Is Optimization?"
    url: /optimization/learn/foundations/what-is-optimization/
previous_lesson:
  title: "What Is Optimization?"
  url: /optimization/learn/foundations/what-is-optimization/
concepts: [decision-variable, parameter, objective-function, constraint, feasible-set, infeasibility]
labs: [decision-model-builder]
reviewed_on: 2026-11-13
last_modified_at: 2026-11-13
math_reviewed: true
accessibility_reviewed: true
code_verified: true
license: "© 2026 Kamal Acharya. All rights reserved."
robots: index,follow
sitemap: true
---

> **Teaching model:** This lesson extends OPT-001's synthetic fleet example. All money values are illustrative USD per model period; the coefficients do not come from operating data.

## In one minute

Before solving an optimization problem, decide what the problem actually asks. A model needs a choice, a way to judge that choice, and rules that every permitted choice must satisfy. Those three ingredients are the decision variable, objective and constraints.

Suppose you choose how many vehicles to operate. The fleet size is your decision. Profit is an outcome calculated from that decision. A budget and the number of available vehicles are supplied limits. They help define which decisions are allowed. Maximizing profit tells us how to rank the allowed choices.

In this lesson, you will build several small models using the same financial assumptions. You will see how a different goal can select a different fleet, how a tighter rule can exclude an attractive choice, and how to recognize settings with no feasible answer.

**Your goal:** Write a clear optimization question before asking an algorithm to solve it.

## Driving question

In OPT-001, eight vehicles gave the largest profit in a 13-choice example. That result answered one particular question. Now ask:

- What if only four vehicles are available?
- What if the budget covers at most six vehicles?
- What if the goal is to maximize revenue instead of profit?
- What if the goal is to minimize cost, without requiring any service?

Each question defines a different model. A solver cannot choose the intended goal or invent a missing requirement for you.

We keep the original revenue and cost assumptions, so you can concentrate on the structure of the decision. This activity has **one optimization decision**: the integer fleet size. It does not assign routes or passengers.

## Interactive intuition

**Predict first:** With budget $260 and 12 vehicles available, could a fleet of 10 be a valid answer merely because it produces the most revenue?

Try this investigation. Change one thing at a time:

1. Keep the default goal, **Maximize profit**, and inspect the rules for your candidate fleet. Press **Solve this model**.
2. Reduce the budget to **220**. Predict the largest permitted fleet, then solve again.
3. Reset, then reduce available vehicles to **4**. Try candidate **7** and read both rule checks before solving.
4. Set budget **400** and available vehicles **12**. Compare **Maximize profit** with **Maximize revenue**.
5. With those same limits, choose **Minimize cost**. Explain the selected fleet before reading the note.
6. Set budget **80**. Could even zero vehicles satisfy the cost rule?

{% include optimization/labs/model-builder.html %}

The budget and availability controls let you **edit the model between experiments**. During each solve, they are fixed parameters. The algorithm chooses only the fleet size. A quantity does not become an optimization variable simply because the webpage lets you edit it.

You can also open the [standalone Decision Model Builder]({{ '/optimization/labs/model-builder/' | relative_url }}).

## What you observed

| Model | Budget B | Available A | Permitted fleets | Best fleet | Selected goal value |
|---|---:|---:|---|---:|---:|
| Maximize profit | $260 | 12 | 0–8 | 8 | Profit $220 |
| Maximize profit | $220 | 12 | 0–6 | 6 | Profit $200 |
| Maximize profit | $260 | 4 | 0–4 | 4 | Profit $140 |
| Maximize profit | $400 | 12 | 0–12 | 8 | Profit $220 |
| Maximize revenue | $400 | 12 | 0–12 | 10 | Revenue $500 |
| Minimize cost | $400 | 12 | 0–12 | 0 | Cost $100 |
| Maximize profit | $80 | 12 | None | None | No feasible answer |
| Maximize profit | $100 | 12 | 0 only | 0 | Profit −$100 |

Two different mechanisms explain these results.

**Change a rule:** Reducing the budget or available fleet can remove permitted choices. The profit formula stays the same. At budget $220, eight vehicles still have a calculated profit of $220, but their cost is $260, so they cannot be selected.

**Change the goal:** With budget $400 and 12 vehicles available, all 13 domain choices remain feasible under every goal. What changes is their ranking. Revenue is greatest at 10 vehicles, while profit is greatest at 8. These are different answers to different questions, not contradictory solver results.

Cost minimization selects zero vehicles because our current rules do not require service. That is a valid optimum for the stated model. If the real question requires service, its formulation needs an appropriate requirement.

## Formal definition

| Ingredient | Meaning in this model | Example |
|---|---|---|
| Decision variable | The quantity the algorithm chooses | Fleet size \\(n\\) |
| Parameter | An input fixed during one solve | Budget \\(B\\), available fleet \\(A\\) |
| Calculated outcome | A quantity evaluated from the decision | Revenue \\(R(n)\\), cost \\(C(n)\\), profit \\(P(n)\\) |
| Objective | The outcome and direction used to rank feasible choices | Maximize profit or minimize cost |
| Constraint | A condition every permitted decision must satisfy | Cost must not exceed the budget |
| Domain | The allowed type and base range of the decision | Integer \\(n\\) from 0 through 12 |
| Feasible set | Decisions satisfying the domain and **all** constraints | Fleets 0–6 at budget $220 and availability 12 |

The model's parameters are not universal constants: their values can differ between scenarios. They are simply **given while solving that scenario**. A different real-world problem could make budget a decision variable, but this one does not.

Constraints are joined by **and**. Passing the budget test is insufficient if the fleet exceeds availability. Likewise, satisfying both numerical limits does not permit a fractional vehicle: the integer domain still applies.

The objective distinguishes better from worse **within the feasible set**. A high objective value cannot compensate for violating a hard constraint in this model.

## Mathematical formulation

Let \\(n\\) be the number of vehicles. Let \\(A\\) be the available vehicles and \\(B\\) the supplied budget in illustrative USD per period. The activity allows integer \\(A\\) from 0 to 12 and integer \\(B\\) from 0 to 400.

Keep the same financial functions:

\\[
R(n)=100n-5n^2,\qquad C(n)=20n+100.
\\]

\\[
P(n)=R(n)-C(n)=80n-5n^2-100.
\\]

For **profit maximization**, the complete model is

\\[
\text{maximize}\quad P(n)=80n-5n^2-100
\\]

subject to the three requirements

\\[
n\in\lbrace 0,1,2,\ldots,12\rbrace ,
\\]

\\[
n\leq A,
\\]

\\[
20n+100\leq B.
\\]

Read them in order: use a whole-number fleet in the teaching domain, do not exceed available vehicles, and do not exceed the budget. The budget uses **cost**, not profit or revenue.

To ask a different question with the same rules, replace the objective by

\\[
\text{maximize}\quad R(n)
\\]

or

\\[
\text{minimize}\quad C(n).
\\]

The constraints remain unchanged. Profit and revenue maximization use nonlinear quadratic objectives; cost minimization has a linear objective. All three retain an integer decision. Do not label every version as a linear program.

**Check a candidate:** At \\(n=7\\), cost is \\(C(7)=240\\). With \\(A=6\\) and \\(B=260\\), the budget condition passes, but availability fails because \\(7>6\\). The candidate is infeasible.

## Solution approach

There are only 13 domain choices. We can solve each model exactly by:

1. Evaluating a candidate's financial outcomes.
2. Checking its domain and both inequalities.
3. Retaining only feasible candidates.
4. Comparing the selected objective in the correct direction.
5. Reporting **infeasible** if no candidate survives.

This is exhaustive enumeration, not a general-purpose optimization package. Its guarantee covers the stated 13-choice model. If the surviving candidates all lose money, the largest profit may still be negative. Infeasibility and unprofitability are different conclusions.

<details markdown="1">
<summary><strong>Optional verification: derive the permitted set independently</strong></summary>

Since \\(C(n)=20n+100\\), the budget requires

\\[
n\leq\frac{B-100}{20}.
\\]

If \\(B<100\\), even zero vehicles violate the budget, so the feasible set is empty. Otherwise define

\\[
K=\min\left\lbrace 12,A,\left\lfloor\frac{B-100}{20}\right\rfloor\right\rbrace .
\\]

The feasible set is exactly the integers from 0 through \\(K\\). The floor rounds down because vehicles must be whole numbers.

The original profit identity \\(P(n)=220-5(n-8)^2\\) shows that the best feasible profit fleet is \\(\min(8,K)\\). Similarly, \\(R(n)=500-5(n-10)^2\\) gives best revenue fleet \\(\min(10,K)\\). Because cost increases by $20 with each added vehicle, cost minimization selects 0 whenever the set is nonempty.

These formulas independently check enumeration for every supported budget, available fleet and objective. They rely on this example's special functions and prefix-shaped feasible set; they are not general solver rules.

</details>

## Python implementation

This standalone script implements the same question independently using plain Python. It checks both constraints before comparing objective values and returns no numeric optimizer for an infeasible model.

```python
"""OPT-002: a synthetic model, solved by checking all 13 fleet choices.
Python 3.10+; values are illustrative USD per period. No solver package needed.
"""


def solve(objective="profit", budget=260, available=12):
    if objective not in ("profit", "revenue", "cost"):
        raise ValueError("Choose profit, revenue or cost")
    if type(budget) is not int or not 0 <= budget <= 400:
        raise ValueError("Budget must be integer USD from 0 to 400")
    if type(available) is not int or not 0 <= available <= 12:
        raise ValueError("Available fleet must be an integer from 0 to 12")
    feasible = []
    for n in range(13):
        revenue = 100 * n - 5 * n**2
        cost = 20 * n + 100
        row = {"fleet": n, "revenue": revenue, "cost": cost,
               "profit": revenue - cost}
        if n <= available and cost <= budget:
            feasible.append(row)
    if not feasible:
        return {"status": "infeasible", "fleet": None, "value": None}
    choose_best = min if objective == "cost" else max
    best = choose_best(feasible, key=lambda row: row[objective])
    return {"status": "optimal", "fleet": best["fleet"],
            "value": best[objective]}


if __name__ == "__main__":
    expected = [
        ("profit", 260, 12, 8, 220),
        ("profit", 220, 12, 6, 200),
        ("profit", 260, 4, 4, 140),
        ("revenue", 400, 12, 10, 500),
        ("cost", 400, 12, 0, 100),
        ("profit", 80, 12, None, None),
        ("profit", 100, 12, 0, -100),
    ]
    for objective, budget, available, fleet, value in expected:
        result = solve(objective, budget, available)
        assert (result["fleet"], result["value"]) == (fleet, value)
        assert result["status"] == ("infeasible" if fleet is None else "optimal")
    print("PASS: seven reference models, including infeasibility and a loss.")
    print("Default model:", solve())
```

**Expected output:**

```text
PASS: seven reference models, including infeasibility and a loss.
Default model: {'status': 'optimal', 'fleet': 8, 'value': 220}
```

[Download the Python example]({{ '/assets/code/optimization/opt002_example.py' | relative_url }}). The browser builder reuses the [verified financial engine](https://github.com/lotussavy/lotussavy.github.io/blob/main/assets/js/optimization/profit-model.js); its new model layer adds the constraints and selected objective. Neither implementation needs a solver license.

## Failure modes and assumptions

- **Treating every control as a decision variable:** The builder lets you edit parameters, but each solve treats them as given. Only \\(n\\) is optimized.
- **Checking just one constraint:** A candidate must pass availability, budget and the integer domain together.
- **Using the wrong quantity in a rule:** A spending limit compares cost with budget. Comparing profit with budget would express a different rule.
- **Inventing an answer for an empty set:** At budget $80 there is no feasible fleet. Reporting zero as the solution would violate the stated fixed-cost assumption.
- **Calling a loss infeasible:** At budget $100, zero vehicles are feasible and produce profit −$100. Feasibility depends on the rules, not the sign of profit.
- **Misinterpreting zero-service cost minimization:** Zero vehicles minimize cost because no service is required. A written requirement such as \\(n\geq1\\) would change the model, provided the other rules allow it. That requirement is not part of this builder.
- **Changing fixed-cost interpretation midway:** The $100 cost applies even at zero. Allowing shutdown to avoid that charge requires a different cost/activation model.
- **Generalizing the coefficients:** The activity omits demand, capacity, time, routes, energy and uncertainty. Its optimum is not a fleet recommendation.

## Knowledge check

Try each question before opening the explanation. Responses are not collected.

<details markdown="1">
<summary><strong>1. You can edit the budget on screen. Does that make it a decision variable in this model?</strong></summary>

**Answer: No.** Editing the budget creates a new scenario. During one solve, \\(B\\) is fixed and the algorithm chooses \\(n\\). The role in the formulation, not the existence of an input box, defines the decision variable.

</details>

<details markdown="1">
<summary><strong>2. With six vehicles available and budget $260, is a fleet of seven feasible?</strong></summary>

**Answer: No.** Its $240 cost passes the budget test, but seven exceeds six available vehicles. Both constraints must hold; meeting one does not cancel the other.

</details>

<details markdown="1">
<summary><strong>3. At budget $400 and availability 12, why do profit and revenue maximization select different fleets?</strong></summary>

**Answer:** They rank the same feasible set differently. Eight vehicles maximize profit at $220. Ten maximize revenue at $500, but cost $300 and produce profit $200. The objective changes; the permitted choices do not.

</details>

<details markdown="1">
<summary><strong>4. What is the solution if the budget is $80?</strong></summary>

**Answer: The model is infeasible.** Even zero vehicles cost $100. There is no optimizer and no optimal objective value under the stated rules. A computed profit for a rejected candidate is not a feasible solution.

</details>

<details markdown="1">
<summary><strong>5. Does the zero-vehicle minimum-cost answer show that the algorithm failed?</strong></summary>

**Answer: No.** It solved the given model. If service is essential, the formulation needs a suitable service requirement. Choosing a meaningful objective does not supply missing constraints automatically.

</details>

## Recap and next step

A clear model answers three questions: **What is chosen? What is improved? What must hold?** Also identify the supplied parameters and domain. Check feasibility before ranking choices, and distinguish an empty set from a feasible solution with a disappointing outcome.

Changing a goal reorders the feasible choices. Changing a constraint can change which choices are permitted. The algorithm solves the model you write, so inspect both the mathematics and the meaning of the result.

[Revisit OPT-001]({{ '/optimization/learn/foundations/what-is-optimization/' | relative_url }}) or [experiment in the standalone builder]({{ '/optimization/labs/model-builder/' | relative_url }}). The planned next lesson, **OPT-003: Feasibility and Trade-offs**, will examine permitted decisions more closely when it is developed and reviewed.

### References and verification

- MIT OpenCourseWare. (2013). *15.053 Optimization Methods in Management Science, Lecture 1*. [Original lecture slides](https://ocw.mit.edu/courses/15-053-optimization-methods-in-management-science-spring-2013/40d1bb14223439515ac3df1aa229ecdd_MIT15_053S13_lec1.pdf). Background on formulation, decision variables, objectives and constraints.
- Google for Developers. *Get Started with OR-Tools for Python*. [Official introduction](https://developers.google.com/optimization/introduction/python). Background on expressing and solving optimization problems. This activity uses its own small enumeration example, rather than OR-Tools.
- Optimization Learning Lab. *OPT-002 model builder*. [Source and verification records](https://github.com/lotussavy/lotussavy.github.io/blob/main/docs/project-management/OPT_002_REVIEW.md).

**Source note:** All numerical examples are independently verified results of the declared synthetic model. The review records distinguish browser/keyboard/automated accessibility evidence from dedicated screen-reader compatibility testing.
