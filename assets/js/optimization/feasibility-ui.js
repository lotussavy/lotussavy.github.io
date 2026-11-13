/* Render only the verified LAB-B model outputs. */
(function () {
  'use strict';
  var model = window.OptimizationFeasibility;
  document.querySelectorAll('[data-feasibility]').forEach(function (root) {
    if (!model) return;
    function get(key) { return root.querySelector('[data-fe-' + key + ']'); }
    function fmt(n) { return String(Number(n.toFixed(6))); }
    function text(key, value) { get(key).textContent = value; }
    function svg(tag, attrs) {
      var node = document.createElementNS('http://www.w3.org/2000/svg', tag);
      Object.keys(attrs).forEach(function (key) { node.setAttribute(key, attrs[key]); });
      return node;
    }
    function px(p) { return [68 + 43.2 * p[0], 456 - 43.2 * p[1]]; }
    function points(list) { return list.map(function (p) { return px(p).join(','); }).join(' '); }
    function cells(parent, entries) {
      var tr = document.createElement('tr');
      entries.forEach(function (value, i) {
        var cell = document.createElement(i === 0 ? 'th' : 'td');
        if (i === 0) cell.scope = 'row';
        cell.textContent = value; tr.append(cell);
      }); parent.append(tr);
    }
    function read() {
      var s = {};
      ['time', 'staff', 'minimum'].forEach(function (key) {
        s[key] = Number(get(key).value); s[key + 'On'] = get(key + '-on').checked;
      });
      return s;
    }
    function render() {
      var s = read(), x = Number(get('x').value), y = Number(get('y').value);
      var region = model.analyze(s), selected = model.evaluatePoint(x, y, s);
      ['x', 'y', 'time', 'staff', 'minimum'].forEach(function (key) { text(key + '-value', get(key).value); });
      ['time', 'staff', 'minimum'].forEach(function (key) { get(key).disabled = !s[key + 'On']; });
      var coordinate = '(' + fmt(x) + ', ' + fmt(y) + ')';
      text('point', coordinate); text('selected', selected.status); text('region', region.status);
      var shape = get('shape'); shape.replaceChildren();
      if (region.dimension === 2) shape.append(svg('polygon', { points: points(region.vertices), fill: '#dff3e9', stroke: '#165e47', 'stroke-width': 3 }));
      if (region.dimension === 1) shape.append(svg('polyline', { points: points(region.vertices), fill: 'none', stroke: '#165e47', 'stroke-width': 7 }));
      if (region.dimension === 0) {
        var single = px(region.vertices[0]);
        shape.append(svg('circle', { cx: single[0], cy: single[1], r: 9, fill: '#165e47' }));
      }
      if (region.dimension === -1) {
        var empty = svg('text', { x: 284, y: 240, 'text-anchor': 'middle', 'font-weight': 'bold' });
        empty.textContent = 'No feasible points'; shape.append(empty);
      }
      get('lines').replaceChildren(); get('legend').replaceChildren();
      var styles = { time: ['#0c667a', '', 'Solid blue'], staff: ['#66479a', '8 5', 'Dashed purple'], minimum: ['#815519', '2 5', 'Dotted brown'] };
      region.rules.forEach(function (rule) {
        var style = styles[rule.id], li = document.createElement('li');
        li.textContent = style[2] + ': ' + rule.label.toLowerCase() + ' boundary (' + (rule.enabled ? 'on' : 'off') + ')';
        get('legend').append(li);
        if (rule.enabled && rule.boundary.length >= 2) get('lines').append(svg('polyline', { points: points(rule.boundary), fill: 'none', stroke: style[0], 'stroke-width': 2.5, 'stroke-dasharray': style[1] }));
      });
      var pos = px([x, y]), marker = get('marker'); marker.replaceChildren();
      marker.append(svg('circle', { cx: pos[0], cy: pos[1], r: 7, fill: '#e89b3d', stroke: '#392b17', 'stroke-width': 2 }));
      var label = svg('text', { x: x > 7 ? pos[0] - 12 : pos[0] + 12, y: y > 9 ? pos[1] + 23 : pos[1] - 13, 'text-anchor': x > 7 ? 'end' : 'start' });
      label.textContent = (selected.feasible ? '✓ ' : '× ') + coordinate; marker.append(label);
      get('checks').replaceChildren();
      selected.checks.forEach(function (check) {
        var substitution = check.id === 'domain' ? 'x = ' + fmt(x) + ', y = ' + fmt(y) + '; each in [0, 10]' : fmt(check.lhs) + ' ' + check.sense + ' ' + fmt(check.rhs);
        var amount = Math.abs(check.slack);
        var units = check.id === 'staff' ? (amount === 1 ? ' staff-hour' : ' staff-hours') : (amount === 1 ? ' hour' : ' hours');
        var result = !check.enabled ? 'Off; no check applied' : !check.feasible ? 'Fail; violation ' + fmt(-check.slack) + units : check.tight ? 'Pass; tight (slack 0)' : check.id === 'domain' ? 'Pass; inside domain' : 'Pass; slack ' + fmt(check.slack) + units;
        cells(get('checks'), [check.label, check.enabled ? substitution : 'Excluded', result]);
      });
      get('vertices').replaceChildren();
      region.vertices.forEach(function (p, i) { cells(get('vertices'), [String(i + 1), fmt(p[0]), fmt(p[1])]); });
      if (!region.vertices.length) cells(get('vertices'), ['None', '—', '—']);
      var notes = { '-1': 'No point satisfies every active rule. A different candidate cannot repair an empty model.', 0: 'Exactly one feasible point; zero area does not mean empty.', 1: 'Every point along the segment between these endpoints is feasible; the endpoints are included.', 2: 'The polygon includes its edges and interior. All real points inside are feasible.' };
      text('vertices-note', notes[region.dimension]);
      text('explanation', selected.feasible ? 'This point satisfies every active rule. Tight means equality holds; slack is the remaining allowance. Feasibility alone does not rank feasible choices.' : 'This candidate fails at least one active rule. Read the failed checks; a candidate can be infeasible even when the full set is nonempty.');
      var announcement = 'Selected ' + coordinate + ': ' + selected.status.toLowerCase() + '. The full feasible set is ' + region.status.toLowerCase() + '.';
      get('chart').querySelector('desc').textContent = announcement + ' ' + notes[region.dimension] + ' The rule checks and coordinate table provide the numerical values.';
      text('status', announcement);
    }
    function preset(kind) {
      var s = Object.assign({}, model.DEFAULTS), point = [3, 4];
      if (kind === 'violation') point = [4, 4];
      if (kind === 'tradeoff') point = [4, 2];
      if (kind === 'empty') { s.minimumOn = true; s.minimum = 9; }
      if (kind === 'line') { s.minimumOn = true; s.minimum = 8; point = [1, 7]; }
      if (kind === 'point') { s.time = 0; point = [0, 0]; }
      ['time', 'staff', 'minimum'].forEach(function (key) { get(key).value = s[key]; get(key + '-on').checked = s[key + 'On']; });
      get('x').value = point[0]; get('y').value = point[1]; render();
    }
    root.querySelectorAll('input').forEach(function (input) { input.addEventListener('input', render); });
    root.querySelectorAll('[data-fe-preset]').forEach(function (button) { button.addEventListener('click', function () { preset(button.dataset.fePreset); }); });
    get('reset').addEventListener('click', function () { preset('reset'); });
    get('controls').disabled = false;
    render();
  });
}());
