/* Hard.Money static site generator. Run: node tools/build.mjs
   Outputs HTML at repo root. Content lives in tools/content/*.mjs */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages } from './content/pages.mjs';
import { loans } from './content/loans.mjs';
import { articles } from './content/articles.mjs';
import { states } from './content/states.mjs';
import { glossary } from './content/glossary.mjs';
import { lenders } from './content/lenders.mjs';
import { videos } from './content/videos.mjs';
import { faqs } from './content/faqs.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const SITE = {
  name: 'Hard.Money', url: 'https://hard.money', tagline: 'The Private Lending Hub',
  desc: 'Hard money loans explained, compared and connected: fix-and-flip, bridge, rental and construction financing, a vetted private lender directory, calculators and a 24-hour funding request.',
  adsense: 'ca-pub-6620975821265271',
  contactBanner: 'https://web.works/contact',
};
const ADS = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsense}" crossorigin="anonymous"></script>`;

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const slug = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const money = (n) => '$' + Number(n).toLocaleString();

const NAV = [
  ['/loans/', 'Loan Types'], ['/lenders/', 'Lender Directory'], ['/calculators/', 'Calculators'],
  ['/learn/', 'Guides'], ['/videos/', 'Videos'], ['/states/', 'States'], ['/support/', 'Support Us'],
];

export function layout({ title, desc, url, body, ads = true, noindex = false, schema = [], crumbs = null, ogType = 'website' }) {
  const full = title.includes('Hard.Money') ? title : `${title} | Hard.Money`;
  const canonical = SITE.url + url;
  const ld = schema.length ? `<script type="application/ld+json">${JSON.stringify(schema.length === 1 ? schema[0] : schema)}</script>` : '';
  const crumbHtml = crumbs ? `<nav class="crumbs wrap" aria-label="Breadcrumb"><a href="/">Home</a>${crumbs.map(([h, t]) => `<span>›</span>${h ? `<a href="${h}">${esc(t)}</a>` : `<b>${esc(t)}</b>`}`).join('')}</nav>` : '';
  const crumbLd = crumbs ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [['/', 'Home'], ...crumbs.filter(c => c[0])].map(([h, t], i) => ({ '@type': 'ListItem', position: i + 1, name: t, item: SITE.url + h })) })}</script>` : '';
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(full)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
${noindex ? '<meta name="robots" content="noindex,nofollow">' : '<meta name="robots" content="index,follow,max-image-preview:large">'}
<meta property="og:type" content="${ogType}"><meta property="og:site_name" content="Hard.Money"><meta property="og:title" content="${esc(full)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${SITE.url}/assets/img/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0b1b33">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/site.css">
${ads ? ADS : ''}
${ld}${crumbLd}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="topbar">Contact, if you are interested in this website/domain name/Sponsorship/Advertisement/Partnership — <a href="${SITE.contactBanner}" rel="noopener">web.works/contact</a></div>
<header class="hdr">
  <div class="wrap">
    <a class="logo" href="/" aria-label="Hard.Money home"><span class="mark">H</span><span>Hard<span class="dot">.</span>Money</span></a>
    <button class="burger" aria-expanded="false" aria-controls="nav">Menu ☰</button>
    <nav class="nav" id="nav" aria-label="Main">
      ${NAV.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}
      <a class="btn sm" href="/apply/">Get Funded →</a>
    </nav>
  </div>
</header>
${crumbHtml}
<main id="main">
${body}
</main>
<footer class="ftr">
  <div class="wrap">
    <div class="cols">
      <div>
        <a class="logo" href="/"><span class="mark">H</span><span>Hard<span class="dot">.</span>Money</span></a>
        <p>Independent education and lender-matching hub for hard money and private real-estate lending. Free for borrowers. We are not a lender.</p>
        <p><a class="btn sm" href="/apply/">Request Funding</a></p>
      </div>
      <div><h4>Loans</h4><ul>${loans.map(l => `<li><a href="/loans/${l.slug}/">${esc(l.short)}</a></li>`).join('')}<li><a href="/rates/">Current Rates &amp; Terms</a></li></ul></div>
      <div><h4>Resources</h4><ul><li><a href="/learn/">Guides &amp; Articles</a></li><li><a href="/calculators/">Calculators</a></li><li><a href="/glossary/">Glossary</a></li><li><a href="/videos/">Video Library</a></li><li><a href="/states/">Lending by State</a></li><li><a href="/faq/">FAQ</a></li></ul></div>
      <div><h4>Lenders &amp; Partners</h4><ul><li><a href="/lenders/">Lender Directory</a></li><li><a href="/lenders/get-listed/">Get Listed</a></li><li><a href="/advertise/">Advertise &amp; Sponsor</a></li><li><a href="/support/">Support the Project</a></li><li><a href="/contests/">Contests &amp; Prizes</a></li><li><a href="/careers/">We're Hiring</a></li></ul></div>
      <div><h4>Company</h4><ul><li><a href="/about/">About</a></li><li><a href="/contact/">Contact</a></li><li><a href="/editorial-policy/">Editorial Policy</a></li><li><a href="/how-we-make-money/">How We Make Money</a></li><li><a href="/privacy/">Privacy Policy</a></li><li><a href="/terms/">Terms of Use</a></li><li><a href="/disclaimer/">Disclaimer &amp; Trademark Notice</a></li></ul></div>
    </div>
    <div class="legal">
      <p><strong>Important:</strong> Hard.Money is an independent publisher and lead-referral service. We are not a lender, broker, or financial adviser, and we do not make credit decisions. Loan programs, rates, points, fees and approval are determined solely by the lenders you choose to work with and are subject to their underwriting. Figures on this site are illustrative market ranges for business-purpose loans and are not offers of credit. Hard money loans are typically for business or investment purposes only, not for owner-occupied primary residences.</p>
      <p><strong>Advertiser disclosure:</strong> We may receive compensation from lenders, advertisers and partners whose products appear on this site, including when you submit a funding request. Compensation may affect how and where listings appear, but does not influence our editorial content. Featured listings are paid placements, not recommendations.</p>
      <p><strong>Trademark notice:</strong> “Hard money” is a generic, descriptive industry term for asset-based private lending. This site uses the term descriptively. Hard.Money is not affiliated with, sponsored by, or endorsed by any entity holding a registered mark containing the words “hard money”. All lender and company names are trademarks of their respective owners and are used for identification only. <a href="/disclaimer/">Full disclosure</a>.</p>
      <p>© <span data-year>2026</span> Hard.Money. All rights reserved. · <a href="/sitemap.xml">Sitemap</a> · <a href="/privacy/#your-choices">Do Not Sell or Share My Personal Information</a></p>
    </div>
  </div>
</footer>
<div class="cookie" role="dialog" aria-label="Cookie notice"><p>We use cookies for analytics and to show ads. Third-party vendors, including Google, use cookies to serve ads based on your prior visits. See our <a href="/privacy/">Privacy Policy</a>.</p><button class="btn sm" data-consent="all">Accept</button><button class="btn sm outline" data-consent="essential">Essential only</button></div>
<div class="sticky-cta"><a class="btn" href="/apply/">Get a Funding Quote in 24 Hours →</a></div>
<script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}

/* ------- reusable fragments ------- */
export const ad = () => `<div class="ad"><ins class="adsbygoogle" style="display:block" data-ad-client="${SITE.adsense}" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle=window.adsbygoogle||[]).push({});</script></div>`;
export const ctaInline = (h = 'Ready to fund your next deal?', p = 'One request. Multiple vetted private lenders. Terms in as little as 24 hours. Free, no obligation.') => `<div class="cta-inline"><div><h3>${h}</h3><p>${p}</p></div><a class="btn lg" href="/apply/">Get Funded →</a></div>`;
export const faqBlock = (items) => `<div class="faq">${items.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="a">${a}</div></details>`).join('')}</div>`;
export const faqLd = (items) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })) });
export const sidebar = (extra = '') => `<aside class="side">
  <div class="card dark"><h4 style="color:#fff">Get a funding quote</h4><p style="color:#b7c3d9;font-size:.92rem">Tell us about the deal; vetted lenders respond within 24 hours. Free for borrowers.</p><a class="btn" href="/apply/">Start request →</a></div>
  ${ad()}
  <div class="card"><h4>Popular tools</h4><ul><li><a href="/calculators/hard-money-loan/">Hard money cost calculator</a></li><li><a href="/calculators/fix-and-flip/">Fix &amp; flip profit calculator</a></li><li><a href="/calculators/arv-ltv/">ARV / max loan calculator</a></li><li><a href="/calculators/dscr/">DSCR calculator</a></li></ul></div>
  <div class="card"><h4>Top guides</h4><ul>${articles.slice(0, 5).map(a => `<li><a href="/learn/${a.slug}/">${esc(a.title)}</a></li>`).join('')}</ul></div>
  ${extra}
</aside>`;
export const pageHead = (h1, lead, eyebrow) => `<section class="page-head"><div class="wrap">${eyebrow ? `<span class="eyebrow">${esc(eyebrow)}</span>` : ''}<h1>${h1}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}</div></section>`;

/* ------- writer ------- */
const out = [];
export function write(url, html) {
  const file = url.endsWith('/') ? path.join(ROOT, url, 'index.html') : path.join(ROOT, url);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  if (url.endsWith('/') || url.endsWith('.html')) out.push(url);
}

/* ------- build ------- */
const ctx = { SITE, layout, write, esc, slug, money, ad, ctaInline, faqBlock, faqLd, sidebar, pageHead, loans, articles, states, glossary, lenders, videos, faqs };
for (const page of pages) page(ctx);

/* sitemap, robots, ads.txt, CNAME */
const today = new Date().toISOString().slice(0, 10);
const noindexUrls = new Set(['/thank-you/', '/404.html']);
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${out.filter(u => !noindexUrls.has(u)).map(u => `  <url><loc>${SITE.url}${u}</loc><lastmod>${today}</lastmod><changefreq>${u === '/' ? 'daily' : 'weekly'}</changefreq><priority>${u === '/' ? '1.0' : u === '/apply/' ? '0.9' : '0.7'}</priority></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /thank-you/\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
fs.writeFileSync(path.join(ROOT, 'ads.txt'), `google.com, pub-6620975821265271, DIRECT, f08c47fec0942fa0\n`);
fs.writeFileSync(path.join(ROOT, 'CNAME'), 'hard.money\n');
fs.writeFileSync(path.join(ROOT, '.nojekyll'), '');
console.log(`Built ${out.length} pages.`);
