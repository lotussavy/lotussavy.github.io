/* BL-009: dependency-free, deterministic matching for published reference content. */
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.OptimizationSearch = factory();
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  var KINDS = Object.freeze(['all', 'term', 'lesson', 'lab']);
  function normalize(value) {
    return String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, ' ').trim().replace(/\s+/g, ' ');
  }
  function prepareEntries(entries, rootPath) {
    if (!Array.isArray(entries)) throw new TypeError('Search entries must be an array.');
    rootPath = rootPath || '/optimization/';
    var ids = new Set(), urls = new Set();
    return Object.freeze(entries.map(function (entry) {
      ['id', 'title', 'summary', 'url', 'kind'].forEach(function (key) {
        if (typeof entry[key] !== 'string' || !entry[key].trim()) throw new TypeError('Missing search field: ' + key);
      });
      if (!KINDS.slice(1).includes(entry.kind)) throw new RangeError('Unknown content type.');
      var parsed = new URL(entry.url, 'https://optimization.invalid');
      if (!entry.url.startsWith('/') || entry.url.startsWith('//') || entry.url.includes('\\') ||
          parsed.origin !== 'https://optimization.invalid' || !parsed.pathname.startsWith(rootPath)) {
        throw new RangeError('Search links must stay inside the Optimization Lab.');
      }
      if (ids.has(entry.id) || urls.has(entry.url)) throw new RangeError('Duplicate search identity.');
      ids.add(entry.id); urls.add(entry.url);
      var aliases = entry.aliases || [];
      if (!Array.isArray(aliases) || aliases.some(function (a) { return typeof a !== 'string'; })) throw new TypeError('Invalid aliases.');
      var keywordText = typeof entry.keywords === 'string' ? entry.keywords : '';
      var aliasValues = Object.freeze(aliases.map(normalize));
      return Object.freeze({ id: entry.id, title: entry.title, summary: entry.summary, url: entry.url, kind: entry.kind,
        titleText: normalize(entry.title), idText: normalize(entry.id), aliases: aliasValues,
        keywordText: normalize(keywordText), summaryText: normalize(entry.summary),
        text: normalize([entry.id, entry.title, entry.summary, keywordText].concat(aliases).join(' ')) });
    }));
  }
  function search(entries, query, kind) {
    kind = kind || 'all';
    if (!KINDS.includes(kind)) throw new RangeError('Choose a supported content type.');
    var q = normalize(query || ''), tokens = q ? q.split(' ') : [];
    var result = entries.filter(function (entry) {
      return (kind === 'all' || kind === entry.kind) && tokens.every(function (token) { return entry.text.includes(token); });
    }).map(function (entry) {
      var score = 0;
      if (q) {
        if (entry.titleText === q) score += 100;
        if (entry.idText === q || entry.idText === 'page ' + q) score += 95;
        if (entry.aliases.includes(q)) score += 90;
        if (entry.titleText.includes(q)) score += 40;
        tokens.forEach(function (token) {
          if (entry.titleText.includes(token)) score += 10;
          if (entry.aliases.some(function (a) { return a.includes(token); })) score += 6;
          if (entry.keywordText.includes(token)) score += 3;
          if (entry.summaryText.includes(token)) score += 1;
        });
      }
      return Object.freeze({ entry: entry, score: score });
    });
    result.sort(function (a, b) { return b.score - a.score || a.entry.title.localeCompare(b.entry.title, 'en', { sensitivity: 'base' }) || a.entry.id.localeCompare(b.entry.id); });
    return Object.freeze(result);
  }
  return Object.freeze({ KINDS: KINDS, normalize: normalize, prepareEntries: prepareEntries, search: search });
}));
