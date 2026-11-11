'use strict';
// Browser regression against the actual Jekyll-generated LAB-A preview.
// Run after site build and while a local static server serves _site.
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

(async function main() {
  const browser = await chromium.launch({ headless: true });
  const errors = [];
  const base = process.env.OPTIMIZATION_SITE_URL || 'http://127.0.0.1:8765';
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(base + '/optimization/labs/profit-preview/', { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200, 'Preview URL should return HTTP 200');
    assert.match(await page.title(), /LAB-A/i);
    assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'), 'noindex,nofollow');
    assert.equal(await page.locator('[data-ol-range]').inputValue(), '4');
    assert.equal(await page.locator('[data-ol-profit]').innerText(), '$140');
    assert.equal(await page.locator('[data-ol-revenue]').innerText(), '$320');
    assert.equal(await page.locator('[data-ol-cost]').innerText(), '$180');

    const slider = page.locator('[data-ol-range]');
    const fixture = [
      [-100, 0, 100], [-25, 95, 120], [40, 180, 140], [95, 255, 160],
      [140, 320, 180], [175, 375, 200], [200, 420, 220], [215, 455, 240],
      [220, 480, 260], [215, 495, 280], [200, 500, 300], [175, 495, 320], [140, 480, 340]
    ];
    for (let n = 0; n <= 12; n += 1) {
      await slider.fill(String(n));
      const [profit, revenue, cost] = fixture[n];
      assert.equal(await page.locator('[data-ol-profit]').innerText(), '$' + profit, 'profit n=' + n);
      assert.equal(await page.locator('[data-ol-revenue]').innerText(), '$' + revenue, 'revenue n=' + n);
      assert.equal(await page.locator('[data-ol-cost]').innerText(), '$' + cost, 'cost n=' + n);
      assert.equal(await page.locator('[data-ol-chart-content] circle[r="8"]').getAttribute('data-fleet'), String(n), 'highlight n=' + n);
    }

    await page.getByRole('button', { name: 'Find optimum' }).click();
    assert.equal(await slider.inputValue(), '8');
    assert.equal(await page.locator('[data-ol-profit]').innerText(), '$220');
    assert.match(await page.locator('[data-ol-explanation]').innerText(), /unique global maximum/);
    await page.getByRole('button', { name: 'Reset' }).click();
    assert.equal(await slider.inputValue(), '4');
    assert.equal(await page.locator('[data-ol-profit]').innerText(), '$140');

    await slider.focus();
    await page.keyboard.press('ArrowRight');
    assert.equal(await slider.inputValue(), '5', 'keyboard arrows should change fleet');
    assert.equal(await page.locator('[data-ol-profit]').innerText(), '$175');

    await page.setViewportSize({ width: 375, height: 812 });
    assert.equal(await page.locator('[data-ol-profit]').isVisible(), true);
    assert.equal(await page.locator('[data-ol-chart]').isVisible(), true);
    const viewportWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    assert.ok(documentWidth <= viewportWidth + 1, 'No unexpected horizontal overflow at 375px');

    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await page.locator('[data-ol-profit]').innerText(), '$175');
    assert.deepEqual(errors, [], 'No uncaught page errors');
    console.log('PASS: rendered LAB-A preview, 13 values, controls, keyboard, 375px, reduced motion');
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
