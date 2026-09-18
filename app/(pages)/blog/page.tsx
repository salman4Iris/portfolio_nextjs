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
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white md:text-6xl">
            Blog
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Notes on frontend architecture, AI interfaces, enterprise systems, performance, and
            practical engineering.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map(
            (post: BlogPost): JSX.Element => (
              <article
                key={post.id}
                className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map(
                    (tag: string): JSX.Element => (
                      <span
                        key={tag}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="mb-6 flex-1 leading-relaxed text-gray-600 dark:text-gray-400">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
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
