---
layout: article
title: Interval Temporal Logic Decision Tree Learning
date: '2024-04-14'
categories:
- Technical Articles
reading_time: 7
sitemap: true
robots: index,follow
description: A readable explanation of Temporal ID3, a decision-tree learning method
  that uses interval temporal logic to classify timelines instead of static records.
image: /assets/blog/interval-temporal-logic-decision-tree-learning/cover.png
source_url: https://medium.com/@lotussavy/interval-temporal-logic-decision-tree-learning-6a9b70447995
---

Decision trees are popular because they are easy to understand. A trained tree is not just a predictor; it is a sequence of readable decisions. Each path from the root to a leaf can be interpreted as a rule.

But ordinary decision trees are mostly static. They ask questions such as:

```text
Does the patient have fever?
Is the temperature above 38?
Did the event occur?
```

Those questions can be useful, but they lose something important: time.

In many domains, timing is not a detail. It is the signal. A symptom may matter because it happened before another symptom. A machine warning may matter because it overlapped with a pressure spike. A conversation topic may matter because it followed a complaint. Static attributes flatten all of that temporal structure into yes/no or numeric summaries.

The paper *Interval Temporal Logic Decision Tree Learning* proposes a way to keep the interpretability of decision trees while allowing the tree to split on temporal relationships. The authors introduce Temporal ID3, a generalization of the classic ID3 decision-tree algorithm that learns from timelines using interval temporal logic.

## Motivation

The motivation is easiest to see in a medical example.

Imagine four patients. Some have fever. Some have headache. A static decision tree can only see whether each symptom occurred at some point during the observation period. It cannot see whether fever and headache overlapped, whether one came before the other, or whether they occurred in separate intervals.

That flattening can make a useful pattern disappear.

<figure>
  <img src="/assets/blog/interval-temporal-logic-decision-tree-learning/cover.png" alt="Example of static and temporal treatment of information in the medical domain" width="968" height="694" loading="eager" decoding="async" fetchpriority="high">
  <figcaption>Example of static and temporal treatment of information in the medical domain</figcaption>
</figure>

In the paper's toy dataset, the static version loses enough information that the learned classifier reaches only 75% training accuracy. The temporal version keeps the patient histories as timelines. Once the learner can ask about interval relationships, it can distinguish the two classes perfectly in the toy example.

The important lesson is not the specific accuracy number. The lesson is that some classifications depend on relations between intervals, not only on the presence or absence of attributes.

## Preliminaries

### Decision Trees

Classic decision-tree learning uses entropy and information gain to choose useful splits.

Entropy measures how mixed a dataset is with respect to the target classes. If all examples at a node belong to the same class, the node is pure. If the classes are evenly mixed, the node is uncertain.

![](/assets/blog/interval-temporal-logic-decision-tree-learning/figure-02.png){: width="968" height="106" loading="lazy" decoding="async" }

When a decision tree tests an attribute, it partitions the dataset. A good split sends examples into groups that are more class-homogeneous than the original group.

![](/assets/blog/interval-temporal-logic-decision-tree-learning/figure-03.png){: width="551" height="87" loading="lazy" decoding="async" }

A categorical split checks values such as `symptom = fever`. A numerical split checks thresholds such as `temperature <= 38`.

![](/assets/blog/interval-temporal-logic-decision-tree-learning/figure-04.png){: width="551" height="87" loading="lazy" decoding="async" }

The tree chooses the split that produces the largest information gain: the greatest reduction in uncertainty.

![](/assets/blog/interval-temporal-logic-decision-tree-learning/figure-05.png){: width="657" height="87" loading="lazy" decoding="async" }

![](/assets/blog/interval-temporal-logic-decision-tree-learning/figure-06.png){: width="887" height="222" loading="lazy" decoding="async" }

Temporal ID3 keeps this same spirit. It still asks: which split best separates the classes? The difference is that a split can now be temporal.

### Interval Temporal Logic

Interval temporal logic gives the tree a language for talking about time intervals.

An interval is a pair \([x, y]\), where \(x\) is the start and \(y\) is the end. Instead of representing events as isolated time points, we represent facts as holding over intervals:

```text
fever holds from day 3 to day 4
headache holds from day 2 to day 4
```

Allen's interval relations describe how two intervals relate. One interval may occur before another, meet another, begin with another, end with another, occur during another, or overlap another. Each relation also has an inverse.

<figure>
  <img src="/assets/blog/interval-temporal-logic-decision-tree-learning/figure-07.png" alt="Allen’s interval relations and HS modalities" width="983" height="393" loading="lazy" decoding="async">
  <figcaption>Allen’s interval relations and HS modalities</figcaption>
</figure>

The paper uses Halpern and Shoham's modal logic of temporal intervals, usually called HS. HS provides modal operators for Allen's relations.

For example, a condition such as:

```text
<O> headache
```

can be read informally as:

```text
there exists an overlapping interval where headache holds
```

This lets a decision tree test not only whether a proposition holds on the current interval, but whether a related interval exists with some property.

![](/assets/blog/interval-temporal-logic-decision-tree-learning/figure-08.png){: width="519" height="86" loading="lazy" decoding="async" }

Each instance in the dataset is a timeline: a collection of intervals labeled with propositions. A proposition such as `fever` or `headache` is true on the intervals where that condition holds.

![](/assets/blog/interval-temporal-logic-decision-tree-learning/figure-09.png){: width="867" height="201" loading="lazy" decoding="async" }

## Learning Interval Temporal Logic Decision Trees

### Data Preparation and Presentation

The input to Temporal ID3 is not a table of static rows. It is a dataset of timelines.

Each timeline is one instance. In a medical example, one timeline might be one patient's history. In an industrial example, one timeline might be one machine run. The labels on the intervals describe what was true during each period.

The algorithm assumes a finite time domain and a set of propositional letters, such as `fever`, `headache`, `pressure_high`, or `alarm_active`.

### Temporal Information

In a classical decision tree, a split is performed over an attribute. In Temporal ID3, a split is performed over a proposition and possibly a temporal relation.

There are two types of split.

A local split asks whether a proposition holds on the current reference interval:

```text
Does fever hold on this interval?
```

![](/assets/blog/interval-temporal-logic-decision-tree-learning/figure-10.png){: width="496" height="89" loading="lazy" decoding="async" }

A temporal split asks whether there is a related interval, connected by an Allen relation, where a proposition holds:

```text
Is there an overlapping interval where headache holds?
Is there a later interval where fever holds?
Is there an interval during this one where alarm_active holds?
```

![](/assets/blog/interval-temporal-logic-decision-tree-learning/figure-11.png){: width="496" height="89" loading="lazy" decoding="async" }

The algorithm computes information gain for these temporal splits just as ID3 computes information gain for ordinary attribute splits.

![](/assets/blog/interval-temporal-logic-decision-tree-learning/figure-12.png){: width="819" height="89" loading="lazy" decoding="async" }

![](/assets/blog/interval-temporal-logic-decision-tree-learning/figure-13.png){: width="891" height="89" loading="lazy" decoding="async" }

![](/assets/blog/interval-temporal-logic-decision-tree-learning/figure-14.png){: width="830" height="95" loading="lazy" decoding="async" }
The best split is the one that most reduces class uncertainty.

### The Algorithm

<figure>
  <img src="/assets/blog/interval-temporal-logic-decision-tree-learning/figure-15.png" alt="The algorithm Temporal ID3" width="884" height="800" loading="lazy" decoding="async">
  <figcaption>The algorithm Temporal ID3</figcaption>
</figure>

Temporal ID3 begins with timelines that do not yet have a reference interval. The paper calls this an unanchored dataset.

To start, the algorithm must decide not only which temporal condition to test, but also which interval should serve as the initial reference point. It searches possible reference intervals, possible propositions, and possible temporal relations to find the split with the highest information gain.

Once a split is chosen, the dataset is divided into two subsets:

- timelines that satisfy the temporal condition,
- timelines that do not.

The satisfying branch becomes anchored to a relevant interval. Future recursive splits can then ask temporal questions relative to that interval.

Each split is binary. A left branch may be labeled with a temporal condition such as:

```text
<O> headache
```

while the right branch corresponds to the negation:

```text
[O] not headache
```

The resulting tree is still interpretable, but its paths are now interval-temporal formulas instead of ordinary propositional rules.

## Example Outcome

In the toy patient example, Temporal ID3 can learn a tree that distinguishes classes using the temporal relationship between fever and headache. The paper shows a possible tree where class membership depends on conditions such as fever occurring later than a reference interval or headache overlapping a relevant interval.

This is exactly what a static decision tree cannot express cleanly. It can know that fever happened and headache happened, but it cannot naturally ask how their intervals relate.

## Why It Matters

Temporal ID3 is valuable because it preserves two things at once:

- the readability of decision trees,
- the expressive power of interval temporal logic.

That combination is useful in domains where temporal order and duration affect the meaning of data:

- medical histories,
- sensor logs,
- industrial monitoring,
- conversations and dialogue analysis,
- event-based behavior modeling.

The broader message is that interpretable machine learning does not have to stay static. If the data is temporal, the explanations should be temporal too.

## Limitations

The paper focuses on defining the learning problem and generalizing ID3. It does not deeply address pruning, overfitting control, or large-scale empirical evaluation. Those are important for practical deployment.

The method also requires timeline-style input. Raw time series or event logs may need preprocessing before they can be used. The quality of the learned tree will depend on how well those timelines represent the domain.

Still, the idea is strong: decision trees can evolve from static rule structures into temporal logical models that explain not only what happened, but how events related in time.

## References

1. Brunello, A., Sciavicco, G. and Stan, I.E., 2019, May. Interval temporal logic decision tree learning. In *European Conference on Logics in Artificial Intelligence* (pp. 778-793). Cham: Springer International Publishing. [PDF](https://iris.unife.it/retrieve/e309ade2-37a8-3969-e053-3a05fe0a2c94/jelia2019.pdf)
