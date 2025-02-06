// VocabText.tsx
import { createSignal, For, Show, Suspense } from "solid-js"
import type { RichVocabItem } from "@/types/vocab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AudioLines, Book, Grid2x2 } from "lucide-solid"
import { ImmersionKitResponse } from "../immersion-kit"
import VocabTextBody from "./VocabTextBody"

type VocabTextProps = {
  data: RichVocabItem[]
  index: number
  examples: ImmersionKitResponse["data"][0]["examples"] | undefined
}

function VocabExamples(props: {
  examples: ImmersionKitResponse["data"][0]["examples"] | undefined
}) {
  const [playingAudio, setPlayingAudio] = createSignal<HTMLAudioElement | null>(
    null,
  )

  const playAudio = (soundUrl: string) => {
    if (playingAudio()) {
      playingAudio()?.pause()
      if (playingAudio()) {
        playingAudio()!.currentTime = 0
      }
    }

    const audio = new Audio(soundUrl)
    setPlayingAudio(audio)
    audio.play().catch((error) => {
      console.error("Error playing audio:", error)
      setPlayingAudio(null)
    })
    audio.onended = () => setPlayingAudio(null)
  }

  return (
    <div class="space-y-4">
      <Show
        when={props.examples?.length}
        fallback={<p class="text-gray-500">No examples available</p>}
      >
        <For each={props.examples?.slice(0, 2)}>
          {(example) => (
            <div class="flex flex-col gap-4 sm:flex-row">
              <div class="w-full sm:w-32">
                <img
                  src={example.image_url}
                  alt="Anime scene"
                  class="h-48 w-full rounded-lg object-cover sm:h-20 sm:w-32"
                />
              </div>
              <div class="flex-grow">
                <div class="mb-2 flex items-center gap-2">
                  <button
                    class="rounded-full p-2 hover:bg-neutral-200/50"
                    onClick={() =>
                      example.sound_url && playAudio(example.sound_url)
                    }
                    disabled={!example.sound_url}
                  >
                    <AudioLines
                      class={`h-4 w-4 ${
                        playingAudio()?.src === example.sound_url
                          ? "text-emerald-500"
                          : ""
                      }`}
                    />
                  </button>
                  <span class="text-sm text-gray-500">{example.deck_name}</span>
                </div>
                <p class="mb-1 font-japanese">{example.sentence}</p>
                <p class="text-sm text-gray-600">{example.translation}</p>
              </div>
            </div>
          )}
        </For>
      </Show>
    </div>
  )
}

export default function VocabText(props: VocabTextProps) {
  const item = props.data[props.index]

  return (
    <div class="min-h-48 px-8 py-6 lg:py-12 lg:pl-8 lg:pr-12">
      <h3 class="mb-4 ml-6 font-japanese text-2xl font-bold">
        <span class="font-japanese text-[1.375rem]">
          {`${props.index + 1}.`}{" "}
        </span>
        <span class="text-2xl" innerHTML={item.rubyText?.[0] || item.word} /> -{" "}
        <span class="font-japanese text-[1.375rem]">
          {item.english.join(", ")}
        </span>
      </h3>

      {/* Mobile: Tabbed Layout */}
      <div class="md:hidden">
        <Tabs defaultValue="info" class="w-full">
          <TabsList class="bg-white/50">
            <TabsTrigger
              value="info"
              class="text-primary-foreground/50 hover:text-black data-[selected]:text-black"
            >
              <Book class="mr-2 h-4 w-4" />
              Info
            </TabsTrigger>
            <TabsTrigger
              value="examples"
              class="text-primary-foreground/50 hover:text-black data-[selected]:text-black"
            >
              <Grid2x2 class="mr-2 h-4 w-4" />
              Examples
            </TabsTrigger>
          </TabsList>

          <TabsContent value="info">
            <VocabTextBody data={props.data} index={props.index} />
          </TabsContent>

          <TabsContent value="examples">
            <Suspense
              fallback={
                <div class="p-4 text-gray-500">Loading examples...</div>
              }
            >
              <VocabExamples examples={props.examples} />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>

      {/* Desktop: Compact Layout */}
      <div class="hidden md:grid md:grid-cols-2 md:gap-6">
        <div class="border-l-2 border-orange-400 pl-6">
          <VocabTextBody data={props.data} index={props.index} />
        </div>
        <div class="rounded-lg bg-white/50 p-4 shadow-inner shadow-black/15">
          <Suspense
            fallback={<div class="p-4 text-gray-500">Loading examples...</div>}
          >
            <VocabExamples examples={props.examples} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
