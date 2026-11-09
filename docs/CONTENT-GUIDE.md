# Content Guide

All personal facts live in `src/data/` (TypeScript, strongly typed). Components never hardcode name, dates, or metrics.

| File | Edit this for… |
|------|----------------|
| `profile.ts` | Name, headline (`Engineering Leader \| …`), email, LinkedIn, GitHub, intro, interests |
| `experience.ts` | Roles (one entry per role), companies, dates, summaries, responsibilities, achievements, tech |
| `achievements.ts` | Title, description, year, org, optional verifiable impact, tags |
| `skills.ts` | Categories + skills with `Professional experience / Working knowledge / Currently exploring` |
| `navigation.ts` | Header/footer links |

**Rules**

1. Never invent employment dates or metrics. Leave `[TODO…]` placeholders until you have the fact.
2. `{ impact }` in achievements stays `undefined` unless the figure is real and verifiable.
3. The `/resume` page renders from the same `experience.ts` / `achievements.ts` / `skills.ts` — so the PDF and the site never disagree.
4. To add a resume PDF: go to `/resume` → Print → Save as PDF → save as `public/resume.pdf`. The Download button then serves it.
5. Multiple resume variants (Leadership / Architecture / AI) are a future phase — they'll be additional renderers over the same data, not duplicate facts.
