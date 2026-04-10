# STYLING GUIDELINES

## Overview

This project uses Tailwind CSS v4 for styling. All styles must be applied through Tailwind utility classes. Custom CSS is avoided. Dark mode support is mandatory for every component.

---

## TAILWIND CSS BASICS

### Utility Classes Only

**All styles must use Tailwind classes - no custom CSS in components:**

```typescript
// ✅ CORRECT
<div className="flex items-center justify-between gap-4 px-6 py-3 rounded-lg bg-white dark:bg-gray-900">
  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Title</h1>
</div>

// ❌ WRONG - Don't use inline styles
<div style={{ display: 'flex', padding: '12px', borderRadius: '8px' }}>
  <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Title</h1>
</div>

// ❌ WRONG - Don't create custom CSS modules
// styles.module.css
.container { display: flex; padding: 12px; }
```

### Class Organization

Always organize classes in logical groups:

```typescript
// ✅ CORRECT ORDER
<div className="
  // Layout (flex, grid, position, size)
  flex items-center justify-between
  // Sizing
  w-full h-screen
  // Spacing (padding, margin)
  px-4 py-2
  // Colors (background, text, border)
  bg-white text-gray-900
  // Borders and effects
  border border-gray-200 rounded-lg
  // Hover and transitions
  hover:shadow-lg transition-shadow
  // Dark mode variants
  dark:bg-gray-900 dark:text-white dark:border-gray-700
">
  Content
</div>

// ❌ WRONG - Random order
<div className="py-2 bg-white text-gray-900 flex px-4 items-center rounded-lg dark:bg-gray-900">
```

---

## RESPONSIVE DESIGN

### Mobile-First Approach

**Default to mobile styles, add larger breakpoints:**

```typescript
// ✅ CORRECT - Mobile first
<div className="
  // Mobile (default, no prefix needed)
  grid grid-cols-1 gap-4
  // Tablet
  md:grid-cols-2
  // Desktop
  lg:grid-cols-3
  // Large desktop
  xl:grid-cols-4
">
  {items.map((item) => (
    <div key={item.id}>{item.name}</div>
  ))}
</div>

// ❌ WRONG - Desktop first
<div className="grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
```

### Breakpoint Reference

| Prefix | Width   | Use Case            |
| ------ | ------- | ------------------- |
| (none) | 0px+    | Mobile (default)    |
| `sm:`  | 640px+  | Small tablets       |
| `md:`  | 768px+  | Tablets             |
| `lg:`  | 1024px+ | Desktop             |
| `xl:`  | 1280px+ | Large desktop       |
| `2xl:` | 1536px+ | Extra large desktop |

### Responsive Examples

```typescript
// ✅ CORRECT - Navigation
<nav className="
  flex flex-col md:flex-row gap-4
  px-4 md:px-8
  py-2 md:py-4
  text-sm md:text-base
">

// ✅ CORRECT - Grid
<div className="
  grid gap-4 md:gap-6 lg:gap-8
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
">

// ✅ CORRECT - Text sizing
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
```

---

## DARK MODE SUPPORT

### Mandatory Dark Variants

**Every visual element must support dark mode:**

```typescript
// ✅ CORRECT - All elements have dark: variants
<div className="bg-white dark:bg-gray-900">
  <h1 className="text-gray-900 dark:text-white">Title</h1>
  <p className="text-gray-600 dark:text-gray-400">Description</p>
  <button className="
    bg-blue-600 dark:bg-blue-700
    text-white
    hover:bg-blue-700 dark:hover:bg-blue-800
  ">
    Button
  </button>
</div>

// ❌ WRONG - Missing dark variants
<div className="bg-white">
  <h1 className="text-gray-900">Title</h1>
  <button className="bg-blue-600">Button</button>
</div>
```

### Color Scheme

**Use semantic color mapping:**

```typescript
// Light mode (default)
- Background: bg-white
- Text: text-gray-900 (primary), text-gray-600 (secondary), text-gray-400 (tertiary)
- Borders: border-gray-200
- Hover: opacity-90, scale-105

// Dark mode (with dark: prefix)
- Background: dark:bg-gray-900
- Text: dark:text-white (primary), dark:text-gray-400 (secondary), dark:text-gray-500 (tertiary)
- Borders: dark:border-gray-700
- Hover: dark:opacity-80, dark:scale-105
```

### Dark Mode Colors

```typescript
// ✅ CORRECT - Common patterns
interface ColorVariants {
  light: {
    bg: string; // bg-white
    text: string; // text-gray-900
    secondary: string; // text-gray-600
    border: string; // border-gray-200
  };
  dark: string; // dark:bg-gray-900 (suffix format)
}

// Examples
const colors = {
  // Card backgrounds
  card: 'bg-white dark:bg-gray-800',

  // Text primary
  textPrimary: 'text-gray-900 dark:text-white',

  // Text secondary
  textSecondary: 'text-gray-600 dark:text-gray-400',

  // Borders
  border: 'border-gray-200 dark:border-gray-700',

  // Hover states
  hoverBg: 'hover:bg-gray-50 dark:hover:bg-gray-800',

  // Interactive
  button: 'bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800',
};
```

---

## SPACING

### Tailwind Spacing Scale

```typescript
// Padding
px-0 px-1 px-2 px-3 px-4 px-6 px-8 px-12 px-16
py-0 py-1 py-2 py-3 py-4 py-6 py-8 py-12 py-16

// Margin
mx-auto mx-0 mx-1 mx-2 mx-3 mx-4 mx-6 mx-8 mx-12
my-0 my-1 my-2 my-3 my-4 my-6 my-8 my-12 my-16

// Gap (for flex/grid)
gap-1 gap-2 gap-3 gap-4 gap-6 gap-8 gap-12
```

### Common Spacing Patterns

```typescript
// ✅ CORRECT - Container padding
<div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

// ✅ CORRECT - Section spacing
<section className="py-12 md:py-16 lg:py-20">

// ✅ CORRECT - Component gaps
<div className="flex gap-4">
<div className="grid gap-6 md:gap-8">

// ✅ CORRECT - Margin between elements
<div className="mb-4 md:mb-6">
  <h1>Title</h1>
  <p className="mt-2 text-gray-600">Description</p>
</div>
```

---

## TYPOGRAPHY

### Font Sizes

```typescript
// ✅ CORRECT - Semantic size usage
const fontSizes = {
  xs: 'text-xs',         // 12px
  sm: 'text-sm',         // 14px
  base: 'text-base',     // 16px
  lg: 'text-lg',         // 18px
  xl: 'text-xl',         // 20px
  '2xl': 'text-2xl',     // 24px
  '3xl': 'text-3xl',     // 30px
  '4xl': 'text-4xl',     // 36px
};

// Usage
<h1 className="text-3xl md:text-4xl font-bold">Page Title</h1>
<p className="text-base md:text-lg">Body text</p>
<small className="text-xs md:text-sm">Small text</small>
```

### Font Weights

```typescript
// ✅ CORRECT - Use semantic weights
const weights = {
  thin: 'font-thin',          // 100
  extralight: 'font-extralight', // 200
  light: 'font-light',        // 300
  normal: 'font-normal',      // 400
  medium: 'font-medium',      // 500
  semibold: 'font-semibold',  // 600
  bold: 'font-bold',          // 700
  extrabold: 'font-extrabold', // 800
  black: 'font-black',        // 900
};

// Usage
<h1 className="text-4xl font-bold">Heading</h1>
<p className="text-base font-normal">Regular text</p>
<strong className="font-semibold">Important text</strong>
```

### Letter Spacing & Line Height

```typescript
// ✅ CORRECT - Improve readability
<h1 className="text-4xl font-bold tracking-tight leading-tight">
  Heading with tight letter spacing
</h1>

<p className="text-base leading-relaxed">
  Paragraph with relaxed line height for better readability
</p>

// Usage patterns
const typography = {
  heading: 'text-3xl font-bold tracking-tight leading-tight',
  subheading: 'text-2xl font-semibold leading-snug',
  body: 'text-base leading-relaxed',
  small: 'text-sm leading-normal',
};
```

---

## COLORS

### Color Palette

```typescript
// ✅ PROJECT COLORS
const colors = {
  // Primary
  primary: 'bg-blue-600 dark:bg-blue-700',
  primaryHover: 'hover:bg-blue-700 dark:hover:bg-blue-800',
  primaryText: 'text-blue-600 dark:text-blue-400',

  // Secondary/Accent
  accent: 'bg-purple-600 dark:bg-purple-700',
  accentHover: 'hover:bg-purple-700 dark:hover:bg-purple-800',
  accentText: 'text-purple-600 dark:text-purple-400',

  // Neutral
  background: 'bg-white dark:bg-gray-900',
  surface: 'bg-gray-50 dark:bg-gray-800',

  // Text
  textPrimary: 'text-gray-900 dark:text-white',
  textSecondary: 'text-gray-600 dark:text-gray-400',
  textTertiary: 'text-gray-500 dark:text-gray-500',

  // Borders
  border: 'border-gray-200 dark:border-gray-700',

  // Semantic
  success: 'bg-green-600 dark:bg-green-700 text-white',
  warning: 'bg-yellow-600 dark:bg-yellow-700 text-white',
  error: 'bg-red-600 dark:bg-red-700 text-white',
  info: 'bg-blue-600 dark:bg-blue-700 text-white',
};

// Usage
<button className={colors.primary}>Click me</button>
<div className={colors.background}>
  <h1 className={colors.textPrimary}>Heading</h1>
  <p className={colors.textSecondary}>Secondary text</p>
</div>
```

### Gradient Usage

```typescript
// ✅ CORRECT - Gradient backgrounds
<div className="bg-gradient-to-r from-blue-600 to-purple-600">
  Gradient background
</div>

// Common gradient patterns
const gradients = {
  heroGradient: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600',
  buttonGradient: 'bg-gradient-to-r from-blue-600 to-purple-600',
  accentGradient: 'bg-gradient-to-br from-purple-600 to-pink-600',
};
```

---

## COMPONENTS STYLING

### Buttons

```typescript
// ✅ CORRECT - Button styles
<button className="
  px-4 py-2
  bg-blue-600 dark:bg-blue-700
  text-white
  rounded-lg
  font-medium
  transition-all duration-200
  hover:bg-blue-700 dark:hover:bg-blue-800
  active:scale-95
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Click me
</button>

// Variant patterns
const buttonVariants = {
  primary: 'bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white',
  secondary: 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white',
  ghost: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-900',
};
```

### Cards

```typescript
// ✅ CORRECT - Card styles
<div className="
  bg-white dark:bg-gray-800
  rounded-lg
  border border-gray-200 dark:border-gray-700
  p-6
  shadow-sm
  hover:shadow-md
  transition-shadow
">
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    Card Title
  </h3>
  <p className="text-gray-600 dark:text-gray-400 mt-2">
    Card description
  </p>
</div>
```

### Inputs & Forms

```typescript
// ✅ CORRECT - Input styles
<input
  type="text"
  placeholder="Enter text"
  className="
    w-full
    px-3 py-2
    border border-gray-300 dark:border-gray-600
    rounded-lg
    bg-white dark:bg-gray-900
    text-gray-900 dark:text-white
    placeholder:text-gray-500 dark:placeholder:text-gray-400
    focus:outline-none
    focus:border-blue-500 dark:focus:border-blue-400
    focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
    transition-colors
  "
/>
```

### Navigation

```typescript
// ✅ CORRECT - Nav styles
<nav className="
  bg-white dark:bg-gray-900
  border-b border-gray-200 dark:border-gray-800
  sticky top-0 z-50
  px-4 md:px-8
  py-4
">
  <div className="flex items-center justify-between">
    <a href="/" className="text-2xl font-bold text-blue-600">
      Logo
    </a>
    <ul className="hidden md:flex gap-8">
      <li>
        <a href="/about" className="
          text-gray-600 dark:text-gray-400
          hover:text-blue-600 dark:hover:text-blue-400
          transition-colors
        ">
          About
        </a>
      </li>
    </ul>
  </div>
</nav>
```

---

## EFFECTS & ANIMATIONS

### Shadows

```typescript
// ✅ CORRECT - Semantic shadow usage
const shadows = {
  sm: 'shadow-sm',           // Subtle
  base: 'shadow',            // Default
  md: 'shadow-md',           // Medium
  lg: 'shadow-lg',           // Large
  xl: 'shadow-xl',           // Extra large
};

// Usage
<div className="shadow-lg hover:shadow-xl transition-shadow">
  Card with shadow effect
</div>
```

### Transitions & Animations

```typescript
// ✅ CORRECT - Smooth transitions
<button className="
  bg-blue-600
  hover:bg-blue-700
  transition-colors duration-200
  transform hover:scale-105
  transition-transform
">
  Interactive button
</button>

// Common patterns
const transitions = {
  color: 'transition-colors duration-200',
  all: 'transition-all duration-200',
  opacity: 'transition-opacity duration-200',
  transform: 'transition-transform duration-200',
  shadowHover: 'hover:shadow-lg transition-shadow',
  scaleHover: 'hover:scale-105 transition-transform',
};
```

### Hover & Focus States

```typescript
// ✅ CORRECT - Interactive states
<button className="
  px-4 py-2
  bg-blue-600
  text-white
  rounded-lg

  // Hover state
  hover:bg-blue-700
  hover:shadow-lg
  hover:scale-105

  // Focus state
  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
  focus:ring-offset-2
  dark:focus:ring-offset-gray-900

  // Active state
  active:scale-95

  // Disabled state
  disabled:opacity-50
  disabled:cursor-not-allowed

  // Transitions
  transition-all duration-200
">
  Button
</button>
```

---

## UTILITIES

### Using the `cn()` Helper

```typescript
import { cn } from '@/lib/utils';

// ✅ CORRECT - Conditional classes
const handleButtonClass = (isActive: boolean, isDisabled: boolean): string => {
  return cn(
    'px-4 py-2 rounded-lg font-medium transition-colors',
    isActive && 'bg-blue-600 text-white',
    !isActive && 'bg-gray-200 text-gray-900',
    isDisabled && 'opacity-50 cursor-not-allowed',
  );
};

// Usage in component
<button className={handleButtonClass(isActive, isDisabled)}>
  Click me
</button>
```

### Container Query Support

```typescript
// ✅ CORRECT - Future-proof responsive design
<div className="@container">
  <div className="
    grid grid-cols-1
    @md:grid-cols-2
    @lg:grid-cols-3
  ">
    Items
  </div>
</div>
```

---

## COMMON PATTERNS

### Hero Section

```typescript
<section className="
  bg-gradient-to-r from-blue-600 to-purple-600
  dark:from-blue-900 dark:to-purple-900
  text-white
  py-16 md:py-20 lg:py-24
  px-4 md:px-8
">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
      Welcome to Portfolio
    </h1>
    <p className="text-lg md:text-xl opacity-90 mb-8">
      Building exceptional digital experiences
    </p>
  </div>
</section>
```

### Feature Grid

```typescript
<div className="
  grid gap-6 md:gap-8
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
  {features.map((feature) => (
    <div
      key={feature.id}
      className="
        bg-white dark:bg-gray-800
        rounded-lg
        p-6
        border border-gray-200 dark:border-gray-700
        hover:shadow-lg
        transition-shadow
      "
    >
      <h3 className="
        text-lg font-semibold
        text-gray-900 dark:text-white
        mb-2
      ">
        {feature.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {feature.description}
      </p>
    </div>
  ))}
</div>
```

---

## REFERENCES

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
