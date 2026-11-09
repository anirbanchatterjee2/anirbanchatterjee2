import { describe, it, expect } from 'vitest';
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
