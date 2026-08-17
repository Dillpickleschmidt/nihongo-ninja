import { setBackgroundSettings } from "@nn/features/ambient-background";
import SettingsPage from "@nn/features/settings";
import { HomeShell } from "@nn/features/shell";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings")({
  loader: ({ context }) => {
    setBackgroundSettings(context.queryClient, {
      blur: 12,
      opacityOffset: -0.22,
      showGradient: false,
    });
  },
  component: () => (
    <HomeShell>
      <SettingsPage />
    </HomeShell>
  ),
});
