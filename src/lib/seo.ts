import { profile } from '../data/profile';

/** Absolute canonical URL for a path. */
export function canonicalUrl(path: string): string {
  // SITE_URL is injected via astro.config at build time; mirror it here by reading env in client builds.
  const base = import.meta.env.PUBLIC_SITE_URL ?? 'https://anirban-chatterjee.netlify.app';
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

/** Default 1200x630 OG image. Per-article coverImage overrides this. */
export const DEFAULT_OG_IMAGE = '/images/og-default.png';

export interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  publishedTime?: string;
  updatedTime?: string;
  author?: string;
  twitterHandle?: string;
}

/** JSON-LD Person schema for the homepage. */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.headline,
    url: canonicalUrl('/'),
    email: profile.email,
    sameAs: [profile.linkedin, profile.github],
    description: profile.shortIntro,
  };
}

/** JSON-LD WebSite schema for the homepage. */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: profile.name,
    url: canonicalUrl('/'),
    potentialAction: {
      '@type': 'SearchAction',
      target: canonicalUrl('/blog') + '?q={search_string}',
      'query-input': 'required name=search_string',
    },
  };
}

/** JSON-LD BlogPosting schema for an article. */
export function blogPostingJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  pubDate: Date;
  updatedDate: Date;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url: canonicalUrl(opts.path),
    datePublished: opts.pubDate.toISOString(),
    dateModified: opts.updatedDate.toISOString(),
    author: { '@type': 'Person', name: opts.author },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl(opts.path) },
    image: opts.image ? canonicalUrl(opts.image) : canonicalUrl(DEFAULT_OG_IMAGE),
  };
}

/** JSON-LD BreadcrumbList for any page. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export interface TocEntry {
  depth: number;
  text: string;
  id: string;
}

const slugId = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');

/** Extract h2/h3 headings from Markdown body for the table of contents. */
export function buildToc(markdownBody: string): TocEntry[] {
  const entries: TocEntry[] = [];
  const seen = new Set<string>();
  for (const line of markdownBody.split('\n')) {
    const m = line.match(/^(#{2,3})\s+(.+?)\s*#*\s*$/);
    if (!m) continue;
    const text = m[2].trim();
    if (!text) continue;
    let id = slugId(text);
    if (seen.has(id)) {
      let n = 2;
      while (seen.has(`${id}-${n}`)) n++;
      id = `${id}-${n}`;
    }
    seen.add(id);
    entries.push({ depth: m[1].length, text, id });
  }
  return entries;
}
