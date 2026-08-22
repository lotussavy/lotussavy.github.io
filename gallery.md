---
layout: default
title: "Credentials and Recognition"
description: "Selected professional recognition, research credentials, service, and technical training completed by Kamal Acharya."
permalink: /gallery/
---

<section class="gallery-hero">
  <p class="gallery-eyebrow">Professional portfolio</p>
  <h1>Credentials &amp; Recognition</h1>
  <p>Selected honors, professional service, and training supporting my work in AI and engineering.</p>
  <nav class="gallery-jump-nav" aria-label="Credential categories">
    <a href="#recognition">Recognition</a>
    <a href="#research-training">Research training</a>
    <a href="#professional-service">Professional service</a>
    <a href="#technical-training">Technical training</a>
  </nav>
</section>

{% assign gallery_categories = "recognition|Professional Recognition|recognition, research_training|Research & Ethics Training|research-training, service|Conference & Professional Service|professional-service, technical_training|Technical Training|technical-training" | split: ", " %}
{% if site.data.certificates and site.data.certificates.size > 0 %}
  {% for category_config in gallery_categories %}
    {% assign category_parts = category_config | split: "|" %}
    {% assign category_key = category_parts[0] %}
    {% assign category_title = category_parts[1] %}
    {% assign category_id = category_parts[2] %}
    {% assign category_items = site.data.certificates | where: "category", category_key %}
<section class="gallery-section gallery-category" id="{{ category_id }}">
  <div class="gallery-section-heading">
    <h2>{{ category_title }}</h2>
    <span>{{ category_items.size }}</span>
  </div>
  <div class="gallery-grid{% if category_key == 'recognition' %} gallery-grid-featured{% elsif category_key == 'technical_training' %} gallery-grid-compact{% endif %}">
    {% for cert in category_items %}
    {% assign cert_image = '/assets/gallery/certificates/' | append: cert.image %}
    {% assign cert_thumb_name = cert.image | split: '.' | first | append: '.webp' %}
    {% assign cert_thumb = '/assets/gallery/certificates/thumbs/' | append: cert_thumb_name %}
    <figure class="gallery-card">
      <a
        class="gallery-open"
        href="{{ cert_image | relative_url }}"
        target="_blank"
        rel="noopener noreferrer"
        data-src="{{ cert_image | relative_url }}"
        data-alt="{{ cert.title }}"
        aria-label="Open full-size certificate: {{ cert.title }}"
      >
        <img src="{{ cert_thumb | relative_url }}" alt="{{ cert.title }}" width="700" height="525" loading="lazy" />
      </a>
      <figcaption>
        <strong>{% if cert.title_url %}<a href="{{ cert.title_url }}" target="_blank" rel="noopener noreferrer">{{ cert.title }}</a>{% else %}{{ cert.title }}{% endif %}</strong>
        {% if cert.issuer or cert.year %}
          <span class="gallery-meta">
            {% if cert.issuer %}{% if cert.issuer_url %}<a href="{{ cert.issuer_url }}" target="_blank" rel="noopener noreferrer">{{ cert.issuer }}</a>{% else %}{{ cert.issuer }}{% endif %}{% endif %}{% if cert.issuer and cert.year %} · {% endif %}{% if cert.year %}{{ cert.year }}{% endif %}
          </span>
        {% endif %}
      </figcaption>
    </figure>
    {% endfor %}
  </div>
</section>
  {% endfor %}
{% else %}
<section class="gallery-section">
  <p class="gallery-note">
    No certificate images configured yet. Add records in <code>_data/certificates.yml</code>.
  </p>
</section>
{% endif %}
