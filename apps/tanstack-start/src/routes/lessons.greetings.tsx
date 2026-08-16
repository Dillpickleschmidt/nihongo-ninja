import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import GreetingsLesson, { GREETINGS_SET_ID } from "@nn/features/lessons/greetings";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/lessons/greetings")({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(
      convexQuery(api.api.vocabulary.getBySets, { setIds: [GREETINGS_SET_ID] }),
    );
    return { maxWidth: "max-w-5xl" };
  },
  component: GreetingsLesson,
});
