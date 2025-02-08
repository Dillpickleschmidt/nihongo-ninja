import { For, Show, createSignal, onCleanup } from "solid-js"
import type { RichVocabItem } from "@/types/vocab"
import { AudioLines } from "lucide-solid"
import { ImmersionKitResponse } from "../immersion-kit"
import VocabVideoSection from "./VocabVideoSection"
import { AudioNormalizer } from "../util/audio-normalizer"

type VocabExamplesProps = {
  data: RichVocabItem[]
  index: number
  examples: ImmersionKitResponse["data"][0]["examples"] | undefined
}

export default function VocabExamples(props: VocabExamplesProps) {
  const item = props.data[props.index]
  const [playingUrl, setPlayingUrl] = createSignal<string | null>(null)
  const [pauseVideo, setPauseVideo] = createSignal<(() => void) | null>(null)
  const normalizer = AudioNormalizer.getInstance()

  const playAudio = async (soundUrl: string) => {
    // If clicking the same audio that's playing, stop it
    if (playingUrl() === soundUrl) {
      setPlayingUrl(null)
      return
    }

    // Pause video if playing
    pauseVideo()?.()

    try {
      setPlayingUrl(soundUrl)
      const audio = await normalizer.play(soundUrl)

      audio.onended = () => {
        if (playingUrl() === soundUrl) {
          setPlayingUrl(null)
        }
      }

      // If playback fails or is stopped, clear the playing state
      audio.onpause = () => {
        if (playingUrl() === soundUrl) {
          setPlayingUrl(null)
        }
      }
    } catch (error) {
      console.error("Error playing audio:", error)
      setPlayingUrl(null)
    }
  }

  const handlePauseVideo = (pause: () => void) => {
    setPauseVideo(() => pause)
  }

  onCleanup(() => {
    normalizer.clearCache()
  })

  return (
    <div class="space-y-6">
      <Show when={item.videos?.length}>
        <VocabVideoSection
          videos={item.videos}
          onVideoPlay={() => setPlayingUrl(null)}
          onPause={handlePauseVideo}
        />
      </Show>

      <div class="space-y-4">
        <Show
          when={props.examples?.length}
          fallback={<p class="text-gray-500">No examples available</p>}
        >
          <For each={props.examples?.slice(0, 2)}>
            {(example) => (
              <div class="flex flex-col gap-4 sm:flex-row">
                <div class="w-full sm:w-40">
                  <img
                    src={example.image_url}
                    alt="Anime scene"
                    class="h-48 w-full cursor-pointer rounded-lg object-cover duration-200 ease-in-out sm:h-24 sm:w-40"
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
                          playingUrl() === example.sound_url
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
