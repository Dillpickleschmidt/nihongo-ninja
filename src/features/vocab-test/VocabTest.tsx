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
      return entry.english?.some((eng) => eng.toLowerCase() === userAnswer)
    }
  }

  return (
    <ContentBox nextButtonText="Next Lesson ->" nextButtonLink="/learn">
      <h1 class="mx-20 border-b-2 border-orange-400 px-8 pb-12 pt-24 text-center text-4xl font-semibold">
        Chapter {chapter} Vocab Test
      </h1>
      <div class="px-12 pb-32 sm:px-16 md:px-24">
        <ul class="list-none space-y-1 pt-12">
          <For each={randomizedData()}>
            {(entry, index) => (
              <li>
                <TextFieldRoot class="w-full">
                  <div class="grid w-full grid-cols-3 gap-2 space-y-1">
                    <TextFieldLabel class="flex h-full items-center justify-center text-center text-[1.33rem]">
                      {entry.word}
                    </TextFieldLabel>

                    {/* Only show kana input if the word is not Hiragana/Katakana */}
                    <Show when={!isKana(entry.word)} fallback={<div />}>
                      <div>
                        <WanakanaWrapper>
                          <TextField
                            type="text"
                            placeholder="kana"
                            value={userAnswers()[`${index()}-kana`] ?? ""}
                            onInput={(e) =>
                              handleInputChange(
                                index(),
                                "kana",
                                e.currentTarget.value,
                              )
                            }
                            class="rounded-sm bg-card !py-[1.125rem] font-japanese text-xl placeholder:!text-base placeholder:opacity-75"
                          />
                        </WanakanaWrapper>
                        <Show when={showAnswers()}>
                          <>
                            {isCorrect(index(), "kana") ? (
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

                    {/* English input */}
                    <div>
                      <TextField
                        type="text"
                        placeholder="English"
                        value={userAnswers()[`${index()}-english`] ?? ""}
                        onInput={(e) =>
                          handleInputChange(
                            index(),
                            "english",
                            e.currentTarget.value,
                          )
                        }
                        class="rounded-sm bg-card !py-[1.125rem] text-xl placeholder:!text-base placeholder:opacity-75"
                      />
                      <Show when={showAnswers()}>
                        <>
                          {isCorrect(index(), "english") ? (
                            <span>✅</span>
                          ) : (
                            <small class="font-medium text-red-500">
                              {entry.english?.join(", ")}
                            </small>
                          )}
                        </>
                      </Show>
                    </div>
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
