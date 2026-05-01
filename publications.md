---
layout: default
title: "Publications | Kamal Acharya | Advanced Air Mobility and Neurosymbolic AI"
description: "Peer-reviewed publications by Kamal Acharya in Advanced Air Mobility, neurosymbolic AI, machine learning, optimization, intelligent transportation, and cybersecurity."
permalink: /publications/
last_modified_at: 2026-04-30
---

<section class="pub-hero">
  {% assign journal_count = site.data.publications | where: "type", "journal" | size %}
  {% assign conference_count = site.data.publications | where: "type", "conference" | size %}
  {% assign book_chapter_count = site.data.publications | where: "type", "book_chapter" | size %}
  <h1>Publications</h1>
  <p>
    Peer-reviewed journal articles, conference papers, and book chapters by Kamal Acharya on
    Advanced Air Mobility, neurosymbolic AI, demand modeling, intelligent transportation systems,
    trustworthy machine learning, optimization, and applied cybersecurity.
  </p>
  <nav class="pub-jump-nav" aria-label="Browse publications by type">
    <span>Browse by type</span>
    <a href="#journal-articles">Journal Articles <span>{{ journal_count }}</span></a>
    <a href="#conference-proceedings">Conference Proceedings <span>{{ conference_count }}</span></a>
    <a href="#book-chapters">Book Chapters <span>{{ book_chapter_count }}</span></a>
  </nav>
  <p class="pub-links">
    <a href="https://scholar.google.com/citations?user=0uLqckgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
    <a href="https://orcid.org/0000-0002-9712-0265" target="_blank" rel="noopener noreferrer">ORCID</a>
  </p>
</section>

<section class="pub-summary">
  <h2>Research Contribution Summary</h2>
  <p>
    My peer-reviewed publications span <strong>Advanced Air Mobility demand modeling</strong>,
    <strong>Neurosymbolic AI</strong>, trustworthy machine learning, intelligent transportation systems,
    optimization, and applied cybersecurity. A central theme across this work is building AI methods
    that are not only predictive, but also interpretable, operationally useful, and aligned with
    real-world planning constraints.
  </p>
  <p>
    Recent work focuses on AAM forecasting and infrastructure planning, including regional air mobility,
    airport-connected urban air mobility, travel demand prediction, and gravity-model enhancement.
    Related AI research investigates neurosymbolic methods, symbolic knowledge distillation,
    reinforcement learning and planning, and robust decision-support systems.
  </p>
  <p>
    For broader context, see my <a href="{{ '/research/' | relative_url }}">research areas</a> and
    <a href="{{ '/talks/' | relative_url }}">conference talks and presentations</a>.
  </p>
</section>

<section class="pub-themes">
  <h2>Publication Themes</h2>
  <div class="pub-theme-grid">
    <article class="pub-theme-card">
      <h3>Advanced Air Mobility and Transportation Demand</h3>
      <p>
        Demand modeling, forecasting, portal siting, regional air mobility, urban air mobility,
        and intelligent transportation systems.
      </p>
    </article>
    <article class="pub-theme-card">
      <h3>Neurosymbolic and Trustworthy AI</h3>
      <p>
        Neurosymbolic surveys, symbolic knowledge distillation, rule-aware learning, robustness,
        uncertainty, and interpretable decision support.
      </p>
    </article>
    <article class="pub-theme-card">
      <h3>Optimization, Resilience, and Applied AI Systems</h3>
      <p>
        Neural-accelerated optimization, pre-disaster mobility planning, cybersecurity applications,
        and AI methods for constrained operational settings.
      </p>
    </article>
  </div>
</section>

{% assign publication_sections = "journal:Journal Articles:journal-articles|conference:Conference Proceedings:conference-proceedings|book_chapter:Book Chapters:book-chapters" | split: "|" %}
{% for section_config in publication_sections %}
{% assign section_parts = section_config | split: ":" %}
{% assign publication_type = section_parts[0] %}
{% assign section_title = section_parts[1] %}
{% assign section_id = section_parts[2] %}
{% assign section_publications = site.data.publications | where: "type", publication_type %}
{% assign publications_by_year = section_publications | group_by: "year" | sort: "name" | reverse %}
<section class="pub-list-section" id="{{ section_id }}">
  <h2>{{ section_title }}</h2>
{% for year_group in publications_by_year %}
  <section class="pub-year-group">
    <h3>{{ year_group.name }}</h3>
    <ol class="pub-list">
{% for publication in year_group.items %}
      <li class="pub-entry">
        <span class="pub-authors">{{ publication.authors | join: ", " }}</span>
        <a class="pub-title" href="{{ '/publications/' | append: publication.slug | append: '/' | relative_url }}">{{ publication.title }}</a>.
        <span class="pub-venue">{% if publication.type == "book_chapter" %}In {% endif %}{{ publication.venue }}</span>.
        <span class="pub-actions">
          {% if publication.status %}
            <span class="pub-status">{{ publication.status }}</span>
          {% endif %}
          {% if publication.doi and publication.url %}
            <a class="pub-doi" href="{{ publication.url }}" target="_blank" rel="noopener noreferrer">DOI</a>
          {% endif %}
        </span>
        {% if publication.tags %}
          <span class="pub-tags" aria-label="Publication topics">
            {% for tag in publication.tags %}
              <span class="pub-tag">{{ tag }}</span>
            {% endfor %}
          </span>
        {% endif %}
      </li>
{% endfor %}
    </ol>
  </section>
{% endfor %}
</section>
{% endfor %}
