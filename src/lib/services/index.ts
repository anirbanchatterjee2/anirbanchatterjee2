import type {
  ApplicationTrackingService,
  ContentManagementService,
  JobAnalysisService,
  JobDiscoveryService,
  ResumeService,
  ResumeTailoringService,
} from './interfaces';
import type {
  Application as ApplicationModel,
  ContentItem as ContentItemModel,
  JobAnalysis as JobAnalysisModel,
  JobOpportunity as JobOpportunityModel,
  ResumeVersion as ResumeVersionModel,
} from './types';

const DEFAULT_TIMESTAMP = () => new Date().toISOString();

export const publicApiConfig = {
  baseUrl: (import.meta.env.PUBLIC_API_BASE_URL ?? '').replace(/\/+$/, ''),
  enabled: Boolean(import.meta.env.PUBLIC_API_BASE_URL),
};

export function isPrivateApiConfigured(): boolean {
  return publicApiConfig.enabled;
}

export function getPrivateApiBaseUrl(): string | undefined {
  return publicApiConfig.baseUrl || undefined;
}

const emptyJobAnalysis = (jobId: string): JobAnalysisModel => ({
  jobId,
  mandatorySkills: [],
  preferredSkills: [],
  gaps: [],
  keywords: [],
  roleType: 'mixed',
  preparationAreas: [],
});

const emptyResumeVersion = (id = 'offline-resume'): ResumeVersionModel => ({
  id,
  label: 'Offline resume',
  createdAt: DEFAULT_TIMESTAMP(),
  isMaster: true,
});

const emptyApplication = (jobId = 'offline-job'): ApplicationModel => ({
  id: 'offline-application',
  jobId,
  status: 'shortlisted',
  updatedAt: DEFAULT_TIMESTAMP(),
});

const emptyContentItem = (id = 'offline-content'): ContentItemModel => ({
  id,
  type: 'blog',
  slug: 'offline-content',
  title: 'Offline content',
  status: 'draft',
  updatedAt: DEFAULT_TIMESTAMP(),
});

export const noopJobDiscoveryService: JobDiscoveryService = {
  async searchJobs(_query: string): Promise<JobOpportunityModel[]> {
    return [];
  },
  async rankJobs(jobs: JobOpportunityModel[]): Promise<JobOpportunityModel[]> {
    return jobs;
  },
};

export const noopJobAnalysisService: JobAnalysisService = {
  async analyseJob(jobId: string): Promise<JobAnalysisModel> {
    return emptyJobAnalysis(jobId);
  },
  async matchAgainstProfile(jobId: string): Promise<{ suitabilityScore: number; explanation: string }> {
    return { suitabilityScore: 0, explanation: `No backend available for ${jobId}.` };
  },
};

export const noopResumeService: ResumeService = {
  async getMasterResume(): Promise<ResumeVersionModel> {
    return emptyResumeVersion();
  },
  async listVersions(): Promise<ResumeVersionModel[]> {
    return [emptyResumeVersion('offline-resume')];
  },
  async uploadVersion(_file: Blob): Promise<ResumeVersionModel> {
    return emptyResumeVersion();
  },
};

export const noopResumeTailoringService: ResumeTailoringService = {
  async tailorResume(resumeId: string, _jobId: string): Promise<{ version: ResumeVersionModel; changelog: string[] }> {
    return {
      version: emptyResumeVersion(resumeId),
      changelog: ['No private tailoring backend is configured yet.'],
    };
  },
  async generateCoverLetter(resumeId: string, _jobId: string): Promise<string> {
    return `No cover letter generated yet for ${resumeId}; private backend is not configured.`;
  },
};

export const noopApplicationTrackingService: ApplicationTrackingService = {
  async listApplications(): Promise<ApplicationModel[]> {
    return [emptyApplication()];
  },
  async createApplication(jobId: string): Promise<ApplicationModel> {
    return emptyApplication(jobId);
  },
  async updateStatus(id: string, status: ApplicationModel['status']): Promise<ApplicationModel> {
    return { ...emptyApplication(), id, status, updatedAt: DEFAULT_TIMESTAMP() };
  },
};

export const noopContentManagementService: ContentManagementService = {
  async listContent(): Promise<ContentItemModel[]> {
    return [emptyContentItem()];
  },
  async getContent(id: string): Promise<ContentItemModel> {
    return emptyContentItem(id);
  },
  async saveDraft(item: ContentItemModel): Promise<ContentItemModel> {
    return item;
  },
  async publish(_id: string): Promise<void> {
    return;
  },
};

export type FutureServiceRegistry = {
  jobDiscovery: JobDiscoveryService;
  jobAnalysis: JobAnalysisService;
  resume: ResumeService;
  resumeTailoring: ResumeTailoringService;
  applicationTracking: ApplicationTrackingService;
  contentManagement: ContentManagementService;
};

export function createServiceRegistry(overrides: Partial<FutureServiceRegistry> = {}): FutureServiceRegistry {
  return {
    jobDiscovery: overrides.jobDiscovery ?? noopJobDiscoveryService,
    jobAnalysis: overrides.jobAnalysis ?? noopJobAnalysisService,
    resume: overrides.resume ?? noopResumeService,
    resumeTailoring: overrides.resumeTailoring ?? noopResumeTailoringService,
    applicationTracking: overrides.applicationTracking ?? noopApplicationTrackingService,
    contentManagement: overrides.contentManagement ?? noopContentManagementService,
  };
}

export const futureServiceRegistry = createServiceRegistry();
