import { useState, useEffect } from "react"

type KanaItem = {
  hiragana: string
  romaji: string[]
}

type CharacterBoxState = KanaItem & {
  userInput: string
  isCorrect: boolean
}

export const useKanaQuiz = (kana: KanaItem[]) => {
  const [showResults, setShowResults] = useState(false)
  const [numCorrect, setNumCorrect] = useState(0)
  const [characterBoxes, setCharacterBoxes] = useState<CharacterBoxState[]>([])

  useEffect(() => {
    setCharacterBoxes(
      kana
        .sort(() => Math.random() - 0.5)
        .map((kanaItem) => ({ ...kanaItem, userInput: "", isCorrect: false })),
    )
  }, [kana])

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
