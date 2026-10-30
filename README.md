# Hard.Money — The Private Lending Hub

Static, dependency-free website for **hard.money**: hard money / private real-estate lending education, lender directory, calculators, video hub and a lead-generation funnel. Monetized with Google AdSense (`ca-pub-6620975821265271`), lender referral/placement revenue, sponsorships, affiliate links and reader support.

Live: https://hard.money (GitHub Pages, `main` branch, deployed by `.github/workflows/pages.yml`).

## Structure

```
/assets/css/site.css   design system
/assets/js/main.js     nav, forms, multi-step funnel, directory filter, calculators, lazy video
/tools/build.mjs       static site generator (Node ≥ 18, no npm deps)
/tools/content/*.mjs   all content & data: pages, loans, articles, lenders, states, glossary, videos, faqs
ads.txt · robots.txt · sitemap.xml · CNAME · .nojekyll · 404.html
```

## Build

```bash
node tools/build.mjs      # regenerates every page, sitemap, robots, ads.txt, CNAME
```

Edit content in `tools/content/` and push to `main`. The Pages workflow runs the generator and deploys the output; generated HTML is not committed.

## Forms & contact routing

All forms post via AJAX to FormSubmit.co. The destination inbox is **never written in the source**: `assets/js/main.js` assembles it at runtime from an encoded key (`K`). To change the inbox, run
`node -e "console.log(Buffer.from('NEW@EMAIL'.split('').reverse().join('')).toString('base64'))"` and replace `K`.

**One-time activation:** FormSubmit emails the inbox an activation link on the first submission from the live domain. Click it once; every form on the site is then live. Submissions arrive as tables with the page URL and timestamp.

## AdSense

- Script tag is in `<head>` of every content page (excluded on `/apply/`, `/thank-you/`, `/404.html`).
- `ads.txt` is at the root. Auto ads will serve once the site is approved; the labelled `.ad` containers also act as manual slots.
- In AdSense → Sites, add `hard.money`; in Privacy & messaging, enable the EU/UK consent message (Google CMP) — it is injected by the same script, no server needed.
- Exclude `/apply/`, `/thank-you/` and `/contact/` from Auto ads in the AdSense UI (policy: no ads on form-completion/no-content screens).

## Domain

`CNAME` = `hard.money`. At the registrar/DNS: `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and optionally `AAAA` → `2606:50c0:8000::153` … `8003::153`); `www` `CNAME` → `webworksa1.github.io`. Then in repo Settings → Pages set the custom domain and tick *Enforce HTTPS*.

## Monetization surfaces

| Surface | Where | Revenue |
|---|---|---|
| Lead-gen funnel | `/apply/` (5-step), homepage quick check, every CTA | lender referral fees / per-lead |
| Lender directory | `/lenders/`, `/lenders/get-listed/` | $149–$399/mo listings, $75–$250 leads |
| AdSense | all content pages | display RPM |
| Sponsorships | `/advertise/` | sponsored guides, calculators, video, contests |
| Reader support | `/support/` | one-time & monthly tiers |
| Domain/site inquiries | top banner on every page → web.works/contact | — |

## Legal

Not a lender. Disclosures on every page footer; full text at `/disclaimer/` (incl. trademark notice on the descriptive use of “hard money”), `/privacy/`, `/terms/`, `/how-we-make-money/`, `/editorial-policy/`.
