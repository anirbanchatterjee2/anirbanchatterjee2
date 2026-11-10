# Content TODO Log — docs/content-todo.md

**Purpose:** Single registry of all `TODO(owner)` placeholders required by Hard Rule 1.  
**Rule:** No `TODO(owner)` string may render in production HTML. A build-time check must fail `npm run build` if any such string is emitted. Placeholders in source data files are acceptable only until the owner supplies the real value.

---

## Unresolved placeholders in source data (rendering in HTML)

| # | File | Field / context | Current placeholder | Needed from owner |
|---|------|-----------------|---------------------|-------------------|
| 1 | `src/data/experience.ts` | `education[0].year` | `[TODO: Graduation year]` | Real graduation year (B.Tech/B.E., WBUT Kolkata) |
| 2 | `src/data/experience.ts` | `certifications[0].year` | `[TODO: Year]` | Sun Certified Java Programmer 5 certification year |
| 3 | `src/data/achievements.ts` | `achievements[12].year` (SCJP 5) | `[TODO: Year]` | Same as #2 — deduplicate |
| 4 | `src/data/achievements.ts` | `achievements[13].year` (AIP Anchor Award) | `[TODO: Year]` | AIP Anchor Award year |

> Note: Items #2 and #3 refer to the same certification. They should share one value.

---

## Placeholders to be added (not yet in source)

These are required by the redesign phases but do not yet exist as `TODO(owner)` strings in code. Add them as the phases are implemented.

| # | Phase | File | Field / context | Needed from owner |
|---|-------|------|-----------------|-------------------|
| 5 | Phase 1 | `src/data/profile.ts` | `metrics[*]` basis footnote | Basis of measurement for each of the 4 stats (18+ years, $25M+ impact, org size/engineers led, delivery improvement) |
| 6 | Phase 1 | `src/data/profile.ts` | `openTo` — roles, location, mobility, availability | "Open to:" statement for hero |
| 7 | Phase 2 | `src/data/experience.ts` | `scope` per role (team size, geographies, budget/portfolio, reporting line) | Scope line for each of 7 roles; mark any real gap neutrally |
| 8 | Phase 2 | `src/data/experience.ts` | S→A→R bullets with baseline | Outcome bullets with baseline and metric for each role |
| 9 | Phase 3 | `src/data/achievements.ts` | `$25M+` explicit breakdown ($20M + $4M + $1M) | Confirm component attribution |
| 10 | Phase 3 | `src/data/achievements.ts` | "How this was measured" line per achievement | Measurement basis for each metric claim |
| 11 | Phase 3 | `src/data/achievements.ts` | Leadership outcomes group items | Org design, delivery governance, talent, regulator/audit outcomes |
| 12 | Phase 4 | `src/content/projects/` | RAG in production screening case study | Problem, architecture, evaluation, guardrails, outcome |
| 13 | Phase 5 | `src/data/skills.ts` | Capability themes with outcome statements | 5–6 themes, each with one-line outcome |
| 14 | Phase 5 | `src/data/skills.ts` | Core stack + "Currently building with" lists | Compact stack lists |
| 15 | Phase 5 | `src/data/skills.ts` or `/resume` | ATS-friendly plain-text keyword list | Keyword inventory |
| 16 | Phase 6 | `src/content/blog/` | 3 draft post stubs | Outlines: high-TPS screening lessons; RAG in regulated workflows; leading managers across time zones |
| 17 | Phase 7 | `src/data/profile.ts` or `.env` | Configurable contact email | Owner-supplied custom-domain address |
| 18 | Phase 7 | — | Recommendations/testimonials | Testimonial content (hidden if empty) |
| 19 | Phase 7 | `public/images/` | Headshot asset | Headshot image with alt text (hidden if no asset) |

---

## How to resolve

1. Edit the source file listed.
2. Replace `[TODO: ...]` with the real value, or add a `TODO(owner): <description>` placeholder.
3. If using `TODO(owner): ...`, ensure the build-time strip check removes it before HTML emission.
4. Update this log: mark the row as resolved with the value or owner confirmation.

---

## Build-time enforcement (to be implemented in Phase 0 follow-up)

Add a script to `package.json` or an Astro integration hook that scans `dist/**/*.html` for `TODO(owner)` and fails the build if found. This must run before any deploy.
