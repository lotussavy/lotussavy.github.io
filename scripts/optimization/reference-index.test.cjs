'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const m = require('../../assets/js/optimization/search-model.js');
const terms = require('../../_data/optimization_glossary.json');
const site = path.resolve(__dirname, '../../_site');
const data = JSON.parse(fs.readFileSync(path.join(site, 'optimization/search-index.json'), 'utf8'));
const index = m.prepareEntries(data.entries);

test('generated catalog contains exactly the current glossary and every released lesson/activity', () => {
  assert.equal(data.version, 1); assert.equal(index.length, 38);
  assert.equal(index.filter(e => e.kind === 'term').length, 30);
  assert.equal(index.filter(e => e.kind === 'lesson').length, 4);
  assert.equal(index.filter(e => e.kind === 'lab').length, 4);
  for (const entry of index) {
    assert.ok(!entry.url.includes('template-preview') && !entry.url.includes('profit-preview'));
    const [route, anchor] = entry.url.split('#');
    const file = path.join(site, route, 'index.html');
    assert.ok(fs.existsSync(file), route);
    if (anchor) assert.ok(fs.readFileSync(file, 'utf8').includes('id="' + anchor + '"'), anchor);
  }
});

test('every glossary definition is consistent between HTML-source data and the generated search catalog', () => {
  for (const term of terms) {
    const entry = data.entries.find(e => e.id === 'term:' + term.id);
    assert.equal(entry.title, term.title); assert.equal(entry.summary, term.definition);
    assert.deepEqual(entry.aliases, term.aliases);
    assert.equal(m.search(index, term.title, 'term')[0].entry.id, 'term:' + term.id);
  }
});

test('published index provides expected aliases, lesson IDs and scoped results', () => {
  for (const [query, id] of [['incumbent', 'term:best-known-solution'], ['binding constraint', 'term:tight-constraint'], ['tradeoff', 'term:trade-off'], ['OPT003', 'page:OPT-003'], ['OPT-003', 'page:OPT-003']]) {
    assert.equal(m.search(index, query, 'all')[0].entry.id, id, query);
  }
  assert.equal(m.search(index, 'budget', 'lesson')[0].entry.id, 'page:OPT-002');
  assert.ok(m.search(index, 'budget', 'lab').some(hit => hit.entry.id === 'page:OPT-002-ACTIVITY'));
  assert.equal(m.search(index, 'unreleasedquizzicalterm', 'all').length, 0);
});
