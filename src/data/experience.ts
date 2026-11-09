export interface ExperienceItem {
  company: string;
  designation: string;
  duration: string;
  location: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

/**
 * Professional experience — pre-filled from Anirban's resumes (older detailed + newer VP resume).
 * No invented dates or metrics. Multiple roles in the same company = multiple entries (newest first).
 */
export const experience: ExperienceItem[] = [
  {
    company: 'Citi Bank',
    designation: 'Vice President — AML & Risk Technology',
    duration: '2023 — Present',
    location: 'Pune, India',
    summary:
      'Lead a multi-layer engineering organisation delivering mission-critical risk and compliance platforms globally, including managing managers across geographies and vendors.',
    responsibilities: [
      'Oversee distributed engineering org (50+ engineers); set KPI dashboards tracking throughput, defect density, and SLA adherence.',
      'Implemented a RAG (Retrieval Augmented Generation) pipeline for customer screening case management for better alert dispositioning.',
      'Standardised CI/CD pipelines and release governance frameworks.',
      'Evaluated and deployed AI coding assistants (GitHub Copilot, Devin); introduced automated test generation and AI-assisted code review pipelines with ROI governance.',
      'Institutionalised DevSecOps practices aligned with regulatory controls; reduced infra provisioning from weeks to hours.',
      'Strengthened code review rigour, automated testing coverage, and release consistency across distributed teams.',
    ],
    achievements: [
      'Achieved 70% improvement in deployment velocity.',
      'Part of $25M+ in measurable enterprise business impact across platform modernisation.',
      'Citi Engineer Excellence Exam — Top Performer (~5% global selection rate).',
      'Innovation Award — Compliance Platform.',
    ],
    technologies: ['Java', 'Python', 'AWS (EC2, ECS, VPC, IAM)', 'Kubernetes', 'Docker', 'Kafka', 'LangChain', 'RAG Pipelines', 'GitHub Copilot', 'Devin', 'Jenkins'],
  },
  {
    company: 'Citi Bank',
    designation: 'Assistant Vice President — Risk Technology',
    duration: '2019 — 2022',
    location: 'Pune, India',
    summary:
      'Owned AML compliance technology — exploring solutions to meet banking customer needs while ensuring products meet Anti-Money Laundering safeguards and compliance requirements.',
    responsibilities: [
      'Looked at existing solutions to find platform improvements by saving software cost and exploring open-source tech stacks.',
      'Provided easy-to-use products meeting customer needs without breaching compliance issues.',
      'Managed teams across geographies and vendors.',
      'Explored containerisation in VPC.',
    ],
    achievements: [
      'Transitioned legacy, rule-heavy risk systems into scalable microservices architectures — improved resilience under high transaction volumes.',
      'Reduced vendor dependency through open-source adoption; achieved $4M+ in licensing savings.',
      'Enhanced SDLC maturity within secure VPC environments, aligning engineering practices with regulatory-grade auditability.',
    ],
    technologies: ['Java', 'Spring Boot', 'Microservices', 'AWS', 'Docker', 'Angular', 'Oracle', 'IBM MQ'],
  },
  {
    company: 'L&T Infotech (Citi Engagement)',
    designation: 'Technical Architect',
    duration: '2018 — 2019',
    location: 'Tampa, FL / Pune, India',
    summary:
      'Technical Architect focused on designing a safe banking system product for Citi Bank — a high-throughput name screening platform with a complex risk-analysis engine.',
    responsibilities: [
      'Designed a name screening product that is quick to market, highly scalable (millions of records now, billions predicted), with TPS expectations in the 1000s — using Talend batch mode extensively with Drools Business Rules.',
      'Designed a highly complex multi-business-rule-driven risk analysis algorithm using Java and Apache Solr search over large datasets to generate a risk score.',
      'Created a domain-driven design for a highly scalable, reusable app using microservices architecture.',
      'Prepared the app for machine learning so the product can train its model and give smarter predictions.',
      'Led a 10-member team across the globe.',
    ],
    achievements: [
      'Delivered a name screening platform processing 1000+ TPS across billions of records — petabyte-scale batch processing with sub-second decision latency.',
      'Architecture improvements resulting in $20M documented enterprise savings.',
      'Pride award from L&T Infotech for building and designing the FinTech in-house product.',
    ],
    technologies: ['Java', 'Apache Solr', 'Talend', 'Drools', 'Microservices', 'Batch Processing'],
  },
  {
    company: 'Qualcomm Inc.',
    designation: 'Staff Programmer / Solutions Architect',
    duration: '2016 — 2018',
    location: 'San Diego, CA',
    summary:
      'Solutions architect focused on designing an enterprise-level integration platform. Architected and developed multiple Java applications with hands-on development, onsite/offshore coordination, and peer reviews.',
    responsibilities: [
      'Led a 5-member team. Converted in-house products to SaaS-based applications and crafted functional components as microservices; collaborated with 20+ external vendors to support migration of 100+ integrations.',
      'Redesigned the enterprise workflow system using an intermediate app layer between Oracle Workflow Builder and Activiti.',
      'Designed, developed and built a web application using Angular 4, Groovy, Spring Boot, MySQL to help the legal team handle employee assets for patent filings.',
      'Worked on moving all on-premise applications to Amazon AWS Cloud.',
      'Redesigned workflows and introduced the Activiti workflow framework.',
      'Designed and developed the employee taxation system (1095C form) and an automated channel for transfer of files to the IRS (Java 7, Oracle DB).',
    ],
    achievements: [
      'Led migration of 100+ enterprise application integrations to AWS cloud-native microservices.',
      'Increased performance efficiency by 90% by redesigning the enterprise workflow system (Awarded Qualstar — Qualcomm Employee Award).',
      'Reduced infrastructure and maintenance costs by 30–40% through cloud-native re-architecture.',
      'Eliminated 160 hours of manual labor per year via the taxation system (Awarded Diamond Qualstar).',
    ],
    technologies: ['Java', 'Spring Boot', 'Angular 4', 'Groovy', 'MySQL', 'Oracle', 'AWS', 'Activiti', 'Microservices'],
  },
  {
    company: 'Cognizant Technology Solutions',
    designation: 'Senior Associate / Technical Lead',
    duration: '2016',
    location: 'Boston, MA',
    summary:
      'Lead developer for a business and financial client — designing and developing modules for a taxation application, supporting production, and implementing new features.',
    responsibilities: [
      'Developed new features for an existing workers’ compensation product to increase efficiency, handle more customers, and resolve transaction issues.',
      'Proposed a DB version management tool using Liquibase.',
      'Delivered quick turnaround for production support for SQL Server and Java issues.',
      'Interacted with payroll companies to understand requirements.',
    ],
    achievements: ['Shipped feature enhancements improving efficiency and customer volume on the workers’ comp product.'],
    technologies: ['Java', 'SQL Server', 'Liquibase'],
  },
  {
    company: 'Capgemini (formerly IGATE Inc.)',
    designation: 'Technical Lead',
    duration: '2015',
    location: 'Bethlehem, PA',
    summary:
      'Drove proof-of-concepts for new technology, managed offshore projects, solved complex architectural problems, completed peer reviews, and led an onsite and offshore team.',
    responsibilities: [
      'Developed an integration framework for various agents and insurance systems to collaborate over a common platform, removing a legacy system.',
      'Revamped the build methodology; introduced database version management (Flyway and Liquibase POCs).',
      'Revamped the UI with HTML5 and CSS3; introduced jQuery for faster client response; solved legacy messaging issues by introducing IBM MQ; proposed a Splunk POC for logging.',
    ],
    achievements: [
      'Reduced maintenance overhead and licensing costs and eliminated significant manual effort by replacing the legacy system.',
      'Reduced manual effort by 6 hours per build by revamping the build methodology.',
    ],
    technologies: ['Java', 'HTML5', 'CSS3', 'jQuery', 'IBM MQ', 'Flyway', 'Liquibase', 'Splunk'],
  },
  {
    company: 'Tata Consultancy Services',
    designation: 'IT Analyst / Project Lead',
    duration: '2008 — 2015',
    location: 'Bangalore, India / San Diego, CA',
    summary:
      'Led offshore teams designing, estimating, and developing projects as a full-stack engineer — including a large HCM transformation and a rich Java-based Jobsite.',
    responsibilities: [
      'Converted an enterprise-level HCM app from a licensed tech stack to an open-source stack (JSF, Spring, Hibernate/iBatis, Quick Rules, Oracle).',
      'Developed and converted an ASP-based Jobsite to a UI-rich Java-based Jobsite application (project-lead from offshore).',
      'Added security layers against XSS, SQL injection, and invalid user attempts with the corporate security team.',
      'Developed a Job Search page by converting an Oracle-based search to Apache Solr-based search.',
      'Introduced Oracle Workflow Builder; ran POCs, created the framework, and designed workflows from scratch.',
    ],
    achievements: [
      'Saved $1M by converting the enterprise HCM app from licensed to open-source tech stack. Earned multiple certificates of achievement, appreciations and On-the-Spot awards by client and vendor.',
      'Received On-the-Spot Award for defect-free delivery of the Java-based Jobsite.',
      'Awarded Star of the Month for driving, estimating, developing, and delivering the Solr-based Job Search project.',
    ],
    technologies: ['Java', 'JSF', 'Spring', 'Hibernate', 'iBatis', 'Oracle', 'Apache Solr', 'Oracle Workflow Builder', 'JavaScript'],
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology (B.Tech / B.E.) — Computer Science & Engineering',
    institution: 'West Bengal University of Technology — Kolkata, India',
    year: '[TODO: Graduation year]',
  },
];

export const certifications = [
  {
    name: 'Sun Certified Java Programmer 5',
    issuer: 'Sun Microsystems',
    year: '[TODO: Year]',
    credentialUrl: '',
  },
];
