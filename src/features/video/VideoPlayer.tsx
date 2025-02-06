// VideoPlayer.tsx
import { createSignal, Show, onMount, createResource } from "solid-js"
import { getDriveThumbnail } from "./googleDrive"
import VideoControls from "./VideoControls"

type VideoPlayerProps = {
  id: string
  initialThumbnail?: string
  controls?: boolean
  ref?: (el: HTMLVideoElement) => void
}

export default function VideoPlayer(props: VideoPlayerProps) {
  const [video, setVideo] = createSignal<HTMLVideoElement>()
  const controls = props.controls ?? true
  const [loaded, setLoaded] = createSignal<boolean>(false)
  const [canPlay, setCanPlay] = createSignal<boolean>(false)
  const [error, setError] = createSignal<string | undefined>()
  const [videoSrc, setVideoSrc] = createSignal<string>()

  // Thumbnail handling
  const [thumbnailUrl] = createResource(
    () => props.id,
    async (id) => {
      if (props.initialThumbnail) return props.initialThumbnail
      try {
        return await getDriveThumbnail(id)
      } catch (error) {
        console.error("Error fetching thumbnail:", error)
        return undefined
      }
    },
  )

  onMount(() => {
    const apiUrl = `/api/video/${props.id}`
    setVideoSrc(apiUrl)
  })

  const handleLoadedMetadata = () => {
    const videoElement = video()
    if (videoElement) {
      setLoaded(true)
      if (videoElement.textTracks[0]) {
        videoElement.textTracks[0].mode = "showing"
      }
    }
  }

  const handleCanPlay = () => {
    setCanPlay(true)
  }

  const handleError = (e: Event) => {
    const videoElement = e.target as HTMLVideoElement
    const videoError = videoElement.error
    const errorMessage = `Failed to load video: ${videoError?.message || "Unknown error"}`
    setError(errorMessage)
  }

  return (
    <div class="relative aspect-video w-full">
      <Show
        when={!error()}
        fallback={
          <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 p-8 text-white">
            <div class="z-10">{error()}</div>
          </div>
        }
      >
        {/* Only show loading state when video isn't ready to play */}
        <Show when={!canPlay()}>
          <div class="absolute inset-0 flex items-center justify-center">
            <img
              src={thumbnailUrl()}
              alt="Video thumbnail"
              class="h-full w-full object-cover"
            />
            <div class="absolute z-10">Loading...</div>
          </div>
        </Show>

        <video
          ref={(el) => {
            setVideo(el)
            props.ref?.(el)
          }}
          src={videoSrc()}
          class="absolute inset-0 z-20 h-full w-full"
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          onCanPlay={handleCanPlay}
          onError={handleError}
        >
          Your browser does not support the video tag.
        </video>

        <Show when={loaded() && controls}>
          <VideoControls videoRef={video} />
        </Show>
      </Show>
    </div>
  )
}
