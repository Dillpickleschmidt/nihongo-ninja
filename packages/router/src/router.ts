import { useNavigate, useParams as useTanStackParams } from "@tanstack/react-router";

import type { Href, Router } from "./types";

export function useRouter(): Router {
  const navigate = useNavigate();
  return {
    push: (href: Href) => void navigate({ to: href as never }),
    replace: (href: Href) => void navigate({ to: href as never, replace: true }),
    back: () => {
      window.history.back();
    },
  };
}

export function useParams(): Record<string, string> {
  return useTanStackParams({ strict: false }) as Record<string, string>;
}
