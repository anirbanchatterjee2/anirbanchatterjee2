export type SkillLevel = 'Professional experience' | 'Working knowledge' | 'Currently exploring';

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

/**
 * Technical skills — pre-filled from resumes + your original spec.
 * Levels distinguish deep professional experience from working knowledge and exploration. No percentages.
 */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages across enterprise banking and AI work.',
    skills: [
      { name: 'Java', level: 'Professional experience' },
      { name: 'Python', level: 'Working knowledge' },
      { name: 'JavaScript / TypeScript', level: 'Working knowledge' },
      { name: 'Groovy', level: 'Working knowledge' },
    ],
  },
  {
    title: 'Backend Engineering',
    description: 'Services, APIs, search, and rules platforms at scale.',
    skills: [
      { name: 'Spring Boot', level: 'Professional experience' },
      { name: 'Microservices', level: 'Professional experience' },
      { name: 'REST APIs', level: 'Professional experience' },
      { name: 'Apache Solr', level: 'Professional experience' },
      { name: 'Drools', level: 'Working knowledge' },
      { name: 'FastAPI', level: 'Currently exploring' },
    ],
  },
  {
    title: 'Frontend Engineering',
    description: 'Modern frontend for enterprise applications.',
    skills: [
      { name: 'Angular', level: 'Professional experience' },
      { name: 'Java Server Faces / RichFaces', level: 'Professional experience' },
      { name: 'React', level: 'Working knowledge' },
      { name: 'Ext JS', level: 'Working knowledge' },
    ],
  },
  {
    title: 'Cloud and Infrastructure',
    description: 'Cloud, containers, CI/CD and DevSecOps.',
    skills: [
      { name: 'AWS (EC2, ECS, VPC, IAM)', level: 'Professional experience' },
      { name: 'Docker', level: 'Working knowledge' },
      { name: 'Kubernetes', level: 'Working knowledge' },
      { name: 'Jenkins / CI-CD / IaC', level: 'Working knowledge' },
      { name: 'Terraform', level: 'Currently exploring' },
    ],
  },
  {
    title: 'Messaging and Distributed Systems',
    description: 'Event-driven, enterprise messaging, and batch/streaming at petabyte scale.',
    skills: [
      { name: 'IBM MQ', level: 'Professional experience' },
      { name: 'TIBCO', level: 'Working knowledge' },
      { name: 'Kafka', level: 'Working knowledge' },
      { name: 'Solace', level: 'Working knowledge' },
      { name: 'Talend Batch', level: 'Working knowledge' },
    ],
  },
  {
    title: 'AI and Generative AI',
    description: 'Current focus — RAG pipelines, Copilot/Devin, and agentic systems.',
    skills: [
      { name: 'RAG Pipelines', level: 'Working knowledge' },
      { name: 'LLMs', level: 'Currently exploring' },
      { name: 'LangChain', level: 'Currently exploring' },
      { name: 'LangGraph', level: 'Currently exploring' },
      { name: 'Agentic AI', level: 'Currently exploring' },
      { name: 'GitHub Copilot / Devin', level: 'Working knowledge' },
      { name: 'Vector Databases', level: 'Currently exploring' },
      { name: 'MLOps', level: 'Currently exploring' },
    ],
  },
];
