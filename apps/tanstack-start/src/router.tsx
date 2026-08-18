import { ConvexQueryClient } from "@convex-dev/react-query";
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";

import { routeTree } from "./routeTree.gen";

export function getRouter() {
  const convexUrl = import.meta.env.VITE_CONVEX_URL as string | undefined;
  if (!convexUrl) {
    throw new Error(
      "VITE_CONVEX_URL is not set — add it to the root .env (baked in at build time).",
    );
  }

  // Route Convex queries through TanStack Query so route loaders can prime the
  // cache on the server. Pages read the same cache with useQuery.
  // expectAuth holds the WebSocket until setAuth runs, so the client can never
  // overwrite loader-hydrated authenticated data with an unauthenticated
  // snapshot. The root route resumes it: with the SSR token when signed in,
  // via a null-token setAuth when signed out.
  const convexQueryClient = new ConvexQueryClient(convexUrl, { expectAuth: true });
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryKeyHashFn: convexQueryClient.hashFn(),
        queryFn: convexQueryClient.queryFn(),
      },
    },
  });
  convexQueryClient.connect(queryClient);

  const router = createRouter({
    routeTree,
    context: { queryClient, convexQueryClient },
    defaultPreload: "intent",
  });

  setupRouterSsrQueryIntegration({ router, queryClient });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
