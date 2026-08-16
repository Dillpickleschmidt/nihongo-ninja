import { v } from "convex/values";

import { query } from "../_generated/server";
import * as Hierarchy from "../model/hierarchy";

/**
 * Get deck metadata + vocabulary with full kanji/radical hierarchy
 * Accepts any deck ID (built-in or user)
 */
export const getDeckHierarchy = query({
  args: {
    deckId: v.string(),
  },
  handler: (ctx, { deckId }) => Hierarchy.getDeckHierarchy(ctx, deckId),
});
