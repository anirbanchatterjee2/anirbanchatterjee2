/**
 * Future service seams — TypeScript interfaces ONLY in Phase 1.
 * The public static site must never depend on these.
 * See docs/FUTURE-INTEGRATION.md for the intended Python/FastAPI mapping.
 */
import type { JobOpportunity, JobAnalysis, ResumeVersion, Application, ContentItem } from './types';

export interface JobDiscoveryService {
  searchJobs(query: string): Promise<JobOpportunity[]>;
  rankJobs(jobs: JobOpportunity[]): Promise<JobOpportunity[]>;
}

export interface JobAnalysisService {
  analyseJob(jobId: string): Promise<JobAnalysis>;
  matchAgainstProfile(jobId: string): Promise<{ suitabilityScore: number; explanation: string }>;
}

export interface ResumeService {
  getMasterResume(): Promise<ResumeVersion>;
  listVersions(): Promise<ResumeVersion[]>;
  uploadVersion(file: Blob): Promise<ResumeVersion>;
}

export interface ResumeTailoringService {
  tailorResume(resumeId: string, jobId: string): Promise<{ version: ResumeVersion; changelog: string[] }>;
  generateCoverLetter(resumeId: string, jobId: string): Promise<string>;
}

export interface ApplicationTrackingService {
  listApplications(): Promise<Application[]>;
  createApplication(jobId: string): Promise<Application>;
  updateStatus(id: string, status: Application['status']): Promise<Application>;
}

export interface ContentManagementService {
  listContent(): Promise<ContentItem[]>;
  getContent(id: string): Promise<ContentItem>;
  saveDraft(item: ContentItem): Promise<ContentItem>;
  publish(id: string): Promise<void>;
}
