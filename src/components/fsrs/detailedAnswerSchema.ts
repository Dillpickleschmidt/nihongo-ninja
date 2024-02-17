import { z } from "zod"

export const DetailedAnswerSchema = z.object({
  classification: z.string().optional(),
  part_of_speech: z.string().optional(),
  example_sentence: z.string().optional(),
  example_sentence_translation: z.string().optional(),
  explanation: z.string().optional(),
  pronunciation: z.string().optional(),
  video: z.string().optional(),
})

type DetailedAnswer = z.infer<typeof DetailedAnswerSchema>
