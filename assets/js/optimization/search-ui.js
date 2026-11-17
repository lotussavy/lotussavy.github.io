/* BL-009: local filtering/search with native links and usable static fallbacks. */
(function () {
  'use strict';
  var model = window.OptimizationSearch;
  if (!model) return;
  document.querySelectorAll('[data-glossary]').forEach(function (root) {
    var query = root.querySelector('[data-glossary-query]');
    var cards = Array.from(root.querySelectorAll('[data-glossary-term]'));
    var entries = model.prepareEntries(cards.map(function (card) {
      return { id: card.id, title: card.querySelector('h3').textContent.trim(), kind: 'term',
        url: card.querySelector('h3 a').getAttribute('href'), summary: card.querySelector('.or-definition').textContent,
        aliases: card.dataset.aliases.split('|').map(function (a) { return a.trim(); }),
        keywords: card.querySelector('.or-example').textContent + ' ' + card.dataset.lesson };
    }), root.dataset.searchRoot);
    function render() {
      var hits = model.search(entries, query.value, 'term'), visible = new Set(hits.map(function (hit) { return hit.entry.id; }));
      cards.forEach(function (card) { card.hidden = !visible.has(card.id); });
      root.querySelectorAll('[data-glossary-group]').forEach(function (group) {
        group.hidden = !Array.from(group.querySelectorAll('[data-glossary-term]')).some(function (card) { return !card.hidden; });
      });
      root.querySelector('[data-glossary-alpha]').hidden = Boolean(model.normalize(query.value));
      root.querySelector('[data-glossary-empty]').hidden = hits.length !== 0;
      root.querySelector('[data-glossary-status]').textContent = hits.length + ' of ' + cards.length + ' terms' + (query.value.trim() ? ' match “' + query.value.trim() + '”.' : '. Browse alphabetically or follow a direct term link.');
    }
    function revealTarget() {
      var id;
      try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
      var card = cards.find(function (item) { return item.id === id; });
      if (!card) return;
      if (query.value) { query.value = ''; render(); }
      card.focus({ preventScroll: true }); card.scrollIntoView({ block: 'start' });
    }
    query.addEventListener('input', render);
    root.querySelector('[data-glossary-clear]').addEventListener('click', function () { query.value = ''; render(); query.focus(); });
    root.querySelector('[data-glossary-controls]').disabled = false;
    window.addEventListener('hashchange', revealTarget);
    render(); revealTarget();
  });
  document.querySelectorAll('[data-opt-search]').forEach(function (root) {
    function get(key) { return root.querySelector('[data-search-' + key + ']'); }
    var query = get('query'), kind = get('kind'), entries = null;
    var labels = { term: 'Glossary term', lesson: 'Lesson', lab: 'Activity' };
    function readState() {
      var state = new URLSearchParams(location.hash.slice(1));
      query.value = (state.get('q') || '').slice(0, 200);
      kind.value = model.KINDS.includes(state.get('type')) ? state.get('type') : 'all';
    }
    function writeState() {
      var state = new URLSearchParams();
      if (query.value.trim()) state.set('q', query.value.trim());
      if (kind.value !== 'all') state.set('type', kind.value);
      var fragment = state.toString();
      history.replaceState(null, '', location.pathname + location.search + (fragment ? '#' + fragment : ''));
    }
    function render(updateAddress) {
      if (!entries) return;
      var hits = model.search(entries, query.value, kind.value), results = get('results'); results.replaceChildren();
      hits.forEach(function (hit) {
        var entry = hit.entry, li = document.createElement('li'), badge = document.createElement('span');
        badge.className = 'or-kind'; badge.textContent = labels[entry.kind];
        var title = document.createElement('h3'), link = document.createElement('a'); link.href = entry.url; link.textContent = entry.title; title.append(link);
        var summary = document.createElement('p'); summary.textContent = entry.summary;
        li.append(badge, title, summary); results.append(li);
      });
      get('empty').hidden = hits.length !== 0;
      get('status').textContent = hits.length + (hits.length === 1 ? ' result' : ' results') +
        (query.value.trim() ? ' for “' + query.value.trim() + '”' : '') +
        (kind.value !== 'all' ? ' in ' + (kind.value === 'term' ? 'glossary terms' : kind.value === 'lab' ? 'activities' : 'lessons') : '') +
        '. ' + entries.length + ' published entries are searchable.';
      if (updateAddress) writeState();
    }
    async function loadIndex() {
      get('retry').hidden = true; get('error').hidden = true;
      get('controls').disabled = true; get('output').hidden = true; get('fallback').hidden = false;
      get('status').textContent = 'Loading searchable content. You can browse the links below while it loads.';
      try {
        var response = await fetch(root.dataset.searchIndex, { credentials: 'same-origin' });
        if (!response.ok) throw new Error('Unavailable content');
        var data = await response.json();
        if (data.version !== 1) throw new Error('Unsupported content');
        entries = model.prepareEntries(data.entries, root.dataset.searchRoot);
        if (!entries.length) throw new Error('Empty content');
        readState(); get('controls').disabled = false; get('output').hidden = false; get('fallback').hidden = true;
        render(false);
      } catch (_) {
        entries = null; get('error').hidden = false; get('retry').hidden = false;
        get('status').textContent = 'Interactive search is unavailable. Browse the glossary, lessons and activities below.';
      }
    }
    root.querySelector('form').addEventListener('submit', function (event) { event.preventDefault(); render(true); });
    query.addEventListener('input', function () { render(true); });
    kind.addEventListener('change', function () { render(true); });
    get('clear').addEventListener('click', function () { query.value = ''; kind.value = 'all'; render(true); query.focus(); });
    get('retry').addEventListener('click', loadIndex);
    window.addEventListener('hashchange', function () {
      if (!entries) return;
      var fragment = location.hash.slice(1);
      // Native skip/top anchors should keep the current search, including its bookmark.
      if (fragment && !fragment.startsWith('q=') && !fragment.startsWith('type=')) { writeState(); return; }
      readState(); render(false);
    });
    loadIndex();
  });
}());
