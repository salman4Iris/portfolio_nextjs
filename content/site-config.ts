/**
 * SITE METADATA & CONFIGURATION
 * Global site settings and profile information
 * ES6+ strict TypeScript with readonly properties
 */

import type { SiteMetadata, NavigationItem } from '@/types';

export const SITE_METADATA: SiteMetadata = {
  title: 'Salman Khan - Senior Software Engineer',
  description:
    'Senior Software Engineer with 9+ years of experience in React, Next.js, Node.js, and full-stack development. Specialized in building scalable web applications and leading engineering teams.',
  author: 'Salman Khan',
  email: 'khansalman752@gmail.com',
  phone: '+91-9029051642',
  location: 'Mumbai-400043, Maharashtra, India',
  timezone: 'IST (UTC+5:30)',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/khansalman752',
    github: 'https://github.com',
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
  subtitle: 'Building scalable web applications with modern technologies',
  bio: 'With 9+ years of professional experience, I am a Senior Software Engineer specializing in full-stack web development. I have led teams through complex projects, optimized performance for high-traffic applications, and mentored junior developers. My expertise spans React, Next.js, TypeScript, Node.js, and various backend technologies. Currently, I work at Iris Software Pvt. Ltd., where I architect and lead the development of intricate web applications including regulatory trading platforms.',
  highlights: [
    'Senior Software Engineer with 9+ years experience',
    'Expert in React, Next.js, TypeScript, and full-stack development',
    'Led development of regulatory trading systems (REMS) for financial markets',
    'Successfully migrated large-scale e-commerce platform from Angular to React',
    'Proven track record of performance optimization and user experience improvement',
    'Strong leadership and mentoring capabilities',
    'Proficient with CI/CD, Docker, and modern DevOps practices',
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
