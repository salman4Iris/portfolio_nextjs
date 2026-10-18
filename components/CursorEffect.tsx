'use client';

import { useEffect, useRef } from 'react';

export const CursorEffect = (): JSX.Element => {
  const ringRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect((): (() => void) | undefined => {
    const finePointerQuery: MediaQueryList = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    );
    const reducedMotionQuery: MediaQueryList = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    const ring: HTMLSpanElement | null = ringRef.current;
    const dot: HTMLSpanElement | null = dotRef.current;

    if (!finePointerQuery.matches || reducedMotionQuery.matches || !ring || !dot) {
      return undefined;
    }

    let pointerX: number = 0;
    let pointerY: number = 0;
    let dotX: number = 0;
    let dotY: number = 0;
    let ringX: number = 0;
    let ringY: number = 0;
    let animationFrame: number;

    const handlePointerMove = (event: PointerEvent): void => {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') {
        return;
      }

      pointerX = event.clientX;
      pointerY = event.clientY;
      ring.dataset.visible = 'true';
      dot.dataset.visible = 'true';

      const target: EventTarget | null = event.target;
      const isOverInteractiveElement: boolean =
        target instanceof Element && Boolean(target.closest('a, button, .hover-cursor'));
      ring.dataset.hover = String(isOverInteractiveElement);
    };

    const hideCursor = (): void => {
      ring.dataset.visible = 'false';
      dot.dataset.visible = 'false';
    };

    const animateCursor = (): void => {
      dotX += (pointerX - dotX) * 0.15;
      dotY += (pointerY - dotY) * 0.15;
      ringX += (pointerX - ringX) * 0.08;
      ringY += (pointerY - ringY) * 0.08;
      dot.style.left = `${dotX}px`;
      dot.style.top = `${dotY}px`;
      ring.style.left = `${ringX - 20}px`;
      ring.style.top = `${ringY - 20}px`;
      animationFrame = window.requestAnimationFrame(animateCursor);
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerleave', hideCursor);
    animationFrame = window.requestAnimationFrame(animateCursor);

    return (): void => {
      window.cancelAnimationFrame(animationFrame);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', hideCursor);
    };
  }, []);

  return (
    <>
      <span ref={ringRef} className="cursor-effect-ring" aria-hidden="true" />
      <span ref={dotRef} className="cursor-effect-dot" aria-hidden="true" />
    </>
  );
};
