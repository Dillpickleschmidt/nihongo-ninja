import { Link as RouterLink } from "@tanstack/react-router";

import type { LinkProps } from "./types";

export function Link({ href, search, className, children, replace }: LinkProps) {
  return (
    // href is already validated against the generated route union. The cast
    // bridges our resolved-path string to TanStack's pattern+params `to` type.
    <RouterLink to={href as never} search={search as never} className={className} replace={replace}>
      {children}
    </RouterLink>
  );
}
