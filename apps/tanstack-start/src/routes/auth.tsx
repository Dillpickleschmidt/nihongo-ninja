import { setBackgroundSettings } from "@nn/features/ambient-background";
import AuthPage from "@nn/features/auth";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  beforeLoad: ({ context }) => {
    if (context.userId) throw redirect({ to: "/learn" });
  },
  loader: ({ context }) => {
    setBackgroundSettings(context.queryClient, {
      blur: 4,
      opacityOffset: -0.3,
      showGradient: false,
    });
  },
  component: AuthPage,
});
