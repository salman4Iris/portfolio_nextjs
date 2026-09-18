/**
 * BLOG POSTS DATA
 * Articles and case studies
 * ES6+ strict TypeScript with readonly properties
 */

import type { BlogPost } from '@/types';

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    id: 'blog-agentic-ui-orchestration',
    title: 'Designing Agentic UIs for Observable AI Workflows',
    slug: 'designing-agentic-ui-observable-ai-workflows',
    excerpt:
      'A practical look at building visual interfaces for configuring, orchestrating, and monitoring autonomous AI agents.',
    content:
      'Agentic applications need interfaces that make complex execution understandable. A node-based canvas can expose agent inputs, tool calls, dependencies, execution state, and outputs without forcing users to inspect backend logs. This article explores the frontend concerns behind an AgentStudio-style experience: modeling workflow state, rendering graph relationships, handling asynchronous execution, and keeping the UI observable as Python and LLM services evolve. The goal is not to hide complexity, but to give users a clear control surface for designing and monitoring autonomous workflows.',
    publishedDate: '2026-09-10',
    coverImage: undefined,
    tags: ['AI', 'Agentic UI', 'React', 'React Flow', 'Frontend Architecture'],
    author: 'Salman Khan',
    readingTime: 8,
    featured: true,
  },
  {
    id: 'blog-streaming-conversational-ui',
    title: 'Building Streaming Conversational Interfaces with Next.js',
    slug: 'building-streaming-conversational-interfaces-nextjs',
    excerpt:
      'Patterns for managing streamed responses, UI state, and data-rich answers in AI-powered chat applications.',
    content:
      'A conversational UI is more than a message list. When a backend streams partial responses, the frontend must manage incremental updates, loading states, errors, structured data, and the user’s sense of progress. This guide covers a practical approach with Next.js and React: isolate conversation state, render partial payloads safely, preserve useful context, and make database-driven answers understandable to non-technical users. These patterns are useful for chatbot products such as HiSet, where natural-language questions become query-backed results.',
    publishedDate: '2026-08-30',
    coverImage: undefined,
    tags: ['Next.js', 'React', 'AI', 'Chatbots', 'Streaming UI'],
    author: 'Salman Khan',
    readingTime: 9,
    featured: true,
  },
  {
    id: 'blog-high-density-financial-dashboards',
    title: 'Rendering High-Density Financial Dashboards with AG Grid',
    slug: 'rendering-high-density-financial-dashboards-ag-grid',
    excerpt:
      'Engineering considerations for responsive trade tables, compliance workflows, and high-frequency financial data.',
    content:
      'Financial applications often combine large datasets with workflows that demand accuracy, speed, and traceability. High-density dashboards need careful column design, predictable state transitions, efficient rendering, and clear feedback for validation and exceptions. This case study discusses frontend techniques used for regulatory execution workflows, including AG Grid configuration, rendering performance, role-aware actions, audit-friendly interactions, and the relationship between real-time updates and user confidence.',
    publishedDate: '2026-07-15',
    coverImage: undefined,
    tags: ['React', 'AG Grid', 'FinTech', 'Performance', 'Enterprise UI'],
    author: 'Salman Khan',
    readingTime: 10,
    featured: true,
  },
  {
    id: 'blog-frontend-modernization-playbook',
    title: 'A Frontend Modernization Playbook: Angular to React and Next.js',
    slug: 'frontend-modernization-angular-react-nextjs',
    excerpt:
      'A migration strategy for moving a production e-commerce platform toward React, Next.js, SSR, and better performance.',
    content:
      'Successful frontend modernization is a product and delivery problem as much as a code migration. Teams need a staged plan for component boundaries, routing, server-side rendering, analytics, testing, checkout stability, and developer onboarding. Drawing on an Angular Universal to React and Next.js migration, this playbook covers how to preserve business continuity while improving SEO, caching, mobile performance, and long-term maintainability.',
    publishedDate: '2026-06-20',
    updatedDate: '2026-07-01',
    coverImage: undefined,
    tags: ['Angular', 'React', 'Next.js', 'Migration', 'E-commerce'],
    author: 'Salman Khan',
    readingTime: 12,
    featured: true,
  },
  {
    id: 'blog-1',
    title: 'Building Scalable React Applications with Redux',
    slug: 'building-scalable-react-redux',
    excerpt:
      'Learn how to structure Redux state management for large-scale applications with examples from production systems.',
    content:
      'Redux is a powerful state management library for React applications. In this article, we explore best practices for organizing your Redux store, handling complex state updates, and optimizing performance. We discuss normalized state shape, selector patterns, and middleware usage with real-world examples from the REMS trading platform.',
    publishedDate: '2024-06-15',
    coverImage: undefined,
    tags: ['React', 'Redux', 'State Management', 'JavaScript'],
    author: 'Salman Khan',
    readingTime: 8,
    featured: true,
  },
  {
    id: 'blog-2',
    title: 'Next.js Server Components and Performance Optimization',
    slug: 'nextjs-server-components-performance',
    excerpt:
      'Deep dive into Next.js Server Components and how they improve application performance and reduce client-side JavaScript.',
    content:
      'Next.js 13+ introduced Server Components, a paradigm shift in how we build React applications. This article explores the benefits of Server Components, how to use them effectively, and optimization strategies. We cover streaming, Suspense boundaries, and practical examples from e-commerce platforms.',
    publishedDate: '2024-05-20',
    coverImage: undefined,
    tags: ['Next.js', 'Performance', 'Server Components', 'React'],
    author: 'Salman Khan',
    readingTime: 10,
    featured: true,
  },
  {
    id: 'blog-3',
    title: 'Migrating from Angular to React: A Practical Guide',
    slug: 'angular-to-react-migration',
    excerpt:
      'Strategic approaches and lessons learned from migrating large-scale Angular applications to React.',
    content:
      'Migrating from Angular to React is a significant undertaking. This article shares our experience migrating the MyGlamm platform, including planning strategies, component conversion patterns, testing approaches, and team training. We discuss costs, timelines, and key considerations for similar migrations.',
    publishedDate: '2024-04-10',
    updatedDate: '2024-05-01',
    coverImage: undefined,
    tags: ['Angular', 'React', 'Migration', 'Web Development'],
    author: 'Salman Khan',
    readingTime: 12,
    featured: true,
  },
  {
    id: 'blog-4',
    title: 'TypeScript Best Practices for Large Projects',
    slug: 'typescript-best-practices',
    excerpt:
      'Implementing strict TypeScript configurations and patterns for maintainable and scalable applications.',
    content:
      'TypeScript provides powerful type safety features. This guide covers strict configuration settings, utility types, generics patterns, and error handling. We explore real scenarios from financial trading platforms where type safety prevented critical bugs.',
    publishedDate: '2024-03-15',
    coverImage: undefined,
    tags: ['TypeScript', 'Best Practices', 'Development'],
    author: 'Salman Khan',
    readingTime: 9,
    featured: false,
  },
];

/**
 * GET BLOG POST BY ID
 * Retrieves a blog post by its ID
 * @param id - Blog post identifier
 * @returns Blog post or undefined if not found
 */
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return BLOG_POSTS.find((post: BlogPost): boolean => post.id === id);
};

/**
 * GET BLOG POST BY SLUG
 * Retrieves a blog post by its slug
 * @param slug - URL-friendly slug
 * @returns Blog post or undefined if not found
 */
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find((post: BlogPost): boolean => post.slug === slug);
};

/**
 * GET FEATURED BLOG POSTS
 * Returns only featured blog posts
 * @returns Array of featured posts sorted by date
 */
export const getFeaturedBlogPosts = (): readonly BlogPost[] => {
  return BLOG_POSTS.filter((post: BlogPost): boolean => post.featured).sort(
    (a: BlogPost, b: BlogPost): number =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
};

/**
 * GET ALL BLOG POSTS SORTED
 * Returns all blog posts sorted by date (newest first)
 * @returns Sorted blog posts array
 */
export const getAllBlogPostsSorted = (): readonly BlogPost[] => {
  const sorted: BlogPost[] = [...BLOG_POSTS];
  return sorted.sort(
    (a: BlogPost, b: BlogPost): number =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
};

/**
 * GET BLOG POSTS BY TAG
 * Filters blog posts by tag
 * @param tag - Tag to search for
 * @returns Array of posts with that tag
 */
export const getBlogPostsByTag = (tag: string): readonly BlogPost[] => {
  return BLOG_POSTS.filter((post: BlogPost): boolean =>
    post.tags.some((t: string): boolean => t.toLowerCase().includes(tag.toLowerCase()))
  );
};

/**
 * GET ALL BLOG TAGS
 * Returns unique tags from all blog posts
 * @returns Array of unique tags
 */
export const getAllBlogTags = (): readonly string[] => {
  const tagSet: Set<string> = new Set();
  BLOG_POSTS.forEach((post: BlogPost): void => {
    post.tags.forEach((tag: string): void => {
      tagSet.add(tag);
    });
  });
  return Array.from(tagSet).sort();
};
