import type { Infer } from "convex/values";

import { Doc, Id } from "../_generated/dataModel";
import { MutationCtx, QueryCtx } from "../_generated/server";
import { fromTsFsrsCard, fromTsFsrsLog, toTsFsrsCard } from "../shared/fsrs-serde";
import type {
  PracticeMode,
  PracticeItemType,
  fsrsCardValidator,
  fsrsReviewLogValidator,
} from "../validators";

export { fromTsFsrsCard, fromTsFsrsLog, toTsFsrsCard };

// Validated formats (what API receives - already storage-ready)
type ValidatedCard = Infer<typeof fsrsCardValidator>;
type ValidatedLog = Infer<typeof fsrsReviewLogValidator>;

// Helper: query cards by user + mode, with optional dueAt upper bound
function queryCardsByMode(ctx: QueryCtx, userId: string, mode: PracticeMode, dueAt?: number) {
  return ctx.db.query("userFsrsCards").withIndex("by_user_mode_dueAt", (q) => {
    const base = q.eq("userId", userId).eq("mode", mode);
    return dueAt !== undefined ? base.lte("dueAt", dueAt) : base;
  });
}

// Helper: fetch existing card by key/mode/type
function fetchExistingCard(
  ctx: MutationCtx | QueryCtx,
  userId: string,
  key: string,
  mode: PracticeMode,
  type: PracticeItemType,
) {
  return ctx.db
    .query("userFsrsCards")
    .withIndex("by_user_key_mode_type", (q) =>
      q.eq("userId", userId).eq("practiceItemKey", key).eq("mode", mode).eq("type", type),
    )
    .first();
}

// Helper: check if incoming card should be imported over existing
function shouldImportCard(
  incomingScheduledDays: number,
  existing: Doc<"userFsrsCards"> | null,
): boolean {
  if (!existing) return true;
  return incomingScheduledDays >= existing.scheduled_days;
}

export async function getFSRSCardsForItems(
  ctx: QueryCtx,
  keys: string[],
  mode: PracticeMode,
): Promise<{
  vocabulary: Doc<"userFsrsCards">[];
  kanji: Doc<"userFsrsCards">[];
  radical: Doc<"userFsrsCards">[];
}> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    return { vocabulary: [], kanji: [], radical: [] };
  }

  const userId = identity.subject;
  const uniqueSortedKeys = [...new Set(keys)].sort();

  const results = await Promise.all(
    uniqueSortedKeys.map((key) =>
      ctx.db
        .query("userFsrsCards")
        .withIndex("by_user_key_mode_type", (q) =>
          q.eq("userId", userId).eq("practiceItemKey", key).eq("mode", mode),
        )
        .collect(),
    ),
  );

  const bucketed = {
    vocabulary: [] as Doc<"userFsrsCards">[],
    kanji: [] as Doc<"userFsrsCards">[],
    radical: [] as Doc<"userFsrsCards">[],
  };

  for (const cardsForKey of results) {
    for (const card of cardsForKey) {
      bucketed[card.type].push(card);
    }
  }

  return bucketed;
}

export async function getDueFSRSCards(
  ctx: QueryCtx,
  mode: PracticeMode,
  limit?: number,
): Promise<Doc<"userFsrsCards">[]> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) return [];

  const query = queryCardsByMode(ctx, identity.subject, mode, Date.now());
  return limit === undefined ? query.collect() : query.take(limit);
}

/**
 * All unique practice item keys the user has ever practiced (both modes).
 */
export async function getAllPracticedKeys(ctx: QueryCtx): Promise<string[]> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) return [];

  const userId = identity.subject;
  const [spellings, meanings] = await Promise.all([
    queryCardsByMode(ctx, userId, "spellings").collect(),
    queryCardsByMode(ctx, userId, "meanings").collect(),
  ]);

  const seen = new Set<string>();
  for (const card of spellings) {
    if (card.type === "vocabulary") seen.add(card.practiceItemKey);
  }
  for (const card of meanings) {
    if (card.type === "vocabulary") seen.add(card.practiceItemKey);
  }
  return [...seen];
}

type StatusData = { state: number; scheduled_days: number };
type StatusesByType = Record<PracticeItemType, Record<string, StatusData>>;

export async function getItemStatuses(
  ctx: QueryCtx,
  items: { key: string; type: PracticeItemType }[],
): Promise<StatusesByType> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) return { vocabulary: {}, kanji: {}, radical: {} };

  const userId = identity.subject;

  const results = await Promise.all(
    items.map((item) =>
      ctx.db
        .query("userFsrsCards")
        .withIndex("by_user_key_mode_type", (q) =>
          q
            .eq("userId", userId)
            .eq("practiceItemKey", item.key)
            .eq("mode", "meanings")
            .eq("type", item.type),
        )
        .first(),
    ),
  );

  const statusMap: StatusesByType = { vocabulary: {}, kanji: {}, radical: {} };
  for (const [i, item] of items.entries()) {
    const card = results[i];
    if (card) {
      // Convex requires ASCII field names, so encode Japanese keys
      statusMap[item.type][encodeURIComponent(item.key)] = {
        state: card.state,
        scheduled_days: card.scheduled_days,
      };
    }
  }

  return statusMap;
}

// Counts cap here instead of reading an unbounded backlog. `cap` is part of
// the return value so consumers can render "500+" when a count reaches it.
const DUE_COUNT_CAP = 500;

export async function getDueFSRSCardsCount(
  ctx: QueryCtx,
): Promise<{ meanings: number; spellings: number; cap: number }> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) return { meanings: 0, spellings: 0, cap: DUE_COUNT_CAP };

  const userId = identity.subject;
  const now = Date.now();

  const [meanings, spellings] = await Promise.all([
    queryCardsByMode(ctx, userId, "meanings", now).take(DUE_COUNT_CAP),
    queryCardsByMode(ctx, userId, "spellings", now).take(DUE_COUNT_CAP),
  ]);

  return { meanings: meanings.length, spellings: spellings.length, cap: DUE_COUNT_CAP };
}

export async function upsertFSRSCard(
  ctx: MutationCtx,
  data: {
    practiceItemKey: string;
    card: ValidatedCard;
    newLogs: ValidatedLog[];
    mode: PracticeMode;
    type: PracticeItemType;
  },
): Promise<void> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new Error("Must be authenticated to save FSRS progress");
  }

  const userId = identity.subject;
  const existing = await fetchExistingCard(ctx, userId, data.practiceItemKey, data.mode, data.type);

  const cardData = {
    userId,
    practiceItemKey: data.practiceItemKey,
    mode: data.mode,
    type: data.type,
    ...data.card,
  };

  let cardId: Id<"userFsrsCards">;

  if (existing) {
    await ctx.db.patch(existing._id, data.card);
    cardId = existing._id;
  } else {
    cardId = await ctx.db.insert("userFsrsCards", cardData);
  }

  // Insert new logs
  await Promise.all(
    data.newLogs.map((log) => ctx.db.insert("userFsrsCardLogs", { cardId, ...log })),
  );
}

/**
 * Import FSRS cards in batch.
 * Skips cards where the existing stored card has a longer interval (better
 * knowledge). Duplicate (type, searchTerm) inputs are collapsed to the entry
 * with the longest interval, so one request cannot insert duplicate rows.
 */
export async function batchImportFSRSCards(
  ctx: MutationCtx,
  cards: {
    searchTerm: string;
    type: PracticeItemType;
    card: ValidatedCard;
    logs: ValidatedLog[];
  }[],
): Promise<{ imported: number }> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new Error("Must be authenticated to import cards");
  }

  const userId = identity.subject;

  const byKey = new Map<string, (typeof cards)[number]>();
  for (const card of cards) {
    const key = `${card.type}:${card.searchTerm}`;
    const prev = byKey.get(key);
    if (!prev || card.card.scheduled_days > prev.card.scheduled_days) {
      byKey.set(key, card);
    }
  }
  const uniqueCards = [...byKey.values()];

  // Batch fetch existing cards
  const existingCards = await Promise.all(
    uniqueCards.map((card) =>
      fetchExistingCard(ctx, userId, card.searchTerm, "meanings", card.type),
    ),
  );

  // Filter + upsert in one pass
  let importedCount = 0;
  await Promise.all(
    uniqueCards.map(async (card, i) => {
      const existing = existingCards[i] ?? null;

      if (!shouldImportCard(card.card.scheduled_days, existing)) {
        return null;
      }

      importedCount++;

      const cardData = {
        userId,
        practiceItemKey: card.searchTerm,
        mode: "meanings" as const,
        type: card.type,
        ...card.card,
      };

      let cardId: Id<"userFsrsCards">;

      if (existing) {
        await ctx.db.patch(existing._id, card.card);
        cardId = existing._id;
      } else {
        cardId = await ctx.db.insert("userFsrsCards", cardData);
      }

      // Insert all logs for this card
      await Promise.all(
        card.logs.map((log) => ctx.db.insert("userFsrsCardLogs", { cardId, ...log })),
      );
    }),
  );

  return { imported: importedCount };
}
