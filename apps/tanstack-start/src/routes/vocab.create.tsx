import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { setBackgroundSettings } from "@nn/features/ambient-background";
import { HomeShell } from "@nn/features/shell";
import { VocabHubShell } from "@nn/features/vocab-hub";
import DeckCreatePage from "@nn/features/vocab-hub/pages/create";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vocab/create")({
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
  component: () => (
    <HomeShell>
      <VocabHubShell showPanel={false}>
        <DeckCreatePage />
      </VocabHubShell>
    </HomeShell>
  ),
});
