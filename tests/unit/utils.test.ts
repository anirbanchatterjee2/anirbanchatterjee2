import { describe, it, expect } from 'vitest';
import { buildToc, breadcrumbJsonLd, canonicalUrl } from '../../src/lib/seo';
import { slugify, formatDate, readingTime } from '../../src/lib/utils';

describe('slugify', () => {
  it('normalises a title', () => {
    expect(slugify('Understanding RAG Architectures')).toBe('understanding-rag-architectures');
    expect(slugify('  LangGraph vs LangChain!  ')).toBe('langgraph-vs-langchain');
  });
});

describe('readingTime', () => {
  it('returns at least 1 minute', () => {
    expect(readingTime('')).toBe(1);
    expect(readingTime('word '.repeat(200))).toBe(1);
    expect(readingTime('word '.repeat(500))).toBe(3);
  });
});

describe('formatDate', () => {
  it('formats a date', () => {
    expect(formatDate(new Date('2026-01-15T00:00:00Z'))).toMatch(/Jan/);
  });
});

describe('buildToc', () => {
  it('extracts h2/h3 headings with unique ids', () => {
    const toc = buildToc('## Introduction\nText\n### Details\n## Introduction\n');
    expect(toc.map((t) => t.text)).toEqual(['Introduction', 'Details', 'Introduction']);
    expect(toc[0].id).toBe('introduction');
    expect(toc[2].id).toBe('introduction-2');
    expect(toc[1].depth).toBe(3);
  });
  it('returns empty for a body without headings', () => {
    expect(buildToc('Just prose.')).toEqual([]);
  });
});

describe('breadcrumbJsonLd + canonicalUrl', () => {
  it('builds absolute breadcrumb urls', () => {
    const ld = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]);
    expect(ld['@type']).toBe('BreadcrumbList');
    expect(ld.itemListElement[1].item).toContain('/blog');
  });
  it('canonicalises paths', () => {
    expect(canonicalUrl('/about')).toBe('https://anirban-chatterjee.netlify.app/about');
    expect(canonicalUrl('blog/')).toBe('https://anirban-chatterjee.netlify.app/blog/');
  });
});
