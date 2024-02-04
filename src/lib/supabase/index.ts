export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Card = {
  cid: number
  difficulty: number
  due: string
  elapsed_days: number
  lapses: number
  last_review: string | null
  nid: number
  reps: number
  scheduled_days: number
  stability: number
  state: State
}

export type Note = {
  answer: string
  cid: number | null
  extend: Json | null
  nid: number
  question: string
  source: string
  sourceid: string | null
  uid: string
}

declare enum State {
  New = 0,
  Learning = 1,
  Review = 2,
  Relearning = 3,
}
