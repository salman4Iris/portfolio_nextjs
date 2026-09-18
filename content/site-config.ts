/**
 * SITE METADATA & CONFIGURATION
 * Global site settings and profile information
 * ES6+ strict TypeScript with readonly properties
 */

import type { SiteMetadata, NavigationItem } from '@/types';

export const SITE_METADATA: SiteMetadata = {
  title: 'Salman Khan | Senior Software Engineer',
  description:
    'Senior Software Engineer with 9+ years of experience in frontend architecture, modern web applications, micro-frontends, and AI UI integrations across EdTech, FinTech, and E-commerce.',
  author: 'Salman Khan',
  email: 'khansalman752@gmail.com',
  phone: '+91-9029051642',
  location: 'Mumbai, Maharashtra, India',
  timezone: 'IST (UTC+5:30)',
  profileImage: '/SalmanPhotoPassportSize.jpeg',
  resumeLink: '/SalmanWithProjects.pdf',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/salman-khan-a62ab2a2/',
    github: 'https://github.com/salman4code',
    twitter: undefined,
    email: 'khansalman752@gmail.com',
  },
};

/**
 * NAVIGATION ITEMS
 * Main navigation menu configuration
 */
export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    isExternal: false,
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    isExternal: false,
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '/projects',
    isExternal: false,
  },
  {
    id: 'experience',
    label: 'Experience',
    href: '/experience',
    isExternal: false,
  },
  {
    id: 'skills',
    label: 'Skills',
    href: '/skills',
    isExternal: false,
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '/blog',
    isExternal: false,
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
    isExternal: false,
  },
];

/**
 * ABOUT SECTION CONTENT
 * Comprehensive about/profile information
 */
export const ABOUT_CONTENT: Readonly<{
  title: string;
  subtitle: string;
  bio: string;
  highlights: readonly string[];
}> = {
  title: 'Senior Software Engineer',
  subtitle: 'Frontend architecture, AI interfaces, and enterprise web applications',
  bio: 'I am a Senior Software Engineer with 9+ years of experience specializing in frontend architecture, modern web applications, micro-frontends, and AI UI integrations across EdTech, FinTech, and E-commerce. At Iris Software, I contribute to AgentStudio, HiSet, REMS, OneView, and enterprise platforms for global clients including ETS and MarketAxess, combining React, Next.js, TypeScript, React Flow, AG Grid, and agentic UI engineering.',
  highlights: [
    'Frontend architecture with React.js, Next.js, Angular, Redux, TypeScript, and React Flow',
    'Agentic UI engineering for AgentStudio, MCP workflows, and conversational AI experiences',
    'Enterprise financial platforms for regulatory execution, trade dashboards, and compliance',
    'Modernization of large-scale e-commerce products from Angular Universal to React and Next.js',
    'Performance engineering across SSR, AMP, Web Vitals, analytics, and high-density dashboards',
    'Mentoring developers through component architecture, code reviews, Jest, and TDD',
    'Backend collaboration with Node.js, Express.js, Python tooling, Java, and SQL/NoSQL databases',
  ],
};

/**
 * FOOTER TEXT
 * Footer copyright and information
 */
export const FOOTER_TEXT: Readonly<{
  copyright: string;
  madeWith: string;
}> = {
  copyright: `© ${new Date().getFullYear()} Salman Khan. All rights reserved.`,
  madeWith: 'Crafted with Next.js, React, TypeScript, and Tailwind CSS',
};
