import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { setBackgroundSettings } from "@nn/features/ambient-background";
import { HomeShell } from "@nn/features/shell";
import { VocabHubShell } from "@nn/features/vocab-hub";
import DeckEditPage from "@nn/features/vocab-hub/pages/edit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vocab/deck/$deckId/edit")({
  loader: async ({ context }) => {
    setBackgroundSettings(context.queryClient, {
      blur: 12,
      opacityOffset: -0.22,
      showGradient: false,
    });
    await context.queryClient.ensureQueryData(
      convexQuery(api.api.folders.getAllFoldersAndDecks, {}),
    );
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { deckId } = Route.useParams();
  return (
    <HomeShell>
      <VocabHubShell showPanel>
        <DeckEditPage key={deckId} deckId={deckId} />
      </VocabHubShell>
    </HomeShell>
  );
}
