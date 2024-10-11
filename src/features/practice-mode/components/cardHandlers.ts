import { Card } from "@/types/vocab"

export type PageOptions = "start" | "practice" | "review" | "finished"

export function handleNextQuestion(
  isAnswerCorrect: boolean,
  activeCards: Card[],
  inactiveCards: Card[],
  currentCardIndex: number,
  setCurrentCardIndex: (index: number) => void,
  setHasUserAnswered: (answered: boolean) => void,
  setActiveCards: (cards: Card[]) => void,
  setInactiveCards: (cards: Card[]) => void,
  setCurrentPage: (page: PageOptions) => void,
  recentlySeenCards: Card[] | null,
  setRecentlySeenCards: (cards: Card[] | null) => void,
  unslicedData: Card[],
) {
  setHasUserAnswered(false)

  if (activeCards.length === 0) {
    console.error("There are 0 cards to practice")
    return
  }

  const currentCard = { ...activeCards[currentCardIndex] }
  const currentCardStyle = currentCard.cardStyle

  if (!isAnswerCorrect) {
    updateWrongAnswerCount(unslicedData, activeCards, currentCardIndex)
    currentCard.wrongAnswerCount++
  } else {
    currentCard.wrongAnswerCount = 0
  }

  addToRecentlySeenCards(
    recentlySeenCards,
    setRecentlySeenCards,
    currentCard,
    currentCardIndex,
  )

  if (currentCardIndex <= 3) {
    handleInitialPhase(
      isAnswerCorrect,
      currentCardStyle,
      activeCards,
      currentCardIndex,
      setCurrentCardIndex,
    )
  } else {
    handleMainPhase(
      isAnswerCorrect,
      currentCardStyle,
      activeCards,
      inactiveCards,
      currentCardIndex,
      setActiveCards,
      setInactiveCards,
      setCurrentPage,
    )
  }
}

function updateWrongAnswerCount(
  unslicedData: Card[],
  activeCards: Card[],
  currentCardIndex: number,
) {
  const activeCardKey = activeCards[currentCardIndex].key
  const matchingEntry = unslicedData.find((card) => card.key === activeCardKey)

  if (matchingEntry) {
    matchingEntry.wrongAnswerCount++
    console.log(
      `Wrong answer count for ${matchingEntry.key}: ${matchingEntry.wrongAnswerCount}`,
    )
  }
}

function addToRecentlySeenCards(
  recentlySeenCards: Card[] | null,
  setRecentlySeenCards: (cards: Card[] | null) => void,
  currentCard: Card,
  currentCardIndex: number,
) {
  const currentCardCopy = { ...currentCard }
  const newRecentlySeenCards = recentlySeenCards ? [...recentlySeenCards] : []
  newRecentlySeenCards.push(currentCardCopy)
  setRecentlySeenCards(newRecentlySeenCards)
}

function handleInitialPhase(
  isAnswerCorrect: boolean,
  currentCardStyle: string,
  activeCards: Card[],
  currentCardIndex: number,
  setCurrentCardIndex: (index: number) => void,
) {
  if (isAnswerCorrect) {
    if (currentCardStyle === "multiple-choice") {
      activeCards[currentCardIndex].cardStyle = "write"
    }
  } else {
    activeCards[currentCardIndex].cardStyle = "multiple-choice"
  }
  incrementIndex(currentCardIndex, setCurrentCardIndex)
}

function handleMainPhase(
  isAnswerCorrect: boolean,
  currentCardStyle: string,
  activeCards: Card[],
  inactiveCards: Card[],
  currentCardIndex: number,
  setActiveCards: (cards: Card[]) => void,
  setInactiveCards: (cards: Card[]) => void,
  setCurrentPage: (page: PageOptions) => void,
) {
  if (isAnswerCorrect) {
    if (currentCardStyle === "write") {
      if (inactiveCards.length === 0) {
        cycleCards(
          "done",
          activeCards,
          currentCardIndex,
          setActiveCards,
          setCurrentPage,
        )
        return
      }
      removeAndAddNewCard(
        activeCards,
        inactiveCards,
        currentCardIndex,
        setActiveCards,
        setInactiveCards,
      )
    } else {
      cycleCards("write", activeCards, currentCardIndex, setActiveCards)
    }
  } else {
    cycleCards("multiple-choice", activeCards, currentCardIndex, setActiveCards)
  }
}

function cycleCards(
  cardType: "write" | "multiple-choice" | "done",
  activeCards: Card[],
  currentCardIndex: number,
  setActiveCards: (cards: Card[]) => void,
  setCurrentPage?: (page: PageOptions) => void,
) {
  activeCards[currentCardIndex].cardStyle = cardType

  let updatedActiveCards = [
    ...activeCards.slice(1, activeCards.length),
    ...activeCards.slice(0, 1),
  ]

  let loopIterations = 0

  while (updatedActiveCards[currentCardIndex].cardStyle === "done") {
    updatedActiveCards.push(updatedActiveCards.shift()!)
    loopIterations++
    console.log("loopIterations", loopIterations)

    if (loopIterations === updatedActiveCards.length) {
      console.log("No more cards to practice!")
      setCurrentPage?.("finished")
      return
    }
  }

  setActiveCards(updatedActiveCards)
}

function incrementIndex(
  currentCardIndex: number,
  setCurrentCardIndex: (index: number) => void,
) {
  const newCardIndex = currentCardIndex + 1
  setCurrentCardIndex(newCardIndex)
}

function removeAndAddNewCard(
  activeCards: Card[],
  inactiveCards: Card[],
  currentCardIndex: number,
  setActiveCards: (cards: Card[]) => void,
  setInactiveCards: (cards: Card[]) => void,
) {
  if (inactiveCards.length === 0) {
    console.error("No inactive cards available to add.")
    return
  }

  const [newCard, ...remainingInactiveCards] = inactiveCards

  const updatedActiveCards = [...activeCards]
  updatedActiveCards[currentCardIndex] = newCard

  setInactiveCards(remainingInactiveCards)
  setActiveCards(updatedActiveCards)

  cycleCards(
    "multiple-choice",
    updatedActiveCards,
    currentCardIndex,
    setActiveCards,
  )
}

export function updateCards(indices: number[], source: Card[]): Card[] {
  return indices.map((index) => source[index])
}
