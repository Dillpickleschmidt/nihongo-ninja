// Client-safe (no server imports): the practice session runs ts-fsrs in the
// browser and persists flat fields through these converters.
import type { Card, ReviewLog } from "ts-fsrs";

import type { Doc } from "../_generated/dataModel";

// Convert flat card document to ts-fsrs Card (for algorithm operations)
export function toTsFsrsCard(doc: Doc<"userFsrsCards">): Card {
  return {
    due: new Date(doc.dueAt),
    stability: doc.stability,
    difficulty: doc.difficulty,
    elapsed_days: doc.elapsed_days,
    scheduled_days: doc.scheduled_days,
    reps: doc.reps,
    lapses: doc.lapses,
    state: doc.state,
    learning_steps: doc.learning_steps ?? 0,
    last_review: doc.lastReviewAt === undefined ? undefined : new Date(doc.lastReviewAt),
  };
}

// Convert ts-fsrs Card to flat fields for storage
export function fromTsFsrsCard(card: Card) {
  const { due, last_review, ...rest } = card;
  return {
    ...rest,
    dueAt: due.getTime(),
    ...(last_review === undefined ? {} : { lastReviewAt: last_review.getTime() }),
  };
}

// Convert ts-fsrs ReviewLog to flat fields for storage
export function fromTsFsrsLog(log: ReviewLog) {
  const { due, review, ...rest } = log;
  return { ...rest, due: due.getTime(), review: review.getTime() };
}
