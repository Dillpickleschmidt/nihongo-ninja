import { Card, Revlog, State } from "ts-fsrs"
import { Database } from "./lib/supabase/types"

declare enum State {
  New = 0,
  Learning = 1,
  Review = 2,
  Relearning = 3,
}

export declare module "ts-fsrs" {
  interface CardSupabase extends Card {
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
  interface RevlogSupabase extends Revlog {
    cid: number
    difficulty: number
    due: string
    elapsed_days: number
    grade: Database["public"]["Enums"]["rating"]
    last_elapsed_days: number
    lid: string
    review: string
    scheduled_days: number
    stability: number
    state: Database["public"]["Enums"]["state"]
  }
}

interface NodeData {
  question: string
  answer: string
  extend: string
  source: string
}

export type ExcludeReLearning<T> = Exclude<T, State.Relearning>

type StateBox = ExcludeReLearning<State>
// StateBox:
// 0: New
// 1: Learning
// 2: Review

export type FSRSPutParams = {
  uid: number
  request_retention: number
  maximum_interval: number
  w: number[]
  enable_fuzz: boolean
  card_limit: number
}
