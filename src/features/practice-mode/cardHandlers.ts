import { Card } from "@/types/vocab"
import {
  usePracticeModeContext,
  type PracticeModeContextType,
  type CurrentPage,
} from "./context/PracticeModeContext"

export function handleNextQuestion(context: PracticeModeContextType) {
  const currentCard = context.store.activeDeck[context.store.currentCardIndex]

  // Update wrong answer count if answer is incorrect
  if (!context.store.isAnswerCorrect) {
    const wrongAnswerCount = getWrongAnswerCount(
      context.store.data,
      context.store.activeDeck,
      context.store.currentCardIndex,
    )
    const cardIndex = context.store.data.findIndex(
      (card) => card.key === currentCard.key,
    )
    context.setStore("data", [cardIndex], {
      wrongAnswerCount: wrongAnswerCount + 1,
    })
  }
  context.setStore(
    // append current card to recently seen cards
    "recentlySeenCards",
    context.store.recentlySeenCards.length,
    currentCard,
  )

  handleMainPhase(context)

  context.setStore("hasUserAnswered", false)
  context.setStore("isAnswerCorrect", false)
}

// gets active card wrong answer count property
function getWrongAnswerCount(
  data: Card[],
  activeDeck: Card[],
  currentCardIndex: number,
) {
  const activeCardKey = activeDeck[currentCardIndex].key
  const matchingEntry = data.find((card) => card.key === activeCardKey)

  let wrongAnswerCount = 0

  if (matchingEntry) {
    wrongAnswerCount = matchingEntry.wrongAnswerCount
    // console.log(
    //   `Wrong answer count for ${matchingEntry.key}: ${matchingEntry.wrongAnswerCount}`,
    // )
  }
  return wrongAnswerCount
}

function handleMainPhase(context: PracticeModeContextType) {
  const currentCard = context.store.activeDeck[context.store.currentCardIndex]
  if (context.store.isAnswerCorrect) {
    if (currentCard.cardStyle === "write") {
      if (context.store.cardsTakenFromDataCount >= context.store.data.length) {
        cycleCards(context, "done")
      } else {
        removeAndAddNewCard(context)
      }
    } else {
      // turn it into write and cycle
      cycleCards(context, "write")
    }
  } else {
    // if incorrect answer
    // cycle without changes
    cycleCards(context, "multiple-choice")
  }
}

function removeAndAddNewCard(context: PracticeModeContextType) {
  const cardsTakenFromDataCount = context.store.cardsTakenFromDataCount
  const activeDeck = context.store.activeDeck
  const nextCardToAdd = context.store.data[cardsTakenFromDataCount]
  const newActiveDeck = [
    ...activeDeck.slice(1, activeDeck.length),
    nextCardToAdd,
  ]
  context.setStore("activeDeck", newActiveDeck)
  context.setStore("cardsTakenFromDataCount", (prev) => prev + 1)
}

// if (context.store.cardsTakenFromDataCount === context.store.data.length) {
//   // mark as done and cycle
// }

type CardStyle = "write" | "multiple-choice" | "done"

function cycleCards(context: PracticeModeContextType, cardStyle: CardStyle) {
  const activeDeck = context.store.activeDeck
  const newActiveDeck = [...activeDeck.slice(1), { ...activeDeck[0] }]

  switch (cardStyle) {
    case "multiple-choice":
      // console.log("converting to multiple-choice")
      newActiveDeck[activeDeck.length - 1].cardStyle = "multiple-choice"
      break
    case "write":
      // console.log("converting to write")
      newActiveDeck[activeDeck.length - 1].cardStyle = "write"
      break
    default:
      newActiveDeck[activeDeck.length - 1].cardStyle = "done"
  }

  let loopIterations = 0
  while (newActiveDeck[context.store.currentCardIndex].cardStyle === "done") {
    newActiveDeck.push(newActiveDeck.shift()!)
    loopIterations++
    console.log("loopIterations", loopIterations)

    if (loopIterations === newActiveDeck.length) {
      console.log("No more cards to practice!")
      context.setStore("currentPage", "finish")
      return
    }
  }

  // console.log(
  //   "New active deck: ",
  //   newActiveDeck.map((card) => ({
  //     key: card.key,
  //     cardStyle: card.cardStyle,
  //     wrongAnswerCount: card.wrongAnswerCount,
  //   })),
  // )
  context.setStore("activeDeck", newActiveDeck)
}
