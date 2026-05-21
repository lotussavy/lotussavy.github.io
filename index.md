---
layout: default
title: "Kamal Acharya"
description: "Kamal Acharya holds a Ph.D. in Information Systems from UMBC and researches interpretable AI, Advanced Air Mobility demand modeling, neurosymbolic systems, forecasting, and optimization."
permalink: /
last_modified_at: 2026-04-30
---

<section class="home-hero">
  {% assign profile_image = site.static_files | where_exp: "file", "file.path == '/assets/images/profile-300.webp'" | first %}
  <div class="home-identity">
    {% if profile_image %}
      <img
        class="home-photo"
        src="{{ '/assets/images/profile-300.webp' | relative_url }}"
        alt="Portrait of Kamal Acharya"
        width="76"
        height="76"
        loading="eager"
      />
    {% else %}
      <div class="home-mark" aria-hidden="true">KA</div>
    {% endif %}
    <div>
      <h1 class="home-title">Interpretable AI for Future Mobility</h1>
      <p class="home-subtitle">Advanced Air Mobility · Neurosymbolic AI · Forecasting & Optimization</p>
    </div>
  </div>
  <p class="home-intro">
    I build models that help planners understand future transportation demand, reason with domain
    knowledge, and make safer operational decisions.
  </p>
  <p class="home-intro">
    My current work connects data-driven forecasting, symbolic reasoning, and optimization for air mobility
    systems and resilient transportation planning.
  </p>
  <p class="home-collab-line">
    Open to collaboration in AAM forecasting, trustworthy AI, and neurosymbolic systems.
  </p>
  <p class="home-cta-group">
    <a class="home-action-link" href="{{ '/publications/' | relative_url }}">View Publications</a>
    <a class="home-action-link home-action-link-secondary" href="{{ '/contact/' | relative_url }}">Contact Me</a>
  </p>
  <p class="home-profile-links" aria-label="Academic and professional profiles">
    <a href="https://scholar.google.com/citations?hl=en&user=0uLqckgAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>
    <a href="https://orcid.org/0000-0002-9712-0265" target="_blank" rel="noopener noreferrer">ORCID</a>
    <a href="https://linkedin.com/in/lotussavy318" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://github.com/lotussavy" target="_blank" rel="noopener noreferrer">GitHub</a>
  </p>
</section>

<section class="home-section">
  <h2>Research Focus</h2>
  <div class="home-card-grid">
    <article class="home-card">
      <img src="{{ '/assets/icons/research.svg' | relative_url }}" alt="" width="24" height="24" />
      <h3>Advanced Air Mobility Demand Modeling</h3>
      <p>Forecasting future travel demand, infrastructure needs, and operational constraints for emerging air mobility systems.</p>
    </article>
    <article class="home-card">
      <img src="{{ '/assets/icons/chip.svg' | relative_url }}" alt="" width="24" height="24" />
      <h3>Neurosymbolic AI</h3>
      <p>Combining neural learning with symbolic reasoning to make AI systems more interpretable, controllable, and useful for decision support.</p>
    </article>
    <article class="home-card">
      <img src="{{ '/assets/icons/briefcase.svg' | relative_url }}" alt="" width="24" height="24" />
      <h3>Optimization for Transportation Planning</h3>
      <p>Building AI-assisted methods for scenario analysis, resilient mobility planning, and operational decision-making.</p>
    </article>
  </div>
</section>

<section class="home-section">
  <h2>Professional Snapshot</h2>
  <div class="home-card-grid">
    <article class="home-card">
      <img src="{{ '/assets/icons/briefcase.svg' | relative_url }}" alt="" width="24" height="24" />
      <h3>Current Role</h3>
      <p>Graduate Research Assistant at UMBC, contributing to NASA ULI research initiatives.</p>
    </article>
    <article class="home-card">
      <img src="{{ '/assets/icons/book.svg' | relative_url }}" alt="" width="24" height="24" />
      <h3>Research Output</h3>
      <p>15+ publications across IEEE journals and major AI and transportation conferences.</p>
    </article>
    <article class="home-card">
      <img src="{{ '/assets/icons/chip.svg' | relative_url }}" alt="" width="24" height="24" />
      <h3>Core Areas</h3>
      <p>Neurosymbolic AI, AAM demand modeling, optimization, and trustworthy AI systems.</p>
    </article>
  </div>
</section>

<section class="home-section">
  <h2>Current Projects</h2>
  <div class="home-work-list">
    <article class="home-work-item">
      <h3>NASA ULI AAM Demand Modeling</h3>
      <p>Developing demand forecasting workflows for mobility-energy coordinated Advanced Air Mobility systems.</p>
    </article>
    <article class="home-work-item">
      <h3>Neurosymbolic Travel Demand Prediction</h3>
      <p>Integrating symbolic rules with neural models to improve interpretability in transportation prediction.</p>
    </article>
    <article class="home-work-item">
      <h3>Neural-Accelerated Disaster Mobility Planning</h3>
      <p>Using neural networks to speed up optimization for pre-disaster transportation and air mobility planning.</p>
    </article>
  </div>
</section>

<section class="home-section">
  <h2>Selected Work</h2>
  <div class="home-work-list">
    <article class="home-work-item">
      <h3><a href="{{ '/publications/integrating-neurosymbolic-ai-in-advanced-air-mobility-comprehensive-survey/' | relative_url }}">Integrating Neurosymbolic AI in Advanced Air Mobility</a></h3>
      <p><span class="home-badge">IJCAI 2025</span> Survey paper mapping practical integration paths for neurosymbolic AAM systems.</p>
    </article>
    <article class="home-work-item">
      <h3><a href="{{ '/publications/demand-modeling-for-advanced-air-mobility-challenges-opportunities-and-future-directions/' | relative_url }}">Demand Modeling for Advanced Air Mobility</a></h3>
      <p><span class="home-badge">IEEE TITS</span> Journal publication analyzing open challenges and modeling opportunities for AAM demand forecasting.</p>
    </article>
    <article class="home-work-item">
      <h3><a href="{{ '/publications/survey-on-symbolic-knowledge-distillation-of-large-language-models/' | relative_url }}">Symbolic Knowledge Distillation of Large Language Models</a></h3>
      <p><span class="home-badge">IEEE TAI</span> Framework for extracting symbolic structures from LLMs while retaining prediction utility.</p>
    </article>
  </div>
  <p class="home-cta-group">
    <a class="home-action-link" href="{{ '/publications/' | relative_url }}">View Full Publication List</a>
    <a class="home-action-link home-action-link-secondary" href="{{ '/research/' | relative_url }}">Explore Research Themes</a>
    <a class="home-action-link home-action-link-secondary" href="{{ '/blog/' | relative_url }}">Read Articles</a>
  </p>
</section>
