import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { ConvexQueryClient } from "@convex-dev/react-query";
import { authClient } from "@nn/features/auth/client";
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
  const convexQueryClient = new ConvexQueryClient(convexUrl);
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
    Wrap: (props) => (
      <ConvexBetterAuthProvider client={convexQueryClient.convexClient} authClient={authClient}>
        {props.children}
      </ConvexBetterAuthProvider>
    ),
  });

  setupRouterSsrQueryIntegration({ router, queryClient });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
