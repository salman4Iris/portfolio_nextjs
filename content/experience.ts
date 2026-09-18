/**
 * EXPERIENCE DATA
 * Salman Khan's work experience history
 * ES6+ strict TypeScript with readonly properties
 */

import type { Experience } from '@/types';

export const EXPERIENCES: readonly Experience[] = [
  {
    id: 'iris-current',
    company: 'Iris Software Pvt. Ltd.',
    position: 'Engineer Technology (Automation Practice)',
    duration: 'Sep 2021 - Present',
    startDate: '2021-09-01',
    endDate: '2026-09-17',
    description:
      'Contributing to frontend engineering for AgentStudio and AI-powered web applications for Educational Testing Service (ETS) and MarketAxess. Builds interactive React interfaces for agent orchestration, conversational UI, enterprise trading workflows, and high-density data dashboards.',
    isCurrent: true,
    technologies: [
      'React.js',
      'Next.js',
      'Redux',
      'TypeScript',
      'Angular',
      'React Flow',
      'Python',
      'Node.js',
      'Java',
      'JavaScript',
      'Docker',
      'Oracle SQL',
      'Material Design',
      'AG Grid',
      'Jest',
      'GitHub Copilot',
    ],
    keyResults: [
      'Contributed to AgentStudio interfaces for configuring, orchestrating, and monitoring AI agents',
      'Engineered the HiSet conversational UI for ETS using Next.js and streamed backend responses',
      'Architected and deployed REMS and OneView from scratch for enterprise financial workflows',
      'Successfully launched and deployed the OneView application to production in Feb 2025',
      'Successfully launched the REMS application to production in 2024',
      'Received two Client Appreciation Awards in 2024 and Employee of the Month in Nov 2021',
    ],
    achievements: [
      'Built interactive React interfaces backed by Python services for autonomous AI agent workflows',
      'Managed UI state, streaming response payloads, and conversational data rendering for HiSet',
      'Applied GitHub Copilot to automate boilerplate, refactor features, and improve development velocity',
      'Developed REMS with React, Material Design, and AG Grid for trade execution and compliance monitoring',
      'Designed high-density trade dashboards and optimized rendering for financial datasets',
      'Led implementation of the OneView web application to improve dealer-client relationships',
      'Designed frontend architecture and established shared code libraries for maintainable delivery',
      'Used AG Grid to create dashboards and tabular structures for trade listings',
      'Supported Linx AccountMaster, InstrumentAdmin, and DealerAdmin with Angular, Java, and Oracle SQL',
      'Worked directly with US and UK clients at MarketAxess to understand and deliver requirements',
      'Contributed across frontend and backend development while optimizing application performance',
      'Participated in PI planning and sprint estimation while mentoring developers on architecture and testing',
      'Implemented CI/CD practices with Docker and developed Jest tests using TDD principles',
      'Resolved production bugs and issues in a timely manner to maintain application reliability',
    ],
  },
  {
    id: 'myglamm',
    company: 'Good Glamm Group (formerly MyGlamm)',
    position: 'Software Engineer',
    duration: 'Jan 2018 - Sep 2021',
    startDate: '2018-01-01',
    endDate: '2021-09-30',
    description:
      'Led frontend engineering for the MyGlamm e-commerce platform, migrating from Angular Universal to React and Next.js while improving SEO, caching, mobile performance, checkout, analytics, and internal commerce tooling.',
    isCurrent: false,
    technologies: [
      'React',
      'NextJs',
      'Redux',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'MongoDB',
      'AWS',
      'Socket.io',
    ],
    keyResults: [
      'Developed the MyGlamm website from the ground up and deployed to production',
      'Led the frontend team for 6 months and mentored developers through project delivery',
      'Built REST APIs, CMS workflows, analytics integrations, and customer communication tooling',
    ],
    achievements: [
      'Created seamless checkout flow to enhance customer purchase experience',
      'Migrated MyGlamm website from Angular to ReactJs/NextJs',
      'Implemented server-side rendering for better website crawling and caching',
      'Integrated payment gateways (Citrus and Razorpay) for secure transactions',
      'Implemented token authentication using Interceptor for secure user access',
      'Conducted scalability and responsiveness testing',
      'Integrated i18n Localization for multilingual support',
      'Applied lazy loading to optimize mobile website performance',
      'Integrated various analytics and marketing tools (GTM, Adobe, Facebook Pixel, WebEngage)',
      'Built Angular CMS platforms for product, customer, discount, order, and content management',
      'Developed Node.js and Express.js REST APIs, bulk SMS tooling, and customer notification services',
      'Integrated CleverTap and executed A/B testing strategies to improve conversion rates',
    ],
  },
  {
    id: 'bridgelabz',
    company: 'BridgeLabz Solution LLP',
    position: 'Product Trainee Engineer',
    duration: 'Feb 2017 - Dec 2017',
    startDate: '2017-02-01',
    endDate: '2017-12-31',
    description:
      'Trained in full-stack MEAN application development and built modular frontend components and REST integrations with MongoDB-backed services.',
    isCurrent: false,
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Angular', 'MongoDB', 'Node.js'],
    keyResults: [],
    achievements: [
      'Architected and built Fundoo Notes, a Google Keep-inspired application using AngularJS, Angular 2, Node.js, Express.js, and MongoDB',
      'Implemented dynamic note creation, color coding, reminders, authentication, and persistent state',
      'Designed reusable UI components and integrated REST APIs with MongoDB backends',
    ],
  },
];

/**
 * GET EXPERIENCE BY ID
 * Retrieves an experience entry by its ID
 * @param id - Experience identifier
 * @returns Experience or undefined if not found
 */
export const getExperienceById = (id: string): Experience | undefined => {
  return EXPERIENCES.find((exp: Experience): boolean => exp.id === id);
};

/**
 * GET CURRENT EXPERIENCE
 * Returns the current work experience
 * @returns Current experience or undefined
 */
export const getCurrentExperience = (): Experience | undefined => {
  return EXPERIENCES.find((exp: Experience): boolean => exp.isCurrent);
};

/**
 * GET SORTED EXPERIENCES
 * Returns experiences sorted by start date (newest first)
 * @returns Sorted experiences array
 */
export const getSortedExperiences = (): readonly Experience[] => {
  const sorted: Experience[] = [...EXPERIENCES];
  return sorted.sort((a: Experience, b: Experience): number => {
    const dateA: number = new Date(b.startDate).getTime();
    const dateB: number = new Date(a.startDate).getTime();
    return dateA - dateB;
  });
};

/**
 * CALCULATE TOTAL EXPERIENCE YEARS
 * Calculates total years of professional experience
 * @returns Total years as number
 */
export const calculateTotalExperienceYears = (): number => {
  const startDates: number[] = EXPERIENCES.map((exp: Experience): number =>
    new Date(exp.startDate).getTime()
  );
  const earliestDate: number = Math.min(...startDates);
  const yearsInMillis: number = Date.now() - earliestDate;
  return Math.floor(yearsInMillis / (1000 * 60 * 60 * 24 * 365));
};
