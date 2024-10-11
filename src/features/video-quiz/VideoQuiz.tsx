import { createSignal, createEffect } from "solid-js"
import { Button } from "@/components/ui/button"
import { useVideoQuizContext } from "./context/VideoQuizContext"
import VideoQuizContent from "./components/VideoQuizContent"
import { QuizItem } from "@/types/video-quiz"
import {
  handleVideoAnswer,
  presentVideoQuestion,
  preloadVideos,
  shuffleArray,
} from "./components/video-quiz"
import { TextArea } from "@/components/ui/textarea"
import { TextFieldRoot } from "@/components/ui/textfield"
import data from "@/data/chapter-0/greetings-quiz.json"

export default function VideoQuiz() {
  const {
    correctEntry,
    setCorrectEntry,
    isAnswerCorrect,
    setIsAnswerCorrect,
    hasUserAnswered,
    setHasUserAnswered,
  } = useVideoQuizContext()
  const [userAnswer, setUserAnswer] = createSignal("")
  const [quizData, setQuizData] = createSignal(shuffleArray([...data]))

  createEffect(() => {
    if (quizData().length > 0) {
      setCorrectEntry(presentVideoQuestion(quizData()))
      preloadVideos(quizData()) // Preload videos in the randomized order
    }
  })

  const handleInput = (userAnswer: string, correctEntry: QuizItem) => {
    const isCorrect = handleVideoAnswer(userAnswer, correctEntry)
    setIsAnswerCorrect(isCorrect)
    setHasUserAnswered(true)
    console.log("User answer: ", userAnswer)
    console.log("Correct answer: ", correctEntry.answers.join(", "))
    console.log("Is answer correct? ", isCorrect)
  }

  const handleNextQuestion = () => {
    console.log("Next question!")
    setHasUserAnswered(false)
    setIsAnswerCorrect(false)
    setUserAnswer("")
    setQuizData((prev) => prev.filter((item) => item !== correctEntry()))
  }

  return (
    <div class="inset-0 flex flex-col items-center justify-center space-y-6 py-6">
      <VideoQuizContent />
      <div class="mx-12 flex flex-col items-center space-y-6">
        <TextFieldRoot>
          <TextArea
            placeholder="Write your answer in Japanese..."
            onInput={(e) =>
              setUserAnswer((e.target as HTMLTextAreaElement).value)
            }
            value={userAnswer()}
            class="scrollbar-none min-h-72 w-[550px] resize-none rounded-[40px] border-[3px] border-black bg-background-secondary px-8 py-6 text-center font-japanese text-3xl font-medium text-black shadow-inner placeholder:text-xl placeholder:font-normal focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-transparent dark:placeholder:text-black dark:placeholder:text-opacity-50"
          />
        </TextFieldRoot>
        <div class="flex w-full flex-row justify-center gap-4">
          <Button
            onClick={() => handleInput(userAnswer(), correctEntry()!)}
            class="w-24"
            disabled={hasUserAnswered()}
          >
            Submit
          </Button>
          {hasUserAnswered() && (
            <Button onClick={handleNextQuestion}>Next Question {"->"}</Button>
          )}
        </div>
        {hasUserAnswered() && (
          <div
            class={`text-xl ${isAnswerCorrect() ? "text-green-500" : "text-red-500"}`}
          >
            {isAnswerCorrect() ? "Correct!" : "Incorrect. Try again!"}
          </div>
        )}
      </div>
    </div>
  )
}
