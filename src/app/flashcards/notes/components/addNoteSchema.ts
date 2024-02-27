import { z } from "zod"

const questionSchema = z
  .string()
  .min(1, { message: "Question is required" })
  .max(1000, { message: "Question is too long" })

const answerSchema = z
  .string()
  .max(1000, { message: "Answer is too long" })
  .optional()

export const addNoteSchema = z.object({
  question: questionSchema,
  answers: z
    .array(answerSchema)
    .refine(
      (answers) =>
        answers
          .filter((answer) => answer !== null)
          .some((answer) => answer && answer.length > 0),
      {
        message: "At least one answer is required",
      }
    ),
})
