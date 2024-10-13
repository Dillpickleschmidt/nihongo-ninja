import { Button } from "@/components/ui/button"
import CharacterBox from "@/features/kana-quiz/components/CharacterBox"
import { useKanaQuiz } from "@/features/kana-quiz/hooks/useKanaQuiz"
import { A } from "@solidjs/router"
import { For, Show } from "solid-js"

// This program does the following:
// 1. Shuffle the kana
// 2. Map them to character boxes
// 3. Display the character boxes
// 4. When the user types in the character box, check if it matches the character

type KanaQuizProps = {
  kana: { hiragana: string; romaji: string[] }[]
  nextLesson: string
  title: string
}

export default function KanaQuiz(props: KanaQuizProps) {
  const {
    characterBoxes,
    showResults,
    numCorrect,
    handleInputChange,
    handleSubmit,
  } = useKanaQuiz(props.kana)
  // const scrollRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   if (showResults && scrollRef.current) {
  //     scrollRef.current.scrollTo(0, 0)
  //   }
  // }, [showResults])

  return (
    <>
      <div class="text-foreground-secondary text-center">
        <Show
          when={showResults()}
          fallback={
            <>
              <h1 class="mb-4 pt-12 text-5xl font-semibold">{props.title}</h1>
              <h2 class="text-xl">
                Type the english spelling of each character into their
                respective boxes.
              </h2>
              <h2 class="text-xl">Take it as many times as you like! 👍</h2>
            </>
          }
        >
          <h1 class="mb-4 pt-12 text-6xl font-semibold">
            {numCorrect() / props.kana.length <= 0.5
              ? "YOU FAILED! 🤦"
              : numCorrect() / props.kana.length <= 0.8
                ? "You're getting there! 😎"
                : "Nice job! 🥳"}
          </h1>
          <h2 class="text-xl">
            You got {numCorrect()} out of {props.kana.length} correct.{" "}
            {numCorrect() / props.kana.length <= 0.5
              ? "Review the terms and try again!"
              : numCorrect() / props.kana.length <= 0.8
                ? "Try again and see if you can get 80%!"
                : "Keep it up!"}
          </h2>
        </Show>
      </div>
      <div class="container mx-auto mt-12 grid grid-cols-[repeat(auto-fill,minmax(145px,_1fr))] gap-3 p-3 pb-32 text-center text-[#F8F5E9]">
        <For each={characterBoxes()}>
          {(characterBox, index) => (
            <CharacterBox
              character={characterBox.hiragana}
              userInput={characterBox.userInput}
              onInputChange={(newUserInput) =>
                handleInputChange(index(), newUserInput)
              }
              disabled={showResults()}
              class={`${showResults() && "shadow-none"} ${
                showResults() &&
                characterBox.isCorrect &&
                "border-[3px] border-green-500"
              }`}
              inputTextColor={
                showResults() && !characterBox.isCorrect
                  ? "text-red-500"
                  : showResults() && characterBox.isCorrect
                    ? "text-white"
                    : undefined
              }
              innerBorderColor={
                showResults() && !characterBox.isCorrect
                  ? "border-red-500"
                  : showResults() && characterBox.isCorrect
                    ? "border-green-500"
                    : undefined
              }
            />
          )}
        </For>
      </div>
      <div class="absolute bottom-16 right-16">
        <Show
          when={showResults()}
          fallback={
            <Button size="lg" onClick={handleSubmit}>
              Submit
            </Button>
          }
        >
          <A href={props.nextLesson}>
            <Button size="lg">Next Lesson {"->"}</Button>
          </A>
        </Show>
      </div>
    </>
  )
}
