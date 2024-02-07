"use client"
import { useState, useEffect, useRef } from "react"
import Dialog from "@/components/Dialog"
import Button from "@/components/Button"
import { CharacterBox } from "@/components/kana-quiz/CharacterBox"
import WarningBeforeExit from "@/util/WarningBeforeExit"

// This program does the following:
// 1. Shuffle the kana
// 2. Map them to character boxes
// 3. Display the character boxes
// 4. When the user types in the character box, check if it matches the character

type KanaQuizProps = {
  kana: { hiragana: string; romaji: string[] }[]
  nextLesson: string
}

export default function KanaQuiz({ kana, nextLesson }: KanaQuizProps) {
  // Show a warning about losing progress if the user tries to leave the page
  WarningBeforeExit()

  // Create a reference to a DOM element for scrolling purposes
  const scrollRef = useRef<HTMLDivElement>(null)

  const [showResults, setShowResults] = useState(false)
  const [numCorrect, setNumCorrect] = useState(0)

  // A list of character boxes
  const [characterBoxes, setCharacterBoxes] = useState<
    {
      hiragana: string // The character
      romaji: string[] // The correct answer
      userInput: string // The user's input
      isCorrect: boolean // Whether the user's input matches the correct answer
    }[]
  >([])

  // Shuffle and initialize character boxes when the component mounts
  useEffect(() => {
    setCharacterBoxes(
      [...kana]
        .sort(() => Math.random() - 0.5)
        .map((kanaItem) => ({ ...kanaItem, userInput: "", isCorrect: false }))
    )
  }, [])

  // Fires in response to the user typing in a character box
  const handleInputChange = (index: number, newUserInput: string) => {
    // Update the Character box's userInput property and isCorrect property
    setCharacterBoxes((prevCharacterBoxes) => {
      const newCharacterBoxes = [...prevCharacterBoxes]
      newCharacterBoxes[index].userInput = newUserInput

      // Update isCorrect property
      if (newCharacterBoxes[index].romaji.includes(newUserInput)) {
        newCharacterBoxes[index].isCorrect = true
      } else {
        newCharacterBoxes[index].isCorrect = false
      }

      // Calculate and update the number of correct answers for scoring purposes
      const numCorrect = characterBoxes.filter((box) => box.isCorrect).length
      setNumCorrect(numCorrect)

      return newCharacterBoxes
    })
  }

  // Scroll to the top of the dialog
  const handleScrollDialog = () => {
    // scroll to the top of the dialog
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0)
    }
  }

  return (
    <Dialog
      variant={"xl"}
      className="bg-[#F6E7D2]"
      scrollRef={scrollRef}
      background="/wavy-pattern.jpg"
      showAlertOnClose={true}
    >
      <div className="text-center">
        {!showResults ? (
          <>
            <h1 className="pt-12 mb-4 text-6xl font-semibold">
              Type the Romaji
            </h1>
            <h2 className="text-2xl">
              Type the english spelling of each character into their respective
              boxes.
            </h2>
            <h2 className="text-2xl">Take it as many times as you like! 👍</h2>
          </>
        ) : (
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
        )}
      </div>
      <div className="container grid grid-cols-[repeat(auto-fill,minmax(170px,_1fr))] p-3 mx-auto mt-12 text-center gap-3 text-[#F8F5E9]">
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
        {!showResults ? (
          // submit answers button
          <Button
            className="mt-8 mb-16 mr-12 lg:mb-24 lg:mr-24"
            onClick={() => {
              setShowResults(true)
              if (scrollRef.current) {
                console.log("here")
                handleScrollDialog()
              }
            }}
          >
            Submit
          </Button>
        ) : (
          // next lesson button
          <Button
            className="mt-8 mb-16 mr-12 lg:mb-24 lg:mr-24"
            link={nextLesson}
          >
            Next Lesson {"->"}
          </Button>
        )}
      </div>
    </Dialog>
  )
}
