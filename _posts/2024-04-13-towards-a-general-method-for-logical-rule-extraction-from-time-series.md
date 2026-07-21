---
layout: article
seo_title: "Logical Rule Extraction from Time Series"
title: Towards a General Method for Logical Rule Extraction from Time Series
date: '2024-04-13'
categories:
- Technical Articles
reading_time: 5
sitemap: true
robots: index,follow
description: A readable explanation of a general pipeline for turning multivariate
  time series into timelines and extracting temporal logical rules from them.
image: /assets/blog/towards-a-general-method-for-logical-rule-extraction-from-time-series/cover.png
source_url: https://medium.com/@lotussavy/towards-a-general-method-for-logical-rule-extraction-from-time-series-ca2f7bdc1014
---

Time series data is everywhere: patient histories, weather measurements, factory sensors, smart homes, water-quality monitoring, financial signals, and more. But raw time series are hard to explain. A long sequence of numbers may show something important, yet the pattern is often buried under noise, scale differences, irregular timing, and domain-specific details.

The paper *Towards a General Method for Logical Rule Extraction from Time Series* focuses on a practical question: can we turn time series into logical rules that people can read?

Not just correlations. Not just a forecast. Rules such as:

```text
IF conductivity is stable during one interval
AND iodine is stable immediately after
THEN chlorine is unlikely to increase during an overlapping interval
```

That kind of statement is useful because it preserves time. It does not merely say that two events occur together; it says how intervals relate to each other.

The authors propose a two-stage pipeline:

1. Convert multivariate time series into symbolic timelines.
2. Use Temporal APRIORI to extract logical temporal rules from those timelines.

The goal is generality. Many earlier approaches to time-series rule extraction depend heavily on domain-specific thresholds or custom algorithms. This paper tries to separate the abstraction step from the rule-mining step, making the method easier to reuse across domains.

## Temporal APRIORI

Classic APRIORI is one of the best-known algorithms for discovering association rules. It finds patterns such as:

```text
IF bread and butter are bought
THEN milk is often bought too
```

This works well for transaction data, where the main question is which items co-occur. But time series need more structure. We care whether one interval comes before another, overlaps with it, contains it, starts with it, or finishes with it.

Temporal APRIORI extends this idea to interval-based temporal data. Instead of mining itemsets from static transactions, it mines temporal rules from timelines.

The paper uses interval temporal logic based on Allen's interval relations. These relations describe how two intervals are positioned in time: one may occur after another, before another, during another, overlap another, begin with another, or end with another.

That matters because temporal rules are more expressive than ordinary association rules. They can describe not only what happens, but when it happens relative to something else.

<figure>
  <img src="/assets/blog/towards-a-general-method-for-logical-rule-extraction-from-time-series/cover.png" alt="Allen’s interval relations" width="734" height="288" loading="eager" decoding="async" fetchpriority="high">
  <figcaption>Allen’s interval relations</figcaption>
</figure>

Temporal rules are still evaluated with ideas similar to support and confidence, but time adds extra complexity.

Support asks whether a rule occurs often enough to be meaningful. Confidence asks whether the consequent is likely when the antecedent holds. In a timeline, these ideas must account for intervals, temporal relations, and whether a rule holds across enough timelines in the dataset.

So Temporal APRIORI is not just APRIORI with timestamps attached. It is association-rule mining lifted into an interval-based logical setting.

## Temporal Abstraction

Before rules can be mined, raw time series must be converted into timelines.

This is the paper's first major contribution. The authors propose a simple, domain-independent temporal abstraction method. Instead of requiring an expert to manually define labels for every variable, the method uses statistical thresholds based on the mean and standard deviation of each series.

For example, if we use three labels, a variable can be abstracted into:

- low,
- average,
- high.

If we apply the same idea to the first derivative of the series, the labels can describe trends:

- decreasing,
- stable,
- increasing.

That means the same pipeline can produce rules about states, such as "sodium is high," and rules about trends, such as "chlorine is decreasing."

<figure>
  <img src="/assets/blog/towards-a-general-method-for-logical-rule-extraction-from-time-series/figure-02.png" alt="A general, domain-independent, temporal abstraction algorithm." width="285" height="144" loading="lazy" decoding="async">
  <figcaption>A general, domain-independent, temporal abstraction algorithm.</figcaption>
</figure>

The abstraction algorithm takes four key inputs:

- the multivariate time series,
- the derivative degree \(z\),
- the number of labels \(l\),
- the displacement parameter \(k\).

The derivative degree decides what kind of behavior we label. At \(z = 0\), the method labels the value level of a variable. At \(z = 1\), it labels the trend. Higher degrees could capture acceleration-like behavior.

The number of labels controls how fine-grained the abstraction is. With three labels, the interpretation is simple: low, average, high. With more labels, the timeline becomes more detailed.

The displacement parameter controls how far from the mean a value must be before it moves into another label. It is a way to tune sensitivity.

In plain terms, the method asks:

```text
During this interval, is the variable low, average, or high
relative to its own overall behavior?
```

or, for trends:

```text
During this interval, is the variable decreasing, stable, or increasing
relative to its usual rate of change?
```

This turns numerical sequences into symbolic intervals, which Temporal APRIORI can mine.

## A Simple Example

Imagine a patient-monitoring dataset with heart rate, blood pressure, and blood oxygen readings over time.

The abstraction step might turn raw values into labeled intervals:

```text
heart_rate is high from day 2 to day 5
blood_pressure is increasing from day 3 to day 6
oxygen is low from day 6 to day 7
```

Temporal APRIORI could then search for repeated patterns such as:

```text
IF high heart rate overlaps increasing blood pressure
THEN low oxygen often occurs after
```

This is easier to read than a table of raw measurements, and it preserves the temporal structure that a static rule would lose.

## Application Example

The authors test the method on physical-chemical data from underground water in northeast Italy. The data came from 92 sampling points collected between 2012 and 2018. Each sample included multiple indicators such as bromine, calcium, chlorine, bicarbonate, iodine, sodium, sulfate, mercury, temperature, and electric conductivity.

After cleaning and ordering the data, the authors obtained 92 multivariate time series with 17 variables. Only 43 timelines were meaningful enough for extraction because some series were too short. They abstracted the data at:

- the 0th derivative, capturing value states such as low, average, and high;
- the 1st derivative, capturing trends such as decreasing, stable, and increasing.

The extracted rules connected chemical states and trends over time. For example, some rules related average conductivity or chlorine levels to future high sodium. Other rules connected stable conductivity and iodine behavior with whether chlorine later increased or decreased.

The important point is not any single chemical rule. The important point is that the pipeline produced readable temporal patterns from multivariate time series without relying on a custom abstraction built only for that dataset.

## Why It Matters

Time-series models often focus on forecasting: predict the next value. That is useful, but it does not always explain the temporal logic of a system.

Rule extraction asks a different question:

```text
What recurring temporal relationships appear in the data?
```

This is valuable in domains where people need explanations, not just predictions. Environmental scientists may want to understand how pollutants move. Doctors may want to see which physiological changes tend to precede a warning sign. Engineers may want to identify sensor patterns that occur before machine failure.

The paper's contribution is a general bridge from numerical time series to logical temporal rules. It abstracts raw signals into symbolic timelines, then mines rules that preserve interval relationships.

## Limitations

The method still depends on parameter choices such as the number of labels, the displacement threshold, support, and confidence. These choices affect which rules appear. The abstraction is intentionally general, but in high-stakes settings, domain experts still need to interpret and validate the rules.

The approach also produces many candidate rules, as APRIORI-style methods often do. Filtering, ranking, and human review remain important.

Still, the idea is compelling: make time-series patterns readable by turning them into temporal logic.

## References

1. Sciavicco, G., Stan, I.E. and Vaccari, A., 2019, May. Towards a general method for logical rule extraction from time series. In *International Work-Conference on the Interplay Between Natural and Artificial Computation* (pp. 3-12). Cham: Springer International Publishing. [PDF](https://iris.unife.it/retrieve/e309ade2-37aa-3969-e053-3a05fe0a2c94/iwinac2019-rule%20extraction.pdf)
