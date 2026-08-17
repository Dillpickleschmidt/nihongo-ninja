import { router, useLocalSearchParams, usePathname as useExpoPathname } from "expo-router";

import type { Href, Router } from "./types";

export function useRouter(): Router {
  return {
    push: (href: Href) => {
      router.push(href as never);
    },
    replace: (href: Href) => {
      router.replace(href as never);
    },
    back: () => {
      router.back();
    },
  };
}

export function useParams(): Record<string, string> {
  return useLocalSearchParams() as Record<string, string>;
}

export function usePathname(): string {
  return useExpoPathname();
}
