'use strict';
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const fs = require('node:fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const base = process.env.OPTIMIZATION_SITE_URL || 'http://127.0.0.1:8765';
  const errors = [], report = [];
  try {
    const page = await browser.newPage();
    page.on('pageerror', e => errors.push(e.message));
    for (const path of ['/optimization/labs/feasibility/', '/optimization/learn/foundations/feasibility-and-trade-offs/']) {
      await page.goto(base + path, { waitUntil: 'domcontentloaded' });
      const lab = page.locator('[data-feasibility]');
      await lab.locator('[data-fe-x]').waitFor();
      assert.equal(await lab.locator('[data-fe-x]').isEnabled(), true);
      assert.equal(await lab.locator('[data-fe-selected]').innerText(), 'Feasible boundary');
      assert.equal(await lab.locator('[data-fe-region]').innerText(), 'Nonempty area');
      assert.equal(await lab.locator('[data-fe-vertices] tr').count(), 4);
      assert.match(await lab.locator('[data-fe-checks]').innerText(), /slack 1 hour/);
      await lab.getByRole('button', { name: 'Violates staffing', exact: true }).click();
      assert.equal(await lab.locator('[data-fe-selected]').innerText(), 'Infeasible');
      assert.match(await lab.locator('[data-fe-checks]').innerText(), /violation 2 staff-hours/);
      await lab.getByLabel('Apply staffing limit:').uncheck();
      assert.equal(await lab.locator('[data-fe-selected]').innerText(), 'Feasible boundary');
      assert.equal(await lab.locator('[data-fe-staff]').isDisabled(), true);
      assert.match(await lab.locator('[data-fe-checks]').innerText(), /Off; no check applied/);
      await lab.getByLabel('Apply staffing limit:').check();
      assert.equal(await lab.locator('[data-fe-selected]').innerText(), 'Infeasible');
      const examples = [['Trade-off', 'Nonempty area', 4, '(4, 2)'], ['Empty set', 'Empty feasible set', 1, '(3, 4)'],
        ['Line segment', 'Nonempty line segment', 2, '(1, 7)'], ['Single point', 'Single feasible point', 1, '(0, 0)']];
      for (const [name, status, rows, point] of examples) {
        await lab.getByRole('button', { name, exact: true }).click();
        assert.equal(await lab.locator('[data-fe-region]').innerText(), status);
        assert.equal(await lab.locator('[data-fe-point]').innerText(), point);
        assert.equal(await lab.locator('[data-fe-vertices] tr').count(), rows);
        assert.match(await lab.locator('[data-fe-chart] desc').textContent(), new RegExp(status.toLowerCase()));
        if (name === 'Line segment') assert.equal(await lab.locator('[data-fe-shape] polyline').count(), 1);
        if (name === 'Single point') assert.equal(await lab.locator('[data-fe-shape] circle').count(), 1);
      }
      await lab.getByRole('button', { name: 'Reset explorer' }).click();
      await lab.locator('[data-fe-x]').focus(); await page.keyboard.press('ArrowRight');
      assert.equal(await lab.locator('[data-fe-x]').inputValue(), '3.5');
      assert.equal(await lab.locator('[data-fe-selected]').innerText(), 'Infeasible');
      await lab.getByRole('button', { name: 'Reset explorer' }).click();
      assert.equal(await lab.locator('[data-fe-point]').innerText(), '(3, 4)');
      assert.equal(await lab.locator('[data-fe-minimum-on]').isChecked(), false);
      const consistency = await lab.evaluate(root => {
        const model = window.OptimizationFeasibility;
        const r = model.analyze(model.DEFAULTS);
        return { actual: [...root.querySelectorAll('[data-fe-vertices] tr')].map(row => [...row.querySelectorAll('td')].map(td => Number(td.textContent)).join(',')).sort(),
          expected: r.vertices.map(p => p.join(',')).sort() };
      });
      assert.deepEqual(consistency.actual, consistency.expected);
      if (path.includes('/learn/')) {
        await page.evaluate(() => window.MathJax.startup.promise);
        assert.equal(await page.locator('.ol-lesson-body > h2').count(), 11);
        const quizzes = page.locator('details').filter({ has: page.locator('summary strong') });
        assert.equal(await quizzes.count(), 5);
        for (const detail of await quizzes.all()) { await detail.locator('summary').click(); assert.equal(await detail.getAttribute('open'), ''); }
        assert.ok(await page.locator('mjx-container').count() >= 20);
        assert.equal(await page.locator('mjx-merror').count(), 0);
        assert.equal(await page.locator('meta[name=robots]').count(), 1);
        assert.ok(await page.locator('a[href="/optimization/learn/foundations/decisions-objectives-constraints/"]').count() > 0);
      }
      for (const width of [375, 320]) {
        await page.setViewportSize({ width, height: 900 });
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1));
      }
      await page.emulateMedia({ reducedMotion: 'reduce' });
      report.push({ path, passed: true });
    }
    const nojs = await browser.newContext({ javaScriptEnabled: false });
    const plain = await nojs.newPage();
    await plain.goto(base + '/optimization/labs/feasibility/');
    assert.equal(await plain.locator('[data-fe-x]').isDisabled(), true);
    assert.equal(await plain.locator('[data-fe-vertices] tr').count(), 4);
    assert.match(await plain.locator('noscript').innerText(), /default graph and coordinate table remain available/);
    await nojs.close();
    assert.deepEqual(errors, []);
    console.log('PASS: OPT-003 and LAB-B presets, rule toggles, checks, SVG/text agreement, reset, keyboard, mobile, disclosures, math and no-JavaScript fallback');
  } finally {
    fs.writeFileSync('/tmp/optimization-opt003-browser.json', JSON.stringify({ report, errors }, null, 2));
    await browser.close();
  }
})().catch(e => { console.error(e); process.exitCode = 1; });
