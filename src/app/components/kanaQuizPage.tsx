"use client"
import { useState, useEffect } from "react"
import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"
import { CharacterBox } from "@/app/components/CharacterQuizBoxes"
import HandleBeforeUnload from "@/app/util/handleBeforeUnload"

import { Noto_Sans_JP } from "next/font/google"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

type KanaQuizProps = {
  kana: { hiragana: string; romaji: string }[]
  nextLesson: string
}

export default function KanaQuiz({ kana, nextLesson }: KanaQuizProps) {
  HandleBeforeUnload()

  const [showResults, setShowResults] = useState(false)
  const [numCorrect, setNumCorrect] = useState(0)

  // Displays all the character boxes
  const [characterBoxes, setCharacterBoxes] = useState<
    {
      hiragana: string
      romaji: string
      userInput: string
      isCorrect: boolean
    }[]
  >([])

  useEffect(() => {
    setCharacterBoxes(
      [...kana]
        .sort(() => Math.random() - 0.5)
        .map((kanaItem) => ({ ...kanaItem, userInput: "", isCorrect: false }))
    )
  }, [])

  const handleInputChange = (index: number, newUserInput: string) => {
    // Update the Character box's userInput property and isCorrect property
    setCharacterBoxes((prevCharacterBoxes) => {
      const newCharacterBoxes = [...prevCharacterBoxes]
      newCharacterBoxes[index].userInput = newUserInput

      // Update isCorrect property
      if (newUserInput === newCharacterBoxes[index].romaji) {
        newCharacterBoxes[index].isCorrect = true
      } else {
        newCharacterBoxes[index].isCorrect = false
      }

      const numCorrect = characterBoxes.filter((box) => box.isCorrect).length
      setNumCorrect(numCorrect)

      return newCharacterBoxes
    })
  }

  return (
    <Dialog
      variant={"xl"}
      className="bg-[#F6E7D2]"
      background="/wavy-pattern.jpg"
      showAlertOnClose={true}
    >
      <div className="text-center">
        {showResults ? (
          <>
            <h1 className="pt-12 mb-4 text-6xl font-semibold">
              {numCorrect / kana.length <= 0.5
                ? "YOU FAILED! 😰"
                : numCorrect / kana.length <= 0.8
                ? "You're getting there! 😎"
                : "Nice job! 🥳"}
            </h1>
            <h2 className="text-2xl">
              You got {numCorrect} out of {kana.length} correct.{" "}
              {numCorrect / kana.length <= 0.5
                ? "Review the terms and try again!"
                : numCorrect / kana.length <= 0.8
                ? "Try again and see if you can get 80%!"
                : "Keep it up!"}
            </h2>
          </>
        ) : (
          <>
            <h1 className="pt-12 mb-4 text-6xl font-semibold">
              Type the Romaji
            </h1>
            <h2 className="text-2xl">Press enter to submit.</h2>
            <h2 className="text-2xl">Take it as many times as you like! 👍</h2>
          </>
        )}
      </div>
      <div
        className={`${JapaneseFont.className} container grid grid-cols-[repeat(auto-fill,minmax(170px,_1fr))] p-3 mx-auto mt-12 text-center gap-3 text-[#F8F5E9]`}
      >
        {characterBoxes.map((characterBox, index) => (
          <CharacterBox
            key={characterBox.hiragana}
            character={characterBox.hiragana}
            userInput={characterBox.userInput}
            onInputChange={(newUserInput) =>
              handleInputChange(index, newUserInput)
            }
            disabled={showResults}
            className={`${showResults && "shadow-none"}
            ${
              showResults &&
              characterBox.isCorrect &&
              "border-[3px] border-green-500"
            }`}
            inputTextColor={
              showResults && !characterBox.isCorrect
                ? "text-red-500"
                : showResults && characterBox.isCorrect
                ? "text-white"
                : undefined
            }
            innerBorderColor={
              showResults && !characterBox.isCorrect
                ? "border-red-500"
                : showResults && characterBox.isCorrect
                ? "border-green-500"
                : undefined
            }
          />
        ))}
      </div>
      <div className="flex flex-row justify-end w-full">
        {showResults ? (
          <Button
            className="mt-8 mb-16 mr-12 lg:mb-24 lg:mr-24"
            link={nextLesson}
          >
            Next Lesson {"->"}
          </Button>
        ) : (
          <Button
            className="mt-8 mb-16 mr-12 lg:mb-24 lg:mr-24"
            onClick={() => setShowResults(true)}
          >
            Submit
          </Button>
        )}
      </div>
    </Dialog>
  )
}
