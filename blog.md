---
layout: default
title: Research Notes & Perspectives
description: "Research notes, paper analyses, and technical explainers by Kamal Acharya on Advanced Air Mobility, neurosymbolic AI, trustworthy AI, and mobility modeling."
permalink: /blog/
robots: index,follow
sitemap: true
---

<section class="blog-hero">
  <p class="blog-eyebrow">Research notes &amp; perspectives</p>
  <h1>Research Notes &amp; Perspectives</h1>
  <p>
    Research notes on how data-driven and neurosymbolic AI can support mobility
    demand modeling, infrastructure planning, and operational decisions.
    Browse by research area or by article format.
  </p>
  <p class="blog-taxonomy-note">Posts are organized by research area and article format. A post may appear in more than one research area when it connects methods with mobility applications.</p>
</section>

<nav class="blog-subnav" aria-label="Blog sections">
  <a href="{{ '/blog/archive/' | relative_url }}">Full Archive</a>
  {% for topic in site.data.blog_topics %}
  <a href="{{ '/blog/' | append: topic.slug | append: '/' | relative_url }}">{{ topic.title }}</a>
  {% endfor %}
</nav>

<section class="blog-section">
  <div class="blog-section-heading">
    <div>
      <p class="blog-eyebrow">Latest</p>
      <h2>Recent Articles</h2>
    </div>
    <a class="blog-read" href="{{ '/blog/archive/' | relative_url }}">View Archive</a>
  </div>

  {% if site.posts and site.posts.size > 0 %}
  <div class="blog-grid">
    {% for post in site.posts limit: 9 %}
    <article class="blog-card">
      <p class="blog-meta">
        {{ post.date | date: "%B %d, %Y" }}
        {% if post.reading_time %} · {{ post.reading_time }} min read{% endif %}
      </p>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      {% if post.categories and post.categories.size > 0 %}
      <p class="blog-categories">
        {% for category in post.categories %}
        <span>{{ category }}</span>
        {% endfor %}
        {% if post.post_type %}<span class="format-label">{{ post.post_type }}</span>{% endif %}
      </p>
      {% endif %}
      <p>{{ post.description | default: post.excerpt | strip_html | truncate: 145 }}</p>
      <p><a class="blog-read" href="{{ post.url | relative_url }}">Read Full Article</a></p>
    </article>
    {% endfor %}
  </div>
  {% else %}
  <p>No published posts yet. New articles are coming soon.</p>
  {% endif %}
</section>

<section class="blog-section">
  <div class="blog-section-heading">
    <div>
      <p class="blog-eyebrow">Browse</p>
      <h2>Topics</h2>
    </div>
  </div>

  <div class="blog-topic-grid">
    {% for topic in site.data.blog_topics %}
    {% assign topic_posts = site.posts | where_exp: "post", "post.categories contains topic.title" %}
    <a class="blog-topic-card" href="{{ '/blog/' | append: topic.slug | append: '/' | relative_url }}">
      <span>{{ topic_posts.size }} articles</span>
      <strong>{{ topic.title }}</strong>
      <p>{{ topic.description }}</p>
    </a>
    {% endfor %}
  </div>
</section>

<section class="blog-section">
  <h2>Stay Connected</h2>
  <p>
    For article updates, collaboration, or feedback:
    <a href="{{ '/research/' | relative_url }}">Research</a>
    |
    <a href="{{ '/publications/' | relative_url }}">Publications</a>
    |
    <a href="https://scholar.google.com/citations?user=0uLqckgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
    |
    <a href="{{ '/contact/' | relative_url }}">Contact</a>
    |
    <a href="mailto:lotussavy@gmail.com">Email</a>
    |
    <a href="https://linkedin.com/in/lotussavy318" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </p>
</section>
