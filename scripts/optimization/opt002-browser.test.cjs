'use strict';
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const base = process.env.OPTIMIZATION_SITE_URL || 'http://127.0.0.1:8765';
const lesson = '/optimization/learn/foundations/decisions-objectives-constraints/';
const lab = '/optimization/labs/model-builder/';
const fixture = require('./profit-fixtures.json').rows;
const money = n => (n < 0 ? '−$' : '$') + Math.abs(n);

(async () => {
  const browser = await chromium.launch({ headless: true });
  const errors = [];
  try {
    for (const route of [lesson, lab]) {
      const page = await browser.newPage({ viewport: { width:1280,height:900 } });
      page.on('pageerror',e=>errors.push(e.message));
      const response = await page.goto(base+route,{waitUntil:'domcontentloaded'});
      assert.equal(response.status(),200);
      assert.equal(await page.locator('meta[name="robots"]').count(),1);
      assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'),'index,follow');
      assert.equal(await page.locator('[data-model-builder]').count(),1);
      assert.equal(await page.locator('[data-mb-candidate]').isEnabled(),true);
      assert.equal(await page.locator('[data-mb-count]').innerText(),'9 of 13');
      assert.equal(await page.locator('[data-mb-value]').innerText(),'$140');
      const setRange = async (selector,value) => page.locator(selector).evaluate((e,n)=>{
        e.value=String(n);e.dispatchEvent(new Event('input',{bubbles:true}));
      },value);
      const cases = [
        ['profit',260,12,8,220,9],['profit',220,12,6,200,7],
        ['profit',260,4,4,140,5],['revenue',400,12,10,500,13],
        ['cost',400,12,0,100,13],['profit',80,12,null,null,0],
        ['profit',100,12,0,-100,1]
      ];
      for (const [goal,budget,available,fleet,value,count] of cases) {
        await page.locator('[data-mb-objective]').selectOption(goal);
        await page.locator('[data-mb-budget]').fill(String(budget));
        await setRange('[data-mb-available]',available);
        assert.equal(await page.locator('[data-mb-count]').innerText(),count+' of 13');
        assert.equal(await page.locator('[data-mb-choices] li').count(),13);
        assert.equal(await page.locator('[data-mb-choices] li[data-feasible=true]').count(),count);
        await page.getByRole('button',{name:'Solve this model',exact:true}).click();
        const text = await page.locator('[data-mb-best]').innerText();
        if (fleet===null) assert.match(text,/No feasible fleet.*No optimizer/);
        else {
          assert.equal(await page.locator('[data-mb-candidate]').inputValue(),String(fleet));
          assert.equal(await page.locator('[data-mb-value]').innerText(),money(value));
          assert.ok(text.includes('Exact best: n = '+fleet+';'));
        }
      }
      await page.getByRole('button',{name:'Reset model',exact:true}).click();
      await setRange('[data-mb-available]',6); await setRange('[data-mb-candidate]',7);
      assert.equal(await page.locator('[data-mb-feasibility]').innerText(),'Infeasible');
      assert.match(await page.locator('[data-mb-availability-check]').innerText(),/fails by 1 vehicles/);
      assert.match(await page.locator('[data-mb-budget-check]').innerText(),/passes/);
      await page.getByRole('button',{name:'Reset model',exact:true}).click();
      for (const invalid of ['', '401', '260.5', '-1']) {
        await page.locator('[data-mb-budget]').fill(invalid);
        assert.equal(await page.locator('[data-mb-error]').isVisible(),true);
        assert.equal(await page.locator('[data-mb-solve]').isDisabled(),true);
        assert.equal(await page.locator('[data-mb-value]').innerText(),'$140');
      }
      await page.locator('[data-mb-budget]').fill('260');
      assert.equal(await page.locator('[data-mb-error]').isVisible(),false);
      assert.equal(await page.locator('[data-mb-solve]').isEnabled(),true);
      await page.locator('[data-mb-candidate]').focus(); await page.keyboard.press('ArrowLeft');
      assert.equal(await page.locator('[data-mb-candidate]').inputValue(),'3');
      assert.equal(await page.locator('[data-mb-value]').innerText(),'$95');
      await page.locator('[data-model-builder] summary').click();
      assert.equal(await page.locator('[data-mb-rows] tr').count(),13);
      for (let n=0;n<13;n++) {
        assert.deepEqual(await page.locator('[data-mb-rows] tr').nth(n).locator('th,td').allTextContents(),
          [String(n),money(fixture[n][3]),n<=8?'Yes':'No']);
      }
      if (route===lesson) {
        assert.equal(await page.locator('.ol-lesson-body h2').count(),11);
        const quiz = page.locator('.ol-lesson-body details').filter({has:page.locator('summary strong')});
        assert.equal(await quiz.count(),6,'One optional certificate and five knowledge checks');
        await quiz.nth(1).locator('summary').focus(); await page.keyboard.press('Enter');
        assert.equal(await quiz.nth(1).evaluate(e=>e.open),true);
        await page.waitForFunction(()=>Boolean(window.MathJax?.startup?.promise));
        await page.evaluate(()=>window.MathJax.startup.promise);
        assert.ok(await page.locator('mjx-container').count()>=20);
        assert.equal(await page.locator('.ol-lesson-link[href="/optimization/learn/foundations/what-is-optimization/"]').count(),1);
      }
      await page.setViewportSize({width:320,height:812});
      assert.equal(await page.locator('[data-mb-candidate]').isVisible(),true);
      const dims = await page.evaluate(()=>({v:document.documentElement.clientWidth,d:document.documentElement.scrollWidth}));
      assert.ok(dims.d<=dims.v+1,'No page overflow at 320 px');
      await page.emulateMedia({reducedMotion:'reduce'});
      await page.close();
    }
    const staticPage = await browser.newPage({javaScriptEnabled:false});
    await staticPage.goto(base+lab,{waitUntil:'domcontentloaded'});
    assert.equal(await staticPage.locator('[data-mb-candidate]').isDisabled(),true);
    assert.match(await staticPage.locator('noscript').innerText(),/controls are disabled/);
    await staticPage.locator('[data-model-builder] summary').click();
    assert.equal(await staticPage.locator('[data-mb-rows] tr').count(),13);
    await staticPage.close();
    assert.deepEqual(errors,[]);
    console.log('PASS: OPT-002 and builder; seven scenarios, rule violations, invalid input, keyboard, math, table, 320 px and no-JavaScript fallback');
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exitCode=1;});
