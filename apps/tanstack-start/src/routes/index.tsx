import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import HomePage from "@nn/features/homepage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  // Prime the query cache on the server so the HTML ships with data.
  loader: ({ context }) => context.queryClient.ensureQueryData(convexQuery(api.health.ping, {})),
  component: HomePage,
});
