---
title: Understanding RAG Architectures
description: A practical tour of retrieval-augmented generation — ingestion, chunking, embeddings, retrieval, and generation — with honest trade-offs.
pubDate: 2026-01-15
updatedDate: 2026-01-20
author: Anirban Chatterjee
category: AI Engineering
tags:
  - RAG
  - LLMs
  - Vector Databases
featured: true
draft: false
seoTitle: Understanding RAG Architectures — Anirban Chatterjee
seoDescription: A practical guide to RAG architecture — chunking, embeddings, vector search, and generation trade-offs for engineers building LLM-powered systems.
---

## Introduction

Retrieval-Augmented Generation is where LLM applications meet real data. This article explains the architecture end-to-end so you can make deliberate trade-offs instead of cargo-culting a pipeline.

## The pipeline, end to end

1. **Ingestion:** Documents → clean text → chunks with metadata (source, page, date).
2. **Embedding:** Chunks → vectors stored in a vector database with the chunk text.
3. **Query:** User question → embedded → nearest-neighbour search.
4. **Generation:** Retrieved chunks + question → LLM → answer grounded in retrieved context with citations.

## Chunking matters more than the model

Chunk size and overlap change retrieval quality dramatically. Small chunks preserve precision but lose context; large chunks preserve context but dilute the signal. A common starting point is 500–1000 tokens with a small overlap — then measure.

## Embeddings and vector search

- Embedding models differ in domain fit, dimension, and cost. Evaluate on *your* corpus, not benchmarks alone.
- Vector databases (pgvector, Qdrant, Weaviate, Pinecone) trade operational overhead for scale and filtering. For small corpora, pgvector with Postgres is often enough.
- Hybrid search (keyword + vector) and metadata filters close many gaps that pure vector search leaves open.

## Trade-offs table

| Decision | Option A | Option B |
|----------|----------|----------|
| Chunk size | Small — precise, fragmented | Large — coherent, diluted |
| Database | pgvector — simple, Postgres-native | Dedicated vector DB — scales, more ops |
| Retrieval | Vector only — semantic | Hybrid — semantic + lexical precision |

## Takeaways

- Start simple, measure retrieval quality (recall on a labelled query set) before optimizing generation.
- Version your corpus, chunking, and embedding model so results are reproducible.
- RAG quality is a data problem first, a model problem second.

> This is a starter article. Replace with your full write-up — the frontmatter, headings, code fences, tables, and images above are the exact format your articles will use.
