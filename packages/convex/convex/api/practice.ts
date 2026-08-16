import { v } from "convex/values";

import { query } from "../_generated/server";
import * as Practice from "../model/practice";
import { practiceModeValidator } from "../validators";

export const getPracticeData = query({
  args: {
    deckId: v.string(),
    mode: practiceModeValidator,
  },
  handler: (ctx, args) => Practice.getDeckPracticeSessionData(ctx, args.deckId, args.mode),
});

export const getReviewSessionData = query({
  args: {
    mode: practiceModeValidator,
  },
  handler: (ctx, args) => Practice.getReviewOnlySessionData(ctx, args.mode),
});
