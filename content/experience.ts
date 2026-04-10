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
    position: 'Engineer Technology',
    duration: 'Sep 2021 - Present',
    startDate: '2021-09-01',
    endDate: '2026-04-10',
    description:
      "Providing overall leadership to the entire project team, including managing deliverables of other functional team leaders. Managing large and complex projects or multiple components of a large project involving more than one company's product.",
    isCurrent: true,
    technologies: [
      'ReactJS',
      'Redux',
      'TypeScript',
      'Angular',
      'Node.js',
      'Java',
      'Docker',
      'Oracle SQL',
      'Material Design',
      'AG Grid',
    ],
    keyResults: [
      'Successfully launched and deployed the Oneview application in production in Feb 2025',
      'Successfully launched the REMS application in production in 2024',
      'Received two accolades in 2024 for outstanding client feedback',
      'Honored as the Best Employee of the Month in Nov 2021',
    ],
    achievements: [
      'Developed REMS Web Application from ground up utilizing ReactJS with Material Design and AG Grid libraries',
      'Providing mentorship to team members promoting best practices for code maintainability',
      'Leading implementation of OneView web application to enhance dealer-client relationships',
      'Designed and implemented front-end architecture and established common code libraries',
      'Implemented continuous integration pipeline using Docker to streamline deployment',
      'Utilized AG Grid to create dashboards and tabular structures for trade listings',
      'Developed and executed Jest test cases for various applications',
      'Worked directly with US and UK clients (Marketaxess) to address requirements',
      'Engaged in both front-end and back-end development optimizing code for performance',
      'Actively resolved production bugs and issues in a timely manner',
    ],
  },
  {
    id: 'myglamm',
    company: 'MyGlamm (Good Glamm Group)',
    position: 'Software Engineer',
    duration: 'Jan 2018 - Sep 2021',
    startDate: '2018-01-01',
    endDate: '2021-09-30',
    description:
      'Developed the MyGlamm E-commerce Website from the ground up. Migrated from Angular to ReactJs/NextJs including development of React-based search components. Optimized for both desktop and mobile, resolving bugs and improving performance.',
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
      'Led frontend team for 6 months guiding them through successful project completion',
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
      'Built and integrated CMS with Google Analytics for performance tracking',
      'Developed REST APIs in Node.js for backend services',
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
      'Trained in full-stack web development with focus on modern frameworks and best practices. Contributed to product development with mentorship from experienced engineers.',
    isCurrent: false,
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Angular', 'MongoDB', 'Node.js'],
    keyResults: [],
    achievements: [
      'Completed intensive training in full-stack development',
      'Contributed to multiple product features',
      'Gained hands-on experience with modern web development practices',
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
