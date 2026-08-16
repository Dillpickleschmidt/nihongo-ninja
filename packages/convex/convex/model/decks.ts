import { chapters } from "@nn/data/chapters";
import { dynamic_modules } from "@nn/data/dynamic_modules";

import { Id } from "../_generated/dataModel";
import { MutationCtx, QueryCtx } from "../_generated/server";
import { DeckVocabItemInput } from "../validators";
import { verifyFolderOwnership } from "./folders";
import { deleteShareForDeck, isShared } from "./sharing";
import {
  createDeckVocabItems,
  deleteDeckVocabItems,
  fetchDeckVocab,
  getUserDeckVocabItems,
  replaceDeckVocabItems,
} from "./vocabulary";

type DeckSource = "built-in" | "anki" | "wanikani" | "jpdb" | "user" | "shared" | "learning_path";

type PracticeMode = "meanings" | "spellings";

// ===== Unified Deck Type =====

export interface UnifiedDeck {
  id: string;
  deckName: string;
  deckDescription?: string;
  folderId?: string;
  source: "user" | "built-in";
}

// ===== Built-in Deck Generation =====

// The source data is static, so build the list once per isolate.
let builtInDecksCache: UnifiedDeck[] | null = null;

export function getBuiltInDecks(): UnifiedDeck[] {
  if (builtInDecksCache) return builtInDecksCache;
  const decks: UnifiedDeck[] = [];

  for (const [textbookId, textbookChapters] of Object.entries(chapters)) {
    for (const [chapterSlug, chapter] of Object.entries(textbookChapters)) {
      const folderId = `${textbookId}/${chapterSlug}`;

      for (const moduleId of chapter.learning_path_item_ids) {
        const module = dynamic_modules[moduleId];
        // Only include vocab-practice modules as decks (skip vocab-list, vocab-test, sentence-practice)
        if (module?.module_type === "vocab-practice") {
          decks.push({
            id: moduleId,
            deckName: module.title,
            folderId,
            source: "built-in",
          });
        }
      }
    }
  }

  builtInDecksCache = decks;
  return decks;
}

// ===== Unified Query (built-in + user) =====

export async function getAllDecks(ctx: QueryCtx): Promise<UnifiedDeck[]> {
  const builtIn = getBuiltInDecks();

  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    return builtIn;
  }

  const userDecks = await getUserDecks(ctx);

  // Always "user": the row's own source (anki, shared, ...) records provenance,
  // but the vocab lives in deckVocabularyItems. Matches resolveDeckById.
  const normalized: UnifiedDeck[] = userDecks.map((d) => ({
    id: d._id,
    deckName: d.deckName,
    deckDescription: d.deckDescription,
    folderId: d.folderId,
    source: "user",
  }));

  return [...builtIn, ...normalized];
}

// ===== Query Helpers =====

export async function getUserDecks(ctx: QueryCtx) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  return ctx.db
    .query("userDecks")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .collect();
}

// ===== Validation Helpers =====

export async function checkDeckNameUnique(
  ctx: QueryCtx,
  name: string,
  excludeDeckId?: Id<"userDecks">,
) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  const existingDecks = await ctx.db
    .query("userDecks")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .collect();
  const duplicate = existingDecks.find(
    (d) => d.deckName.toLowerCase() === name.toLowerCase() && d._id !== excludeDeckId,
  );
  if (duplicate) {
    throw new Error("A deck with this name already exists");
  }
}

// For programmatic creates (imports, copies) that must not fail on a name
// collision: append " (2)", " (3)", ... until the name is free.
export async function resolveUniqueDeckName(ctx: QueryCtx, baseName: string): Promise<string> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  const decks = await ctx.db
    .query("userDecks")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .collect();
  const names = new Set(decks.map((d) => d.deckName.toLowerCase()));

  if (!names.has(baseName.toLowerCase())) return baseName;
  for (let n = 2; ; n++) {
    const candidate = `${baseName} (${n})`;
    if (!names.has(candidate.toLowerCase())) return candidate;
  }
}

export async function verifyDeckOwnership(ctx: QueryCtx, deckDocId: Id<"userDecks">) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  const deck = await ctx.db.get(deckDocId);
  if (!deck) throw new Error("Deck not found");
  if (deck.userId !== identity.subject) throw new Error("Unauthorized");
  return deck;
}

export async function getOwnedDeckVocabItems(ctx: QueryCtx, deckId: Id<"userDecks">) {
  await verifyDeckOwnership(ctx, deckId);
  return getUserDeckVocabItems(ctx, deckId);
}

export async function getDeckWithVocab(ctx: QueryCtx, deckId: Id<"userDecks">) {
  const deck = await verifyDeckOwnership(ctx, deckId);
  const vocabItems = await getUserDeckVocabItems(ctx, deckId);
  return { deck, vocabItems };
}

// Read access: the owner, or anyone when the deck has a public share.
export async function verifyDeckReadAccess(ctx: QueryCtx, deckDocId: Id<"userDecks">) {
  const deck = await ctx.db.get(deckDocId);
  if (!deck) throw new Error("Deck not found");

  const identity = await ctx.auth.getUserIdentity();
  if (identity && deck.userId === identity.subject) return deck;
  if (await isShared(ctx, deckDocId)) return deck;
  throw new Error("Unauthorized");
}

// ===== Mutation Helpers =====

export async function createDeck(
  ctx: MutationCtx,
  data: {
    deckName: string;
    deckDescription?: string;
    folderId?: Id<"userDeckFolders">;
    source: DeckSource;
    originalDeckId?: Id<"userDecks">;
    allowedPracticeModes: PracticeMode[];
  },
) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  if (data.folderId) await verifyFolderOwnership(ctx, data.folderId);
  await checkDeckNameUnique(ctx, data.deckName);

  return ctx.db.insert("userDecks", {
    ...data,
    userId: identity.subject,
  });
}

export function createUserDeck(
  ctx: MutationCtx,
  args: { deckName: string; deckDescription?: string; folderId?: Id<"userDeckFolders"> },
) {
  return createDeck(ctx, {
    ...args,
    source: "user",
    allowedPracticeModes: ["meanings", "spellings"],
  });
}

export async function createUserDeckWithVocab(
  ctx: MutationCtx,
  args: {
    deckName: string;
    deckDescription?: string;
    folderId?: Id<"userDeckFolders">;
    allowedPracticeModes: PracticeMode[];
    vocabularyItems: DeckVocabItemInput[];
  },
) {
  const { vocabularyItems, ...deckData } = args;
  const deckId = await createDeck(ctx, { ...deckData, source: "user" });
  await createDeckVocabItems(ctx, deckId, vocabularyItems);
  return deckId;
}

export async function updateDeckWithVocab(
  ctx: MutationCtx,
  deckId: Id<"userDecks">,
  updates: {
    deckName?: string;
    deckDescription?: string;
    folderId?: Id<"userDeckFolders"> | null;
    allowedPracticeModes?: PracticeMode[];
  },
  vocabularyItems?: DeckVocabItemInput[],
) {
  await updateDeck(ctx, deckId, updates);
  if (vocabularyItems !== undefined) {
    await replaceDeckVocabItems(ctx, deckId, vocabularyItems);
  }
  return deckId;
}

export async function copyDeck(
  ctx: MutationCtx,
  args: {
    deckId: string;
    deckSource: "user" | "built-in";
    deckName: string;
    deckDescription?: string;
    folderId?: Id<"userDeckFolders">;
  },
) {
  if (args.deckSource === "user") {
    const docId = ctx.db.normalizeId("userDecks", args.deckId);
    if (!docId) throw new Error("Deck not found");
    await verifyDeckReadAccess(ctx, docId);
  }
  const vocabItems = await fetchDeckVocab(ctx, args.deckId, args.deckSource);
  const newDeckId = await createUserDeck(ctx, {
    deckName: args.deckName,
    deckDescription: args.deckDescription,
    folderId: args.folderId,
  });
  await createDeckVocabItems(ctx, newDeckId, vocabItems);
  return newDeckId;
}

// Resolves any deck ID (built-in or user) and returns its vocabulary.
export async function getResolvedDeckVocab(ctx: QueryCtx, deckId: string) {
  const deck = await resolveDeckById(ctx, deckId);
  if (!deck) return [];
  return fetchDeckVocab(ctx, deck.id, deck.source);
}

export async function updateDeck(
  ctx: MutationCtx,
  deckId: Id<"userDecks">,
  updates: {
    deckName?: string;
    deckDescription?: string;
    folderId?: Id<"userDeckFolders"> | null;
    allowedPracticeModes?: PracticeMode[];
  },
) {
  await verifyDeckOwnership(ctx, deckId);
  if (updates.folderId) await verifyFolderOwnership(ctx, updates.folderId);
  if (updates.deckName !== undefined) {
    await checkDeckNameUnique(ctx, updates.deckName, deckId);
  }

  // Convert null to undefined for Convex (optional fields)
  const patch: {
    deckName?: string;
    deckDescription?: string;
    folderId?: Id<"userDeckFolders">;
    allowedPracticeModes?: PracticeMode[];
  } = {};
  if (updates.deckName !== undefined) {
    patch.deckName = updates.deckName;
  }
  if (updates.deckDescription !== undefined) {
    patch.deckDescription = updates.deckDescription;
  }
  if (updates.folderId !== undefined) {
    patch.folderId = updates.folderId ?? undefined;
  }
  if (updates.allowedPracticeModes !== undefined) {
    patch.allowedPracticeModes = updates.allowedPracticeModes;
  }
  await ctx.db.patch(deckId, patch);
}

export async function resolveDeckById(ctx: QueryCtx, deckId: string): Promise<UnifiedDeck | null> {
  const builtIn = getBuiltInDecks().find((d) => d.id === deckId);
  if (builtIn) return builtIn;

  const docId = ctx.db.normalizeId("userDecks", deckId);
  if (!docId) return null;
  const userDeck = await ctx.db.get(docId);
  if (!userDeck) return null;
  const identity = await ctx.auth.getUserIdentity();
  if (!identity || userDeck.userId !== identity.subject) return null;
  return {
    id: userDeck._id,
    deckName: userDeck.deckName,
    deckDescription: userDeck.deckDescription,
    folderId: userDeck.folderId,
    source: "user",
  };
}

export async function deleteDeck(ctx: MutationCtx, deckId: Id<"userDecks">) {
  await verifyDeckOwnership(ctx, deckId);

  await deleteDeckVocabItems(ctx, deckId);
  await deleteShareForDeck(ctx, deckId);
  await ctx.db.delete(deckId);
}
