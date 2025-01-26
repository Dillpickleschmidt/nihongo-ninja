import { createSignal, onMount, createEffect } from "solid-js"
import { loadYouTubeApi } from "../util/youtubeAPI"
import { Loader2 } from "lucide-solid"

type YouTubeIframeProps = {
  videoId: string
  title: string
  startTime?: number
  seekTime?: number | null
  onTimeUpdate?: (currentTime: number) => void
}

export default function YouTubeIframe(props: YouTubeIframeProps) {
  let iframeRef!: HTMLIFrameElement
  const [isLoading, setIsLoading] = createSignal(true)
  const [player, setPlayer] = createSignal<YT.Player | null>(null)
  let timeUpdateInterval: number | undefined

  onMount(async () => {
    await loadYouTubeApi()

    new YT.Player(iframeRef, {
      events: {
        onReady: (event) => {
          setIsLoading(false)
          setPlayer(event.target)
          // Start time updates if needed
          if (props.onTimeUpdate) {
            timeUpdateInterval = window.setInterval(() => {
              const time = event.target.getCurrentTime()
              props.onTimeUpdate?.(time)
            }, 1000) as unknown as number
          }
        },
      },
    })
  })

  // Handle seek time changes
  createEffect(() => {
    const currentPlayer = player()
    const seekTime = props.seekTime
    if (currentPlayer && seekTime != null) {
      currentPlayer.seekTo(seekTime, true)
    }
  })

  const src = `https://www.youtube.com/embed/${props.videoId}?enablejsapi=1${
    props.startTime ? `&start=${props.startTime}` : ""
  }`

  return (
    <div class="relative z-10">
      <iframe
        ref={iframeRef}
        src={src}
        title={props.title}
        class="aspect-video w-full"
        allowfullscreen
      />
      {isLoading() && (
        <div class="absolute inset-0 grid place-items-center bg-background">
          <div class="flex min-h-48 items-center justify-center">
            <Loader2 class="h-20 w-20 animate-spin text-neutral-300" />
          </div>
        </div>
      )}
    </div>
  )
}
