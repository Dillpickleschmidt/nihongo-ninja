import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { setBackgroundSettings } from "@nn/features/ambient-background";
import DashboardPage from "@nn/features/dashboard";
import { HomeShell } from "@nn/features/shell";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  loader: ({ context }) => {
    setBackgroundSettings(context.queryClient, {
      blur: 4,
      opacityOffset: -0.22,
      showGradient: false,
    });

    if (context.userId) {
      // No dated prefetch here: the server's getLocalDateKey can differ
      // from the client's (time zone, 4 AM cutoff), so the page computes
      // its own date key and queries client-side.
      void context.queryClient.prefetchQuery(convexQuery(api.api.fsrs.getDueFSRSCardsCount, {}));
      void context.queryClient.prefetchQuery(
        convexQuery(api.api.progress.getRecentModuleActivity, { limit: 10 }),
      );
    }
  },
  component: () => (
    <HomeShell>
      <DashboardPage />
    </HomeShell>
  ),
});
