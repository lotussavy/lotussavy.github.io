---
layout: article
title: A Demand Forecasting Model for Urban Air Mobility in Chengdu, China
date: '2024-09-26'
categories:
- Advanced Air Mobility
- Machine Learning
reading_time: 7
sitemap: true
robots: index,follow
description: A readable walkthrough of a four-step UAM demand forecasting model for Chengdu, China, with a focus on modal split, shared operations, and 2030 demand.
image: /assets/blog/a-demand-forecasting-model-for-urban-air-mobility-in-chengdu-china/cover.png
source_url: https://doi.org/10.1016/j.geits.2024.100173
---

Urban Air Mobility can only become a real transportation service if demand is strong enough to support operations. Aircraft performance matters, but so do trip distance, cost, access to vertiports, and whether travelers would choose UAM over cars or public transport.

Qu, Huang, Li, and Liao study this question for Chengdu, China. Their paper forecasts UAM demand for 2030 using a transportation-planning framework built around the classic four-step model, with special attention to the modal split step where travelers choose between competing modes.

## Why Chengdu Is an Interesting Case

Chengdu is a large, growing metropolitan area with increasing travel demand and congestion pressure. The study focuses on the area inside the Fourth Ring Road, covering about 625 square kilometers.

The researchers divide the study area into 25 traffic zones based on land use, population density, administrative boundaries, roads, rivers, and the need to support future UAM takeoff and landing sites.

<figure>
  <img src="/assets/blog/a-demand-forecasting-model-for-urban-air-mobility-in-chengdu-china/cover.png" alt="Analytical framework for Chengdu UAM demand forecasting">
  <figcaption>Analytical framework for Chengdu UAM demand forecasting</figcaption>
</figure>

## The Four-Step Forecasting Method

The model follows the traditional four-step travel demand process: trip generation and attraction, trip distribution, modal split, and traffic assignment.

The first step estimates how many trips each zone produces and attracts. The authors use Chengdu's 2020 population and socioeconomic data to forecast 2030 demand. Because the forecast horizon is relatively short, they use the original unit method to project trip generation and attraction based on population growth.

The second step distributes trips between zones. The study uses a double-constrained gravity model, balancing both origin productions and destination attractions while accounting for impedance such as travel time, cost, and accessibility.

The third step estimates modal split. This is the heart of the paper because UAM does not yet have historical mode-share data. The authors combine a nested logit model with a multinomial logit model to estimate how trips may split among walking, cycling, driving, public transport, and UAM.

The final step assigns trips to routes. For UAM, the authors adapt traffic assignment to a three-dimensional air route network, assuming user equilibrium and unconstrained UAM capacity for the 2030 forecast.

## Why Modal Split Is the Hard Part

For cars and public transit, observed travel behavior exists. For UAM, it does not. That means the model cannot simply learn from historical UAM choices.

The authors address this by improving the logit structure. A pure multinomial logit model can suffer from the independence of irrelevant alternatives problem, where adding or changing one option unrealistically affects the probability of choosing other options. The nested logit structure helps group travel modes more realistically.

The model separates non-motorized transport, such as walking and cycling, from motorized transport, such as cars, public transit, and UAM. Then it estimates UAM's share based on time, cost, and accessibility.

This is important because UAM is not chosen only because it is fast. Travelers must also reach takeoff and landing sites, pay the fare, and see enough benefit compared with ground options.

## Data and Simulation Setup

The study uses traffic flow observations from Chengdu collected on July 17, 2020, between 16:30 and 18:30. The data covers 138 main roads and 532 monitoring equipment locations inside the Fourth Ring Road.

The authors use this data to build a 2020 origin-destination matrix, then forecast 2030 demand. They calibrate the model with travel time, accessibility, and cost information for cars, public transport, and projected UAM service.

This gives the model a way to ask a practical future question: if UAM exists in 2030 with the assumed performance and cost characteristics, which trips are likely to shift?

## Main Findings

The study finds that UAM becomes more attractive as trip distance increases. In the fully shared operation scenario, the UAM share rate increases by about 0.73 percentage points for every additional kilometer of travel distance.

UAM is especially competitive for trips longer than 15 kilometers. That makes sense. For short trips, access time and takeoff procedures can erase the advantage of flying. For medium and longer urban trips, the airborne segment has more room to create time savings.

The paper also emphasizes shared operation. UAM is more viable when multiple passengers share aircraft, spreading operating costs across riders. In early deployment, shared service may be more realistic than private air taxi trips because it improves affordability and utilization.

## Why This Matters

This work is useful because it treats UAM as one mode inside a full urban transportation system. It does not simply assume that UAM demand appears because eVTOL aircraft exist.

The model shows that UAM demand depends on:

1. Trip distance.
2. Travel time savings.
3. Fare and operating cost.
4. Vertiport accessibility.
5. Whether rides are shared.
6. How UAM compares with cars and public transport.

For planners, the strongest message is that UAM should target trips where it has a real advantage. In Chengdu, that appears to be medium- and long-distance urban trips rather than short neighborhood travel.

## Limitations

The model depends on assumptions about 2030 population growth, UAM cost, aircraft performance, vertiport accessibility, and unconstrained UAM capacity. Real deployment would also face airspace management, weather, charging, regulation, public acceptance, noise, and safety constraints.

The modal split model is a thoughtful response to limited UAM data, but actual revealed-preference data from future UAM services would be needed to improve confidence.

## Final Thoughts

The Chengdu study shows how traditional transportation modeling can be adapted for an emerging mode. The four-step method remains useful, but the modal split step needs careful redesign because UAM has no historical mode share.

The main takeaway is practical: UAM demand is strongest when trips are long enough, shared service reduces cost, and vertiport access is convenient. Without those conditions, the aircraft may be technically impressive but weak as a transportation option.

## References

1. Qu, W., Huang, J., Li, C. and Liao, X., 2024. A demand forecasting model for urban air mobility in Chengdu, China. *Green Energy and Intelligent Transportation*, 3(3), 100173. https://doi.org/10.1016/j.geits.2024.100173
2. DOAJ record. https://doaj.org/article/222c7fa1a7c4423aa18120aab249fef7
