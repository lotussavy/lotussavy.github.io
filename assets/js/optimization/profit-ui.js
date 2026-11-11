/* LAB-A UI: presentation only; every numerical value comes from OptimizationProfitModel. */
(function (root) {
  'use strict';
  var SVG_NS = 'http://www.w3.org/2000/svg';
  function svgEl(documentRef, tag, attrs, textValue) {
    var node = documentRef.createElementNS(SVG_NS, tag);
    Object.keys(attrs || {}).forEach(function (key) { node.setAttribute(key, String(attrs[key])); });
    if (textValue !== undefined) node.textContent = String(textValue);
    return node;
  }
  function money(value) { return '$' + String(value); }
  function renderChart(container, model, selected) {
    var doc = container.ownerDocument;
    var plot = container.querySelector('[data-ol-chart-content]');
    if (!plot) throw new Error('Chart container missing');
    var rows = model.enumerateFeasible();
    var values = rows.map(function (row) { return row.profit; });
    var minProfit = Math.min.apply(null, values) - 10;
    var maxProfit = Math.max.apply(null, values) + 10;
    var width = 640, height = 280, left = 62, right = 22, top = 24, bottom = 52;
    var x = function (n) { return left + (n / 12) * (width - left - right); };
    var y = function (profit) { return top + (maxProfit - profit) / (maxProfit - minProfit) * (height - top - bottom); };
    var newNodes = [];
    newNodes.push(svgEl(doc, 'line', { x1: left, y1: top, x2: left, y2: height - bottom, stroke: '#718d99' }));
    newNodes.push(svgEl(doc, 'line', { x1: left, y1: height - bottom, x2: width - right, y2: height - bottom, stroke: '#718d99' }));
    [0, 100, 200].forEach(function (tick) {
      var yPos = y(tick);
      newNodes.push(svgEl(doc, 'line', { x1: left, y1: yPos, x2: width - right, y2: yPos, stroke: '#dce7eb', 'stroke-dasharray': '4 4' }));
      newNodes.push(svgEl(doc, 'text', { x: left - 9, y: yPos + 4, 'text-anchor': 'end', fill: '#3f6171', 'font-size': 14 }, tick));
    });
    [0, 2, 4, 6, 8, 10, 12].forEach(function (tick) {
      newNodes.push(svgEl(doc, 'text', { x: x(tick), y: height - bottom + 24, 'text-anchor': 'middle', fill: '#3f6171', 'font-size': 14 }, tick));
    });
    newNodes.push(svgEl(doc, 'text', { x: 14, y: 17, fill: '#3f6171', 'font-size': 13 }, 'Profit ($)'));
    newNodes.push(svgEl(doc, 'text', { x: width / 2, y: height - 4, 'text-anchor': 'middle', fill: '#3f6171', 'font-size': 13 }, 'Number of vehicles'));
    newNodes.push(svgEl(doc, 'polyline', {
      points: rows.map(function (row) { return x(row.fleet) + ',' + y(row.profit); }).join(' '),
      fill: 'none', stroke: '#087f83', 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round'
    }));
    rows.forEach(function (row) {
      newNodes.push(svgEl(doc, 'circle', {
        cx: x(row.fleet), cy: y(row.profit), r: row.fleet === selected.fleet ? 8 : 4,
        fill: row.fleet === selected.fleet ? '#d58e20' : '#087f83',
        stroke: row.fleet === selected.fleet ? '#fff' : 'none',
        'stroke-width': 2,
        'data-fleet': row.fleet
      }));
    });
    plot.replaceChildren.apply(plot, newNodes);
    var desc = container.querySelector('#ol-profit-chart-description');
    if (desc) desc.textContent = 'All 13 feasible fleet choices are plotted. Selected fleet ' + selected.fleet + ' has profit ' + money(selected.profit) + '.';
  }
  function explain(selected, optimum) {
    var message = 'At ' + selected.fleet + ' vehicles, revenue is ' + money(selected.revenue) + ', cost is ' + money(selected.cost) + ', and profit is ' + money(selected.profit) + '. ';
    if (selected.fleet === optimum.optimalFleet) return message + 'This is the unique global maximum among 13 feasible integer choices, certified by exhaustive enumeration.';
    if (selected.profit < 0) return message + 'This choice produces a loss under the illustrative assumptions. Try a different fleet size.';
    return message + 'This is feasible but not optimal. Explore further or select Find optimum.';
  }
  function setup(container, model) {
    if (!container || !model) return false;
    var slider = container.querySelector('[data-ol-range]');
    var optimumButton = container.querySelector('[data-ol-optimize]');
    var resetButton = container.querySelector('[data-ol-reset]');
    if (!slider || !optimumButton || !resetButton) throw new Error('Incomplete LAB-A controls');
    var optimum = model.solveExact();
    function update(n) {
      var row = model.evaluateFleet(n);
      slider.value = String(row.fleet);
      container.querySelector('#ol-profit-fleet-value').textContent = String(row.fleet);
      container.querySelector('[data-ol-revenue]').textContent = money(row.revenue);
      container.querySelector('[data-ol-cost]').textContent = money(row.cost);
      container.querySelector('[data-ol-profit]').textContent = money(row.profit);
      container.querySelector('[data-ol-explanation]').textContent = explain(row, optimum);
      renderChart(container, model, row);
      return row;
    }
    slider.addEventListener('input', function () {
      try {
        var numeric = Number(slider.value);
        if (!Number.isInteger(numeric)) throw new TypeError('Fleet input must be a whole number');
        update(numeric);
      } catch (error) {
        var warning = container.querySelector('[data-ol-error]');
        warning.hidden = false;
        warning.textContent = 'Invalid fleet selection. Please choose an integer from 0 through 12.';
      }
    });
    optimumButton.addEventListener('click', function () { update(optimum.optimalFleet); });
    resetButton.addEventListener('click', function () {
      container.querySelector('[data-ol-error]').hidden = true;
      update(4);
    });
    update(4);
    return true;
  }
  function initialize() {
    var model = root.OptimizationProfitModel;
    var instances = root.document.querySelectorAll('[data-ol-profit-lab]');
    Array.prototype.forEach.call(instances, function (container) {
      try {
        if (!model) throw new Error('Profit model unavailable');
        setup(container, model);
      } catch (error) {
        var errorEl = container.querySelector('[data-ol-error]');
        if (errorEl) { errorEl.hidden = false; errorEl.textContent = 'The interactive model could not load. Please use the written formulation above.'; }
      }
    });
  }
  if (typeof module === 'object' && module.exports) module.exports = { setup: setup, renderChart: renderChart, explain: explain };
  if (root.document) {
    if (root.document.readyState === 'loading') root.document.addEventListener('DOMContentLoaded', initialize);
    else initialize();
  }
}(typeof globalThis !== 'undefined' ? globalThis : this));
