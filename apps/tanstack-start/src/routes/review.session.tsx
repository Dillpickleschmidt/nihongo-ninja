import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { setBackgroundSettings } from "@nn/features/ambient-background";
import ReviewSessionPage from "@nn/features/review-session";
import { HomeShell } from "@nn/features/shell";
import { createFileRoute } from "@tanstack/react-router";

type ReviewMode = "meanings" | "spellings";

export const Route = createFileRoute("/review/session")({
  validateSearch: (search: Record<string, unknown>): { mode: ReviewMode } => ({
    mode: search.mode === "spellings" ? "spellings" : "meanings",
  }),
  loaderDeps: ({ search }) => ({ mode: search.mode }),
  loader: ({ context, deps }) => {
    setBackgroundSettings(context.queryClient, {
      blur: 4,
      opacityOffset: -0.22,
      showGradient: false,
    });
    if (context.userId) {
      void context.queryClient.prefetchQuery(
        convexQuery(api.api.practice.getReviewSessionData, { mode: deps.mode }),
      );
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { mode } = Route.useSearch();
  return (
    <HomeShell>
      <ReviewSessionPage key={mode} mode={mode} />
    </HomeShell>
  );
}
