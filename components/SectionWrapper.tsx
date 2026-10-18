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
    <section
      id={id}
      className={cn('w-full px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24', className)}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
};

export default SectionWrapper;
