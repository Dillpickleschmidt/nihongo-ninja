import { router, useLocalSearchParams } from "expo-router";

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
