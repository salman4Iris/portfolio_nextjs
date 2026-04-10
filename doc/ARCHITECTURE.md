# ARCHITECTURE & FILE ORGANIZATION

## Overview

This project follows a data-driven, component-based architecture that strictly separates concerns. Content/data files are independent from components, ensuring easy updates and maintainability.

---

## FOLDER STRUCTURE

### Root Directory

```
portfolio_nextjs/
├── app/                          # Next.js app directory
├── components/                   # Reusable React components
├── types/                        # TypeScript type definitions
├── content/                      # Data files (readonly)
├── lib/                          # Utility functions
├── doc/                          # Documentation & guides
├── public/                       # Static assets
├── AGENTS.md                     # Main agent instructions
├── tsconfig.json                 # TypeScript config
├── next.config.ts                # Next.js config
├── tailwind.config.ts            # Tailwind config
├── .eslintrc.mjs                 # ESLint config
├── .prettierrc.json              # Prettier config
└── package.json                  # Dependencies
```

---

## APP DIRECTORY STRUCTURE

### Organization

```
app/
├── (pages)/                      # Route group for pages
│   ├── about/
│   │   └── page.tsx              # /about
│   ├── projects/
│   │   └── page.tsx              # /projects
│   ├── experience/
│   │   └── page.tsx              # /experience
│   ├── skills/
│   │   └── page.tsx              # /skills
│   ├── contact/
│   │   └── page.tsx              # /contact
│   └── blog/
│       ├── page.tsx              # /blog
│       └── [slug]/
│           └── page.tsx          # /blog/[slug]
├── page.tsx                      # / (home)
├── layout.tsx                    # Root layout
├── globals.css                   # Global styles
└── error.tsx                     # Error boundary
```

### Page Component Structure

```typescript
// File: app/(pages)/projects/page.tsx

import SectionWrapper from '@/components/SectionWrapper';
import { ProjectCard } from '@/components/ProjectCard';
import { PROJECTS } from '@/content/projects';

export const metadata = {
  title: 'Projects | Portfolio',
  description: 'View my featured projects and work',
};

export default function ProjectsPage(): JSX.Element {
  return (
    <div className="w-full">
      <SectionWrapper className="py-12">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
```

### Home Page Special Case

```typescript
// File: app/page.tsx
// Root home page - directly in app directory

import { Hero } from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import { ProjectCard } from '@/components/ProjectCard';
import { getFeaturedProjects } from '@/content/projects';

export default function Home(): JSX.Element {
  return (
    <div className="w-full">
      <Hero />
      <SectionWrapper className="py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {getFeaturedProjects().map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
```

---

## COMPONENTS DIRECTORY

### Organization

```
components/
├── Header.tsx                    # Navigation header
├── Footer.tsx                    # Footer component
├── Hero.tsx                      # Landing hero
├── SectionWrapper.tsx            # Layout wrapper
├── ProjectCard.tsx               # Project card
├── SkillCard.tsx                 # Skill card
├── ExperienceItem.tsx            # Experience item
└── ui/                           # shadcn/ui components
    ├── Button.tsx
    ├── Card.tsx
    ├── Input.tsx
    ├── Textarea.tsx
    ├── Dialog.tsx
    ├── Dropdown.tsx
    └── Badge.tsx
```

### Component File Naming

**Use PascalCase for component files:**

```
✅ CORRECT
components/ProjectCard.tsx
components/ExperienceItem.tsx
components/ui/DialogButton.tsx

❌ WRONG
components/projectCard.tsx
components/experience-item.tsx
components/ui/dialog_button.tsx
```

### Component Export Structure

```typescript
// File: components/ProjectCard.tsx
'use client';

import { type Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  readonly project: Project;
  readonly onClick?: (project: Project) => void;
}

export const ProjectCard = ({
  project,
  onClick,
}: ProjectCardProps): JSX.Element => {
  return (
    <div className="space-y-4">
      <h3>{project.title}</h3>
      {/* Component content */}
    </div>
  );
};
```

---

## TYPES DIRECTORY

### Single File Architecture

```
types/
└── index.ts                      # All type definitions
```

### Organization Within index.ts

```typescript
// File: types/index.ts

// ============= ENUMS =============
export enum SkillCategory {
  FRONTEND = 'FRONTEND',
  BACKEND = 'BACKEND',
  DATABASES = 'DATABASES',
  DEVOPS = 'DEVOPS',
  TOOLS = 'TOOLS',
  SOFT_SKILLS = 'SOFT_SKILLS',
}

export enum ProficiencyLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
  EXPERT = 'EXPERT',
}

// ============= MAIN TYPES =============
export interface Project {
  readonly id: string;
  readonly title: string;
  // ... fields
}

export interface Experience {
  readonly id: string;
  readonly company: string;
  // ... fields
}

// ============= UTILITY TYPES =============
export interface SiteMetadata {
  // ... fields
}

// ============= FORM TYPES =============
export interface ContactFormData {
  // ... fields
}
```

---

## CONTENT DIRECTORY

### File Organization

```
content/
├── projects.ts                   # Project data + helpers
├── experience.ts                 # Experience data + helpers
├── skills.ts                     # Skills data + helpers
├── certifications.ts             # Certifications data + helpers
├── testimonials.ts               # Testimonials data + helpers
├── blog.ts                       # Blog posts data + helpers
└── site-config.ts                # Metadata, nav, about
```

### Content File Pattern

**All content files follow this pattern:**

```typescript
// File: content/projects.ts

import { type Project } from '@/types';

// 1. MAIN DATA ARRAY (exported, readonly)
export const PROJECTS: readonly Project[] = [
  {
    id: 'project-id-1',
    title: 'Project 1',
    // ... fields
  },
  // ... more projects
];

// 2. HELPER FUNCTIONS (typed, readonly parameters)
export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find((p: Project): boolean => p.id === id);
};

export const getFeaturedProjects = (): readonly Project[] => {
  return PROJECTS.filter((p: Project): boolean => p.featured);
};

export const getProjectsByTechnology = (technology: string): readonly Project[] => {
  return PROJECTS.filter((p: Project): boolean => p.technologies.includes(technology));
};
```

### Content File Rules

**MUST follow these rules:**

1. ✅ All data uses `readonly` arrays and properties
2. ✅ All helper functions have explicit return types
3. ✅ Helper function parameters have explicit types
4. ✅ Data is immutable (no mutations)
5. ✅ Exports use named exports
6. ✅ No default exports
7. ✅ One primary array per file
8. ✅ Related helper functions in same file

---

## LIB DIRECTORY

### Utilities Organization

```
lib/
└── utils.ts                      # All utility functions
```

### Utility File Pattern

```typescript
// File: lib/utils.ts

// ============= TYPE UTILITIES =============
export const cn = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// ============= DATA TRANSFORMATIONS =============
export const formatDate = (
  date: string,
  format: 'short' | 'medium' | 'long' = 'medium'
): string => {
  // Implementation
};

export const calculateDuration = (startDate: string, endDate: string): string => {
  // Implementation
};

export const slugify = (text: string): string => {
  // Implementation
};

// ============= FUNCTIONAL UTILITIES =============
export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  // Implementation
};

export const throttle = <T extends (...args: any[]) => any>(
  fn: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  // Implementation
};

// ============= CONTENT UTILITIES =============
export const extractReadingTime = (content: string): number => {
  // Implementation
};
```

---

## DOC DIRECTORY

### Documentation Structure

```
doc/
├── TYPESCRIPT_STANDARDS.md       # TypeScript guidelines
├── REACT_STANDARDS.md            # React component guidelines
├── ARCHITECTURE.md               # This file
├── NAMING_CONVENTIONS.md         # Naming rules
├── STYLING_GUIDELINES.md         # Tailwind & CSS rules
├── TESTING_VALIDATION.md         # Testing practices
├── GIT_CONVENTIONS.md            # Git & commit rules
├── COMPONENT_GUIDE.md            # Component API reference
├── DATA_SCHEMA.md                # Type definitions reference
└── CONTENT_GUIDE.md              # How to update content
```

---

## NAMING CONVENTIONS

### Files & Directories

| Type          | Convention         | Example           |
| ------------- | ------------------ | ----------------- |
| Components    | PascalCase         | `ProjectCard.tsx` |
| Pages         | lowercase          | `page.tsx`        |
| Utilities     | camelCase          | `utils.ts`        |
| Types         | PascalCase         | `index.ts`        |
| Content       | camelCase          | `projects.ts`     |
| Documentation | UPPERCASE          | `README.md`       |
| Config        | lowercase with dot | `.eslintrc.mjs`   |

### Code Identifiers

| Type       | Convention       | Example            |
| ---------- | ---------------- | ------------------ |
| Components | PascalCase       | `ProjectCard`      |
| Variables  | camelCase        | `selectedProject`  |
| Constants  | UPPER_SNAKE_CASE | `MAX_PROJECTS`     |
| Functions  | camelCase        | `getProjectById()` |
| Interfaces | PascalCase       | `ProjectCardProps` |
| Enums      | PascalCase       | `SkillCategory`    |
| Types      | PascalCase       | `Project`          |

---

## IMPORT PATHS

### Path Aliases (REQUIRED)

**Use aliases instead of relative paths:**

```typescript
// ✅ CORRECT
import { ProjectCard } from '@/components/ProjectCard';
import { type Project } from '@/types';
import { PROJECTS } from '@/content/projects';
import { cn } from '@/lib/utils';

// ❌ WRONG - Don't use relative paths
import { ProjectCard } from '../../components/ProjectCard';
import { PROJECTS } from '../../../content/projects';
```

### Import Organization

**Group imports in this order:**

```typescript
// 1. React imports
import { useState, useCallback } from 'react';

// 2. Next imports
import Link from 'next/link';

// 3. Type imports
import type { Project } from '@/types';

// 4. Component imports
import { ProjectCard } from '@/components/ProjectCard';
import SectionWrapper from '@/components/SectionWrapper';

// 5. Content/data imports
import { PROJECTS } from '@/content/projects';

// 6. Utility imports
import { cn, formatDate } from '@/lib/utils';

// 7. Style imports
import './styles.css';
```

---

## DATA FLOW

### Unidirectional Flow

```
Data Files (content/*.ts)
        ↓
TypeScript Types (types/index.ts)
        ↓
Utility Functions (lib/utils.ts)
        ↓
React Components (components/*)
        ↓
Page Components (app/(pages)/*/page.tsx)
        ↓
Root Layout (app/layout.tsx)
        ↓
Browser
```

### Never Reverse the Flow

**❌ WRONG:**

```typescript
// DON'T import components in content files
// DON'T import pages in components
// DON'T mutate data in components
```

**✅ CORRECT:**

```typescript
// Components import data
// Pages import components
// Data is immutable
```

---

## PROJECT HIERARCHY

### Content Never Changes Structure

Content files should only have data and helper functions:

```typescript
// ✅ CONTENT FILE (content/projects.ts)
export const PROJECTS: readonly Project[] = [
  /* data */
];
export const getProjectById = (id: string): Project | undefined => {
  /* logic */
};

// ❌ NOT IN CONTENT
// - React imports
// - Component rendering
// - Styling logic
// - Page navigation
```

### Components Never Import Each Other (Except UI)

```typescript
// ✅ CORRECT
import { ProjectCard } from '@/components/ProjectCard'; // UI component
import { PROJECTS } from '@/content/projects'; // Data
import SectionWrapper from '@/components/SectionWrapper'; // UI component

// ❌ WRONG
import { ProjectsPage } from '@/pages/projects'; // Other page component
import { Header } from './Header'; // Use path alias instead
```

### Pages Import Everything

```typescript
// ✅ PAGES CAN IMPORT
import { ProjectCard } from '@/components/ProjectCard';
import { PROJECTS } from '@/content/projects';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';
```

---

## FILE SIZE GUIDELINES

### Recommended Sizes

| File Type     | Max Lines           | Purpose                   |
| ------------- | ------------------- | ------------------------- |
| Component     | 200-300             | Single responsibility     |
| Page          | 100-150             | Route handler             |
| Hook          | 100-150             | State/effect logic        |
| Utility       | 50-100 per function | Helper logic              |
| Type          | N/A                 | Single file for all types |
| Content Array | 50-100              | Data items                |

### Large File Refactoring

If a file exceeds recommended size:

1. Extract smaller components
2. Separate concerns into utilities
3. Split content into multiple data files
4. Create custom hooks

---

## CIRCULAR DEPENDENCY PREVENTION

### Import Order Rule

```
1st Priority: types/
2nd Priority: content/
3rd Priority: lib/
4th Priority: components/ (UI components only)
5th Priority: pages/
```

**Layer never imports from higher layer:**

```
❌ types imports from content
❌ content imports from components
❌ components import from pages
❌ lib imports from content
```

---

## CONFIGURATION FILES

### Location & Purpose

```
├── tsconfig.json           # TypeScript compiler options
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── .eslintrc.mjs          # ESLint rules
├── .prettierrc.json       # Code formatting rules
└── package.json           # Dependencies & scripts
```

### Never Edit These Common Mistakes

**❌ Don't:**

- Change `target` in tsconfig.json
- Disable strict mode
- Add exceptions for `any` type
- Override ESLint rules
- Change Tailwind colors globally without reason

---

## DEPLOYMENT STRUCTURE

### Build Output

```
.next/
└── (generated during build)
    ├── static/
    │   └── (production build output)
    └── server/
        └── (server-side code)
```

### Static Assets

```
public/
├── images/
│   ├── logo.png
│   └── hero-bg.jpg
└── fonts/
    └── (custom fonts if needed)
```

---

## REFERENCES

- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js File Structure](https://nextjs.org/docs/getting-started/project-structure)
- [TypeScript Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
- [React File Structure Best Practices](https://react.dev/learn/thinking-in-react)
