import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Preferred publication categories. */
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

const awards = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/awards' }),
  schema: z.object({
    title: z.string(),
    organisation: z.string(),
    date: z.string(),
    category: z.string(),
    description: z.string(),
    context: z.string().optional(),
    contribution: z.string().optional(),
    certificateImage: z.string().optional(),
    awardImage: z.string().optional(),
    additionalImages: z.array(z.string()).default([]),
    verificationUrl: z.string().optional(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

const achievements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/achievements' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    contribution: z.string(),
    year: z.string(),
    organization: z.string(),
    impact: z.string().optional(),
    measurementBasis: z.string().optional(),
    tags: z.array(z.string()).default([]),
    group: z.string(),
    featured: z.boolean().optional().default(false),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    researchObjective: z.string(),
    category: z.string(),
    status: z.enum(['Concept', 'Research', 'Prototype', 'In Development', 'Completed', 'Archived']),
    techStack: z.array(z.string()).default([]),
    repoUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    coverImage: z.string().optional(),
    architectureDiagram: z.string().optional(),
    startDate: z.string().optional(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog, awards, achievements, research };
