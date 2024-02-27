import { z } from "zod"

const stringSchema = z.string().max(1000, { message: "String is too long" })

const optionalStringSchema = stringSchema.optional()

export const addNoteSchema = z.object({
  question: stringSchema,
  answers: z
    .array(z.union([stringSchema, optionalStringSchema]))
    .min(1, { message: "At least one answer is required" })
    .refine(
      (answers) => answers.some((answer) => answer && answer.length > 0),
      {
        message: "At least one non-empty answer is required",
      }
    ),
})
