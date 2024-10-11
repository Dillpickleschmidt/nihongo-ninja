import { createSignal, createEffect } from "solid-js"

type KanaItem = {
  hiragana: string
  romaji: string[]
}

type CharacterBoxState = KanaItem & {
  userInput: string
  isCorrect: boolean
}

export const useKanaQuiz = (kana: KanaItem[]) => {
  const [showResults, setShowResults] = createSignal(false)
  const [numCorrect, setNumCorrect] = createSignal(0)
  const [characterBoxes, setCharacterBoxes] = createSignal<CharacterBoxState[]>(
    [],
  )

  createEffect(() => {
    setCharacterBoxes(
      kana
        .sort(() => Math.random() - 0.5)
        .map((kanaItem) => ({ ...kanaItem, userInput: "", isCorrect: false })),
    )
  })

  const handleInputChange = (index: number, newUserInput: string) => {
    setCharacterBoxes((prevCharacterBoxes) => {
      const newCharacterBoxes = [...prevCharacterBoxes]
      newCharacterBoxes[index].userInput = newUserInput
      newCharacterBoxes[index].isCorrect =
        newCharacterBoxes[index].romaji.includes(newUserInput)
      setNumCorrect(newCharacterBoxes.filter((box) => box.isCorrect).length)
      return newCharacterBoxes
    })
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  return {
    characterBoxes,
    showResults,
    numCorrect,
    handleInputChange,
    handleSubmit,
  }
}
