# Deployment — Netlify (Zero-Cost Static)

The site is fully static. Hosting + HTTPS + CDN are free on Netlify's tier.

## One-time setup

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git** → select this repo.
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version is pinned via `netlify.toml` (`NODE_VERSION = "20"`).
3. Deploy. Netlify gives you an HTTPS URL (e.g. `https://anirbanchatterjee.netlify.app`).

## Environment variables

No secrets needed. Optional:

- `PUBLIC_SITE_URL` — your canonical domain, without trailing slash. Set it in Netlify → Site settings → Environment variables. It's used for canonical URLs, sitemap, and OG tags. (See `astro.config.mjs` and `.env.example`.)

## Custom domain + HTTPS

Netlify → Site settings → Domain management → Add custom domain → automatic HTTPS. Point your DNS CNAME to the Netlify address; Netlify provisions the certificate.

## GitHub Pages (alternative, also free)

If you prefer GitHub Pages: build with `npm run build`, then `npx astro add @astrojs/gh-pages`-style publish of `dist/`, or use the Netlify flow above. Netlify is recommended because it supports preview deploys and the future private `/admin` boundary.

## Verify after deploy

- `/` renders the homepage, `/blog`, `/about`, `/resume` all return 200.
- Every `/blog/[slug]` shows a LinkedIn preview (test with https://www.linkedin.com/post-inspector/ after deploy).
- `/sitemap-index.xml` and `/robots.txt` load; `/admin` is `noindex`.

## Rollbacks

Netlify keeps deploy history — roll back from Deploys → any previous deploy → Publish deploy. Git history is the content history.
