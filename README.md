# Anirban Chatterjee — Professional Identity & AI Career Platform

A clean, static, production-ready professional website: online resume, career achievements, technical skills, projects, and a technical publication platform — with the architectural seams for a future private, AI-powered career workspace.

> **Build an excellent professional website first. Build the AI career OS around it later.**

## Quick start

**Prerequisite:** Node.js 20+ (https://nodejs.org).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site → dist/ (deploy this)
npm run preview  # preview the production build
npm test         # unit tests (Vitest)
npm run test:e2e # smoke tests (Playwright, starts dev server)
```

## What's here

| Section | URL | Source of truth |
|---|---|---|
| Home | `/` | `src/data/profile.ts` |
| About | `/about` | `profile.ts` |
| Experience | `/experience` | `src/data/experience.ts` |
| Achievements | `/achievements` | `src/data/achievements.ts` |
| Skills | `/skills` | `src/data/skills.ts` |
| Projects | `/projects` + `/projects/[slug]` | `src/content/projects/*.mdx` |
| Blog | `/blog` + `/blog/[slug]` + `/blog/tags/[tag]` | `src/content/blog/*.md` |
| Resume (print + PDF) | `/resume` | same data files (no duplicate) |
| Contact | `/contact` | `profile.ts` |
| Placeholder admin | `/admin` (noindex) | `src/pages/admin.astro` |

## Publish content (no CMS)

See **[docs/PUBLISHING.md](docs/PUBLISHING.md)** — add a Markdown file under `src/content/blog/`, set `draft: false`, push. Netlify deploys automatically. Every article gets a permanent URL, Open Graph / LinkedIn preview, canonical URL, reading time, tags, categories, search, and related articles.

## Design

Minimal, editorial, content-first. Light theme by default, optional dark mode (persisted), fully responsive, accessible (semantic HTML, skip link, focus states, reduced-motion), SEO-ready (sitemap, robots, JSON-LD Person + BlogPosting, per-article OG/Twitter cards). No gradients, no skill bars, no invented facts — placeholders are marked `[TODO…]` until you replace them.

## Deployment

Netlify, zero cost, HTTPS automatic. See **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)**. GitHub Pages alternative included.

## Future private workspace

Only interfaces exist — see **[docs/FUTURE-INTEGRATION.md](docs/FUTURE-INTEGRATION.md)** and `src/lib/services/`. No AI agents are implemented in this phase; the public site never depends on them.

## Security

No public posting or registration. GitHub write access controls publishing. No secrets in the repo (see `.env.example`). `/admin` is explicitly not authentication.
