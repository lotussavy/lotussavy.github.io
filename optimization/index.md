---
layout: default
title: "Optimization Lab — Learn by Experimenting"
seo_title: "Optimization Lab | Interactive Optimization Learning | Kamal Acharya"
description: "Learn optimization from fundamentals to mathematical models, algorithms, routing, and research through clear explanations and interactive experiments."
permalink: /optimization/
last_modified_at: 2026-11-13
robots: index,follow
sitemap: true
---

<section class="ol-home" aria-labelledby="ol-title">
  <style>
    .ol-home{--ol-ink:#153a53;--ol-deep:#102d45;--ol-teal:#087f83;--ol-line:#d7e6ed;--ol-fog:#f0f7fa;color:var(--ol-ink);max-width:1160px;margin:0 auto 3rem}
    .ol-home *{box-sizing:border-box}
    .ol-home a:not(.ol-btn){color:#126477;text-decoration:underline}
    .ol-home [hidden]{display:none!important}
    .ol-home h1,.ol-home h2,.ol-home h3{color:var(--ol-ink);line-height:1.2}
    .ol-home p{line-height:1.65}
    .ol-home button,.ol-home a{touch-action:manipulation}
    .ol-home :is(button,a):focus-visible{outline:3px solid #126477;outline-offset:3px;box-shadow:0 0 0 6px white}
    .ol-hero{position:relative;overflow:hidden;border-radius:22px;padding:clamp(1.45rem,4vw,3rem);background:radial-gradient(circle at 90% 20%,rgba(54,191,178,.23),transparent 40%),linear-gradient(125deg,#0d2942,#17546a);display:grid;grid-template-columns:minmax(0,1.2fr) minmax(240px,.8fr);gap:clamp(1.2rem,3vw,2.6rem);align-items:center;color:#eaf8fb}
    .ol-hero :is(h1,p){color:inherit}
    .ol-kicker{font-size:.78rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase;color:#a2eee1!important;margin:0 0 .8rem}
    .ol-hero h1{font-size:clamp(2rem,4.3vw,3.5rem);letter-spacing:-.035em;margin:.1rem 0 .9rem}
    .ol-hero p:not(.ol-kicker){font-size:clamp(1rem,1.4vw,1.13rem);max-width:51ch;color:#d1e7ed;margin:0}
    .ol-actions{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:1.55rem}
    .ol-btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:.75rem 1.1rem;border-radius:12px;font-weight:750;text-decoration:none!important;border:1px solid transparent;transition:transform .15s ease,background-color .15s ease}
    .ol-btn:hover{transform:translateY(-2px)}
    .ol-btn-primary{background:#d7fff5;color:#123b4c!important}
    .ol-btn-secondary{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.38);color:#fff!important}
    .ol-lab-preview-link{background:#0d6573;color:#fff!important;border-color:#0d6573}.ol-lab-preview-link:hover{background:#0b5060}
    .ol-hero-visual{min-height:230px;display:flex;align-items:center;justify-content:center}
    .ol-hero-visual svg{width:100%;max-width:390px;height:auto;overflow:visible}
    .ol-section{margin:clamp(2rem,4vw,3.3rem) 0}
    .ol-eyebrow{color:#08777a;font-weight:850;font-size:.75rem;letter-spacing:.13em;text-transform:uppercase;margin:0 0 .55rem}
    .ol-section h2{font-size:clamp(1.5rem,2.7vw,2.05rem);margin:.15rem 0 .75rem}
    .ol-section-intro{max-width:74ch;margin:0 0 1.3rem;color:#496477}
    .ol-principles,.ol-grid{display:grid;gap:1rem}
    .ol-principles{grid-template-columns:repeat(3,minmax(0,1fr))}
    .ol-principle,.ol-card,.ol-choice{background:#fff;border:1px solid var(--ol-line);border-radius:16px;padding:1.25rem;box-shadow:0 7px 20px rgba(10,57,80,.04)}
    .ol-principle strong{font-size:1.04rem;color:var(--ol-ink)}
    .ol-principle p,.ol-card p{font-size:.95rem;color:#4b6574;margin:.45rem 0 0}
    .ol-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
    .ol-card{position:relative;display:flex;flex-direction:column;gap:.4rem}
    .ol-card h3{font-size:1.18rem;margin:.25rem 0 0}
    .ol-card p{flex:1}
    .ol-card-top{display:flex;justify-content:space-between;gap:.5rem;align-items:center}
    .ol-number{font-size:.75rem;letter-spacing:.1em;color:#087b81;font-weight:850}
    .ol-status{font-size:.71rem;font-weight:750;background:#eef5f7;border:1px solid #d7e6ec;border-radius:999px;color:#496272;padding:.28rem .58rem;white-space:nowrap}
    .ol-meta{font-size:.81rem!important;color:#567084!important;margin-top:.7rem!important}
    .ol-pathfinder{background:var(--ol-fog);border:1px solid #d2e6ec;border-radius:20px;padding:clamp(1.1rem,3vw,1.8rem)}
    .ol-pathfinder p{margin:.2rem 0 1.05rem;color:#435f71}
    .ol-options{display:flex;flex-wrap:wrap;gap:.65rem}
    .ol-option{appearance:none;background:#fff;border:1px solid #bad2da;border-radius:12px;color:#1b475a;font:inherit;font-size:.94rem;font-weight:750;padding:.67rem 1rem;min-height:44px;cursor:pointer}
    .ol-option[aria-pressed="true"]{background:#0d6572;color:white;border-color:#0d6572}
    .ol-result{margin-top:1rem;padding:1rem 1.15rem;border-radius:14px;background:#fff;border:1px solid #d0e3e8;min-height:110px}
    .ol-result strong{color:#114456}
    .ol-result p{margin:.35rem 0 0}
    .ol-pipeline{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem;margin:1.1rem 0 0;padding:0;list-style:none}
    .ol-pipeline li{background:#eaf5f7;color:#1c5865;border-radius:999px;padding:.35rem .7rem;font-size:.82rem;font-weight:750}
    .ol-pipeline li+li:before{content:"→";margin-right:.6rem;color:#6b9ca3}
    .ol-feature{display:grid;grid-template-columns:minmax(0,1fr) minmax(230px,.9fr);gap:1.3rem;align-items:center;background:#f0f7fa;border:1px solid #cfe3eb;border-radius:19px;padding:clamp(1rem,3vw,1.8rem)}
    .ol-feature p{color:#4b6574}
    .ol-feature-visual{background:white;border:1px solid #dbe9ed;border-radius:14px;padding:1rem}
    .ol-feature-visual svg{width:100%;height:auto}
    .ol-feature-caption{font-size:.8rem;color:#526b7b;margin-top:.4rem}
    .ol-small{font-size:.85rem;color:#587083}
    @media(max-width:850px){.ol-hero{grid-template-columns:1fr}.ol-hero-visual{min-height:150px;max-width:420px}.ol-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ol-principles{grid-template-columns:1fr}.ol-feature{grid-template-columns:1fr}}
    @media(max-width:560px){.ol-grid{grid-template-columns:1fr}.ol-hero{border-radius:16px}.ol-actions .ol-btn{width:100%}.ol-hero-visual{display:none}.ol-home .ol-pipeline li{font-size:.72rem}}
    @media(prefers-reduced-motion:reduce){.ol-btn{transition:none}.ol-btn:hover{transform:none}}
  </style>

  <div class="ol-hero">
    <div>
      <p class="ol-kicker">A visual learning journey · From beginner to researcher</p>
      <h1 id="ol-title">Optimization, explained interactively.</h1>
      <p>Build intuition first. Understand the mathematics next. Then experiment with algorithms, code, and real-world routing problems.</p>
      <div class="ol-actions">
        <a class="ol-btn ol-btn-primary" href="{{ '/optimization/learn/foundations/what-is-optimization/' | relative_url }}">Start OPT-001 →</a>
        <a class="ol-btn ol-btn-secondary" href="{{ '/optimization/labs/profit/' | relative_url }}">Try the Profit Playground →</a>
      </div>
    </div>
    <div class="ol-hero-visual" aria-hidden="true">
      <svg viewBox="0 0 430 280" role="presentation" focusable="false">
        <defs><linearGradient id="ol-flow" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#9df4dd"/><stop offset="1" stop-color="#88bdf2"/></linearGradient></defs>
        <g fill="none" stroke="#9edfe1" stroke-opacity=".28" stroke-width="1.3"><path d="M34 214Q94 30 182 112T397 49"/><path d="M17 97Q161 256 261 159T414 212"/><path d="M57 47Q176 50 207 231T405 136"/></g>
        <path d="M42 215L131 174 201 209 281 85 390 63" fill="none" stroke="url(#ol-flow)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <g fill="#0d3951" stroke="#9df4dd" stroke-width="3"><circle cx="42" cy="215" r="10"/><circle cx="131" cy="174" r="10"/><circle cx="201" cy="209" r="10"/><circle cx="281" cy="85" r="10"/><circle cx="390" cy="63" r="10"/></g>
        <g fill="#d8fff3"><circle cx="42" cy="215" r="3"/><circle cx="131" cy="174" r="3"/><circle cx="201" cy="209" r="3"/><circle cx="281" cy="85" r="3"/><circle cx="390" cy="63" r="3"/></g>
        <g font-size="12" font-family="system-ui, sans-serif" fill="#d8eef6"><text x="16" y="243">Decision</text><text x="103" y="148">Constraints</text><text x="171" y="241">Feasible</text><text x="253" y="57">Improvement</text><text x="354" y="36">Optimum</text></g>
        <rect x="273" y="148" width="135" height="65" rx="10" fill="#0b3850" stroke="#75bdc4" opacity=".95"/>
        <text x="291" y="174" fill="#a5e5df" font-size="11" font-family="system-ui">Objective</text><text x="289" y="197" fill="#e9fff8" font-size="17" font-family="system-ui" font-weight="700">max f(x)</text>
      </svg>
    </div>
  </div>

  <section class="ol-section" aria-labelledby="ol-how-heading">
    <p class="ol-eyebrow">Our learning philosophy</p>
    <h2 id="ol-how-heading">Learn it. See it. Test it.</h2>
    <p class="ol-section-intro">Every lesson is designed to reduce time spent searching for missing explanations. We begin with an understandable decision, reveal its mathematical structure, and connect it to reproducible computation.</p>
    <div class="ol-principles">
      <div class="ol-principle"><strong>01 · Build intuition</strong><p>Start with a familiar situation and discover the problem before seeing formal notation.</p></div>
      <div class="ol-principle"><strong>02 · Experiment visually</strong><p>Change a decision, constraint, or algorithm and see the effects, rather than memorizing a result.</p></div>
      <div class="ol-principle"><strong>03 · Verify rigorously</strong><p>Connect interactive explanations to equations, implementation, tests, and appropriate references.</p></div>
    </div>
  </section>

  <section class="ol-section" id="find-your-path" aria-labelledby="ol-path-heading">
    <div class="ol-pathfinder">
      <p class="ol-eyebrow">A quick orientation</p>
      <h2 id="ol-path-heading">Where should you begin?</h2>
      <p>Choose the description that best matches your experience. This guide works without sending your choice to a server.</p>
      <div class="ol-options" role="group" aria-label="Choose your experience level">
        <button class="ol-option" type="button" data-ol-path="beginner" aria-pressed="true">I'm new to optimization</button>
        <button class="ol-option" type="button" data-ol-path="modeler" aria-pressed="false">I know some equations</button>
        <button class="ol-option" type="button" data-ol-path="researcher" aria-pressed="false">I work with algorithms</button>
      </div>
      <div class="ol-result" id="ol-recommendation" role="status" aria-live="polite">
        <strong>Start with OPT-001: What Is Optimization?</strong>
        <p>Learn objectives, decision variables, constraints, and the meaning of a feasible solution before moving to mathematical modeling.</p>
      </div>
    </div>
  </section>

  <section class="ol-section" id="learning-paths" aria-labelledby="ol-levels-heading">
    <p class="ol-eyebrow">Structured curriculum</p>
    <h2 id="ol-levels-heading">Six levels, one connected journey</h2>
    <p class="ol-section-intro">Follow the full beginner-to-researcher path, or return to an individual concept when you need a quick, reliable explanation. Lessons and labs will appear here as each one is validated and released.</p>
    <div class="ol-grid">
      <article class="ol-card"><div class="ol-card-top"><span class="ol-number">LEVEL 01</span><span class="ol-status">3 lessons available</span></div><h3><a href="{{ '/optimization/learn/foundations/what-is-optimization/' | relative_url }}">Optimization Foundations</a></h3><p>Decisions, objectives, constraints, feasibility, and optimality.</p><p class="ol-meta">Learn to recognize optimization in everyday problems.</p><p><a href="{{ '/optimization/learn/foundations/decisions-objectives-constraints/' | relative_url }}">OPT-002: Decisions, Objectives, and Constraints →</a></p><p><a href="{{ '/optimization/learn/foundations/feasibility-and-trade-offs/' | relative_url }}">OPT-003: Feasibility and Trade-offs →</a></p></article>
      <article class="ol-card"><div class="ol-card-top"><span class="ol-number">LEVEL 02</span><span class="ol-status">Coming soon</span></div><h3>Mathematical Modeling</h3><p>Linear programming, integer choices, model assumptions, and MILP.</p><p class="ol-meta">Turn real decisions into mathematical formulations.</p></article>
      <article class="ol-card"><div class="ol-card-top"><span class="ol-number">LEVEL 03</span><span class="ol-status">Coming soon</span></div><h3>Optimization Algorithms</h3><p>Enumeration, bounds, branch-and-bound, branch-and-cut, and heuristics.</p><p class="ol-meta">See how a solver searches for better solutions.</p></article>
      <article class="ol-card"><div class="ol-card-top"><span class="ol-number">LEVEL 04</span><span class="ol-status">Coming soon</span></div><h3>Routing &amp; Scheduling</h3><p>Shortest paths, TSP, multiple TSP, VRP, time windows, and prize collection.</p><p class="ol-meta">Explore networks, routes, and limited resources.</p></article>
      <article class="ol-card"><div class="ol-card-top"><span class="ol-number">LEVEL 05</span><span class="ol-status">Coming soon</span></div><h3>Implementation &amp; Experiments</h3><p>Python, modeling frameworks, solvers, validation, and benchmarks.</p><p class="ol-meta">Write, run, compare, and verify optimization code.</p></article>
      <article class="ol-card"><div class="ol-card-top"><span class="ol-number">LEVEL 06</span><span class="ol-status">Coming soon</span></div><h3>Research Applications</h3><p>Rolling horizons, uncertain demand, energy-aware operations, and PCMTSP.</p><p class="ol-meta">Connect foundational methods to advanced research.</p></article>
    </div>
  </section>

  <section class="ol-section" id="interactive-labs" aria-labelledby="ol-labs-heading">
    <p class="ol-eyebrow">Interactive learning laboratories</p>
    <h2 id="ol-labs-heading">Don't just read the solution. Explore the decisions.</h2>
    <div class="ol-feature">
      <div>
        <h3>Our first lab: Find the best decision</h3>
        <p>Choose how many vehicles to operate, observe revenue, cost, and profit, and discover the best decision using the interactive slider and verified mathematical model.</p>
        <ol class="ol-pipeline" aria-label="Learning process">
          <li>Choose</li><li>Observe</li><li>Predict</li><li>Verify</li>
        </ol>
        <p><a class="ol-btn ol-btn-primary ol-lab-preview-link" href="{{ '/optimization/labs/profit/' | relative_url }}">Open the Profit Playground →</a></p>
        <p class="ol-small"><strong>Available now:</strong> Read <a href="{{ '/optimization/learn/foundations/what-is-optimization/' | relative_url }}">OPT-001: What Is Optimization?</a>, continue with <a href="{{ '/optimization/learn/foundations/decisions-objectives-constraints/' | relative_url }}">OPT-002: Decisions, Objectives, and Constraints</a>, continue with <a href="{{ '/optimization/learn/foundations/feasibility-and-trade-offs/' | relative_url }}">OPT-003: Feasibility and Trade-offs</a>, explore <a href="{{ '/optimization/labs/feasibility/' | relative_url }}">LAB-B: Feasibility Explorer</a>, or open the <a href="{{ '/optimization/labs/model-builder/' | relative_url }}">Decision Model Builder</a>.</p>
      </div>
      <div class="ol-feature-visual" aria-label="Illustration of profit increasing and decreasing with fleet size">
        <svg viewBox="0 0 400 220" role="img" aria-labelledby="ol-plot-title ol-plot-desc">
          <title id="ol-plot-title">Illustrative objective function</title>
          <desc id="ol-plot-desc">Profit increases as fleet size rises, reaches a maximum, then decreases. This is a static illustration, not a live computational lab.</desc>
          <g stroke="#e4edf1" stroke-width="1"><path d="M42 28H376M42 69H376M42 110H376M42 151H376"/></g>
          <path d="M42 15V182H384" stroke="#63899a" stroke-width="1.7" fill="none"/>
          <path d="M54 174Q190 -10 240 44T365 172" fill="none" stroke="#118589" stroke-width="4" stroke-linecap="round"/>
          <circle cx="205" cy="33" r="7" fill="#e2ad4b" stroke="#fff" stroke-width="2"/>
          <path d="M205 33V182" stroke="#bc9853" stroke-dasharray="5 5" stroke-width="1.4"/>
          <g fill="#385d70" font-size="13" font-family="system-ui"><text x="8" y="21">Profit</text><text x="180" y="211">Fleet size</text><text x="215" y="22">Best decision</text></g>
        </svg>
        <div class="ol-feature-caption">Concept preview · Static illustration</div>
      </div>
    </div>
  </section>

  <section class="ol-section" aria-labelledby="ol-purpose-heading">
    <p class="ol-eyebrow">Built for curious learners</p>
    <h2 id="ol-purpose-heading">From a first question to independent research</h2>
    <p class="ol-section-intro">This learning platform is being developed as an educational companion to research in optimization and advanced air mobility. Examples will distinguish simple teaching models from research-grade formulations, and every released lab will document its assumptions and verification status.</p>
    <p><a href="{{ '/research/' | relative_url }}">Explore related research</a> · <a href="{{ '/publications/' | relative_url }}">View publications</a> · <a href="{{ '/blog/' | relative_url }}">Read research notes</a></p>
  </section>
  <script>
    (function(){
      const root=document.querySelector('.ol-home');
      if(!root)return;
      const result=root.querySelector('#ol-recommendation');
      const paths={
        beginner:['Start with OPT-001: What Is Optimization?','Learn objectives, decision variables, constraints, and the meaning of a feasible solution before moving to mathematical modeling.'],
        modeler:['Explore OPT-001, then follow the planned modeling track.','Use the first lesson to review decisions, objectives and feasibility. The modeling lessons will follow as they are developed and reviewed.'],
        researcher:['Begin with the verified OPT-001 example; advanced tracks are planned.','Examine the enumeration proof and reproducible code in the first lesson. Algorithm and routing lessons will be released after the foundations.']
      };
      root.querySelectorAll('[data-ol-path]').forEach(button=>{
        button.addEventListener('click',()=>{
          const choice=paths[button.getAttribute('data-ol-path')];
          if(!choice)return;
          root.querySelectorAll('[data-ol-path]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
          result.replaceChildren();
          const strong=document.createElement('strong');strong.textContent=choice[0];
          const p=document.createElement('p');p.textContent=choice[1];
          result.append(strong,p);
        });
      });
    })();
  </script>
</section>
