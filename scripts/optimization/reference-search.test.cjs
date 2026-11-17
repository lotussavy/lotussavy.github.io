'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const m = require('../../assets/js/optimization/search-model.js');
const root = path.resolve(__dirname, '../..');
const terms = require('../../_data/optimization_glossary.json');
const fixtures = m.prepareEntries([
  { id: 'term:slack', title: 'Slack', kind: 'term', url: '/optimization/concepts/#slack', summary: 'Unused capacity at a feasible choice.', aliases: ['unused allowance'], keywords: 'staffing time' },
  { id: 'term:tight', title: 'Tight constraint', kind: 'term', url: '/optimization/concepts/#tight', summary: 'Equality at the selected point.', aliases: ['binding constraint'], keywords: 'staffing' },
  { id: 'page:OPT-003', title: 'Feasibility and Trade-offs', kind: 'lesson', url: '/optimization/learn/foundations/feasibility-and-trade-offs/', summary: 'Check staffing and time rules.', aliases: ['OPT-003', 'OPT003'], keywords: 'slack constraint' },
  { id: 'page:LAB-B', title: 'Feasibility Explorer', kind: 'lab', url: '/optimization/labs/feasibility/', summary: 'An interactive staffing example.', aliases: ['LAB-B'], keywords: 'two dimensional' }
]);
const ids = result => result.map(hit => hit.entry.id);

test('glossary has 30 unique, alphabetized definitions with valid examples and related terms', () => {
  assert.equal(terms.length, 30);
  const all = new Set(terms.map(t => t.id)); assert.equal(all.size, terms.length);
  assert.deepEqual(terms.map(t => t.title), terms.map(t => t.title).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase(), 'en')));
  for (const t of terms) {
    assert.match(t.id, /^[a-z][a-z0-9-]*$/);
    assert.ok(t.title && t.definition && t.example && t.aliases.length);
    assert.ok(t.related.length >= 2 && new Set(t.related).size === t.related.length);
    for (const id of t.related) assert.ok(all.has(id) && id !== t.id, t.id + ' -> ' + id);
    assert.match(t.lesson, /^OPT-00[1-4]$/);
  }
});

test('every released concept chip resolves to a glossary term and every term has a published lesson', () => {
  const lessons = new Set(), conceptIds = new Set(terms.map(t => t.id));
  for (const file of fs.readdirSync(path.join(root, 'optimization/learn/foundations'))) {
    const source = fs.readFileSync(path.join(root, 'optimization/learn/foundations', file), 'utf8');
    if (!source.includes('lesson_status: published')) continue;
    lessons.add(source.match(/^lesson_id: (.+)$/m)[1]);
    const inline = source.match(/^concepts: \[(.*)\]/m);
    const block = source.match(/^concepts:\n((?:[ \t]+- [^\n]+\n)+)/m);
    assert.ok(inline || block, file + ' has concept metadata');
    const concepts = inline ? inline[1].split(',').map(v => v.trim()) : block[1].trim().split('\n').map(v => v.replace(/^\s*- /, '').trim());
    for (const id of concepts) assert.ok(conceptIds.has(id), id);
  }
  for (const term of terms) assert.ok(lessons.has(term.lesson), term.lesson);
});

test('case, punctuation, diacritics, aliases and compact lesson IDs match independently specified fixtures', () => {
  assert.equal(m.normalize('  BÍNDING—Constraint! '), 'binding constraint');
  assert.deepEqual(ids(m.search(fixtures, 'unused allowance', 'all')), ['term:slack']);
  assert.deepEqual(ids(m.search(fixtures, 'BÍNDING—CONSTRAINT', 'all')), ['term:tight']);
  assert.deepEqual(ids(m.search(fixtures, 'OPT003', 'all')), ['page:OPT-003']);
  assert.deepEqual(ids(m.search(fixtures, 'OPT-003', 'lesson')), ['page:OPT-003']);
});

test('all query words must match; type filters and empty/no-match queries remain deterministic', () => {
  assert.deepEqual(ids(m.search(fixtures, 'staffing equality', 'all')), ['term:tight']);
  assert.equal(m.search(fixtures, 'unused capacity absent', 'all').length, 0);
  assert.equal(m.search(fixtures, '', 'all').length, 4);
  assert.equal(m.search(fixtures, '!!!', 'all').length, 4);
  assert.deepEqual(ids(m.search(fixtures, '', 'lab')), ['page:LAB-B']);
  assert.equal(m.search(fixtures, 'slack', 'term')[0].entry.id, 'term:slack');
});

test('exact title and alias evidence rank above incidental summary matches', () => {
  const data = m.prepareEntries([
    { id: 'a', title: 'Resource notes', kind: 'lesson', url: '/optimization/a/', summary: 'Read about slack.', aliases: [], keywords: '' },
    { id: 'b', title: 'Slack', kind: 'term', url: '/optimization/concepts/#slack', summary: 'Unused allowance.', aliases: ['unused capacity'], keywords: '' },
    { id: 'c', title: 'Other resource', kind: 'term', url: '/optimization/concepts/#other', summary: 'Slack can be positive.', aliases: ['slack'], keywords: '' }
  ]);
  assert.deepEqual(ids(m.search(data, 'slack', 'all')), ['b', 'c', 'a']);
});

test('malformed identities, unsupported types and links outside the lab are rejected', () => {
  const valid = { id: 'term:test', title: 'Test', kind: 'term', url: '/optimization/concepts/#test', summary: 'Example.', aliases: [] };
  for (const url of ['javascript:alert(1)', '//example.com/', '/research/', '/optimization/../research/', '/optimization/\\evil']) {
    assert.throws(() => m.prepareEntries([{ ...valid, url }]));
  }
  assert.throws(() => m.prepareEntries([valid, valid]));
  assert.throws(() => m.prepareEntries([{ ...valid, kind: 'draft' }]));
  assert.throws(() => m.prepareEntries([{ ...valid, title: '' }]));
  assert.throws(() => m.search(fixtures, 'slack', 'unknown'));
  assert.equal(m.search(fixtures, '<img src=x onerror=alert(1)>', 'all').length, 0);
});

test('prepared entries and results are immutable and searching does not modify source data', () => {
  const before = JSON.stringify(fixtures), result = m.search(fixtures, 'staffing', 'all');
  assert.equal(JSON.stringify(fixtures), before);
  assert.throws(() => { result.push({}); }, TypeError);
  assert.throws(() => { result[0].entry.url = '/bad/'; }, TypeError);
  assert.throws(() => { fixtures[0].aliases.push('changed'); }, TypeError);
});
