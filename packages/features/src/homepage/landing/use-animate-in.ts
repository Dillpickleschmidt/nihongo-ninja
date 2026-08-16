import { useCallback, useRef } from "react";

import { animateElementIn, getInitialAnimationStyles, type Position } from "./animations";

// Returns a ref callback + initial styles. The element animates in when it
// enters the viewport (or immediately when `immediate` is set).
export function useAnimateIn(
  position: Position,
  options: {
    delay?: number;
    duration?: number;
    distance?: number;
    scale?: number;
    threshold?: number;
    rootMargin?: string;
    immediate?: boolean;
  } = {},
) {
  const { delay = 0, duration, distance, scale, threshold = 0.3, rootMargin, immediate } = options;
  const cleanup = useRef<(() => void) | null>(null);

  const ref = useCallback(
    (element: HTMLElement | null) => {
      cleanup.current?.();
      cleanup.current = null;
      if (!element) return;

      const run = () => {
        animateElementIn(element, position, { duration, distance, scale });
      };

      if (immediate) {
        const timer = setTimeout(run, delay);
        cleanup.current = () => {
          clearTimeout(timer);
        };
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setTimeout(run, delay);
            observer.disconnect();
          }
        },
        { threshold, rootMargin },
      );
      observer.observe(element);
      cleanup.current = () => {
        observer.disconnect();
      };
    },
    [position, delay, duration, distance, scale, threshold, rootMargin, immediate],
  );

  return { ref, initialStyles: getInitialAnimationStyles(position, distance, scale) };
}
