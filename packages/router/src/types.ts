import type { ReactNode } from "react";

// Href is a union of every real route, generated from the web route tree by
// scripts/generate-routes.ts. A bad path is a compile error.
import type { Href } from "./routes.gen";

export type { Href };

export interface LinkProps {
  href: Href;
  search?: Record<string, string>;
  className?: string;
  children?: ReactNode;
  replace?: boolean;
}

export interface Router {
  push: (href: Href) => void;
  replace: (href: Href) => void;
  back: () => void;
}
