import { createSignal } from "solid-js"
import YouTubeIframe from "./components/YouTubeIframe"
import { cn } from "@/libs/cn"
import { For } from "solid-js"
import { formatDuration } from "@/util/timeFormat"

type Timestamp = {
  label: string
  time: number
}

type YouTubeVideoProps = {
  videoId: string
  title: string
  startTime?: number
  timestamps?: Timestamp[]
  credit?: string
  glow?: boolean
  class?: string
}

export default function YouTubeVideo(props: YouTubeVideoProps) {
  const [seekTime, setSeekTime] = createSignal<number | null>(null)

  return (
    <div>
      {props.glow ? (
        <div class="glow">
          <YouTubeIframe
            videoId={props.videoId}
            title={props.title}
            startTime={props.startTime}
            seekTime={seekTime()}
          />
        </div>
      ) : (
        <YouTubeIframe
          videoId={props.videoId}
          title={props.title}
          startTime={props.startTime}
          seekTime={seekTime()}
        />
      )}

      {props.credit && (
        <div class="mt-2">
          <small class="text-muted-foreground">
            Credit: <span class="font-semibold">{props.credit}</span>
          </small>
        </div>
      )}

      {props.timestamps && (
        <>
          <div class="mt-4 flex justify-center">
            <ul class="list-disc">
              <For each={props.timestamps}>
                {(timestamp) => (
                  <li
                    class="transform cursor-pointer duration-150 ease-in-out hover:scale-[99%]"
                    onClick={() => setSeekTime(timestamp.time)}
                  >
                    <div
                      class={cn(
                        "inline-flex space-x-2 text-base font-light text-blue-400",
                        props.class,
                      )}
                    >
                      <div class="min-w-8">
                        {formatDuration(timestamp.time)}
                      </div>
                      <span>{timestamp.label}</span>
                    </div>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60

  const hDisplay = h > 0 ? `${h}:` : ""
  const mDisplay = `${m}:`
  const sDisplay = s.toString().padStart(2, "0")

  return `${hDisplay}${mDisplay}${sDisplay}`
}
