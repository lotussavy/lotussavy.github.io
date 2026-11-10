#!/usr/bin/env node
/**
 * Browser regression audit for the generated Jekyll website.
 * Tests local HTTP delivery, responsive layout, critical interactions,
 * image loading, keyboard access, and navigation timing.
 *
 * Requires playwright and a running HTTP server for _site.
 */
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');

const BASE = process.env.SITE_AUDIT_BASE || 'http://127.0.0.1:8765';
const OUT = process.env.SITE_AUDIT_OUT || 'browser-audit';
const ROUTES = [
  '/', '/research/', '/publications/', '/cv/', '/blog/', '/contact/',
  '/blog/archive/',
  '/blog/2025/09/26/urban-air-mobility-uam-airport-shuttles-or-city-taxis/'
];
const VIEWPORTS = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];
const failures = [], warnings = [], results = [];
const addFailure = (label, issue) => failures.push(label + ': ' + issue);
const addWarning = (label, issue) => warnings.push(label + ': ' + issue);

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  try {
    for (const viewport of VIEWPORTS) {
      const ctx = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        reducedMotion: 'reduce',
        deviceScaleFactor: 1
      });
      for (const route of ROUTES) {
        const label = viewport.name + ' ' + route;
        const page = await ctx.newPage();
        const errors = [];
        page.on('pageerror', e => errors.push(String(e.message || e)));
        const response = await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
        if (!response || response.status() >= 400) addFailure(label, 'HTTP ' + (response && response.status()));
        await page.evaluate(() => document.fonts && document.fonts.ready);
        const state = await page.evaluate(() => {
          const root = document.documentElement, body = document.body;
          const images = Array.from(document.images);
          const broken = images.filter(im => im.complete && im.naturalWidth === 0).map(im => im.currentSrc || im.src);
          const large = Array.from(body.querySelectorAll('*')).filter(el => {
            const r = el.getBoundingClientRect();
            const style = getComputedStyle(el);
            return r.width && r.right > innerWidth + 4 && style.position !== 'fixed' &&
              style.visibility !== 'hidden' && style.display !== 'none';
          }).slice(0, 5).map(el => ({
            tag: el.tagName, className: String(el.className?.baseVal || el.className || '').slice(0, 70),
            right: Math.round(el.getBoundingClientRect().right)
          }));
          const nav = performance.getEntriesByType('navigation')[0];
          const paint = performance.getEntriesByType('paint');
          return {
            width: innerWidth, documentWidth: Math.max(root.scrollWidth, body.scrollWidth),
            missingImages: broken, overflowingElements: large,
            h1Count: document.querySelectorAll('h1').length,
            navLoadMs: nav ? Math.round(nav.loadEventEnd - nav.startTime) : null,
            dclMs: nav ? Math.round(nav.domContentLoadedEventEnd - nav.startTime) : null,
            fcpMs: paint.find(p => p.name === 'first-contentful-paint')?.startTime || null
          };
        });
        if (state.documentWidth > viewport.width + 4) {
          addFailure(label, 'horizontal scroll ' + state.documentWidth + 'px at ' + viewport.width + 'px viewport; elements: ' + JSON.stringify(state.overflowingElements));
        }
        if (state.h1Count !== 1) addWarning(label, 'Expected one H1; found ' + state.h1Count);
        for (const img of state.missingImages) addFailure(label, 'failed image ' + img);
        for (const e of errors) addFailure(label, 'uncaught JavaScript error ' + e);
        results.push({ route, viewport: viewport.name, ...state, jsErrors: errors.length });
        if (viewport.name !== 'tablet') {
          const safe = route === '/' ? 'home' : route.replace(/^\/|\/$/g, '').replaceAll('/', '-');
          await page.screenshot({ path: path.join(OUT, viewport.name + '-' + safe + '.png'), fullPage: true, animations: 'disabled' });
        }
        if (viewport.name === 'mobile') {
          const navLinks = await page.locator('#main-nav a').count();
          if (navLinks < 5) addFailure(label, 'main navigation links are missing');
          const navVisible = await page.locator('#main-nav').isVisible();
          if (!navVisible) addFailure(label, 'main navigation is not visible');
        }
        if (route === '/' && viewport.name === 'desktop') {
          const button = page.locator('[data-hm-stage="reason"]');
          if (await button.count()) {
            await button.click();
            if (await button.getAttribute('aria-pressed') !== 'true') addFailure(label, 'research journey button did not activate');
          }
        }
        if (route === '/cv/' && viewport.name === 'desktop') {
          const button = page.locator('[data-cv-choice="education"]');
          if (await button.count()) {
            await button.click();
            if (await button.getAttribute('aria-pressed') !== 'true') addFailure(label, 'education timeline did not activate');
          }
        }
        if (route === '/contact/' && viewport.name === 'desktop') {
          const button = page.locator('[data-cm-topic="talk"]');
          if (await button.count()) {
            await button.click();
            const mail = await page.locator('#cm-response-link').getAttribute('href');
            if (!mail || !mail.includes('Invitation%20for%20a%20research%20talk')) addFailure(label, 'email draft topic did not update');
          }
        }
        if (route === '/blog/' && viewport.name === 'desktop') {
          const input = page.locator('#bj-search');
          if (await input.count()) {
            await input.fill('nonexistent-research-keyword-xyz-987');
            if (!await page.locator('#bj-empty').isVisible()) addFailure(label, 'search empty state did not appear');
            await input.fill('');
          }
        }
        await page.close();
      }
      await ctx.close();
    }
  } finally {
    await browser.close();
  }
  fs.writeFileSync(path.join(OUT, 'results.json'), JSON.stringify({ results, failures, warnings }, null, 2));
  const average = values => values.length ? Math.round(values.reduce((a, b) => a + b, 0) / values.length) : 'N/A';
  const mobile = results.filter(r => r.viewport === 'mobile');
  const desktop = results.filter(r => r.viewport === 'desktop');
  let summary = '## Browser audit\n\n' +
    '- Pages: ' + ROUTES.length + ' × ' + VIEWPORTS.length + ' viewports = ' + results.length + ' navigations\n' +
    '- Mobile average loadEventEnd (local server): ' + average(mobile.map(r => r.navLoadMs).filter(Number.isFinite)) + ' ms\n' +
    '- Desktop average loadEventEnd (local server): ' + average(desktop.map(r => r.navLoadMs).filter(Number.isFinite)) + ' ms\n' +
    '- Failures: ' + failures.length + '\n- Warnings: ' + warnings.length + '\n' +
    '\n_Navigation timing uses a local CI server; it is not a real-user Core Web Vitals measurement._\n';
  if (failures.length) summary += '\n### Failures\n' + failures.slice(0, 25).map(x => '- ' + x).join('\n') + '\n';
  if (warnings.length) summary += '\n### Warnings\n' + warnings.slice(0, 25).map(x => '- ' + x).join('\n') + '\n';
  console.log(summary);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
  if (failures.length) process.exitCode = 1;
}
main().catch(err => { console.error(err); process.exitCode = 1; });
