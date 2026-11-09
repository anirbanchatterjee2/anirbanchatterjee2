# Future Integration — Private AI Career Workspace

**Phase 1 ships none of this.** These are seams, not implementations. The static site must keep working even if every service below is down.

## Architecture

```
/public static site (this repo, Astro, Netlify)      ← always independent
      │
      └─ (future) private /admin SPA
              │  HTTPS + server-side auth (OAuth/OIDC — e.g. Auth0, Keycloak, or GitHub OAuth)
              ▼
        FastAPI backend (Python)
          ├── Pydantic models (mirror src/lib/services/types.ts)
          ├── PostgreSQL (applications, jobs, analysis, resume versions)
          ├── Vector DB (embeddings for job/resume matching)
          ├── Background workers (periodic job discovery, embedding jobs)
          └── LLM layer (LangChain / LangGraph) — provider-agnostic
```

## Service interfaces (already defined, implementation-free)

`src/lib/services/interfaces.ts`:

- `JobDiscoveryService` — permitted public sources only; ranking + explanation.
- `JobAnalysisService` — mandatory/preferred skills, gaps, keywords, role-type (managerial / architectural / hands-on).
- `ResumeService` — master + versions, upload, list.
- `ResumeTailoringService` — tailor to a job, keyword alignment, **explained changelog**.
- `ApplicationTrackingService` — shortlist → applied → interview → offer → archive, custom resumes, cover letters, notes.
- `ContentManagementService` — CRUD over `src/content/` files with draft/preview/publish.

Data models: `src/lib/services/types.ts` (`JobOpportunity`, `JobAnalysis`, `ResumeVersion`, `Application`, `ContentItem`).

## Hard constraints

- **Resume tailoring must never invent experience, achievements, skills, or qualifications.** It re-presents facts and explains every change.
- **No consequential action (application submission, external communication) without explicit per-item owner approval.**
- Private APIs enforce server-side authentication. Hiding a link is not authentication — `/admin` is currently just a `noindex` placeholder.

## Environment

- `PUBLIC_API_BASE_URL` — future backend base URL. Empty in Phase 1; the UI never calls it yet.
- Live keys (LLM, job sources) live only in Netlify/backend env, never in this repo.

## Regions targeted for job discovery

Europe, Singapore, Australia, New Zealand, the Middle East, plus India and the USA — enforced as filters in `JobDiscoveryService`, not in the UI.
