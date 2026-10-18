/**
 * SECTION WRAPPER COMPONENT
 * Reusable section container with consistent styling
 * ES6+ TypeScript React component
 */

'use client';

import React, { ReactNode, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly id?: string;
}

/**
 * SECTION WRAPPER COMPONENT
 * Wraps content sections with consistent max-width and padding
 * @param props - Component props
 * @returns Wrapped section JSX element
 */
export const SectionWrapper = ({ children, className, id }: SectionWrapperProps): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect((): (() => void) | undefined => {
    const section: HTMLElement | null = sectionRef.current;
    const prefersReducedMotion: boolean = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!section || prefersReducedMotion || !('IntersectionObserver' in window)) {
      return undefined;
    }

    section.dataset.scrollReveal = 'pending';

    const observer: IntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry: IntersectionObserverEntry): void => {
          if (entry.isIntersecting) {
            section.dataset.scrollReveal = 'visible';
            observer.unobserve(section);
          }
        });
      },
      { rootMargin: '0px 0px -48px 0px', threshold: 0 }
    );

    observer.observe(section);

    return (): void => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn('w-full px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24', className)}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
};

export default SectionWrapper;
