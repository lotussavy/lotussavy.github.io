---
layout: article
seo_title: "Northern California UAM Feasibility and Fare Models"
title: 'Urban Air Mobility: Analyzing Feasibility and Fare Models for Northern California'
date: '2024-07-27'
categories:
- Advanced Air Mobility
reading_time: 7
sitemap: true
robots: index,follow
description: A clear look at how researchers evaluated UAM landing-site feasibility, commuter demand, and fare levels in the Greater Northern California region.
image: /assets/blog/urban-air-mobility-analyzing-feasibility-and-fare-models-for-northern-california/cover.png
source_url: https://doi.org/10.1109/ICNSURV.2019.8735267
---

Urban Air Mobility is often described as a way to escape ground congestion, but the real feasibility question is more specific: where would aircraft land, how many passengers would use the service, and what fare would make the system financially realistic?

Tarafdar, Rimjha, Hinze, Hotle, and Trani study those questions for the Greater Northern California region. Their work focuses on commuting trips and evaluates landing-site placement, demand potential, infrastructure requirements, life-cycle costs, and passenger fare levels.

The study is useful because it moves beyond the broad claim that eVTOLs can reduce travel time. It asks whether a regional UAM network could be located, sized, and priced in a way that makes sense.

## Why Northern California Is a Strong Test Case

The San Francisco Bay Area and surrounding Northern California region have the right ingredients for a UAM feasibility study: severe congestion, long commutes, high incomes in some corridors, strong technology adoption, and multiple dense employment centers.

The original post notes that commuters in the San Francisco metropolitan area experience significant annual delay. That matters because UAM is most attractive when it saves enough time to justify a higher fare. If ground trips are already fast, air travel has little advantage after accounting for access, boarding, flight, and egress.

The study area includes 2,377 census tracts across 17 counties, covering major markets such as San Francisco, San Jose, and Sacramento. The region spans more than 20,000 square miles and includes a commuter population of about 4.2 million, with nearly one million commuters earning at least `$100,000` annually.

## The Vehicle Assumption

The analysis uses a Joby S4-style eVTOL concept: an all-electric, autonomous, multi-rotor aircraft designed for up to four passengers, a range of roughly 150 miles, and a maximum speed above 140 mph.

These assumptions matter because aircraft performance shapes the entire network. Range affects which markets can be served. Seat count affects fare and throughput. Speed affects time savings. Vertical takeoff and landing affects landing-site design and land requirements.

## Finding Potential Landing Sites

Landing-site feasibility is one of the paper's central concerns. A UAM network cannot exist only as demand on a map. It needs physical sites that are close enough to passengers and large enough to support operations.

The study estimates landing-site requirements using FAA heliport design guidance. A basic landing pad requires about 11,025 square feet, while a more complete site with service and support facilities may require roughly 3 acres.

That land requirement is a major planning constraint in the Bay Area. Dense, high-demand areas are often exactly the places where available land is hardest to find. This creates a core tension: the best demand locations may not be the easiest infrastructure locations.

## Using Demand to Place Sites

The researchers use demographic and travel datasets to estimate commuting demand. Data sources include the National Household Travel Survey, the American Community Survey, and Zillow property data.

The demand estimation focuses on commuting trips from home to work and back. That choice is practical because commuting is frequent, recurring, and time-sensitive. It also allows the model to connect residential areas, employment centers, income levels, and travel distances.

K-means clustering is used to place landing sites near high-demand areas, especially high-income population centers that are more likely to afford premium UAM fares. The analysis tests scenarios with 200, 300, and 400 landing sites.

## Why Zillow Data Matters

The study uses Zillow data to check whether vacant land exists near potential landing sites. This is an important reality check.

A clustering algorithm can identify an ideal landing-site location mathematically, but if there is no suitable land nearby, the site may be impossible to build. By searching for vacant plots within a 0.5-mile radius of candidate sites, the authors connect demand modeling to land availability.

The original results highlight San Francisco and Santa Clara as areas with strong potential because demand is high and some suitable land parcels are identifiable. Still, the broader lesson is that UAM infrastructure planning must account for property constraints early, not after the demand model is finished.

## The 200-, 300-, and 400-Site Scenarios

The paper evaluates three landing-site network sizes: 200, 300, and 400 sites.

The 300-site scenario emerges as the most practical balance between demand capture and economic feasibility. It is large enough to serve meaningful demand but not as infrastructure-heavy as the 400-site case. Under this scenario, the model estimates about 13,182 flights per day.

This result is a reminder that more sites are not always better. Additional landing sites improve access, but they also increase land acquisition, construction, maintenance, staffing, and operational complexity. A feasible network needs enough coverage without overbuilding.

## Fare Modeling

The fare model estimates what UAM would need to charge to cover life-cycle costs. These costs include infrastructure, maintenance, personnel, training, and aircraft-related assumptions. The model assumes a 15-year aircraft life cycle and uses cost parameters drawn partly from general aviation maintenance data.

The study proposes a fare around `$1.74` per passenger-mile for the baseline UAM concept. A lower-cost air-metro concept using 8-seat aircraft could reduce the fare to about `$0.95` per passenger-mile.

That difference is important. Larger aircraft can spread operating costs across more passengers, but only if demand is strong enough to fill seats. A four-passenger eVTOL may offer flexibility, while a larger air-metro vehicle may offer better economics on high-demand corridors.

## Results

![](/assets/blog/urban-air-mobility-analyzing-feasibility-and-fare-models-for-northern-california/cover.png){: width="1041" height="482" loading="eager" decoding="async" fetchpriority="high" }

![](/assets/blog/urban-air-mobility-analyzing-feasibility-and-fare-models-for-northern-california/figure-02.png){: width="1015" height="508" loading="lazy" decoding="async" }

The study concludes that UAM could be feasible in Northern California under the right infrastructure and fare assumptions. The 300-site scenario provides the strongest balance in the analysis, and fares in the range of roughly `$1.00` to `$1.25` per passenger-mile are identified as more competitive.

That fare range is challenging. If real operating costs push fares much higher, the market becomes more dependent on high-income travelers and premium commute corridors. If fares can be lowered through higher utilization, larger aircraft, automation, or infrastructure efficiency, the potential market expands.

## What the Study Teaches

The biggest lesson is that UAM feasibility depends on a chain of conditions:

1. There must be enough time-sensitive commuter demand.
2. The demand must be near feasible landing sites.
3. Land must be available at acceptable cost.
4. Aircraft must carry enough passengers to support reasonable fares.
5. The fare must be high enough for operators but low enough for commuters.
6. The network must be dense enough to be useful without becoming too expensive to build.

If any link fails, the market shrinks.

## Limitations

The analysis focuses on commuting trips. That makes sense for a first feasibility study, but UAM demand may also come from airport access, business travel, medical trips, tourism, emergency response, and premium point-to-point travel.

The model also depends on assumptions about aircraft technology, autonomy, infrastructure cost, passenger willingness to pay, land availability, and operating efficiency. Many of those assumptions remain uncertain.

The later Transportation Research Part A study on Northern California commuter demand reinforces an important caution: demand is highly sensitive to passenger wait time, delay, and fare. UAM cannot rely only on speed in the air. The whole trip must be reliable and priced carefully.

## Final Thoughts

Northern California is a promising UAM market, but this study shows that promise does not automatically become feasibility. The region has congestion, income, and demand. It also has land constraints, high costs, and complex infrastructure needs.

The most practical takeaway is that UAM planning should start with the ground. Landing sites, access distance, land availability, fare structure, and commuter demand determine whether the aircraft has a market to serve.

For Northern California, the opportunity may be strongest on high-demand corridors where ground travel is slow, landing sites are feasible, and fares can be kept close enough to premium ground transportation to attract repeat users.

## References

1. Tarafdar, S., Rimjha, M., Hinze, N.K., Hotle, S.L. and Trani, A.A., 2019. Urban Air Mobility Regional Landing Site Feasibility and Fare Model Analysis in the Greater Northern California Region. *2019 Integrated Communications, Navigation and Surveillance Conference (ICNS)*, pp. 1-11. https://doi.org/10.1109/ICNSURV.2019.8735267
2. IEEE Xplore record. https://ieeexplore.ieee.org/document/8735267
3. Rimjha, M., Hotle, S., Trani, A. and Hinze, N., 2021. Commuter demand estimation and feasibility assessment for Urban Air Mobility in Northern California. *Transportation Research Part A: Policy and Practice*, 148, pp. 506-524. https://doi.org/10.1016/j.tra.2021.03.020
