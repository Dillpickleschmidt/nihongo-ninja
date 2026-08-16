import { Infer, v } from "convex/values";

import { MutationCtx, QueryCtx } from "../_generated/server";
import { sentenceAnswerTokenValidator, sentenceAnswerValidator } from "../validators";

export const sentencePracticeQuestionInputValidator = v.object({
  setId: v.string(),
  order: v.number(),
  english: v.string(),
  hint: v.optional(v.string()),
  answers: v.array(sentenceAnswerValidator),
  canonicalAnswerTokens: v.array(v.array(sentenceAnswerTokenValidator)),
});

type QuestionInput = Infer<typeof sentencePracticeQuestionInputValidator>;

export async function getQuestionsBySetId(ctx: QueryCtx, setId: string) {
  const questions = await ctx.db
    .query("sentencePracticeQuestions")
    .withIndex("by_setId", (q) => q.eq("setId", setId))
    .collect();

  return questions.sort((a, b) => a.order - b.order);
}

export async function deleteQuestionsBySetId(ctx: MutationCtx, setId: string) {
  const existing = await ctx.db
    .query("sentencePracticeQuestions")
    .withIndex("by_setId", (q) => q.eq("setId", setId))
    .collect();

  for (const question of existing) {
    await ctx.db.delete(question._id);
  }

  return { deleted: existing.length };
}

export async function insertQuestionsForSet(
  ctx: MutationCtx,
  setId: string,
  questions: QuestionInput[],
) {
  for (const question of questions) {
    if (question.setId !== setId) {
      throw new Error(`Question setId ${question.setId} does not match ${setId}`);
    }
    await ctx.db.insert("sentencePracticeQuestions", question);
  }

  return { inserted: questions.length };
}
