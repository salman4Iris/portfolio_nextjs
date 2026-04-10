# GIT & COMMIT CONVENTIONS

## Overview

This project follows strict Git conventions for commits, branches, and code review. Consistent naming and message formats make the commit history clean and maintainable.

---

## BRANCH NAMING

### Branch Structure

```
main                           # Production-ready code
  ├── feature/feature-name     # New feature development
  ├── fix/bug-name             # Bug fixes
  ├── refactor/component-name  # Code refactoring
  ├── docs/documentation       # Documentation updates
  └── chore/task-name          # Maintenance tasks
```

### Branch Naming Rules

**Use lowercase with hyphens - no spaces or special chars:**

```bash
✅ CORRECT
git checkout -b feature/add-project-filter
git checkout -b fix/header-responsive
git checkout -b refactor/component-structure
git checkout -b docs/update-readme
git checkout -b chore/upgrade-dependencies

❌ WRONG
git checkout -b Feature/AddProjectFilter        (use lowercase)
git checkout -b fix_header_responsive           (use hyphens)
git checkout -b bugfix/header responsive        (no spaces)
git checkout -b fix/bug that there is           (multiple words)
git checkout -b update dependencies             (missing prefix)
```

### Branch Types

| Prefix      | Purpose            | Example                           |
| ----------- | ------------------ | --------------------------------- |
| `feature/`  | New feature        | `feature/add-testimonials-page`   |
| `fix/`      | Bug fix            | `fix/dark-mode-toggle`            |
| `refactor/` | Code restructuring | `refactor/component-architecture` |
| `docs/`     | Documentation      | `docs/update-install-guide`       |
| `chore/`    | Maintenance, deps  | `chore/update-tailwind`           |
| `test/`     | Test coverage      | `test/add-component-tests`        |
| `perf/`     | Performance        | `perf/optimize-images`            |

---

## COMMIT CONVENTIONS

### Commit Message Format

**Use conventional commits format:**

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Commit Types

```
feat:     A new feature
fix:      A bug fix
refactor: Code refactoring
docs:     Documentation changes
style:    Formatting, missing semicolons, etc.
test:     Adding/updating tests
chore:    Build process, dependencies, etc.
perf:     Performance improvements
ci:       CI/CD configuration changes
```

### Commit Subject

**Short, imperative, present tense - no period:**

```bash
✅ CORRECT
git commit -m "feat(projects): add project filtering by technology"
git commit -m "fix(header): resolve responsive design issue"
git commit -m "docs(setup): update installation instructions"
git commit -m "refactor(types): consolidate type definitions"
git commit -m "test(components): add ProjectCard tests"

❌ WRONG
git commit -m "add project filter"                       (no type)
git commit -m "feat: Added project filtering"           (past tense)
git commit -m "feat(projects): add project filtering."  (period)
git commit -m "feat: add project filtering by technology (WIP)" (WIP suffix)
git commit -m "feature: multiple changes"               (wrong type)
```

### Commit Scope

**Include the area of change in parentheses:**

```
feat(Header):       Changes to Header component
feat(projects):     Changes to projects page
feat(types):        Changes to type definitions
feat(content):      Changes to data files
feat(styling):      Changes to Tailwind styles
feat(documentation): Documentation changes
```

### Commit Body

**Detailed explanation when needed (optional for small commits):**

```bash
git commit -m "feat(projects): add technology filtering

- Add filter buttons for each technology
- Implement selected technology state
- Update project grid to show filtered results
- Add 'Clear filters' button

Closes #123"
```

### Commit Footer

**Reference issues or breaking changes:**

```bash
# Link to issue
Closes #42

# Reference multiple issues
Fixes #24
Closes #123

# Breaking change documentation
BREAKING CHANGE: Changed Project interface structure
Migration: Update imports from 'content/projects' to new location
```

---

## COMPLETE COMMIT EXAMPLES

### Example 1: Feature Commit

```bash
git commit -m "feat(contact): add email form validation

- Add email format validation using regex
- Add required field checks
- Show error messages for invalid inputs
- Disable submit button while invalid

Closes #89"
```

### Example 2: Bug Fix Commit

```bash
git commit -m "fix(header): prevent menu overlap on mobile

- Fix z-index stacking context issue
- Adjust mobile menu positioning
- Add click-outside handler to close menu

Fixes #76"
```

### Example 3: Refactor Commit

```bash
git commit -m "refactor(components): extract common button styles

- Create reusable button utility function
- Update all button components to use utility
- Remove duplicate className definitions
- Reduce code duplication by 40 lines"
```

### Example 4: Documentation Commit

```bash
git commit -m "docs(standards): add TypeScript standards guide

- Document readonly property requirements
- Add examples for generic functions
- Include best practices section
- Add references to TypeScript docs"
```

### Example 5: Chore Commit

```bash
git commit -m "chore(deps): update Tailwind CSS to v4.1.0

- Install latest Tailwind version
- Update tailwind configuration syntax
- Verify all tests pass with new version"
```

---

## PULL REQUEST CONVENTIONS

### PR Title Format

**Follow same format as commit:**

```
feat(projects): add project filtering by technology
fix(header): resolve responsive design issue on mobile
refactor(types): consolidate type definitions into single file
```

### PR Description Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] New feature
- [ ] Bug fix
- [ ] Refactoring
- [ ] Documentation update
- [ ] Other

## Changes Made

- List specific changes
- Another change
- And another

## Testing

- [ ] Tested on mobile (375px)
- [ ] Tested on tablet (768px)
- [ ] Tested on desktop (1920px)
- [ ] Tested dark mode
- [ ] All validation passes (npm run validate)

## Screenshots (if applicable)

Before/After screenshots

## Related Issues

Closes #123
Fixes #456

## Checklist

- [ ] Code follows project standards
- [ ] ESLint passes (npm run lint)
- [ ] TypeScript passes (npm run type-check)
- [ ] Formatting is correct (npm run format:check)
- [ ] Build succeeds (npm run build)
- [ ] No new warnings or errors
```

---

## COMMIT WORKFLOW

### Feature Development

```bash
# 1. Create feature branch
git checkout -b feature/add-testimonials

# 2. Make changes (multiple commits OK during development)
git add file.tsx
git commit -m "feat(testimonials): add testimonial data structure"

git add component.tsx
git commit -m "feat(testimonials): create TestimonialCard component"

git add page.tsx
git commit -m "feat(testimonials): add testimonials page with grid"

# 3. Before pushing, validate
npm run validate

# 4. Push feature branch
git push origin feature/add-testimonials

# 5. Create pull request on GitHub
# - Use PR template
# - Run checks automatically
# - Merge after approval
```

### Bug Fix Workflow

```bash
# 1. Create fix branch
git checkout -b fix/dark-mode-toggle

# 2. Make minimal changes
git add component.tsx
git commit -m "fix(header): resolve dark mode toggle bug

- Fix useState hook not updating theme
- Add useEffect to sync theme preference
- Test dark mode toggle after fix"

# 3. Validate
npm run validate

# 4. Push and create PR
git push origin fix/dark-mode-toggle
```

### Hotfix Workflow (Production Issue)

```bash
# Create hotfix branch from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug-fix

# Make critical fix only
git commit -m "fix(critical): repair production issue"

# Merge to main and develop
git checkout main
git merge hotfix/critical-bug-fix
git tag v1.0.1
git push origin main v1.0.1

# Clean up
git branch -d hotfix/critical-bug-fix
```

---

## COMMIT HISTORY MAINTENANCE

### Before Pushing (Squash Related Commits)

```bash
# If you have multiple WIP commits, squash them
git rebase -i HEAD~3  # Squash last 3 commits

# OR keep commits if they're logical steps
git log --oneline
# Each commit should be independent and logical
```

### Interactive Rebase

```bash
# Clean up recent commits
git rebase -i HEAD~5

# In the editor:
pick abc1234 feat: add feature part 1
squash def5678 feat: add feature part 2 (WIP)
squash ghi9012 feat: add tests for feature
pick jkl3456 docs: update readme

# Result: 2 commits instead of 4
```

### Force Push (Only on Feature Branches!)

**NEVER force push on main:**

```bash
# ✅ OK on feature branches during development
git push origin feature/name --force-with-lease

# ❌ NEVER on main
git push origin main --force  # DON'T DO THIS!
```

---

## REVIEWING CODE

### Review Checklist

Before approving a PR, verify:

- [ ] Type checking passes: `npm run type-check`
- [ ] Linting passes: `npm run lint`
- [ ] Formatting passes: `npm run format:check`
- [ ] Build succeeds: `npm run build`
- [ ] Code follows naming conventions
- [ ] Code follows architecture patterns
- [ ] Tests added/updated if applicable
- [ ] Documentation updated if needed
- [ ] No console warnings or errors

### Review Comments

```
// ❌ Point out issues
This should use const instead of let

// ✅ Suggest solutions
Consider extracting this to a utility function

// ✅ Approve
Looks good! Can be merged after addressing the above.
```

---

## MERGE STRATEGY

### Linear History (Preferred)

```bash
# Rebase and fast-forward merge
git checkout main
git pull origin main
git merge --ff-only feature/name
git push origin main

# OR use squash merge for feature branches
git merge --squash feature/name
git commit -m "feat: description"
git push origin main
```

### Commit Information

After merge, the Git log shows:

```
commit abc123456 (HEAD -> main)
Author: Your Name
Date:   Thu Apr 10 15:30:00 2026

    feat(projects): add project filtering

    - Add filter buttons
    - Update grid display
    - Add clear filters button

    Closes #123
```

---

## VERSIONING

### Semantic Versioning

```
MAJOR.MINOR.PATCH
v1.0.0

MAJOR: Breaking changes
MINOR: New features (backward compatible)
PATCH: Bug fixes (backward compatible)
```

### Version Tags

```bash
# Create version tag
git tag v1.0.0

# Push tags
git push origin --tags

# View tags
git tag -l

# Delete tag (if needed)
git tag -d v1.0.0
git push origin --delete v1.0.0
```

---

## USEFUL GIT COMMANDS

### Viewing History

```bash
# Show recent commits with one line each
git log --oneline -10

# Show commits with stats
git log --stat

# Show commit graph
git log --graph --oneline --all

# Search commits by message
git log --grep="feat(projects)"

# Show blame for specific file
git blame src/components/Header.tsx
```

### Undoing Changes

```bash
# Undo last unpushed commit (keep changes)
git reset --soft HEAD~1

# Undo last unpushed commit (discard changes)
git reset --hard HEAD~1

# Undo changes to specific file
git checkout HEAD -- src/file.tsx

# Stash changes temporarily
git stash
git stash pop  # Restore later

# Revert committed change (creates new commit)
git revert abc123456
```

### Syncing with main

```bash
# Before starting feature work
git checkout main
git pull origin main

# During feature development
git fetch origin main
git rebase origin/main

# After main is updated
git rebase -i origin/main
```

---

## CI/CD INTEGRATION

### Pre-Push Validation

Add to `.git/hooks/pre-push`:

```bash
#!/bin/bash

echo "Running pre-push validation..."
npm run validate

if [ $? -ne 0 ]; then
  echo "❌ Validation failed. Push cancelled."
  echo "Fix errors with: npm run lint:fix && npm run format"
  exit 1
fi

echo "✅ All checks passed!"
exit 0
```

Make executable:

```bash
chmod +x .git/hooks/pre-push
```

---

## COMMON MISTAKES TO AVOID

### ❌ DO NOT:

```bash
# Don't commit with no message
git commit -m ""

# Don't push directly to main
git push origin feature-branch main  # Wrong!

# Don't use vague messages
git commit -m "fix bug"
git commit -m "update"
git commit -m "WIP"

# Don't mix multiple concerns in one commit
git commit -m "feat: add filter AND fix header AND update docs"

# Don't force push to main
git push origin main --force

# Don't commit debug code
git commit -m "feat: add feature" # Contains console.log()
git commit -m "feat: add feature" # Contains debugger statements

# Don't commit node_modules or build artifacts
git add node_modules/  # NO!
git add .next/        # NO!
```

### ✅ DO:

```bash
# Use descriptive messages
git commit -m "feat(contact): add email validation to contact form"

# One concern per commit
git commit -m "feat(filter): add technology filter to projects page"

# Create feature branch for new work
git checkout -b feature/name

# Validate before pushing
npm run validate && git push

# Use PR for code review
# Never push directly to main

# Keep commits clean
git commit -m "fix: specific issue"
```

---

## REFERENCES

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Semantic Versioning](https://semver.org/)
