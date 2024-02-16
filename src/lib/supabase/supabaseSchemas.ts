import { z } from "zod"

const cardSchema = z.object({
  cid: z.number().optional(),
  difficulty: z.number(),
  due: z.string().optional(),
  elapsed_days: z.number(),
  lapses: z.number(),
  last_review: z.string().nullable().optional(),
  nid: z.number(),
  reps: z.number(),
  scheduled_days: z.number(),
  stability: z.number(),
  state: z.enum(["0", "1", "2", "3"]),
})

const noteSchema = z.object({
  answer: z.string().optional(),
  cid: z.number().nullable().optional(),
  extend: z.unknown().nullable().optional(),
  nid: z.number(),
  question: z.string().optional(),
  source: z.string().optional(),
  sourceid: z.string().nullable().optional(),
  user_id: z.string(),
})
