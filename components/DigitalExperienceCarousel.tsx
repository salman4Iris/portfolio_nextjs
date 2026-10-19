'use client';

import { MobileAutoCarousel } from '@/components/MobileAutoCarousel';

interface DigitalExperienceCarouselProps {
  readonly highlights: readonly string[];
}

export const DigitalExperienceCarousel = ({
  highlights,
}: DigitalExperienceCarouselProps): JSX.Element => {
  return (
    <MobileAutoCarousel
      ariaLabel="Digital experience highlights"
      desktopLayoutClassName="md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:snap-none md:scroll-auto lg:grid-cols-3"
      getItemKey={(highlight: string): string => highlight}
      items={highlights}
      renderItem={(highlight: string, index: number): JSX.Element => (
        <div className="surface-card h-full">
          <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-pink-500 text-lg font-black text-white">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="font-semibold leading-7 text-slate-700 dark:text-slate-200">{highlight}</p>
        </div>
      )}
      slideLabel="digital experience"
    />
  );
};
