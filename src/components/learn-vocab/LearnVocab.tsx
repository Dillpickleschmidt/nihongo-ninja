/*
This component takes json data and returns a UI for learning vocabulary.
It has two modes: "multiple-choice" and "write".
In "multiple-choice" mode, the user selects the correct answer from 4 choices.
In "write" mode, the user types the answer into an input field.

The user will view an introduction page before starting that shows the vocabulary that they'll be tested on.
There's an option to show a tutorial to guide users before starting.
The user will view a review page after answering 7 questions.
The user will view a finished page after answering all questions.

The user will switch between the two modes (read and write) by answering correctly or incorrectly.
If the user answers correctly, the question will change to "write" mode.
If the user answers incorrectly, the question will change to "multiple-choice" mode, if not already.
If the user answers correctly in "write" mode, the question will be removed from the stack.

The user can view the correct answer if they're unsure (which also marks the user answer as wrong).
The user can also toggle between comparing the answer to hiragana and english.

The user will always be working with a stack of 10 questions at a time, selected from the larger dataset.
Though the user works with a stack of 10 questios, it presented in groups of 7 questions, followed by the review page.
  This staggers the questions and makes the learning process feel less predicatable.

The current question that the uswer is working on is always the first in the stack.
Questions are circulated into the back of the stack after being answered, so the user will see the same questions again.
Every vocabularly item will be tested at least twice before being removed from the stack (once as multiple-choice,
  and once as written).
If an item is removed from the stack, the next item from the larger dataset will be added to the stack, if available.

This module uses an intelligent shuffling process that ensures that the user is consistently seeing similar
  vocabulary by sampling and reshuffling vocabulary in indexes close to the key term from the original dataset. For more
  details, see the ShuffleRange component.
The original dataset is also randomly shuffled by default, but this can be turned off.
*/

"use client"
import { useState, useEffect, useRef } from "react"
import { ReactNode } from "react"
import Button from "@/components/Button"
import ShuffleArray from "@/components/learn-vocab/shuffleArray"
import GetAnswerFromState from "@/components/learn-vocab/getAnswerFromState"

import { Noto_Sans_JP } from "next/font/google"

const NotoSansJPFont = Noto_Sans_JP({ subsets: ["latin"] })

import ShuffleRange from "./shuffleRange"
import SpoilerButton from "../SpoilerButton"
import JapaneseFont from "../text/JapaneseFont"
import Tutorial from "./Tutorial"
import StartPage from "./StartPage"
import FinishedPage from "./FinishedPage"
import ReviewPage from "./ReviewPage"

type VocabItemValue = {
  hiragana?: string[]
  english?: string[]
  mnemonics?: string
}

type VocabItem = {
  key: string
  value: VocabItemValue
  style: string // type: "multiple-choice" or "write"
}

type LearnVocabProps = {
  children?: ReactNode
  data: { [key: string]: VocabItemValue } // data: { [key: string]: { hiragana: string; english: string; mnemonics: string } }
  link: string
  shuffleTerms?: boolean
  hideTerms?: boolean
  tutorial?: boolean
}

export default function LearnVocab({
  data,
  link,
  shuffleTerms = false,
  hideTerms = false,
  tutorial = false,
  children,
}: LearnVocabProps) {
  // Initialize vocabArray state with the transformed data
  const originalVocabArray = Object.entries(data).map(([key, value]) => ({
    key,
    value: {
      ...value,
      hiragana: value.hiragana || [""],
      english: value.english || [""], // Default to an empty string if english is not provided
    },
    style: "multiple-choice",
  }))
  const [vocabArray, setVocabArray] = useState<VocabItem[]>(originalVocabArray)
  const [questionStack, setQuestionStack] = useState(vocabArray.slice(0, 10))
  const [nextQuestionIndex, setNextQuestionIndex] = useState(10)
  // Used for getting the next question from vocabArray (original data)
  const [currentVocabArrayIndex, setCurrentVocabArrayIndex] = useState(0)
  const [questionCount, setQuestionCount] = useState(0)
  const [reviewQuestions, setReviewQuestions] = useState<VocabItem[]>([])
  const [userWrittenAnswer, setUserWrittenAnswer] = useState("")
  const [compareHiragana, setcompareHiragana] = useState(true)
  const [compareEnglish, setcompareEnglish] = useState(true)
  const [lock, setLock] = useState(false)
  const [correctAnswerFormatted, setCorrectAnswerFormatted] = useState("")
  const [isWrittenAnswerCorrect, setIsWrittenAnswerCorrect] = useState(false)
  const [correctButton, setCorrectButton] = useState("")
  const [showReview, setShowReview] = useState(false)
  const [finished, setFinished] = useState(false)
  const [started, setStarted] = useState(false)
  const [tutorialStep, setTutorialStep] = useState(-1)

  const inputRef = useRef<HTMLInputElement>(null)

  // Initialize state for everything returned by ShuffleRange
  const [shuffledOutput, setShuffledOutput] = useState<{
    hiragana: string[][]
    english: string[][]
    mnemonics?: string[]
    termKey: string
    keys: string[]
  }>({
    hiragana: [],
    english: [],
    mnemonics: [],
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
    setQuestionStack(vocabArray.slice(0, 10))
  }, [vocabArray])

  // Shuffle the *output* array using the shuffleRange function
  useEffect(() => {
    // Shuffle a copy of the input array in a range and return the first 4 entries in that range
    const shuffledResult = ShuffleRange({
      vocabArray,
      currentVocabArrayIndex,
    })

    // SET the values from the shuffled range into state
    if (shuffledResult.termKey) {
      setShuffledOutput({
        hiragana: shuffledResult.hiragana ?? [],
        english: shuffledResult.english ?? [],
        mnemonics: shuffledResult.mnemonics,
        termKey: shuffledResult.termKey,
        keys: shuffledResult.keys,
      })
    }

    // console.log("shufflingOutput")
  }, [questionStack])

  // Focus the input field when lock changes
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [lock])

  var hiragana1 = ""
  var hiragana2 = ""
  var hiragana3 = ""
  var hiragana4 = ""
  // Get the hiragana from the shuffled range
  if (shuffledOutput.hiragana[0] && shuffledOutput.hiragana[0][0]) {
    var hiragana1 = shuffledOutput.hiragana[0].join(" / ")
    var hiragana2 = shuffledOutput.hiragana[1].join(" / ")
    var hiragana3 = shuffledOutput.hiragana[2].join(" / ")
    var hiragana4 = shuffledOutput.hiragana[3].join(" / ")
  }
  var english1 = ""
  var english2 = ""
  var english3 = ""
  var english4 = ""
  if (shuffledOutput.english[0] && shuffledOutput.english[0][0]) {
    // Get the english from the shuffled range
    var english1 = shuffledOutput.english[0].join(" / ")
    var english2 = shuffledOutput.english[1].join(" / ")
    var english3 = shuffledOutput.english[2].join(" / ")
    var english4 = shuffledOutput.english[3].join(" / ")
  }

  // Get the individual keys from the shuffled range
  var key1 = shuffledOutput.keys[0]
  var key2 = shuffledOutput.keys[1]
  var key3 = shuffledOutput.keys[2]
  var key4 = shuffledOutput.keys[3]

  var TermKey = shuffledOutput.termKey
  var keys = shuffledOutput.keys

  function checkWrittenAnswer() {
    // checkWrittenAnswer checks if the written answer is correct and returns a bool.
    const question = questionStack[0] // current question
    const answerHiragana = question.value.hiragana?.map((value) =>
      value.toLowerCase()
    )
    const answerEnglish = question.value.english?.map((value) =>
      value.toLowerCase()
    )

    const matchesHiragana =
      compareHiragana && answerHiragana
        ? answerHiragana.includes(userWrittenAnswer) && userWrittenAnswer !== ""
        : false
    const matchesEnglish =
      compareEnglish && answerEnglish
        ? answerEnglish.includes(userWrittenAnswer) && userWrittenAnswer !== ""
        : false

    return matchesHiragana || matchesEnglish
  }

  function handleUserInput(e?: React.MouseEvent, clickedKey?: string) {
    // handleUserInput handles the user's input and checks if it's correct
    const newStack = [...questionStack]
    const question = newStack.splice(0, 1)[0] // Remove the first question from the stack
    const nextQuestion = newStack[0]

    // Check if the written answer is correct
    setIsWrittenAnswerCorrect(checkWrittenAnswer()) // returns bool

    // Returns a formatted string based on the state of the toggles
    const correctAnswerString = GetAnswerFromState(
      compareHiragana,
      compareEnglish,
      question // this value is why this const is defined here and why I have to useState for setCorrectAnswerFormatted
    )
    // The returned value here differs slightly from what's compared in checkWrittenAnswer
    setCorrectAnswerFormatted(correctAnswerString)

    // Check if the clicked key matches the term key (multiple-choice question)
    const matches = TermKey === clickedKey
    if (lock === false) {
      // Lock the user input
      setLock(true)
      // Get the target button via the mouse event
      const target = e && (e.currentTarget as HTMLButtonElement)
      if (target) {
        if (matches) {
          target.classList.add(
            "bg-green-500",
            "hover:bg-green-500",
            "font-semibold"
          )
        } else {
          // Don't add the red background if the user clicked "show answer" button
          target.classList.add("bg-red-500", "hover:bg-red-500")
          // Find the correct button of the 4 and add the *correct choice* styling to it
          const correctButton = keys.find((e) => TermKey === e)
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
            "font-semibold",
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
          if (question.style === "write") {
            // If the question type is 'write' and it's answered correctly, leave it as removed and don't add it back to the stack
            // Add a new question from vocabArray to the end of the stack
            const nextQuestion = vocabArray[nextQuestionIndex]
            if (nextQuestion) {
              newStack.push(nextQuestion)
              setNextQuestionIndex((prevIndex) => prevIndex + 1) // Increment nextQuestionIndex
            }
          } else {
            // If the question type is 'multiple-choice' and it's answered correctly, change it to 'write' and move it to the end of the stack
            question.style = "write"
            newStack.push(question)
          }
        } else {
          // If the answer is incorrect, change the question type to 'multiple-choice' (if it isn't already) and move it to the end of the stack
          question.style = "multiple-choice"
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
    return key === correctButton
      ? "bg-green-500 hover:bg-green-500 font-semibold"
      : ""
  }

  function setInputBoxColor() {
    if (isWrittenAnswerCorrect && lock) {
      return "bg-green-500 hover:bg-green-500 font-semibold"
    } else if (lock) {
      return "bg-red-500 hover:bg-red-500"
    }
  }

  if (!started) {
    return (
      <StartPage
        hideTerms={hideTerms}
        tutorial={tutorial}
        originalVocabArray={originalVocabArray}
        setTutorialStep={setTutorialStep}
        setStarted={setStarted}
        started={started}
      >
        {children}
      </StartPage>
    )
  }

  if (tutorialStep >= 0) {
    return (
      <Tutorial
        setTutorialStep={setTutorialStep}
        tutorialStep={tutorialStep}
        setLock={setLock}
        lock={lock}
        handleUserInput={handleUserInput}
        setUserWrittenAnswer={setUserWrittenAnswer}
        userWrittenAnswer={userWrittenAnswer}
        inputRef={inputRef}
      />
    )
  }

  // If 'finished' is true, render a "finished" page
  if (finished) {
    return <FinishedPage link={link} />
  }

  // If showReview is true, render the review UI
  if (showReview) {
    return (
      <ReviewPage
        reviewQuestions={reviewQuestions}
        setShowReview={setShowReview}
      />
    )
  }

  // Render the first question from the questionStack
  // Subsequent questions are handled in handleUserInput, but the current question is always the first in the questionStack.
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
        <h1 className="my-16 text-center text-7xl">
          <JapaneseFont>{currentQuestion.key}</JapaneseFont>
        </h1>
        {currentQuestion.style === "multiple-choice" ? (
          // Render UI for multiple-choice question
          <ul className="grid grid-cols-1 gap-5 mx-4 mt-24 mb-6 lg:grid-cols-2">
            <Button
              variant={"vocab"}
              onClick={(e) => key1 && handleUserInput(e, key1)}
              className={greenIfCorrect(key1)}
            >
              <span className="mr-5 text-lg">1. </span>
              {hiragana1 && (
                <JapaneseFont className="mr-1">{hiragana1} </JapaneseFont>
              )}
              {english1}
            </Button>
            <Button
              variant={"vocab"}
              onClick={(e) => key2 && handleUserInput(e, key2)}
              className={greenIfCorrect(key2)}
            >
              <span className="mr-5 text-lg">2. </span>
              {hiragana2 && (
                <JapaneseFont className="mr-1">{hiragana2} </JapaneseFont>
              )}
              {english2}
            </Button>
            <Button
              variant={"vocab"}
              onClick={(e) => key3 && handleUserInput(e, key3)}
              className={greenIfCorrect(key3)}
            >
              <span className="mr-5 text-lg">3. </span>
              {hiragana3 && (
                <JapaneseFont className="mr-1">{hiragana3} </JapaneseFont>
              )}
              {english3}
            </Button>
            <Button
              variant={"vocab"}
              onClick={(e) => key4 && handleUserInput(e, key4)}
              className={greenIfCorrect(key4)}
            >
              <span className="mr-5 text-lg">4. </span>
              {hiragana4 && (
                <JapaneseFont className="mr-1">{hiragana4} </JapaneseFont>
              )}
              {english4}
            </Button>
          </ul>
        ) : (
          // Render UI for write question
          <div>
            {/* Render toggles here */}
            <label>
              Compare to hiragana
              <input
                type="checkbox"
                checked={compareHiragana}
                onChange={(e) => setcompareHiragana(e.target.checked)}
              />
            </label>
            <br />
            <label>
              Compare to english
              <input
                type="checkbox"
                checked={compareEnglish}
                onChange={(e) => setcompareEnglish(e.target.checked)}
              />
            </label>
            <div className="flex flex-row justify-center">
              {/* Render your input field for the write question here */}
              <form
                onSubmit={(e) => {
                  e.preventDefault() // Prevent the form from refreshing the page
                  handleUserInput()
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
                  className={`${setInputBoxColor()} ${
                    NotoSansJPFont.className
                  } ${
                    lock && "placeholder:opacity-0"
                  } w-96 py-[.85rem] px-6 bg-[#191919] rounded-md text-white text-xl placeholder:text-base focus:outline-none`}
                  disabled={lock}
                />
              </form>
            </div>
            {lock && (
              <p className="text-lg text-center">
                Correct answer: {correctAnswerFormatted}
              </p>
            )}
          </div>
        )}
      </div>
      <div className="mt-12 flex justify-center 2xl:max-w-[60%] xl:max-w-[80%] mx-auto ">
        <SpoilerButton
          text="Answer"
          className="py-2 px-4 text-neutral-300 border-none"
          externalOnClick={(e) => handleUserInput(e, "showAnswer")}
          hideSpoiler={!lock}
        >
          <div className="mt-6 text-xl">
            <JapaneseFont className="text-3xl font-semibold">
              <u>
                {currentQuestion.value.english &&
                currentQuestion.value.english[0] &&
                currentQuestion.value.hiragana?.[0]
                  ? // If both hiragana and english exist, render both
                    currentQuestion.value.hiragana &&
                    " / " &&
                    currentQuestion.value.english.join(" / ")
                  : currentQuestion.value.hiragana &&
                    currentQuestion.value.hiragana[0]
                  ? // If only hiragana exists, render hiragana
                    currentQuestion.value.hiragana
                  : // If only english exists, render english
                    currentQuestion.value.english?.join(" / ") ?? ""}
              </u>
            </JapaneseFont>
            {currentQuestion.value.mnemonics &&
              " - " + currentQuestion.value.mnemonics}
          </div>
        </SpoilerButton>
      </div>
    </div>
  )
}
