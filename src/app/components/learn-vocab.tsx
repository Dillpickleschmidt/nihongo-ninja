"use client"
import { useState, useEffect, useRef } from "react"
import Button from "@/app/components/button"
import ShuffleArray from "@/app/util/shuffleArray"
import GetAnswerFromState from "@/app/util/getAnswerFromState"

import { Noto_Sans_JP } from "next/font/google"
import ShuffleRange from "../util/shuffleRange"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

type QuizProps = {
  data: { [key: string]: string[] }
  link: string
  shuffleTerms?: boolean
}

export default function LearnVocab({
  data,
  link,
  shuffleTerms = false,
}: QuizProps) {
  // Initialize vocabArray state with the transformed data
  const [vocabArray, setVocabArray] = useState(
    Object.entries(data).map(([key, value]) => ({
      key,
      value,
      type: "multiple-choice",
    }))
  )
  const [questionStack, setQuestionStack] = useState(vocabArray.slice(0, 10))
  const [nextQuestionIndex, setNextQuestionIndex] = useState(10)
  // Used for getting the next question from vocabArray (original data)
  const [currentVocabArrayIndex, setCurrentVocabArrayIndex] = useState(0)
  const [questionCount, setQuestionCount] = useState(0)
  const [reviewQuestions, setReviewQuestions] = useState<
    { key: string; value: string[]; type: string }[]
  >([])
  const [userWrittenAnswer, setUserWrittenAnswer] = useState("")
  const [compareFirst, setCompareFirst] = useState(true)
  const [compareSecond, setCompareSecond] = useState(true)
  const [lock, setLock] = useState(false)
  const [correctWrittenAnswer, setCorrectWrittenAnswer] = useState("")
  const [isWrittenAnswerCorrect, setIsWrittenAnswerCorrect] = useState(false)
  const [correctButton, setCorrectButton] = useState("")
  const [showReview, setShowReview] = useState(false)
  const [finished, setFinished] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  // Initialize state for everything returned by ShuffleRange
  const [shuffledOutput, setShuffledOutput] = useState<{
    hiragana: string[]
    english: string[]
    termKey: string
    keys: string[]
  }>({
    hiragana: [],
    english: [],
    termKey: "",
    keys: [],
  })

  // Shuffle the *term* array on initial page load if shuffleTerms is true
  useEffect(() => {
    if (shuffleTerms) {
      const shuffledArray = ShuffleArray({ vocabArray })
      setVocabArray(shuffledArray)
    }
  }, [])

  useEffect(() => {
    console.log("vocabArray", vocabArray)
    setQuestionStack(vocabArray.slice(0, 10))
  }, [vocabArray])

  // Shuffle the *output* array using the shuffleRange function
  useEffect(() => {
    // Shuffle a copy of the input array in a range and return the first 4 entries in that range
    const [newHiraganaValues, newEnglishValues, newTermKey, newKeys] =
      ShuffleRange({
        vocabArray,
        currentVocabArrayIndex,
      })

    // SET the values from the shuffled range into state
    newTermKey &&
      setShuffledOutput({
        hiragana: newHiraganaValues as string[],
        english: newEnglishValues as string[],
        termKey: newTermKey?.toString(),
        keys: newKeys as string[],
      })

    // console.log("shufflingOutput")
  }, [questionStack])

  // Focus the input field when lock changes
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [lock])

  // Get the hiragana from the shuffled range
  var hiragana1 = shuffledOutput.hiragana[0]
  var hiragana2 = shuffledOutput.hiragana[1]
  var hiragana3 = shuffledOutput.hiragana[2]
  var hiragana4 = shuffledOutput.hiragana[3]

  // Get the english from the shuffled range
  var english1 = shuffledOutput.english[0]
  var english2 = shuffledOutput.english[1]
  var english3 = shuffledOutput.english[2]
  var english4 = shuffledOutput.english[3]

  // Get the individual keys from the shuffled range
  var key1 = shuffledOutput.keys[0]
  var key2 = shuffledOutput.keys[1]
  var key3 = shuffledOutput.keys[2]
  var key4 = shuffledOutput.keys[3]

  var TermKey = shuffledOutput.termKey
  var keys = shuffledOutput.keys

  function handleVocabClick(e?: React.MouseEvent, clickedKey?: string) {
    console.log("TermKey:", TermKey)
    console.log("ClickedKey:", clickedKey)
    const newStack = [...questionStack]
    const question = newStack.splice(0, 1)[0]
    const nextQuestion = newStack[0]

    function checkWrittenAnswer() {
      // userWrittenAnswer is already cast to lowercase
      const lowerCaseQuestionValues = question.value.map(
        (val) => val.toLowerCase() // Cast each value to lowercase
      )
      const splitFirst = lowerCaseQuestionValues[0].split("/")
      const splitSecond = lowerCaseQuestionValues[1]
        ? lowerCaseQuestionValues[1].split("/")
        : []

      const matchesFirst =
        compareFirst && splitFirst.includes(userWrittenAnswer)
      const matchesSecond =
        compareSecond && splitSecond.includes(userWrittenAnswer)

      return matchesFirst || matchesSecond
    }
    setIsWrittenAnswerCorrect(checkWrittenAnswer())

    // Set the correct answer based on the state of the toggles
    const correctAnswerString = GetAnswerFromState(
      compareFirst,
      compareSecond,
      question
    )
    setCorrectWrittenAnswer(correctAnswerString)

    // Check if the clicked key matches the term key
    const matches = TermKey === clickedKey
    if (lock === false) {
      // Lock the user input
      setLock(true)
      // Get the target button via the mouse event
      const target = e && (e.currentTarget as HTMLButtonElement)
      if (target) {
        if (matches) {
          target.classList.add("bg-green-500", "hover:bg-green-500")
          // console.log("correct")
        } else {
          target.classList.add("bg-red-500", "hover:bg-red-500")
          // console.log("incorrect")
          // Find the correct button of the 4 and add the *correct choice* styling to it
          const correctButton = keys.find((e) => TermKey === e)
          console.log("CorrectButton:", correctButton)
          correctButton && setCorrectButton(correctButton)
        }
      }

      setTimeout(() => {
        // Clear user input and unlock
        setLock(false)
        setUserWrittenAnswer("")

        // // Remove the added classes from the buttons
        target &&
          target.classList.remove(
            "bg-green-500",
            "hover:bg-green-500",
            "bg-red-500",
            "hover:bg-red-500"
          )
        // Reset the matched button
        setCorrectButton("")

        if (nextQuestion) {
          // Find the index of TermKey in vocabArray
          const nextVocabArrayIndex = vocabArray.findIndex(
            (item) => item.key === nextQuestion.key
          )
          setCurrentVocabArrayIndex(nextVocabArrayIndex)
        }

        // Check if the answer is correctChoice or if the user has written the correct answer (case-insensitive)
        if (matches || checkWrittenAnswer()) {
          if (question.type === "write") {
            // If the question type is 'write' and it's answered correctly, leave it as removed and don't add it back to the stack
            // Add a new question from vocabArray to the end of the stack
            const nextQuestion = vocabArray[nextQuestionIndex]
            if (nextQuestion) {
              newStack.push(nextQuestion)
              setNextQuestionIndex((prevIndex) => prevIndex + 1) // Increment nextQuestionIndex
              console.log("nextQuestion", nextQuestion)
            }
          } else {
            // If the question type is 'multiple-choice' and it's answered correctly, change it to 'write' and move it to the end of the stack
            question.type = "write"
            newStack.push(question)
          }
        } else {
          // If the answer is incorrect, change the question type to 'multiple-choice' (if it isn't already) and move it to the end of the stack
          question.type = "multiple-choice"
          newStack.push(question)
        }

        // Update the main question stack
        setQuestionStack(newStack)

        // Increment questionCount each time handleAnswer is called
        setQuestionCount((prevCount) => prevCount + 1)

        // If questionCount reaches 7, show the review UI
        if (questionCount >= 6) {
          setShowReview(true)
          setQuestionCount(0)
        }

        // Add the current question to reviewQuestions
        setReviewQuestions((prevQuestions) => [...prevQuestions, question])

        // If reviewQuestions has more than 7 questions, remove the oldest one
        if (reviewQuestions.length > 6) {
          setReviewQuestions((prevQuestions) => prevQuestions.slice(1))
        }

        // Check if there are no more questions in newStack and no more questions to add from vocabArray
        if (newStack.length === 0 && nextQuestionIndex >= vocabArray.length) {
          setFinished(true)
        }
      }, 2000)
    }
  }

  function greenIfCorrect(key: string) {
    return key === correctButton ? "bg-green-500 hover:bg-green-500" : ""
  }

  function setInputBoxColor() {
    if (isWrittenAnswerCorrect && lock) {
      return "bg-green-500 hover:bg-green-500"
    } else if (lock) {
      return "bg-red-500 hover:bg-red-500"
    }
  }

  // If 'finished' is true, render a "finished" page
  if (finished) {
    return (
      <div className="h-[80%] flex flex-col justify-center items-center">
        <div className="my-24 text-4xl text-center">
          You've finished all the questions!
        </div>
        <div className="">
          <Button link={link}>{"Next Lesson"}</Button>
        </div>
      </div>
    )
  }

  // If showReview is true, render the review UI
  if (showReview) {
    return (
      <div className="h-full flex flex-row justify-center">
        <div className="2xl:w-[60%] xl:w-[80%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-12 py-10 bg-[#222222] rounded-[10px] border-2 border-neutral-700 border-dashed">
          {/* Render your review UI here */}
          <div className="w-full flex justify-center">
            <h1 className="border-b pb-6 border-yellow-500 border-opacity-75 px-16 text-5xl font-semibold">
              Review
            </h1>
          </div>
          <div className="my-6 flex justify-center">
            <div className="space-y-6">
              {reviewQuestions.map((question, index) => (
                <div key={index} className="border-b border-neutral-700 pb-6">
                  <p className="text-4xl">
                    {question.key}{" "}
                    <span className="text-2xl">
                      - {question.value[0]} {question.value[1]}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-end outline-none">
            <Button
              className=""
              autoFocus={true}
              onClick={() => {
                // When "continue" is clicked, hide the review UI
                setShowReview(false)
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Render the current question
  const currentQuestion = questionStack[0]

  return (
    <div>
      <div
        className={`h-1 bg-red-500 opacity-75 ease-out duration-500`}
        style={{ width: `${((questionCount + 1) / 7) * 100}%` }}
      ></div>
      <div className="2xl:max-w-[60%] xl:max-w-[80%] mx-auto mt-24 px-12 py-10 bg-[#222222] rounded-[10px] border-2 border-neutral-700 border-dashed">
        {/* Render your question here */}
        <label className="text-sm">Audio</label>
        <h1 className={`${JapaneseFont} my-16 text-center text-7xl`}>
          {currentQuestion.key}
        </h1>
        {currentQuestion.type === "multiple-choice" ? (
          // Render UI for multiple-choice question
          <ul className="grid grid-cols-1 gap-5 mx-4 mt-24 mb-6 lg:grid-cols-2">
            <Button
              variant={"vocab"}
              onClick={(e) => key1 && handleVocabClick(e, key1)}
              className={greenIfCorrect(key1)}
            >
              <span className="mr-5 text-lg">1. </span>
              {hiragana1 && (
                <span className={`${JapaneseFont} mr-1`}>{hiragana1} </span>
              )}
              {english1}
            </Button>
            <Button
              variant={"vocab"}
              onClick={(e) => key2 && handleVocabClick(e, key2)}
              className={greenIfCorrect(key2)}
            >
              <span className="mr-5 text-lg">2. </span>
              {hiragana2 && (
                <span className={`${JapaneseFont} mr-1`}>{hiragana2} </span>
              )}
              {english2}
            </Button>
            <Button
              variant={"vocab"}
              onClick={(e) => key3 && handleVocabClick(e, key3)}
              className={greenIfCorrect(key3)}
            >
              <span className="mr-5 text-lg">3. </span>
              {hiragana3 && (
                <span className={`${JapaneseFont} mr-1`}>{hiragana3} </span>
              )}
              {english3}
            </Button>
            <Button
              variant={"vocab"}
              onClick={(e) => key4 && handleVocabClick(e, key4)}
              className={greenIfCorrect(key4)}
            >
              <span className="mr-5 text-lg">4. </span>
              {hiragana4 && (
                <span className={`${JapaneseFont} mr-1`}>{hiragana4} </span>
              )}
              {english4}
            </Button>
          </ul>
        ) : (
          // Render UI for write question
          <div>
            {/* Render toggles here */}
            <label>
              Compare to first value
              <input
                type="checkbox"
                checked={compareFirst}
                onChange={(e) => setCompareFirst(e.target.checked)}
              />
            </label>
            <br />
            <label>
              Compare to second value
              <input
                type="checkbox"
                checked={compareSecond}
                onChange={(e) => setCompareSecond(e.target.checked)}
              />
            </label>
            <div className="flex flex-row justify-center">
              {/* Render your input field for the write question here */}
              <form
                onSubmit={(e) => {
                  e.preventDefault() // Prevent the form from refreshing the page
                  handleVocabClick()
                }}
              >
                <input
                  type="text"
                  placeholder="Write your answer here"
                  ref={inputRef}
                  value={userWrittenAnswer}
                  onChange={(e) =>
                    setUserWrittenAnswer(e.target.value.toLowerCase())
                  }
                  className={`${setInputBoxColor()} w-96 py-4 px-6 bg-[#191919] text-white`}
                  disabled={lock}
                />
              </form>
            </div>
            {lock && (
              <p className="text-lg text-center">
                Correct answer: {correctWrittenAnswer}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
