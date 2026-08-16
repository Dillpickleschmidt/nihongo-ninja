import { setBackgroundSettings } from "@nn/features/ambient-background";
import WatchPage from "@nn/features/watch";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/watch")({
  // Do not use SSR. This page wraps a native overlay or a webview.
  ssr: false,
  loader: ({ context }) => {
    // No ambient background over the video surface.
    setBackgroundSettings(context.queryClient, {
      blur: 0,
      opacityOffset: -1,
      showGradient: false,
    });
  },
  component: WatchPage,
});
