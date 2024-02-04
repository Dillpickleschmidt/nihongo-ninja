import {
  createEmptyCard,
  Card as FSRSCard,
  State as FSRSState,
  Rating as FSRSRating,
  fixState,
} from "ts-fsrs"
import { Card } from "@/lib/supabase/index"
import { State, Rating } from "ts-fsrs"

interface CardSupabaseUnChecked
  extends Omit<Card, "cid" | "nid" | "last_review" | "state" | "due"> {
  cid?: number
  nid?: number
  last_review?: Date
  state: State
  due: Date
}

export function createEmptyCardBySupabase(): CardSupabaseUnChecked {
  const card = createEmptyCard()
  return {
    ...card,
    state: State.New,
    last_review: undefined,
  }
}

export function transferSupabaseCardToCard(card: Card): FSRSCard {
  const state = fixState(card.state)
  return {
    state: state,
    last_review: card.last_review || undefined,
    due: new Date(card.due), // Cast string to Date
    stability: card.stability,
    difficulty: card.difficulty,
    elapsed_days: card.elapsed_days,
    scheduled_days: card.scheduled_days,
    reps: card.reps,
    lapses: card.lapses,
  } as FSRSCard
}

export function stateFSRSStateToSupabase(state: FSRSState): State {
  const stateMap: { [key: number]: State } = {
    0: State.New,
    1: State.Learning,
    2: State.Review,
    3: State.Relearning,
  }
  return stateMap[state]
}

export function stateFSRSRatingToSupabase(rating: FSRSRating): Rating {
  const ratingMap: { [key: number]: Rating } = {
    0: Rating.Manual,
    1: Rating.Again,
    2: Rating.Hard,
    3: Rating.Good,
    4: Rating.Easy,
  }
  return ratingMap[rating]
}
