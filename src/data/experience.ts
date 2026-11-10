export interface ExperienceItem {
  company: string;
  designation: string;
  duration: string;
  location: string;
  summary: string;
  scope?: string; // team size, geographies, budget/portfolio, reporting line (TODO where unknown)
  responsibilities: string[];
  achievements: string[]; // S→A→R outcome bullets with metric and baseline
  technologies: string[];
  peopleLeadership?: string; // hiring, managing managers, retention
}

export interface EmployerBlock {
  company: string;
  roles: ExperienceItem[]; // newest first within employer
  gapAfter?: string; // neutral note about any gap before next employer
}

/**
 * Professional experience — pre-filled from Anirban's resumes (older detailed + newer VP resume).
 * Strict reverse-chronological order. Roles nested under employer.
 * No invented dates or metrics. Scope lines and S→A→R bullets use TODO(owner) where unknown.
 *
 * Chronology notes (flagged in docs/AUDIT.md for owner review):
 * - TCS 2008–2015 and Capgemini 2015 share calendar year 2015 (possible concurrent onsite/offshore).
 * - Cognizant 2016 and Qualcomm 2016–2018 share calendar year 2016.
 * - Qualcomm 2016–2018 and L&T Infotech 2018–2019 touch at 2018.
 * - Citi AVP 2019–2022 and Citi VP 2023–present leave calendar year 2022→2023 unaccounted.
 */
export const employers: EmployerBlock[] = [
  {
    company: 'Citi Bank',
    roles: [
      {
        company: 'Citi Bank',
        designation: 'Vice President — AML & Risk Technology',
        duration: '2023 — Present',
        location: 'Pune, India',
        summary:
          'Leading a multi-layer engineering organisation delivering mission-critical AML/risk platforms globally, including managing managers across geographies and vendors.',
        scope:
          'TODO(owner): confirm team size, geographies, budget/portfolio, and reporting line for Citi VP role.',
        responsibilities: [
          'Set KPI dashboards tracking throughput, defect density, and SLA adherence across a distributed engineering organisation.',
          'Implemented a RAG (Retrieval Augmented Generation) pipeline for customer screening case management for better alert dispositioning.',
          'Standardised CI/CD pipelines and release governance frameworks.',
          'Evaluated and deployed AI coding assistants (GitHub Copilot, Devin); introduced automated test generation and AI-assisted code review pipelines with ROI governance.',
          'Institutionalised DevSecOps practices aligned with regulatory controls; reduced infra provisioning from weeks to hours.',
          'Strengthened code review rigour, automated testing coverage, and release consistency across distributed teams.',
        ],
        achievements: [
          'Situation: deployment cycles were manual and inconsistent across distributed teams. Action: standardised CI/CD pipelines and release governance. Result: 70% improvement in deployment velocity (baseline: pre-standardisation cycle times).',
          'Situation: customer screening alert dispositioning was manual. Action: implemented a RAG pipeline for case management. Result: faster, more consistent alert handling.',
          'Situation: infrastructure provisioning took weeks. Action: institutionalised DevSecOps practices aligned with regulatory controls. Result: provisioning reduced to hours.',
        ],
        technologies: ['Java', 'Python', 'AWS (EC2, ECS, VPC, IAM)', 'Kubernetes', 'Docker', 'Kafka', 'LangChain', 'RAG Pipelines', 'GitHub Copilot', 'Devin', 'Jenkins'],
        peopleLeadership: 'Managing managers across geographies and vendors; hiring and retention for a multi-layer engineering organisation.',
      },
      {
        company: 'Citi Bank',
        designation: 'Assistant Vice President — Risk Technology',
        duration: '2019 — 2022',
        location: 'Pune, India',
        summary:
          'Owned AML compliance technology — exploring solutions to meet banking customer needs while ensuring products meet Anti-Money Laundering safeguards and compliance requirements.',
        scope:
          'TODO(owner): confirm team size, geographies, budget/portfolio, and reporting line for Citi AVP role.',
        responsibilities: [
          'Looked at existing solutions to find platform improvements by saving software cost and exploring open-source tech stacks.',
          'Provided easy-to-use products meeting customer needs without breaching compliance issues.',
          'Managed teams across geographies and vendors.',
          'Explored containerisation in VPC.',
        ],
        achievements: [
          'Situation: legacy rule-heavy risk systems incurred high licensing costs. Action: transitioned to scalable microservices on open-source stacks. Result: $4M+ in licensing savings.',
          'Situation: SDLC maturity needed alignment with regulatory auditability. Action: enhanced secure VPC environments and engineering practices. Result: regulatory-grade auditability for risk systems.',
        ],
        technologies: ['Java', 'Spring Boot', 'Microservices', 'AWS', 'Docker', 'Angular', 'Oracle', 'IBM MQ'],
        peopleLeadership: 'Managed teams across geographies and vendors.',
      },
    ],
    gapAfter: 'Calendar year 2022→2023 not accounted for in source resumes (TODO(owner): confirm if concurrent roles or gap).',
  },
  {
    company: 'L&T Infotech (Citi Engagement)',
    roles: [
      {
        company: 'L&T Infotech (Citi Engagement)',
        designation: 'Technical Architect',
        duration: '2018 — 2019',
        location: 'Tampa, FL / Pune, India',
        summary:
          'Technical Architect focused on designing a safe banking system product for Citi Bank — a high-throughput name screening platform with a complex risk-analysis engine.',
        scope:
          'TODO(owner): confirm team size beyond the 10-member global team, geographies, budget/portfolio, and reporting line.',
        responsibilities: [
          'Designed a name screening product that is quick to market, highly scalable (millions of records now, billions predicted), with TPS expectations in the 1000s — using Talend batch mode extensively with Drools Business Rules.',
          'Designed a highly complex multi-business-rule-driven risk analysis algorithm using Java and Apache Solr search over large datasets to generate a risk score.',
          'Created a domain-driven design for a highly scalable, reusable app using microservices architecture.',
          'Prepared the app for machine learning so the product can train its model and give smarter predictions.',
          'Led a 10-member team across the globe.',
        ],
        achievements: [
          'Situation: Citi needed a quick-to-market, highly scalable name screening platform. Action: designed a microservices architecture with Talend batch mode and Drools business rules. Result: 1000+ TPS across billions of records, petabyte-scale batch, sub-second decision latency; $20M documented enterprise savings.',
          'Situation: risk analysis needed a multi-business-rule-driven engine. Action: designed Java + Apache Solr risk scoring over large datasets. Result: risk score generation for large-scale screening.',
        ],
        technologies: ['Java', 'Apache Solr', 'Talend', 'Drools', 'Microservices', 'Batch Processing'],
        peopleLeadership: 'Led a 10-member team across the globe.',
      },
    ],
    gapAfter: 'Calendar year 2018 overlaps/touches with Qualcomm 2016–2018 (TODO(owner): confirm concurrent or sequential).',
  },
  {
    company: 'Qualcomm Inc.',
    roles: [
      {
        company: 'Qualcomm Inc.',
        designation: 'Staff Programmer / Solutions Architect',
        duration: '2016 — 2018',
        location: 'San Diego, CA',
        summary:
          'Solutions architect focused on designing an enterprise-level integration platform. Architected and developed multiple Java applications with hands-on development, onsite/offshore coordination, and peer reviews.',
        scope:
          'TODO(owner): confirm budget/portfolio and reporting line for Qualcomm role.',
        responsibilities: [
          'Led a 5-member team. Converted in-house products to SaaS-based applications and crafted functional components as microservices; collaborated with 20+ external vendors to support migration of 100+ integrations.',
          'Redesigned the enterprise workflow system using an intermediate app layer between Oracle Workflow Builder and Activiti.',
          'Designed, developed and built a web application using Angular 4, Groovy, Spring Boot, MySQL to help the legal team handle employee assets for patent filings.',
          'Worked on moving all on-premise applications to Amazon AWS Cloud.',
          'Redesigned workflows and introduced the Activiti workflow framework.',
          'Designed and developed the employee taxation system (1095C form) and an automated channel for transfer of files to the IRS (Java 7, Oracle DB).',
        ],
        achievements: [
          'Situation: 100+ enterprise application integrations needed cloud migration. Action: architected and led migration to AWS cloud-native microservices. Result: 30–40% infrastructure cost reduction.',
          'Situation: enterprise workflow system needed redesign. Action: introduced intermediate app layer between Oracle Workflow Builder and Activiti. Result: 90% performance efficiency improvement (Awarded Qualstar — Qualcomm Employee Award).',
          'Situation: employee taxation reporting was manual (1095C form). Action: designed and built automated IRS file-transfer channel. Result: 160 hours of manual labor eliminated per year (Awarded Diamond Qualstar).',
        ],
        technologies: ['Java', 'Spring Boot', 'Angular 4', 'Groovy', 'MySQL', 'Oracle', 'AWS', 'Activiti', 'Microservices'],
        peopleLeadership: 'Led a 5-member team.',
      },
    ],
    gapAfter: 'Calendar year 2016 overlaps with Cognizant 2016 (TODO(owner): confirm concurrent or sequential).',
  },
  {
    company: 'Cognizant Technology Solutions',
    roles: [
      {
        company: 'Cognizant Technology Solutions',
        designation: 'Senior Associate / Technical Lead',
        duration: '2016',
        location: 'Boston, MA',
        summary:
          'Lead developer for a business and financial client — designing and developing modules for a taxation application, supporting production, and implementing new features.',
        scope: 'TODO(owner): confirm team size, geographies, budget/portfolio, and reporting line.',
        responsibilities: [
          'Developed new features for an existing workers’ compensation product to increase efficiency, handle more customers, and resolve transaction issues.',
          'Proposed a DB version management tool using Liquibase.',
          'Delivered quick turnaround for production support for SQL Server and Java issues.',
          'Interacted with payroll companies to understand requirements.',
        ],
        achievements: [
          'Situation: workers’ compensation product needed efficiency improvements. Action: developed new features and production support. Result: improved efficiency and customer volume.',
        ],
        technologies: ['Java', 'SQL Server', 'Liquibase'],
        peopleLeadership: undefined,
      },
    ],
    gapAfter: 'Calendar year 2016 overlaps with Qualcomm 2016–2018 (TODO(owner): confirm concurrent or sequential).',
  },
  {
    company: 'Capgemini (formerly IGATE Inc.)',
    roles: [
      {
        company: 'Capgemini (formerly IGATE Inc.)',
        designation: 'Technical Lead',
        duration: '2015',
        location: 'Bethlehem, PA',
        summary:
          'Drove proof-of-concepts for new technology, managed offshore projects, solved complex architectural problems, completed peer reviews, and led an onsite and offshore team.',
        scope: 'TODO(owner): confirm team size, geographies, budget/portfolio, and reporting line.',
        responsibilities: [
          'Developed an integration framework for various agents and insurance systems to collaborate over a common platform, removing a legacy system.',
          'Revamped the build methodology; introduced database version management (Flyway and Liquibase POCs).',
          'Revamped the UI with HTML5 and CSS3; introduced jQuery for faster client response; solved legacy messaging issues by introducing IBM MQ; proposed a Splunk POC for logging.',
        ],
        achievements: [
          'Situation: legacy system caused high maintenance overhead and licensing costs. Action: developed integration framework replacing the legacy system. Result: reduced maintenance overhead and licensing costs, eliminated significant manual effort.',
          'Situation: build methodology was manual and slow. Action: revamped build methodology with database version management POCs. Result: reduced manual effort by 6 hours per build.',
        ],
        technologies: ['Java', 'HTML5', 'CSS3', 'jQuery', 'IBM MQ', 'Flyway', 'Liquibase', 'Splunk'],
        peopleLeadership: 'Led an onsite and offshore team.',
      },
    ],
    gapAfter: 'Calendar year 2015 overlaps with TCS 2008–2015 (TODO(owner): confirm concurrent onsite/offshore or sequential).',
  },
  {
    company: 'Tata Consultancy Services',
    roles: [
      {
        company: 'Tata Consultancy Services',
        designation: 'IT Analyst / Project Lead',
        duration: '2008 — 2015',
        location: 'Bangalore, India / San Diego, CA',
        summary:
          'Led offshore teams designing, estimating, and developing projects as a full-stack engineer — including a large HCM transformation and a rich Java-based Jobsite.',
        scope: 'TODO(owner): confirm team size, geographies, budget/portfolio, and reporting line.',
        responsibilities: [
          'Converted an enterprise-level HCM app from a licensed tech stack to an open-source stack (JSF, Spring, Hibernate/iBatis, Quick Rules, Oracle).',
          'Developed and converted an ASP-based Jobsite to a UI-rich Java-based Jobsite application (project-lead from offshore).',
          'Added security layers against XSS, SQL injection, and invalid user attempts with the corporate security team.',
          'Developed a Job Search page by converting an Oracle-based search to Apache Solr-based search.',
          'Introduced Oracle Workflow Builder; ran POCs, created the framework, and designed workflows from scratch.',
        ],
        achievements: [
          'Situation: enterprise HCM app ran on a licensed tech stack. Action: converted to open-source stack (JSF, Spring, Hibernate/iBatis, Quick Rules, Oracle). Result: $1M+ direct licensing savings; multiple certificates of achievement, appreciations and On-the-Spot awards by client and vendor.',
          'Situation: ASP-based Jobsite needed a UI-rich Java replacement. Action: project-led offshore delivery of Java-based Jobsite. Result: defect-free delivery; On-the-Spot Award.',
          'Situation: Oracle-based job search needed replacement. Action: converted to Apache Solr-based search. Result: Star of the Month for driving, estimating, developing, and delivering the project.',
        ],
        technologies: ['Java', 'JSF', 'Spring', 'Hibernate', 'iBatis', 'Oracle', 'Apache Solr', 'Oracle Workflow Builder', 'JavaScript'],
        peopleLeadership: 'Led offshore teams designing, estimating, and developing projects.',
      },
    ],
    gapAfter: undefined,
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology (B.Tech / B.E.) — Computer Science & Engineering',
    institution: 'West Bengal University of Technology — Kolkata, India',
    year: 'TODO(owner): graduation year',
  },
];

export const certifications = [
  {
    name: 'Sun Certified Java Programmer 5',
    issuer: 'Sun Microsystems',
    year: '2010',
    credentialUrl: '',
  },
];
