import { setBackgroundSettings } from "@nn/features/ambient-background";
import { HomeShell } from "@nn/features/shell";
import { VocabHubShell } from "@nn/features/vocab-hub";
import BrowsePage from "@nn/features/vocab-hub/pages/browse";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vocab/browse")({
  loader: ({ context }) => {
    setBackgroundSettings(context.queryClient, {
      blur: 12,
      opacityOffset: -0.22,
      showGradient: false,
    });
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <HomeShell>
      <VocabHubShell showPanel={false}>
        <BrowsePage />
      </VocabHubShell>
    </HomeShell>
  );
}
