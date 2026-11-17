'use strict';
// Cross-page acceptance: a learner can start, follow the released path,
// reproduce its downloads, find a term and reach an actionable correction route.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const base = process.env.OPTIMIZATION_SITE_URL || 'http://127.0.0.1:8765';
  const errors = [];
  try {
    const page = await browser.newPage(); page.on('pageerror', e => errors.push(e.message));
    await page.goto(base + '/optimization/');
    await page.locator('.ol-resource-nav').getByRole('link', { name: 'Start here', exact: true }).click();
    assert.equal(await page.locator('h1').innerText(), 'Start learning optimization');
    const steps = page.locator('.or-path > li');
    assert.equal(await steps.count(), 4);
    assert.equal(await page.locator('.or-path a[href*="/labs/"]').count(), 4);
    await page.getByRole('link', { name: 'Begin with OPT-001', exact: true }).press('Enter');
    for (let i = 1; i <= 4; i++) {
      assert.equal(await page.locator('.ol-lesson-id').innerText(), 'OPT-00' + i);
      const download = '/assets/code/optimization/opt00' + i + '_example.py';
      assert.ok(await page.locator('a[href="' + download + '"]').count() > 0);
      const response = await page.request.get(base + download);
      assert.equal(response.status(), 200);
      assert.equal(await response.text(), fs.readFileSync('assets/code/optimization/opt00' + i + '_example.py', 'utf8'));
      if (i < 4) await page.locator('.ol-lesson-footer .ol-lesson-link').filter({ hasText: 'Next lesson' }).click();
      else assert.equal(await page.locator('.ol-lesson-footer .ol-lesson-link').filter({ hasText: 'Next lesson' }).count(), 0);
    }
    await page.locator('.ol-resource-nav').getByRole('link', { name: 'Search the Optimization Lab', exact: true }).click();
    await page.waitForFunction(() => !document.querySelector('[data-search-controls]').disabled);
    await page.getByLabel('Search optimization content').fill('incumbent');
    await page.locator('[data-search-results] > li').first().getByRole('link').click();
    assert.match(page.url(), /concepts\/#best-known-solution$/);
    await page.locator('.ol-resource-nav').getByRole('link', { name: 'Start here', exact: true }).click();
    await page.locator('#concept-relationships + p + ol a[href$="#decision-domain"]').click();
    assert.match(page.url(), /concepts\/#decision-domain$/);
    assert.equal(await page.locator('#decision-domain').isVisible(), true);
    await page.locator('.or-footer').getByRole('link', { name: 'Report a correction', exact: true }).click();
    assert.match(page.url(), /about\/#corrections$/);
    const email = new URL(await page.getByRole('link', { name: 'Email a correction', exact: true }).getAttribute('href'));
    assert.equal(email.protocol, 'mailto:'); assert.equal(email.pathname, 'lotussavy@gmail.com');
    assert.equal(email.searchParams.get('subject'), 'Optimization Lab correction');
    assert.match(email.searchParams.get('body'), /Page URL or lesson ID:.*\nWhat I tried:.*\nExpected result:.*\nObserved result/s);
    // Inspect the destination/template only. Never send a test message.
    for (const width of [375, 320]) {
      await page.setViewportSize({ width, height: 900 });
      await page.locator('.ol-resource-nav').getByRole('link', { name: 'Start here', exact: true }).click();
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1));
      await page.locator('.ol-resource-nav').getByRole('link', { name: 'About & corrections', exact: true }).click();
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1));
    }
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await page.locator('.research-header-flow').evaluate(e => getComputedStyle(e).animationName), 'none');
    const plain = await browser.newContext({ javaScriptEnabled: false }), nojs = await plain.newPage();
    await nojs.goto(base + '/optimization/start/');
    assert.equal(await nojs.locator('.or-path > li').count(), 4);
    await nojs.getByRole('link', { name: 'Begin with OPT-001', exact: true }).press('Enter');
    assert.equal(await nojs.locator('.ol-lesson-id').innerText(), 'OPT-001');
    await nojs.locator('.ol-review').getByRole('link', { name: 'Report a correction', exact: true }).click();
    assert.equal(await nojs.getByRole('link', { name: 'Email a correction', exact: true }).isVisible(), true);
    await plain.close(); assert.deepEqual(errors, []);
    console.log('PASS: full beginner journey, four source-identical downloads, concept lookup, correction template, mobile, reduced motion and static navigation');
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
