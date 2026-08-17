import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { setBackgroundSettings } from "@nn/features/ambient-background";
import { HomeShell } from "@nn/features/shell";
import { VocabHubShell } from "@nn/features/vocab-hub";
import PathViewPage from "@nn/features/vocab-hub/pages/path-view";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vocab/$")({
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
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { _splat } = Route.useParams();
  return (
    <HomeShell>
      <VocabHubShell showPanel>
        <PathViewPage splat={_splat ?? ""} />
      </VocabHubShell>
    </HomeShell>
  );
}
