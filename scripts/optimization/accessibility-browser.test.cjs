'use strict';
// Regression coverage for the released learning journey. Assistive-technology
// compatibility is documented separately; axe is not a conformance certificate.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const base = process.env.OPTIMIZATION_SITE_URL || 'http://127.0.0.1:8765';
  const routes = ['/optimization/', '/optimization/labs/profit/',
    '/optimization/learn/foundations/what-is-optimization/'];
  const results = [];
  try {
    for (const width of [1280, 375, 320]) {
      for (const route of routes) {
        const page = await browser.newPage({ viewport: { width, height: 900 } });
        try {
          const response = await page.goto(base + route, { waitUntil: 'domcontentloaded' });
          assert.equal(response.status(), 200, route);
          if (route.includes('what-is-optimization')) {
            await page.waitForFunction(() => Boolean(window.MathJax?.startup?.promise));
            await page.evaluate(() => window.MathJax.startup.promise);
            assert.ok(await page.locator('mjx-container').count() >= 20, 'Every mathematical passage is typeset');
          }
          for (const summary of await page.locator('details > summary').all()) await summary.click();
          await page.evaluate(() => document.fonts.ready);
          const body = await page.locator('#main_content').innerText();
          const backslash = String.fromCharCode(92);
          assert.equal(body.includes(backslash + '[') || body.includes(backslash + '('), false, 'No unrendered TeX');
          assert.equal(await page.locator('mjx-merror').count(), 0, 'No math-renderer errors');
          const dimensions = await page.evaluate(() => ({
            document: document.documentElement.scrollWidth,
            viewport: document.documentElement.clientWidth
          }));
          assert.ok(dimensions.document <= dimensions.viewport + 1, route + ' overflow at ' + width);
          await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
          const audit = await page.evaluate(() => axe.run(document, {
            runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] }
          }));
          const violations = audit.violations.map(v => ({ id: v.id, impact: v.impact,
            nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) }));
          results.push({ route, width, dimensions, violations });
          assert.deepEqual(violations, [], route + ' accessibility at ' + width + ': ' + JSON.stringify(violations));
        } finally { await page.close(); }
      }
    }
    console.log('PASS: 9 desktop/mobile release-page audits; no WCAG-tagged axe violations, overflow, or raw TeX');
  } finally {
    fs.writeFileSync('/tmp/optimization-accessibility.json', JSON.stringify(results, null, 2));
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
