import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;
export type Project = CollectionEntry<'projects'>;

/** Published posts only (draft !== true), sorted newest first. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const all = await getCollection('blog', ({ data }) => data.draft !== true);
  return all.sort((a, b) => +b.data.pubDate - +a.data.pubDate);
}

/** Published posts for a single tag slug. */
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.data.tags.map((t) => t.toLowerCase().replace(/\s+/g, '-')).includes(tag));
}

/** All unique tags with counts. */
export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const posts = await getPublishedPosts();
  const map = new Map<string, number>();
  for (const p of posts) for (const t of p.data.tags) {
    const key = t.toLowerCase().replace(/\s+/g, '-');
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return [...map.entries()].map(([tag, count]) => ({ tag, count })).sort((a, b) => a.tag.localeCompare(b.tag));
}

/** All unique categories with counts. */
export async function getAllCategories(): Promise<{ category: string; count: number }[]> {
  const posts = await getPublishedPosts();
  const map = new Map<string, number>();
  for (const p of posts) {
    const key = p.data.category.toLowerCase().replace(/\s+/g, '-');
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return [...map.entries()].map(([category, count]) => ({ category, count })).sort((a, b) => a.category.localeCompare(b.category));
}

/** Related posts: same category first, then shared tags, then newest. */
export async function getRelatedPosts(current: BlogPost, limit = 3): Promise<BlogPost[]> {
  const posts = await getPublishedPosts();
  const others = posts.filter((p) => p.id !== current.id);
  const score = (p: BlogPost) => {
    let s = 0;
    if (p.data.category === current.data.category) s += 3;
    for (const t of p.data.tags) if (current.data.tags.includes(t)) s += 1;
    return s;
  };
  return others.sort((a, b) => score(b) - score(a) || +b.data.pubDate - +a.data.pubDate).slice(0, limit);
}

/** Featured posts first, then newest. */
export async function getFeaturedPosts(limit = 3): Promise<BlogPost[]> {
  const posts = await getPublishedPosts();
  return posts
    .sort((a, b) => Number(b.data.featured ?? false) - Number(a.data.featured ?? false) || +b.data.pubDate - +a.data.pubDate)
    .slice(0, limit);
}

/** Latest posts strictly by publication date (homepage "Latest writing"). */
export async function getLatestPosts(limit = 3): Promise<BlogPost[]> {
  const posts = await getPublishedPosts();
  return posts.slice(0, limit);
}

/** All projects, sorted by featured then name. */
export async function getAllProjects(): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) => data.draft !== true);
  return all.sort((a, b) => Number(b.data.featured ?? false) - Number(a.data.featured ?? false) || a.data.name.localeCompare(b.data.name));
}
