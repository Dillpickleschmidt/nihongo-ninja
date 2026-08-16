import LessonPage from "@nn/features/lessons";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/lessons/$slug")({
  component: LessonPage,
});
