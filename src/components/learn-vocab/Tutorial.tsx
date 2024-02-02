// A quick tutorial for the user to understand how to use the learn vocab mode

"use client"
import { useState } from "react"
import Button from "../button"
import JapaneseFont from "../JapaneseFont"
import SpoilerButton from "../SpoilerButton"
type props = {
  setTutorialStep: (step: number) => void
  tutorialStep: number
  setLock: (lock: boolean) => void
  lock: boolean
  handleUserInput: (e: any, action: string) => void
  setUserWrittenAnswer: (answer: string) => void
  userWrittenAnswer: string
  inputRef: any
}

export default function Tutorial({
  setTutorialStep,
  tutorialStep,
  setLock,
  lock,
  handleUserInput,
  setUserWrittenAnswer,
  userWrittenAnswer,
  inputRef,
}: props) {
  const [tutorialIsMCCorrect, setTutorialIsMCCorrect] = useState(false)
  switch (tutorialStep) {
    case 0:
      return (
        <div className="fixed 2xl:w-[70%] xl:w-[80%] w-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-5xl lg:text-center font-medium leading-[4rem]">
            In this mode, you'll see questions in both multiple-choice and
            written format.
          </h1>
          <div className="my-12 flex flex-row justify-center">
            <Button
              onClick={() => setTutorialStep(tutorialStep + 1)}
              className="bg-[#F6E7D2] hover:bg-[#FFF7EC]"
            >
              Next {"->"}
            </Button>
          </div>
        </div>
      )
    case 1:
      return (
        <div>
          <div className="2xl:max-w-[60%] xl:max-w-[80%] mx-auto mt-24 px-12 py-10 bg-[#222222] rounded-[10px] border-2 border-neutral-700 border-dashed">
            <h1 className="my-16 text-center text-7xl">
              <JapaneseFont>いち</JapaneseFont>
            </h1>
            <ul className="grid grid-cols-1 gap-5 mx-4 mt-24 mb-6 lg:grid-cols-2">
              <Button variant={"vocab"}>
                <span className="mr-5 text-lg">1. </span>6
              </Button>
              <Button
                variant={"vocab"}
                onClick={() => {
                  setTutorialIsMCCorrect(true)
                  setTimeout(() => {
                    setTutorialStep(tutorialStep + 1)
                  }, 2500)
                }}
                className={
                  tutorialIsMCCorrect
                    ? "bg-green-500 hover:bg-green-500 font-semibold"
                    : ""
                }
              >
                <span className="mr-5 text-lg">2. </span>
                <span className="underline underline-offset-4 font-bold">
                  1
                </span>
              </Button>
              <Button variant={"vocab"}>
                <span className="mr-5 text-lg">3. </span>5
              </Button>
              <Button variant={"vocab"}>
                <span className="mr-5 text-lg">4. </span>3
              </Button>
            </ul>
          </div>
          <div className="mt-12 flex justify-center 2xl:max-w-[60%] xl:max-w-[80%] mx-auto">
            <SpoilerButton
              text="Answer"
              className="py-2 px-4 text-neutral-300 border-none"
              externalOnClick={(e) => {
                handleUserInput(e, "showAnswer")
                setTutorialIsMCCorrect(true)
                setTimeout(() => {
                  setTutorialStep(tutorialStep + 1)
                }, 2000)
              }}
              hideSpoiler={!lock}
            >
              <h3 className="mt-6 text-xl">
                <span className="text-3xl font-semibold">
                  <u>1 </u>
                </span>
                - Think of "いち" sounding similar to the English word "itch."
                Imagine having just one big itch that you need to scratch.
              </h3>
            </SpoilerButton>
          </div>
          <ul className="list-disc text-3xl font-medium leading-[4rem]">
            <li className="w-full mx-36 mt-6">
              Click on the English word that matches the Japanese word provided.
            </li>
            <li className="w-full mx-36 mt-6">
              If you're unsure, click on the "Answer" button.
            </li>
          </ul>
        </div>
      )
    case 2:
      return (
        <div className="fixed 2xl:w-[70%] xl:w-[80%] w-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-5xl lg:text-center font-medium leading-[4rem]">
            If you answered correctly, you'll eventually see the question in
            written format.
          </h1>
          <div className="my-12 flex flex-row justify-center">
            <Button
              onClick={() => setTutorialStep(tutorialStep + 1)}
              className="bg-[#F6E7D2] hover:bg-[#FFF7EC]"
            >
              Next {"->"}
            </Button>
          </div>
        </div>
      )
    case 3:
      return (
        <div className="2xl:max-w-[60%] xl:max-w-[80%] mx-auto mt-24 px-12 py-10 bg-[#222222] rounded-[10px] border-2 border-neutral-700 border-dashed">
          <h1 className="my-16 text-center text-7xl">
            <JapaneseFont>いち</JapaneseFont>
          </h1>
          <div className="flex flex-row justify-center">
            {/* Render your input field for the write question here */}
            <form
              onSubmit={(e) => {
                e.preventDefault() // Prevent the form from refreshing the page
                setUserWrittenAnswer(userWrittenAnswer.toLowerCase())
                if (userWrittenAnswer === "1" || userWrittenAnswer === "one") {
                  setLock(true)
                  setTutorialIsMCCorrect(true)
                  setTimeout(() => {
                    setTutorialStep(tutorialStep + 1)
                    setLock(false)
                  }, 2000)
                }
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
                className={`${
                  (userWrittenAnswer === "1" || userWrittenAnswer === "one") &&
                  lock
                    ? "bg-green-500 hover:bg-green-500 font-semibold"
                    : ""
                } ${
                  lock && "placeholder:opacity-0"
                } w-96 py-[.85rem] px-6 bg-[#191919] rounded-md text-white text-xl placeholder:text-base focus:outline-none`}
                disabled={lock}
              />
            </form>
          </div>
          <p className="mt-12 pb-8 text-3xl text-center border-b">
            Type or say the correct answer in Japanese.
          </p>
          <p className="mt-4 mx-12 text-4xl leading-[3.5rem]">
            <span className="text-red-500 text-[2.5rem] font-medium">
              Tutorial:
            </span>{" "}
            type{" "}
            <span className="underline underline-offset-2 font-semibold">
              "1"
            </span>{" "}
            or click the voice icon and say "
            <span className="underline underline-offset-2 font-semibold">
              one
            </span>
            ".
          </p>
          <div className="my-12 flex flex-row justify-center"></div>
        </div>
      )
    case 4:
      return (
        <div className="fixed 2xl:w-[70%] xl:w-[80%] w-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-5xl lg:text-center font-medium leading-[4rem]">
            If you answer incorrectly, it will turn back into a multiple choice
            answer.
          </h1>
          <div className="my-12 flex flex-row justify-center">
            <Button
              onClick={() => setTutorialStep(-1)}
              className="bg-[#F6E7D2] hover:bg-[#FFF7EC]"
            >
              Get Started! {"->"}
            </Button>
          </div>
        </div>
      )
    default:
      return <h1>Hello</h1>
  }
}
