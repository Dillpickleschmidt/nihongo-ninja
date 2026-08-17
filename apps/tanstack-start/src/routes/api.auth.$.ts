import { createFileRoute } from "@tanstack/react-router";

import { handler } from "~/lib/auth-server";

// Proxy every Better Auth request to the Convex deployment.
export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: ({ request }) => handler(request),
      POST: ({ request }) => handler(request),
    },
  },
});
