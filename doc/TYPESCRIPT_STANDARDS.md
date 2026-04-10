# TYPESCRIPT STANDARDS

## Overview

This project enforces strict TypeScript standards with ES2017 target and all strict compiler options enabled. These standards ensure type safety, immutability, and code quality across the entire codebase.

---

## COMPILER CONFIGURATION

### Base Settings (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["ES2017", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "jsx": "react-jsx"
  }
}
```

### Strict Mode (ALL OPTIONS ON)

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true
  }
}
```

---

## CORE REQUIREMENTS

### 1. NO IMPLICIT ANY

**❌ WRONG:**

```typescript
function processData(data) {
  // Error: implicit any
  return data;
}

const value = someFunction(); // Error: implicit return type
```

**✅ CORRECT:**

```typescript
function processData(data: string): string {
  return data;
}

const value: number = someFunction();
```

### 2. EXPLICIT TYPES ON ALL VARIABLES

**❌ WRONG:**

```typescript
const projects = getProjects(); // Type not explicit
let count = 0; // Could be number or string
```

**✅ CORRECT:**

```typescript
const projects: readonly Project[] = getProjects();
let count: number = 0;
```

### 3. READONLY PROPERTIES

**Requirement:** All data structures must use `readonly` for immutability guarantees.

**❌ WRONG:**

```typescript
interface Project {
  id: string;
  name: string;
  technologies: string[];
}
```

**✅ CORRECT:**

```typescript
interface Project {
  readonly id: string;
  readonly name: string;
  readonly technologies: readonly string[];
}
```

### 4. READONLY ARRAYS

**Requirement:** Use `readonly` for array types to prevent accidental mutations.

**❌ WRONG:**

```typescript
const PROJECTS: Project[] = [];
const skills: string[] = [];
```

**✅ CORRECT:**

```typescript
const PROJECTS: readonly Project[] = [];
const skills: readonly string[] = [];
```

### 5. READONLY PROPS IN REACT

**Requirement:** All React component props must be readonly.

**❌ WRONG:**

```typescript
interface ProjectCardProps {
  project: Project;
  onSelect: (id: string) => void;
}
```

**✅ CORRECT:**

```typescript
interface ProjectCardProps {
  readonly project: Project;
  readonly onSelect?: (id: string) => void;
}
```

---

## TYPES VS INTERFACES

### Use INTERFACES for:

- Data shapes (objects, POJOs)
- React component props
- Function parameters
- Configuration objects

**✅ CORRECT:**

```typescript
interface Project {
  readonly id: string;
  readonly title: string;
}

interface ProjectCardProps {
  readonly project: Project;
}
```

### Use TYPES for:

- Union types
- Tuple types
- Conditional types
- Function signatures
- Discriminated unions

**✅ CORRECT:**

```typescript
type ProficiencyLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';

type Handler = (event: React.MouseEvent) => void;

type Result<T> = { success: true; data: T } | { success: false; error: string };
```

---

## GENERICS

### Generic Functions

**Requirement:** Use generics for reusable, type-safe functions.

```typescript
// Generic array filter
function filterArray<T>(items: readonly T[], predicate: (item: T) => boolean): readonly T[] {
  return items.filter(predicate);
}

// Usage
const numbers: readonly number[] = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (n: number): boolean => n % 2 === 0);
```

### Generic Components

```typescript
interface ListProps<T> {
  readonly items: readonly T[];
  readonly renderItem: (item: T, index: number) => React.ReactNode;
  readonly keyExtractor: (item: T) => string;
}

export const List = <T,>({
  items,
  renderItem,
  keyExtractor,
}: ListProps<T>): JSX.Element => (
  <ul>
    {items.map((item: T, index: number): React.ReactNode => (
      <li key={keyExtractor(item)}>{renderItem(item, index)}</li>
    ))}
  </ul>
);
```

---

## ENUMS

### String Enums (PREFERRED)

**✅ CORRECT:**

```typescript
enum SkillCategory {
  FRONTEND = 'FRONTEND',
  BACKEND = 'BACKEND',
  DATABASES = 'DATABASES',
  DEVOPS = 'DEVOPS',
  TOOLS = 'TOOLS',
  SOFT_SKILLS = 'SOFT_SKILLS',
}

// Usage
const category: SkillCategory = SkillCategory.FRONTEND;
```

### Const Assertions (Alternative)

```typescript
const SKILL_CATEGORIES = {
  FRONTEND: 'FRONTEND',
  BACKEND: 'BACKEND',
  DATABASES: 'DATABASES',
} as const;

type SkillCategory = (typeof SKILL_CATEGORIES)[keyof typeof SKILL_CATEGORIES];
```

---

## UTILITY TYPES

### Record Type

```typescript
// Map of skills by category
const skillsByCategory: Record<SkillCategory, readonly Skill[]> = {
  [SkillCategory.FRONTEND]: frontend_skills,
  [SkillCategory.BACKEND]: backend_skills,
  // ... etc
};
```

### Partial Type

```typescript
// For optional updates
type ProjectUpdate = Partial<Project>;

function updateProject(id: string, update: ProjectUpdate): void {
  // ...
}
```

### Pick Type

```typescript
// Extract specific fields
type ProjectPreview = Pick<Project, 'id' | 'title' | 'description'>;
```

### Omit Type

```typescript
// Exclude specific fields
type ProjectWithoutId = Omit<Project, 'id'>;
```

### ReturnType

```typescript
// Get return type of function
function getProjects(): readonly Project[] {
  return [];
}

type Projects = ReturnType<typeof getProjects>;
```

---

## UNION & INTERSECTION TYPES

### Union Types

```typescript
type Status = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';

type Result = { success: true; data: Project } | { success: false; error: string };
```

### Intersection Types

```typescript
interface Timestamped {
  readonly createdAt: string;
  readonly updatedAt: string;
}

interface Project extends Timestamped {
  readonly id: string;
  readonly title: string;
}
```

---

## CLASS vs INTERFACE

### Use INTERFACES for Data

```typescript
interface User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
}
```

### AVOID CLASSES (Use Plain Objects)

**❌ AVOID:**

```typescript
class User {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}
```

**✅ CORRECT:**

```typescript
// Just use the interface for type safety
const user: User = { id: '123', name: 'John', email: 'john@example.com' };
```

---

## CONDITIONAL TYPES

### Basic Pattern

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>; // true
type B = IsString<123>; // false
```

### Discriminated Unions

```typescript
type Result<T> =
  | { readonly status: 'success'; readonly data: T }
  | { readonly status: 'error'; readonly error: Error }
  | { readonly status: 'loading' };

function handleResult<T>(result: Result<T>): void {
  if (result.status === 'success') {
    console.log(result.data); // T is known here
  } else if (result.status === 'error') {
    console.log(result.error); // Error is known here
  }
}
```

---

## FUNCTION TYPES

### Arrow Functions (REQUIRED)

```typescript
// Named arrow function
const formatDate = (date: string, format: 'short' | 'long'): string => {
  // ...
};

// Explicit return type
const calculateTotal = (prices: readonly number[]): number => {
  return prices.reduce((sum: number, price: number): number => sum + price, 0);
};
```

### Function Parameters

```typescript
// Callback with explicit type
type OnSelect = (project: Project) => void;

interface Props {
  readonly onSelect: OnSelect;
}
```

### Optional Parameters

```typescript
// Use optional chaining
function process(data: string, format?: 'json' | 'xml'): void {
  const outputFormat = format ?? 'json';
}
```

---

## NEVER TYPE

**Use `never` for exhaustiveness checking:**

```typescript
type Status = 'PENDING' | 'COMPLETED' | 'FAILED';

function handleStatus(status: Status): string {
  switch (status) {
    case 'PENDING':
      return 'Waiting...';
    case 'COMPLETED':
      return 'Done!';
    case 'FAILED':
      return 'Error!';
    default:
      // If you forget a case, this will error
      const _exhaustiveCheck: never = status;
      return _exhaustiveCheck;
  }
}
```

---

## NULL & UNDEFINED HANDLING

### Strict Null Checks

```typescript
// With strictNullChecks enabled
let value: string | null = null;

if (value !== null) {
  console.log(value.toUpperCase()); // OK
}

// Optional chaining
const length = value?.length; // number | undefined

// Nullish coalescing
const name = value ?? 'Unknown';
```

### Never Use Non-null Assertion (!)

**❌ AVOID:**

```typescript
const value = getData()!; // Dangerous
```

**✅ CORRECT:**

```typescript
const value = getData();
if (value !== null) {
  // Safe to use
}
```

---

## MODULE EXPORTS

### Named Exports (REQUIRED)

```typescript
// ✅ CORRECT
export interface Project {
  readonly id: string;
}

export const PROJECTS: readonly Project[] = [];

export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find((p: Project): boolean => p.id === id);
};
```

### Default Export (ONLY for Pages)

```typescript
// ✅ For page components ONLY
export default function HomePage(): JSX.Element {
  return <div>Home</div>;
}
```

---

## VALIDATION WITH TYPES

### Type Guards

```typescript
function isProject(obj: unknown): obj is Project {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'title' in obj &&
    typeof (obj as Project).id === 'string'
  );
}

// Usage
const data: unknown = { id: '123', title: 'Project' };
if (isProject(data)) {
  console.log(data.title); // Safe
}
```

---

## COMMON PATTERNS

### Immutable Array Operations

```typescript
// Adding item
const updated = [...items, newItem];

// Removing item
const updated = items.filter((item: Project): boolean => item.id !== removeId);

// Mapping
const mapped = items.map(
  (item: Project): ProjectPreview => ({
    id: item.id,
    title: item.title,
  })
);

// Sorting
const sorted = [...items].sort((a: Project, b: Project): number => a.title.localeCompare(b.title));
```

### Async/Await

```typescript
async function fetchProjects(): Promise<readonly Project[]> {
  try {
    const response = await fetch('/api/projects');
    const data: unknown = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Invalid response');
    }

    return data as readonly Project[];
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
}
```

---

## ESLINT RULES

Auto-enforced rules in `.eslintrc.mjs`:

- `@typescript-eslint/no-explicit-any` - No explicit `any` type
- `@typescript-eslint/no-implicit-any-catch` - Catch clause must be typed
- `@typescript-eslint/explicit-function-return-types` - Functions need return types
- `@typescript-eslint/explicit-member-accessibility` - Class members must be accessible
- `@typescript-eslint/no-unused-vars` - No unused variables

---

## VALIDATION COMMANDS

```bash
# Full type check
npm run type-check

# Watch mode (during development)
npm run type-check -- --watch

# Build with strict mode
npm run build
```

---

## REFERENCES

- [TypeScript Handbook - Strict Mode](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [TypeScript Handbook - Readonly](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript Handbook - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [ESLint TypeScript Plugin](https://github.com/typescript-eslint/typescript-eslint)
