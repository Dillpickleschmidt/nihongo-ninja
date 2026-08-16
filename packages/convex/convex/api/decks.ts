import { v } from "convex/values";

import { mutation, query } from "../_generated/server";
import * as Decks from "../model/decks";
import { practiceModeValidator, deckVocabItemInputValidator } from "../validators";

/**
 * Create a new user deck
 */
export const createDeck = mutation({
  args: {
    deckName: v.string(),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.id("userDeckFolders")),
  },
  handler: (ctx, args) => Decks.createUserDeck(ctx, args),
});

/**
 * Update a deck (rename, update description, or move to folder)
 */
export const updateDeck = mutation({
  args: {
    deckId: v.id("userDecks"),
    deckName: v.optional(v.string()),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.union(v.id("userDeckFolders"), v.null())),
  },
  handler: (ctx, args) => {
    const { deckId, ...updates } = args;
    return Decks.updateDeck(ctx, deckId, updates);
  },
});

/**
 * Delete a deck (also deletes all vocabulary items)
 */
export const deleteDeck = mutation({
  args: { deckId: v.id("userDecks") },
  handler: (ctx, { deckId }) => Decks.deleteDeck(ctx, deckId),
});

/**
 * Create a new deck with vocabulary items (atomic operation)
 */
export const createDeckWithVocab = mutation({
  args: {
    deckName: v.string(),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.id("userDeckFolders")),
    allowedPracticeModes: v.array(practiceModeValidator),
    vocabularyItems: v.array(deckVocabItemInputValidator),
  },
  handler: (ctx, args) => Decks.createUserDeckWithVocab(ctx, args),
});

/**
 * Update a deck and replace all vocabulary items (atomic operation)
 */
export const updateDeckWithVocab = mutation({
  args: {
    deckId: v.id("userDecks"),
    deckName: v.optional(v.string()),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.union(v.id("userDeckFolders"), v.null())),
    allowedPracticeModes: v.optional(v.array(practiceModeValidator)),
    vocabularyItems: v.optional(v.array(deckVocabItemInputValidator)),
  },
  handler: (ctx, args) => {
    const { deckId, vocabularyItems, ...updates } = args;
    return Decks.updateDeckWithVocab(ctx, deckId, updates, vocabularyItems);
  },
});

/**
 * Get vocabulary items for a deck
 */
export const getUserDeckVocabItems = query({
  args: { deckId: v.id("userDecks") },
  handler: (ctx, { deckId }) => Decks.getOwnedDeckVocabItems(ctx, deckId),
});

/**
 * Get deck metadata and vocabulary items together (for editing)
 */
export const getDeckWithVocab = query({
  args: { deckId: v.id("userDecks") },
  handler: (ctx, { deckId }) => Decks.getDeckWithVocab(ctx, deckId),
});

/**
 * Copy a deck with all vocabulary items
 */
export const copyDeck = mutation({
  args: {
    deckId: v.string(),
    deckSource: v.union(v.literal("user"), v.literal("built-in")),
    deckName: v.string(),
    deckDescription: v.optional(v.string()),
    folderId: v.optional(v.id("userDeckFolders")),
  },
  handler: (ctx, args) => Decks.copyDeck(ctx, args),
});
