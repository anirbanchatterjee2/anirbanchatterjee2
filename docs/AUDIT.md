# Phase 0 Audit — docs/AUDIT.md

**Audit scope:** All 17 built routes (home, about, experience, achievements, skills, projects/*, blog/*, resume, contact, 404, admin).  
**Method:** Static analysis of source files + built `dist/` HTML output. No browser-based axe/Lighthouse/screenshot tooling available in this environment; those checks are flagged as "needs verification" and must be run before production deploy.

## Resolution Status (as of redesign implementation)

| # | Issue | Status | Resolution |
|---|-------|--------|------------|
| 1 | `[TODO: Year]` placeholders render in HTML | ✅ Fixed | Converted to `TODO(owner):` in source; build strips them from HTML |
| 2 | `/resume.pdf` broken link | ⚠️ Owner | Graceful fallback on /resume; owner must deploy `public/resume.pdf` |
| 3 | Homepage title 107 chars | ✅ Fixed | Shortened to `Anirban Chatterjee — VP Engineering, AML and Risk Technology` (59 chars) |
| 4 | Project titles 62–65 chars | ✅ Fixed | Title cap at 60 chars in BaseHead |
| 5 | "verified outcomes" phrase | ✅ Fixed | Removed from all rendered copy |
| 6 | "documented savings" phrase | ✅ Fixed | Removed from all rendered copy |
| 7 | "never presented as production" phrase | ✅ Fixed | Removed; replaced with honest status badges |
| 8 | "Automatically fetched" phrase | ✅ Fixed | Removed from homepage/blog |
| 9 | Locale `en_US` vs British spellings | ✅ Fixed | Set to `en-GB` everywhere |
| 10 | Build-time TODO check missing | ✅ Fixed | `scripts/check-todos.mjs` fails build if `TODO(owner)` renders |
| 11 | Blog shown with <3 posts | ✅ Fixed | Hidden from homepage + header nav when <3 posts |
| 12 | Nav: 8 items + duplicate Resume | ✅ Fixed | Reduced to 6 items + single Resume button |
| 13 | Theme toggle focus state | ✅ Fixed | Added visible focus + aria-label |
| 14 | WebSite JSON-LD missing | ✅ Fixed | Added to BaseLayout (all pages) |
| 15 | Person JSON-LD only on homepage | ✅ Present | On homepage via `personJsonLd()` |
| 16 | Chronology overlaps | ⚠️ Owner | Neutral gap markers added; flagged for owner confirmation |
| 17 | $25M+ breakdown conflict | ⚠️ Owner | Explicit breakdown ($20M + $4M + $1M); flagged for owner confirmation |
| 18 | Missing OG image file | ⚠️ Owner | `/images/og-default.png` referenced but not present |
| 19 | axe/Lighthouse/screenshot checks | ⚠️ Needs verification | No browser tooling available; run before deploy |

---

## 1. Routes Crawled

| Route | Status | Notes |
|-------|--------|-------|
| `/` | 200 | Homepage — full editorial layout, 8 sections |
| `/about` | 200 | Narrative biography |
| `/experience` | 200 | Chronological timeline |
| `/achievements` | 200 | Grouped achievement library |
| `/skills` | 200 | 6 capability groups |
| `/projects` | 200 | Project listing |
| `/projects/engineering-diagram-intelligence` | 200 | Case study |
| `/projects/agent-minimiser-cold-coffee-brewing-engine` | 200 | Case study |
| `/blog` | 200 | Listing + search + filter |
| `/blog/understanding-rag-architectures` | 200 | Single article (1 published) |
| `/blog/tags/llms` | 200 | Tag archive |
| `/blog/tags/rag` | 200 | Tag archive |
| `/blog/tags/vector-databases` | 200 | Tag archive |
| `/resume` | 200 | Resume page + PDF download + fallback |
| `/contact` | 200 | Contact section |
| `/404` | 200 | Error page |
| `/admin` | 200 | `noindex` placeholder |
| `/robots.txt` | 200 | Disallows `/admin` |
| `/sitemap-index.xml` | 200 | Excludes `/admin` |

---

## 2. Critical Issues (must resolve before production)

### 2.1 Unresolved placeholders render in production HTML

**[TODO]** strings are emitted to the browser on `/achievements` and `/resume`:

- `achievements/index.html` — `[TODO: Year]` appears twice (Sun Certified Java Programmer 5; AIP Anchor Award)
- `resume/index.html` — `[TODO]` appears 4 times (education graduation year, certification year, and education/certification rows)

These violate Hard Rule 1: `TODO(owner)` strings must never render on production build.  
**Action:** Add a build-time check that fails `npm run build` if any `TODO(owner)` string is present in built HTML. Replace `[TODO: Year]` with either a real year or a `TODO(owner): <needed>` placeholder that is stripped at build time.

### 2.2 Broken link: `/resume.pdf`

`/resume.pdf` is linked from `/`, `/resume`, `/contact`, and the header but the file does not exist in `dist/`. The resume page has a client-side HEAD-fetch fallback that hides the link and shows a notice — this works but is a suboptimal recruiter experience.  
**Action:** Either add `public/resume.pdf` (text-based, ATS-parseable, named `Anirban-Chatterjee-Resume.pdf`) or remove the download link and rely on Print → Save as PDF.

### 2.3 Title length exceeds 60 characters

| Route | Title | Length |
|-------|-------|--------|
| `/` | `Anirban Chatterjee — Engineering Executive | Technology Strategist | AI &amp; Distributed Systems Architect` | 107 chars |
| `/projects/agent-minimiser-cold-coffee-brewing-engine` | `Agent Minimiser — Cold Coffee Brewing Engine — Anirban Chatterjee` | 65 chars |
| `/projects/engineering-diagram-intelligence` | `Engineering Diagram Intelligence Platform — Anirban Chatterjee` | 62 chars |

Hard Rule 9: `<title>` must be ≤60 chars.  
**Action:** Shorten homepage title to the primary identity line only (e.g. `Anirban Chatterjee — VP Engineering, AML & Risk Technology`). Shorten project titles or drop the site suffix on project pages.

### 2.4 Problematic / unverified phrases in rendered HTML

| Phrase | Location | Issue |
|--------|----------|-------|
| `verified outcomes` | `/`, `/achievements` | "verified" implies third-party validation; no basis supplied |
| `documented savings` | `/achievements`, `/resume` | "documented" implies evidence on file; no basis supplied |
| `never presented as production` | `/`, both project case studies | Defensive language per Phase 4 — should be replaced with honest status badges |
| `Automatically fetched from the content repository` | `/` | Per Phase 6, this copy should be removed |

**Action:** Remove or rephrase all four phrases. Replace with factual, basis-attributed language.

### 2.5 Locale inconsistency

`astro.config.mjs` / `seoDefaults` set `locale: 'en_US'`, but the copy uses British spellings throughout: `modernising`, `organisations`, `standardised`, `neighbourhood`, `labelled`, `cheque` (if any). Hard Rule 9 requires one consistent locale.  
**Action:** Confirm en-GB or en-IN, update `seoDefaults.locale` and `astro.config.mjs` i18n, and ensure `<html lang>` matches (currently `en`).

---

## 3. Content Inconsistencies & Numeric Conflicts

### 3.1 Years of experience

| Source | Value | Location |
|--------|-------|----------|
| `profile.shortIntro` | "18+ years (since 2008, 8+ in the U.S.)" | `/about`, `/resume` |
| `profile.heroIntro` | "18+ years building enterprise technology..." | `/` hero |
| `profile.careerHighlights` | "18+ years (since 2008) · 8+ in the U.S." | `/` metrics |
| `experience.ts` first role start | 2008 | `/experience` |

These are consistent (18+ since 2008 = 2026). **No conflict**, but the "8+ in the U.S." figure should be confirmed against the resume.

### 3.2 Team size

| Source | Value | Location |
|--------|-------|----------|
| `experience.ts` Citi VP responsibilities | "50+ engineers" | `/experience` |
| `profile.metrics` | "50+ Engineers Led" | `/` metrics |
| `experience.ts` Citi VP summary | "managing managers across geographies and vendors" | `/experience` |
| `experience.ts` L&T Infotech | "Led a 10-member team across the globe" | `/experience` |
| `experience.ts` Qualcomm | "Led a 5-member team" | `/experience` |

**Consistent.** The 50+ figure appears only at Citi VP; earlier roles list smaller teams. This is fine as long as the 50+ is scoped to the VP role (it is).

### 3.3 Business impact figures

| Source | Value | Location |
|--------|-------|----------|
| `profile.metrics` | "$25M+ Enterprise Business Impact" | `/` metrics |
| `achievements.ts` selected #1 | "$25M+" roll-up across Citi/L&T/TCS | `/achievements` |
| `achievements.ts` selected #2 | "$20M · 1000+ TPS" (name screening) | `/achievements` |
| `achievements.ts` selected #3 | "$4M+" (Citi AVP open-source) | `/achievements` |
| `achievements.ts` non-selected #6 | "$1M+" (TCS HCM migration) | `/achievements` |

**Conflict risk:** $20M + $4M + $1M = $25M. The roll-up is arithmetically consistent **if** these are the three components. However, the `$25M+` achievement says "across Citi AML/risk, L&T Infotech, and TCS" while the breakdown attributes $20M to L&T, $4M to Citi, $1M to TCS. The org attribution in the roll-up title ("Citi Bank / L&T Infotech / TCS") differs slightly from the component breakdown.  
**Action:** List in docs/AUDIT.md for owner confirmation. Per Hard Rule 2, do not pick one side — flag for resolution.

### 3.4 Deployment velocity

| Source | Value | Location |
|--------|-------|----------|
| `achievements.ts` selected #4 | "70% deployment velocity ↑" | `/achievements` |
| `skills.ts` DevSecOps group | "CI/CD Standardisation (+70% Velocity)" | `/skills` |

**Consistent** — same figure, same basis (Citi VP, 2023–present). No baseline is provided for the 70% (from what, to what?). Per Phase 3, a baseline/measurement line is needed.

### 3.5 Chronology gaps and overlaps

| Role | Dates | Location | Potential issue |
|------|-------|----------|-----------------|
| TCS IT Analyst / Project Lead | 2008 — 2015 | `/experience` | — |
| Capgemini Technical Lead | 2015 | `/experience` | Overlaps with TCS end date (2015) |
| Cognizant Senior Associate / Technical Lead | 2016 | `/experience` | Overlaps with Qualcomm start (2016) |
| Qualcomm Staff Programmer / Solutions Architect | 2016 — 2018 | `/experience` | Overlaps with Cognizant (2016) |
| L&T Infotech Technical Architect | 2018 — 2019 | `/experience` | Overlaps with Qualcomm end (2018) |
| Citi AVP Risk Technology | 2019 — 2022 | `/experience` | — |
| Citi VP AML & Risk Technology | 2023 — Present | `/experience` | Gap: 2022 → 2023 unaccounted |

**Confirmed issues:**
- TCS 2008–2015 and Capgemini 2015 overlap (same year).
- Cognizant 2016 and Qualcomm 2016–2018 overlap.
- Qualcomm 2016–2018 and L&T 2018–2019 overlap/touch at 2018.
- Citi AVP 2019–2022 and Citi VP 2023–Present leave a 1-year gap (2022→2023).

These may reflect concurrent roles (e.g., onsite/offshore) or resume rounding, but they are unexplained in the current copy.  
**Action:** Flag in docs/AUDIT.md for owner review. Add neutral gap markers where real.

---

## 4. Broken Links

Only one broken internal link: `/resume.pdf` (referenced from `/`, `/resume`, `/contact`, and header). All other internal hrefs resolve (19 unique, all 200).

External links (not crawlable from this environment, but visible in source):
- `https://www.linkedin.com/in/anirban-chatterjee-42151a19/` — LinkedIn
- `https://github.com/anirbanchatterjee2` — GitHub
- `https://github.com/anirbanchatterjee2/pearl_engineer` — Engineering Diagram Intelligence repo
- `https://github.com/anirbanchatterjee2/coldcoffee` — Agent Minimiser repo

**Action:** Verify external links manually before deploy. Add `public/resume.pdf` or remove download link.

---

## 5. Claims Lacking Basis

| Claim | Location | Status |
|-------|----------|--------|
| "verified outcomes" | `/`, `/achievements` | No verification basis supplied |
| "documented savings" ($20M) | `/achievements`, `/resume` | No documentation referenced |
| "~5% global selection rate" (Citi Engineer Excellence) | `/experience`, `/achievements` | Specific percentage; source not cited |
| "70% improvement in deployment velocity" | `/experience`, `/achievements`, `/skills` | No baseline or measurement period |
| "1000+ TPS" | Multiple | Consistent across sources; basis not cited |
| "30–40% infra cost reduction" | `/achievements`, `/experience` | Range given; no baseline |
| "90% efficiency ↑" | `/achievements`, `/experience` | Specific percentage; no baseline |

**Action:** Add "how this was measured" lines per achievement (Phase 3). Remove "verified" unless owner supplies basis.

---

## 6. Confidentiality-Risk Wording

| Phrase | Location | Risk |
|--------|----------|------|
| `hereiam.1987@gmail.com` | `/`, `/resume`, `/contact`, header | Personal email published publicly — owner must confirm this is intentional |
| `https://github.com/anirbanchatterjee2/pearl_engineer` | `/projects` case study | Repo may contain employer-confidential code — flag for review |
| `https://github.com/anirbanchatterjee2/coldcoffee` | `/projects` case study | Same |
| Specific employer names (Citi, Qualcomm, L&T Infotech, TCS, Capgemini, Cognizant) | Throughout | Public resume data; low risk but confirm owner is comfortable |
| Internal system names (Activiti, Oracle Workflow Builder, Talend, Drools, IBM MQ, Solace) | `/experience`, `/skills` | Technical stack details; generally safe |

**Action:** Per Hard Rule 4, flag these in docs/AUDIT.md for owner review rather than deleting. The personal Gmail is the highest-risk item — owner will supply a custom-domain address (Phase 7).

---

## 7. Accessibility (axe) — Needs Verification

No browser/axe available in this environment. Static review of source:

**Likely passes:**
- Skip link present (`#main`)
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- `aria-label` on theme toggle
- `aria-current` on active nav links
- `aria-hidden` on decorative separators
- `role="status"` on copy-feedback
- Focus-visible styles defined in CSS

**Needs verification (axe):**
- Color contrast: `#4b5563` (text-secondary) on `#FAF9F7` (bg) — may fail WCAG AA for normal text (4.5:1 required). Accent `#142E52` on warm white passes easily (~15.9:1).
- `color-mix()` CSS function in header — may not be supported in older browsers (Safari <15, older Chrome)
- Theme toggle visible focus state
- `prefers-reduced-motion` respected (defined in CSS)
- Keyboard navigation through all interactive elements
- Skip link visible on focus

**Action:** Run axe + Lighthouse before deploy.

---

## 8. Lighthouse Scores — Needs Verification

No Lighthouse available in this environment. Static factors:

**Likely positive:**
- Static HTML, minimal JS (only clipboard + theme toggle + resume fallback)
- No render-blocking resources beyond inline CSS
- Small CSS (~10 KB)
- Images: none in HTML (no cover images, no headshot, no OG image file exists)
- Sitemap + robots.txt present

**Likely negative:**
- No per-page OG image (all use `/images/og-default.png` which doesn't exist)
- No `width`/`height` on images in project cards (responsive images not optimized)
- Web fonts not loaded (system fonts used — good for performance)
- No preload/preconnect hints

**Action:** Run Lighthouse mobile + desktop before deploy. Target ≥95 all categories.

---

## 9. Metadata & SEO Problems

### 9.1 Title length
- Homepage: 107 chars (Hard Rule: ≤60)
- Project pages: 62–65 chars

### 9.2 Missing JSON-LD
- Only `/` has `Person` schema
- Only `/blog/understanding-rag-architectures` has `BlogPosting` + `BreadcrumbList`
- All other routes lack structured data (no `Person`, `WebSite`, or `BreadcrumbList`)

### 9.3 OG images
- All 17 pages use the same default: `https://anirban-chatterjee.netlify.app/images/og-default.png`
- This file does not exist in `public/images/` — LinkedIn previews will show a broken/missing image

### 9.4 Locale
- `seoDefaults.locale = 'en_US'` but copy uses British spellings
- `<html lang="en">` — should match chosen locale (en-GB or en-IN)

### 9.5 Blog tag pages
- Titles render as `#Llms`, `#Rag`, `#Vector Databases` — incorrect capitalization, awkward format
- Descriptions are thin ("Articles tagged Llms.")

### 9.6 Only 1 published blog post
- Per Phase 6: if fewer than 3 posts, remove Blog from main nav and homepage; keep route live; show section again automatically at 3+

---

## 10. Design & UX Notes (Phase 8)

### 10.1 Navigation
- 8 items in header: About, Experience, Achievements, Skills, Projects, Blog, Resume, Contact + Resume CTA button
- Duplicate Resume link (nav + CTA button)
- Per Phase 8: reduce to 5–6 items + one Resume button (e.g. Work, Impact, AI, Writing, About, Contact)

### 10.2 Theme toggle
- Has `aria-label="Toggle dark mode"` ✅
- Uses `◐` character (may render inconsistently across OS/browsers)
- Visible focus state not explicitly defined beyond global `focus-visible` rule

### 10.3 Type scale
- Defined informally via inline styles, not a CSS scale
- Hero h1: 44px; section h2: 26px; subsection h3: 19–22px; body: 16.5–17.5px

### 10.4 Spacing
- Section padding: 36–48px vertical
- Container max-width: 760–832px (inconsistent across pages)
- Border radius: 6px (consistent via `--radius`)

### 10.5 Cards
- Project cards: border-bottom divider, no border-radius on card itself
- Article cards: border + border-radius
- Inconsistent card styling across sections

### 10.6 Mobile responsiveness
- Uses `grid-template-columns: repeat(auto-fit, minmax(...))` — responsive but untested at 375/768px
- Career timeline uses `grid-template-columns: 140px 1fr` — may need single-column fallback on mobile

**Action:** Needs visual verification at 375, 768, 1280, 1920 px in light + dark mode.

---

## 11. Content Gaps for Future Phases

| Phase | Gap | Source |
|-------|-----|--------|
| Phase 1 | Proof-strip footnotes/tooltips for metric basis | `profile.metrics` |
| Phase 1 | "Open to:" statement with location/mobility/availability | `profile.targetRoles` exists; needs location/mobility/availability fields |
| Phase 2 | Scope lines per role (team size, geographies, budget, reporting line) | `experience.ts` has some; needs scope field |
| Phase 2 | S→A→R outcome bullets with baseline | `experience.ts` achievements are plain text |
| Phase 2 | People-leadership line per role | Partial (hiring mentioned in some summaries) |
| Phase 3 | $25M+ roll-up with explicit breakdown ($20M + $4M + $1M) | `achievements.ts` has components but not explicit breakdown |
| Phase 3 | "How this was measured" per item | Missing |
| Phase 3 | Leadership outcomes group | Missing |
| Phase 4 | RAG in production screening case study | Missing entirely |
| Phase 4 | AI engineering leadership section | Missing entirely |
| Phase 5 | Capability themes with outcome statements | `skills.ts` uses proficiency labels (to be replaced) |
| Phase 5 | Core stack + "Currently building with" lists | Missing |
| Phase 5 | ATS-friendly plain-text keyword list | Missing |
| Phase 6 | Blog post stubs (3 drafts) | Missing |
| Phase 7 | Configurable email (env/data value) | Hardcoded `hereiam.1987@gmail.com` |
| Phase 7 | Netlify Forms contact form | Missing |
| Phase 7 | Location/time zone | Partial (`Pune, India · 8+ years in the U.S.`) |
| Phase 7 | Recommendations/testimonials | Missing |
| Phase 7 | Headshot slot | Missing |
| Phase 8 | Print stylesheet for /resume | Partial (`@media print` in global.css) |
| Phase 8 | Consistent type/spacing/card scale | Missing |
| Phase 9 | JSON-LD WebSite schema | Missing |
| Phase 9 | Per-page OG images | Missing |
| Phase 9 | Analytics event for resume downloads | Missing |

---

## 12. Immediate Action Items (pre-Phase 1)

1. **Add build-time TODO check** — fail `npm run build` if `TODO(owner)` appears in built HTML
2. **Add `public/resume.pdf`** or remove the download link
3. **Shorten homepage title** to ≤60 chars
4. **Remove "verified outcomes", "documented savings", "never presented as production", "Automatically fetched"** from rendered copy
5. **Resolve locale** (en-GB or en-IN) consistently across `seoDefaults`, `astro.config.mjs`, `<html lang>`
6. **Add `[TODO: Year]` to `docs/content-todo.md`** (education graduation year, SCJP 5 year, AIP year)
7. **Log numeric conflicts** ($25M+ breakdown, chronology overlaps) in this AUDIT.md for owner resolution

---

## 13. docs/content-todo.md (stub)

Created as part of this audit. Contains:

| File | Field | Placeholder | Needed |
|------|-------|-------------|--------|
| `src/data/experience.ts` | `education[0].year` | `[TODO: Graduation year]` | Real graduation year |
| `src/data/experience.ts` | `certifications[0].year` | `[TODO: Year]` | SCJP 5 certification year |
| `src/data/achievements.ts` | `achievements[12].year` | `[TODO: Year]` | SCJP 5 year (duplicate) |
| `src/data/achievements.ts` | `achievements[13].year` | `[TODO: Year]` | AIP Anchor Award year |
| `profile.ts` | `metrics[*]` | — | Footnote/tooltip basis for each stat |
| `profile.ts` | — | — | "Open to:" location/mobility/availability |

---

## 14. Environment Notes

- Node v26.13.0, npm 11.20.0
- Build succeeds in ~5.5s, 17 static pages
- No server-side dependencies; Netlify-compatible
- `vitest` unit tests: 7 passing
- No `axe` or `lighthouse` configured — must be added for Phase 9 verification
