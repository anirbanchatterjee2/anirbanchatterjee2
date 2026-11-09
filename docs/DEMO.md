# Demo — 5-Minute Walkthrough

Run locally:
```powershell
$env:PATH="C:\Program Files\nodejs;"+$env:PATH; npm run dev   # http://localhost:4321
# or preview the production build: npm run preview
```

## 0:00–0:45 — Homepage (30-second test)
Open `/`. Point out: headline `Engineering Leader | Software Architect | AI & Agentic Systems Enthusiast`, 18+ years since 2008, VP Engineering designation, highlights (`$25M+`, `1000+ TPS`, `50+ engineers`), your real LinkedIn (`linkedin.com/in/anirban-chatterjee-42151a19/`), GitHub, and `hereiam.1987@gmail.com`. Toggle dark mode (top-right ◐).

## 0:45–2:00 — Credibility pages
- `/experience` — Citi VP/AVP → L&T → Qualcomm → Cognizant → Capgemini → TCS, with verified impact.
- `/achievements` — `$25M+`, `$20M`, `$4M+`, `70%`, Pride/Qualstar/Diamond Qualstar awards. (Add `image` in `src/data/achievements.ts` → `public/images/achievements/` for certificate photos.)
- `/skills` — 6 domains, honest `Professional / Working / Exploring` tags (no percentages).

## 2:00–3:00 — Projects (real repos)
- `/projects` → Engineering Diagram Intelligence → GitHub `pearl_engineer` (in-development).
- Agent Minimiser / Cold Coffee → GitHub `coldcoffee` (concept). Show honest statuses.

## 3:00–4:00 — Blog (canonical + LinkedIn)
- `/blog` — search + category filter. Open `understanding-rag-architectures` — verify headings/code/tables render, reading time, related articles.
- Click **Copy link** (clipboard) and **Share on LinkedIn**. Explain OG preview uses `coverImage` + description; no auto-posting. Draft `building-agentic-ai-workflows` is absent (set `draft: false` to publish).

## 4:00–5:00 — Resume + close
- `/resume` → **Print / Save as PDF** (print CSS) + **Download PDF** (after saving `public/resume.pdf`). Same data as site — no duplicate facts.
- Close: Astro + Netlify = $0 HTTPS hosting; publish by adding a Markdown file in `src/content/blog/` (see `docs/PUBLISHING.md`); `/admin` is only a `noindex` placeholder — future auth/AI workspace is interface-only (`src/lib/services/`).
