"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import Dialog from "../Dialog"
import Image from "next/image"
import Button from "../Button"
import AIFeedback from "../ai-grader/AIFeedback"
import { Noto_Sans_JP } from "next/font/google"
import { VscDebugRestart } from "react-icons/vsc"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

type PageData = {
  id: number
  image: string
  dimensions: {
    width: number
    height: number
  }
  prompt: string
  correctAnswers: string[]
}

type PictureQuizProps = {
  data: PageData[]
}

export default function PictureQuiz({ data }: PictureQuizProps) {
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [randomizedIds, setRandomizedIds] = useState<number[]>([])
  const [isSubmittedOnce, setIsSubmittedOnce] = useState(false) // Used to track if the user has submitted at least once per question
  const [submittedAnswer, setSubmittedAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState(false) // Used to track if the user's answer is correct
  const [questionResults, setQuestionResults] = useState<
    Array<{ question: PageData; isFirstAnswerCorrect: boolean }>
  >([]) // Used to track the results of each question (whether the user got it right or wrong on the first try)

  const numberOfItems = data.length

  const [submissionCounts, setSubmissionCounts] = useState(
    Array(numberOfItems).fill(0)
  ) // Used to track how many times the user has submitted for each question (1 for correct, + x for # of incorrect submissions)

  const [isFeedbackClosed, setIsFeedbackClosed] = useState(true)

  useEffect(() => {
    // Randomize the order of the questions
    // Create a list of ids from data
    const ids = data.map((page) => page.id)

    // Randomize the order of ids
    const randomized = ids.sort(() => Math.random() - 0.5)

    setRandomizedIds(randomized) // Set the randomized ids
  }, [])

  const currentPage = data.find(
    (page) => page.id === randomizedIds[currentIndex]
  )

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault() // Prevent the form from refreshing the page
    setIsSubmittedOnce(true)

    const newSubmissionCounts = [...submissionCounts]
    newSubmissionCounts[currentIndex] += 1
    setSubmissionCounts(newSubmissionCounts)

    const isAnswerCorrect =
      currentPage && currentPage.correctAnswers.includes(submittedAnswer)
    if (isAnswerCorrect && newSubmissionCounts[currentIndex] === 1) {
      // If the answer is correct and it's the first time the user submitted
      setIsCorrect(true)
      setQuestionResults([
        ...questionResults,
        { question: currentPage, isFirstAnswerCorrect: true },
      ])

      console.log(questionResults)
      // Wait for 2 seconds before updating the index
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)

        setSubmittedAnswer("") // Reset the submitted answer
        setIsCorrect(false)
        setIsSubmittedOnce(false)
      }, 1500)
    } else if (isAnswerCorrect) {
      setIsCorrect(true)
      setQuestionResults([
        ...questionResults,
        { question: currentPage, isFirstAnswerCorrect: false },
      ])
      // Wait for 2 seconds before updating the index
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)

        setSubmittedAnswer("") // Reset the submitted answer
        setIsCorrect(false)
        setIsSubmittedOnce(false)
      }, 1500)
    } else {
      setIsCorrect(false)
      setIsFeedbackClosed(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSubmittedAnswer(e.target.value) // Update the submitted answer when the input changes
  }

  const onKeysPressed = (keys: string[]) => {
    // This function is used to pass the keys pressed in the AIFeedback dialog to this component

    if (keys.includes("Backspace")) {
      // If the key contains 'Backspace', remove the last character from submittedAnswer
      setSubmittedAnswer(submittedAnswer.slice(0, -1))
    } else {
      // If the key is not 'Backspace', add it to submittedAnswer
      ;(prevText: string[]) => prevText.concat(keys)
      setSubmittedAnswer(submittedAnswer + keys.join(""))
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault() // Prevent the default action (creating a new line)
      handleSubmit(event) // Submit the form
    }
  }

  const animationDuration = 0.2 // duration of the animation in seconds

  useEffect(() => {
    // Confetti
    var myCanvas = document.getElementById(
      "confetti-canvas"
    ) as HTMLCanvasElement

    var myConfetti = confetti.create(myCanvas, {
      resize: true,
      useWorker: true,
    })
    myConfetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }, [currentIndex])

  const inputRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    // Focus the input when the page changes
    if (!isSubmittedOnce) {
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, animationDuration * 1000) // delay in ms, should be equal or more than the duration of the animation

      return () => clearTimeout(timer) // cleanup on unmount
    }
  }, [currentIndex, showQuiz])

  useEffect(() => {
    // Focus the input when the chat is closed
    if (isFeedbackClosed) {
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 0) // Allow the chat to close before focusing the input

      return () => clearTimeout(timer) // Cleanup on unmount
    }
  }, [isFeedbackClosed])

  const correctAnswersCount = questionResults.filter(
    (result) => result.isFirstAnswerCorrect === true
  ).length

  const closeAIFeedback = () => {
    setIsFeedbackClosed(true)
  }

  return (
    <div className="overflow-x-visible">
      <Dialog
        variant={"md"}
        className={`border-4 border-black bg-[#191919] ${
          currentIndex === numberOfItems && "h-[93%] w-[34%]"
        }`}
        showAlertOnClose={true}
      >
        <motion.div
          key={`${showQuiz}-${currentIndex}`} // key is used to force a rerender when the index changes
          initial={{ x: 600, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: animationDuration },
          }}
          exit={{ x: -600, opacity: 0 }}
          className="h-full w-full text-4xl text-white text-center"
          id="my-canvas"
        >
          {showQuiz === false ? ( // Welcome Page
            <div>
              <h1 className="my-24">Test yourself with pictures!</h1>
              <Button onClick={() => setShowQuiz(true)}>Start Quiz</Button>
            </div>
          ) : currentIndex === numberOfItems ? ( // Results Page
            <div>
              <div className=" mt-12">
                <h1 className="text-5xl font-bold">Nice job! 🥳</h1>
                <p className="mt-8 pb-8 border-b-2 border-black underline-offset-[6px]">
                  Your score:{" "}
                  <strong>
                    <u>{(correctAnswersCount / numberOfItems) * 100}%</u>
                  </strong>
                </p>
                {questionResults.map((result, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center h-full mx-[3.5rem]"
                  >
                    <Image
                      src={result.question.image}
                      alt={"image"}
                      width={result.question.dimensions.width}
                      height={result.question.dimensions.height}
                      className={`mt-8 rounded-[50px] border-4 ${
                        result.isFirstAnswerCorrect
                          ? "border-green-500"
                          : "border-red-500"
                      } drop-shadow-lg`}
                    />
                    <div className="text-2xl mt-4">
                      <h3>
                        <strong>Your answer:</strong>
                      </h3>
                      <h3>
                        <>Correct answer(s):</>
                        {"\u3000"}
                        <span
                          className={`${JapaneseFont.className} text-[1.65rem]`}
                        >
                          {result.question.correctAnswers.join(",\u3000")}
                        </span>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="sticky bottom-0 w-full px-6 pb-9 pt-8 flex flex-row gap-4 justify-between bg-[#191919] bg-opacity-90">
                <Button
                  link="/learn/chapter-1/lesson-6"
                  className=" shadow-lg w-full"
                  title="Go back and review"
                >
                  {"<-"} Review lesson
                </Button>
                <Button
                  onClick={() => {
                    window.location.reload()
                  }}
                  title="Restart The Quiz"
                  className=" shadow-lg px-[18px] flex justify-center items-center"
                >
                  {VscDebugRestart()}
                </Button>
                <Button
                  link="/learn/chapter-1/lesson-7"
                  className=" shadow-lg w-full"
                >
                  Next Lesson {"->"}
                </Button>
              </div>
              <canvas // Confetti
                id="confetti-canvas"
                className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full pointer-events-none"
              />
            </div>
          ) : (
            // Quiz Pages
            <div className="flex flex-col justify-center items-center h-full mx-[3.5rem]">
              <div>
                {currentPage && (
                  <Image
                    key={currentPage.id}
                    src={currentPage.image}
                    alt={"image"}
                    width={currentPage.dimensions.width}
                    height={currentPage.dimensions.height}
                    className={`mt-8 rounded-[50px] border-2 ${
                      isSubmittedOnce && isCorrect
                        ? "border-green-500"
                        : "border-black"
                    } drop-shadow-lg ${
                      isSubmittedOnce && !isCorrect
                        ? "border-red-500"
                        : "border-black"
                    }`}
                  />
                )}
              </div>
              <div className="">
                <h2 className="text-2xl text-white my-8">
                  {currentPage && currentPage.prompt}
                </h2>
              </div>
              <div className="grow w-full">
                <form onSubmit={handleSubmit} className="h-full">
                  <div className="flex justify-center h-full">
                    <textarea
                      ref={inputRef}
                      placeholder="Write your answer in Japanese..."
                      className={`${JapaneseFont.className} resize-none outline-none scrollbar-none w-full h-full bg-[#f7e2c4] rounded-[40px] py-6 px-8 placeholder:text-2xl placeholder:text-black placeholder:text-opacity-50 placeholder:font-normal text-4xl text-black text-center font-medium border-[4px] border-black`}
                      value={submittedAnswer}
                      onChange={handleChange}
                      onKeyDown={handleKeyPress}
                      disabled={isCorrect}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div>
                <p className="text-2xl text-white mb-8 mt-4">
                  {currentIndex + 1} / {numberOfItems}
                </p>
              </div>
            </div>
          )}
        </motion.div>
        {isSubmittedOnce && !isCorrect && !isFeedbackClosed ? (
          <>
            <AIFeedback
              closeAIFeedback={closeAIFeedback}
              onKeysPressed={onKeysPressed}
              className="opacity-90"
            />
          </>
        ) : null}
      </Dialog>
    </div>
  )
}
