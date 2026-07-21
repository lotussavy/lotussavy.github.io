---
layout: article
title: Deep Learning for Flight Demand Forecasting
date: '2024-04-17'
categories:
- Advanced Air Mobility
- Machine Learning
reading_time: 4
sitemap: true
robots: index,follow
description: A readable explanation of using seq2seq and attention-based deep
  learning models to forecast airport departure demand for strategic planning.
image: /assets/blog/deep-learning-for-flight-demand-forecasting/cover.png
source_url: https://medium.com/@lotussavy/deep-learning-for-flight-demand-forecasting-ccbd1514a929
---

Airport congestion is often a timing problem.

If too many aircraft want to depart during the same short window, surface operations can become crowded, delays can grow, and traffic managers have fewer good options. Scheduled airline traffic is easier to anticipate because flight schedules are known far in advance. General Aviation traffic is harder. It is more flexible, more event-driven, and often less predictable.

The paper *Deep Learning for Flight Demand Forecasting* studies this problem in the context of Pacer, a MITRE-developed mobile application designed to give General Aviation pilots and operators better awareness of future airport departure demand. The goal is practical: predict future departure demand early enough that operators can make better decisions before congestion appears.

This is a multi-horizon time-series forecasting problem. The model is not only predicting the next 15 minutes. It needs to predict a sequence of future demand values over a strategic horizon, using both historical airport behavior and future-known calendar features such as hour of day, day of week, and month.

The authors explore two deep learning approaches:

- sequence-to-sequence forecasting,
- sequence-to-sequence forecasting with attention.

The core idea is borrowed from natural language processing. Just as a translation model reads a sentence and produces another sentence, a demand-forecasting model can read a sequence of past airport conditions and produce a sequence of future demand estimates.

## Data Source

The study uses two aviation data sources.

The first is Aviation System Performance Metrics, or [ASPM](https://aspm.faa.gov/aspm/Dict_AirportQtr.pdf). ASPM provides quarter-hour airport demand, delay, runway configuration, and weather-related operational information. It is useful, but it updates slowly: once per day, with the previous day's data becoming available after the update.

The second is System-Wide Information Management, or [SWIM](https://www.faa.gov/air_traffic/technology/swim/overview). SWIM provides near-real-time information about airport surface operations, including arrival and departure lists and taxi information. It updates much more frequently, which makes it useful for shorter look-ahead forecasting.

This contrast matters. Better algorithms help, but aviation forecasting also depends heavily on how fresh and relevant the input data is. The paper's results show that combining ASPM with SWIM gives the strongest performance.

## Problem Formulation

Flight departure demand forecasting is formulated as a multivariate, multi-step time-series problem.

The model receives two kinds of information:

- past observed inputs, such as historical departure demand and observed departure counts;
- future known inputs, such as hour of day, quarter hour, day of week, and month.

The output is a sequence of future departure demand values. In the study, the time step is 15 minutes, so the forecast is built around quarter-hour demand.

This setup is more realistic than a single-step forecast. Airport operators need to know how demand may evolve across a future window, not only what happens at the next time step.

![](/assets/blog/deep-learning-for-flight-demand-forecasting/cover.png){: width="695" height="37" loading="eager" decoding="async" fetchpriority="high" }

![](/assets/blog/deep-learning-for-flight-demand-forecasting/figure-02.png){: width="695" height="37" loading="lazy" decoding="async" }

<figure>
  <img src="/assets/blog/deep-learning-for-flight-demand-forecasting/figure-03.png" alt="Listed inputs and outputs for departure demand prediction" width="794" height="186" loading="lazy" decoding="async">
  <figcaption>Listed inputs and outputs for departure demand prediction</figcaption>
</figure>

## Deep Learning for Time Series Forecasting

Traditional rule-based methods require experts to define the logic manually. That can work for simple patterns, but airport surface demand is shaped by many interacting factors: historical behavior, calendar cycles, live airport conditions, events, and operational disruptions.

Deep learning offers a different approach. Instead of manually defining all rules, the model learns patterns from historical data. This can help when the relationships are nonlinear, site-specific, or hard to enumerate.

The paper uses deep learning to support [Pacer](https://sites.mitre.org/mobileaviationresearch/pacer-original/), which aims to improve surface situation awareness for General Aviation operations.

<figure>
  <img src="/assets/blog/deep-learning-for-flight-demand-forecasting/figure-04.png" alt="Deep learning architecture for Pacer’s demand and delay forecasting[1]" width="762" height="360" loading="lazy" decoding="async">
  <figcaption>Deep learning architecture for Pacer’s demand and delay forecasting[1]</figcaption>
</figure>

### Feature Preparation

The model cannot use raw operational data directly. The data must be cleaned, aligned, scaled, and transformed into sequences.

The paper describes a five-stage feature-processing pipeline:

1. Create features from raw time-series data.
2. Scale and transform the data.
3. Split the data into train and test periods.
4. Convert series into input-output sequence pairs.
5. Feed those sequences into seq2seq models.

This step is not glamorous, but it is central. In operational forecasting, model performance often depends as much on feature preparation and data quality as on the neural architecture.

<figure>
  <img src="/assets/blog/deep-learning-for-flight-demand-forecasting/figure-05.png" alt="Feature processing procedure for Pacer demand forecasting[1]" width="918" height="123" loading="lazy" decoding="async">
  <figcaption>Feature processing procedure for Pacer demand forecasting[1]</figcaption>
</figure>

### Seq2seq Forecasting

Seq2seq models were originally popularized for machine translation. An encoder reads the input sequence, compresses it into an internal representation, and a decoder generates the output sequence.

For flight demand, the analogy is natural:

```text
past airport sequence -> future demand sequence
```

The encoder reads past demand and observed airport-state information. The decoder predicts future departure demand, while also using future-known factors such as time of day and day of week.

The authors use LSTM cells because they are well suited for sequence modeling and can handle longer dependencies better than simple recurrent neural networks.

<figure>
  <img src="/assets/blog/deep-learning-for-flight-demand-forecasting/figure-06.png" alt="Seq2seq architecture for our departure demand time series forecasting[1]" width="933" height="364" loading="lazy" decoding="async">
  <figcaption>Seq2seq architecture for our departure demand time series forecasting[1]</figcaption>
</figure>

### Seq2seq With Attention

A basic seq2seq model compresses the whole input history into a fixed-size hidden vector. For long input sequences, that can become a bottleneck. Important early information may fade before the decoder makes later predictions.

Attention helps solve this by letting the decoder look back at different parts of the input sequence while producing each future step.

In forecasting terms, attention lets the model ask:

```text
Which parts of the recent past are most relevant for this specific future time?
```

The paper uses Luong-style attention to improve departure demand forecasting.

<figure>
  <img src="/assets/blog/deep-learning-for-flight-demand-forecasting/figure-07.png" alt="Seq2seq with attention architecture for our departure demand time series forecasting[1]" width="922" height="474" loading="lazy" decoding="async">
  <figcaption>Seq2seq with attention architecture for our departure demand time series forecasting[1]</figcaption>
</figure>

## Results

The case study focuses on Las Vegas McCarran International Airport, now Harry Reid International Airport, identified in the paper by its airport code LAS. LAS is a useful test case because it has heavy airline activity and substantial General Aviation demand that can surge around events.

The authors compare several models, including:

- linear regression,
- autoregression,
- seq2seq,
- seq2seq with attention.

The strongest model is seq2seq with attention using both ASPM and SWIM inputs. According to the paper, this model reduces mean squared error by 62% compared with the autoregressive baseline and by 39% compared with linear regression. Even when only ASPM is used, seq2seq with attention still performs best among the tested methods.

<figure>
  <img src="/assets/blog/deep-learning-for-flight-demand-forecasting/figure-08.png" alt="Model performances comparison" width="904" height="238" loading="lazy" decoding="async">
  <figcaption>Model performances comparison</figcaption>
</figure>

The most important operational finding is that SWIM's near-real-time data helps the model react to sudden demand changes. The paper notes that only the seq2seq with attention model using SWIM was able to capture a sudden demand surge on January 10, 2020 in the LAS test period.

<figure>
  <img src="/assets/blog/deep-learning-for-flight-demand-forecasting/figure-09.png" alt="LAS models quarter-hour departure demand forecasting results comparison" width="890" height="625" loading="lazy" decoding="async">
  <figcaption>LAS models quarter-hour departure demand forecasting results comparison</figcaption>
</figure>

## Why It Matters

Better demand forecasting gives airport operators more time to act. If a surge is expected hours ahead, pilots, operators, and traffic managers can make better strategic decisions. That can reduce uncertainty around departure delays and improve surface situation awareness.

The paper also highlights a broader lesson for aviation AI: good forecasting requires both strong models and strong data. Deep learning helped, but the largest gains came when the model had access to fresher operational information through SWIM.

This is why the work is practically important. It is not deep learning for its own sake. It is deep learning applied to a specific operational problem where better predictions can support better planning.

## Limitations

The study is centered on a LAS case study, so the results should be tested across more airports and operational conditions. SWIM data is also not available for every airport and required substantial cleaning in the study.

Deep learning models can adapt from data, but they also need monitoring, retraining, and validation when airport behavior changes. Events, policy changes, weather patterns, and data-quality issues can all affect performance.

Still, the result is encouraging: sequence models, especially with attention and near-real-time inputs, can improve strategic flight departure demand forecasting.

## References

1. Wang, L., Mykityshyn, A., Johnson, C. and Marple, B.D., 2020. Deep learning for flight demand forecasting. *arXiv preprint arXiv:2011.04476*. [PDF](https://arxiv.org/pdf/2011.04476)
2. Luong, M.T., Pham, H. and Manning, C.D., 2015. Effective approaches to attention-based neural machine translation. arXiv preprint arXiv:1508.04025.
