'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const base = process.env.OPTIMIZATION_SITE_URL || 'http://127.0.0.1:8765';
  const errors = [], results = [];
  try {
    for (const route of ['/optimization/labs/optimality/', '/optimization/learn/foundations/what-does-optimal-mean/']) {
      const page = await browser.newPage(); page.on('pageerror', e => errors.push(e.message));
      await page.goto(base + route, { waitUntil: 'domcontentloaded' });
      const lab = page.locator('[data-optimality]');
      assert.equal(await lab.locator('[data-oc-candidate]').isEnabled(), true);
      assert.equal(await lab.locator('[data-oc-best]').innerText(), '6 at x = 2');
      assert.match(await lab.locator('[data-oc-verdict]').innerText(), /not a global certificate/);
      assert.equal(await lab.locator('[data-oc-proof]').isVisible(), false);
      await lab.getByRole('button', { name: 'Verify entire model', exact: true }).click();
      const verifyButton = lab.getByRole('button', { name: 'Verify entire model', exact: true });
      await verifyButton.hover();
      const hoverColors = await verifyButton.evaluate(button => ({ background: getComputedStyle(button).backgroundColor, color: getComputedStyle(button).color }));
      assert.deepEqual(hoverColors, { background: 'rgb(7, 79, 84)', color: 'rgb(255, 255, 255)' });
      assert.match(await lab.locator('[data-oc-verdict]').innerText(), /10 at x = 8/);
      assert.match(await lab.locator('[data-oc-classification]').innerText(), /Local maximum; not global/);
      assert.equal(await lab.locator('[data-oc-global-marks] polygon').count(), 1);
      await lab.getByRole('button', { name: 'Better peak', exact: true }).click();
      assert.match(await lab.locator('[data-oc-best]').innerText(), /10 at x = 8/);
      assert.equal(await lab.locator('[data-oc-proof]').isVisible(), false);
      await lab.getByRole('button', { name: 'Verify entire model', exact: true }).click();
      assert.match(await lab.locator('[data-oc-classification]').innerText(), /Globally optimal/);
      await lab.getByRole('button', { name: 'Tied optima', exact: true }).click();
      await lab.getByRole('button', { name: 'Verify entire model', exact: true }).click();
      assert.match(await lab.locator('[data-oc-verdict]').innerText(), /6 at x = 2 and 6/);
      assert.equal(await lab.locator('[data-oc-global-marks] polygon').count(), 2);
      // A candidate move preserves the model certificate; a limit move clears it.
      await lab.locator('[data-oc-candidate]').press('ArrowLeft');
      assert.equal(await lab.locator('[data-oc-proof]').isVisible(), true);
      await lab.locator('[data-oc-cap]').press('ArrowLeft');
      assert.equal(await lab.locator('[data-oc-cap]').inputValue(), '5');
      assert.equal(await lab.locator('[data-oc-proof]').isVisible(), false);
      await lab.getByRole('button', { name: 'Outside limit', exact: true }).click();
      assert.match(await lab.locator('[data-oc-feasible]').innerText(), /Infeasible/);
      assert.equal(await lab.locator('[data-oc-best]').innerText(), '6 at x = 2');
      await lab.locator('details summary').click();
      assert.match(await lab.locator('[data-oc-rows]').innerText(), /No; excluded from ranking/);
      await lab.getByRole('button', { name: 'Clear comparison record', exact: true }).click();
      assert.equal(await lab.locator('[data-oc-best]').innerText(), 'None recorded');
      assert.match(await lab.locator('[data-oc-rows]').innerText(), /feasible interval still exists/);
      await lab.getByRole('button', { name: 'Add candidate to record', exact: true }).click();
      await lab.getByRole('button', { name: 'Add candidate to record', exact: true }).click();
      assert.equal(await lab.locator('[data-oc-rows] tr').count(), 1);
      assert.equal(await lab.locator('[data-oc-best]').innerText(), 'None recorded');
      await lab.getByRole('button', { name: 'Only feasible point', exact: true }).click();
      await lab.getByRole('button', { name: 'Verify entire model', exact: true }).click();
      assert.match(await lab.locator('[data-oc-classification]').innerText(), /Only feasible point; globally optimal/);
      await lab.getByRole('button', { name: 'Reset comparator', exact: true }).click();
      assert.equal(await lab.locator('[data-oc-cap]').inputValue(), '10');
      assert.equal(await lab.locator('[data-oc-rows] tr').count(), 3);
      await lab.locator('[data-oc-candidate]').press('ArrowRight');
      assert.equal(await lab.locator('[data-oc-candidate]').inputValue(), '2.5');
      assert.equal(await lab.locator('[data-oc-score]').innerText(), '5.75 at x = 2.5');
      await lab.getByRole('button', { name: 'Add candidate to record', exact: true }).click();
      const points = await lab.locator('[data-oc-rows] th').allTextContents(); assert.deepEqual(points, ['0', '2', '2.5', '4']);
      assert.equal(await lab.locator('[data-oc-record-marks] circle').count(), 4);
      if (route.includes('/learn/')) {
        await page.waitForFunction(() => Boolean(window.MathJax?.startup?.promise));
        await page.evaluate(() => window.MathJax.startup.promise);
        assert.equal(await page.locator('.ol-lesson-body > h2').count(), 11);
        const quizzes = page.locator('details').filter({ has: page.locator('summary strong') });
        assert.equal(await quizzes.count(), 5);
        for (const detail of await quizzes.all()) { await detail.locator('summary').click(); assert.equal(await detail.getAttribute('open'), ''); }
        assert.ok(await page.locator('mjx-container').count() >= 20);
        assert.equal(await page.locator('mjx-merror').count(), 0);
        assert.equal(await page.locator('meta[name=robots]').count(), 1);
        assert.ok(await page.locator('a[href="/optimization/learn/foundations/feasibility-and-trade-offs/"]').count() > 0);
      }
      for (const width of [375, 320]) {
        await page.setViewportSize({ width, height: 900 });
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1));
      }
      await page.emulateMedia({ reducedMotion: 'reduce' });
      results.push({ route, passed: true }); await page.close();
    }
    const context = await browser.newContext({ javaScriptEnabled: false }), page = await context.newPage();
    await page.goto(base + '/optimization/labs/optimality/');
    assert.equal(await page.locator('[data-oc-candidate]').isDisabled(), true);
    assert.equal(await page.locator('[data-oc-rows] tr').count(), 3);
    assert.match(await page.locator('noscript').innerText(), /proven global score 10/);
    await context.close(); assert.deepEqual(errors, []);
    console.log('PASS: OPT-004 and comparator record, local/global/ties, constraint change, certificate invalidation, keyboard, mobile, math, disclosures and no-JavaScript fallback');
  } finally {
    fs.writeFileSync('/tmp/optimization-opt004-browser.json', JSON.stringify({ results, errors }, null, 2));
    await browser.close();
  }
})().catch(e => { console.error(e); process.exitCode = 1; });
