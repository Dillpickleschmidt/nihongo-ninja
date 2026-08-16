// Web-only entrance animations for the landing page.

export const ANIMATION_CONFIG = {
  duration: 300,
  distance: 30,
  easings: {
    transform: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacityEnter: "cubic-bezier(0.25, 1, 0.5, 1)",
  },
} as const;

export type Position = "left" | "right" | "up" | "down";

function getTransformValue(position: Position, distance: number, scale?: number): string {
  let translate: string;
  switch (position) {
    case "left":
      translate = `translate3d(${-distance}px, 0, 0)`;
      break;
    case "right":
      translate = `translate3d(${distance}px, 0, 0)`;
      break;
    case "up":
      translate = `translate3d(0, ${-distance}px, 0)`;
      break;
    case "down":
      translate = `translate3d(0, ${distance}px, 0)`;
      break;
  }
  return scale === undefined ? translate : `${translate} scale(${scale})`;
}

export function getInitialAnimationStyles(
  initialPosition: Position,
  distance: number = ANIMATION_CONFIG.distance,
  scale?: number,
): React.CSSProperties {
  return {
    willChange: "transform, opacity",
    backfaceVisibility: "hidden",
    transform: getTransformValue(initialPosition, distance, scale),
    opacity: 0,
  };
}

export function animateElementIn(
  element: HTMLElement,
  initialPosition: Position,
  options: { duration?: number; distance?: number; scale?: number } = {},
): void {
  // Reduced motion: reveal instantly, no transition.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    element.style.transition = "none";
    element.style.transform = "none";
    element.style.opacity = "1";
    return;
  }

  const {
    duration = ANIMATION_CONFIG.duration,
    distance = ANIMATION_CONFIG.distance,
    scale,
  } = options;

  element.style.transition = "none";
  element.style.transform = getTransformValue(initialPosition, distance, scale);
  element.style.opacity = "0";

  void element.offsetHeight; // Force reflow

  element.style.transition = [
    `transform ${duration}ms ${ANIMATION_CONFIG.easings.transform}`,
    `opacity ${duration}ms ${ANIMATION_CONFIG.easings.opacityEnter}`,
  ].join(", ");

  // Double rAF ensures the browser paints the hidden state before transitioning
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.transform = "translate3d(0, 0, 0)" + (scale === undefined ? "" : " scale(1)");
      element.style.opacity = "1";
    });
  });
}
