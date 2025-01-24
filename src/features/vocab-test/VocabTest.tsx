// VocabTest.tsx
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
import { isServer } from "solid-js/web"
import VocabList from "./components/VocabList"
import { AppStorage, storageUtils } from "../local-storage"

type VocabTestProps = {
  data: VocabItem[]
  chapter: number
  title?: string
  path: string
}

export default function VocabTest({
  data,
  chapter,
  title,
  path,
}: VocabTestProps) {
  const [showVocabList, setShowVocabList] = createSignal(false)
  const [enabledItems, setEnabledItems] = createSignal<Set<string>>(new Set())
  const [randomizedData, setRandomizedData] = createSignal<VocabItem[]>([])
  const [userAnswers, setUserAnswers] = createSignal<Record<string, string>>({})
  const [particleAnswers, setParticleAnswers] = createSignal<
    Record<number, string[]>
  >({})
  const [showAnswers, setShowAnswers] = createSignal(false)
  const [showRetryPrompt, setShowRetryPrompt] = createSignal(false)
  const [markedCorrect, setMarkedCorrect] = createSignal<Set<number>>(
    new Set<number>(),
  )

  // Load saved state and initialize
  createEffect(() => {
    if (isServer) return

    const saved = storageUtils.get(AppStorage.vocabTestEnabled.key(path))
    const words =
      saved.length > 0
        ? new Set<string>(saved)
        : new Set<string>(data.map((item) => item.word))

    setEnabledItems(words)
    resetTest(words)
  })

  const resetTest = (words = enabledItems()) => {
    const filtered = data.filter((item) => words.has(item.word))
    setRandomizedData([...filtered].sort(() => Math.random() - 0.5))
    setUserAnswers({})
    setParticleAnswers({})
    setMarkedCorrect(new Set<number>())
    setShowAnswers(false)
    setShowRetryPrompt(false)
  }

  const handleVocabListChange = (items: Set<string>) => {
    setEnabledItems(items)
    resetTest(items)
  }

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

  const cleanWord = (word: string): string => {
    return word
      .toLowerCase()
      .trim()
      .replace(/\.{3}|[.。]/g, "")
  }

  const isCorrect = (index: number, field: "kana" | "english") => {
    if (markedCorrect().has(index)) return true

    const userAnswer = cleanWord(userAnswers()[`${index}-${field}`] || "")
    const entry = randomizedData()[index]

    if (field === "kana") {
      return (
        userAnswer === cleanWord(extractHiragana(entry.furigana?.[0] ?? ""))
      )
    }
    return entry.english?.some((eng) => cleanWord(eng) === userAnswer)
  }

  const hasIncorrectAnswer = (index: number) => {
    if (markedCorrect().has(index)) return false

    const entry = randomizedData()[index]
    const needsKana = !isKana(cleanWord(entry.word))

    return (
      (needsKana && !isCorrect(index, "kana")) || !isCorrect(index, "english")
    )
  }

  const handleMarkCorrect = (index: number) => {
    setMarkedCorrect((prev) => {
      const newSet = new Set(prev)
      newSet.add(index)
      return newSet
    })
  }

  const handleUndoMark = (index: number) => {
    setMarkedCorrect((prev) => {
      const newSet = new Set(prev)
      newSet.delete(index)
      return newSet
    })
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

  const handleRetryWithIncorrect = () => {
    // Get indices of incorrect answers (excluding marked correct)
    const incorrectIndices = randomizedData().reduce<number[]>(
      (acc, _, index) => {
        if (hasIncorrectAnswer(index) && !markedCorrect().has(index)) {
          acc.push(index)
        }
        return acc
      },
      [],
    )

    // Get the words for incorrect answers
    const incorrectWords = incorrectIndices.map(
      (index) => randomizedData()[index].word,
    )
    const incorrectWordsSet = new Set(incorrectWords)

    // Update enabled items to only include incorrect words
    setEnabledItems(incorrectWordsSet)

    // Save to localStorage - THIS LINE CHANGES
    storageUtils.set(AppStorage.vocabTestEnabled.key(path), [
      ...incorrectWordsSet,
    ])

    // Reset the test state
    resetTest()
  }

  const checkParticleAnswers = (wordIndex: number) => {
    if (markedCorrect().has(wordIndex)) {
      return Array(randomizedData()[wordIndex].particles?.length || 0).fill(
        true,
      )
    }

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

    // Only show retry prompt if there are incorrect answers
    const hasAnyIncorrect = randomizedData().some(
      (_, index) => hasIncorrectAnswer(index) && !markedCorrect().has(index),
    )

    setShowRetryPrompt(hasAnyIncorrect)
  }

  return (
    <ContentBox nextButtonText="Next Lesson ->" nextButtonLink="/learn">
      <div class="absolute right-4 top-4">
        <Button
          onClick={() => setShowVocabList(!showVocabList())}
          variant="outline"
        >
          {showVocabList() ? "Hide List" : "Show List"}
        </Button>
      </div>
      <h1 class="mx-20 border-b-2 border-orange-400 px-8 pb-12 pt-24 text-center text-4xl font-semibold">
        {title ? title : `Chapter ${chapter} Vocab Test`}
      </h1>
      <Show when={showVocabList()}>
        <div class="mx-auto mb-8 max-w-2xl rounded-lg border bg-card p-4">
          <h2 class="mb-4 text-xl font-semibold">Vocabulary List</h2>
          <VocabList
            data={data}
            path={path}
            onCheckedChange={handleVocabListChange}
          />
        </div>
      </Show>

      <div class="px-4 pb-32 sm:px-8 md:px-12">
        <ul class="list-none space-y-1 pt-12">
          <For each={randomizedData()}>
            {(entry, wordIndex) => (
              <li class="relative">
                <Show when={showAnswers() && hasIncorrectAnswer(wordIndex())}>
                  <Button
                    onClick={() => handleMarkCorrect(wordIndex())}
                    class="absolute left-[16px] bg-green-500 hover:bg-green-600 sm:left-[32px] md:left-[-48px]"
                  >
                    Overwrite?
                  </Button>
                </Show>
                <Show when={showAnswers() && markedCorrect().has(wordIndex())}>
                  <Button
                    onClick={() => handleUndoMark(wordIndex())}
                    class="absolute left-[16px] bg-yellow-500 hover:bg-yellow-600 sm:left-[32px] md:left-[-48px]"
                  >
                    ↶ Undo?
                  </Button>
                </Show>
                <TextFieldRoot class="w-full">
                  <div
                    class={`grid w-full ${randomizedData().find((item) => item.particles) ? "grid-cols-[180px_200px_200px_120px]" : "grid-cols-3"} gap-2`}
                  >
                    <TextFieldLabel class="flex h-full justify-center pt-1 text-center text-[1.33rem]">
                      {entry.word}
                    </TextFieldLabel>

                    <Show
                      when={!isKana(cleanWord(entry.word))}
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
        <div class="!mt-8 flex flex-col items-center gap-4">
          <Button onClick={handleCheckAnswers} class="bg-indigo-400">
            Check Answers
          </Button>

          <Show when={showAnswers() && showRetryPrompt()}>
            <div class="mt-8 flex flex-col items-center gap-4 rounded-lg border bg-card p-6">
              <p class="text-lg font-medium">
                Practice again with the answers you got wrong?
              </p>
              <div class="flex gap-4">
                <Button
                  onClick={handleRetryWithIncorrect}
                  class="bg-green-500 hover:bg-green-600"
                >
                  Yes
                </Button>
                <Button
                  onClick={() => setShowRetryPrompt(false)}
                  variant="outline"
                >
                  No
                </Button>
              </div>
            </div>
          </Show>
        </div>
      </div>
    </ContentBox>
  )
}
