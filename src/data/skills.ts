/**
 * Technical expertise — Phase 5 redesign.
 *
 * Six capability themes, each with a one-line outcome statement.
 * Plus: compact "Core stack" (deep production experience) and
 * "Currently building with" (exploration, not claimed as production).
 * Plus: ATS-friendly plain-text keyword list.
 *
 * No proficiency labels, percentages, or bars.
 */
export interface CapabilityTheme {
  title: string;
  outcome: string; // one-line business/engineering outcome
  items: string[]; // technologies within this theme
}

export const capabilityThemes: CapabilityTheme[] = [
  {
    title: 'Enterprise Architecture & Engineering Leadership',
    outcome: 'Designed and governed multi-layer engineering organisations delivering regulated, high-throughput platforms — from org design and KPI dashboards to vendor management and release governance.',
    items: ['Multi-layer org leadership (50+ engineers)', 'Managing managers', 'KPI-driven execution (throughput · defect · SLA)', 'Vendor & onsite/offshore coordination', 'Secure SaaS & platform modernization'],
  },
  {
    title: 'Java, Python & Backend Engineering',
    outcome: 'Built and scaled backend systems in enterprise Java, Python, and APIs — from monolithic HCM and risk platforms to microservices and streaming.',
    items: ['Java', 'Spring Boot', 'REST APIs', 'Python', 'JavaScript / TypeScript', 'Groovy'],
  },
  {
    title: 'Distributed Systems & Microservices',
    outcome: 'Architected messaging, search, rules, and batch/streaming systems at petabyte scale — 1000+ TPS name screening, sub-second latency, billions of records.',
    items: ['Microservices architecture', 'IBM MQ', 'Apache Solr', 'Kafka', 'TIBCO', 'Solace', 'Drools', 'Talend batch'],
  },
  {
    title: 'AWS, Cloud & Infrastructure',
    outcome: 'Migrated 100+ enterprise integrations and on-premise applications to AWS cloud-native microservices — EC2, ECS, VPC, IAM, containers, CI/CD.',
    items: ['AWS (EC2, ECS, VPC, IAM)', 'Docker', 'Kubernetes', 'Jenkins / CI-CD', 'Terraform'],
  },
  {
    title: 'AI, LLMs & Agentic Systems',
    outcome: 'Applied AI where it measurably reduces cost and risk — RAG pipelines in production screening, GitHub Copilot/Devin evaluation, agentic workflow research.',
    items: ['RAG pipelines', 'GitHub Copilot / Devin', 'LLMs', 'LangChain', 'LangGraph', 'Agentic AI', 'Vector databases', 'MLOps'],
  },
  {
    title: 'DevSecOps & Engineering Productivity',
    outcome: 'Standardised CI/CD, release governance, and automated testing — 70% deployment velocity improvement, infra provisioning from weeks to hours.',
    items: ['DevSecOps frameworks', 'CI/CD standardisation', 'Automated testing & code review governance', 'AI-assisted test generation', 'Infrastructure as code'],
  },
];

/** Deep production experience — for ATS and recruiter skimming. */
export const coreStack = [
  'Java', 'Spring Boot', 'REST APIs', 'Microservices', 'AWS (EC2, ECS, VPC, IAM)',
  'Docker', 'Kubernetes', 'Apache Solr', 'IBM MQ', 'Kafka', 'Jenkins',
  'GitHub Copilot', 'Devin', 'RAG pipelines',
];

/** Currently building with — exploration, not claimed as production experience. */
export const currentlyBuildingWith = [
  'LangChain', 'LangGraph', 'Agentic AI', 'Vector databases', 'MLOps', 'Terraform', 'Python',
];

/** ATS-friendly plain-text keyword list. */
export const atsKeywords = [
  'Java', 'Spring Boot', 'Python', 'REST APIs', 'Microservices', 'AWS', 'Docker', 'Kubernetes',
  'Apache Solr', 'IBM MQ', 'Kafka', 'Jenkins', 'CI/CD', 'DevSecOps', 'RAG', 'LLMs', 'Agentic AI',
  'LangChain', 'LangGraph', 'GitHub Copilot', 'Devin', 'VP Engineering', 'Engineering Leadership',
  'Platform Modernization', 'Distributed Systems', 'AML', 'Risk Technology', 'AML/KYC',
];
