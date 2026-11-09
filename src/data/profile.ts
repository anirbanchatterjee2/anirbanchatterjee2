/**
 * Central profile configuration — SINGLE SOURCE OF TRUTH.
 * Edit name, headline, contact, socials here. Every page consumes this.
 *
 * Data pre-filled from Anirban's resumes (older detailed + newer VP resume).
 * Placeholders clearly marked with [TODO...] remain where no source was provided.
 * Phone number and work-authorization details from resumes are deliberately NOT published here.
 */
export const profile = {
  name: 'ANIRBAN CHATTERJEE',
  firstName: 'Anirban',
  headline: 'Engineering Executive | Technology Strategist | AI & Distributed Systems Architect',
  designation: 'Vice President, Engineering · Platform Modernization | Secure SaaS | AI-Assisted Delivery',
  location: 'Pune, India · 8+ years in the U.S.',
  email: 'hereiam.1987@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anirban-chatterjee-42151a19/',
  github: 'https://github.com/anirbanchatterjee2',
  resumePdfPath: '/resume.pdf', // Place a generated PDF at public/resume.pdf (see /resume page)
  heroIntro:
    '18+ years building enterprise technology, modernising mission-critical platforms and leading engineering organisations across financial services and global technology companies. Focused on the intersection of AI-native engineering, intelligent automation and distributed systems.',
  shortIntro:
    'Engineering executive with 18+ years (since 2008, 8+ in the U.S.) modernising mission-critical AML/risk and enterprise platforms in regulated, high-security environments — now focused on AI-native engineering and distributed systems.',
  longIntro: [
    'I started my career in 2008 at Tata Consultancy Services with a strong foundation in Java and enterprise software, growing through full-stack delivery (Spring Boot, Angular, AWS, distributed systems) into onsite/offshore coordination, vendor management, and technical leadership across the U.S. (Qualcomm in San Diego, Cognizant in Boston, Capgemini in Bethlehem, PA) and India.',
    'Since 2018 I have led architecture and engineering for Citi Bank’s AML and risk platforms — first as Technical Architect at L&T Infotech, then as Assistant Vice President (2019–2022) and Vice President of AML & Risk Technology (2023–present) in Pune — overseeing a multi-layer, geographically distributed engineering organisation, institutionalising DevSecOps and CI/CD practices, and introducing AI-assisted development tooling at scale (GitHub Copilot, Devin, RAG pipelines).',
    'Today my work and writing focus on agentic AI, RAG architectures, LLM-powered applications, and AI-native engineering — alongside distributed systems, cloud architecture, and modern engineering leadership.',
    'This site is my canonical record of experience, projects, and technical writing. Everything here is editable from version-controlled source — no invented achievements, no CMS dependency.',
  ],
  metrics: [
    { value: '18+', label: 'Years of Experience' },
    { value: '$25M+', label: 'Enterprise Business Impact' },
    { value: '1000+', label: 'TPS · High-Throughput Systems' },
    { value: '50+', label: 'Engineers Led' },
  ],
  careerTimeline: [
    {
      organization: 'Citi',
      designation: 'Vice President — AML & Risk Technology',
      dates: '2023 — Present',
      location: 'Pune, India',
      oneLiner: 'Leading a multi-layer engineering organisation delivering mission-critical AML/risk platforms globally.',
    },
    {
      organization: 'Qualcomm',
      designation: 'Staff Programmer / Solutions Architect',
      dates: '2016 — 2018',
      location: 'San Diego, CA',
      oneLiner: 'Architected enterprise integration platform; migrated 100+ integrations to AWS microservices.',
    },
    {
      organization: 'L&T Infotech',
      designation: 'Technical Architect',
      dates: '2018 — 2019',
      location: 'Tampa, FL / Pune, India',
      oneLiner: 'Designed a 1000+ TPS name-screening platform processing billions of records at petabyte scale.',
    },
    {
      organization: 'Tata Consultancy Services',
      designation: 'IT Analyst / Project Lead',
      dates: '2008 — 2015',
      location: 'Bangalore, India / San Diego, CA',
      oneLiner: 'Led offshore full-stack delivery; converted licensed enterprise stacks to open source ($1M+ savings).',
    },
  ],
  targetRoles: [
    'VP / SVP Engineering',
    'Director of Engineering',
    'Head of Engineering',
    'Principal / Distinguished Engineer',
    'Enterprise / Solutions Architect',
    'AI Engineering Leader',
    'Technology Transformation Leader',
  ],
  careerHighlights: [
    { label: 'Experience', value: '18+ years (since 2008) · 8+ in the U.S.' },
    { label: 'Impact', value: '$25M+ measured business impact' },
    { label: 'Scale', value: '1000+ TPS name screening · petabyte batches' },
    { label: 'Leadership', value: 'VP Engineering · multi-layer org · 50+ engineers' },
  ],
  currentInterests: [
    { title: 'Generative AI', note: 'LLM-powered products and applications' },
    { title: 'Agentic AI', note: 'Multi-agent workflows, tool use, evaluation' },
    { title: 'RAG Architectures', note: 'Retrieval, embeddings, vector search' },
    { title: 'AI-Assisted Engineering', note: 'Copilot, Devin, automated test generation, AI code review' },
    { title: 'Distributed Systems', note: 'Kafka, microservices, petabyte-scale batch & streaming' },
  ],
  leadershipPrinciples: [
    {
      title: 'Platform before features',
      note: 'Reusable infrastructure (CI/CD templates, AI tooling, DevSecOps frameworks) multiplies every team’s output and eliminates reinvention at scale.',
    },
    {
      title: 'Evidence before commitment',
      note: 'Technology and tooling decisions are made with POC benchmarks and ROI data, not vendor demonstrations or engineering preference.',
    },
    {
      title: 'Metrics as culture',
      note: 'Throughput, defect density, deployment frequency, and SLA adherence are tracked, reviewed, and acted on — visibility creates accountability.',
    },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anirban-chatterjee-42151a19/' },
    { label: 'GitHub', href: 'https://github.com/anirbanchatterjee2' },
    { label: 'Email', href: 'mailto:hereiam.1987@gmail.com' },
  ],
} as const;

export const seoDefaults = {
  siteName: 'Anirban Chatterjee',
  title: 'Anirban Chatterjee — Engineering Executive | Technology Strategist | AI & Distributed Systems Architect',
  description:
    'Engineering executive with 18+ years modernising mission-critical enterprise platforms across financial services and global technology companies. Focused on AI-native engineering, intelligent automation and distributed systems.',
  locale: 'en_US',
  author: 'Anirban Chatterjee',
} as const;
