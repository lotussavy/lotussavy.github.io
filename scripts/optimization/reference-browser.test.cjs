'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const base = process.env.OPTIMIZATION_SITE_URL || 'http://127.0.0.1:8765';
  const errors = [], results = [];
  try {
    const page = await browser.newPage(); page.on('pageerror', e => errors.push(e.message));
    await page.goto(base + '/optimization/concepts/', { waitUntil: 'domcontentloaded' });
    const filter = page.getByLabel('Filter glossary terms');
    assert.equal(await page.locator('[data-glossary-term]:visible').count(), 30);
    assert.equal(await filter.isEnabled(), true);
    await filter.fill('incumbent');
    assert.equal(await page.locator('[data-glossary-term]:visible').count(), 1);
    assert.equal(await page.locator('[data-glossary-term]:visible').getAttribute('id'), 'best-known-solution');
    // A related-term link reveals its target even when the current filter hid it.
    await page.locator('#best-known-solution .or-related a[href$="#global-optimum"]').click();
    await page.locator('#global-optimum').waitFor({ state: 'visible' });
    assert.equal(await page.locator('#global-optimum').isVisible(), true);
    assert.equal(await filter.inputValue(), '');
    assert.equal(await page.locator('[data-glossary-term]:visible').count(), 30);
    await filter.fill('no glossary match');
    assert.equal(await page.locator('[data-glossary-term]:visible').count(), 0);
    assert.equal(await page.locator('[data-glossary-empty]').isVisible(), true);
    await page.getByRole('button', { name: 'Clear filter', exact: true }).click();
    assert.equal(await filter.inputValue(), '');
    for (const width of [375, 320]) {
      await page.setViewportSize({ width, height: 900 });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1));
    }
    await page.goto(base + '/optimization/search/', { waitUntil: 'domcontentloaded' });
    const query = page.getByLabel('Search optimization content'), kind = page.getByLabel('Content type');
    await page.waitForFunction(() => !document.querySelector('[data-search-controls]').disabled);
    assert.equal(await page.locator('[data-search-results]>li').count(), 38);
    const requests = []; page.on('request', request => requests.push(request.url()));
    await query.fill('OPT003'); await query.press('Enter');
    assert.equal(await page.locator('[data-search-results]>li').first().getByRole('link').innerText(), 'Feasibility and Trade-offs');
    await query.fill('budget'); await kind.selectOption('lesson');
    assert.equal(await page.locator('[data-search-results]>li').count(), 1);
    assert.match(await page.locator('[data-search-results]').innerText(), /Decisions, Objectives, and Constraints/);
    const sharedUrl = page.url(); assert.match(sharedUrl, /#q=budget&type=lesson$/);
    await page.getByRole('link', { name: 'Skip to main content', exact: true }).press('Enter');
    assert.equal(await query.inputValue(), 'budget'); assert.equal(await kind.inputValue(), 'lesson');
    assert.match(page.url(), /#q=budget&type=lesson$/);
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => !document.querySelector('[data-search-controls]').disabled);
    assert.equal(await query.inputValue(), 'budget'); assert.equal(await kind.inputValue(), 'lesson');
    await query.fill('unreleasedquizzicalterm');
    assert.equal(await page.locator('[data-search-empty]').isVisible(), true);
    await query.fill('<img src=x onerror=alert(1)>');
    assert.equal(await page.locator('[data-search-output] img').count(), 0);
    await page.getByRole('button', { name: 'Clear search', exact: true }).click();
    assert.equal(await query.inputValue(), ''); assert.equal(await kind.inputValue(), 'all');
    assert.equal(await page.locator('[data-search-results]>li').count(), 38);
    // Query changes never submit to a search service or send the URL fragment.
    assert.ok(requests.every(url => !url.includes('q=') && !url.includes('#')));
    await query.fill('slack');
    await page.locator('[data-search-results]>li').first().getByRole('link').click();
    assert.match(page.url(), /\/optimization\/concepts\/#slack$/);
    assert.equal(await page.locator('#slack').isVisible(), true);
    await page.goto(base + '/optimization/learn/foundations/what-does-optimal-mean/', { waitUntil: 'domcontentloaded' });
    assert.equal(await page.locator('.ol-resource-nav').getByRole('link', { name: 'Glossary', exact: true }).getAttribute('href'), '/optimization/concepts/');
    await page.locator('.ol-lesson-aside a[href$="#global-optimum"]').click();
    assert.match(page.url(), /concepts\/#global-optimum$/);
    // Failure is explicit; static navigation works, and retry can recover.
    await page.route('**/optimization/search-index.json', route => route.fulfill({ status: 503, body: 'Unavailable' }));
    await page.goto(base + '/optimization/search/', { waitUntil: 'domcontentloaded' });
    await page.locator('[data-search-error]').waitFor({ state: 'visible' });
    assert.equal(await query.isDisabled(), true);
    assert.equal(await page.locator('[data-search-fallback] ul a').count(), 8);
    await page.unroute('**/optimization/search-index.json');
    await page.getByRole('button', { name: 'Retry search', exact: true }).click();
    await page.waitForFunction(() => !document.querySelector('[data-search-controls]').disabled);
    assert.equal(await page.locator('[data-search-results]>li').count(), 38);
    for (const width of [375, 320]) {
      await page.setViewportSize({ width, height: 900 });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1));
    }
    const plain = await browser.newContext({ javaScriptEnabled: false }), nojs = await plain.newPage();
    await nojs.goto(base + '/optimization/concepts/');
    assert.equal(await nojs.locator('[data-glossary-term]:visible').count(), 30);
    assert.equal(await nojs.getByLabel('Filter glossary terms').isDisabled(), true);
    await nojs.goto(base + '/optimization/search/');
    assert.equal(await nojs.locator('[data-search-fallback] ul a').count(), 8);
    assert.equal(await nojs.getByLabel('Search optimization content').isDisabled(), true);
    assert.match(await nojs.locator('noscript').innerText(), /glossary and every published lesson/);
    await plain.close(); assert.deepEqual(errors, []);
    results.push({ glossaryTerms: 30, indexedEntries: 38, behavior: 'passed', fallbacks: 'passed' });
    console.log('PASS: glossary and local search; aliases, filters, AND matching, fragment sharing, anchor recovery, cross-links, empty/error/retry, mobile and no-JavaScript navigation');
  } finally { fs.writeFileSync('/tmp/optimization-reference-browser.json', JSON.stringify({ results, errors }, null, 2)); await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
