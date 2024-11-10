import { createSignal, createEffect, For, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import type { VocabItem } from "@/types/vocab"
import { extractHiragana } from "@/util/vocabDataTransformer"
import ContentBox from "@/components/ContentBox"
import WanakanaWrapper from "../wanakana/WanaKana"
import { isKana } from "wanakana"
import {
  TextField,
  TextFieldLabel,
  TextFieldRoot,
} from "@/components/ui/textfield"

type VocabTestProps = {
  data: VocabItem[]
  chapter: number
}

export default function VocabTest({ data, chapter }: VocabTestProps) {
  const [randomizedData, setRandomizedData] = createSignal<VocabItem[]>([])
  const [showAnswers, setShowAnswers] = createSignal(false)
  const [userAnswers, setUserAnswers] = createSignal<{ [key: string]: string }>(
    {},
  )
  const [particleAnswers, setParticleAnswers] = createSignal<{
    [key: string]: string[]
  }>({})

  createEffect(() => {
    setRandomizedData([...data].sort(() => Math.random() - 0.5))
  })

  const handleInputChange = (
    index: number,
    field: "kana" | "english",
    value: string,
  ) => {
    setUserAnswers((prev) => ({
      ...prev,
      [`${index}-${field}`]: value,
    }))
  }

  const handleParticleInputChange = (
    wordIndex: number,
    particleIndex: number,
    value: string,
  ) => {
    setParticleAnswers((prev) => {
      const newAnswers = { ...prev }
      if (!newAnswers[wordIndex]) {
        newAnswers[wordIndex] = []
      }
      newAnswers[wordIndex][particleIndex] = value
      return newAnswers
    })
  }

  const checkParticleAnswers = (wordIndex: number) => {
    const entry = randomizedData()[wordIndex]
    const particles = entry.particles || []
    const userParticleAnswers = particleAnswers()[wordIndex] || []

    // Group correct particles by label
    const particlesByLabel = particles.reduce<Record<string, string[]>>(
      (acc, particle) => {
        const label = particle.label || "default"
        if (!acc[label]) {
          acc[label] = []
        }
        acc[label].push(particle.particle.toLowerCase())
        return acc
      },
      {},
    )

    // Create a copy of available particles for each label
    const availableParticles = { ...particlesByLabel }

    // Check each answer
    return userParticleAnswers.map((answer, index) => {
      const currentParticle = particles[index]
      const label = currentParticle.label || "default"
      const normalizedAnswer = answer?.trim().toLowerCase() || ""

      if (
        !availableParticles[label] ||
        availableParticles[label].length === 0
      ) {
        return false
      }

      const particleIndex = availableParticles[label].indexOf(normalizedAnswer)
      if (particleIndex !== -1) {
        availableParticles[label].splice(particleIndex, 1)
        return true
      }
      return false
    })
  }

  const isParticleCorrect = (wordIndex: number, particleIndex: number) => {
    if (!showAnswers()) return false
    const correctness = checkParticleAnswers(wordIndex)
    return correctness[particleIndex]
  }

  const handleCheckAnswers = () => {
    setShowAnswers(true)
  }

  const isCorrect = (index: number, field: "kana" | "english") => {
    const userAnswer = (userAnswers()[`${index}-${field}`] || "").toLowerCase()
    const entry = randomizedData()[index]
    if (field === "kana") {
      return (
        userAnswer === extractHiragana(entry.furigana?.[0] ?? "").toLowerCase()
      )
    } else {
      return entry.english?.some(
        (eng) => eng.toLowerCase() === userAnswer.trim(),
      )
    }
  }

  return (
    <ContentBox nextButtonText="Next Lesson ->" nextButtonLink="/learn">
      <h1 class="mx-20 border-b-2 border-orange-400 px-8 pb-12 pt-24 text-center text-4xl font-semibold">
        Chapter {chapter} Vocab Test
      </h1>
      <div class="px-4 pb-32 sm:px-8 md:px-12">
        <ul class="list-none space-y-1 pt-12">
          <For each={randomizedData()}>
            {(entry, wordIndex) => (
              <li>
                <TextFieldRoot class="w-full">
                  <div
                    class={`grid w-full ${randomizedData().find((item) => item.particles) ? "grid-cols-[180px_200px_200px_120px]" : "grid-cols-3"} gap-2`}
                  >
                    <TextFieldLabel class="flex h-full justify-center pt-1 text-center text-[1.33rem]">
                      {entry.word}
                    </TextFieldLabel>

                    <Show
                      when={
                        !isKana(
                          entry.word
                            .replace("～", "")
                            .replace("（", "")
                            .replace("）", ""),
                        )
                      }
                      fallback={<div />}
                    >
                      <div>
                        <WanakanaWrapper>
                          <TextField
                            type="text"
                            placeholder="kana"
                            value={userAnswers()[`${wordIndex()}-kana`] ?? ""}
                            onInput={(e) =>
                              handleInputChange(
                                wordIndex(),
                                "kana",
                                e.currentTarget.value,
                              )
                            }
                            autocomplete="false"
                            autocapitalize="none"
                            class="w-full rounded-sm bg-card !py-[1.125rem] font-japanese text-xl placeholder:!text-base placeholder:opacity-75"
                          />
                        </WanakanaWrapper>
                        <Show when={showAnswers()}>
                          <>
                            {isCorrect(wordIndex(), "kana") ? (
                              <span>✅</span>
                            ) : (
                              <small class="text-red-500">
                                {extractHiragana(entry.furigana?.[0] ?? "")}
                              </small>
                            )}
                          </>
                        </Show>
                      </div>
                    </Show>

                    <div>
                      <TextField
                        type="text"
                        placeholder="English"
                        value={userAnswers()[`${wordIndex()}-english`] ?? ""}
                        onInput={(e) =>
                          handleInputChange(
                            wordIndex(),
                            "english",
                            e.currentTarget.value,
                          )
                        }
                        autocomplete="false"
                        autocapitalize="none"
                        class="w-full rounded-sm bg-card !py-[1.125rem] text-xl placeholder:!text-base placeholder:opacity-75"
                      />
                      <Show when={showAnswers()}>
                        <>
                          {isCorrect(wordIndex(), "english") ? (
                            <span>✅</span>
                          ) : (
                            <small class="font-medium text-red-500">
                              {entry.english?.join(", ")}
                            </small>
                          )}
                        </>
                      </Show>
                    </div>

                    <Show when={entry.particles}>
                      <div class="flex flex-col gap-2">
                        <For each={entry.particles}>
                          {(particle, particleIndex) => (
                            <div class="flex items-center gap-1">
                              <Show when={particle.label}>
                                <span class="w-14 text-sm text-muted-foreground">
                                  {particle.label}
                                </span>
                              </Show>
                              <TextFieldRoot class="w-14">
                                <WanakanaWrapper>
                                  <TextField
                                    type="text"
                                    placeholder="Part."
                                    value={
                                      particleAnswers()[wordIndex()]?.[
                                        particleIndex()
                                      ] ?? ""
                                    }
                                    onInput={(e) =>
                                      handleParticleInputChange(
                                        wordIndex(),
                                        particleIndex(),
                                        e.currentTarget.value,
                                      )
                                    }
                                    autocomplete="false"
                                    class={`rounded-sm bg-card !py-2 font-japanese text-lg placeholder:!text-sm placeholder:opacity-75 ${showAnswers() ? (isParticleCorrect(wordIndex(), particleIndex()) ? "text-green-500" : "text-red-500") : ""}`}
                                  />
                                </WanakanaWrapper>
                              </TextFieldRoot>
                              <Show
                                when={
                                  showAnswers() &&
                                  !isParticleCorrect(
                                    wordIndex(),
                                    particleIndex(),
                                  )
                                }
                              >
                                <small class="ml-1 text-nowrap font-medium text-red-500">
                                  {particle.particle}
                                </small>
                              </Show>
                            </div>
                          )}
                        </For>
                      </div>
                    </Show>
                  </div>
                </TextFieldRoot>
              </li>
            )}
          </For>
        </ul>
        <div class="!mt-8 flex justify-center">
          <Button onClick={handleCheckAnswers} class="bg-indigo-400">
            Check Answers
          </Button>
        </div>
      </div>
    </ContentBox>
  )
}
