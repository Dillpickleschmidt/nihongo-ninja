import WatchPage from "@nn/features/watch";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/watch")({
  // Do not use SSR. This page wraps a native overlay or a webview.
  ssr: false,
  component: WatchPage,
});
