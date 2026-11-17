/* OPT-004: keep comparison evidence separate from analytic global verification. */
(function () {
  'use strict';
  var model = window.OptimizationOptimality;
  document.querySelectorAll('[data-optimality]').forEach(function (root) {
    if (!model) return;
    function get(key) { return root.querySelector('[data-oc-' + key + ']'); }
    function text(key, value) { get(key).textContent = value; }
    function fmt(n) { return String(Number(n.toFixed(6))); }
    function list(points) { return points.map(fmt).join(' and '); }
    function svg(tag, attrs) {
      var node = document.createElementNS('http://www.w3.org/2000/svg', tag);
      Object.keys(attrs).forEach(function (key) { node.setAttribute(key, attrs[key]); });
      return node;
    }
    function position(x, value) { return [56 + 52.8 * x, 336 - 24 * (value + 2)]; }
    var recorded = model.DEFAULTS.recorded.slice(), verified = false;
    function render() {
      var cap = Number(get('cap').value), x = Number(get('candidate').value);
      var selected = model.evaluate(x, cap), record = model.compare(recorded, cap);
      text('candidate-value', fmt(x)); text('cap-value', fmt(cap));
      text('score', fmt(selected.score) + ' at x = ' + fmt(x));
      text('feasible', selected.feasible ? 'Feasible: ' + fmt(x) + ' ≤ ' + cap : 'Infeasible: ' + fmt(x) + ' > ' + cap);
      var bestText = record.bestValue === null ? 'None recorded' : fmt(record.bestValue) + ' at x = ' + list(record.bestPoints);
      text('best', bestText);
      get('allowed').setAttribute('width', 52.8 * cap);
      get('limit').setAttribute('d', 'M' + (56 + 52.8 * cap) + ' 24V336');
      var curve = [];
      for (var i = 0; i <= 300; i++) { var at = i / 30; curve.push(position(at, model.score(at)).join(',')); }
      get('curve').replaceChildren(svg('polyline', { points: curve.join(' '), fill: 'none', stroke: '#0c667a', 'stroke-width': 3 }));
      get('record-marks').replaceChildren();
      record.rows.forEach(function (row) {
        var p = position(row.x, row.score);
        get('record-marks').append(svg('circle', { cx: p[0], cy: p[1], r: 5, fill: '#fff', stroke: row.feasible ? '#0c667a' : '#8a3029', 'stroke-width': 2 }));
      });
      var selectedPoint = position(x, selected.score);
      get('selected').replaceChildren(svg('circle', { cx: selectedPoint[0], cy: selectedPoint[1], r: 7, fill: '#e89b3d', stroke: '#392b17', 'stroke-width': 2 }));
      var label = svg('text', { x: selectedPoint[0] + (x > 8 ? -12 : 12), y: selectedPoint[1] - 12, 'text-anchor': x > 8 ? 'end' : 'start' });
      label.textContent = (selected.feasible ? '✓ ' : '× ') + 'x = ' + fmt(x); get('selected').append(label);
      get('rows').replaceChildren();
      record.rows.forEach(function (row) {
        var tr = document.createElement('tr');
        [fmt(row.x), fmt(row.score), row.feasible ? 'Yes' : 'No; excluded from ranking'].forEach(function (value, i) {
          var cell = document.createElement(i ? 'td' : 'th'); if (!i) cell.scope = 'row'; cell.textContent = value; tr.append(cell);
        }); get('rows').append(tr);
      });
      if (!record.rows.length) {
        var tr = document.createElement('tr'), cell = document.createElement('td'); cell.colSpan = 3; cell.textContent = 'No candidates recorded. The feasible interval still exists.'; tr.append(cell); get('rows').append(tr);
      }
      get('proof').hidden = !verified; get('classification').hidden = !verified;
      get('global-marks').replaceChildren();
      var evidence;
      if (verified) {
        var certificate = model.certify(cap), classification = model.classify(x, cap);
        evidence = 'Verified global maximum: ' + fmt(certificate.value) + ' at x = ' + list(certificate.optimizers) + '.';
        text('verdict', evidence);
        text('proof', 'On [0, ' + cap + '], branch A is at most ' + fmt(certificate.branchA.value) + ' (at x = ' + fmt(certificate.branchA.point) + '), and branch B is at most ' + fmt(certificate.branchB.value) + ' (at x = ' + fmt(certificate.branchB.point) + '). Their larger bound is ' + fmt(certificate.value) + ', attained at every listed global optimizer. This covers all real feasible x, not just slider steps.');
        text('classification', 'Selected x = ' + fmt(x) + ': ' + classification.status + '.');
        certificate.optimizers.forEach(function (at) {
          var p = position(at, certificate.value);
          get('global-marks').append(svg('polygon', { points: [[p[0], p[1] - 11], [p[0] + 11, p[1]], [p[0], p[1] + 11], [p[0] - 11, p[1]]].map(function (q) { return q.join(','); }).join(' '), fill: '#fff', stroke: '#66479a', 'stroke-width': 3 }));
        });
      } else {
        evidence = 'Global verification has not been requested for this limit.';
        text('verdict', 'The record establishes a best recorded score, not a global certificate. Select Verify entire model to compare exact bounds for both branches.');
      }
      var status = 'Candidate ' + fmt(x) + ' is ' + (selected.feasible ? 'feasible' : 'infeasible') + ' with score ' + fmt(selected.score) + '. Best recorded feasible score: ' + bestText + '. ' + evidence;
      text('status', status);
      get('chart').querySelector('desc').textContent = status + ' The feasible interval is [0, ' + cap + ']. Read the comparison table and certificate for numerical alternatives to the plotted curve.';
    }
    function preset(kind) {
      var cap = 10, x = 2; recorded = [0, 2, 4]; verified = false;
      if (kind === 'better') { x = 8; recorded.push(8); }
      if (kind === 'ties') { cap = 6; x = 6; recorded.push(6); }
      if (kind === 'outside') { cap = 5; x = 8; recorded.push(8); }
      if (kind === 'single') { cap = 0; x = 0; }
      get('cap').value = cap; get('candidate').value = x; render();
    }
    get('candidate').addEventListener('input', render);
    get('cap').addEventListener('input', function () { verified = false; render(); });
    get('add').addEventListener('click', function () { recorded.push(Number(get('candidate').value)); render(); });
    get('clear').addEventListener('click', function () { recorded = []; render(); });
    get('verify').addEventListener('click', function () { verified = true; render(); });
    get('reset').addEventListener('click', function () { preset('local'); });
    root.querySelectorAll('[data-oc-preset]').forEach(function (button) { button.addEventListener('click', function () { preset(button.dataset.ocPreset); }); });
    get('controls').disabled = false; render();
  });
}());
