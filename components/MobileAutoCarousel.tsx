'use client';

import { useEffect, useRef, useState } from 'react';
import type { UIEvent } from 'react';

interface MobileAutoCarouselProps<T> {
  readonly items: readonly T[];
  readonly getItemKey: (item: T) => string;
  readonly renderItem: (item: T, index: number) => JSX.Element;
  readonly ariaLabel: string;
  readonly slideLabel: string;
  readonly desktopLayoutClassName: string;
  readonly desktopCarousel?: boolean;
  readonly desktopSlideClassName?: string;
}

export const MobileAutoCarousel = <T,>({
  items,
  getItemKey,
  renderItem,
  ariaLabel,
  slideLabel,
  desktopLayoutClassName,
  desktopCarousel = false,
  desktopSlideClassName = '',
}: MobileAutoCarouselProps<T>): JSX.Element => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [canScrollNext, setCanScrollNext] = useState<boolean>(false);

  useEffect(() => {
    const carouselElement = carouselRef.current;

    if (carouselElement === null || items.length < 2) {
      return;
    }

    const updateScrollState = (): void => {
      setCanScrollNext(
        carouselElement.scrollLeft + carouselElement.clientWidth < carouselElement.scrollWidth - 1
      );
    };

    updateScrollState();
    window.addEventListener('resize', updateScrollState);

    const intervalId = window.setInterval((): void => {
      const isMobileWithMotionEnabled: boolean = window.matchMedia(
        '(max-width: 767px) and (prefers-reduced-motion: no-preference)'
      ).matches;

      if (!isMobileWithMotionEnabled) {
        return;
      }

      const currentIndex: number = Math.round(
        carouselElement.scrollLeft / carouselElement.clientWidth
      );
      const nextIndex: number = (currentIndex + 1) % items.length;

      carouselElement.scrollTo({
        left: nextIndex * carouselElement.clientWidth,
        behavior: 'smooth',
      });
    }, 5000);

    return (): void => {
      window.clearInterval(intervalId);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [items.length]);

  const handleScroll = (event: UIEvent<HTMLDivElement>): void => {
    const carouselElement = event.currentTarget;
    const carouselLeft: number = carouselElement.getBoundingClientRect().left;
    let nearestIndex: number = 0;
    let nearestDistance: number = Number.POSITIVE_INFINITY;

    Array.from(carouselElement.children).forEach((slide: Element, index: number): void => {
      const distance: number = Math.abs(slide.getBoundingClientRect().left - carouselLeft);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(nearestIndex);
    setCanScrollNext(
      carouselElement.scrollLeft + carouselElement.clientWidth < carouselElement.scrollWidth - 1
    );
  };

  const handleSlideSelect = (index: number): void => {
    const carouselElement = carouselRef.current;
    const selectedCard = carouselElement?.children.item(index);

    if (selectedCard === undefined || selectedCard === null) {
      return;
    }

    selectedCard.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    setActiveIndex(index);
  };

  const handleDesktopNavigation = (direction: -1 | 1): void => {
    const carouselElement = carouselRef.current;

    if (carouselElement === null) {
      return;
    }

    const firstSlide = carouselElement.children.item(0);
    const secondSlide = carouselElement.children.item(1);
    const slideStep: number =
      firstSlide !== null && secondSlide !== null
        ? secondSlide.getBoundingClientRect().left - firstSlide.getBoundingClientRect().left
        : carouselElement.clientWidth;

    carouselElement.scrollBy({
      left: direction * slideStep,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  };

  return (
    <>
      <div
        ref={carouselRef}
        aria-label={ariaLabel}
        className={`flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${desktopLayoutClassName} ${
          desktopCarousel ? 'lg:flex lg:gap-6 lg:overflow-x-auto lg:snap-x lg:snap-mandatory' : ''
        }`}
        onScroll={handleScroll}
        role="region"
      >
        {items.map(
          (item: T, index: number): JSX.Element => (
            <div
              key={getItemKey(item)}
              className={`w-full shrink-0 snap-start md:w-auto md:shrink md:snap-none ${
                desktopCarousel ? `lg:shrink-0 lg:snap-start ${desktopSlideClassName}` : ''
              }`}
            >
              {renderItem(item, index)}
            </div>
          )
        )}
      </div>

      {desktopCarousel && (
        <div className="mt-5 hidden justify-end gap-2 lg:flex">
          <button
            type="button"
            aria-label={`Previous ${slideLabel}s`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--home-border)] text-slate-700 transition-colors hover:border-cyan-500 hover:text-cyan-600 disabled:cursor-not-allowed disabled:opacity-40 dark:text-slate-200 dark:hover:text-cyan-400"
            disabled={activeIndex === 0}
            onClick={(): void => handleDesktopNavigation(-1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            aria-label={`Next ${slideLabel}s`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--home-border)] text-slate-700 transition-colors hover:border-cyan-500 hover:text-cyan-600 disabled:cursor-not-allowed disabled:opacity-40 dark:text-slate-200 dark:hover:text-cyan-400"
            disabled={!canScrollNext}
            onClick={(): void => handleDesktopNavigation(1)}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}

      <div className="mt-4 flex justify-center gap-2 md:hidden">
        {items.map(
          (item: T, index: number): JSX.Element => (
            <button
              key={getItemKey(item)}
              type="button"
              aria-label={`Show ${slideLabel} ${index + 1}`}
              aria-pressed={activeIndex === index}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                activeIndex === index ? 'bg-cyan-500' : 'bg-slate-300 dark:bg-slate-600'
              }`}
              onClick={(): void => handleSlideSelect(index)}
            />
          )
        )}
      </div>
    </>
  );
};
