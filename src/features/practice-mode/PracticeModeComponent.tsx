import { createEffect, createMemo, JSX, Match, Switch } from "solid-js"
import { Card } from "@/types/vocab"
import { usePracticeModeContext } from "./context/PracticeModeContext"
import StartPage from "./components/pages/StartPage"
import ReviewPage from "./components/pages/ReviewPage"
import FinishPage from "./components/pages/FinishPage"
import PracticePage from "./components/pages/PracticePage"

type PracticeModeProps = {
  data: Card[]
  deckName: string | JSX.Element
}

export default function PracticeModeComponent(props: PracticeModeProps) {
  const context = usePracticeModeContext()
  const activeDeckSize = Math.min(props.data.length, 10)

  const shuffledData = createMemo(() =>
    // Shuffle if shuffleInput is true (default is true)
    context.store.shuffleInput
      ? [...props.data].sort(() => Math.random() - 0.5)
      : props.data,
  )

  createEffect(() => {
    // console.log("Effect running")
    const newActiveDeck = shuffledData().slice(0, activeDeckSize) // activeDeck is the first 10 cards
    context.setStore("data", shuffledData())
    context.setStore("activeDeck", newActiveDeck)
    context.setStore("cardsTakenFromDataCount", activeDeckSize)
  })

  context.setStore(
    "enabledAnswerCategories",
    extractUniqueCategories(props.data),
  )
  context.setStore("activeDeckSize", activeDeckSize)

  return (
    <Switch fallback={<div>Invalid state</div>}>
      <Match when={context.store.currentPage === "start"}>
        <StartPage deckName={props.deckName} />
      </Match>
      <Match when={context.store.currentPage === "practice"}>
        <PracticePage />
      </Match>
      <Match when={context.store.currentPage === "review"}>
        <ReviewPage />
      </Match>
      <Match when={context.store.currentPage === "finish"}>
        <FinishPage />
      </Match>
    </Switch>
  )
}

function extractUniqueCategories(data: Card[]): string[] {
  const categories = new Set<string>()
  data.forEach((card) => {
    card.answerCategories.forEach((category) => {
      categories.add(category.category)
    })
  })
  return Array.from(categories)
}
