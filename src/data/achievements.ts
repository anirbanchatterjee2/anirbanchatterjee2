export type AchievementGroup =
  | 'Business Impact'
  | 'Architecture & Engineering'
  | 'Technology Transformation'
  | 'Engineering Leadership'
  | 'Leadership Outcomes'
  | 'Awards & Recognition';

export interface Achievement {
  title: string;
  description: string;
  contribution: string;
  year: string;
  organization: string;
  impact?: string; // Only figures stated in source resumes. Omit (undefined) otherwise.
  measurementBasis?: string; // How the impact figure was measured (TODO where unknown)
  tags: string[];
  group: AchievementGroup;
  selected?: boolean; // True = featured on the homepage (distinct initiatives only)
  image?: string; // Optional photo of certificate / award ceremony (e.g. /images/achievements/*.jpg)
}

/**
 * Achievement library — pre-filled from resumes. Do not invent.
 * { impact } contains only figures stated in the source resumes.
 * $25M+ is a roll-up headline with an explicit breakdown ($20M + $4M + $1M), not a fourth independent initiative.
 * `group` organises the library; `selected` picks the four homepage initiatives.
 * Add `image` paths here to show certificate/award photos.
 */
export const achievements: Achievement[] = [
  {
    title: '$25M+ enterprise business impact (roll-up)',
    description:
      'Platform modernisation and secure SaaS transformations across Citi AML/risk, L&T Infotech, and TCS — including open-source migrations and cloud-native re-architecture.',
    contribution: 'Architected and led multi-year modernisation programmes across banking and global technology clients, prioritising measurable cost, velocity and risk outcomes.',
    year: '2008 — Present',
    organization: 'Citi Bank / L&T Infotech / TCS',
    impact: '$25M+',
    measurementBasis:
      'Roll-up of three documented initiatives: $20M (L&T Infotech name screening, 2018–2019) + $4M (Citi AVP open-source migration, 2019–2022) + $1M (TCS HCM migration, 2008–2015). TODO(owner): confirm component attribution.',
    tags: ['Platform Modernization', 'Leadership'],
    group: 'Business Impact',
    selected: true,
  },
  {
    title: '$20M savings — name-screening platform at 1000+ TPS',
    description:
      'Designed and delivered a high-throughput name-screening platform (1000+ TPS, billions of records, petabyte-scale batch, sub-second latency) with a multi-rule risk evaluation engine (Java, Apache Solr, Talend, Drools).',
    contribution: 'Owned the domain-driven microservices architecture and the multi-business-rule risk algorithm; led a 10-member global team.',
    year: '2018 — 2019',
    organization: 'L&T Infotech (Citi Engagement)',
    impact: '$20M · 1000+ TPS',
    measurementBasis: 'Architecture improvements resulting in documented enterprise savings (source: L&T Infotech Pride Award citation). TODO(owner): confirm measurement basis.',
    tags: ['Architecture', 'Distributed Systems', 'Apache Solr'],
    group: 'Architecture & Engineering',
    selected: true,
  },
  {
    title: '$4M+ licensing savings via open-source microservices',
    description:
      'As Assistant Vice President at Citi, reduced vendor dependency by transitioning legacy, rule-heavy risk systems to scalable microservices on open-source stacks.',
    contribution: 'Set the target architecture and migration sequence; aligned engineering practices with regulatory-grade auditability in secure VPC environments.',
    year: '2019 — 2022',
    organization: 'Citi Bank',
    impact: '$4M+',
    measurementBasis: 'Reduced vendor dependency through open-source adoption (source: Citi AVP role outcomes). TODO(owner): confirm measurement basis.',
    tags: ['Microservices', 'Architecture'],
    group: 'Technology Transformation',
    selected: true,
  },
  {
    title: '70% deployment velocity improvement',
    description:
      'As Vice President at Citi, standardised CI/CD pipelines and release governance frameworks across a multi-layer, geographically distributed engineering organisation.',
    contribution: 'Institutionalised DevSecOps, code-review rigour, automated testing and release consistency; reduced infra provisioning from weeks to hours.',
    year: '2023 — Present',
    organization: 'Citi Bank',
    impact: '70% deployment velocity ↑',
    measurementBasis: 'Baseline pre-standardisation cycle times vs post-standardisation (source: Citi VP role outcomes). TODO(owner): confirm baseline and measurement period.',
    tags: ['DevSecOps', 'CI/CD', 'Leadership'],
    group: 'Engineering Leadership',
    selected: true,
  },
  {
    title: '1000+ TPS peak name screening at petabyte scale',
    description:
      'Name-screening product processing millions of records now (billions predicted) with sub-second decision latency — petabyte-scale batch with a distributed risk engine.',
    contribution: 'Designed the batch architecture (Talend + Drools) for quick-to-market delivery with headroom to billions of records.',
    year: '2018 — 2019',
    organization: 'L&T Infotech (Citi Engagement)',
    impact: '1000+ TPS',
    measurementBasis: 'TPS expectations and batch processing scale (source: L&T Infotech role outcomes). TODO(owner): confirm measurement basis.',
    tags: ['Batch Processing', 'Distributed Systems'],
    group: 'Architecture & Engineering',
  },
  {
    title: '$1M+ licensing savings — HCM open-source migration',
    description:
      'Led the conversion of an enterprise HCM app from a licensed stack to open source (JSF, Spring, Hibernate/iBatis, Quick Rules, Oracle).',
    contribution: 'Project-led offshore delivery end-to-end (estimation, design, development); earned multiple certificates of achievement and On-the-Spot awards.',
    year: '2008 — 2015',
    organization: 'Tata Consultancy Services',
    impact: '$1M+',
    measurementBasis: 'Direct licensing savings from licensed-to-open-source conversion (source: TCS role outcomes). TODO(owner): confirm measurement basis.',
    tags: ['Architecture', 'Open Source'],
    group: 'Technology Transformation',
  },
  {
    title: '90% workflow performance improvement — Qualstar Award',
    description:
      'Redesigned the enterprise workflow system using an intermediate app layer between Oracle Workflow Builder and Activiti at Qualcomm.',
    contribution: 'Designed the Activiti-based replacement and led the migration of 100+ enterprise integrations to AWS microservices.',
    year: '2016 — 2018',
    organization: 'Qualcomm Inc.',
    impact: '90% efficiency ↑',
    measurementBasis: 'Performance efficiency improvement (source: Qualcomm Qualstar Award). TODO(owner): confirm baseline.',
    tags: ['Workflows', 'Activiti'],
    group: 'Technology Transformation',
  },
  {
    title: 'Diamond Qualstar — 160 hours/year of manual effort eliminated',
    description:
      'Designed the employee taxation system (1095C form) and an automated IRS file-transfer channel (Java 7, Oracle DB) at Qualcomm.',
    contribution: 'Full-stack design, development and automation of a compliance-critical reporting flow.',
    year: '2016 — 2018',
    organization: 'Qualcomm Inc.',
    impact: '160 hrs/year saved',
    measurementBasis: 'Manual labor hours eliminated per year (source: Qualcomm Diamond Qualstar). TODO(owner): confirm measurement basis.',
    tags: ['Automation', 'Java'],
    group: 'Business Impact',
  },
  {
    title: '30–40% infrastructure cost reduction — AWS migration',
    description:
      'Led migration of 100+ enterprise integrations to AWS cloud-native microservices and movement of on-premise applications to AWS at Qualcomm.',
    contribution: 'Cloud-native re-architecture across integration and workflow platforms with 20+ external vendors.',
    year: '2016 — 2018',
    organization: 'Qualcomm Inc.',
    impact: '30–40% infra cost ↓',
    measurementBasis: 'Infrastructure and maintenance cost reduction (source: Qualcomm role outcomes). TODO(owner): confirm baseline.',
    tags: ['AWS', 'Microservices'],
    group: 'Technology Transformation',
  },
  {
    title: 'AI-assisted engineering at scale — RAG, Copilot, Devin',
    description:
      'Implemented a RAG pipeline for customer-screening case management; evaluated and deployed GitHub Copilot and Devin with automated test generation and AI-assisted code review under ROI governance.',
    contribution: 'Evaluated tools with POC benchmarks and ROI data; institutionalised AI-assisted delivery across distributed teams.',
    year: '2023 — Present',
    organization: 'Citi Bank',
    impact: undefined,
    measurementBasis: undefined,
    tags: ['RAG', 'AI-Assisted Delivery'],
    group: 'Engineering Leadership',
  },
  {
    title: 'Org design and delivery governance',
    description:
      'Built multi-layer engineering organisation with KPI dashboards tracking throughput, defect density, and SLA adherence across geographies and vendors.',
    contribution: 'Designed org structure, delivery governance frameworks, and release consistency standards for a distributed engineering organisation.',
    year: '2023 — Present',
    organization: 'Citi Bank',
    impact: undefined,
    measurementBasis: undefined,
    tags: ['Org Design', 'Delivery Governance'],
    group: 'Leadership Outcomes',
  },
  {
    title: 'Talent and retention',
    description:
      'Hiring, managing managers, and retention across a geographically distributed engineering organisation.',
    contribution: 'People-leadership layer spanning recruiting, managing managers, and engineer retention.',
    year: '2023 — Present',
    organization: 'Citi Bank',
    impact: undefined,
    measurementBasis: undefined,
    tags: ['Talent', 'Retention'],
    group: 'Leadership Outcomes',
  },
  {
    title: 'Regulator and audit outcomes',
    description:
      'Institutionalised DevSecOps practices aligned with regulatory controls; enhanced SDLC maturity within secure VPC environments.',
    contribution: 'Aligned engineering practices with regulatory-grade auditability for AML/risk platforms.',
    year: '2019 — Present',
    organization: 'Citi Bank / L&T Infotech',
    impact: undefined,
    measurementBasis: undefined,
    tags: ['DevSecOps', 'Compliance', 'Audit'],
    group: 'Leadership Outcomes',
  },
  {
    title: 'Citi Engineer Excellence — Top Performer; Innovation Award',
    description:
      'Citi Engineer Excellence Exam Top Performer (~5% global selection rate) and Innovation Award for the Compliance Platform.',
    contribution: 'Recognised for engineering excellence and platform innovation at Citi.',
    year: '2023 — Present',
    organization: 'Citi Bank',
    impact: undefined,
    measurementBasis: undefined,
    tags: ['Recognition'],
    group: 'Awards & Recognition',
  },
  {
    title: 'Pride Award — FinTech in-house product',
    description:
      'Awarded by L&T Infotech for building and designing a FinTech in-house product that saved the customer $20 million.',
    contribution: 'Architected the product that delivered the $20M savings programme.',
    year: '2018 — 2019',
    organization: 'L&T Infotech',
    impact: undefined,
    measurementBasis: undefined,
    tags: ['Recognition'],
    group: 'Awards & Recognition',
  },
  {
    title: 'On-the-Spot Awards & Star of the Month',
    description:
      'Multiple certificates of achievement, appreciations, and On-the-Spot awards from client and vendor (TCS), including for defect-free delivery of the Java-based Jobsite and the Solr-based Job Search (Star of the Month).',
    contribution: 'Recognised for defect-free delivery and end-to-end project leadership from offshore.',
    year: '2008 — 2015',
    organization: 'Tata Consultancy Services',
    impact: undefined,
    measurementBasis: undefined,
    tags: ['Recognition'],
    group: 'Awards & Recognition',
  },
  {
    title: 'Sun Certified Java Programmer 5',
    description: 'Professional Java certification (SCJP 5).',
    contribution: 'Certification validating enterprise Java expertise.',
    year: 'TODO(owner): certification year',
    organization: 'Sun Microsystems',
    impact: undefined,
    measurementBasis: undefined,
    tags: ['Certification', 'Java'],
    group: 'Awards & Recognition',
  },
  {
    title: 'AIP Anchor Award — Academic Interface Program',
    description:
      'Awarded for university talks on new and emerging technologies, alongside teaching school students and donation drives for under-privileged education (including UNICEF education charities).',
    contribution: 'Community engagement and knowledge sharing on emerging technologies.',
    year: 'TODO(owner): award year',
    organization: 'TCS Academic Interface Program',
    impact: undefined,
    measurementBasis: undefined,
    tags: ['Community Service', 'Recognition'],
    group: 'Awards & Recognition',
  },
];

export const achievementGroups: AchievementGroup[] = [
  'Business Impact',
  'Architecture & Engineering',
  'Technology Transformation',
  'Engineering Leadership',
  'Leadership Outcomes',
  'Awards & Recognition',
];
