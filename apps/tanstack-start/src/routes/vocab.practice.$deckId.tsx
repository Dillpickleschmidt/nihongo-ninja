import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { setBackgroundSettings } from "@nn/features/ambient-background";
import { HomeShell } from "@nn/features/shell";
import DeckPracticePage from "@nn/features/vocab-practice";
import { createFileRoute } from "@tanstack/react-router";

type PracticeMode = "meanings" | "spellings";

export const Route = createFileRoute("/vocab/practice/$deckId")({
  validateSearch: (search: Record<string, unknown>): { mode: PracticeMode } => ({
    mode: search.mode === "spellings" ? "spellings" : "meanings",
  }),
  loaderDeps: ({ search }) => ({ mode: search.mode }),
  loader: ({ context, params, deps }) => {
    setBackgroundSettings(context.queryClient, {
      blur: 4,
      opacityOffset: -0.22,
      showGradient: false,
    });
    if (context.userId) {
      void context.queryClient.prefetchQuery(
        convexQuery(api.api.practice.getPracticeData, {
          deckId: params.deckId,
          mode: deps.mode,
        }),
      );
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { deckId } = Route.useParams();
  const { mode } = Route.useSearch();
  return (
    <HomeShell>
      {/* Param changes must remount: the session manager and persistence
          cursors inside are per-session state. */}
      <DeckPracticePage key={`${deckId}:${mode}`} deckId={deckId} mode={mode} />
    </HomeShell>
  );
}
