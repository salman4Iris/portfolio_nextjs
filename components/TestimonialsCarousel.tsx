'use client';

import { MobileAutoCarousel } from '@/components/MobileAutoCarousel';
import TestimonialCard from '@/components/TestimonialCard';
import type { Testimonial } from '@/types';

interface TestimonialsCarouselProps {
  readonly testimonials: readonly Testimonial[];
}

export const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps): JSX.Element => {
  return (
    <MobileAutoCarousel
      ariaLabel="Colleague testimonials"
      desktopLayoutClassName="md:grid md:grid-cols-1 md:gap-6 md:overflow-visible md:snap-none md:scroll-auto lg:grid-cols-3"
      getItemKey={(testimonial: Testimonial): string => testimonial.id}
      items={testimonials}
      renderItem={(testimonial: Testimonial): JSX.Element => (
        <TestimonialCard testimonial={testimonial} />
      )}
      slideLabel="colleague testimonial"
    />
  );
};
