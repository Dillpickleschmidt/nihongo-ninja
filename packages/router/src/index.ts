// Navigation bridge. Pages import from this module only.
// The web build uses link.tsx and router.ts (TanStack Router).
// Metro uses link.native.tsx and router.native.ts (Expo Router).
export type { Href, LinkProps } from "./types";
export { Link } from "./link";
export { useRouter, useParams } from "./router";
