import { createEffect, createMemo, createSignal } from "solid-js"
import { usePracticeModeContext } from "./context/PracticeModeContext"
import { Card } from "@/types/vocab"
import PracticePage from "./components/pages/PracticePage"
import StartPage from "./components/pages/StartPage"
import ReviewPage from "./components/pages/ReviewPage"
import FinishPage from "./components/pages/FinishPage"
import { split10Cards } from "./util/helperFunctions"

type PracticeModeProps = {
  deckName: string
  data: Card[]
}

export default function PracticeMode(props: PracticeModeProps) {
  const context = usePracticeModeContext()
  const [shuffleInput, setShuffleInput] = createSignal(true)

  createEffect(() => {
    if (props.data.length > 0) {
      const newData = shuffleInput()
        ? [...props.data].sort(() => Math.random() - 0.5)
        : props.data
      context.setData(newData)
    }
  })

  const splitData = createMemo(() => split10Cards(context.data()))

  const activeCards = createMemo(() => splitData().slicedData)
  const inactiveCards = createMemo(() => splitData().remainingData)
  const unslicedData = createMemo(() => splitData().unslicedData)

  const uniqueCategories = createMemo(() =>
    extractUniqueCategories(unslicedData()),
  )

  createEffect(() => {
    context.setEnabledAnswerCategories(uniqueCategories())
  })

  const isDataReady = createMemo(
    () => activeCards().length > 0 || inactiveCards().length > 0,
  )

  const renderPage = () => {
    switch (context.currentPage()) {
      case "start":
        return (
          <StartPage
            deckName={props.deckName}
            shuffleInput={shuffleInput()}
            setShuffleInput={setShuffleInput}
          />
        )
      case "practice":
        return isDataReady() ? (
          <PracticePage
            unslicedData={unslicedData()}
            activeCards={activeCards()}
            setActiveCards={(cards) =>
              context.setData([...cards, ...inactiveCards()])
            }
            inactiveCards={inactiveCards()}
            setInactiveCards={(cards) =>
              context.setData([...activeCards(), ...cards])
            }
          />
        ) : null
      case "review":
        return <ReviewPage />
      case "finished":
        return <FinishPage />
      default:
        return null
    }
  }

  return <>{renderPage()}</>
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
