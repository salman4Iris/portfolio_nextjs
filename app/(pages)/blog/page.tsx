/**
 * BLOG PAGE
 * Technical articles and engineering case studies
 * ES6+ TypeScript
 */

import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { getAllBlogPostsSorted } from '@/content/blog';
import type { BlogPost } from '@/types';

export default function BlogPage(): JSX.Element {
  const posts: readonly BlogPost[] = getAllBlogPostsSorted();

  return (
    <div className="w-full">
      <SectionWrapper className="py-12">
        <div className="mb-12">
          <h1 className="page-title mb-4">Blog</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Notes on frontend architecture, AI interfaces, enterprise systems, performance, and
            practical engineering.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map(
            (post: BlogPost): JSX.Element => (
              <article key={post.id} className="surface-card flex h-full flex-col">
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map(
                    (tag: string): JSX.Element => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-400/10 dark:text-cyan-200"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <h2 className="mb-3 text-xl font-bold leading-snug text-slate-900 dark:text-white sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mb-6 flex-1 leading-7 text-slate-600 dark:text-slate-400">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between gap-3 border-t border-[var(--home-border)] pt-4 text-sm text-slate-500 dark:text-slate-400">
                  <time dateTime={post.publishedDate}>{post.publishedDate}</time>
                  <span>{post.readingTime} min read</span>
                </div>
              </article>
            )
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
