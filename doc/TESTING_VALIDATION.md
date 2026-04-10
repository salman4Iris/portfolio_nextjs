# TESTING & VALIDATION

## Overview

All code must pass TypeScript strict mode compilation, ESLint analysis, and Prettier formatting before being committed. Validation commands must run successfully before deployment.

---

## VALIDATION COMMANDS

### TypeScript Type Checking

```bash
# Full type check with detailed errors
npm run type-check

# Watch mode (during development)
npm run type-check -- --watch

# Display all errors
npm run type-check -- --listFiles

# Output JSON for parsing
npm run type-check -- --listFilesOnly
```

**What it catches:**

- Type mismatches
- Implicit `any` types
- Undefined variables
- Missing function parameters
- Incorrect return types

### ESLint Linting

```bash
# Check all files for linting issues
npm run lint

# Check specific file
npm run lint -- src/components/Button.tsx

# Auto-fix fixable issues
npm run lint:fix

# See detailed error explanations
npm run lint -- --format pretty
```

**What it catches:**

- `no-var` violations (should use const/let)
- Unused variables
- Missing semicolons
- Inconsistent naming
- Type safety violations
- React hook exhaustion issues

### Prettier Formatting

```bash
# Check formatting
npm run format:check

# Apply formatting
npm run format

# Format specific file
npx prettier --write src/components/Button.tsx

# Check formatting with options
npm run format:check -- --check
```

**What it catches:**

- Inconsistent indentation (2 spaces required)
- Line length (100 character limit)
- Quote style (double quotes required)
- Trailing commas
- Bracket spacing

### Production Build

```bash
# Build for production
npm run build

# This runs type-check + build
# Will fail if any type errors exist
npm run build 2>&1 | head -50
```

**What it catches:**

- All type errors
- Build-time errors
- Missing files/imports
- Configuration issues

---

## PRE-COMMIT CHECKLIST

**Before committing any code:**

```bash
# 1. Run type checking
npm run type-check

# 2. Run linting
npm run lint

# 3. Run formatting check
npm run format:check

# 4. Run full build
npm run build

# If ALL pass, commit is safe
git add .
git commit -m "message"
```

**Shortcut script to add to package.json:**

```json
{
  "scripts": {
    "validate": "npm run type-check && npm run lint && npm run format:check && npm run build"
  }
}
```

Then run:

```bash
npm run validate
```

---

## VALIDATION ERRORS

### TypeError Examples

**❌ WRONG:**

```typescript
// Error: Type 'string' is not assignable to type 'number'
const count: number = '5';

// Error: Property 'map' does not exist on type 'undefined'
const items = undefined;
items.map((item) => item); // ✗

// Error: Type 'any' is not allowed
const value: any = getData();
```

**✅ CORRECT:**

```typescript
const count: number = 5;

const items: readonly Item[] | undefined = getItems();
if (items !== undefined) {
  items.map((item: Item) => item);
}

const value: DataType = getData();
```

### ESLint Examples

**❌ WRONG:**

```typescript
// error: Unexpected var, use let or const instead
var name = 'John';

// error: 'unused' is declared but its value is never read
const unused = getValue();

// error: Unsafe property access on an 'any' typed value
const value: any = getData();
value.property; // ✗
```

**✅ CORRECT:**

```typescript
const name = 'John';

// Remove unused variable or use it
const name = getValue();
console.log(name);

const value: DataType = getData();
value.property; // ✓
```

### Prettier Examples

**❌ WRONG:**

```typescript
// Line too long (101 chars - exceeds 100 limit)
const veryLongVariableName = 'This is a very long string that exceeds the line limit';

// Wrong quote style (single quotes)
const name = 'John';

// Wrong indentation (3 spaces instead of 2)
const obj = {
  name: 'John',
};
```

**✅ CORRECT:**

```typescript
const veryLongVariableName =
  'This is a very long string that would exceed the line limit if continued';

const name = 'John';

const obj = {
  name: 'John',
};
```

---

## TYPE CHECKING SCENARIOS

### Scenario 1: Missing Types

**❌ WRONG:**

```typescript
// Error: Type 'unknown' is not assignable to type 'string'
function process(data) {
  return data.toLowerCase();
}

// Error: Implicit 'any' type
const projects = fetch('/api/projects');
```

**✅ CORRECT:**

```typescript
function process(data: string): string {
  return data.toLowerCase();
}

async function fetchProjects(): Promise<readonly Project[]> {
  const response = await fetch('/api/projects');
  return response.json();
}
```

### Scenario 2: Nullable Values

**❌ WRONG:**

```typescript
interface Project {
  id: string;
  title: string;
}

function getProject(id: string): Project {
  return projects.find((p) => p.id === id); // Could be undefined!
}
```

**✅ CORRECT:**

```typescript
interface Project {
  id: string;
  title: string;
}

function getProject(id: string): Project | undefined {
  return projects.find((p: Project): boolean => p.id === id);
}

// Safe usage
const project = getProject('123');
if (project !== undefined) {
  console.log(project.title);
}
```

### Scenario 3: Generic Types

**❌ WRONG:**

```typescript
function filterArray(items, predicate) {
  return items.filter(predicate); // No type safety
}
```

**✅ CORRECT:**

```typescript
function filterArray<T>(items: readonly T[], predicate: (item: T) => boolean): readonly T[] {
  return items.filter(predicate);
}

const numbers = filterArray([1, 2, 3], (n: number) => n > 2);
```

---

## LINTING CONFIGURATION

### ESLint Rules (`eslintrc.mjs`)

**Enabled Rules:**

```javascript
rules: {
  // ES6+ enforcement
  'no-var': 'error',                    // Use const/let
  'prefer-const': 'error',              // Use const when not reassigned
  'prefer-arrow-callback': 'error',     // Use arrow functions
  'no-implicit-return': 'off',          // Allow implicit returns in arrow functions

  // TypeScript specific
  '@typescript-eslint/no-explicit-any': 'error',         // No any type
  '@typescript-eslint/explicit-function-return-types': 'error',  // Function return types
  '@typescript-eslint/no-unused-vars': 'error',          // No unused variables
  '@typescript-eslint/no-implicit-any-catch': 'error',   // Catch block types

  // React specific
  'react-hooks/rules-of-hooks': 'error',                 // Hook rules
  'react-hooks/exhaustive-deps': 'warn',                 // Hook dependencies
}
```

---

## PRETTIER CONFIGURATION

### `.prettierrc.json` Settings

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

**Requirements:**

- ✅ Lines max 100 characters
- ✅ 2-space indentation
- ✅ Double quotes for strings
- ✅ Trailing commas
- ✅ Semicolons at end of statements

---

## TESTING BEST PRACTICES

### Unit Testing Pattern

If adding Jest tests:

```typescript
// ✅ CORRECT test structure
describe('ProjectCard component', () => {
  it('should render project title', () => {
    const project: Project = {
      id: '1',
      title: 'Test Project',
      // ... other fields
    };

    const { getByText } = render(<ProjectCard project={project} />);
    expect(getByText('Test Project')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const onClick = jest.fn();
    const project: Project = { /* ... */ };

    const { getByRole } = render(
      <ProjectCard project={project} onClick={() => onClick(project.id)} />
    );

    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalledWith(project.id);
  });
});
```

### Component Testing

```typescript
// ✅ Test component behavior
it('should display loading state', () => {
  const { getByTestId } = render(<ProjectCard project={undefined} loading={true} />);
  expect(getByTestId('spinner')).toBeInTheDocument();
});

it('should display error message', () => {
  const { getByText } = render(
    <ProjectCard project={undefined} error="Failed to load" />
  );
  expect(getByText('Failed to load')).toBeInTheDocument();
});
```

---

## CONTINUOUS INTEGRATION

### GitHub Actions Setup

```yaml
# .github/workflows/validate.yml
name: Validate

on: [push]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - run: npm ci

      - run: npm run type-check

      - run: npm run lint

      - run: npm run format:check

      - run: npm run build
```

---

## DEPLOYMENT VALIDATION

**Before deploying to production:**

```bash
# 1. Comprehensive validation
npm run validate

# 2. Full build test
npm run build

# 3. Preview build locally
npm run build && npm start

# 4. Manual testing on staging
# - Test all pages
# - Test dark mode toggle
# - Test responsive design
# - Test form submissions

# 5. Performance check
npm run analyze  # If webpack-bundle-analyzer installed

# 6. Deploy to production
npm run deploy  # Or push to production branch
```

---

## DEBUGGING VALIDATION FAILURES

### Type Errors

```bash
# Get detailed type error info
npm run type-check -- --noEmit --pretty false

# Show error locations
npm run type-check -- --listFiles

# Generate declaration files to inspect
npm run build -- --declaration
```

### ESLint Errors

```bash
# Show detailed error explanations
npx eslint src --format pretty

# Fix automatically
npm run lint:fix

# Check specific rule
npx eslint src --rule "no-var"

# Show docs for rule
npx eslint --print-config src | grep no-var
```

### Prettier Issues

```bash
# Check which files are not formatted
npm run format:check

# Show diff
npm run format:check -- --write --diff

# Apply formatting
npm run format

# Verify after formatting
npm run format:check
```

---

## VALIDATION WORKFLOW

### During Development

```bash
# In terminal 1: Watch mode
npm run dev

# In terminal 2: Watch validation
npm run type-check -- --watch

# In terminal 3: Watch lint
npx eslint src --watch
```

### Before Each Commit

```bash
# Full validation
npm run validate

# If it fails:
# 1. Read the error message
# 2. Fix the specific issue
# 3. Re-run validation

# If it passes:
git add .
git commit -m "message"
```

### Before Each Push

```bash
# Final check
npm run validate && npm run build

# Deploy when successful
git push origin main
```

---

## COMMON VALIDATION ERRORS & FIXES

| Error                     | Cause                   | Fix                           |
| ------------------------- | ----------------------- | ----------------------------- |
| Type 'any' is not allowed | Missing type annotation | Add explicit type: `: string` |
| Property does not exist   | Type mismatch           | Check interface definition    |
| Implicit any              | No return type          | Add `: ReturnType`            |
| No-var violation          | Using var keyword       | Change to `const` or `let`    |
| Line too long             | Over 100 characters     | Break into multiple lines     |
| Missing semicolon         | Prettier config         | Run `npm run format`          |

---

## REFERENCES

- [TypeScript Handbook - Type Checking](https://www.typescriptlang.org/docs/handbook/)
- [ESLint Documentation](https://eslint.org/docs/rules/)
- [Prettier Documentation](https://prettier.io/docs/en/index.html)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)
