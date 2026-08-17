import { Link as ExpoLink } from "expo-router";

import type { LinkProps } from "./types";

// asChild sends the onPress to the child element.
// Without it, a pressable child (Button) stops the tap and navigation fails.
// The child must be one element that accepts onPress.
export function Link({ href, search, className, children, replace }: LinkProps) {
  const target = search ? { pathname: href, params: search } : href;
  return (
    <ExpoLink href={target as never} className={className} replace={replace} asChild>
      {children}
    </ExpoLink>
  );
}
