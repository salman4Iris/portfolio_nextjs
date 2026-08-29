/**
 * SITE METADATA & CONFIGURATION
 * Global site settings and profile information
 * ES6+ strict TypeScript with readonly properties
 */

import type { SiteMetadata, NavigationItem } from '@/types';

export const SITE_METADATA: SiteMetadata = {
  title: 'Salman Khan | Senior Software Engineer',
  description:
    'Senior Software Engineer with 9+ years of experience building scalable web applications, AI-powered products, and enterprise platforms using React, Next.js, Node.js, TypeScript, and Java.',
  author: 'Salman Khan',
  email: 'khansalman752@gmail.com',
  phone: '+91-9029051642',
  location: 'Mumbai-400043, Maharashtra, India',
  timezone: 'IST (UTC+5:30)',
  profileImage: '/SalmanPhotoPassportSize.jpeg',
  resumeLink: '/SalmanCVFull_9yrs.pdf',
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
  subtitle: 'Building scalable web applications, AI experiences, and enterprise platforms',
  bio: 'I am a Senior Software Engineer with 9+ years of experience delivering web applications that improve business operations, user experience, and system scalability. My work spans React, Next.js, Angular, TypeScript, Java, Node.js, and full-stack product development. At Iris Software Pvt. Ltd., I lead solution delivery for complex enterprise platforms including REMS, OneView, Dealer Admin, and AI-powered chatbot experiences that transform natural language questions into database-driven insight.',
  highlights: [
    '9+ years of experience in full-stack web development and architecture',
    'Built AI-powered chatbot interfaces with Next.js to convert user questions into database queries',
    'Led delivery of regulatory trading systems and enterprise portals for financial markets',
    'Successfully migrated large-scale e-commerce products from Angular to React/Next.js',
    'Strong experience in performance optimization, API integrations, and analytics',
    'Mentored team members and managed project delivery across cross-functional teams',
    'Proficient in CI/CD, Docker, testing, and modern engineering best practices',
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
