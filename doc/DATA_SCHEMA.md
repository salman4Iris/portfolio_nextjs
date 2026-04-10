# DATA SCHEMA GUIDE

## TYPESCRIPT INTERFACES REFERENCE

All data in the portfolio follows strict TypeScript interfaces defined in `types/index.ts`.

---

## PROJECT INTERFACE

```typescript
export interface Project {
  readonly id: string;                    // UNIQUE identifier (use slug format)
  readonly title: string;                 // Project title
  readonly description: string;           // Detailed description (multiple sentences)
  readonly shortDescription: string;      // One-line summary for cards
  readonly technologies: readonly string[]; // Tech stack array
  readonly duration: string;              // "Month Year - Month Year"
  readonly role: string;                  // Your role in project
  readonly highlights: readonly string[]; // 3-5 key points
  readonly company: string;               // Company name
  readonly image?: string;                // Optional image URL
  readonly links: {
    readonly github?: string;
    readonly live?: string;
    readonly documentation?: string;
  };
  readonly featured: boolean;             // Show on home page
}
```

### EXAMPLE PROJECT
```typescript
{
  id: 'rems',
  title: 'Regulatory Execution Management System (REMS)',
  description: 'Developed a comprehensive web-based REMS...',
  shortDescription: 'Web-based trading system with real-time compliance',
  technologies: ['ReactJS', 'Redux', 'TypeScript', 'Node.js'],
  duration: 'April 2024 - Present',
  role: 'Senior React Developer',
  company: 'Iris Software Pvt. Ltd.',
  highlights: ['Real-time execution', 'Global compliance', 'FIX integration'],
  featured: true,
  links: { live: 'https://...' },
}
```

---

## EXPERIENCE INTERFACE

```typescript
export interface Experience {
  readonly id: string;                          // UNIQUE identifier
  readonly company: string;                     // Company name
  readonly position: string;                    // Job title
  readonly duration: string;                    // Display string "Month Year - Month Year"
  readonly startDate: string;                   // ISO date "YYYY-MM-DD"
  readonly endDate: string;                     // ISO date "YYYY-MM-DD"
  readonly description: string;                 // Role summary
  readonly keyResults: readonly string[];       // Top achievements
  readonly technologies: readonly string[];     // Tech stack used
  readonly achievements: readonly string[];     // Detailed achievements (3+ items)
  readonly isCurrent: boolean;                  // Currently employed here
}
```

### EXAMPLE EXPERIENCE
```typescript
{
  id: 'iris-current',
  company: 'Iris Software Pvt. Ltd.',
  position: 'Engineer Technology',
  duration: 'Sep 2021 - Present',
  startDate: '2021-09-01',
  endDate: '2026-04-10',
  description: 'Leading project development...',
  keyResults: ['Launched Oneview app', 'Deployed REMS'],
  technologies: ['React', 'TypeScript', 'Node.js'],
  achievements: ['Achievement 1', 'Achievement 2'],
  isCurrent: true,
}
```

---

## SKILL INTERFACE

```typescript
export interface Skill {
  readonly id: string;                    // UNIQUE identifier
  readonly name: string;                  // Skill name
  readonly category: SkillCategory;       // FRONTEND, BACKEND, DATABASES, DEVOPS, TOOLS, SOFT_SKILLS
  readonly proficiency: ProficiencyLevel; // BEGINNER, INTERMEDIATE, ADVANCED, EXPERT
  readonly yearsOfExperience: number;     // Number of years
  readonly relatedProjects?: readonly string[]; // Project IDs using this skill
}
```

### SKILL CATEGORIES
```typescript
enum SkillCategory {
  FRONTEND = 'FRONTEND',           // React, Angular, TypeScript, CSS, etc.
  BACKEND = 'BACKEND',             // Node.js, Java, Express, APIs
  DEVOPS = 'DEVOPS',               // Docker, CI/CD, Git, AWS
  SOFT_SKILLS = 'SOFT_SKILLS',     // Leadership, Communication, etc.
  TOOLS = 'TOOLS',                 // Jest, GitHub Copilot, etc.
  DATABASES = 'DATABASES',         // MongoDB, SQL, Oracle
}
```

### PROFICIENCY LEVELS
```typescript
enum ProficiencyLevel {
  BEGINNER = 'BEGINNER',           // 1-2 years
  INTERMEDIATE = 'INTERMEDIATE',   // 2-4 years
  ADVANCED = 'ADVANCED',           // 4-7 years
  EXPERT = 'EXPERT',               // 7+ years
}
```

### EXAMPLE SKILL
```typescript
{
  id: 'react',
  name: 'React',
  category: SkillCategory.FRONTEND,
  proficiency: ProficiencyLevel.EXPERT,
  yearsOfExperience: 7,
  relatedProjects: ['myglamm-mobile', 'rems', 'oneview'],
}
```

---

## CERTIFICATION INTERFACE

```typescript
export interface Certification {
  readonly id: string;              // UNIQUE identifier
  readonly title: string;           // Course/degree title
  readonly issuer: string;          // Issuing organization
  readonly issueDate: string;       // ISO date "YYYY-MM-DD"
  readonly expiryDate?: string;     // ISO date (optional)
  readonly credentialId?: string;   // Credential or certificate number
  readonly credentialUrl?: string;  // Link to verify credential
  readonly image?: string;          // Logo/certificate image
}
```

### EXAMPLE CERTIFICATION
```typescript
{
  id: 'udemy-react',
  title: 'Advanced React Patterns',
  issuer: 'Udemy',
  issueDate: '2024-06-15',
  credentialId: 'UC-123456',
  credentialUrl: 'https://udemy.com/certificate/...',
}
```

---

## TESTIMONIAL INTERFACE

```typescript
export interface Testimonial {
  readonly id: string;      // UNIQUE identifier
  readonly author: string;  // Person's name
  readonly position: string; // Job title
  readonly company: string; // Company name
  readonly content: string; // Testimonial text (2-3 sentences)
  readonly image?: string;  // Profile image URL
  readonly rating: number;  // 1-5 stars
}
```

### EXAMPLE TESTIMONIAL
```typescript
{
  id: 'testimonial-1',
  author: 'John Smith',
  position: 'Product Manager',
  company: 'Iris Software',
  content: 'Salman is an exceptional developer...',
  rating: 5,
}
```

---

## BLOG POST INTERFACE

```typescript
export interface BlogPost {
  readonly id: string;              // UNIQUE identifier
  readonly title: string;           // Post title
  readonly slug: string;            // URL-friendly slug
  readonly excerpt: string;         // Short preview (1-2 sentences)
  readonly content: string;         // Full markdown content
  readonly coverImage?: string;     // Featured image URL
  readonly publishedDate: string;   // ISO date "YYYY-MM-DD"
  readonly updatedDate?: string;    // ISO date (optional)
  readonly tags: readonly string[]; // Category tags
  readonly author: string;          // Author name
  readonly readingTime: number;     // Estimated minutes to read
  readonly featured: boolean;       // Show on blog homepage
}
```

### EXAMPLE BLOG POST
```typescript
{
  id: 'blog-react-perf',
  title: 'Building Scalable React Applications',
  slug: 'building-scalable-react',
  excerpt: 'Learn how to optimize React for production...',
  content: 'Full article content in markdown...',
  publishedDate: '2024-06-15',
  tags: ['React', 'Performance', 'JavaScript'],
  author: 'Salman Khan',
  readingTime: 8,
  featured: true,
}
```

---

## NAVIGATION ITEM INTERFACE

```typescript
export interface NavigationItem {
  readonly id: string;           // UNIQUE identifier
  readonly label: string;        // Display text
  readonly href: string;         // URL path
  readonly isExternal?: boolean; // Open in new tab
}
```

### EXAMPLE NAVIGATION
```typescript
{
  id: 'home',
  label: 'Home',
  href: '/',
}

{
  id: 'linkedin',
  label: 'LinkedIn',
  href: 'https://linkedin.com/in/...',
  isExternal: true,
}
```

---

## SITE METADATA INTERFACE

```typescript
export interface SiteMetadata {
  readonly title: string;           // Site title
  readonly description: string;     // Meta description
  readonly author: string;          // Your name
  readonly email: string;          // Contact email
  readonly phone: string;          // Contact phone
  readonly location: string;       // City, State
  readonly timezone: string;       // Timezone identifier
  readonly socialLinks: {
    readonly linkedin?: string;
    readonly github?: string;
    readonly twitter?: string;
    readonly email?: string;
  };
}
```

### EXAMPLE METADATA
```typescript
{
  title: 'Salman Khan - Senior Software Engineer',
  description: 'Portfolio with 9+ years experience...',
  author: 'Salman Khan',
  email: 'khansalman752@gmail.com',
  phone: '+91-9029051642',
  location: 'Mumbai-400043, Maharashtra',
  timezone: 'IST (UTC+5:30)',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/khansalman752',
    github: 'https://github.com/salmankhan',
  },
}
```

---

## CONTACT FORM DATA INTERFACE

```typescript
export interface ContactFormData {
  readonly name: string;     // Full name
  readonly email: string;    // Email address
  readonly subject: string;  // Message subject
  readonly message: string;  // Message body
  readonly phone?: string;   // Optional phone number
}
```

---

## USING INTERFACES IN CODE

### CORRECT USAGE
```typescript
import type { Project, Skill } from '@/types';

const handleProject = (project: Project): void => {
  console.log(project.title);
};

const skills: readonly Skill[] = SKILLS;
```

### TYPE-SAFE ITERATION
```typescript
const myProject: Project = PROJECTS.find(
  (p: Project): boolean => p.id === 'rems'
)!;

SKILLS.forEach((skill: Skill): void => {
  console.log(skill.name);
});
```

### FILTERING WITH TYPES
```typescript
const expertSkills: readonly Skill[] = SKILLS.filter(
  (skill: Skill): boolean => 
    skill.proficiency === ProficiencyLevel.EXPERT
);

const frontendProjects: readonly Project[] = PROJECTS.filter(
  (project: Project): boolean =>
    project.technologies.includes('React')
);
```

---

## VALIDATION RULES

- All IDs must be unique across their data type
- All ISO dates must be in format: `YYYY-MM-DD`
- Technology names should exactly match defined list
- Readonly arrays must use `readonly` keyword
- No optional fields should be `null` (use `undefined`)
- Contact data only sent after email service setup
