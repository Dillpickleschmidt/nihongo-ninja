import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { getLocalDateKey } from "@nn/data/progress/weights";
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
      const todayKey = getLocalDateKey();
      void context.queryClient.prefetchQuery(convexQuery(api.api.fsrs.getDueFSRSCardsCount, {}));
      void context.queryClient.prefetchQuery(
        convexQuery(api.api.progress.getDailyModuleStatsForDate, { dateKey: todayKey }),
      );
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
