/**
 * Future data models for the private career workspace.
 * Not used by the public site. Kept in sync with the future FastAPI Pydantic models.
 */
export interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  region?: 'Europe' | 'Singapore' | 'Australia' | 'New Zealand' | 'Middle East' | 'India' | 'USA' | 'Other';
  url: string;
  postedDate?: string;
  suitabilityScore?: number;
  recommendation?: string;
}

export interface JobAnalysis {
  jobId: string;
  mandatorySkills: string[];
  preferredSkills: string[];
  gaps: string[];
  keywords: string[];
  roleType: 'managerial' | 'architectural' | 'hands-on' | 'mixed';
  preparationAreas: string[];
}

export interface ResumeVersion {
  id: string;
  label: string;
  fileUrl?: string;
  createdAt: string;
  targetRole?: string;
  isMaster: boolean;
}

export interface Application {
  id: string;
  jobId: string;
  status: 'shortlisted' | 'applied' | 'interview' | 'offer' | 'rejected' | 'archived';
  resumeVersionId?: string;
  coverLetter?: string;
  notes?: string;
  updatedAt: string;
}

export interface ContentItem {
  id: string;
  type: 'blog' | 'project' | 'achievement' | 'experience';
  slug: string;
  title: string;
  status: 'draft' | 'published';
  updatedAt: string;
}
