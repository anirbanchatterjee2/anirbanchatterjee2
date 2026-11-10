export type AwardCategory =
  | 'Corporate Awards'
  | 'Engineering Excellence'
  | 'Leadership Recognition'
  | 'Innovation Awards'
  | 'Technical Certifications'
  | 'Other Recognition';

/**
 * Award shape — mirrors the `awards` content collection schema
 * (see src/content.config.ts and src/content/awards/*.md).
 *
 * Award data lives ONLY in src/content/awards/*.md so it can be managed
 * through the Decap CMS admin at /admin/. This file only exports the
 * shared TypeScript type and the category list used for filters.
 *
 * Certificates: place files in public/images/awards/ and reference them
 * via `certificateImage` / `additionalImages` (JPG/PNG/WEBP or PDF).
 */
export interface Award {
  title: string;
  organisation: string;
  date: string;
  category: AwardCategory | string;
  description: string;
  context?: string;
  contribution?: string;
  certificateImage?: string;
  awardImage?: string;
  additionalImages?: string[];
  verificationUrl?: string;
  featured?: boolean;
  draft?: boolean;
}

export const awardCategories: AwardCategory[] = [
  'Corporate Awards',
  'Engineering Excellence',
  'Leadership Recognition',
  'Innovation Awards',
  'Technical Certifications',
  'Other Recognition',
];
