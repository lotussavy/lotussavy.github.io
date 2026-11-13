/* Presentation only: every financial/feasibility value comes from the model. */
(function (root) {
  'use strict';
  function money(value) { return (value < 0 ? '−$' : '$') + Math.abs(value); }
  function setup(container, model) {
    if (!container || !model) throw new Error('Model builder is unavailable.');
    var get = function (name) { return container.querySelector('[data-mb-' + name + ']'); };
    var objective = get('objective'), budget = get('budget'), available = get('available'), candidate = get('candidate');
    var solveButton = get('solve'), error = get('error');
    var revealed = false;
    var current = model.validate(model.DEFAULTS);
    function readSettings() {
      if (budget.value.trim() === '') throw new Error('Enter a budget before solving.');
      return model.validate({ objective: objective.value, budget: Number(budget.value), available: Number(available.value) });
    }
    function render() {
      var solved = model.solve(current);
      var selected = model.evaluateCandidate(Number(candidate.value), current);
      var goal = model.OBJECTIVES[current.objective];
      get('candidate-value').textContent = String(selected.fleet);
      get('available-value').textContent = String(current.available);
      get('goal').textContent = goal.sense.charAt(0).toUpperCase() + goal.sense.slice(1) + ' ' + goal.label + ': ' + goal.formula;
      get('availability-rule').textContent = 'n ≤ ' + current.available + ' vehicles';
      get('budget-rule').textContent = '20n + 100 ≤ $' + current.budget + ' per model period';
      get('count').textContent = solved.feasibleCount + ' of 13';
      get('value-label').textContent = 'Selected ' + goal.label;
      get('value').textContent = money(selected.objectiveValue);
      get('feasibility').textContent = selected.feasible ? 'Feasible' : 'Infeasible';
      get('selected').textContent = 'Selected n = ' + selected.fleet;
      get('availability-check').textContent = selected.fleet + ' ≤ ' + current.available + ': ' +
        (selected.fleet <= current.available ? 'passes' : 'fails by ' + (selected.fleet - current.available) + ' vehicles');
      get('budget-check').textContent = money(selected.cost) + ' ≤ ' + money(current.budget) + ': ' +
        (selected.cost <= current.budget ? 'passes' : 'fails by ' + money(selected.cost - current.budget));
      var chips = [], tableRows = [];
      solved.rows.forEach(function (row) {
        var chip = container.ownerDocument.createElement('li');
        chip.textContent = row.fleet + (row.feasible ? ' ✓' : ' ×');
        chip.setAttribute('data-feasible', String(row.feasible));
        chip.setAttribute('data-selected', String(row.fleet === selected.fleet));
        chip.setAttribute('aria-label', 'Fleet ' + row.fleet + '; ' + (row.feasible ? 'feasible' : 'infeasible') + (row.fleet === selected.fleet ? '; selected' : ''));
        chips.push(chip);
        var tr = container.ownerDocument.createElement('tr');
        [row.fleet, money(row.objectiveValue), row.feasible ? 'Yes' : 'No'].forEach(function (value, i) {
          var cell = container.ownerDocument.createElement(i === 0 ? 'th' : 'td');
          if (i === 0) cell.setAttribute('scope', 'row');
          cell.textContent = String(value); tr.appendChild(cell);
        });
        tableRows.push(tr);
      });
      get('choices').replaceChildren.apply(get('choices'), chips);
      get('rows').replaceChildren.apply(get('rows'), tableRows);
      get('table-value').textContent = goal.label.charAt(0).toUpperCase() + goal.label.slice(1) + ' ($)';
      var bestMessage = 'Predict the best permitted choice, then select Solve this model.';
      if (revealed && solved.status === 'infeasible') {
        bestMessage = 'No feasible fleet. Even n = 0 costs $100, above the $' + current.budget + ' budget. No optimizer or objective value exists for these settings.';
      } else if (revealed) {
        bestMessage = 'Exact best: n = ' + solved.optimalFleet + '; ' + goal.label + ' = ' + money(solved.objectiveValue) +
          '. All 13 domain choices were checked; ' + solved.feasibleCount + ' satisfy both constraints.';
        if (current.objective === 'cost') bestMessage += ' Zero vehicles wins because this model has no minimum-service requirement.';
        if (current.objective === 'profit' && solved.objectiveValue < 0) bestMessage += ' The best feasible profit is still a loss; optimal does not mean profitable.';
      }
      get('best').textContent = bestMessage;
      get('status').textContent = 'Fleet ' + selected.fleet + ' is ' + (selected.feasible ? 'feasible' : 'infeasible') +
        '; selected ' + goal.label + ' is ' + money(selected.objectiveValue) + '. ' +
        (revealed ? bestMessage : 'There are ' + solved.feasibleCount + ' feasible choices.');
    }
    function updateSettings() {
      try {
        current = readSettings(); revealed = false; error.hidden = true; solveButton.disabled = false; render();
      } catch (e) {
        error.hidden = false; error.textContent = e.message + ' Results still show the last valid settings.'; solveButton.disabled = true;
      }
    }
    objective.addEventListener('change', updateSettings);
    budget.addEventListener('input', updateSettings);
    available.addEventListener('input', updateSettings);
    candidate.addEventListener('input', function () { render(); });
    solveButton.addEventListener('click', function () {
      revealed = true; var result = model.solve(current);
      if (result.status === 'optimal') candidate.value = String(result.optimalFleet);
      render();
    });
    get('reset').addEventListener('click', function () {
      objective.value = model.DEFAULTS.objective; budget.value = String(model.DEFAULTS.budget);
      available.value = String(model.DEFAULTS.available); candidate.value = '4'; updateSettings();
    });
    render(); get('controls').disabled = false;
  }
  function initialize() {
    root.document.querySelectorAll('[data-model-builder]').forEach(function (container) {
      try { setup(container, root.OptimizationModelBuilder); }
      catch (e) {
        var error = container.querySelector('[data-mb-error]');
        error.hidden = false; error.textContent = 'The controls could not load. Use the default model and table below.';
      }
    });
  }
  if (typeof module === 'object' && module.exports) module.exports = { setup: setup };
  if (root.document) {
    if (root.document.readyState === 'loading') root.document.addEventListener('DOMContentLoaded', initialize);
    else initialize();
  }
}(typeof globalThis !== 'undefined' ? globalThis : this));
