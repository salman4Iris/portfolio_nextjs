# NAMING CONVENTIONS

## Overview

Consistent naming conventions improve code readability and maintainability. This project enforces strict naming rules across all files, variables, functions, and components.

---

## FILE & FOLDER NAMING

### Component Files

**Use PascalCase - FileName matches export name**

```
✅ CORRECT
components/ProjectCard.tsx      → export { ProjectCard }
components/SkillCard.tsx        → export { SkillCard }
components/ExperienceItem.tsx   → export { ExperienceItem }
components/SectionWrapper.tsx   → export { SectionWrapper }
components/Hero.tsx             → export { Hero }
components/Header.tsx           → export { Header }
components/Footer.tsx           → export { Footer }

❌ WRONG
components/projectCard.tsx      (should be PascalCase)
components/project-card.tsx     (should be PascalCase)
components/PROJECT_CARD.tsx     (should be PascalCase)
components/card.tsx             (should match export name)
```

### Page Files

**Always named `page.tsx` - directory name indicates route**

```
✅ CORRECT
app/page.tsx                     (home route /)
app/(pages)/about/page.tsx       (about route /about)
app/(pages)/projects/page.tsx    (projects route /projects)
app/(pages)/blog/[slug]/page.tsx (dynamic route /blog/:slug)

❌ WRONG
app/Home.tsx                     (should be page.tsx)
app/index.tsx                    (should be page.tsx)
app/(pages)/about/index.tsx      (should be page.tsx)
```

### Layout Files

**Always named `layout.tsx` - for Route Group or App layouts**

```
✅ CORRECT
app/layout.tsx                   (root layout)
app/(pages)/layout.tsx           (route group layout)

❌ WRONG
app/RootLayout.tsx               (should be layout.tsx)
app/AppLayout.tsx                (should be layout.tsx)
```

### Utility Files

**Use camelCase with descriptive names**

```
✅ CORRECT
lib/utils.ts
lib/helpers.ts
types/index.ts
content/projects.ts
content/skills.ts

❌ WRONG
lib/Utils.ts                     (should be camelCase)
lib/UTILS.ts                     (should be camelCase)
lib/utility-functions.ts         (should be camelCase)
types/Types.ts                   (should be camelCase)
```

### Config Files

**Use lowercase with dots - follow project conventions**

```
✅ CORRECT
.eslintrc.mjs
.prettierrc.json
tsconfig.json
next.config.ts
tailwind.config.ts

❌ WRONG
.eslintrc.js                     (should be .mjs)
ESLintConfig.json                (should be lowercase)
prettier.config.json             (should be .prettierrc.json)
```

### Documentation Files

**Use UPPERCASE - README, GUIDES, STANDARDS**

```
✅ CORRECT
README.md
AGENTS.md
IMPLEMENTATION_SUMMARY.md
doc/TYPESCRIPT_STANDARDS.md
doc/REACT_STANDARDS.md
doc/ARCHITECTURE.md
doc/NAMING_CONVENTIONS.md
doc/GIT_CONVENTIONS.md

❌ WRONG
readme.md                        (should be README.md)
Agents.md                        (should be AGENTS.md)
doc/typescript-standards.md      (should be UPPERCASE)
doc/typescript_standards.md      (should be UPPERCASE)
```

### Directory Names

**Use camelCase for content/data directories, lowercase for logical groupings**

```
✅ CORRECT
content/                         (data files)
components/                      (React components)
app/
  (pages)/                       (Route group)
lib/                             (utilities)
doc/                             (documentation)

❌ WRONG
Content/                         (should be lowercase)
Components/                      (should be lowercase)
App/                             (should be lowercase)
Lib/                             (should be lowercase)
```

---

## VARIABLE NAMING

### Constants

**Use UPPER_SNAKE_CASE for true constants**

```typescript
// ✅ CORRECT - Module-level constants
const MAX_PROJECTS = 50;
const DEFAULT_PAGE_SIZE = 10;
const CACHE_DURATION_MS = 60000;
const API_TIMEOUT_MS = 5000;
const MIN_PASSWORD_LENGTH = 8;

// ✅ CORRECT - Data arrays
export const PROJECTS: readonly Project[] = [];
export const SKILLS: readonly Skill[] = [];
export const EXPERIENCES: readonly Experience[] = [];

// ❌ WRONG
const maxProjects = 50;           (should be MAX_PROJECTS)
const max_projects = 50;          (should be MAX_PROJECTS)
const MaxProjects = 50;           (should be MAX_PROJECTS)
```

### Regular Variables

**Use camelCase - descriptive, lowercase start**

```typescript
// ✅ CORRECT
let selectedProject: Project | null = null;
const userName: string = 'John';
let isLoading: boolean = false;
const projectList: readonly Project[] = [];
let focusedItemId: string | null = null;

// ❌ WRONG
let selectedproject: string;      (should be camelCase)
let selected_project: string;     (should be camelCase)
let SelectedProject: string;      (should be camelCase)
let SELECTED_PROJECT: string;     (should be camelCase)
```

### Boolean Variables

**Prefix with `is`, `has`, or `can`**

```typescript
// ✅ CORRECT
const isActive: boolean = true;
const isLoading: boolean = false;
const isVisible: boolean = true;
const hasError: boolean = false;
const canSubmit: boolean = true;
const canEdit: boolean = false;

// ❌ WRONG
const active: boolean = true;     (missing prefix)
const loading: boolean = false;   (missing prefix)
const visible: boolean = true;    (missing prefix)
const error: boolean = false;     (should use hasError)
```

### Array Variables

**Plural names or end with `List`, `Array`, `Items`**

```typescript
// ✅ CORRECT
const projects: readonly Project[] = [];
const skills: readonly Skill[] = [];
const experiences: readonly Experience[] = [];
const projectList: readonly Project[] = [];
const selectedItems: readonly Item[] = [];

// ❌ WRONG
const project: readonly Project[] = [];  (should be plural)
const skill: readonly Skill[] = [];      (should be plural)
const single: readonly Project[] = [];   (unclear)
```

### Map/Object Variables

**Clarify with descriptive names**

```typescript
// ✅ CORRECT
const projectsById: Record<string, Project> = {};
const skillsByCategory: Record<string, readonly Skill[]> = {};
const userSettings: Settings = {};
const config: Configuration = {};

// ❌ WRONG
const projects: Record<string, Project> = {};  (unclear it's a map)
const map: Record<string, Project> = {};       (too generic)
const x: Record<string, Project> = {};         (single letter)
```

### Temporary Variables

**Use prefixes for loops and temporary values**

```typescript
// ✅ CORRECT - Loop variables
for (let i: number = 0; i < items.length; i++) {
  // ...
}

projects.forEach((project: Project, index: number) => {
  // ...
});

const [searchTerm, setSearchTerm] = useState<string>('');

// ❌ WRONG
for (let x: number = 0; x < items.length; x++) {  (unclear)
projects.forEach((p: Project) => {                 (too short)
```

---

## FUNCTION NAMING

### Action Functions

**Verb + Noun pattern - `getX`, `setX`, `handleX`, `calculateX`**

```typescript
// ✅ CORRECT
const getProjectById = (id: string): Project | undefined => {};
const getProjectsByCategory = (category: string): readonly Project[] => {};
const setSelectedProject = (project: Project): void => {};
const handleProjectSelect = (id: string): void => {};
const calculateTotalExperience = (): number => {};
const formatDate = (date: string): string => {};
const validateEmail = (email: string): boolean => {};
const createProjectCard = (): JSX.Element => {};

// ❌ WRONG
const project = (id: string): Project => {};               (unclear action)
const projectEdit = (id: string): void => {};              (vague)
const manageProject = (id: string): void => {};            (too broad)
const p_fetch = (): readonly Project[] => {};              (poor naming)
```

### Handler Functions

**Use `handle` prefix**

```typescript
// ✅ CORRECT
const handleClick = (event: React.MouseEvent): void => {};
const handleChange = (value: string): void => {};
const handleSubmit = (event: React.FormEvent): void => {};
const handleProjectSelect = (project: Project): void => {};
const handleMouseEnter = (): void => {};
const handleToggleMenu = (): void => {};

// ❌ WRONG
const onClick = (): void => {};                   (missing handle)
const onProjectSelect = (): void => {};           (should use handle)
const projectSelectHandler = (): void => {};      (inconsistent)
```

### Callback Props

**Use `on` prefix**

```typescript
// ✅ CORRECT
interface Props {
  readonly onClick?: (event: React.MouseEvent) => void;
  readonly onChange?: (value: string) => void;
  readonly onSelect?: (item: Item) => void;
  readonly onSubmit?: (data: FormData) => void;
}

// ❌ WRONG
interface Props {
  readonly handle_click?: () => void;              (should use on)
  readonly afterSelect?: () => void;               (should use on)
  readonly click?: () => void;                     (missing prefix)
}
```

### Getter Functions

**Use `get` prefix**

```typescript
// ✅ CORRECT
export const getProjectById = (id: string): Project | undefined => {};
export const getProjectsByTechnology = (tech: string): readonly Project[] => {};
export const getFeaturedProjects = (): readonly Project[] => {};
export const getSkillsByCategory = (cat: SkillCategory): readonly Skill[] => {};

// ❌ WRONG
export const project = (id: string): Project => {};          (missing get)
export const findProject = (id: string): Project => {};      (should use get)
export const fetchProjects = (): Project[] => {};            (should use get)
```

### Predicate Functions

**Use `is`, `has`, or `can` prefix**

```typescript
// ✅ CORRECT
const isProject = (obj: unknown): obj is Project => {};
const hasError = (result: Result): boolean => {};
const canSubmit = (form: Form): boolean => {};
const isEmpty = (array: readonly string[]): boolean => {};

// ❌ WRONG
const checkProject = (obj: unknown): boolean => {};          (should use is)
const checkHasError = (): boolean => {};                     (unclear)
const validateResult = (): boolean => {};                    (should use is)
```

### React Component Functions

**PascalCase - component names, camelCase props**

```typescript
// ✅ CORRECT
export const ProjectCard = (props: ProjectCardProps): JSX.Element => {};
export const SkillCard = (props: SkillCardProps): JSX.Element => {};
export const ExperienceItem = (props: ExperienceItemProps): JSX.Element => {};

// Props callbacks
interface Props {
  readonly onSelect?: (project: Project) => void;
  readonly onClick?: (id: string) => void;
}

// ❌ WRONG
export const projectCard = (): JSX.Element => {};            (should be PascalCase)
export const PROJECT_CARD = (): JSX.Element => {};           (should be PascalCase)
```

---

## TYPE & INTERFACE NAMING

### Interfaces

**Use PascalCase - suffixes for clarity**

```typescript
// ✅ CORRECT - Data interfaces
interface Project {
  readonly id: string;
}

interface Experience {
  readonly id: string;
}

// ✅ CORRECT - Component props
interface ProjectCardProps {
  readonly project: Project;
}

interface SkillCardProps {
  readonly skill: Skill;
}

// ❌ WRONG
interface project {                (should be PascalCase)
interface PROJECT {                (should be PascalCase)
interface IProject {               (don't use I prefix)
interface ProjectInterface {       (redundant suffix)
```

### Props Interfaces

**Suffix with `Props` - describe what props they accept**

```typescript
// ✅ CORRECT
interface HeaderProps {
  readonly title?: string;
  readonly onClose?: () => void;
}

interface ProjectCardProps {
  readonly project: Project;
  readonly onClick?: () => void;
}

interface ListProps<T> {
  readonly items: readonly T[];
}

// ❌ WRONG
interface Header {                 (should have Props suffix)
interface ProjectCardComponentProps {
  // "Component" is redundant
}
interface ProjectCardP {           (unclear abbreviation)
```

### Type Aliases

**Use PascalCase - descriptive names**

```typescript
// ✅ CORRECT
type ProjectId = string & { readonly __brand: 'ProjectId' };
type Status = 'PENDING' | 'ACTIVE' | 'COMPLETED';
type Handler = (event: React.MouseEvent) => void;
type Result<T> = { success: true; data: T } | { success: false; error: Error };

// ❌ WRONG
type projectId = string;           (should be PascalCase)
type PROJECT_ID = string;          (should be PascalCase)
type T = string;                   (too generic)
```

### Enums

**PascalCase for enum name, UPPER_SNAKE_CASE for values**

```typescript
// ✅ CORRECT
enum SkillCategory {
  FRONTEND = 'FRONTEND',
  BACKEND = 'BACKEND',
  DATABASES = 'DATABASES',
  DEVOPS = 'DEVOPS',
}

enum Status {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

// ❌ WRONG
enum skillCategory {               (should be PascalCase)
enum SKILLCATEGORY {               (should be PascalCase)
enum SkillCategory {
  Frontend = 'FRONTEND',           (values should be UPPER_SNAKE_CASE)
  BE = 'BACKEND',                  (should spell out)
}
```

---

## REACT COMPONENT NAMING

### Component Names

**Always PascalCase - matches file name**

```typescript
// ✅ CORRECT - File: ProjectCard.tsx
export const ProjectCard = (): JSX.Element => {};

// ✅ CORRECT - File: SkillCard.tsx
export const SkillCard = (): JSX.Element => {};

// ❌ WRONG
export const projectCard = (): JSX.Element => {};  (should be PascalCase)
export const ProjectCardComponent = (): JSX.Element => {}; (redundant)
```

### Props Parameter Names

**Use destructured parameter, name it `props` if not destructured**

```typescript
// ✅ CORRECT - Destructured
interface Props {
  readonly title: string;
}

export const Card = ({ title }: Props): JSX.Element => {
  return <div>{title}</div>;
};

// ✅ CORRECT - Not destructured
export const Card = (props: Props): JSX.Element => {
  return <div>{props.title}</div>;
};

// ❌ WRONG
export const Card = (p: Props): JSX.Element => {};    (too short)
export const Card = (componentProps: Props) => {};    (redundant)
```

### Event Handler Props

**Use `on` prefix**

```typescript
// ✅ CORRECT
interface Props {
  readonly onClick?: () => void;
  readonly onChange?: (value: string) => void;
  readonly onSubmit?: (data: FormData) => void;
  readonly onSuccess?: (result: Result) => void;
  readonly onError?: (error: Error) => void;
}

// ❌ WRONG
interface Props {
  readonly handleClick?: () => void;  (should use on)
  readonly click?: () => void;        (should use on)
  readonly onClickHandler?: () => void; (redundant)
}
```

### State Variable Naming

**Use `state` + action pattern**

```typescript
// ✅ CORRECT
const [isOpen, setIsOpen] = useState<boolean>(false);
const [selectedProject, setSelectedProject] = useState<Project | null>(null);
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<Error | null>(null);

// ❌ WRONG
const [open, setOpen] = useState<boolean>();           (missing is prefix)
const [project, setProject] = useState<Project>();     (unclear variable)
const [onLoading, setOnLoading] = useState<boolean>(); (should be isLoading)
```

---

## COMMON NAMING PATTERNS

### Get/Fetch Pattern

```typescript
// ✅ CORRECT
const getProjects = (): readonly Project[] => {};
const getProjectById = (id: string): Project | undefined => {};
const getProjectsByCategory = (cat: string): readonly Project[] => {};
const getCurrentProject = (): Project | null => {};

// ❌ WRONG
const projects = (): readonly Project[] => {};  (missing action verb)
const fetchProject = (): Project => {};         (should use get)
const returnProjects = (): readonly Project[] => {}; (use get)
```

### Filter/Find Pattern

```typescript
// ✅ CORRECT
const filterProjects = (predicate: (p: Project) => boolean): readonly Project[] => {};
const findProjectById = (id: string): Project | undefined => {};
const searchProjects = (query: string): readonly Project[] => {};

// ❌ WRONG
const projects = (): readonly Project[] => {};  (unclear action)
const searchProject = (): Project => {};        (should specify return type)
```

### Calculate Pattern

```typescript
// ✅ CORRECT
const calculateTotalPrice = (items: readonly Item[]): number => {};
const calculateDuration = (start: string, end: string): string => {};
const calculateExperienceYears = (): number => {};

// ❌ WRONG
const total = (): number => {};                 (unclear calculation)
const computePrice = (): number => {};          (use calculate)
```

---

## ABSOLUTE RULES

### 1. NO Single Letter Variables

**❌ WRONG EVERYWHERE**

```typescript
let x: string;
let n: number;
let i: string; // Except in short loops: for (let i = 0; ...)

// ✅ Exception in loops only
for (let i: number = 0; i < 10; i++) {}
```

### 2. NO Abbreviations (Except Standard)

**❌ WRONG**

```typescript
const prj: Project; // Use project
const mgr: Manager; // Use manager
const ppl: Person[]; // Use people
const tmp: string; // Use temp or temporary
```

**✅ ALLOWED ABBREVIATIONS**

```typescript
const id: string; // Universal standard
const url: string; // Universal standard
const db: Database; // Context-specific standard
const api: API; // Context-specific standard
```

### 3. NO Hungarian Notation

**❌ WRONG**

```typescript
const strName: string; // 'str' prefix unnecessary
const numCount: number; // 'num' prefix unnecessary
const boolActive: boolean; // 'bool' prefix unnecessary
const arrItems: Item[]; // 'arr' prefix - use plural names instead
```

### 4. NO Meaningless Names

**❌ WRONG**

```typescript
const data: any;
const result: any;
const value: string;
const stuff: string[];
const thing: boolean;
```

---

## REFERENCES

- [Google Style Guides - Naming](https://google.github.io/styleguide/tsguide.html#names)
- [Airbnb JavaScript Naming Conventions](https://github.com/airbnb/javascript#naming-conventions)
- [TypeScript Naming Conventions](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [React Naming Conventions](https://react.dev/learn/thinking-in-react)
