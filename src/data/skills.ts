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
 * Technical expertise — six executive-facing groups (redesign 2026).
 * All skills sourced from resumes + original spec. Levels are honest,
 * never percentages. "Currently exploring" items are explicitly NOT
 * claimed as production experience.
 */
export const skillCategories: SkillCategory[] = [
  {
    title: 'Enterprise Architecture & Engineering Leadership',
    description: 'Org design, delivery governance, and vendor management at enterprise scale.',
    skills: [
      { name: 'Multi-Layer Org Leadership (50+ Engineers)', level: 'Professional experience' },
      { name: 'Managing Managers', level: 'Professional experience' },
      { name: 'KPI-Driven Execution (Throughput · Defect · SLA)', level: 'Professional experience' },
      { name: 'Vendor & Onsite/Offshore Coordination', level: 'Professional experience' },
      { name: 'Secure SaaS & Platform Modernization', level: 'Professional experience' },
    ],
  },
  {
    title: 'Java, Python & Backend Engineering',
    description: 'Core backend stack from enterprise Java through Python and APIs.',
    skills: [
      { name: 'Java', level: 'Professional experience' },
      { name: 'Spring Boot', level: 'Professional experience' },
      { name: 'REST APIs', level: 'Professional experience' },
      { name: 'Python', level: 'Working knowledge' },
      { name: 'JavaScript / TypeScript', level: 'Working knowledge' },
      { name: 'Groovy', level: 'Working knowledge' },
      { name: 'FastAPI', level: 'Currently exploring' },
    ],
  },
  {
    title: 'Distributed Systems & Microservices',
    description: 'Messaging, search, rules and batch/streaming at high throughput.',
    skills: [
      { name: 'Microservices Architecture', level: 'Professional experience' },
      { name: 'IBM MQ', level: 'Professional experience' },
      { name: 'Apache Solr', level: 'Professional experience' },
      { name: 'Kafka', level: 'Working knowledge' },
      { name: 'TIBCO', level: 'Working knowledge' },
      { name: 'Solace', level: 'Working knowledge' },
      { name: 'Drools', level: 'Working knowledge' },
      { name: 'Talend Batch (Petabyte-Scale)', level: 'Working knowledge' },
    ],
  },
  {
    title: 'AWS, Cloud & Infrastructure',
    description: 'Cloud-native architecture, containers, and infrastructure as code.',
    skills: [
      { name: 'AWS (EC2, ECS, VPC, IAM)', level: 'Professional experience' },
      { name: 'Docker', level: 'Working knowledge' },
      { name: 'Kubernetes', level: 'Working knowledge' },
      { name: 'Jenkins / CI-CD', level: 'Working knowledge' },
      { name: 'Terraform', level: 'Currently exploring' },
    ],
  },
  {
    title: 'AI, LLMs & Agentic Systems',
    description: 'Current focus — RAG in production screening, AI-assisted delivery, and agentic research.',
    skills: [
      { name: 'RAG Pipelines', level: 'Working knowledge' },
      { name: 'GitHub Copilot / Devin', level: 'Working knowledge' },
      { name: 'LLMs', level: 'Currently exploring' },
      { name: 'LangChain', level: 'Currently exploring' },
      { name: 'LangGraph', level: 'Currently exploring' },
      { name: 'Agentic AI', level: 'Currently exploring' },
      { name: 'Vector Databases', level: 'Currently exploring' },
      { name: 'MLOps', level: 'Currently exploring' },
    ],
  },
  {
    title: 'DevSecOps & Engineering Productivity',
    description: 'Release governance, testing, and developer productivity at scale.',
    skills: [
      { name: 'DevSecOps Frameworks', level: 'Professional experience' },
      { name: 'CI/CD Standardisation (+70% Velocity)', level: 'Professional experience' },
      { name: 'Automated Testing & Code Review Governance', level: 'Working knowledge' },
      { name: 'AI-Assisted Test Generation', level: 'Working knowledge' },
      { name: 'Infrastructure as Code', level: 'Working knowledge' },
    ],
  },
];
