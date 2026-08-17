import { useCallback, useEffect, useRef, useState } from "react";
import type { Grade } from "ts-fsrs";

import type { PracticeCard, PracticeSessionState } from "../types";
import { PracticeSessionManager } from "./PracticeSessionManager";

type ManagerSnapshot = {
  currentCard: PracticeCard | null;
  activeQueue: string[];
  isFinished: boolean;
  cardMap: Map<string, PracticeCard>;
  dependencyMap: Map<string, string[]>;
  moduleProgress: { completed: number; total: number };
};

const EMPTY_SNAPSHOT: ManagerSnapshot = {
  currentCard: null,
  activeQueue: [],
  isFinished: false,
  cardMap: new Map(),
  dependencyMap: new Map(),
  moduleProgress: { completed: 0, total: 0 },
};

function readSnapshot(manager: PracticeSessionManager): ManagerSnapshot {
  const progress = manager.getModuleProgress();
  const hasCard = !manager.isFinished() && manager.getActiveQueue().length > 0;
  return {
    currentCard: hasCard ? manager.getCurrentCard() : null,
    activeQueue: manager.getActiveQueue(),
    isFinished: manager.isFinished(),
    // Copy: the manager mutates its map in place, so a fresh reference is
    // what lets React consumers (useMemo on cardMap) see updates.
    cardMap: new Map(manager.getCardMap()),
    dependencyMap: manager.getState().dependencyMap,
    moduleProgress: { completed: progress.done, total: progress.total },
  };
}

export function usePracticeManager(
  persistCard?: (card: PracticeCard, rating: Grade) => Promise<void>,
) {
  const managerRef = useRef<PracticeSessionManager | null>(null);
  const unsubscribeRef = useRef<(() => void) | null>(null);
  const [snapshot, setSnapshot] = useState<ManagerSnapshot>(EMPTY_SNAPSHOT);
  const persistCardRef = useRef(persistCard);
  useEffect(() => {
    persistCardRef.current = persistCard;
  });
  useEffect(() => {
    return () => {
      unsubscribeRef.current?.();
    };
  }, []);

  // Call from an effect, not during render (sets state).
  const initializeManager = useCallback(
    (sessionState: PracticeSessionState, options?: { reviewOnly?: boolean }): void => {
      unsubscribeRef.current?.();
      const manager = new PracticeSessionManager(sessionState, options);
      unsubscribeRef.current = manager.onChange(() => {
        setSnapshot(readSnapshot(manager));
      });
      managerRef.current = manager;
      setSnapshot(readSnapshot(manager));
    },
    [],
  );

  // Persistence runs detached so a slow write never blocks the next card.
  // Writes are chained per card key: log batches for one card must reach
  // the server in order (the delta cursor depends on it).
  const pendingWrites = useRef(new Map<string, Promise<void>>());

  const answerCard = useCallback((rating: Grade): void => {
    const updatedCard = managerRef.current!.processAnswer(rating);
    if (persistCardRef.current && updatedCard) {
      const key = updatedCard.key;
      const previous = pendingWrites.current.get(key) ?? Promise.resolve();
      const next = previous
        .then(() => persistCardRef.current?.(updatedCard, rating))
        .catch((error: unknown) => {
          console.error("Failed to persist practice answer:", error);
        });
      pendingWrites.current.set(key, next);
    }
  }, []);

  const processIntroduction = useCallback((): void => {
    managerRef.current!.processIntroductionCompletion();
  }, []);

  const getManager = useCallback((): PracticeSessionManager | null => managerRef.current, []);

  return {
    ...snapshot,
    initializeManager,
    answerCard,
    processIntroduction,
    getManager,
  };
}

export type PracticeManagerHook = ReturnType<typeof usePracticeManager>;
