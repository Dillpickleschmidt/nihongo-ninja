// VocabExamples.tsx
import { For, Show, createSignal } from "solid-js"
import type { RichVocabItem } from "@/types/vocab"
import { AudioLines } from "lucide-solid"
import { ImmersionKitResponse } from "../immersion-kit"
import VocabVideoSection from "./VocabVideoSection"

type VocabExamplesProps = {
  data: RichVocabItem[]
  index: number
  examples: ImmersionKitResponse["data"][0]["examples"] | undefined
}

export default function VocabExamples(props: VocabExamplesProps) {
  const item = props.data[props.index]
  const [playingAudio, setPlayingAudio] = createSignal<HTMLAudioElement | null>(
    null,
  )
  const [pauseVideo, setPauseVideo] = createSignal<(() => void) | null>(null)

  const playAudio = (soundUrl: string) => {
    if (playingAudio()) {
      playingAudio()?.pause()
      playingAudio()!.currentTime = 0
    }

    // Pause video if playing
    // console.log("Calling pauseVideo from playAudio")
    pauseVideo()?.()

    const audio = new Audio(soundUrl)
    setPlayingAudio(audio)
    audio.play().catch((error) => {
      console.error("Error playing audio:", error)
      setPlayingAudio(null)
    })
    audio.onended = () => setPlayingAudio(null)
  }

  const stopAudio = () => {
    // console.log("Stopping audio")
    if (playingAudio()) {
      playingAudio()?.pause()
      playingAudio()!.currentTime = 0
      setPlayingAudio(null)
    }
  }

  const handlePauseVideo = (pause: () => void) => {
    // console.log("Setting new pause video function")
    setPauseVideo(() => pause)
  }

  return (
    <div class="space-y-6">
      {/* Videos Section (if available) */}
      <Show when={item.videos?.length}>
        <VocabVideoSection
          videos={item.videos}
          onVideoPlay={stopAudio}
          onPause={handlePauseVideo}
        />
      </Show>

      {/* ImmersionKit Examples */}
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
                    class="h-48 w-full cursor-pointer rounded-lg object-cover duration-200 ease-in-out sm:h-20 sm:w-32"
                    onClick={() =>
                      example.sound_url && playAudio(example.sound_url)
                    }
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
                    <span class="text-sm text-gray-500">
                      {example.deck_name}
                    </span>
                  </div>
                  <p class="mb-1 font-japanese">{example.sentence}</p>
                  <p class="text-sm text-gray-600">{example.translation}</p>
                </div>
              </div>
            )}
          </For>
        </Show>
      </div>
    </div>
  )
}
