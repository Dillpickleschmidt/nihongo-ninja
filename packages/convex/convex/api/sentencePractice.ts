import { v } from "convex/values";

import { internalMutation, query } from "../_generated/server";
import * as SentencePractice from "../model/sentencePractice";

/**
 * Get sentence practice questions for a given set ID, sorted by order
 */
export const getQuestionsBySetId = query({
  args: { setId: v.string() },
  handler: (ctx, { setId }) => SentencePractice.getQuestionsBySetId(ctx, setId),
});

// The write operations are internal: curriculum content is seeded by scripts
// (`npx convex run`), never by clients.

export const deleteQuestionsBySetId = internalMutation({
  args: { setId: v.string() },
  handler: (ctx, { setId }) => SentencePractice.deleteQuestionsBySetId(ctx, setId),
});

export const insertQuestionsForSet = internalMutation({
  args: {
    setId: v.string(),
    questions: v.array(SentencePractice.sentencePracticeQuestionInputValidator),
  },
  handler: (ctx, { setId, questions }) =>
    SentencePractice.insertQuestionsForSet(ctx, setId, questions),
});
