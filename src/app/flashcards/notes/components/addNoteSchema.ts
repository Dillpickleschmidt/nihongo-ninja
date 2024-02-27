import { z } from "zod"

const questionSchema = z
  .string()
  .min(1, { message: "Question is required" })
  .max(1000, { message: "Question is too long" })

const answerSchema = z.string().max(1000, { message: "String is too long" })

export const addNoteSchema = z.object({
  question: questionSchema,
  answers: z.array(answerSchema).nonempty(),
})
