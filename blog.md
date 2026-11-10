---
layout: default
title: Research Notes & Perspectives
description: "Research notes, paper analyses, and technical explainers by Kamal Acharya on Advanced Air Mobility, neurosymbolic AI, trustworthy AI, and mobility modeling."
permalink: /blog/
robots: index,follow
sitemap: true
---


<div class="bj-page" id="bj-page">
<style>
.bj-page{--bj-navy:#10354e;--bj-teal:#137f83;--bj-border:#d8e7ea;--bj-ink:#1b415a;color:var(--bj-ink)}
.bj-page *{box-sizing:border-box}.bj-page [hidden]{display:none!important}.bj-page a:focus-visible,.bj-page button:focus-visible,.bj-page input:focus-visible{outline:3px solid #edb448;outline-offset:3px}
.bj-hero{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(170px,.7fr);align-items:center;gap:1.4rem;border-radius:19px;padding:clamp(1.4rem,3vw,2.2rem);background:radial-gradient(circle at 85% 25%,rgba(27,167,166,.29),transparent 45%),linear-gradient(123deg,#0c2d46,#15536a);color:#e6f6fa}
.bj-hero h1{font-size:clamp(1.95rem,3.4vw,2.75rem);color:#fff;line-height:1.15;margin:.45rem 0}.bj-hero p{color:#d7ebf1;line-height:1.6;max-width:690px;margin:.7rem 0}
.bj-eyebrow{display:block;text-transform:uppercase;letter-spacing:.11em;font-size:.7rem;font-weight:850;color:#158284}.bj-hero .bj-eyebrow{color:#9fe6df}
.bj-hero-actions{display:flex;flex-wrap:wrap;gap:.55rem;margin:1.1rem 0 .25rem}.bj-hero-actions a{padding:.68rem .92rem;text-decoration:none;border-radius:8px;font-size:.83rem;font-weight:800;background:#e0f8f4;color:#15445b!important}
.bj-hero-actions a+a{border:1px solid #9bccd0;background:transparent;color:white!important}
.bj-hero-art{width:100%;max-height:206px;display:block}
.bj-section{margin:2.2rem 0}.bj-heading{display:flex;align-items:end;justify-content:space-between;gap:1rem;margin-bottom:1rem}.bj-heading h2{font-size:clamp(1.35rem,2.3vw,1.75rem);color:#164059;margin:.24rem 0}
.bj-heading p{font-size:.85rem;color:#5b7282;max-width:420px;margin:0}
.bj-featured{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);border:1px solid #cbdfe1;border-radius:16px;overflow:hidden;background:#f8fcfc}
.bj-featured-art{padding:1.5rem;display:flex;align-items:center;justify-content:center;background:linear-gradient(140deg,#e0f4f0,#eff8fb)}
.bj-featured-art svg{width:100%;max-width:270px;max-height:215px;display:block}
.bj-featured-copy{padding:clamp(1.1rem,2.6vw,1.7rem)}.bj-featured-copy h3{font-size:clamp(1.16rem,2vw,1.42rem);line-height:1.3;margin:.45rem 0}.bj-featured-copy h3 a{color:#174967;text-decoration:none}.bj-featured-copy h3 a:hover{text-decoration:underline}
.bj-featured-copy p{color:#506c7d;font-size:.9rem;line-height:1.65}.bj-featured-meta{color:#317c83;font-size:.75rem;font-weight:800}
.bj-read{display:inline-block;text-decoration:none;color:#176979;font-size:.83rem;font-weight:800}.bj-read:hover{text-decoration:underline}
.bj-toolbar{display:grid;grid-template-columns:minmax(180px,1fr) auto;gap:.7rem;align-items:center;margin:1rem 0}
.bj-search{width:100%;padding:.85rem 1rem;border:1px solid #bfdae0;border-radius:10px;font:inherit;color:#1a465d;background:#fff}.bj-search::placeholder{color:#66818e}
.bj-count{font-size:.78rem;color:#5a7785;white-space:nowrap}
.bj-filters{display:flex;gap:.44rem;flex-wrap:wrap;margin-bottom:.75rem}
.bj-filter{font:inherit;cursor:pointer;padding:.55rem .85rem;border:1px solid #cadfe3;border-radius:999px;background:#fff;color:#28637a;font-size:.78rem;font-weight:800}
.bj-filter[aria-pressed=true]{background:#195e75;border-color:#195e75;color:white}.bj-filter:hover:not([aria-pressed=true]){background:#e9f5f4}
.bj-format-row{display:flex;gap:.45rem;align-items:center;flex-wrap:wrap;margin:0 0 1rem}
.bj-format-row label{font-size:.78rem;font-weight:800;color:#587787}.bj-format-row select{font:inherit;font-size:.79rem;border:1px solid #cadee2;background:#fff;border-radius:8px;padding:.48rem .75rem;color:#265c70}
.bj-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.8rem}
.bj-article{display:flex;flex-direction:column;min-width:0;border:1px solid var(--bj-border);border-radius:13px;background:#fff;overflow:hidden;transition:transform .16s,box-shadow .16s}
.bj-article:hover{transform:translateY(-3px);box-shadow:0 12px 25px rgba(28,71,85,.08)}
.bj-article-mark{display:flex;align-items:center;justify-content:space-between;padding:.75rem .9rem;background:linear-gradient(120deg,#e9f5f3,#f9fcfc);border-bottom:1px solid #e0eded;color:#246c7c;font-size:.69rem;font-weight:850}
.bj-article-mark svg{width:48px;height:48px;color:#21818a}
.bj-article-body{padding:1rem;display:flex;flex-direction:column;gap:.55rem;flex:1}
.bj-article .bj-date{font-size:.74rem;color:#66808c;margin:0}
.bj-article h3{margin:0;font-size:1rem;line-height:1.35}.bj-article h3 a{color:#174660;text-decoration:none}.bj-article h3 a:hover{text-decoration:underline}
.bj-article p{font-size:.82rem;color:#547183;line-height:1.55;margin:0}
.bj-article .bj-read{margin-top:auto;padding-top:.4rem}
.bj-empty{padding:1.3rem;text-align:center;background:#f1f8f7;border:1px solid #d6e9e6;border-radius:12px;color:#587482}
.bj-topic-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.75rem}
.bj-topic-card{display:flex;flex-direction:column;gap:.55rem;padding:1.15rem;border:1px solid #d4e7e8;border-radius:13px;background:linear-gradient(125deg,#f1faf8,#fff);text-decoration:none}
.bj-topic-card:hover{border-color:#5aaba7;background:#eaf7f4}
.bj-topic-card svg{width:51px;height:51px;color:#1b7b86}.bj-topic-card small{font-size:.72rem;color:#54808b;font-weight:800}.bj-topic-card strong{font-size:1rem;color:#19455e}
.bj-topic-card p{font-size:.81rem;color:#537281;line-height:1.55;margin:0}
.bj-topic-card .bj-topic-cta{margin-top:auto;color:#176d79;font-size:.78rem;font-weight:850}
.bj-footer{padding:1.15rem;border:1px solid #cfe3e4;background:#f3faf9;border-radius:13px}.bj-footer h2{font-size:1.22rem;color:#17445a;margin:.2rem 0}.bj-footer p{font-size:.85rem;color:#527283}
.bj-footer-links{display:flex;gap:.5rem;flex-wrap:wrap}.bj-footer-links a{padding:.47rem .68rem;border:1px solid #c8dfe1;border-radius:8px;background:#fff;font-size:.8rem;font-weight:800;text-decoration:none;color:#1b667b}
@media(max-width:850px){.bj-hero{grid-template-columns:1fr}.bj-hero-art{display:none}.bj-grid,.bj-topic-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.bj-featured{grid-template-columns:1fr 1fr}}
@media(max-width:600px){.bj-grid,.bj-topic-grid,.bj-featured{grid-template-columns:1fr}.bj-featured-art svg{max-height:140px}.bj-toolbar{grid-template-columns:1fr}.bj-count{white-space:normal}}
@media(prefers-reduced-motion:reduce){.bj-article{transition:none}}
</style>
<section class="bj-hero" aria-labelledby="bj-title">
  <div><span class="bj-eyebrow">Research notes · Technical explainers · Perspectives</span>
    <h1 id="bj-title">Ideas worth exploring.</h1>
    <p>A research journal connecting Advanced Air Mobility, neurosymbolic AI, and data-driven modeling—with accessible explanations and links to deeper technical work.</p>
    <div class="bj-hero-actions"><a href="#bj-explore">Explore articles ↓</a><a href="{{ '/blog/archive/' | relative_url }}">Full archive</a></div>
  </div>
  <svg class="bj-hero-art" viewBox="0 0 280 220" aria-hidden="true" focusable="false">
    <g stroke="#79d6d4" stroke-width="2" fill="none"><path d="M19 165Q89 35 161 116T260 44M32 46l129 70 77-65M47 188l111-70 75 58" stroke-dasharray="5 7"/><path d="M86 40 114 83 167 38M114 83l55 55" opacity=".7"/></g>
    <g fill="#15445c" stroke="#9de8df" stroke-width="3"><circle cx="19" cy="165" r="9"/><circle cx="86" cy="40" r="8"/><circle cx="114" cy="83" r="10"/><circle cx="161" cy="116" r="14"/><circle cx="167" cy="38" r="9"/><circle cx="260" cy="44" r="9"/><circle cx="47" cy="188" r="8"/><circle cx="233" cy="176" r="8"/></g>
    <path d="m144 116 11 11 22-25" fill="none" stroke="#d3fff4" stroke-width="3.2" stroke-linecap="round"/>
  </svg>
</section>

{% if site.posts and site.posts.size > 0 %}
{% assign bj_featured = site.posts | first %}
<section class="bj-section" aria-labelledby="bj-featured-heading">
  <div class="bj-heading"><div><span class="bj-eyebrow">Latest post · From the journal</span><h2 id="bj-featured-heading">Featured reading</h2></div><p>A starting point from the existing research journal.</p></div>
  <article class="bj-featured">
    <div class="bj-featured-art" aria-hidden="true">
      <svg viewBox="0 0 280 190"><path d="M24 156Q87 30 140 93T255 34M30 45l110 48 100-43" fill="none" stroke="#3c9594" stroke-width="3" stroke-dasharray="7 7"/><g fill="#e1f5f1" stroke="#237d89" stroke-width="3"><circle cx="24" cy="156" r="13"/><circle cx="140" cy="93" r="15"/><circle cx="255" cy="34" r="13"/></g><g stroke="#3f9a9e" stroke-width="2" fill="none"><path d="M97 25 135 52 173 25M97 25 118 112M173 25 162 112"/><circle cx="97" cy="25" r="7"/><circle cx="173" cy="25" r="7"/><circle cx="118" cy="112" r="7"/><circle cx="162" cy="112" r="7"/></g></svg>
    </div>
    <div class="bj-featured-copy">
      <span class="bj-featured-meta">{{ bj_featured.date | date: "%B %d, %Y" }}{% if bj_featured.reading_time %} · {{ bj_featured.reading_time }} min read{% endif %}</span>
      <h3><a href="{{ bj_featured.url | relative_url }}">{{ bj_featured.title }}</a></h3>
      <p>{{ bj_featured.description | default: bj_featured.excerpt | strip_html | truncate: 230 }}</p>
      <a class="bj-read" href="{{ bj_featured.url | relative_url }}">Read featured article →</a>
    </div>
  </article>
</section>
{% endif %}

<section class="bj-section" id="bj-explore" aria-labelledby="bj-explore-heading">
<div class="bj-heading"><div><span class="bj-eyebrow">Discover</span><h2 id="bj-explore-heading">Explore the journal</h2></div><p>Search all published posts, or narrow by research area and article format.</p></div>
<div class="bj-toolbar">
  <input class="bj-search" type="search" id="bj-search" aria-label="Search blog posts" placeholder="Search titles, methods, topics, or keywords…" autocomplete="off">
  <span class="bj-count" id="bj-count" aria-live="polite">{% if site.posts %}{{ site.posts.size }}{% else %}0{% endif %} articles</span>
</div>
<div class="bj-filters" role="group" aria-label="Filter posts by research topic">
  <button class="bj-filter" type="button" data-bj-category="all" aria-pressed="true">All topics</button>
  {% for topic in site.data.blog_topics %}
  <button class="bj-filter" type="button" data-bj-category="{{ topic.title | downcase | escape }}" aria-pressed="false">{{ topic.title }}</button>
  {% endfor %}
</div>
<div class="bj-format-row"><label for="bj-format">Article type</label><select id="bj-format"><option value="all">All formats</option>
{% assign bj_types = site.posts | map: "post_type" | uniq %}
{% for kind in bj_types %}{% if kind and kind != empty %}<option value="{{ kind | downcase | escape }}">{{ kind }}</option>{% endif %}{% endfor %}
</select></div>
{% if site.posts and site.posts.size > 0 %}
<div class="bj-grid" id="bj-grid">
  {% for post in site.posts %}
  {% assign bj_cat = post.categories | join: " | " | downcase %}
  <article class="bj-article" data-bj-post data-bj-categories="{{ bj_cat | escape }}" data-bj-type="{{ post.post_type | default: '' | downcase | escape }}" data-bj-search="{{ post.title | append: ' ' | append: post.description | append: ' ' | append: post.categories | append: ' ' | append: post.post_type | downcase | strip_html | escape }}">
    <div class="bj-article-mark">
      <svg viewBox="0 0 50 50" aria-hidden="true"><path d="M6 35 20 13l11 14 13-19" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="3 4"/><g fill="#e0f6f1" stroke="currentColor" stroke-width="2"><circle cx="6" cy="35" r="4"/><circle cx="20" cy="13" r="4"/><circle cx="31" cy="27" r="4"/><circle cx="44" cy="8" r="4"/></g></svg>
      <span>{% if post.categories and post.categories.size > 0 %}{{ post.categories | first }}{% else %}Research journal{% endif %}</span>
    </div>
    <div class="bj-article-body">
      <p class="bj-date">{{ post.date | date: "%b %d, %Y" }}{% if post.reading_time %} · {{ post.reading_time }} min read{% endif %}{% if post.post_type %} · {{ post.post_type }}{% endif %}</p>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.description | default: post.excerpt | strip_html | truncate: 140 }}</p>
      <a class="bj-read" href="{{ post.url | relative_url }}">Read article →</a>
    </div>
  </article>
  {% endfor %}
</div>
<div class="bj-empty" id="bj-empty" hidden>No matching articles. Try another keyword or remove a filter.</div>
{% else %}<p>No published posts yet. New research notes are coming soon.</p>{% endif %}
</section>

<section class="bj-section" aria-labelledby="bj-topics-heading">
<div class="bj-heading"><div><span class="bj-eyebrow">Research collections</span><h2 id="bj-topics-heading">Browse by research area</h2></div><p>Explore focused collections and their full article lists.</p></div>
<div class="bj-topic-grid">
{% for topic in site.data.blog_topics %}
{% assign topic_posts = site.posts | where_exp: "post", "post.categories contains topic.title" %}
<a class="bj-topic-card" href="{{ '/blog/' | append: topic.slug | append: '/' | relative_url }}">
{% case topic.slug %}
{% when 'advanced-air-mobility' %}
<svg viewBox="0 0 60 60" aria-hidden="true"><path d="M7 46Q29 7 53 21" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="5 5"/><g fill="#d8f4ee" stroke="currentColor" stroke-width="2"><circle cx="7" cy="46" r="6"/><circle cx="53" cy="21" r="6"/></g><path d="M18 18h24m-12-10v20m-8-7 16-7" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>
{% when 'neurosymbolic-ai' %}
<svg viewBox="0 0 60 60" aria-hidden="true"><path d="M10 13 31 9 50 21M10 13l6 32 26 4 8-28M16 45 31 30l19-9M31 9v21l11 19" stroke="currentColor" stroke-width="2" fill="none"/><g fill="#d8f4ee" stroke="currentColor" stroke-width="2"><circle cx="10" cy="13" r="5"/><circle cx="31" cy="9" r="5"/><circle cx="50" cy="21" r="5"/><circle cx="16" cy="45" r="5"/><circle cx="42" cy="49" r="5"/></g><path d="m25 30 5 5 9-11" stroke="#168f85" stroke-width="3" fill="none"/></svg>
{% when 'machine-learning' %}
<svg viewBox="0 0 60 60" aria-hidden="true"><path d="M9 49V10m0 39h44" stroke="currentColor" stroke-width="2.4" fill="none"/><path d="m14 42 12-11 10 5 15-23" stroke="#208f8e" stroke-width="3" fill="none"/><g fill="#dcf5ed" stroke="currentColor" stroke-width="2"><circle cx="14" cy="42" r="4"/><circle cx="26" cy="31" r="4"/><circle cx="36" cy="36" r="4"/><circle cx="51" cy="13" r="4"/></g></svg>
{% else %}
<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="20" stroke="currentColor" stroke-width="3" fill="none"/><path d="m20 30 7 7 14-16" stroke="currentColor" stroke-width="3" fill="none"/></svg>
{% endcase %}
<small>{{ topic_posts.size }} articles</small><strong>{{ topic.title }}</strong><p>{{ topic.description }}</p><span class="bj-topic-cta">Explore collection →</span></a>
{% endfor %}
</div>
</section>
<section class="bj-section bj-footer"><span class="bj-eyebrow">Continue exploring</span><h2>From ideas to published research</h2><p>Read the underlying publications, explore current research directions, or get in touch about an idea.</p>
<div class="bj-footer-links"><a href="{{ '/research/' | relative_url }}">Research</a><a href="{{ '/publications/' | relative_url }}">Publications</a><a href="{{ '/blog/archive/' | relative_url }}">Full archive</a><a href="{{ '/contact/' | relative_url }}">Contact</a></div></section>
<script>
(function(){
'use strict';
var root=document.getElementById('bj-page');if(!root)return;
var posts=Array.prototype.slice.call(root.querySelectorAll('[data-bj-post]'));
var search=root.querySelector('#bj-search'),format=root.querySelector('#bj-format'),count=root.querySelector('#bj-count'),empty=root.querySelector('#bj-empty'),category='all';
function refresh(){
 var q=(search.value||'').toLocaleLowerCase().trim(),type=format.value,visible=0;
 posts.forEach(function(post){
  var matchQuery=!q||(post.getAttribute('data-bj-search')||'').toLocaleLowerCase().includes(q);
  var cats=(post.getAttribute('data-bj-categories')||'').split(' | ');
  var matchCategory=category==='all'||cats.indexOf(category)!==-1;
  var matchFormat=type==='all'||post.getAttribute('data-bj-type')===type;
  var show=matchQuery&&matchCategory&&matchFormat;post.hidden=!show;if(show)visible++;
 });
 if(count)count.textContent=visible+' of '+posts.length+' articles';
 if(empty)empty.hidden=visible!==0;
}
root.querySelectorAll('[data-bj-category]').forEach(function(button){button.addEventListener('click',function(){
 category=button.getAttribute('data-bj-category');
 root.querySelectorAll('[data-bj-category]').forEach(function(other){other.setAttribute('aria-pressed',String(other===button))});
 refresh();
})});
if(search)search.addEventListener('input',refresh);
if(format)format.addEventListener('change',refresh);
refresh();
})();
</script>
</div>
