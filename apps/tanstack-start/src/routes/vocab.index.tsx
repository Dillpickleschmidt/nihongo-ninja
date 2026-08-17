import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { setBackgroundSettings } from "@nn/features/ambient-background";
import { HomeShell } from "@nn/features/shell";
import VocabDashboardPage, { VocabHubShell } from "@nn/features/vocab-hub";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vocab/")({
  validateSearch: (search: Record<string, unknown>): { chapter?: string } =>
    typeof search.chapter === "string" ? { chapter: search.chapter } : {},
  loader: async ({ context }) => {
    setBackgroundSettings(context.queryClient, {
      blur: 12,
      opacityOffset: -0.22,
      showGradient: false,
    });
    // Awaited: the page branches its structure on this data, so an
    // in-flight prefetch at SSR render time is a hydration mismatch.
    await context.queryClient.ensureQueryData(
      convexQuery(api.api.folders.getAllFoldersAndDecks, {}),
    );
    if (context.userId) {
      await context.queryClient.ensureQueryData(
        convexQuery(api.api.progress.getRecentModuleActivity, { limit: 20 }),
      );
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { chapter } = Route.useSearch();
  return (
    <HomeShell>
      <VocabHubShell showPanel={false}>
        <VocabDashboardPage chapter={chapter} />
      </VocabHubShell>
    </HomeShell>
  );
}
