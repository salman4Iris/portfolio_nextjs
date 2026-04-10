# CONTENT GUIDE

## HOW TO UPDATE & MAINTAIN PORTFOLIO CONTENT

Step-by-step instructions for adding and modifying portfolio content without touching components or types.

---

## ADDING A NEW PROJECT

### WHERE: `content/projects.ts`

### WHAT TO DO:

1. Add a new object to the `PROJECTS` array
2. Fill in all required fields
3. Ensure `id` is unique (use kebab-case format)
4. Set `featured: true` to show on homepage

### TEMPLATE:

```typescript
{
  id: 'unique-project-id',
  title: 'Full Project Name',
  description: 'Multi-sentence detailed description of the project...',
  shortDescription: 'One-line summary for project cards',
  technologies: ['React', 'TypeScript', 'Node.js'],
  duration: 'Month Year - Month Year',
  role: 'Your Role',
  company: 'Company Name',
  highlights: [
    'Key achievement 1',
    'Key achievement 2',
    'Key achievement 3',
  ],
  featured: true,
  links: {
    github: 'https://github.com/...',
    live: 'https://project.live.url',
    documentation: 'https://docs.url',
  },
}
```

### FIELDS EXPLAINED:

| Field              | Type     | Notes                                         |
| ------------------ | -------- | --------------------------------------------- |
| `id`               | string   | UNIQUE, kebab-case, used for filtering        |
| `title`            | string   | Full project name (can include special chars) |
| `description`      | string   | Detailed explanation (2-3+ sentences)         |
| `shortDescription` | string   | One line, used in cards                       |
| `technologies`     | string[] | Tech stack (must be readable names)           |
| `duration`         | string   | Format: "Jan 2024 - Dec 2024"                 |
| `role`             | string   | Your position: "Senior Developer", "Lead"     |
| `company`          | string   | Organization name                             |
| `highlights`       | string[] | 3-5 accomplishments                           |
| `featured`         | boolean  | Show on homepage                              |
| `links`            | object   | URLs to GitHub, live site, docs               |

### EXAMPLE:

See `content/projects.ts` for 8 examples including REMS, Oneview, MyGlamm projects.

---

## ADDING A NEW SKILL

### WHERE: `content/skills.ts`

### WHAT TO DO:

1. Add new object to `SKILLS` array
2. Choose appropriate `category` from enum
3. Assess honest `proficiency` level
4. Set `yearsOfExperience`
5. Link `relatedProjects` if applicable

### TEMPLATE:

```typescript
{
  id: 'skill-unique-id',
  name: 'Skill Name',
  category: SkillCategory.FRONTEND,
  proficiency: ProficiencyLevel.EXPERT,
  yearsOfExperience: 7,
  relatedProjects: ['project-id-1', 'project-id-2'],
}
```

### CATEGORIES:

- `SkillCategory.FRONTEND` - React, Angular, CSS, HTML, TypeScript
- `SkillCategory.BACKEND` - Node.js, Java, Express, APIs, Loopback
- `SkillCategory.DATABASES` - MongoDB, SQL, Oracle
- `SkillCategory.DEVOPS` - Docker, CI/CD, Git, AWS
- `SkillCategory.TOOLS` - Jest, GitHub Copilot, Analytics, CMS
- `SkillCategory.SOFT_SKILLS` - Leadership, Communication, Mentoring

### PROFICIENCY MAPPING:

- `ProficiencyLevel.BEGINNER` - 1-2 years
- `ProficiencyLevel.INTERMEDIATE` - 2-4 years
- `ProficiencyLevel.ADVANCED` - 4-7 years
- `ProficiencyLevel.EXPERT` - 7+ years

### EXISTING SKILLS:

24+ skills already configured for Salman Khan (React, Next.js, Node.js, TypeScript, etc.)
See `content/skills.ts` for reference.

---

## ADDING A BLOG POST

### WHERE: `content/blog.ts`

### WHAT TO DO:

1. Add new object to `BLOG_POSTS` array
2. Create slug from title (lowercase, hyphens)
3. Write excerpt (1-2 sentences for preview)
4. Calculate reading time (average 200 words/minute)
5. Add relevant tags for categorization

### TEMPLATE:

```typescript
{
  id: 'blog-unique-id',
  title: 'Full Blog Post Title',
  slug: 'blog-post-url-slug',
  excerpt: 'Short preview shown in blog listing (1-2 sentences)...',
  content: 'Full markdown content of the blog post...',
  publishedDate: '2024-12-15',
  updatedDate: '2024-12-20',  // Optional
  tags: ['React', 'Performance', 'JavaScript'],
  author: 'Salman Khan',
  readingTime: 8,
  featured: true,
}
```

### FIELDS EXPLAINED:

| Field           | Type     | Notes                       |
| --------------- | -------- | --------------------------- |
| `id`            | string   | UNIQUE, kebab-case          |
| `title`         | string   | Full post title             |
| `slug`          | string   | URL slug (used for routing) |
| `excerpt`       | string   | 1-2 line preview            |
| `content`       | string   | Full markdown content       |
| `publishedDate` | string   | ISO: "2024-01-15"           |
| `updatedDate`   | string   | ISO (optional)              |
| `tags`          | string[] | Search/filter tags          |
| `author`        | string   | "Salman Khan"               |
| `readingTime`   | number   | Minutes (text length ÷ 200) |
| `featured`      | boolean  | Show on blog home           |

### SLUG FORMAT:

```typescript
// CORRECT
slug: 'react-performance-optimization';
slug: 'building-scalable-apps';

// INCORRECT
slug: 'React Performance Optimization'; // Spaces not allowed
slug: 'ReactPerformance'; // Needs hyphens
```

### EXISTING BLOG POSTS:

4 examples already created. See `content/blog.ts`.

---

## ADDING A TESTIMONIAL

### WHERE: `content/testimonials.ts`

### WHAT TO DO:

1. Add new object to `TESTIMONIALS` array
2. Write authentic testimonial (2-3 sentences)
3. Set honest 1-5 star rating
4. Include real person details

### TEMPLATE:

```typescript
{
  id: 'testimonial-unique-id',
  author: 'Full Name',
  position: 'Job Title',
  company: 'Company Name',
  content: 'Testimonial text (2-3 sentences about the person)...',
  rating: 5,
  image: undefined,  // Optional - can add image URL later
}
```

### FIELDS EXPLAINED:

| Field      | Type   | Notes                    |
| ---------- | ------ | ------------------------ |
| `id`       | string | UNIQUE, kebab-case       |
| `author`   | string | Person's full name       |
| `position` | string | Job title at time        |
| `company`  | string | Company/organization     |
| `content`  | string | 2-3 sentences max        |
| `rating`   | number | 1-5 stars                |
| `image`    | string | Optional profile pic URL |

### EXAMPLE:

```typescript
{
  id: 'testimonial-sarah-johnson',
  author: 'Sarah Johnson',
  position: 'Technical Lead',
  company: 'MyGlamm',
  content: 'Salman delivered the Angular to React migration seamlessly. His attention to detail and performance optimization skills were exceptional. Highly recommended for technical leadership roles.',
  rating: 5,
}
```

### EXISTING TESTIMONIALS:

3 examples from real colleagues. See `content/testimonials.ts`.

---

## UPDATING EXPERIENCE

### WHERE: `content/experience.ts`

### IF CURRENT JOB CHANGES:

1. Update `endDate` of previous role to `YYYY-MM-DD`
2. Set `isCurrent: false`
3. Add new role with `isCurrent: true`
4. Timeline automatically updates

### IF ADDING ACHIEVEMENTS:

1. Add to the `achievements` array (strings)
2. First 3 display on experience timeline
3. Others available if expanded

### TEMPLATE UPDATE:

```typescript
{
  // ... existing fields
  achievements: [
    'New achievement 1',
    'New achievement 2',
    'New achievement 3',
    'Additional achievements...',
  ],
}
```

### EXISTING EXPERIENCES:

- Iris Software (current)
- MyGlamm
- BridgeLabz

See `content/experience.ts`.

---

## ADDING CERTIFICATIONS

### WHERE: `content/certifications.ts`

### EDUCATIONAL DEGREES:

Add to `CERTIFICATIONS` array:

```typescript
{
  id: 'degree-unique-id',
  title: 'B.Tech (Computer Science)',
  issuer: 'University Name',
  issueDate: '2016-06-15',
}
```

### UDEMY COURSES:

Add to `UDEMY_COURSES` array:

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

### EXISTING CERTIFICATIONS:

- B.E (Computer Science) - 2016
- Diploma in Computer Engineering - 2013

See `content/certifications.ts`.

---

## UPDATING SITE CONFIG

### WHERE: `content/site-config.ts`

### UPDATE METADATA:

```typescript
export const SITE_METADATA: SiteMetadata = {
  title: 'Salman Khan - Senior Software Engineer',
  description: 'Portfolio description...',
  author: 'Salman Khan',
  email: 'khansalman752@gmail.com', // UPDATE EMAIL
  phone: '+91-9029051642', // UPDATE PHONE
  location: 'Mumbai-400043, Maharashtra',
  timezone: 'IST (UTC+5:30)',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/khansalman752',
    github: 'https://github.com/salmankhan', // ADD/UPDATE
  },
};
```

### UPDATE NAVIGATION:

```typescript
export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'experience', label: 'Experience', href: '/experience' },
  { id: 'skills', label: 'Skills', href: '/skills' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];
```

### UPDATE ABOUT CONTENT:

```typescript
export const ABOUT_CONTENT = {
  title: 'Senior Software Engineer',
  subtitle: 'Subtitle here',
  bio: 'Multi-paragraph bio text...',
  highlights: ['Highlight 1', 'Highlight 2'],
};
```

---

## COMMON MODIFICATIONS

### CHANGE PROJECT FEATURED STATUS:

```typescript
// From
{ id: 'project-x', ..., featured: false }

// To
{ id: 'project-x', ..., featured: true }
```

### ADD TECHNOLOGY TO PROJECT:

```typescript
// From
technologies: ['React', 'TypeScript'];

// To
technologies: ['React', 'TypeScript', 'GraphQL', 'Docker'];
```

### UPDATE PROJECT DURATION:

```typescript
// If project is ongoing
duration: 'April 2024 - Present';

// If completed
duration: 'April 2024 - December 2024';
```

### REORDER SKILLS:

Sorting and filtering happens automatically in pages.
Edit order by moving objects in array.

---

## WHAT NOT TO DO

❌ **Don't modify:**

- `types/index.ts` (TypeScript interfaces)
- `components/*.tsx` (React components)
- `lib/utils.ts` (Utility functions)
- `app/layout.tsx` (Root layout)

✅ **Only modify:**

- `content/*.ts` (Data files)
- `content/site-config.ts` (Site configuration)

---

## TESTING YOUR CHANGES

After modifying any content file:

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Format
npm run format

# Run dev server to preview
npm run dev
```

All content is automatically typed and validated by TypeScript.

---

## BEST PRACTICES

1. **Keep descriptions concise** - But informative
2. **Use consistent formatting** - Dates, durations
3. **Link related items** - Projects to skills, projects to testimonials
4. **Update regularly** - Add new achievements, blog posts
5. **Validate dates** - Use ISO format "YYYY-MM-DD"
6. **Be honest** - Accurate skill levels and achievements
7. **Test changes** - Run type-check and lint before deploying

---

## WHERE TO GET HELP

- **AGENTS.md** - Copilot prompts and instructions
- **DATA_SCHEMA.md** - Interface and field definitions
- **COMPONENT_GUIDE.md** - Component API reference
- **types/index.ts** - TypeScript interface definitions
- **content/\*.ts** - Real examples to reference
