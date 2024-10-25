import { createEffect, createMemo, createSignal, For, Show } from "solid-js"
import { usePracticeModeContext } from "../../context/PracticeModeContext"
import { handleWrittenAnswer } from "./write"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldDescription,
  TextFieldRoot,
} from "@/components/ui/textfield"

export default function WriteComponent() {
  const [userAnswer, setUserAnswer] = createSignal("")
  const [particleAnswers, setParticleAnswers] = createSignal<string[]>([])
  const [isMainAnswerCorrect, setIsMainAnswerCorrect] = createSignal(false)
  const [particleCorrectness, setParticleCorrectness] = createSignal<boolean[]>(
    [],
  )
  let inputRef: HTMLInputElement | undefined
  let particleRefs: (HTMLInputElement | undefined)[] = []

  const context = usePracticeModeContext()

  const correctEntry = createMemo(
    () => context.store.activeDeck[context.store.currentCardIndex],
  )

  createEffect(() => {
    if (!context.store.hasUserAnswered && inputRef) {
      inputRef.focus()
      setUserAnswer("")
      setIsMainAnswerCorrect(false)
      setParticleAnswers(
        new Array(correctEntry().particles?.length || 0).fill(""),
      )
      setParticleCorrectness(
        new Array(correctEntry().particles?.length || 0).fill(false),
      )
    }
  })

  function handleSubmit() {
    if (context.store.hasUserAnswered) return

    context.setStore("hasUserAnswered", true)

    const mainAnswerCorrect = handleWrittenAnswer(
      userAnswer(),
      correctEntry(),
      context.store.enabledAnswerCategories,
    )
    setIsMainAnswerCorrect(mainAnswerCorrect)

    const particleResults =
      correctEntry().particles?.map((particle, index) => {
        const userParticleAnswer = particleAnswers()[index]?.trim() || ""
        return (
          userParticleAnswer.toLowerCase() === particle.particle.toLowerCase()
        )
      }) ?? []

    setParticleCorrectness(particleResults)

    // If any part is incorrect, the whole answer is incorrect
    context.setStore(
      "isAnswerCorrect",
      mainAnswerCorrect && particleResults.every((result) => result),
    )
  }

  function handleParticleInput(index: number, value: string) {
    setParticleAnswers((prev) => {
      const newAnswers = [...prev]
      newAnswers[index] = value
      return newAnswers
    })
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" && !context.store.hasUserAnswered) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div class="mx-40">
      <div class="flex h-24 w-full items-end justify-center text-center">
        <Show when={context.store.hasUserAnswered}>
          <For
            each={correctEntry().answerCategories.filter((category) =>
              context.store.enabledAnswerCategories.includes(category.category),
            )}
          >
            {(category) => (
              <p class="text-xl font-bold text-primary">
                {category.category === "Kana" ? (
                  <span class="font-japanese">
                    {category.answers.join(", ")}
                  </span>
                ) : (
                  category.answers.join(", ")
                )}
              </p>
            )}
          </For>
        </Show>
      </div>
      <div class="space-y-2">
        <div class="flex items-end space-x-4">
          <TextFieldRoot class="w-full max-w-xs">
            <div class="h-6">
              {!context.store.hasUserAnswered && (
                <TextFieldDescription>Type your answer.</TextFieldDescription>
              )}
            </div>
            <TextField
              type="text"
              ref={inputRef}
              value={userAnswer()}
              onInput={(e) => setUserAnswer(e.currentTarget.value)}
              onKeyDown={handleKeyDown}
              autofocus
              disabled={context.store.hasUserAnswered}
              class={`${
                context.store.hasUserAnswered
                  ? isMainAnswerCorrect()
                    ? "text-green-500"
                    : "text-red-500"
                  : ""
              } font-bold opacity-100 xl:!text-lg`}
            />
          </TextFieldRoot>
          <Show
            when={
              context.store.hasUserAnswered && !context.store.isAnswerCorrect
            }
          >
            <div>
              <Button
                class="bg-green-500"
                onClick={() => {
                  setIsMainAnswerCorrect(true)
                  context.setStore("isAnswerCorrect", true)
                  particleAnswers().forEach((_, index) => {
                    setParticleCorrectness((prev) => {
                      const newCorrectness = [...prev]
                      newCorrectness[index] = true
                      return newCorrectness
                    })
                  })
                }}
              >
                No, I was correct
              </Button>
            </div>
          </Show>
        </div>
        <Show when={!!correctEntry().particles}>
          <ul class="space-y-2 pb-4 text-xl">
            <For each={correctEntry().particles}>
              {(object, index) => (
                <li class="flex items-center gap-2 font-bold">
                  {object.label ? `${object.label} -` : "Particle:"}
                  <TextFieldRoot class="max-w-xs">
                    <TextField
                      type="text"
                      ref={(el: HTMLInputElement | undefined) => {
                        particleRefs[index()] = el
                      }}
                      value={particleAnswers()[index()] || ""}
                      onInput={(e) =>
                        handleParticleInput(index(), e.currentTarget.value)
                      }
                      onKeyDown={handleKeyDown}
                      disabled={context.store.hasUserAnswered}
                      class={`w-20 font-japanese ${
                        context.store.hasUserAnswered
                          ? particleCorrectness()[index()]
                            ? "text-green-500"
                            : "text-red-500"
                          : ""
                      }`}
                    />
                  </TextFieldRoot>
                  <Show when={context.store.hasUserAnswered}>
                    <span class="font-japanese">{object.particle}</span>
                  </Show>
                </li>
              )}
            </For>
          </ul>
        </Show>
        <Button
          onClick={handleSubmit}
          disabled={context.store.hasUserAnswered}
          class="my-2 disabled:opacity-90"
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
