# CODING STANDARDS FRAMEWORK

## Overview

This project now has a comprehensive, LLM-friendly coding standards framework. All standards are organized into separate markdown files in the `/doc` directory, with the main `AGENTS.md` serving as the master coordinator.

---

## Document Structure

### Master Coordinator

- **`AGENTS.md`** (root directory)
  - Quick reference to all standards
  - Tech stack overview
  - Essential rules summary
  - Git workflow examples
  - How to use documentation

### Core Standards (in `/doc` directory)

#### 1. TYPESCRIPT_STANDARDS.md (~450 lines)

**TypeScript coding requirements and patterns**

- Compiler configuration (strict mode, ES2017 target)
- Core requirements (no implicit any, readonly properties, explicit types)
- TypeScript features (interfaces, types, generics, enums, utility types)
- Union & intersection types
- Function types and patterns
- Validation with type guards
- Common patterns (immutable operations, async/await)
- ESLint rules reference

#### 2. REACT_STANDARDS.md (~500 lines)

**React component and hooks patterns**

- Component types (client vs server components)
- Component structure and required elements
- Props patterns (optional, default, children, callbacks)
- Hooks usage (useState, useEffect, useCallback, useMemo, custom hooks)
- Conditional rendering patterns
- JSX patterns (fragments, list rendering, event handlers)
- Event handlers (mouse, form, keyboard)
- Styling in components
- Memo & performance optimization
- Error boundaries
- Component organization and exports
- TypeScript in components
- Common mistakes to avoid

#### 3. ARCHITECTURE.md (~500 lines)

**Project structure and file organization**

- Root directory organization
- App directory structure with routing
- Components directory organization
- Types directory (single file pattern)
- Content directory (data-driven pattern)
- Lib directory (utilities)
- Doc directory (documentation)
- Naming conventions overview
- Import paths and aliases
- Data flow architecture (unidirectional)
- Project hierarchy rules
- File size guidelines
- Circular dependency prevention
- Configuration files
- Deployment structure

#### 4. NAMING_CONVENTIONS.md (~400 lines)

**File, folder, variable, and function naming rules**

- File & folder naming (PascalCase, camelCase, UPPERCASE)
- Variable naming (constants, booleans, arrays, temporary vars)
- Function naming (action verbs, handlers, getters, predicates)
- React component naming
- Type & interface naming (interfaces, props, types, enums)
- Common naming patterns
- Absolute rules (no single letters, no abbreviations, no Hungarian notation)
- Real-world examples for each category

#### 5. STYLING_GUIDELINES.md (~400 lines)

**Tailwind CSS and design system standards**

- Tailwind CSS basics (utility classes only, no custom CSS)
- Class organization patterns
- Responsive design (mobile-first, breakpoint reference)
- Dark mode support (mandatory for every element)
- Spacing patterns (Tailwind scale reference)
- Typography (font sizes, weights, letter spacing)
- Color palette (semantic color mapping)
- Component styling (buttons, cards, inputs, navigation)
- Effects & animations (shadows, transitions, hover/focus states)
- Utilities (cn() helper, container queries)
- Common patterns (hero, feature grid, etc.)

#### 6. TESTING_VALIDATION.md (~350 lines)

**Code validation and quality assurance**

- Validation commands (type-check, lint, format, build)
- Pre-commit checklist
- Type checking scenarios with examples
- Linting configuration reference
- Prettier configuration reference
- Testing best practices
- CI/CD setup (GitHub Actions)
- Debugging validation failures
- Validation workflow
- Common errors and fixes

#### 7. GIT_CONVENTIONS.md (~450 lines)

**Git, commit, and collaboration standards**

- Branch naming (feature/, fix/, refactor/, docs/, chore/, test/, perf/)
- Commit message format (conventional commits)
- Commit types (feat, fix, refactor, docs, style, test, chore, perf, ci)
- Commit examples
- Pull request conventions and template
- Commit workflow (feature development, bug fix, hotfix)
- Commit history maintenance (squashing, rebase)
- Code review checklist
- Merge strategy
- Versioning (semantic versioning)
- Git commands reference
- CI/CD integration
- Common mistakes to avoid

### Supporting Documentation

- **`COMPONENT_GUIDE.md`** - API reference for 7 core components
- **`DATA_SCHEMA.md`** - TypeScript interface reference
- **`CONTENT_GUIDE.md`** - How to modify content files

---

## How to Use This Framework

### For Copilot Assistance

**Option 1: Quick Reference**

1. Read the relevant section in `AGENTS.md`
2. Ask Copilot to follow specific standards

**Option 2: Deep Dive**

1. Read the appropriate standard file (e.g., `TYPESCRIPT_STANDARDS.md`)
2. Ask Copilot for specific code patterns
3. Reference examples from the standard file

### For Content Updates

1. Read `AGENTS.md` under "ADD CONTENT" section
2. Or reference `CONTENT_GUIDE.md` for step-by-step instructions
3. Follow patterns in existing content files

### For Code Implementation

1. Identify the type of change (TypeScript? React? Naming? Styling?)
2. Read the relevant standard file
3. Implement following ALL rules in that standard
4. Validate: `npm run validate`
5. Commit: `git commit -m "type(scope): message"`

### For Architecture Questions

1. Read `ARCHITECTURE.md` for structure and organization
2. Read `NAMING_CONVENTIONS.md` for naming questions
3. Reference file examples in the project

---

## Standards Quick Links

### TypeScript Issues

→ [TYPESCRIPT_STANDARDS.md](TYPESCRIPT_STANDARDS.md)

```
Ask Copilot: "I'm getting a TypeScript error. Follow TYPESCRIPT_STANDARDS.md
to fix this issue and ensure all types are explicit."
```

### React/Component Issues

→ [REACT_STANDARDS.md](REACT_STANDARDS.md)

```
Ask Copilot: "Create a React component following REACT_STANDARDS.md.
Include readonly props, explicit JSX.Element return type, and use client
directive if needed."
```

### File/Naming Issues

→ [NAMING_CONVENTIONS.md](NAMING_CONVENTIONS.md)

```
Ask Copilot: "Rename this component following NAMING_CONVENTIONS.md.
Use PascalCase for files and variables."
```

### Styling Issues

→ [STYLING_GUIDELINES.md](STYLING_GUIDELINES.md)

```
Ask Copilot: "Update this component's styles following STYLING_GUIDELINES.md.
Use Tailwind utility classes, include dark mode variants, and ensure
mobile-first responsiveness."
```

### Validation Issues

→ [TESTING_VALIDATION.md](TESTING_VALIDATION.md)

```
Ask Copilot: "Validation is failing. Run npm run type-check to see errors.
Follow TESTING_VALIDATION.md to fix."
```

### Git/Commit Issues

→ [GIT_CONVENTIONS.md](GIT_CONVENTIONS.md)

```
Ask Copilot: "Create a commit message following GIT_CONVENTIONS.md using
conventional commits format."
```

---

## Key Standards Summary

### The Big 5 Rules

1. **TypeScript First**
   - Explicit types everywhere
   - `readonly` on all properties
   - No implicit `any`
   - Strict mode always

2. **React Functional-Only**
   - No class components
   - Props interface with readonly
   - JSX.Element return types
   - Use client directive when needed

3. **Tailwind Styling**
   - Utility classes only
   - Dark mode on every element
   - Mobile-first responsive design
   - No custom CSS

4. **Data-Driven Architecture**
   - Content files independent
   - Components don't modify data
   - Unidirectional data flow
   - Separation of concerns

5. **Strict Validation**
   - `npm run validate` must pass
   - All checks required before commit
   - No exceptions for any project
   - Production builds must succeed

---

## Document Statistics

| Document                | Lines      | Topics         |
| ----------------------- | ---------- | -------------- |
| TYPESCRIPT_STANDARDS.md | 450+       | 18 topics      |
| REACT_STANDARDS.md      | 500+       | 20 topics      |
| ARCHITECTURE.md         | 500+       | 16 topics      |
| NAMING_CONVENTIONS.md   | 400+       | 15 topics      |
| STYLING_GUIDELINES.md   | 400+       | 14 topics      |
| TESTING_VALIDATION.md   | 350+       | 12 topics      |
| GIT_CONVENTIONS.md      | 450+       | 14 topics      |
| **TOTAL**               | **3,050+** | **109 topics** |

---

## Integration Points

### With Copilot

- Reference specific standard files in prompts
- Request code following specific standard sections
- Ask Copilot to validate against standards

### With Development Workflow

- Pre-commit validation (npm run validate)
- CI/CD checks (GitHub Actions)
- Code review references
- Documentation for onboarding

### With Project Structure

- Standards linked in AGENTS.md
- Examples in each standard file
- Real code examples from project
- Reference to actual project files

---

## Maintenance

### Updating Standards

If project requirements change:

1. Update the relevant standard file in `/doc`
2. Update cross-references in other files
3. Update examples to match new standards
4. Update AGENTS.md quick reference if needed
5. Commit with message: `docs(standards): update [standard-name]`

### Keeping Standards Current

- Review standards quarterly
- Update based on TypeScript/React/Next.js releases
- Incorporate team learnings
- Document new patterns discovered
- Keep examples up-to-date

---

## File Checklist

✅ `/doc/TYPESCRIPT_STANDARDS.md` - Complete
✅ `/doc/REACT_STANDARDS.md` - Complete
✅ `/doc/ARCHITECTURE.md` - Complete
✅ `/doc/NAMING_CONVENTIONS.md` - Complete
✅ `/doc/STYLING_GUIDELINES.md` - Complete
✅ `/doc/TESTING_VALIDATION.md` - Complete
✅ `/doc/GIT_CONVENTIONS.md` - Complete
✅ `/AGENTS.md` - Master coordinator (updated)
✅ `/doc/COMPONENT_GUIDE.md` - Component reference
✅ `/doc/DATA_SCHEMA.md` - Type reference
✅ `/doc/CONTENT_GUIDE.md` - Content update guide

---

## Next Steps

1. **Review** - Read through key standards that apply to your work
2. **Bookmark** - Keep shortcuts to relevant standards in IDE
3. **Reference** - Point Copilot to specific standard sections
4. **Validate** - Run `npm run validate` before every commit
5. **Maintain** - Update standards as project evolves

---

**Framework Created:** April 10, 2026  
**Total Coverage:** 7 core standards + 3 supporting guides  
**Total Documentation:** 3,050+ lines across 10 files  
**Audience:** LLMs (Copilot, Claude, ChatGPT) and developers
