#!/usr/bin/env node
const fs=require('node:fs'),path=require('node:path');
const folder=process.env.SITE_AUDIT_OUT||'browser-audit';
const runs=[
 ['Homepage mobile','lighthouse-home-mobile.json'],
 ['Blog desktop','lighthouse-blog-desktop.json']
];
const table=['\n### Lighthouse lab baseline\n','| Page | Performance | Accessibility | SEO | LCP | CLS | TBT |','|---|---:|---:|---:|---:|---:|---:|'];
for(const [name,file] of runs){
 const p=path.join(folder,file);
 if(!fs.existsSync(p))throw Error('Missing Lighthouse report: '+p);
 const r=JSON.parse(fs.readFileSync(p,'utf8'));
 const score=x=>Math.round(100*(r.categories?.[x]?.score??0));
 const metric=x=>r.audits?.[x]?.displayValue??'N/A';
 table.push('| '+name+' | '+score('performance')+' | '+score('accessibility')+' | '+score('seo')+
   ' | '+metric('largest-contentful-paint')+' | '+metric('cumulative-layout-shift')+
   ' | '+metric('total-blocking-time')+' |');
}
table.push('\n_Lighthouse measures simulated/lab performance against a local CI build, not field-user Core Web Vitals or INP._\n');
const summary=table.join('\n');
console.log(summary);
if(process.env.GITHUB_STEP_SUMMARY)fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY,summary);
