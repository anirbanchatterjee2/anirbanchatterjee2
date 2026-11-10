export type AwardCategory =
  | 'Corporate Awards'
  | 'Engineering Excellence'
  | 'Leadership Recognition'
  | 'Innovation Awards'
  | 'Technical Certifications'
  | 'Other Recognition';

export interface Award {
  id: string;
  title: string;
  organisation: string;
  date: string; // ISO date string
  category: AwardCategory;
  description: string;
  context?: string; // Why the recognition was received
  contribution?: string; // My contribution
  certificateImage?: string; // Path to certificate image
  awardImage?: string; // Path to award ceremony photo
  additionalImages?: string[]; // Additional supporting images
  verificationUrl?: string; // Optional external verification link
  featured?: boolean; // Featured on homepage
  draft?: boolean; // Draft state
}

/**
 * Awards & Recognition library — pre-filled from resume content.
 * Do not invent awards. Add image paths when certificates/photos are uploaded.
 * Place images in public/images/awards/ and reference them here.
 */
export const awards: Award[] = [
  {
    id: 'citi-engineer-excellence',
    title: 'Citi Engineer Excellence — Top Performer',
    organisation: 'Citi Bank',
    date: '2023',
    category: 'Engineering Excellence',
    description:
      'Top Performer in the Citi Engineer Excellence Exam (~5% global selection rate) and Innovation Award for the Compliance Platform.',
    context: 'Recognised for engineering excellence and platform innovation in AML & Risk Technology.',
    contribution: 'Led architecture and engineering for AML/risk platforms; introduced AI-assisted development tooling at scale.',
    certificateImage: undefined,
    awardImage: undefined,
    additionalImages: [],
    verificationUrl: undefined,
    featured: true,
    draft: false,
  },
  {
    id: 'lti-pride-award',
    title: 'Pride Award — FinTech In-House Product',
    organisation: 'L&T Infotech',
    date: '2018',
    category: 'Innovation Awards',
    description:
      'Awarded for building and designing a FinTech in-house product that saved the customer $20 million.',
    context: 'Technical Architect on Citi engagement — designed name-screening platform.',
    contribution: 'Architected the product that delivered the $20M savings programme.',
    certificateImage: undefined,
    awardImage: undefined,
    additionalImages: [],
    verificationUrl: undefined,
    featured: true,
    draft: false,
  },
  {
    id: 'qualcomm-diamond-qualstar',
    title: 'Diamond Qualstar Award',
    organisation: 'Qualcomm Inc.',
    date: '2016 — 2018',
    category: 'Corporate Awards',
    description:
      'Eliminated 160 hours of manual labor per year via the employee taxation system (1095C form) and automated IRS file-transfer channel.',
    context: 'Solutions Architect — designed and built compliance-critical reporting automation.',
    contribution: 'Full-stack design, development and automation of employee taxation reporting flow.',
    certificateImage: undefined,
    awardImage: undefined,
    additionalImages: [],
    verificationUrl: undefined,
    featured: true,
    draft: false,
  },
  {
    id: 'qualcomm-qualstar',
    title: 'Qualstar Award — Workflow Performance',
    organisation: 'Qualcomm Inc.',
    date: '2016 — 2018',
    category: 'Engineering Excellence',
    description:
      'Increased performance efficiency by 90% by redesigning the enterprise workflow system.',
    context: 'Redesigned workflows using intermediate app layer between Oracle Workflow Builder and Activiti.',
    contribution: 'Designed the Activiti-based replacement and led migration of 100+ integrations to AWS microservices.',
    certificateImage: undefined,
    awardImage: undefined,
    additionalImages: [],
    verificationUrl: undefined,
    featured: false,
    draft: false,
  },
  {
    id: 'tcs-star-of-month',
    title: 'Star of the Month',
    organisation: 'Tata Consultancy Services',
    date: '2008 — 2015',
    category: 'Corporate Awards',
    description:
      'Recognised for driving, estimating, developing, and delivering the Solr-based Job Search project.',
    context: 'IT Analyst / Project Lead — full-stack delivery of Java-based applications.',
    contribution: 'Project-lead from offshore for Java-based Jobsite and Solr-based Job Search.',
    certificateImage: undefined,
    awardImage: undefined,
    additionalImages: [],
    verificationUrl: undefined,
    featured: false,
    draft: false,
  },
  {
    id: 'tcs-on-the-spot',
    title: 'On-the-Spot Awards',
    organisation: 'Tata Consultancy Services',
    date: '2008 — 2015',
    category: 'Corporate Awards',
    description:
      'Multiple certificates of achievement and appreciations from client and vendor, including defect-free delivery of the Java-based Jobsite.',
    context: 'Full-stack engineering delivery across enterprise applications.',
    contribution: 'Consistent defect-free delivery and technical leadership on client engagements.',
    certificateImage: undefined,
    awardImage: undefined,
    additionalImages: [],
    verificationUrl: undefined,
    featured: false,
    draft: false,
  },
  {
    id: 'scjp-5',
    title: 'Sun Certified Java Programmer 5',
    organisation: 'Sun Microsystems',
    date: 'TODO(owner): certification year',
    category: 'Technical Certifications',
    description: 'Professional Java certification validating enterprise Java expertise.',
    context: 'Early career certification demonstrating core Java proficiency.',
    contribution: 'Self-study and examination.',
    certificateImage: undefined,
    awardImage: undefined,
    additionalImages: [],
    verificationUrl: undefined,
    featured: false,
    draft: false,
  },
  {
    id: 'aip-anchor-award',
    title: 'AIP Anchor Award — Academic Interface Program',
    organisation: 'Tata Consultancy Services',
    date: 'TODO(owner): award year',
    category: 'Other Recognition',
    description:
      'Awarded for university talks on new and emerging technologies, alongside teaching school students and donation drives for under-privileged education.',
    context: 'Community engagement and knowledge sharing on emerging technologies.',
    contribution: 'University talks, school teaching, and education charity support including UNICEF.',
    certificateImage: undefined,
    awardImage: undefined,
    additionalImages: [],
    verificationUrl: undefined,
    featured: false,
    draft: false,
  },
  {
    id: 'qualcomm-appreciation',
    title: 'Appreciation @ Qualcomm',
    organisation: 'Qualcomm Inc.',
    date: '2016 — 2018',
    category: 'Corporate Awards',
    description: 'Appreciation award received during tenure at Qualcomm Inc. for contributions to engineering and delivery.',
    context: 'Recognised during employment at Qualcomm Inc. (San Diego, CA).',
    contribution: 'Contributed to enterprise integration platform, AWS migration, and workflow system redesign.',
    certificateImage: undefined,
    awardImage: undefined,
    additionalImages: [],
    verificationUrl: undefined,
    featured: false,
    draft: false,
  },
  {
    id: 'lnt-star-team-award-2',
    title: 'Start Team Award',
    organisation: 'L&T Infotech',
    date: '2018 — 2019',
    category: 'Corporate Awards',
    description: 'Start Team Award received during the Citi engagement at L&T Infotech for team collaboration and delivery.',
    context: 'Recognised as part of the Technical Architect team on the Citi name-screening platform engagement.',
    contribution: 'Contributed to the design and delivery of the high-throughput name-screening platform.',
    certificateImage: undefined,
    awardImage: undefined,
    additionalImages: [],
    verificationUrl: undefined,
    featured: false,
    draft: false,
  },
  {
    id: 'star-of-the-month-oct',
    title: 'Star of the Month — October',
    organisation: 'Tata Consultancy Services',
    date: '2008 — 2015',
    category: 'Corporate Awards',
    description: 'Star of the Month award for October, recognising delivery and technical leadership on client engagements.',
    context: 'Awarded during tenure at Tata Consultancy Services (Bangalore, India / San Diego, CA).',
    contribution: 'Recognised for driving, estimating, developing, and delivering client projects from offshore.',
    certificateImage: undefined,
    awardImage: undefined,
    additionalImages: [],
    verificationUrl: undefined,
    featured: false,
    draft: false,
  },
  {
    id: 'star-team-award',
    title: 'Star Team Award',
    organisation: 'Tata Consultancy Services',
    date: '2008 — 2015',
    category: 'Corporate Awards',
    description: 'Star Team Award recognising team performance and collaborative delivery on enterprise projects.',
    context: 'Awarded during tenure at Tata Consultancy Services.',
    contribution: 'Contributed to team-based delivery of enterprise applications and platform modernisation.',
    certificateImage: undefined,
    awardImage: undefined,
    additionalImages: [],
    verificationUrl: undefined,
    featured: false,
    draft: false,
  },
  {
    id: 'on-the-spot-8th-march',
    title: 'On-the-Spot Award — 8th March',
    organisation: 'Tata Consultancy Services',
    date: '2008 — 2015',
    category: 'Corporate Awards',
    description: 'On-the-Spot Award received on 8th March for defect-free delivery and client appreciation.',
    context: 'Awarded during tenure at Tata Consultancy Services.',
    contribution: 'Recognised for defect-free project delivery and technical excellence.',
    certificateImage: undefined,
    awardImage: undefined,
    additionalImages: [],
    verificationUrl: undefined,
    featured: false,
    draft: false,
  },
];

export const awardCategories: AwardCategory[] = [
  'Corporate Awards',
  'Engineering Excellence',
  'Leadership Recognition',
  'Innovation Awards',
  'Technical Certifications',
  'Other Recognition',
];
