import { setBackgroundSettings } from "@nn/features/ambient-background";
import { LessonLayout } from "@nn/features/lessons/lesson-layout";
import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";

export const Route = createFileRoute("/lessons")({
  loader: ({ context }) => {
    // The lesson layout draws its own fixed artwork.
    setBackgroundSettings(context.queryClient, {
      blur: 0,
      opacityOffset: -1,
      showGradient: false,
    });
  },
  component: LessonsLayoutRoute,
});

function hasMaxWidth(data: unknown): data is { maxWidth: string } {
  return !!data && typeof data === "object" && "maxWidth" in data;
}

// Each lesson route's loader may return { maxWidth } to widen its content.
function LessonsLayoutRoute() {
  const matches = useMatches();
  const data = matches.at(-1)?.loaderData;
  const maxWidth = hasMaxWidth(data) ? data.maxWidth : undefined;

  return (
    <LessonLayout maxWidth={maxWidth}>
      <Outlet />
    </LessonLayout>
  );
}
