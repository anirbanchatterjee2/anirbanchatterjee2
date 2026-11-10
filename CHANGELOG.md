# Changelog

## [Unreleased] — Phases 0–9: Audit & Redesign

### Phase 0: Audit (no code changes)
- `docs/AUDIT.md` — full route-by-route audit of all 17 built pages
- `docs/content-todo.md` — registry of all `TODO(owner)` placeholders

### Phase 1: Positioning & Hero
- Replaced three-title tagline with single identity line: `VP of Engineering, AML & Risk Technology`
- Added one-sentence value proposition: "I lead large global engineering organisations building regulated, high-throughput platforms, and apply AI where it measurably reduces cost and risk."
- Proof strip: 4 stats with basis footnotes (18+ years, $25M+ impact, 50+ engineers, 70% deployment velocity)
- CTA hierarchy: primary "Download resume", secondary "Get in touch"
- Added "Open to:" statement with roles, location/mobility, availability

### Phase 2: Experience
- Strict reverse-chronological order, roles nested under employer (Citi, Qualcomm, L&T Infotech, TCS, Capgemini, Cognizant)
- Added scope lines per role (TODO(owner) where unknown)
- S→A→R outcome bullets with baseline and metric for every role
- People-leadership line per role (hiring, managing managers, retention)
- Neutral gap markers for chronology overlaps (flagged in AUDIT.md)

### Phase 3: Achievements
- $25M+ as roll-up headline with explicit breakdown ($20M + $4M + $1M)
- Removed "verified" and "documented" language
- Added `measurementBasis` per achievement (TODO(owner) where unknown)
- Added "Leadership Outcomes" group (org design, talent, regulator/audit)

### Phase 4: AI Credibility
- Added "RAG in production screening" case study entry in achievements
- Added "AI engineering leadership" section (evaluation, model-risk, governance, adoption playbook)
- Re-framed projects section as "Labs & research" with honest status badges
- Removed defensive "never presented as production systems" line

### Phase 5: Skills
- Replaced proficiency-label matrix with 6 capability themes, each with outcome statement
- Added compact "Core stack" and "Currently building with" lists
- Added ATS-friendly plain-text keyword list
- Removed "Currently exploring"/"Working knowledge"/"Professional experience" labels

### Phase 6: Writing
- Removed "Automatically fetched from the content repository" copy
- Blog section hidden on homepage when <3 posts (currently 1 published)
- "Writing" nav item hidden from header when <3 posts
- Scaffolded 3 draft post stubs (high-TPS screening, RAG in regulated workflows, leading managers across time zones)

### Phase 7: Contact & Trust
- Contact email configurable via `profile.email` (TODO(owner) placeholder until owner supplies custom domain)
- Netlify Forms contact form with honeypot and success state
- Location/time zone in profile (`Pune, India · IST (UTC+5:30)`)

### Phase 8: Design & UX
- Reduced nav to 6 items (Work, Impact, AI, Writing, About, Contact) + Resume button
- Removed duplicate Resume link from header
- Theme toggle: aria-label + visible focus state
- WCAG AA contrast review, `prefers-reduced-motion` respected
- Print stylesheet for `/resume`

### Phase 9: Technical, SEO, A11Y, Performance
- `<title>` ≤60 chars on all routes
- Unique title/description per route
- JSON-LD: Person (homepage), WebSite (all pages), BlogPosting (articles), BreadcrumbList (all pages)
- Per-page canonical URLs, `og:type` = article for blog posts
- `sitemap-index.xml` (excludes `/admin`), `robots.txt` (disallows `/admin`)
- Locale: `en-GB` consistently across `seoDefaults`, `astro.config.mjs`, `<html lang>`
- Build-time TODO check: fails `npm run build` if `TODO(owner)` renders in HTML
- 56 TODO(owner) placeholders stripped from built HTML (source files retain them for owner resolution)
- 7 Vitest unit tests passing

### Remaining (owner action required)
- `public/resume.pdf` — generate and deploy (graceful fallback already in place on /resume)
- `public/images/og-default.png` — 1200×630 OG image (currently missing, all pages fall back to it)
- Replace `TODO(owner)` email with custom-domain address
- Confirm chronology overlaps and $25M+ breakdown in docs/AUDIT.md
