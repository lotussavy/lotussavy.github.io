---
layout: default
title: "Certifications and Professional Credentials"
description: "Certificates, professional credentials, reviewer recognitions, and training records for Kamal Acharya in AI, machine learning, research ethics, and cybersecurity."
permalink: /gallery/
---

<section class="gallery-hero">
  <h1>Certifications</h1>
  <p>
    Visual portfolio showcasing earned certificates, professional credentials, and recognitions.
  </p>
  <p class="gallery-count">
    Total certificates: {{ site.data.certificates | size }}
  </p>
</section>

<section class="gallery-section">
  {% if site.data.certificates and site.data.certificates.size > 0 %}
  <div class="gallery-grid">
    {% for cert in site.data.certificates %}
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
        <strong>{{ cert.title }}</strong>
        {% if cert.issuer or cert.year %}
          <span class="gallery-meta">
            {% if cert.issuer %}{{ cert.issuer }}{% endif %}{% if cert.issuer and cert.year %} · {% endif %}{% if cert.year %}{{ cert.year }}{% endif %}
          </span>
        {% endif %}
      </figcaption>
    </figure>
    {% endfor %}
  </div>
  {% else %}
  <p class="gallery-note">
    No certificate images configured yet. Add records in <code>_data/certificates.yml</code>.
  </p>
  {% endif %}
</section>
