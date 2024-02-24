import { z } from "zod"

export const addNoteSchema = z.object({
  question: z
    .string()
    .min(1, { message: "Question is required" })
    .max(1000, { message: "Question is too long" }),
  answer: z
    .string()
    .min(1, { message: "Answer is required" })
    .max(1000, { message: "Answer is too long" }),
})
