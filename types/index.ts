/**
 * PROJECT TYPE DEFINITIONS
 * Comprehensive TypeScript interfaces for Portfolio Website
 * Strict ES6+ with no implicit any types
 */

/**
 * PROJECT INTERFACE
 * Represents a single portfolio project
 */
export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly shortDescription: string;
  readonly technologies: readonly string[];
  readonly duration: string;
  readonly role: string;
  readonly highlights: readonly string[];
  readonly company: string;
  readonly image?: string;
  readonly links: {
    readonly github?: string;
    readonly live?: string;
    readonly documentation?: string;
  };
  readonly featured: boolean;
}

/**
 * EXPERIENCE INTERFACE
 * Represents a work experience entry
 */
export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly position: string;
  readonly duration: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly description: string;
  readonly keyResults: readonly string[];
  readonly technologies: readonly string[];
  readonly achievements: readonly string[];
  readonly isCurrent: boolean;
}

/**
 * SKILL INTERFACE
 * Represents a technical or soft skill
 */
export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly category: SkillCategory;
  readonly proficiency: ProficiencyLevel;
  readonly yearsOfExperience: number;
  readonly relatedProjects?: readonly string[];
}

/**
 * SKILL CATEGORY ENUM
 * Categories for organizing skills
 */
export enum SkillCategory {
  FRONTEND = 'FRONTEND',
  BACKEND = 'BACKEND',
  DEVOPS = 'DEVOPS',
  SOFT_SKILLS = 'SOFT_SKILLS',
  TOOLS = 'TOOLS',
  DATABASES = 'DATABASES',
}

/**
 * PROFICIENCY LEVEL ENUM
 * Skill proficiency levels
 */
export enum ProficiencyLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
  EXPERT = 'EXPERT',
}

/**
 * CERTIFICATION INTERFACE
 * Represents an educational certification
 */
export interface Certification {
  readonly id: string;
  readonly title: string;
  readonly issuer: string;
  readonly issueDate: string;
  readonly expiryDate?: string;
  readonly credentialId?: string;
  readonly credentialUrl?: string;
  readonly image?: string;
}

/**
 * TESTIMONIAL INTERFACE
 * Represents a client or colleague testimonial
 */
export interface Testimonial {
  readonly id: string;
  readonly author: string;
  readonly position: string;
  readonly company: string;
  readonly content: string;
  readonly image?: string;
  readonly rating: number;
}

/**
 * BLOG POST INTERFACE
 * Represents a blog article
 */
export interface BlogPost {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly excerpt: string;
  readonly content: string;
  readonly coverImage?: string;
  readonly publishedDate: string;
  readonly updatedDate?: string;
  readonly tags: readonly string[];
  readonly author: string;
  readonly readingTime: number;
  readonly featured: boolean;
}

/**
 * NAVIGATION ITEM INTERFACE
 * Represents a navigation menu item
 */
export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
}

/**
 * CONTACT FORM DATA INTERFACE
 * Represents form submission data
 */
export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
  readonly phone?: string;
}

/**
 * SITE METADATA INTERFACE
 * General site configuration and metadata
 */
export interface SiteMetadata {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly email: string;
  readonly phone: string;
  readonly location: string;
  readonly timezone: string;
  readonly socialLinks: {
    readonly linkedin?: string;
    readonly github?: string;
    readonly twitter?: string;
    readonly email?: string;
  };
}

/**
 * THEME CONFIGURATION INTERFACE
 * Theme customization options
 */
export interface ThemeConfig {
  readonly primaryColor: string;
  readonly secondaryColor: string;
  readonly accentColor: string;
  readonly isDarkMode: boolean;
}
