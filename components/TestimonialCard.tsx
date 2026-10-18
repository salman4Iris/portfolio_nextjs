/**
 * TESTIMONIAL CARD COMPONENT
 * Individual colleague or client testimonial
 * ES6+ TypeScript React component
 */

import React from 'react';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  readonly testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps): JSX.Element => {
  return (
    <article className="surface-card h-full">
      <div
        className="mb-5 flex gap-1 text-amber-400"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {Array.from(
          { length: testimonial.rating },
          (_, starIndex: number): JSX.Element => (
            <span key={starIndex} aria-hidden="true">
              ★
            </span>
          )
        )}
      </div>
      <blockquote className="mb-6 text-base leading-7 text-slate-600 dark:text-slate-300">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>
      <footer>
        <p className="font-bold text-slate-900 dark:text-white">{testimonial.author}</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {testimonial.position} · {testimonial.company}
        </p>
      </footer>
    </article>
  );
};

export default TestimonialCard;
