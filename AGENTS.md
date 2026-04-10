# AGENTS.MD

## GITHUB COPILOT PORTFOLIO FRAMEWORK

This document coordinates all coding standards and instructions for GitHub Copilot to assist with content updates, feature additions, and code contributions to this Next.js portfolio website.

**All code must follow the standards defined in the separate documentation files listed below.**

---

## QUICK REFERENCE

### 📋 Core Standards Documents

Located in `/doc/` directory:

1. **[TYPESCRIPT_STANDARDS.md](doc/TYPESCRIPT_STANDARDS.md)** ⭐
   - Type definitions, interfaces, enums
   - Readonly properties, strict mode
   - Generic functions, utility types
   - Never types, validation patterns

2. **[REACT_STANDARDS.md](doc/REACT_STANDARDS.md)** ⭐
   - Functional components, hooks patterns
   - Props typing, event handlers
   - State management, custom hooks
   - Error boundaries, memo optimization

3. **[ARCHITECTURE.md](doc/ARCHITECTURE.md)** ⭐
   - Folder structure and organization
   - File naming conventions
   - Data flow patterns
   - Import path organization
   - Circular dependency prevention

4. **[NAMING_CONVENTIONS.md](doc/NAMING_CONVENTIONS.md)** ⭐
   - File and folder naming rules
   - Variable, function, type naming
   - Component props naming
   - Absolute rules (no single letters, no Hungarian notation)

5. **[STYLING_GUIDELINES.md](doc/STYLING_GUIDELINES.md)** ⭐
   - Tailwind CSS utility classes
   - Responsive design (mobile-first)
   - Dark mode support (mandatory)
   - Component styling patterns
   - Animations and transitions

6. **[TESTING_VALIDATION.md](doc/TESTING_VALIDATION.md)** ✅
   - Validation commands: `npm run type-check`, `npm run lint`
   - Pre-commit checklist
   - TypeScript error resolution
   - ESLint and Prettier configuration
   - Deployment validation

7. **[GIT_CONVENTIONS.md](doc/GIT_CONVENTIONS.md)** 🔄
   - Branch naming (feature/, fix/, refactor/)
   - Commit message format (conventional commits)
   - Pull request templates
   - Merge strategy and versioning

---

## TECH STACK

- **Framework:** Next.js 16.2.3 (app router)
- **Runtime:** React 19.2.4 (functional components only)
- **Language:** TypeScript 5 (ES2017 target, strict mode)
- **Styling:** Tailwind CSS v4 (utility classes only)
- **UI Components:** shadcn/ui (installed as needed)
- **Theme:** next-themes (dark/light mode built-in)
- **Linting:** ESLint (ES6+ enforcement)
- **Formatting:** Prettier (100 char width, 2-space tabs)

---

## PROJECT STRUCTURE

```
portfolio_nextjs/
├── app/
│   ├── (pages)/              # Route groups
│   │   ├── about/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── experience/page.tsx
│   │   ├── skills/page.tsx
│   │   └── contact/page.tsx
│   ├── page.tsx              # HOME PAGE
│   ├── layout.tsx            # Root layout + ThemeProvider
│   └── globals.css           # Tailwind config
├── components/               # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SectionWrapper.tsx
│   ├── ProjectCard.tsx
│   ├── SkillCard.tsx
│   ├── ExperienceItem.tsx
│   └── ui/                   # shadcn/ui (generated)
├── types/
│   └── index.ts              # All interfaces & enums
├── content/                  # Data (readonly, strongly typed)
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── certifications.ts
│   ├── testimonials.ts
│   ├── blog.ts
│   └── site-config.ts
├── lib/
│   └── utils.ts              # 10 utility functions
├── doc/                      # Standards & guides
│   ├── TYPESCRIPT_STANDARDS.md
│   ├── REACT_STANDARDS.md
│   ├── ARCHITECTURE.md
│   ├── NAMING_CONVENTIONS.md
│   ├── STYLING_GUIDELINES.md
│   ├── TESTING_VALIDATION.md
│   ├── GIT_CONVENTIONS.md
│   ├── COMPONENT_GUIDE.md
│   ├── DATA_SCHEMA.md
│   └── CONTENT_GUIDE.md
├── AGENTS.md                 # THIS FILE
├── IMPLEMENTATION_SUMMARY.md # Project overview
├── tsconfig.json             # TypeScript config
├── .eslintrc.mjs             # ESLint rules
├── .prettierrc.json          # Prettier rules
└── package.json
```

---

## ESSENTIAL RULES (MUST FOLLOW)

### 1. TypeScript (Read: TYPESCRIPT_STANDARDS.md)

✅ **DO:**

- Explicit types on ALL variables/parameters
- `readonly` on all properties and arrays
- Use `interface` for data shapes
- Function return types always specified
- No implicit `any` type

❌ **DON'T:**

```typescript
const projects = getProjects(); // Missing type!
let items = []; // Missing type!
function getData() {} // Missing return type!
interface Project {
  id: string; // Missing readonly!
  name: string; // Missing readonly!
}
```

### 2. React Components (Read: REACT_STANDARDS.md)

✅ **DO:**

- Functional components only
- Props interface with `readonly`
- Add `'use client'` for interactive components
- JSX.Element return type
- Exhaustive dependency arrays

❌ **DON'T:**

```typescript
class MyComponent extends React.Component { }        // Use functional
interface Props {
  onClick: () => void;                               // Add readonly
}
export default MyComponent = () => <div/>;           // Named export!
useEffect(() => doSomething(), []);                 // Missing deps
```

### 3. File Names (Read: NAMING_CONVENTIONS.md)

✅ **DO:**

- Components: `ProjectCard.tsx` (PascalCase)
- Pages: `page.tsx` (always)
- Utilities: `utils.ts` (camelCase)
- Content: `projects.ts` (camelCase)
- Docs: `README.md` (UPPERCASE)

❌ **DON'T:**

```
components/projectCard.tsx              (should be PascalCase)
pages/about.tsx                         (should be page.tsx)
utils/Utilities.ts                      (should be camelCase)
doc/typescript-standards.md             (should be UPPERCASE)
```

### 4. Variable Naming (Read: NAMING_CONVENTIONS.md)

✅ **DO:**

- Constants: `UPPER_SNAKE_CASE`
- Variables: `camelCase`
- Booleans: `isActive`, `hasError`, `canEdit`
- Arrays: `projects`, `skills`, `items`
- Functions: `getProjectById`, `handleClick`

❌ **DON'T:**

```typescript
const projects = 50; // Should be MAX_PROJECTS
let selected_project; // Should be selectedProject
const x = getValue(); // Too short
const active = true; // Should be isActive
```

### 5. Styling (Read: STYLING_GUIDELINES.md)

✅ **DO:**

- Tailwind utility classes only
- Dark mode: `dark:` variants everywhere
- Responsive: mobile-first `md:`, `lg:`
- Organize classes: layout → spacing → colors → effects

❌ **DON'T:**

```typescript
<div style={{ display: 'flex' }}>           // Use Tailwind
<div className="bg-white">                 // Missing dark:
<div className="lg:px-4 px-4 md:px-6">     // Wrong order
```

### 6. Validation Before Any Commit

```bash
npm run type-check    # TypeScript strict mode
npm run lint          # ESLint rules
npm run format:check  # Prettier formatting
npm run build         # Production build

# All must PASS before committing!
```

---

## COMMON PATTERNS

### Adding New Content

See [CONTENT_GUIDE.md](doc/CONTENT_GUIDE.md) for step-by-step instructions.

**Quick pattern:**

1. Add data to `content/[type].ts`
2. Data must match interface in `types/index.ts`
3. Never modify components or types unless needed
4. Run validation: `npm run validate`

### Creating New Page

1. Create file: `app/(pages)/page-name/page.tsx`
2. Import data and components
3. Use `SectionWrapper` for consistent spacing
4. Add dark mode to all elements
5. Add responsive classes
6. Update NAVIGATION_ITEMS in `site-config.ts`
7. Validate and commit

### Creating New Component

1. Create file: `components/ComponentName.tsx`
2. Add `'use client'` if interactive
3. Define props interface with `readonly`
4. Use TypeScript types everywhere
5. Include dark mode support
6. Export as named export
7. Document in COMPONENT_GUIDE.md

---

## BEFORE & AFTER PROMPTS FOR COPILOT

### "ADD CONTENT"

```
"I want to add a new project to my portfolio:
- Title: 'Project Name'
- Company: 'Company Name'
- Role: 'Your Role'
- Technologies: [Tech1, Tech2, Tech3]
- Duration: 'Start Month/Year - End Month/Year'
- Featured: true/false
- Links: GitHub, Live demo

Follow CONTENT_GUIDE.md. Add only to content/projects.ts.
Keep types and components unchanged. Run validation after."
```

**Copilot will:**

- Add project object to `PROJECTS` array
- Match TypeScript interface exactly
- Keep readonly properties
- Add to appropriate position
- Suggest updating helper functions if needed

### "CREATE NEW PAGE"

```
"Create a new page at /testimonials:
- Display all testimonials in a grid
- Show author name, position, company, rating
- Use TestimonialCard component
- Include dark mode support
- Make responsive: 1 col mobile, 2 cols tablet, 3 cols desktop
- Update navigation items

Follow ARCHITECTURE.md and STYLING_GUIDELINES.md."
```

**Copilot will:**

- Create `app/(pages)/testimonials/page.tsx`
- Import testimonials data
- Create responsive grid
- Use Tailwind classes with dark: variants
- Update site-config.ts navigation

### "FIX CODE ISSUE"

```
"I'm getting TypeScript error: 'projects' has implicit any type.

File: content/projects.ts
Error occurs at export const PROJECTS = [...]

Follow TYPESCRIPT_STANDARDS.md to fix.
Make sure the type is explicit and readonly."
```

**Copilot will:**

- Add explicit type: `readonly Project[]`
- Ensure all properties are readonly
- Validate against type interface
- Suggest solution if validation fails

---

## VALIDATION WORKFLOW

### Before Every Commit

```bash
# Step 1: Type check
npm run type-check
# ✅ Must pass - no errors allowed

# Step 2: Lint
npm run lint
# ✅ Must pass - enforces ES6+ patterns

# Step 3: Format check
npm run format:check
# ✅ Must pass - code must be formatted

# Step 4: Build
npm run build
# ✅ Must pass - production build successful

# ONLY if all pass:
git add .
git commit -m "feat: description"
git push origin feature-branch
```

**Shortcut:**

```bash
npm run validate  # Runs all checks in sequence
```

---

## GIT WORKFLOW

See [GIT_CONVENTIONS.md](doc/GIT_CONVENTIONS.md) for complete details.

### Branch Names

```bash
git checkout -b feature/add-testimonials-page      # New feature
git checkout -b fix/dark-mode-toggle-bug           # Bug fix
git checkout -b refactor/component-architecture    # Refactoring
git checkout -b docs/update-standards              # Documentation
git checkout -b chore/update-dependencies          # Maintenance
```

### Commit Messages

```bash
git commit -m "feat(testimonials): add testimonials page

- Create new page component
- Display testimonials in grid
- Add dark mode support
- Update navigation menu

Closes #42"
```

### PR Template

```markdown
## Description

Brief summary of changes

## Type

- [ ] Feature
- [ ] Bug fix
- [ ] Refactoring

## Validation

- [ ] npm run type-check passes
- [ ] npm run lint passes
- [ ] npm run format:check passes
- [ ] npm run build succeeds

Closes #XXX
```

---

## DOCUMENTATION HIERARCHY

**For LLM assistance, reference in this order:**

1. **This file (AGENTS.md)** - Overview & quick reference
2. **Standards files (in `/doc/`)** - Deep dive on specific topic
3. **CONTENT_GUIDE.md** - How to modify content
4. **COMPONENT_GUIDE.md** - Component APIs
5. **DATA_SCHEMA.md** - Type reference

---

## EXAMPLE: ADD A NEW SKILL

### Step 1: Review Standard

Read [NAMING_CONVENTIONS.md](doc/NAMING_CONVENTIONS.md) for naming rules.
Read [TYPESCRIPT_STANDARDS.md](doc/TYPESCRIPT_STANDARDS.md) for type requirements.

### Step 2: Implement

```typescript
// File: content/skills.ts

// Add to SKILLS array
{
  id: 'skill-graphql',              // camelCase with hyphens
  name: 'GraphQL',                  // Exact tool/tech name
  category: SkillCategory.BACKEND,  // Use enum value
  proficiency: ProficiencyLevel.ADVANCED,  // Use enum value
  yearsOfExperience: 3,
  relatedProjects: ['project-id-1', 'project-id-2'],  // readonly array
}
```

### Step 3: Validate

```bash
npm run type-check    # TypeScript check
npm run lint          # ESLint check
npm run format:check  # Code formatting
npm run build         # Build test
```

### Step 4: Commit

```bash
git add content/skills.ts
git commit -m "feat(skills): add GraphQL backend skill

- Added GraphQL with advanced proficiency
- 3 years of experience
- Related to existing projects
- Follows TYPESCRIPT_STANDARDS.md patterns"
```

---

## RESOURCES

### Internal Documentation

- [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) - Project overview
- [COMPONENT_GUIDE.md](doc/COMPONENT_GUIDE.md) - 7 core components
- [DATA_SCHEMA.md](doc/DATA_SCHEMA.md) - Type definitions
- [CONTENT_GUIDE.md](doc/CONTENT_GUIDE.md) - Content modification

### External References

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## HOW TO USE THIS FRAMEWORK

### For Content Updates (No Code Changes)

See [CONTENT_GUIDE.md](doc/CONTENT_GUIDE.md):

1. Add project, skill, blog post, testimonial, or certification
2. Data goes ONLY to `content/[type].ts`
3. Never modify components or types
4. Run: `npm run type-check` after changes
5. Commit with message: `feat(content): add new [type]`

### For Component/Code Changes

1. Review the relevant standard file:
   - TypeScript issues → [TYPESCRIPT_STANDARDS.md](doc/TYPESCRIPT_STANDARDS.md)
   - React issues → [REACT_STANDARDS.md](doc/REACT_STANDARDS.md)
   - Naming issues → [NAMING_CONVENTIONS.md](doc/NAMING_CONVENTIONS.md)
   - Styling issues → [STYLING_GUIDELINES.md](doc/STYLING_GUIDELINES.md)

2. Implement changes following ALL rules

3. Validate:

   ```bash
   npm run validate  # Runs all checks
   ```

4. Commit following [GIT_CONVENTIONS.md](doc/GIT_CONVENTIONS.md)

### For Architecture/Structure Questions

See [ARCHITECTURE.md](doc/ARCHITECTURE.md):

- File organization and naming
- Data flow patterns
- Import paths and aliases
- Circular dependency prevention

---

## COMPONENTS & APIs

See [COMPONENT_GUIDE.md](doc/COMPONENT_GUIDE.md) for complete API reference of:

- Header, Footer, Hero components
- ProjectCard, SkillCard, ExperienceItem
- SectionWrapper container
- All component props and usage

---

## DEPLOYING TO PRODUCTION

```bash
# Full validation (MUST ALL PASS)
npm run validate

# Build test
npm run build

# Preview locally
npm run dev

# Deploy
npm run deploy
# OR: git push to production branch
```

Before deploying:

- ✅ All validations pass
- ✅ Dark mode tested
- ✅ Responsive design verified (mobile, tablet, desktop)
- ✅ All links working
- ✅ Contact form ready (email service configured)
- ✅ No console errors

---

**Last Updated:** April 2026  
**Framework Version:** Next.js 16.2.3  
**TypeScript Version:** 5+  
**Tailwind CSS Version:** 4
