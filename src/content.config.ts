import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Preferred publication categories (free-form in frontmatter; use these for consistency). */
export const BLOG_CATEGORIES = [
  'AI Engineering',
  'Agentic AI',
  'Software Architecture',
  'Distributed Systems',
  'Cloud Engineering',
  'Engineering Leadership',
] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Anirban Chatterjee'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    problem: z.string().optional(),
    approach: z.string().optional(),
    status: z.enum(['concept', 'research', 'in-development', 'prototype', 'completed']),
    techStack: z.array(z.string()).default([]),
    designDecisions: z.array(z.string()).default([]),
    roadmap: z.array(z.string()).default([]),
    repoUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    coverImage: z.string().optional(),
    startedYear: z.string().optional(),
  }),
});

export const collections = { blog, projects };
