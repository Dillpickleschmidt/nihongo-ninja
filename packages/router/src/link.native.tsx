import { Link as ExpoLink } from "expo-router";

import type { LinkProps } from "./types";

// asChild sends the onPress to the child element.
// Without it, a pressable child (Button) stops the tap and navigation fails.
// The child must be one element that accepts onPress.
export function Link({ href, className, children, replace }: LinkProps) {
  return (
    <ExpoLink href={href as never} className={className} replace={replace} asChild>
      {children}
    </ExpoLink>
  );
}
