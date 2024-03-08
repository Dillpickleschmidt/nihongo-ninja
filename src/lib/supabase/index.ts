import { State } from "ts-fsrs"

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Note = {
  answers: string[]
  answers_raw: string[]
  cid?: number | null
  created_by?: string
  nid?: number
  question: string
  question_raw: string
  style: string
  user_id: string
}

export type Card = {
  cid?: number
  difficulty: number
  due?: string
  elapsed_days: number
  lapses: number
  last_review?: string | null
  nid: number
  reps: number
  scheduled_days: number
  stability: number
  state?: State
}
