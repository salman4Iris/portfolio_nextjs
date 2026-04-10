# REACT COMPONENT STANDARDS

## Overview

All React components must follow strict functional component patterns with TypeScript types. This ensures consistency, type safety, and maintainability across the portfolio.

---

## COMPONENT TYPES

### 1. CLIENT COMPONENTS

Use `'use client'` directive for interactive components.

```typescript
'use client';

import { useState, useCallback } from 'react';
import type { Project } from '@/types';

interface ProjectListProps {
  readonly projects: readonly Project[];
  readonly onSelect?: (project: Project) => void;
}

export const ProjectList = ({
  projects,
  onSelect,
}: ProjectListProps): JSX.Element => {
  const [focused, setFocused] = useState<string | null>(null);

  const handleClick = useCallback((project: Project): void => {
    setFocused(project.id);
    onSelect?.(project);
  }, [onSelect]);

  return (
    <div>
      {projects.map((project: Project): JSX.Element => (
        <button
          key={project.id}
          onClick={() => handleClick(project)}
          aria-pressed={focused === project.id}
        >
          {project.title}
        </button>
      ))}
    </div>
  );
};
```

### 2. SERVER COMPONENTS (DEFAULT)

Omit `'use client'` for server-side components.

```typescript
import SectionWrapper from '@/components/SectionWrapper';
import { ProjectCard } from '@/components/ProjectCard';
import { PROJECTS } from '@/content/projects';

export default function ProjectsPage(): JSX.Element {
  return (
    <SectionWrapper>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
```

---

## COMPONENT STRUCTURE

### Required Elements

```typescript
'use client';  // Add if interactive

import type { PropsWithChildren } from 'react';
import type { MyComponentProps } from '@/types';

// Props interface with readonly
interface MyComponentProps {
  readonly title: string;
  readonly items?: readonly string[];
  readonly onClick?: (id: string) => void;
  readonly children?: React.ReactNode;
}

// Component with JSX.Element return type
export const MyComponent = ({
  title,
  items = [],
  onClick,
  children,
}: MyComponentProps): JSX.Element => {
  // Implementation
  return <div>{title}</div>;
};
```

---

## PROPS PATTERNS

### Optional Props

```typescript
interface Props {
  readonly isActive?: boolean; // Optional
  readonly onClick?: () => void; // Optional callback
}
```

### Default Props

```typescript
interface Props {
  readonly variant?: 'primary' | 'secondary';
  readonly size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ variant = 'primary', size = 'md' }: Props): JSX.Element => {
  // ...
};
```

### Children Patterns

```typescript
// With children
interface Props {
  readonly children: React.ReactNode;
}

// Optional children
interface Props {
  readonly children?: React.ReactNode;
}

// Multiple children types
interface Props {
  readonly header: React.ReactNode;
  readonly content: React.ReactNode;
  readonly footer?: React.ReactNode;
}
```

### Callback Props

```typescript
type OnClick = (event: React.MouseEvent<HTMLButtonElement>) => void;

interface Props {
  readonly onClick?: OnClick;
  readonly onHover?: (id: string) => void;
  readonly onChange?: (value: string) => void;
}
```

---

## HOOKS USAGE

### useState Pattern

```typescript
const [count, setCount] = useState<number>(0);
const [name, setName] = useState<string>('');
const [isOpen, setIsOpen] = useState<boolean>(false);

// Complex state
interface State {
  readonly loading: boolean;
  readonly error: Error | null;
  readonly data: Project | null;
}

const [state, setState] = useState<State>({
  loading: false,
  error: null,
  data: null,
});
```

### useEffect Pattern

**Always include dependency array:**

```typescript
// No dependencies - runs once on mount
useEffect((): void => {
  console.log('Component mounted');
}, []);

// With dependencies
useEffect((): void => {
  console.log('Project changed:', project.id);
}, [project.id]);

// Cleanup function
useEffect((): (() => void) => {
  const handleResize = (): void => {
    console.log('Window resized');
  };

  window.addEventListener('resize', handleResize);

  return (): void => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

// Return void correctly
useEffect((): void => {
  // Don't return anything if no cleanup needed
}, [dep]);
```

### useCallback Pattern

```typescript
const handleSelect = useCallback(
  (project: Project): void => {
    onSelect?.(project);
  },
  [onSelect]
); // Include all external values in dependency array

// With multiple params
const handleChange = useCallback(
  (id: string, value: string): void => {
    updateProject(id, value);
  },
  [updateProject]
);
```

### useMemo Pattern

```typescript
const filteredProjects = useMemo((): readonly Project[] => {
  return projects.filter((p: Project): boolean => p.technologies.includes(selectedTech));
}, [projects, selectedTech]);
```

### Custom Hooks

```typescript
interface UseProjectsReturn {
  readonly projects: readonly Project[];
  readonly loading: boolean;
  readonly error: Error | null;
  readonly refetch: () => Promise<void>;
}

export const useProjects = (): UseProjectsReturn => {
  const [projects, setProjects] = useState<readonly Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      const data = await getProjects();
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect((): void => {
    void fetch(); // Run on mount
  }, [fetch]);

  return { projects, loading, error, refetch: fetch };
};
```

---

## CONDITIONAL RENDERING

### If/Else Pattern

```typescript
// ✅ CORRECT
if (loading) {
  return <LoadingSpinner />;
}

if (error) {
  return <ErrorMessage error={error} />;
}

return <Content data={data} />;
```

### Ternary Pattern

```typescript
// ✅ Simple condition
return isActive ? <Active /> : <Inactive />;

// ✅ Nested ternary (avoid too many levels)
return loading ? (
  <Spinner />
) : error ? (
  <Error />
) : (
  <Content />
);
```

### Logical AND Pattern

```typescript
// ✅ CORRECT - Show only if true
return (
  <div>
    {items.length > 0 && <ItemList items={items} />}
  </div>
);
```

### Switch Pattern

```typescript
// ✅ For multiple conditions
const renderStatus = (status: string): JSX.Element => {
  switch (status) {
    case 'PENDING':
      return <PendingView />;
    case 'ACTIVE':
      return <ActiveView />;
    case 'COMPLETED':
      return <CompletedView />;
    default:
      return <UnknownView status={status} />;
  }
};
```

---

## JSX PATTERNS

### Fragment vs Div

```typescript
// ✅ Use fragment when no wrapper needed
<>
  <Header />
  <Content />
</>

// ✅ Use div with className when styling needed
<div className="flex gap-4">
  <Item />
  <Item />
</div>
```

### List Rendering

```typescript
// ✅ CORRECT - Always use key and map to JSX.Element
<ul>
  {items.map((item: Item): JSX.Element => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>

// ❌ WRONG - Don't use index as key
<ul>
  {items.map((item: Item, index: number): JSX.Element => (
    <li key={index}>{item.name}</li>  // BAD: re-renders if list changes
  ))}
</ul>
```

### Event Handlers

```typescript
// ✅ CORRECT - Inline arrow functions
<button onClick={() => handleClick(item.id)}>
  Click me
</button>

// ✅ CORRECT - Callback from onClick
const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  // Handle form
};

<form onSubmit={handleSubmit}>
  {/* Form content */}
</form>
```

### Attributes

```typescript
// ✅ CORRECT - Use standard attributes
<button
  type="button"
  aria-label="Close menu"
  disabled={isDisabled}
  className="px-4 py-2"
>
  Close
</button>

<input
  type="text"
  value={name}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
  placeholder="Enter name"
/>
```

---

## EVENT HANDLERS

### Mouse Events

```typescript
const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
  e.preventDefault();
  // Handle click
};

const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
  // Handle double click
};

const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>): void => {
  // Handle mouse enter
};
```

### Form Events

```typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  setName(e.target.value);
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  // Submit form
};

const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
  setTouched(true);
};
```

### Keyboard Events

```typescript
const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
  if (e.key === 'Enter') {
    handleSubmit();
  }
};
```

---

## STYLING IN COMPONENTS

### Tailwind Classes

```typescript
export const Button = (): JSX.Element => (
  <button
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
  >
    Click me
  </button>
);
```

### Dark Mode Support

**Always include dark: variants:**

```typescript
export const Card = ({ children }: Props): JSX.Element => (
  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg">
    {children}
  </div>
);
```

### Responsive Classes

**Use mobile-first approach:**

```typescript
export const Grid = ({ children }: Props): JSX.Element => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {children}
  </div>
);
```

### Conditional Classes

**Use `cn()` utility:**

```typescript
import { cn } from '@/lib/utils';

interface ButtonProps {
  readonly variant?: 'primary' | 'secondary';
  readonly disabled?: boolean;
}

export const Button = ({ variant = 'primary', disabled }: ButtonProps): JSX.Element => (
  <button
    className={cn(
      'px-4 py-2 rounded-lg font-medium transition-colors',
      variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
      variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
      disabled && 'opacity-50 cursor-not-allowed',
    )}
  >
    Button
  </button>
);
```

---

## MEMO & PERFORMANCE

### React.memo for Props Comparison

```typescript
interface CardProps {
  readonly title: string;
  readonly onClick: (id: string) => void;
}

const Card = ({ title, onClick }: CardProps): JSX.Element => {
  return <div>{title}</div>;
};

// Memoize to prevent unnecessary re-renders
export default React.memo(Card);
```

### useCallback for Callbacks

```typescript
// Without useCallback - onClick changes on every render
export const List = ({ items }: Props): JSX.Element => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = useCallback((id: string): void => {
    setSelected(id);
  }, []);  // Stable reference

  return (
    <ul>
      {items.map((item: Item): JSX.Element => (
        <li key={item.id}>
          <Card item={item} onClick={handleClick} />
        </li>
      ))}
    </ul>
  );
};
```

---

## ERROR BOUNDARIES

**Create an error boundary for error handling:**

```typescript
interface State {
  readonly hasError: boolean;
  readonly error: Error | null;
}

interface Props {
  readonly children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error): void {
    console.error('Error caught:', error);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <div>Something went wrong: {this.state.error?.message}</div>;
    }

    return this.props.children;
  }
}
```

---

## COMPONENT ORGANIZATION

### File Structure

```
components/
├── Header.tsx           # Main header
├── Footer.tsx           # Main footer
├── Hero.tsx             # Hero section
├── ProjectCard.tsx      # Card component
├── ExperienceItem.tsx   # Experience component
├── SectionWrapper.tsx   # Layout wrapper
└── ui/                  # shadcn/ui components
    ├── Button.tsx
    ├── Card.tsx
    └── ...
```

### Export Convention

```typescript
// Exporting as named export (REQUIRED)
export const MyComponent = (): JSX.Element => {
  // ...
};

// NOT as default export (except for pages)
// export default MyComponent;  // ❌ Don't do this
```

---

## TYPESCRIPT IN COMPONENTS

### Props Typing

```typescript
interface MyComponentProps {
  readonly title: string;
  readonly count?: number;
  readonly items: readonly Item[];
  readonly onClick?: (id: string) => void;
}

export const MyComponent = ({
  title,
  count = 0,
  items,
  onClick,
}: MyComponentProps): JSX.Element => {
  // ...
};
```

### Event Handlers

```typescript
// ✅ Type all event handlers
const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  setName(e.target.value);
};

const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
  e.preventDefault();
};
```

### Return Types

```typescript
// ✅ Always specify JSX.Element
export const Component = (): JSX.Element => {
  return <div>Component</div>;
};

// ✅ Or React.ReactNode if returning multiple types
export const Conditional = (): React.ReactNode => {
  if (loading) return <Spinner />;
  return <Content />;
};
```

---

## COMMON MISTAKES TO AVOID

### 1. Mutable State Updates

**❌ WRONG:**

```typescript
projects.push(newProject); // Mutates array
setProjects(projects); // React won't detect change
```

**✅ CORRECT:**

```typescript
setProjects([...projects, newProject]); // Creates new array
```

### 2. Missing Dependencies

**❌ WRONG:**

```typescript
useEffect((): void => {
  handleClick(); // Missing from dependency array
}, []);
```

**✅ CORRECT:**

```typescript
useEffect((): void => {
  handleClick();
}, [handleClick]); // Included in dependencies
```

### 3. State in Loops

**❌ WRONG:**

```typescript
jsx items.map(
  (item: Item): JSX.Element => {
    const [name, setName] = useState(item.name);  // Can't use hooks in loops
    return <Input value={name} />;
  }
);
```

**✅ CORRECT:**

```typescript
<ItemList items={items} />  // Extract to separate component
```

### 4. Type ANY

**❌ WRONG:**

```typescript
const value: any = getData(); // Defeats type safety
```

**✅ CORRECT:**

```typescript
const value: Project = getData(); // Type safe
```

---

## REFERENCES

- [React Docs - Functional Components](https://react.dev/reference/react/useState)
- [TypeScript React Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [React Hooks API Reference](https://react.dev/reference/react)
- [React Event Types](https://react.dev/reference/react-dom/components/common#events)
