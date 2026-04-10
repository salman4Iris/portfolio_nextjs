/**
 * PROJECTS DATA
 * Portfolio projects from Salman Khan's experience
 * ES6+ strict TypeScript with readonly properties
 */

import type { Project } from '@/types';

export const PROJECTS: readonly Project[] = [
  {
    id: 'rems',
    title: 'Regulatory Execution Management System (REMS)',
    description:
      'Developed a comprehensive web-based REMS to streamline trade reporting, compliance monitoring, and order execution for financial markets. The application ensures adherence to global regulations (MiFID II, SEC, FINRA) by enabling real-time trade execution, automated compliance validation, and exception handling. It integrates with market data sources, FIX protocol, and external trading platforms, while providing a secure, role-based access control system and a regulatory compliance dashboard with audit trail functionality.',
    shortDescription:
      'Web-based trading system with real-time compliance monitoring and regulatory reporting',
    technologies: [
      'ReactJS',
      'Redux',
      'TypeScript',
      'Node.js',
      'Java',
      'Oracle SQL',
    ],
    duration: 'April 2024 - Present',
    role: 'Senior React Developer',
    company: 'Iris Software Pvt. Ltd.',
    highlights: [
      'Real-time trade execution and compliance validation',
      'Global regulatory compliance (MiFID II, SEC, FINRA)',
      'FIX protocol integration for market data',
      'Role-based access control system',
      'Comprehensive audit trail functionality',
      'Exception handling and automated workflows',
    ],
    featured: true,
    links: {},
  },
  {
    id: 'oneview',
    title: 'Oneview Portal',
    description:
      'A comprehensive Dealer Admin portal enabling clients to manage product approvals, regional deactivations, and sales coverage assignments. The portal provides intuitive workflows for product governance and relationship management with real-time updates and collaborative features.',
    shortDescription:
      'Dealer Admin portal for product management and sales coverage',
    technologies: ['React', 'Redux', 'TypeScript', 'Material Design', 'HTML5', 'CSS3'],
    duration: 'Sep 2021 - Present',
    role: 'React Developer',
    company: 'Iris Software Pvt. Ltd.',
    highlights: [
      'Product approval and denial workflows',
      'Regional product deactivation management',
      'Primary sales coverage assignments',
      'Real-time collaborative comments system',
      'Intuitive admin interface',
    ],
    featured: true,
    links: {},
  },
  {
    id: 'myglamm-mobile',
    title: 'MyGlamm E-Commerce Mobile Website V2',
    description:
      'Developed and maintained the MyGlamm mobile e-commerce website, migrating from Angular Universal to React with server-side rendering. Implemented comprehensive analytics tracking, lazy loading, and performance optimization to enhance mobile user experience. Featured a seamless checkout flow and integrated with multiple payment gateways.',
    shortDescription:
      'React-based e-commerce mobile platform for beauty products',
    technologies: [
      'React',
      'Redux',
      'NextJs',
      'SSR',
      'Socket.io',
      'HTML5',
      'CSS3',
    ],
    duration: 'Feb 2020 - Aug 2021',
    role: 'React Developer',
    company: 'MyGlamm',
    highlights: [
      'Migration from Angular Universal to React',
      'Server-side rendering implementation',
      'Analytics tracking and optimization',
      'Lazy loading and performance improvements',
      'Payment gateway integration (Razorpay, Citrus)',
      'Mobile-first responsive design',
    ],
    featured: true,
    links: {
      live: 'https://www.myglamm.com',
    },
  },
  {
    id: 'popxo',
    title: 'POPxo E-Commerce Website',
    description:
      'Developed and maintained the POPxo website, India\'s largest online community for women combining content and commerce. Implemented AMP pages for faster mobile loads, integrated comprehensive analytics tools, and optimized for SEO. Built responsive designs for both desktop and mobile platforms with dynamic content management.',
    shortDescription:
      'Content and commerce platform for women with shopping features',
    technologies: ['React', 'Redux', 'SSR', 'AMP Pages', 'HTML5', 'CSS3'],
    duration: 'Jun 2020 - Aug 2021',
    role: 'React Developer',
    company: 'MyGlamm',
    highlights: [
      'AMP page implementation for faster loads',
      'Analytics integration (GTM, Adobe, Facebook Pixel)',
      'SEO and schema markup optimization',
      'Content management system integration',
      'A/B testing for conversion optimization',
      'Mobile responsiveness optimization',
    ],
    featured: true,
    links: {
      live: 'https://www.popxo.com',
    },
  },
  {
    id: 'linx-accountmaster',
    title: 'Linx AccountMaster Portal',
    description:
      'Full-stack development of a comprehensive portal managing country details, client information, dealers, and products with complex relationship mappings. Maintained features and implemented client-requested updates with a focus on data integrity and accurate reporting.',
    shortDescription:
      'Portal for managing clients, dealers, and counterparty relationships',
    technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Java', 'Oracle SQL'],
    duration: 'Jan 2021 - Present',
    role: 'Full Stack Developer',
    company: 'Iris Software Pvt. Ltd.',
    highlights: [
      'Complex relationship mapping between entities',
      'Client and dealer management',
      'Product catalog management',
      'Data integrity validation',
      'Comprehensive reporting features',
    ],
    featured: false,
    links: {},
  },
  {
    id: 'instrument-admin',
    title: 'Instrument Admin Portal',
    description:
      'Developed and maintained a trading platform enabling users to trade instruments including loans, cash, and bonds. Provided comprehensive instrument management, real-time trading capabilities, and detailed transaction tracking with role-based access control.',
    shortDescription: 'Trading platform for managing financial instruments',
    technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Java', 'Oracle SQL'],
    duration: 'Dec 2021 - Present',
    role: 'Full Stack Developer',
    company: 'Iris Software Pvt. Ltd.',
    highlights: [
      'Trading functionality for multiple instrument types',
      'Real-time price updates',
      'Transaction tracking and history',
      'Role-based access control',
      'Comprehensive reporting',
    ],
    featured: false,
    links: {},
  },
  {
    id: 'qrcode-verifier',
    title: 'QRCode Verifier',
    description:
      'Developed a module for verifying the authenticity of MyGlamm products through QR code scanning. Implemented secure verification logic and integration with product database to prevent counterfeit products.',
    shortDescription:
      'Product authentication verification system',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    duration: 'Apr 2020 - Aug 2021',
    role: 'React Developer',
    company: 'MyGlamm',
    highlights: [
      'QR code scanning and verification',
      'Counterfeit detection system',
      'Secure authentication logic',
      'Product database integration',
    ],
    featured: false,
    links: {},
  },
  {
    id: 'lococcitane',
    title: 'L\'OCCITANE E-Commerce Mobile Website',
    description:
      'Developed and maintained the L\'OCCITANE AU BRESIL mobile website for a Brazilian cosmetics brand. Implemented Angular Universal for server-side rendering, multilingual support with i18n localization, and responsive mobile-first design.',
    shortDescription:
      'Mobile e-commerce platform for Brazilian cosmetics brand',
    technologies: ['Angular', 'Angular Universal', 'TypeScript', 'Bootstrap', 'HTML5', 'CSS3'],
    duration: 'Jul 2019 - Dec 2019',
    role: 'Angular Developer',
    company: 'MyGlamm',
    highlights: [
      'Server-side rendering with Angular Universal',
      'Multilingual i18n support',
      'Mobile-first responsive design',
      'Bootstrap framework integration',
      'Performance optimization',
    ],
    featured: false,
    links: {},
  },
];

/**
 * GET PROJECT BY ID
 * Retrieves a project by its ID
 * @param id - Project identifier
 * @returns Project or undefined if not found
 */
export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find((project: Project): boolean => project.id === id);
};

/**
 * GET FEATURED PROJECTS
 * Returns only featured projects
 * @returns Array of featured projects
 */
export const getFeaturedProjects = (): readonly Project[] => {
  return PROJECTS.filter((project: Project): boolean => project.featured);
};

/**
 * GET PROJECTS BY TECHNOLOGY
 * Filters projects by technology
 * @param technology - Technology name to search for
 * @returns Array of projects using that technology
 */
export const getProjectsByTechnology = (
  technology: string
): readonly Project[] => {
  return PROJECTS.filter((project: Project): boolean =>
    project.technologies.some((tech: string): boolean =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};
