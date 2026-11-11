'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const model = require('../../assets/js/optimization/profit-model.js');
const ui = require('../../assets/js/optimization/profit-ui.js');

class FakeElement {
  constructor(tag='div', doc=null) {
    this.tagName = tag;
    this.ownerDocument = doc;
    this.attrs = {};
    this.children = [];
    this.textContent = '';
    this.value = '';
    this.hidden = false;
    this.events = {};
  }
  setAttribute(name, value) { this.attrs[name] = String(value); }
  addEventListener(name, cb) { (this.events[name] ||= []).push(cb); }
  dispatch(name) { for (const cb of this.events[name] || []) cb(); }
  replaceChildren(...nodes) { this.children = nodes; }
  append(...nodes) { this.children.push(...nodes); }
}

function fixture() {
  const doc = { createElementNS: (_ns, tag) => new FakeElement(tag, doc) };
  const selectors = [
    '[data-ol-range]', '[data-ol-optimize]', '[data-ol-reset]',
    '#ol-profit-fleet-value', '[data-ol-revenue]', '[data-ol-cost]',
    '[data-ol-profit]', '[data-ol-explanation]', '[data-ol-chart-content]',
    '#ol-profit-chart-description', '[data-ol-error]'
  ];
  const nodes = Object.fromEntries(selectors.map(s => [s, new FakeElement('div', doc)]));
  nodes['[data-ol-range]'].value = '4';
  nodes['[data-ol-error]'].hidden = true;
  const container = {
    ownerDocument: doc,
    querySelector(selector) { return nodes[selector] || null; }
  };
  return { container, nodes };
}
const find = (nodes, query) => nodes[query];

test('initial state and 13 chart data points are derived from verified model', () => {
  const { container, nodes } = fixture();
  assert.equal(ui.setup(container, model), true);
  assert.equal(find(nodes, '#ol-profit-fleet-value').textContent, '4');
  assert.equal(find(nodes, '[data-ol-revenue]').textContent, '$320');
  assert.equal(find(nodes, '[data-ol-cost]').textContent, '$180');
  assert.equal(find(nodes, '[data-ol-profit]').textContent, '$140');
  const circles = nodes['[data-ol-chart-content]'].children.filter(c => c.tagName === 'circle');
  assert.equal(circles.length, 13);
  assert.deepEqual(circles.map(c => Number(c.attrs['data-fleet'])), Array.from({ length: 13 }, (_, i) => i));
  assert.equal(circles.filter(c => c.attrs.r === '8').length, 1);
  assert.equal(find(nodes, '[data-ol-error]').hidden, true);
});

test('every valid slider position synchronizes selected fleet, revenue, cost, profit, and chart highlight', () => {
  const { container, nodes } = fixture();
  ui.setup(container, model);
  const slider = find(nodes, '[data-ol-range]');
  for (const row of model.enumerateFeasible()) {
    slider.value = String(row.fleet);
    slider.dispatch('input');
    assert.equal(find(nodes, '#ol-profit-fleet-value').textContent, String(row.fleet));
    assert.equal(find(nodes, '[data-ol-revenue]').textContent, '$' + row.revenue);
    assert.equal(find(nodes, '[data-ol-cost]').textContent, '$' + row.cost);
    assert.equal(find(nodes, '[data-ol-profit]').textContent, '$' + row.profit);
    const circles = nodes['[data-ol-chart-content]'].children.filter(c => c.tagName === 'circle');
    assert.equal(circles.find(c => c.attrs.r === '8').attrs['data-fleet'], String(row.fleet));
    assert.match(find(nodes, '#ol-profit-chart-description').textContent, new RegExp('Selected fleet ' + row.fleet + ' has profit \\$' + row.profit + '\\.'));
  }
});

test('Find optimum uses exact solution and Reset restores baseline', () => {
  const { container, nodes } = fixture();
  ui.setup(container, model);
  nodes['[data-ol-optimize]'].dispatch('click');
  assert.equal(nodes['[data-ol-range]'].value, '8');
  assert.equal(nodes['[data-ol-profit]'].textContent, '$220');
  assert.match(nodes['[data-ol-explanation]'].textContent, /unique global maximum/);
  nodes['[data-ol-reset]'].dispatch('click');
  assert.equal(nodes['[data-ol-range]'].value, '4');
  assert.equal(nodes['[data-ol-profit]'].textContent, '$140');
});

test('invalid UI values show warning without altering last valid computed results', () => {
  const { container, nodes } = fixture();
  ui.setup(container, model);
  nodes['[data-ol-range]'].value = '13';
  nodes['[data-ol-range]'].dispatch('input');
  assert.equal(nodes['[data-ol-error]'].hidden, false);
  assert.equal(nodes['[data-ol-profit]'].textContent, '$140');
  nodes['[data-ol-range]'].value = '7';
  nodes['[data-ol-range]'].dispatch('input');
  assert.equal(nodes['[data-ol-error]'].hidden, true);
  assert.equal(nodes['[data-ol-profit]'].textContent, '$215');
});

test('missing required controls fail predictably', () => {
  assert.equal(ui.setup(null, model), false);
  const { container, nodes } = fixture();
  delete nodes['[data-ol-reset]'];
  assert.throws(() => ui.setup(container, model), /Incomplete LAB-A controls/);
});
