---
layout: article
title: Demand prediction for urban air mobility using deep learning
date: '2024-04-20'
categories:
- Advanced Air Mobility
- Machine Learning
reading_time: 5
sitemap: true
robots: index,follow
description: A readable explanation of using LSTM, GRU, and Transformer models to
  estimate future Urban Air Mobility demand from taxi-trip data.
image: /assets/blog/demand-prediction-for-urban-air-mobility-using-deep-learning/cover.png
source_url: https://medium.com/@lotussavy/demand-prediction-for-urban-air-mobility-using-deep-learning-633e18a97bac
---

Urban Air Mobility sounds futuristic, but the business question is very practical: will enough people use it?

Before cities invest in vertiports, fleets, scheduling systems, and airspace integration, they need some estimate of demand. Where would people request air taxi trips? When would demand peak? Which areas might justify early service? These questions are difficult because large-scale UAM service does not yet exist, so there is no mature historical UAM dataset to train on.

The paper *Demand prediction for urban air mobility using deep learning* approaches this gap by using ground taxi data as a proxy. The idea is simple: if UAM is expected to serve taxi-like, on-demand urban trips, then existing taxi trips can provide an early signal of where and when air taxi demand might emerge.

The authors use a benchmark dataset of 150,000 taxi records and compare three deep learning models for UAM demand prediction:

- LSTM,
- GRU,
- Transformer.

The Transformer model performs best in the reported experiments, reaching an RMSE of 0.64. The paper also argues that this kind of trained model could later support transfer learning when real UAM data becomes available.

<figure>
  <img src="/assets/blog/demand-prediction-for-urban-air-mobility-using-deep-learning/cover.png" alt="UAM operations">
  <figcaption>UAM operations</figcaption>
</figure>

## Why Demand Prediction Matters

UAM is not only an aircraft problem. It is a network problem.

Even if eVTOL aircraft work technically, the service still needs enough demand in the right places and at the right times. A city may need to decide:

- where to place vertiports,
- how many aircraft to operate,
- which corridors to prioritize,
- what price points may be viable,
- whether the service should target commuters, airport trips, business travelers, or event traffic.

Demand prediction helps connect the technology vision to operational planning. Without it, UAM deployment becomes guesswork.

Because real UAM operations are still limited, the paper makes a practical assumption: ground taxi demand can serve as an initial proxy for potential air taxi demand.

## Methodology

<figure>
  <img src="/assets/blog/demand-prediction-for-urban-air-mobility-using-deep-learning/figure-02.png" alt="Detail process">
  <figcaption>Detail process</figcaption>
</figure>

The study follows a standard machine learning pipeline:

1. Acquire trip data.
2. Clean and preprocess the dataset.
3. Engineer demand-related features.
4. Train deep learning models.
5. Evaluate predictions using RMSE.

The important methodological choice is how the target demand is defined. Since actual air taxi demand is not available, the authors estimate a demand ratio from taxi data:

```text
Demand ratio = PassengerCount * Distance
```

The interpretation is straightforward. A trip with more passengers and longer distance represents a stronger potential demand signal than a short trip with one passenger.

## Dataset Preparation

The dataset comes from New York City Taxi and Limousine Commission trip records. These records include pickup and drop-off times and locations, trip duration, fares, payment information, distance, and passenger count.

The paper uses taxi data because it captures real urban travel behavior. It is not a perfect substitute for UAM demand, but it gives a useful starting point. Taxi trips reveal where people already pay for point-to-point mobility, when trips occur, how far they travel, and how many passengers are involved.

Before modeling, the data must be cleaned. The authors remove or correct anomalies such as zero, negative, or illogical values and drop fields that do not help demand prediction.

## Deep Learning Models

### Long short-term memory (LSTM)

LSTM networks are designed for sequential data. They use gates to decide what information to keep, forget, and output. This makes them useful for time-series problems where past behavior can influence future demand.

For UAM demand prediction, an LSTM can learn temporal patterns such as repeated daily or weekly travel behavior.

![](/assets/blog/demand-prediction-for-urban-air-mobility-using-deep-learning/figure-03.png)

### Gated recurrent unit (GRU)

GRU networks are a simpler recurrent architecture. They also use gates to manage memory, but with fewer components than LSTMs. This can make them faster to train while still capturing temporal dependencies.

In this study, GRU serves as another recurrent baseline for comparing sequence-modeling performance.

![](/assets/blog/demand-prediction-for-urban-air-mobility-using-deep-learning/figure-04.png)

### Transformer

Transformers use attention rather than recurrence as their central mechanism. Attention allows the model to focus on the most relevant parts of the input when making a prediction.

This can be powerful for mobility demand because demand may depend on patterns at multiple time scales. A trip request may be influenced by recent activity, time of day, broader weekly behavior, or recurring spatial patterns.

![](/assets/blog/demand-prediction-for-urban-air-mobility-using-deep-learning/figure-05.png)

## Results

![](/assets/blog/demand-prediction-for-urban-air-mobility-using-deep-learning/figure-06.png)

The paper reports that the Transformer model achieves the best performance among the tested models, with an RMSE of 0.64. This suggests that attention-based models may be better suited than recurrent models for capturing the demand patterns in the prepared taxi-based dataset.

The result is promising, but it should be interpreted carefully. The model is not predicting actual deployed UAM trips. It is learning from taxi-trip data to estimate a potential UAM-like demand signal. That makes the study useful for early planning, but not a final market forecast.

## Transfer Learning for UAM

One of the more interesting ideas in the paper is transfer learning.

Today, we have a lot of taxi and ride-hailing data, but little real UAM data. In the future, early UAM services may generate small datasets at first. Transfer learning offers a way to use knowledge learned from ground mobility data to initialize or improve models trained on limited UAM data.

In simple terms:

```text
learn urban mobility patterns from taxi data
then adapt that knowledge to air mobility demand
```

This is a practical strategy because UAM will not launch with years of historical demand records. Early operators will need models that can learn from related transportation systems and adapt as real observations arrive.

## Why It Matters

For policymakers and service providers, demand prediction is tied directly to investment risk.

A good forecast can help decide whether a UAM service is viable in a city, where infrastructure should be placed, and how demand might shift over time. It can also help identify whether UAM is likely to serve broad mobility needs or remain limited to premium, high-value trips.

The paper's contribution is not that taxi data perfectly predicts UAM. It does not. The contribution is that deep learning can provide a data-driven starting point when real UAM demand data is scarce.

## Limitations

Taxi demand and UAM demand are related, but not identical. Travelers may respond differently to UAM because of price, access time to vertiports, safety perception, weather sensitivity, noise concerns, baggage constraints, and regulatory limitations.

The demand ratio used in the paper is simple, based on passenger count and distance. Real UAM demand modeling would also need generalized cost, travel time savings, value of time, willingness to pay, vertiport accessibility, and service reliability.

Still, as an early-stage modeling framework, the study shows how existing urban mobility data can help prepare for future air mobility planning.

## References

1. Ahmed, F., Memon, M.A., Rajab, K., Alshahrani, H., Abdalla, M.E., Rajab, A., Houe, R. and Shaikh, A., 2024. Demand prediction for urban air mobility using deep learning. *PeerJ Computer Science*, *10*, p.e1946. [Article](https://peerj.com/articles/cs-1946/)
2. Rajendran, S., Srinivas, S. and Grimshaw, T., 2021. Predicting demand for air taxi urban aviation services using machine learning algorithms. *Journal of Air Transport Management*, *92*, p.102043.
