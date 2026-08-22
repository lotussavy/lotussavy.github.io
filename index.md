---
layout: default
title: "Kamal Acharya"
seo_title: "Kamal Acharya | Baylor Postdoc in AI and Mobility"
description: "Kamal Acharya is a Baylor University postdoctoral researcher specializing in Advanced Air Mobility, neurosymbolic AI, forecasting, and optimization."
permalink: /
last_modified_at: 2026-08-22
---

<section class="home-hero">
  {% assign profile_image = site.static_files | where_exp: "file", "file.path == '/assets/images/profile-300.webp'" | first %}
  <div class="home-identity">
    {% if profile_image %}
      <img class="home-photo" src="{{ '/assets/images/profile-300.webp' | relative_url }}" alt="Portrait of Kamal Acharya" width="76" height="76" loading="eager" />
    {% else %}
      <div class="home-mark" aria-hidden="true">KA</div>
    {% endif %}
    <div>
      <h1 class="home-title">Interpretable AI for Future Mobility</h1>
      <p class="home-subtitle">Advanced Air Mobility · Neurosymbolic AI · Demand Forecasting · Optimization</p>
    </div>
  </div>
  <p class="home-intro">
    I build transparent decision-support tools for emerging and resilient transportation systems.
  </p>
  <p class="home-profile-links" aria-label="Academic and professional profiles">
    <a class="profile-icon profile-icon-scholar" href="https://scholar.google.com/citations?hl=en&amp;user=0uLqckgAAAAJ" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" title="Google Scholar">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 1.8 8.5 12 14l8-4.3V16h2V8.5L12 3Zm-6.3 9v4.2C7.2 18 9.4 19 12 19s4.8-1 6.3-2.8V12L12 15.4 5.7 12Z"/></svg>
    </a>
    <a class="profile-icon profile-icon-orcid" href="https://orcid.org/0000-0002-9712-0265" target="_blank" rel="noopener noreferrer" aria-label="ORCID" title="ORCID">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path class="profile-icon-cutout" d="M7.2 7.1h1.7v1.7H7.2V7.1Zm0 3.1h1.7v6.7H7.2v-6.7Zm3.2-3.1h3.5c3.2 0 5.1 1.9 5.1 4.9s-1.9 4.9-5.1 4.9h-3.5V7.1Zm1.7 1.6v6.6h1.7c2.2 0 3.4-1.2 3.4-3.3s-1.2-3.3-3.4-3.3h-1.7Z"/></svg>
    </a>
    <a class="profile-icon profile-icon-linkedin" href="https://linkedin.com/in/lotussavy318" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3h-17A2.5 2.5 0 0 0 1 5.5v13A2.5 2.5 0 0 0 3.5 21h17a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 20.5 3ZM8 18H5v-9h3v9ZM6.5 7.8A1.75 1.75 0 1 1 6.5 4.3a1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.5c0-1.2-.4-2-1.5-2-1.3 0-1.7.9-1.7 2V18h-3V9h2.9v1.2h.1c.5-.8 1.5-1.5 2.8-1.5 2.6 0 3.4 1.7 3.4 4.3v5Z"/></svg>
    </a>
    <a class="profile-icon profile-icon-github" href="https://github.com/lotussavy" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2A11.5 11.5 0 0 1 12 6.5c1 0 2 .1 3 .4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z"/></svg>
    </a>
  </p>
</section>

<section class="home-section">
  <h2>Selected Publications</h2>
  <div class="home-work-list">
    <article class="home-work-item">
      <h3><a href="{{ '/publications/integrating-neurosymbolic-ai-in-advanced-air-mobility-comprehensive-survey/' | relative_url }}">Integrating Neurosymbolic AI in Advanced Air Mobility</a></h3>
      <p><span class="home-badge">IJCAI 2025</span> A survey of neurosymbolic methods for safer and more interpretable air-mobility systems.</p>
    </article>
    <article class="home-work-item">
      <h3><a href="{{ '/publications/demand-modeling-for-advanced-air-mobility-challenges-opportunities-and-future-directions/' | relative_url }}">Demand Modeling for Advanced Air Mobility</a></h3>
      <p><span class="home-badge">IEEE T-ITS 2026</span> Challenges, opportunities, and research directions in AAM demand forecasting.</p>
    </article>
    <article class="home-work-item">
      <h3><a href="{{ '/publications/survey-on-symbolic-knowledge-distillation-of-large-language-models/' | relative_url }}">Symbolic Knowledge Distillation of Large Language Models</a></h3>
      <p><span class="home-badge">IEEE TAI 2024</span> Methods for extracting explicit, interpretable knowledge from large language models.</p>
    </article>
  </div>
  <p><a href="{{ '/publications/' | relative_url }}">View all publications →</a></p>
</section>
