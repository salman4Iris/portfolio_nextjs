# COMPONENT GUIDE

## REUSABLE COMPONENTS REFERENCE

All components follow strict ES6+ and TypeScript conventions with readonly props.

---

## HEADER COMPONENT

**Location:** `components/Header.tsx`  
**Type:** Client component

### PROPS
None - Uses `SITE_METADATA` and `NAVIGATION_ITEMS` from site-config

### FEATURES
- Sticky navigation with theme toggle
- Mobile hamburger menu
- Responsive design
- Dark mode support
- Smooth transitions

### USAGE
```typescript
import { Header } from '@/components/Header';

export default function Layout(): JSX.Element {
  return (
    <>
      <Header />
      {/* page content */}
    </>
  );
}
```

---

## FOOTER COMPONENT

**Location:** `components/Footer.tsx`  
**Type:** Client component

### PROPS
None - Uses `SITE_METADATA` and `FOOTER_TEXT` from site-config

### FEATURES
- Social links integration
- Contact information display
- Copyright notice
- Responsive grid layout
- Dark mode support

### USAGE
```typescript
import { Footer } from '@/components/Footer';

export default function Layout(): JSX.Element {
  return (
    <>
      {/* content */}
      <Footer />
    </>
  );
}
```

---

## HERO COMPONENT

**Location:** `components/Hero.tsx`  
**Type:** Client component

### PROPS
None - Displays hardcoded hero content

### FEATURES
- Animated gradient background
- CTA buttons (Projects, Contact)
- Stats display
- Company logos
- Fully responsive

### USAGE
```typescript
import { Hero } from '@/components/Hero';

export default function Home(): JSX.Element {
  return (
    <div>
      <Hero />
      {/* content */}
    </div>
  );
}
```

---

## SECTION WRAPPER COMPONENT

**Location:** `components/SectionWrapper.tsx`  
**Type:** Server component

### PROPS
```typescript
interface SectionWrapperProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly id?: string;
}
```

### FEATURES
- Consistent max-width container
- Responsive padding
- Customizable classes
- Optional section ID

### USAGE
```typescript
import SectionWrapper from '@/components/SectionWrapper';

<SectionWrapper className="bg-gray-50 dark:bg-gray-900" id="about">
  <h2>Section Title</h2>
  {/* content */}
</SectionWrapper>
```

---

## PROJECT CARD COMPONENT

**Location:** `components/ProjectCard.tsx`  
**Type:** Server component

### PROPS
```typescript
interface ProjectCardProps {
  readonly project: Project;
}
```

### FEATURES
- Technology tags display
- Featured flag indicator
- Hover animations
- Responsive grid ready
- Links to project details

### USAGE
```typescript
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from '@/content/projects';

{PROJECTS.map((project) => (
  <ProjectCard key={project.id} project={project} />
))}
```

---

## SKILL CARD COMPONENT

**Location:** `components/SkillCard.tsx`  
**Type:** Server component

### PROPS
```typescript
interface SkillCardProps {
  readonly skill: Skill;
}
```

### FEATURES
- Proficiency level badge
- Progress bar visualization
- Years of experience display
- Color-coded by proficiency
- Compact design

### USAGE
```typescript
import SkillCard from '@/components/SkillCard';
import { SKILLS } from '@/content/skills';

{SKILLS.map((skill) => (
  <SkillCard key={skill.id} skill={skill} />
))}
```

---

## EXPERIENCE ITEM COMPONENT

**Location:** `components/ExperienceItem.tsx`  
**Type:** Server component

### PROPS
```typescript
interface ExperienceItemProps {
  readonly experience: Experience;
}
```

### FEATURES
- Timeline dot with icon
- Experience duration badge
- Key results display
- Technologies showcase
- Achievements list (truncated to 3)

### USAGE
```typescript
import ExperienceItem from '@/components/ExperienceItem';
import { EXPERIENCES } from '@/content/experience';

{EXPERIENCES.map((exp) => (
  <ExperienceItem key={exp.id} experience={exp} />
))}
```

---

## STYLING PATTERNS

### RESPONSIVE GRID
```typescript
className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
```

### GRADIENT TEXT
```typescript
className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
```

### DARK MODE
```typescript
className="bg-white dark:bg-black text-gray-900 dark:text-white"
```

### INTERACTIVE HOVER
```typescript
className="transition-all duration-300 hover:shadow-lg dark:hover:border-blue-600"
```

### ROUNDED CONTAINERS
```typescript
className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6"
```

---

## COMPONENT COMPOSITION EXAMPLE

```typescript
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from '@/content/projects';
import type { Project } from '@/types';

export default function ProjectsPage(): JSX.Element {
  const projects: readonly Project[] = PROJECTS;

  return (
    <div className="w-full">
      <SectionWrapper className="py-12">
        <h1 className="text-5xl font-bold">Projects</h1>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50 dark:bg-gray-900">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: Project): JSX.Element => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
```

---

## IMPORTING COMPONENTS

All components use path aliases:

```typescript
// ✓ CORRECT
import { Header } from '@/components/Header';
import SectionWrapper from '@/components/SectionWrapper';
import { PROJECTS } from '@/content/projects';
import type { Project } from '@/types';

// ✗ INCORRECT
import { Header } from '../components/Header';
import SectionWrapper from './SectionWrapper';
```
