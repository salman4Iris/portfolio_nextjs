/**
 * PROJECTS DATA
 * Portfolio projects from Salman Khan's experience
 * ES6+ strict TypeScript with readonly properties
 */

import type { Project } from '@/types';

export const PROJECTS: readonly Project[] = [
  {
    id: 'iris-agent-studio',
    title: 'Iris Agent Studio',
    description:
      'Engineered an enterprise-grade Agent Studio canvas that transforms complex, multi-layered Python LLM backend processes into an interactive and observable node-based workflow interface.',
    shortDescription: 'Node-based interface for orchestrating and monitoring autonomous AI agents',
    technologies: ['React', 'React Flow', 'Redux', 'Tailwind CSS', 'Python', 'PostgreSQL'],
    duration: 'Aug 2026 - Present',
    role: 'Engineer Technology',
    company: 'Iris Software Pvt. Ltd.',
    highlights: [
      'Interactive node-based workflow canvas',
      'Agent orchestration and execution monitoring',
      'Python LLM backend integration',
      'Observable enterprise AI workflows',
    ],
    featured: true,
    links: {},
  },
  {
    id: 'mcp-nexus',
    title: 'MCP Nexus',
    description:
      'Engineered an interactive AI design platform for visually orchestrating autonomous LLM workflows and dynamically managing multi-server tool registries through a real-time graph canvas.',
    shortDescription: 'Visual platform for LLM workflow orchestration and MCP tool registries',
    technologies: ['ReactJS', 'Tailwind CSS', 'Python', 'LLM', 'PostgreSQL'],
    duration: 'Aug 2026 - Present',
    role: 'Engineer Technology',
    company: 'Iris Software Pvt. Ltd.',
    highlights: [
      'Visual LLM workflow orchestration',
      'Real-time graph canvas interactions',
      'Multi-server tool registry management',
      'Autonomous agent workflow design',
    ],
    featured: true,
    links: {},
  },
  {
    id: 'hiset-chatbot',
    title: 'HiSet Chatbot Web Application',
    description:
      'Engineered the Next.js-based HiSet Chatbot frontend for ETS, transforming user questions into database queries and rendering streamed backend responses and conversational data transformations for end-users.',
    shortDescription: 'AI-powered chatbot for natural-language database interaction',
    technologies: ['Next.js', 'ReactJS', 'JavaScript', 'TypeScript', 'Python', 'AI Chatbot'],
    duration: 'Apr 28 2026 - Aug 30 2026',
    role: 'Engineer Technology',
    company: 'Iris Software Pvt. Ltd.',
    highlights: [
      'Natural-language querying for database information',
      'Conversational UI built with Next.js and React',
      'Improved accessibility of data retrieval for non-technical users',
      'Productized AI-driven user experience',
    ],
    featured: true,
    links: {},
  },
  {
    id: 'rems',
    title: 'Regulatory Execution Management System (REMS)',
    description:
      'Developed a comprehensive web-based REMS to streamline trade reporting, compliance monitoring, and order execution for financial markets. The application ensures adherence to global regulations (MiFID II, SEC, FINRA) by enabling real-time trade execution, automated compliance validation, and exception handling. It integrates with market data sources, FIX protocol, and external trading platforms, while providing a secure, role-based access control system and a regulatory compliance dashboard with audit trail functionality.',
    shortDescription:
      'Web-based trading system with real-time compliance monitoring and regulatory reporting',
    technologies: ['ReactJS', 'Redux', 'JavaScript', 'TypeScript', 'Node.js', 'Java', 'Oracle SQL'],
    duration: 'Apr 30 2024 - Jan 30 2026',
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
    shortDescription: 'Dealer Admin portal for product management and sales coverage',
    technologies: [
      'React',
      'Redux',
      'HTML',
      'CSS',
      'TypeScript',
      'MarketAxess Shared Library',
      'Material Design',
    ],
    duration: 'Sep 8 2021 - Jan 30 2026',
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
    shortDescription: 'React-based e-commerce mobile platform for beauty products',
    technologies: ['React', 'Redux', 'NextJs', 'SSR', 'Socket.io', 'HTML5', 'CSS3', 'TypeScript'],
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
      "Developed and maintained the POPxo website, India's largest online community for women combining content and commerce. Implemented AMP pages for faster mobile loads, integrated comprehensive analytics tools, and optimized for SEO. Built responsive designs for both desktop and mobile platforms with dynamic content management.",
    shortDescription: 'Content and commerce platform for women with shopping features',
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
    shortDescription: 'Portal for managing clients, dealers, and counterparty relationships',
    technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Java', 'Oracle SQL'],
    duration: 'Jan 5 2021 - Jan 30 2026',
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
    duration: 'Dec 2 2021 - Jan 30 2026',
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
    id: 'dealer-admin',
    title: 'Dealer Admin Portal',
    description:
      'Developed and maintained a Dealer Admin portal supporting product approval, denial, deactivation, regional and group controls, primary sales coverage, and collaborative comments.',
    shortDescription: 'Dealer administration portal for product governance and sales coverage',
    technologies: ['SmartClient', 'JavaScript', 'HTML', 'CSS', 'Java', 'Oracle SQL'],
    duration: 'Nov 9 2022 - Jan 30 2026',
    role: 'Full Stack Developer',
    company: 'Iris Software Pvt. Ltd.',
    highlights: [
      'Product approval, denial, and deactivation workflows',
      'Regional and group-level controls',
      'Primary sales coverage management',
      'Collaborative comments',
    ],
    featured: false,
    links: {},
  },
  {
    id: 'qrcode-verifier',
    title: 'QRCode Verifier',
    description:
      'Developed a module for verifying the authenticity of MyGlamm products through QR code scanning. Implemented secure verification logic and integration with product database to prevent counterfeit products.',
    shortDescription: 'Product authentication verification system',
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
    id: 'myglamm-ecommerce-mobile',
    title: 'MyGlamm E-Commerce Mobile Website',
    description:
      'Developed and maintained the Angular Universal mobile website for MyGlamm, contributing to website analytics and responsive e-commerce experiences.',
    shortDescription: 'Angular Universal mobile e-commerce platform',
    technologies: ['Angular', 'Angular Universal SSR', 'Bootstrap', 'HTML', 'CSS'],
    duration: 'Dec 10 2017 - Mar 9 2020',
    role: 'Software Engineer',
    company: 'Good Glamm Group (formerly MyGlamm)',
    highlights: [
      'Angular Universal server-side rendering',
      'Responsive mobile e-commerce experience',
      'Analytics implementation and maintenance',
    ],
    featured: false,
    links: {},
  },
  {
    id: 'myglamm-admin-v2',
    title: 'E-Commerce Admin V2',
    description:
      'Built and maintained an Angular 10 content management system used by product and customer support teams to manage products, customers, discounts, orders, and content.',
    shortDescription: 'E-commerce content management system for operations teams',
    technologies: ['Angular', 'Material Design', 'Bootstrap', 'TypeScript', 'HTML', 'CSS', 'Socket.io'],
    duration: 'May 1 2020 - Aug 30 2021',
    role: 'Software Engineer',
    company: 'Good Glamm Group (formerly MyGlamm)',
    highlights: [
      'Product and customer management',
      'Discount and order workflows',
      'Content operations tooling',
      'Real-time updates with Socket.io',
    ],
    featured: false,
    links: {},
  },
  {
    id: 'myglamm-admin',
    title: 'E-Commerce Admin',
    description:
      'Built a CMS from scratch for product and customer support teams to manage MyGlamm website operations.',
    shortDescription: 'Foundational e-commerce operations CMS',
    technologies: ['Angular', 'jQuery', 'Bootstrap', 'HTML', 'CSS'],
    duration: 'Oct 1 2017 - Dec 9 2017',
    role: 'Software Engineer',
    company: 'Good Glamm Group (formerly MyGlamm)',
    highlights: [
      'Product operations management',
      'Customer support workflows',
      'Website content management',
    ],
    featured: false,
    links: {},
  },
  {
    id: 'ecommerce-backend',
    title: 'E-Commerce Backend',
    description:
      'Worked on the Node.js and LoopBack backend, focusing on email and SMS templates for consumer notifications.',
    shortDescription: 'Backend notification services for e-commerce communication',
    technologies: ['Node.js', 'LoopBack', 'MongoDB'],
    duration: '1 month',
    role: 'Software Engineer',
    company: 'Good Glamm Group (formerly MyGlamm)',
    highlights: [
      'Consumer email templates',
      'SMS notification templates',
      'MongoDB-backed services',
    ],
    featured: false,
    links: {},
  },
  {
    id: 'artist-rating-backend',
    title: 'Artist Rating Backend',
    description:
      'Developed an API to collect and store customer feedback about artists providing beauty services.',
    shortDescription: 'Customer feedback API for artist services',
    technologies: ['Node.js', 'ExpressJS', 'MongoDB', 'MySQL'],
    duration: '2 months',
    role: 'Software Engineer',
    company: 'Good Glamm Group (formerly MyGlamm)',
    highlights: ['Feedback collection API', 'MongoDB persistence', 'MySQL integration'],
    featured: false,
    links: {},
  },
  {
    id: 'unity-dashboard',
    title: 'Unity Dashboard',
    description:
      'Supported a dashboard for managing artists, clients, orders, appointments, availability, and invoices for beauty services.',
    shortDescription: 'Operations dashboard for beauty service management',
    technologies: ['AngularJS', 'jQuery', 'Bootstrap', 'HTML', 'CSS', 'Node.js', 'SQL'],
    duration: '1 month',
    role: 'Software Engineer',
    company: 'Good Glamm Group (formerly MyGlamm)',
    highlights: [
      'Artist and client management',
      'Orders and appointments',
      'Availability and invoices',
    ],
    featured: false,
    links: {},
  },
  {
    id: 'sms-portal',
    title: 'SMS Portal',
    description:
      'Developed a bulk SMS module allowing users to upload consumer details from an Excel file and send messages.',
    shortDescription: 'Bulk SMS communication module',
    technologies: ['Angular', 'jQuery', 'Bootstrap', 'HTML', 'CSS'],
    duration: '1 month',
    role: 'Software Engineer',
    company: 'Good Glamm Group (formerly MyGlamm)',
    highlights: ['Excel consumer import', 'Bulk message delivery', 'Communication workflow UI'],
    featured: false,
    links: {},
  },
  {
    id: 'lococcitane',
    title: "L'OCCITANE E-Commerce Mobile Website",
    description:
      "Developed and maintained the L'OCCITANE AU BRESIL mobile website for a Brazilian cosmetics brand. Implemented Angular Universal for server-side rendering, multilingual support with i18n localization, and responsive mobile-first design.",
    shortDescription: 'Mobile e-commerce platform for Brazilian cosmetics brand',
    technologies: ['Angular', 'Angular Universal SSR', 'TypeScript', 'Bootstrap', 'HTML5', 'CSS3'],
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
export const getProjectsByTechnology = (technology: string): readonly Project[] => {
  return PROJECTS.filter((project: Project): boolean =>
    project.technologies.some((tech: string): boolean =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};
