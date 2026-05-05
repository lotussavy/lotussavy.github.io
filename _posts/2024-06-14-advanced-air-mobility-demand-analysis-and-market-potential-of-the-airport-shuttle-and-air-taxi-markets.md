---
layout: article
title: 'Advanced Air Mobility: Demand Analysis and Market Potential of the Airport Shuttle and Air Taxi Markets'
date: '2024-06-14'
categories:
- Advanced Air Mobility
reading_time: 7
sitemap: true
robots: index,follow
description: A clear walkthrough of how researchers estimated the demand and market potential for AAM airport shuttle and air taxi services in the United States.
image: /assets/blog/advanced-air-mobility-demand-analysis-and-market-potential-of-the-airport-shuttle-and-air-taxi-markets/cover.png
source_url: https://doi.org/10.3390/su13137421
---

Advanced Air Mobility is exciting because it promises faster trips, flexible routing, airport connections, and new urban transportation options. But the market cannot be judged only by enthusiasm or aircraft renderings. The core question is practical: how many people would actually use these services, and under what constraints?

Goyal, Reiche, Fernando, and Cohen study that question by estimating the market potential for two passenger AAM services: airport shuttles and air taxis. The airport shuttle market focuses on fixed routes to, from, or between airports. The air taxi market imagines a more mature on-demand service that moves passengers point to point across urban areas.

The study is valuable because it does not stop at unconstrained demand. It applies real-world limits such as infrastructure availability, willingness to pay, time of day, weather, and operating assumptions. That makes the results more conservative, but also more useful.

<figure>
  <img src="/assets/blog/advanced-air-mobility-demand-analysis-and-market-potential-of-the-airport-shuttle-and-air-taxi-markets/cover.png" alt="Operational assumptions">
  <figcaption>Operational assumptions</figcaption>
</figure>

## Two Markets: Airport Shuttle and Air Taxi

The airport shuttle market is the simpler early use case. It connects passengers to airports, from airports, or between airports along fixed routes. Demand is easier to understand because airport trips are already time-sensitive, geographically concentrated, and often expensive by ground transportation.

The air taxi market is broader and harder. It assumes point-to-point service across urban areas, closer to an aerial ride-hailing model. This market has more potential scale, but also more complexity: more origins and destinations, more infrastructure requirements, more operational uncertainty, and more competition from ground modes.

Studying both markets together helps show how AAM may evolve. Airport shuttle service may be a plausible early deployment pathway, while air taxi service depends on a more mature network.

## The Five-Step Demand Model

The paper uses an AAM travel demand model built around five steps: trip generation, scoping, trip distribution, mode choice modeling, and constraint application.

<figure>
  <img src="/assets/blog/advanced-air-mobility-demand-analysis-and-market-potential-of-the-airport-shuttle-and-air-taxi-markets/figure-02.png" alt="Demand model for AAM">
  <figcaption>Demand model for AAM</figcaption>
</figure>

This structure matters because AAM demand is not just a single number. It depends on where people start, where they go, when they travel, how long the ground alternative takes, how much the AAM trip costs, and whether infrastructure exists to serve the trip.

## Step 1: Trip Generation

Trip generation estimates how many trips exist in the potential market.

For the air taxi market, the authors use 2016 American Community Survey commuting data for work trips and 2017 National Household Travel Survey data for discretionary trips such as retail and leisure. For the airport shuttle market, they use 2018 Bureau of Transportation Statistics T-100 Market data, then distribute airport-specific trips across census tracts based on population.

This gives the model a baseline of potential trips before asking which of those trips could realistically shift to AAM.

## Step 2: Scoping

Scoping defines the spatial and temporal detail of the analysis. The authors compare different geographic resolutions and choose census tracts as the primary unit because they balance fidelity and computational practicality.

The model considers modes such as driving, transportation network companies, taxis, public transportation, and walking. It also incorporates existing aviation infrastructure, including heliports and airports from the FAA's Aviation Environmental Design Tool database.

This is important because early AAM operations may not have a large network of new vertiports. If service has to begin with existing infrastructure, the market is immediately constrained by where that infrastructure already is.

## Step 3: Trip Distribution

Trip distribution assigns trips between origin and destination pairs. The paper uses a simplified gravity model to estimate flows between census tracts.

Trips are filtered if AAM travel time is worse than ground transportation. This is a necessary reality check. If the air trip does not save time after accounting for access, waiting, flight, and egress, there is little reason to assume passengers will choose it.

## Step 4: Mode Choice Modeling

Mode choice modeling estimates how travelers choose among transportation options. The authors use a utility function based on travel time and cost, with cost considered relative to median household income.

The model is calibrated with 2016 ACS data and implemented using a multinomial logit framework. Rather than assuming a traveler definitely chooses one mode, the model estimates probabilities. That is better for emerging services because AAM adoption is uncertain and depends on tradeoffs.

For example, a traveler may prefer AAM if the ground trip is long, the time savings are large, and the fare is within their willingness to pay. Another traveler on a similar route may still choose a taxi, public transit, or private vehicle because of cost, baggage, access, comfort, or trust.

## Step 5: Applying Constraints

The final step applies constraints that make the market estimate more realistic.

<figure>
  <img src="/assets/blog/advanced-air-mobility-demand-analysis-and-market-potential-of-the-airport-shuttle-and-air-taxi-markets/figure-03.png" alt="Process for applying constraints">
  <figcaption>Process for applying constraints</figcaption>
</figure>

The constraints include passenger willingness to pay, infrastructure availability and capacity, time of day, and visual flight rules restrictions. The study also uses stated preference survey data from 1,722 respondents across five U.S. cities to help estimate willingness to pay.

This is where many optimistic AAM forecasts shrink. A city may have millions of trips, but only some are long enough, valuable enough, close enough to infrastructure, affordable enough, and operationally feasible enough to become AAM demand.

## What the Study Finds

After applying constraints, the paper estimates that the combined airport shuttle and air taxi markets could capture about 0.5% of unconstrained trips in the sample urban areas.

That may sound small, but at national scale it is still meaningful. Under the study's most conservative scenario, AAM passenger services could generate about 82,000 daily passengers in the United States, served by around 4,000 four- to five-seat aircraft. The estimated annual market valuation is about `$2.5 billion`.

The study also finds that AAM is more likely to replace non-discretionary trips longer than 45 minutes. Discretionary trips show limited demand because willingness to pay is lower. In plain terms, people may pay for AAM when the trip is important and time-sensitive, but not for ordinary leisure or shopping trips unless prices fall significantly.

## Why Infrastructure Is the Biggest Constraint

One of the strongest findings is that infrastructure availability and capacity are major limits on market potential. AAM demand depends on where passengers can actually board and land.

If vertiports are scarce, far from demand centers, or capacity-constrained, the service cannot capture much demand even if aircraft are available. If vertiport networks expand and capacity improves, the market can grow.

This makes infrastructure planning central to AAM strategy. Aircraft development alone will not unlock the market. Operators need usable sites, fast passenger processing, charging or fueling capacity, airspace procedures, and good ground connections.

## Price Sensitivity and Market Differences

The paper also examines price elasticity. Demand responds differently across cities. Denver, Houston, and Honolulu are modeled as more price-sensitive, while New York, Los Angeles, and Washington, DC are less sensitive.

Maximum revenue across urban areas occurs around `$2.50` to `$2.85` per passenger mile. That range is useful because it connects demand modeling to business model design. AAM cannot simply set prices based on what aircraft cost to operate. It has to find a fare that enough travelers are willing to pay.

This is especially important for air taxi service. The market may be large in theory, but if fares remain too high, demand may concentrate only among premium travelers and airport trips.

## Conservative vs. Unconstrained Demand

The contrast between constrained and unconstrained scenarios is dramatic. Under a fully unconstrained scenario, the paper estimates potential demand of 11 million daily trips and a market valuation of about `$500 billion`. After constraints, the conservative estimate falls to 82,000 daily passengers and `$2.5 billion` in annual market value.

That difference is the main lesson of the paper. Unconstrained demand can be misleading. AAM planning must account for real-world limits: infrastructure, cost, weather, airspace, passenger willingness to pay, and competition from ground transportation.

## Why This Matters for AAM Planning

This paper gives planners a disciplined way to think about early AAM markets. It suggests that airport shuttle services and long, non-discretionary trips may be more realistic early targets than broad citywide air taxi service.

It also shows why market size depends on deployment assumptions. More vertiports, higher vertiport capacity, lower operating costs, better network efficiency, autonomous operations, and improved passenger acceptance can all expand demand. But those improvements require investment, regulation, and public trust.

For cities and operators, the practical questions are clear:

1. Which trips are long and time-sensitive enough to justify AAM?
2. Where should vertiports be placed to capture real demand?
3. What fare can passengers actually support?
4. How much capacity is needed before the service feels reliable?
5. How will AAM compete with taxis, transit, ride-hailing, and future automated vehicles?

## Limitations

The study depends on assumptions about aircraft performance, fares, passenger behavior, infrastructure, weather, and future technology. Real-world AAM demand may differ as public acceptance, regulation, safety performance, and competing modes evolve.

The analysis also focuses on passenger markets. Cargo, emergency services, medical transport, and public-sector missions may develop differently and could become important early use cases.

Still, the model is valuable because it forces AAM demand to pass through operational and behavioral constraints. That makes the forecast less flashy, but much more useful.

## Final Thoughts

The airport shuttle and air taxi markets may have real potential, but the pathway is narrower than optimistic forecasts often imply. AAM demand will likely begin where time savings are clear, trips are important, infrastructure exists, and passengers are willing to pay.

The most important takeaway is that AAM market potential is not only about how many people travel in a city. It is about how many trips remain attractive after cost, access, infrastructure, weather, and operational constraints are applied.

That is the kind of demand analysis AAM needs: grounded, constrained, and honest about what it will take to scale.

## References

1. Goyal, R., Reiche, C., Fernando, C. and Cohen, A., 2021. Advanced Air Mobility: Demand Analysis and Market Potential of the Airport Shuttle and Air Taxi Markets. *Sustainability*, 13(13), 7421. https://doi.org/10.3390/su13137421
2. MDPI full text. https://www.mdpi.com/2071-1050/13/13/7421
3. UC Berkeley Institute of Transportation Studies record. https://its.berkeley.edu/publications/advanced-air-mobility-demand-analysis-and-market-potential-airport-shuttle-and-air-taxi
