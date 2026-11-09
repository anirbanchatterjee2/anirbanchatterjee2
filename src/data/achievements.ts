export interface Achievement {
  title: string;
  description: string;
  year: string;
  organization: string;
  impact?: string; // Only verifiable figures from resumes. Omit (undefined) otherwise.
  tags: string[];
  image?: string; // Optional photo of certificate / award ceremony (e.g. /images/achievements/*.jpg)
}

/**
 * Achievements — pre-filled from resumes. Do not invent.
 * { impact } contains only figures stated in the source resumes.
 * Add `image` paths here to show certificate/award photos on the achievements page.
 */
export const achievements: Achievement[] = [
  {
    title: '$25M+ in enterprise business impact',
    description:
      'Platform modernisation and secure SaaS transformations across Citi AML/risk, L&T Infotech, and TCS — including open-source migrations and cloud-native re-architecture.',
    year: '2008 — Present',
    organization: 'Citi Bank / L&T Infotech / TCS',
    impact: '$25M+',
    tags: ['Platform Modernization', 'Leadership'],
  },
  {
    title: '$20M documented enterprise savings — name screening platform',
    description:
      'Designed and delivered a high-throughput name screening platform (1000+ TPS, billions of records, petabyte-scale batch) with a multi-rule risk evaluation engine (Java, Apache Solr, Talend, Drools).',
    year: '2018 — 2019',
    organization: 'L&T Infotech (Citi Engagement)',
    impact: '$20M',
    tags: ['Architecture', 'Distributed Systems', 'Apache Solr'],
  },
  {
    title: '$4M+ licensing savings via open-source adoption',
    description:
      'As Assistant Vice President at Citi, reduced vendor dependency by transitioning legacy, rule-heavy risk systems to scalable microservices on open-source stacks.',
    year: '2019 — 2022',
    organization: 'Citi Bank',
    impact: '$4M+',
    tags: ['Microservices', 'Architecture'],
  },
  {
    title: '70% improvement in deployment velocity',
    description:
      'As Vice President at Citi, standardised CI/CD pipelines and release governance frameworks across a multi-layer, geographically distributed engineering organisation.',
    year: '2023 — Present',
    organization: 'Citi Bank',
    impact: '70% deployment velocity ↑',
    tags: ['DevSecOps', 'CI/CD', 'Leadership'],
  },
  {
    title: '1000+ TPS peak name screening at petabyte scale',
    description:
      'Name screening product processing millions of records now (billions predicted) with sub-second decision latency — petabyte-scale batch with a distributed risk engine.',
    year: '2018 — 2019',
    organization: 'L&T Infotech (Citi Engagement)',
    impact: '1000+ TPS',
    tags: ['Batch Processing', 'Distributed Systems'],
  },
  {
    title: '$1M+ direct licensing savings — HCM open-source migration',
    description:
      'Led the conversion of an enterprise HCM app from a licensed stack to open source (JSF, Spring, Hibernate/iBatis, Quick Rules, Oracle).',
    year: '2008 — 2015',
    organization: 'Tata Consultancy Services',
    impact: '$1M+',
    tags: ['Architecture', 'Open Source'],
  },
  {
    title: '90% workflow performance improvement — Qualstar Award',
    description:
      'Redesigned the enterprise workflow system using an intermediate app layer between Oracle Workflow Builder and Activiti at Qualcomm.',
    year: '2016 — 2018',
    organization: 'Qualcomm Inc.',
    impact: '90% efficiency ↑',
    tags: ['Workflows', 'Activiti'],
  },
  {
    title: 'Diamond Qualstar — 160 hours/year of manual effort eliminated',
    description:
      'Designed the employee taxation system (1095C form) and an automated IRS file-transfer channel (Java 7, Oracle DB) at Qualcomm.',
    year: '2016 — 2018',
    organization: 'Qualcomm Inc.',
    impact: '160 hrs/year saved',
    tags: ['Automation', 'Java'],
  },
  {
    title: '30–40% infrastructure cost reduction — AWS migration',
    description:
      'Led migration of 100+ enterprise integrations to AWS cloud-native microservices and movement of on-premise applications to AWS at Qualcomm.',
    year: '2016 — 2018',
    organization: 'Qualcomm Inc.',
    impact: '30–40% infra cost ↓',
    tags: ['AWS', 'Microservices'],
  },
  {
    title: 'Citi Engineer Excellence — Top Performer; Innovation Award',
    description:
      'Citi Engineer Excellence Exam Top Performer (~5% global selection rate) and Innovation Award for the Compliance Platform.',
    year: '2023 — Present',
    organization: 'Citi Bank',
    impact: undefined,
    tags: ['Recognition'],
  },
  {
    title: 'Pride Award — FinTech in-house product',
    description:
      'Awarded by L&T Infotech for building and designing a FinTech in-house product that saved the customer $20 million.',
    year: '2018 — 2019',
    organization: 'L&T Infotech',
    impact: undefined,
    tags: ['Recognition'],
  },
  {
    title: 'On-the-Spot Awards & Star of the Month',
    description:
      'Multiple certificates of achievement, appreciations, and On-the-Spot awards from client and vendor (TCS), including for defect-free delivery of the Java-based Jobsite and the Solr-based Job Search (Star of the Month).',
    year: '2008 — 2015',
    organization: 'Tata Consultancy Services',
    impact: undefined,
    tags: ['Recognition'],
  },
  {
    title: 'Sun Certified Java Programmer 5',
    description: 'Professional Java certification (SCJP 5).',
    year: '[TODO: Year]',
    organization: 'Sun Microsystems',
    impact: undefined,
    tags: ['Certification', 'Java'],
  },
  {
    title: 'AIP Anchor Award — Academic Interface Program',
    description:
      'Awarded for university talks on new and emerging technologies, alongside teaching school students and donation drives for under-privileged education (including UNICEF education charities).',
    year: '[TODO: Year]',
    organization: 'TCS Academic Interface Program',
    impact: undefined,
    tags: ['Community Service', 'Recognition'],
  },
];
