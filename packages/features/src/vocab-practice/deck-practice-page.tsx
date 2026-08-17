import { convexQuery, useConvexMutation } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { fromTsFsrsCard, fromTsFsrsLog } from "@nn/convex/fsrs-serde";
import type { PracticeMode } from "@nn/convex/validators";
import { useRouter } from "@nn/router";
import { useQuery } from "@tanstack/react-query";
import { useConvexAuth } from "convex/react";
import { useEffect, useRef } from "react";
import type { Grade } from "ts-fsrs";

import { buildFsrsSessionState } from "./logic/fsrs-session-state";
import { usePracticeManager } from "./logic/use-practice-manager";
import { useRecordVocabProgress } from "./logic/use-record-vocab-progress";
import type { PracticeCard } from "./types";
import { VocabPractice } from "./vocab-practice";

export default function DeckPracticePage({ deckId, mode }: { deckId: string; mode: PracticeMode }) {
  const router = useRouter();
  // Gate on the Convex connection's auth (see review-session-page.tsx).
  const { isLoading: authPending, isAuthenticated: authed } = useConvexAuth();
  const { data: practiceData, isPending } = useQuery({
    ...convexQuery(api.api.practice.getPracticeData, { deckId, mode }),
    enabled: authed,
  });

  const upsertFSRSCard = useConvexMutation(api.api.fsrs.upsertFSRSCard);
  // Logs accumulate on the card across the session; send only the ones not
  // yet persisted, and advance the cursor only after the write succeeds.
  const sentLogCounts = useRef(new Map<string, number>());

  const persistCard = async (card: PracticeCard, _rating: Grade) => {
    const logs = card.fsrs.logs ?? [];
    const sentCount = sentLogCounts.current.get(card.key) ?? 0;
    await upsertFSRSCard({
      practiceItemKey: card.key.slice(card.key.indexOf(":") + 1),
      card: fromTsFsrsCard(card.fsrs.card),
      newLogs: logs.slice(sentCount).map(fromTsFsrsLog),
      mode: card.practiceMode,
      type: card.practiceItemType,
    });
    sentLogCounts.current.set(card.key, logs.length);
  };

  const practiceManager = usePracticeManager(persistCard);
  const deck = practiceData?.deck;
  const recordProgress = useRecordVocabProgress(`vocab-deck:${deck?.id ?? deckId}`);

  const { initializeManager, getManager } = practiceManager;

  useEffect(() => {
    if (!practiceData || getManager()) return;

    initializeManager(
      buildFsrsSessionState(practiceData.reviewData, mode, {
        hierarchy: practiceData.hierarchy.hierarchy,
        moduleData: practiceData.moduleData,
        includeReviews: true,
      }),
    );
  }, [practiceData, mode, initializeManager, getManager]);

  if (!authPending && !authed) {
    return (
      <EmptyState
        message="Sign in to practice with spaced repetition."
        actionLabel="Go to sign in"
        onAction={() => {
          router.push("/auth");
        }}
      />
    );
  }

  if (!isPending && authed && practiceData === null) {
    return (
      <EmptyState
        message="Deck not found."
        actionLabel="Back to Learn"
        onAction={() => {
          router.push("/learn");
        }}
      />
    );
  }

  if (!getManager()) {
    return (
      <div className="flex min-h-dvh items-center justify-center text-muted-foreground">
        Loading practice session...
      </div>
    );
  }

  return (
    <div className="min-h-dvh pt-6 md:pt-10">
      <VocabPractice
        practiceManager={practiceManager}
        deckName={deck?.deckName ?? deckId}
        onAnswer={practiceManager.answerCard}
        onIntroductionComplete={() => {
          practiceManager.processIntroduction();
        }}
        onProgressEvent={recordProgress}
        onReturn={() => {
          router.push("/learn");
        }}
        returnLabel="Return to Learn"
      />
    </div>
  );
}

function EmptyState({
  message,
  actionLabel,
  onAction,
}: {
  message: string;
  actionLabel: string;
  onAction: () => void;
}) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4">
      <p className="text-muted-foreground">{message}</p>
      <button
        type="button"
        onClick={onAction}
        className="rounded-lg bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent dark:bg-white/5 dark:hover:bg-white/10"
      >
        {actionLabel}
      </button>
    </div>
  );
}
