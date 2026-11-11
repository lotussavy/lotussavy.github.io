'use strict';
// OPT-001 rendered lesson acceptance checks.
// Run against a Jekyll-built site served on http://127.0.0.1:8765.
// Requires Playwright Chromium; does not substitute for manual screen-reader review.
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const errors = [];
  const site = process.env.OPTIMIZATION_SITE_URL || 'http://127.0.0.1:8765';
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    page.on('pageerror', e => errors.push(e.message));

    const response = await page.goto(site + '/optimization/learn/foundations/what-is-optimization/', { waitUntil: 'domcontentloaded' });
    assert.equal(response.status(), 200, 'OPT-001 route must respond 200');
    assert.match(await page.title(), /What Is Optimization/);
    assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'), 'noindex,nofollow', 'Draft must not be indexed');
    assert.equal(await page.locator('article.ol-lesson').count(), 1, 'Shared lesson layout rendered');
    assert.equal(await page.locator('.ol-lesson-body h2').count(), 11, 'All eleven lesson sections rendered');
    assert.equal(await page.locator('[data-ol-profit-lab]').count(), 1, 'Reuse one LAB-A');
    assert.equal(await page.locator('[data-ol-profit]').innerText(), '$140', 'Default lab value');
    assert.equal(await page.locator('head link[href*="optimization-profit.css"]').count(), 1, 'LAB-A stylesheet belongs in document head');
    assert.equal(await page.locator('[data-ol-profit-lab] link[rel="stylesheet"]').count(), 0, 'No stylesheet nested in lab section');
    assert.equal(await page.getByRole('slider', { name: 'Number of vehicles' }).count(), 1, 'Slider has an accessible name');
    assert.equal(await page.locator('[data-ol-chart] title').count(), 1, 'Chart has an accessible title');
    await page.getByRole('button', { name: 'Find optimum' }).click();
    assert.equal(await page.locator('[data-ol-profit]').innerText(), '$220', 'Embedded LAB-A updates');
    assert.equal(await page.locator('[data-ol-range]').inputValue(), '8', 'Optimum fleet is eight');

    // Exclude the simulator's independent model disclosure. The lesson itself
    // has one optional proof and four answer disclosures with bold summaries.
    const disclosures = page.locator('.ol-lesson-body details').filter({
      has: page.locator('summary strong')
    });
    assert.equal(await disclosures.count(), 5, 'One proof and four knowledge-check disclosures');
    assert.equal(await disclosures.nth(1).getAttribute('open'), null, 'Quiz answer begins collapsed');
    await disclosures.nth(1).locator('summary').click();
    assert.equal(await disclosures.nth(1).evaluate(e => e.open), true, 'Quiz answer opens');
    assert.match(await disclosures.nth(1).innerText(), /Fleet size/, 'Quiz feedback is visible');

    // The lesson explicitly uses TeX math; verify the renderer generated MathJax containers.
    // A CDN outage should produce a failing review gate, not a false pass.
    await page.waitForFunction(() =>
      Boolean(window.MathJax && window.MathJax.startup && window.MathJax.startup.promise),
      null, { timeout: 15000 }
    );
    await page.evaluate(() => window.MathJax.startup.promise);
    const equations = await page.locator('.ol-lesson-body mjx-container').count();
    assert.ok(equations >= 6, 'Rendered MathJax equations are required, found ' + equations);

    await page.setViewportSize({ width: 375, height: 812 });
    assert.equal(await page.locator('[data-ol-range]').isVisible(), true);
    const dims = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth
    }));
    assert.ok(dims.document <= dims.viewport + 1, 'No page-level horizontal overflow at 375 px');

    await page.locator('[data-ol-range]').focus();
    await page.keyboard.press('ArrowLeft');
    assert.equal(await page.locator('[data-ol-range]').inputValue(), '7');
    assert.equal(await page.locator('[data-ol-profit]').innerText(), '$215', 'Keyboard-accessible embedded lab');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await page.locator('article.ol-lesson').isVisible(), true);

    assert.deepEqual(errors, [], 'No uncaught JS page errors');
    console.log('PASS: OPT-001 draft route, noindex, 11 sections, LAB-A, disclosures, math, mobile, keyboard');
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exitCode = 1; });
