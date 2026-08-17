import { useConvexMutation } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { useCallback } from "react";

export function useRecordVocabProgress(modulePath: string) {
  const mutate = useConvexMutation(api.api.progress.recordProgressEvent);

  return useCallback(
    (progressUnitsDelta: number, questionsAnsweredDelta: number) => {
      mutate({
        modulePath,
        moduleType: "vocab-practice",
        progressUnitsDelta,
        questionsAnsweredDelta,
        eventTs: Date.now(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
      }).catch((error: unknown) => {
        // Progress tracking is not session-critical.
        console.error("Failed to record vocab progress:", error);
      });
    },
    [mutate, modulePath],
  );
}
