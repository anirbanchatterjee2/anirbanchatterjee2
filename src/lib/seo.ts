import { profile } from '../data/profile';

/** Absolute canonical URL for a path. */
export function canonicalUrl(path: string): string {
  // SITE_URL is injected via astro.config at build time; mirror it here by reading env in client builds.
  const base = import.meta.env.PUBLIC_SITE_URL ?? 'https://anirbanchatterjee.netlify.app';
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
    jobTitle: profile.designation,
    url: canonicalUrl('/'),
    email: profile.email,
    sameAs: [profile.linkedin, profile.github],
    description: profile.shortIntro,
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
