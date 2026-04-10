# AGENTS.MD

## GITHUB COPILOT PORTFOLIO FRAMEWORK

This document provides comprehensive instructions for GitHub Copilot to assist with content updates, feature additions, and maintenance of the portfolio website using the established architecture and conventions.

---

## ARCHITECTURE OVERVIEW

### TECH STACK
- **Frontend Framework:** Next.js 16+ with React 19+
- **Language:** TypeScript (ES2017, strict mode)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Theme Management:** next-themes (dark/light mode)
- **Code Quality:** ESLint + Prettier enforcing ES6+ conventions

### FOLDER STRUCTURE

```
portfolio_nextjs/
├── app/
│   ├── (pages)/           # Route groups for organized pages
│   ├── page.tsx           # HOME PAGE
│   ├── layout.tsx         # ROOT LAYOUT with ThemeProvider
│   └── globals.css        # Global Tailwind config
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header with theme toggle
│   ├── Footer.tsx         # Footer with social links
│   ├── Hero.tsx           # Landing hero section
│   ├── SectionWrapper.tsx # Section container wrapper
│   ├── ProjectCard.tsx    # Individual project showcase
│   ├── SkillCard.tsx      # Skill display card
│   ├── ExperienceItem.tsx # Timeline experience entry
│   └── ui/                # shadcn/ui components (generated)
├── types/                 # TypeScript interfaces
│   └── index.ts           # All type definitions
├── content/               # Data files (readonly, strongly typed)
│   ├── projects.ts        # PROJECTS array + helper functions
│   ├── experience.ts      # EXPERIENCES array + helpers
│   ├── skills.ts          # SKILLS array + categorization
│   ├── certifications.ts  # CERTIFICATIONS array
│   ├── testimonials.ts    # TESTIMONIALS array
│   ├── blog.ts            # BLOG_POSTS array
│   └── site-config.ts     # SITE_METADATA, NAVIGATION_ITEMS
├── lib/
│   └── utils.ts           # Utility functions (formatDate, slugify, etc.)
├── doc/                   # Documentation guides
│   ├── COMPONENT_GUIDE.md # Component APIs and examples
│   ├── CONTENT_GUIDE.md   # How to add/update content
│   └── DATA_SCHEMA.md     # TypeScript interface reference
├── AGENTS.md              # THIS FILE - Copilot instructions
├── tsconfig.json          # TypeScript strict mode config
├── .eslintrc.mjs          # ESLint configuration
├── .prettierrc.json       # Prettier formatting rules
└── package.json           # Dependencies and scripts
```

---

## CODE CONVENTIONS

### ES6+ REQUIREMENTS
- **CONST/LET ONLY** - Never use `var` keyword
- **ARROW FUNCTIONS** - Use `() => {}` instead of `function` keyword
- **TEMPLATE LITERALS** - Use backticks for string interpolation
- **DESTRUCTURING** - Always destructure objects and arrays
- **SPREAD OPERATOR** - Use `...` for object/array operations
- **ASYNC/AWAIT** - Never use `.then()` chaining

### TYPESCRIPT REQUIREMENTS
- **NO IMPLIED ANY** - Every variable/parameter must have explicit type
- **READONLY PROPERTIES** - Use `readonly` for immutable data structures
- **INTERFACES** - Prefer interfaces over types for object shapes
- **GENERICS** - Use TypeScript generics for reusable functions
- **STRICT MODE** - Enable all strict compiler options

### REACT COMPONENTS
- **FUNCTIONAL ONLY** - No class components
- **TYPED PROPS** - Always define props interface with `readonly` properties
- **EXPLICIT RETURNS** - Always declare return type (`JSX.Element`)
- **USE CLIENT** - Add `'use client'` directive for interactive components
- **DEPENDENCY ARRAYS** - Always include exhaustive dependencies in hooks

### EXAMPLE COMPONENT

```typescript
'use client';

import { useState, useEffect } from 'react';
import type { Project } from '@/types';

interface MyComponentProps {
  readonly projects: readonly Project[];
  readonly onSelect?: (project: Project) => void;
}

export const MyComponent = ({
  projects,
  onSelect,
}: MyComponentProps): JSX.Element => {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect((): void => {
    // Effect logic
  }, [projects, selected]);

  const handleSelect = (project: Project): void => {
    setSelected(project);
    onSelect?.(project);
  };

  return (
    <div>
      {projects.map((project: Project): JSX.Element => (
        <button
          key={project.id}
          onClick={() => handleSelect(project)}
        >
          {project.title}
        </button>
      ))}
    </div>
  );
};
```

---

## HOW TO: ADD A NEW PROJECT

### STEP 1: UPDATE PROJECTS DATA

**FILE:** `content/projects.ts`

**ADD** a new object to the `PROJECTS` array:

```typescript
{
  id: 'project-slug',
  title: 'Project Title',
  description: 'Detailed description...',
  shortDescription: 'One-line summary',
  technologies: ['React', 'TypeScript', 'Node.js'],
  duration: 'Month Year - Month Year',
  role: 'Senior Developer',
  company: 'Company Name',
  highlights: [
    'Highlight 1',
    'Highlight 2',
  ],
  featured: true,  // Set to true to show on home page
  links: {
    github: 'https://github.com/...',
    live: 'https://project.com',
    documentation: 'https://docs.project.com',
  },
}
```

**INSTRUCTIONS FOR COPILOT:**

Prompt: "ADD A NEW PROJECT TO THE PORTFOLIO. Title: 'My Project', company: 'Company', role: 'Developer', duration: '2024-2025', technologies: [React, TypeScript], and mark as featured."

Copilot will:
1. Open `content/projects.ts`
2. Generate a new project object with the provided details
3. Add it to the `PROJECTS` array with correct TypeScript types
4. Ensure all required fields are present

---

## HOW TO: ADD A NEW SKILL

### STEP 1: UPDATE SKILLS DATA

**FILE:** `content/skills.ts`

**ADD** a new object to the `SKILLS` array:

```typescript
{
  id: 'unique-skill-id',
  name: 'Skill Name',
  category: SkillCategory.FRONTEND,  // or BACKEND, DATABASES, DEVOPS, TOOLS, SOFT_SKILLS
  proficiency: ProficiencyLevel.EXPERT,  // BEGINNER, INTERMEDIATE, ADVANCED, EXPERT
  yearsOfExperience: 5,
  relatedProjects: ['project-id-1', 'project-id-2'],
}
```

**INSTRUCTIONS FOR COPILOT:**

Prompt: "ADD A NEW SKILL: 'Vue.js', category: FRONTEND, proficiency: ADVANCED, years: 3, related projects: ['myglamm-mobile', 'popxo']."

---

## HOW TO: ADD A BLOG POST

### STEP 1: UPDATE BLOG DATA

**FILE:** `content/blog.ts`

**ADD** a new object to the `BLOG_POSTS` array:

```typescript
{
  id: 'unique-blog-id',
  title: 'Post Title',
  slug: 'post-url-slug',
  excerpt: 'Short summary for preview',
  content: 'Full markdown content here...',
  publishedDate: '2024-12-15',
  tags: ['React', 'Performance', 'JavaScript'],
  author: 'Salman Khan',
  readingTime: 8,
  featured: true,
}
```

**INSTRUCTIONS FOR COPILOT:**

Prompt: "ADD A BLOG POST: Title 'React Performance Tips', slug 'react-performance-tips', excerpt 'Learn optimization techniques', tags: [React, Performance], reading time: 10 minutes, mark as featured."

---

## HOW TO: ADD A NEW TESTIMONIAL

### STEP 1: UPDATE TESTIMONIALS DATA

**FILE:** `content/testimonials.ts`

**ADD** a new object to the `TESTIMONIALS` array:

```typescript
{
  id: 'testimonial-id',
  author: 'Person Name',
  position: 'Job Title',
  company: 'Company Name',
  content: 'Testimonial text...',
  rating: 5,
}
```

**INSTRUCTIONS FOR COPILOT:**

Prompt: "ADD A TESTIMONIAL: author 'John Smith', position 'CTO', company 'TechCorp', content 'Salman is an excellent developer...', rating: 5."

---

## HOW TO: ADD UDEMY CERTIFICATES

### STEP 1: UPDATE CERTIFICATIONS DATA

**FILE:** `content/certifications.ts`

**ADD** to the `UDEMY_COURSES` array:

```typescript
{
  id: 'udemy-course-id',
  title: 'Course Title',
  issuer: 'Udemy',
  issueDate: '2024-06-15',
  credentialId: 'UC-XXXXX',
  credentialUrl: 'https://udemy.com/certificate/...',
}
```

**INSTRUCTIONS FOR COPILOT:**

Prompt: "ADD AN UDEMY CERTIFICATE: 'Advanced React Patterns', issue date: 2024-06-15, credential ID: UC-12345, credential URL: https://udemy.com/..."

---

## HOW TO: UPDATE SITE METADATA

### FILE: `content/site-config.ts`

**UPDATE** the following readonly objects:

```typescript
export const SITE_METADATA: SiteMetadata = {
  title: 'Portfolio Title',
  description: 'Portfolio description',
  email: 'email@example.com',
  phone: '+91-XXXXXXXXXX',
  location: 'City-PIN, State',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/username',
    github: 'https://github.com/username',
  },
};

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  // Add/remove navigation items
];
```

**INSTRUCTIONS FOR COPILOT:**

Prompt: "UPDATE THE PORTFOLIO EMAIL TO 'newemail@example.com' and add GitHub link 'https://github.com/salmankhan'."

---

## HOW TO: CREATE A NEW PAGE

### STEP 1: CREATE PAGE COMPONENT

**FILES:**
- `app/(pages)/page-name/page.tsx` - Page component
- `app/(pages)/page-name/layout.tsx` (if needed) - Page-specific layout

### STEP 2: USE SECTION WRAPPER

```typescript
import SectionWrapper from '@/components/SectionWrapper';

export default function PageName(): JSX.Element {
  return (
    <div className="w-full">
      <SectionWrapper className="py-12">
        <h1>Page Title</h1>
        {/* Content */}
      </SectionWrapper>
    </div>
  );
}
```

### STEP 3: UPDATE NAVIGATION

**FILE:** `content/site-config.ts`

**ADD** new item to `NAVIGATION_ITEMS` array.

---

## HOW TO: USE UTILITY FUNCTIONS

### AVAILABLE UTILITIES

**FORMAT DATE:**
```typescript
formatDate('2024-01-15', 'medium')  // "Jan 15, 2024"
```

**CALCULATE DURATION:**
```typescript
calculateDuration('2021-09-01', '2024-09-01')  // "3 years"
```

**SLUGIFY STRING:**
```typescript
slugify('My Project Title')  // "my-project-title"
```

**COMBINE CLASSNAMES:**
```typescript
cn('px-4 py-2', isActive && 'bg-blue-600')
```

**EXTRACT READING TIME:**
```typescript
extractReadingTime(content)  // Returns minutes
```

---

## COMPONENT APIS

### HEADER COMPONENT
```typescript
<Header />  // No props, uses site config
```

### FOOTER COMPONENT
```typescript
<Footer />  // No props, uses site config
```

### HERO COMPONENT
```typescript
<Hero />  // No props, displays landing hero
```

### SECTION WRAPPER
```typescript
<SectionWrapper
  id="about-section"
  className="bg-gray-50 dark:bg-gray-900"
>
  {children}
</SectionWrapper>
```

### PROJECT CARD
```typescript
<ProjectCard project={projectObject} />
```

### SKILL CARD
```typescript
<SkillCard skill={skillObject} />
```

### EXPERIENCE ITEM
```typescript
<ExperienceItem experience={experienceObject} />
```

---

## STYLING GUIDELINES

### TAILWIND CLASSES
- **Container:** `mx-auto max-w-6xl`
- **Spacing:** `px-4 sm:px-6 lg:px-8` + `py-12 sm:py-16`
- **Typography:** Use semantic HTML with Tailwind scale
- **Colors:** Blue-600/Purple-600 for gradients
- **Dark Mode:** Always include `dark:` variants

### GRADIENT EXAMPLE
```typescript
className="bg-gradient-to-r from-blue-600 to-purple-600"
```

### RESPONSIVE EXAMPLE
```typescript
className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
```

---

## DATA FLOW DIAGRAM

```
content/*.ts (Readonly Data)
    ↓
types/index.ts (TypeScript Interfaces)
    ↓
components/* (Presentational Components)
    ↓
app/(pages)/* (Pages using components)
    ↓
lib/utils.ts (Helper functions for data transformation)
```

---

## TESTING YOUR CHANGES

### COMMANDS

```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format

# Build for production
npm run build
```

### VERIFICATION CHECKLIST

- [ ] No TypeScript errors: `npm run type-check`
- [ ] ESLint passes: `npm run lint`
- [ ] Formatting correct: `npm run format`
- [ ] Responsive on mobile (375px), tablet (768px), desktop (1920px)
- [ ] Dark mode toggle works
- [ ] All links functional
- [ ] No console errors

---

## COMMON COPILOT PROMPTS

### ADD CONTENT
"Add a new project called '{NAME}' with technologies {TECH} and company {COMPANY}."

"Add a skill '{SKILL_NAME}' with proficiency {LEVEL} and {YEARS} years experience."

"Add a blog post '{TITLE}' with tags {TAGS} and reading time {MINUTES} minutes."

### UPDATE CONTENT
"Update the portfolio email to '{EMAIL}' in site-config.ts."

"Change project '{PROJECT_NAME}' to featured: false."

### CREATE FEATURES
"Create a new page called '/testimonials' that displays all testimonials."

"Add a theme toggle button to the Header component."

### FIX ISSUES
"Fix TypeScript errors in the Skills page."

"Update all components to use readonly properties."

---

## TROUBLESHOOTING

### TYPESCRIPT ERRORS
- Ensure all props have explicit types
- Add `: JSX.Element` return type to components
- Use `readonly` for immutable arrays/objects

### STYLING ISSUES
- Check Tailwind config in `globals.css`
- Verify dark mode classes: `dark:bg-gray-900`
- Use responsive prefixes: `md:`, `lg:`, `sm:`

### IMPORT ERRORS
- Use path aliases: `@/components`, `@/types`, `@/content`, `@/lib`
- Keep relative imports minimal

### RUNTIME ERRORS
- Check console for errors
- Verify data structure matches TypeScript interface
- Ensure page/component export default

---

## VERSION CONTROL

- Keep data files (`content/*.ts`) separate from components
- Never modify types without updating all consumers
- Test before committing changes
- Use descriptive commit messages

---

## NEXT STEPS

1. **Install shadcn/ui components** as needed: `npx shadcn-ui@latest add [component]`
2. **Set up email service** (Resend, EmailJS) for contact form
3. **Configure analytics** (Vercel Analytics or Google Analytics)
4. **Deploy to Vercel** with GitHub integration
5. **Set up custom domain** via Vercel dashboard

---

**Last Updated:** April 2026  
**Framework Version:** Next.js 16.2.3  
**TypeScript Version:** 5+  
**Tailwind CSS Version:** 4
