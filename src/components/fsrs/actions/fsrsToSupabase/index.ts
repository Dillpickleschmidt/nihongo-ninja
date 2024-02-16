import {
  createEmptyCard,
  Card as FSRSCard,
  State as FSRSState,
  Rating as FSRSRating,
  fixState,
} from "ts-fsrs"
import { Card, State, Rating } from "ts-fsrs"

interface CardSupabaseUnChecked extends Omit<Card, "cid" | "nid"> {
  cid?: number
  nid?: number
}

export function createEmptyCardBySupabase(): CardSupabaseUnChecked {
  const card = createEmptyCard()
  return {
    ...card,
    state: State.New,
    last_review: undefined,
  }
}
