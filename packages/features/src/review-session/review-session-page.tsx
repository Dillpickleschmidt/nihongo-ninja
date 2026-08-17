import { convexQuery, useConvexMutation } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { fromTsFsrsCard, fromTsFsrsLog } from "@nn/convex/fsrs-serde";
import type { PracticeMode } from "@nn/convex/validators";
import { useRouter } from "@nn/router";
import { useQuery } from "@tanstack/react-query";
import { useConvexAuth } from "convex/react";
import { useEffect, useRef } from "react";
import type { Grade } from "ts-fsrs";

import { buildFsrsSessionState } from "../vocab-practice/logic/fsrs-session-state";
import { usePracticeManager } from "../vocab-practice/logic/use-practice-manager";
import { useRecordVocabProgress } from "../vocab-practice/logic/use-record-vocab-progress";
import type { PracticeCard } from "../vocab-practice/types";
import { VocabPractice } from "../vocab-practice/vocab-practice";

export default function ReviewSessionPage({ mode }: { mode: PracticeMode }) {
  const router = useRouter();
  // Gate on the Convex connection's auth, not the session cookie: a query
  // subscribed before the client's token is set resolves unauthenticated
  // with zero cards, which would trigger the empty-session redirect.
  const { isLoading: authPending, isAuthenticated: authed } = useConvexAuth();
  const { data: reviewData, isPending } = useQuery({
    ...convexQuery(api.api.practice.getReviewSessionData, { mode }),
    enabled: authed,
  });

  const upsertFSRSCard = useConvexMutation(api.api.fsrs.upsertFSRSCard);
  // Logs accumulate on the card across the session; send only the ones not
  // yet persisted, and advance the cursor only after the write succeeds.
  const sentLogCounts = useRef(new Map<string, number>());

  const persistCard = async (card: PracticeCard, _rating: Grade) => {
    const logs = card.fsrs.logs ?? [];
    const sentCount = sentLogCounts.current.get(card.key) ?? 0;
    try {
      await upsertFSRSCard({
        practiceItemKey: card.key.slice(card.key.indexOf(":") + 1),
        card: fromTsFsrsCard(card.fsrs.card),
        newLogs: logs.slice(sentCount).map(fromTsFsrsLog),
        mode: card.practiceMode,
        type: card.practiceItemType,
      });
      sentLogCounts.current.set(card.key, logs.length);
    } catch (error) {
      console.error("Failed to save FSRS progress:", error);
    }
  };

  const practiceManager = usePracticeManager(persistCard);
  const recordProgress = useRecordVocabProgress(`vocab-review:nihongo-ninja-${mode}`);

  const { initializeManager, getManager } = practiceManager;
  const redirecting = useRef(false);

  useEffect(() => {
    if (authPending || getManager() || redirecting.current) return;

    if (!authed) {
      redirecting.current = true;
      router.replace("/auth");
      return;
    }
    if (isPending) return;

    if (!reviewData || reviewData.reviewData.fsrsCards.length === 0) {
      redirecting.current = true;
      router.replace("/dashboard");
      return;
    }

    initializeManager(buildFsrsSessionState(reviewData.reviewData, mode), {
      reviewOnly: true,
    });
  }, [authPending, authed, isPending, reviewData, mode, initializeManager, getManager, router]);

  if (!getManager()) {
    return (
      <div className="flex min-h-dvh items-center justify-center text-muted-foreground">
        Loading review session...
      </div>
    );
  }

  return (
    <div className="min-h-dvh pt-6 md:pt-10">
      <VocabPractice
        practiceManager={practiceManager}
        deckName={mode === "meanings" ? "Meanings Review" : "Spellings Review"}
        reviewOnly
        onAnswer={practiceManager.answerCard}
        onIntroductionComplete={() => {
          practiceManager.processIntroduction();
        }}
        onProgressEvent={recordProgress}
        onReturn={() => {
          router.push("/dashboard");
        }}
        returnLabel="Return to Review"
      />
    </div>
  );
}
