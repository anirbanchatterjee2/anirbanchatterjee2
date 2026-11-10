export type ResearchCategory =
  | 'Agentic AI'
  | 'LLM Engineering'
  | 'Multimodal AI'
  | 'Distributed Systems'
  | 'Software Architecture'
  | 'Developer Tools'
  | 'Experimental Engineering';

export type ResearchStatus =
  | 'Concept'
  | 'Research'
  | 'Prototype'
  | 'In Development'
  | 'Completed'
  | 'Archived';

export interface ResearchProject {
  id: string;
  name: string;
  description: string;
  researchObjective: string;
  category: ResearchCategory;
  status: ResearchStatus;
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  coverImage?: string;
  architectureDiagram?: string;
  startDate?: string;
  featured?: boolean;
  draft?: boolean;
}

/**
 * Personal research projects — distinct from employer-owned work.
 * Do not claim experimental projects as production-ready.
 * Add images to public/images/research/ and reference them here.
 */
export const researchProjects: ResearchProject[] = [
  {
    id: 'engineering-diagram-intelligence',
    name: 'Engineering Diagram Intelligence Platform',
    description:
      'An application that analyses engineering diagrams, extracts information, and translates visual engineering information into structured technical details.',
    researchObjective:
      'Make visual engineering artifacts machine-readable so that structure, relationships, and annotations become structured technical data that downstream tools can reason over.',
    category: 'Distributed Systems',
    status: 'In Development',
    techStack: ['Python', 'FastAPI', 'LLMs', 'Computer Vision'],
    repoUrl: 'https://github.com/anirbanchatterjee2/pearl_engineer',
    coverImage: '/images/research/diagram-intelligence-cover.jpg',
    startDate: '2025',
    featured: true,
    draft: false,
  },
  {
    id: 'agent-minimiser-cold-coffee',
    name: 'Agent Minimiser — Cold Coffee Brewing Engine',
    description:
      'An experimental concept exploring ways to optimise agentic AI workflows, minimise unnecessary token consumption, and improve the efficiency of AI-powered execution.',
    researchObjective:
      'Treat tokens as a scarce resource — can we minimise work per task without losing quality? Budgeted execution, context pruning, tool-output shaping, and model routing measured against task success.',
    category: 'Agentic AI',
    status: 'Concept',
    techStack: ['LangGraph', 'LangChain', 'LLMs', 'Python'],
    repoUrl: 'https://github.com/anirbanchatterjee2/coldcoffee',
    coverImage: '/images/research/agent-minimiser-cover.jpg',
    startDate: '2025',
    featured: true,
    draft: false,
  },
];

export const researchCategories: ResearchCategory[] = [
  'Agentic AI',
  'LLM Engineering',
  'Multimodal AI',
  'Distributed Systems',
  'Software Architecture',
  'Developer Tools',
  'Experimental Engineering',
];

export const researchStatuses: ResearchStatus[] = [
  'Concept',
  'Research',
  'Prototype',
  'In Development',
  'Completed',
  'Archived',
];
