import { setBackgroundSettings } from "@nn/features/ambient-background";
import LearnPage from "@nn/features/learn";
import { HomeShell } from "@nn/features/shell";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/learn")({
  loader: ({ context }) => {
    setBackgroundSettings(context.queryClient, {
      blur: 4,
      opacityOffset: -0.22,
      showGradient: false,
    });
  },
  component: () => (
    <HomeShell>
      <LearnPage />
    </HomeShell>
  ),
});
