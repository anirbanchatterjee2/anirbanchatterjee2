# Publishing — Blog, Projects & Content

This is the **only** way content gets published. There is no public registration, posting, or CMS. GitHub write access = publish access.

## 1. Publish a blog article (5 steps)

1. Create `src/content/blog/my-article-slug.md` (or `.mdx`).
2. Copy this frontmatter and fill it in:

```yaml
---
title: My Article Title
description: One-line summary used in cards and LinkedIn previews.
pubDate: 2026-12-01
updatedDate: 2026-12-01
author: Anirban Chatterjee
category: AI Engineering
tags: [RAG, LLMs]
coverImage: /images/blog/my-article.png # optional, 1200x630
featured: false        # true → homepage "Latest articles"
draft: true             # DRAFTS NEVER APPEAR PUBLICLY
seoTitle: My Article Title — Anirban Chatterjee  # optional
seoDescription: ...     # optional
---
```

3. Write Markdown using headings (`##`), code fences (`` ``` ``), tables, images, and blockquotes — all supported, with syntax highlighting at build time.
4. Set `draft: false`, commit, push. Netlify builds & deploys automatically.
5. Verify `/blog/my-article-slug` → click **Copy link** / **Share on LinkedIn**. LinkedIn preview uses `coverImage` + description.

**URL rule:** the file name *is* the permanent URL slug (`my-article-slug` → `/blog/my-article-slug`). Never rename a published file — it breaks external links.

## 2. Drafts

`draft: true` = invisible on the listing, detail page, and sitemap. Keep drafts in the same folder; flip to `false` when ready. No separate branch workflow needed.

## 3. Add a project

Create `src/content/projects/my-project.mdx` with frontmatter: `name`, `description`, `status` (`concept|research|in-development|prototype|completed`), `techStack[]`, optional `repoUrl`, `demoUrl`, `featured`. Write problem / motivation / architecture / challenges in the body.

## 4. Update profile / experience / achievements / skills

Edit the single source: `src/data/profile.ts`, `src/data/experience.ts`, `src/data/achievements.ts`, `src/data/skills.ts`.
The resume page (`/resume`) and homepage regenerate from the same files. Never maintain a second copy of facts.

## 5. Local preview

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Future admin interface

A private `/admin` web editor (Markdown editor, preview, draft management) is planned. It will read/write these same files through the `ContentManagementService` interface — see `docs/FUTURE-INTEGRATION.md`. It will not change the file format.
