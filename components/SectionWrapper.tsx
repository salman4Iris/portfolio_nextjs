/**
 * SECTION WRAPPER COMPONENT
 * Reusable section container with consistent styling
 * ES6+ TypeScript React component
 */

import React, { ReactNode } from 'react';
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
  return (
    <section id={id} className={cn('w-full px-4 py-16 sm:px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
};

export default SectionWrapper;
