import type { APIRoute } from 'astro';
import { canonicalUrl } from '../lib/seo';

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /
Disallow: /admin

Sitemap: ${canonicalUrl('/sitemap-index.xml')}
`;
  return new Response(body, { status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
