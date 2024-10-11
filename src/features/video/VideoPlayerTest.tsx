import { Show, createSignal, onMount } from "solid-js"

export default function VideoPlayerTest(props: { fileId: string }) {
  let videoRef: HTMLVideoElement | undefined
  const [error, setError] = createSignal<string>()
  const [isLoading, setIsLoading] = createSignal(true)
  const [canPlay, setCanPlay] = createSignal(false)

  onMount(() => {
    const apiUrl = `/api/video/${props.fileId}`
    if (videoRef) {
      videoRef.src = apiUrl
    }
  })

  return (
    <div class="relative">
      <video
        ref={videoRef}
        controls
        preload="auto"
        style={{ "max-width": "100%", height: "auto" }}
        onLoadedMetadata={() => setIsLoading(false)}
        onCanPlay={() => setCanPlay(true)}
        onWaiting={() => setCanPlay(false)}
        onError={(e) => {
          const videoError = (e.target as HTMLVideoElement).error
          setError(
            `Error: ${videoError?.message || "Unknown error"} (Code: ${videoError?.code})`,
          )
        }}
      >
        Your browser does not support the video tag.
      </video>
      <Show when={isLoading() || !canPlay()}>
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div class="text-white">
            {isLoading() ? "Loading video..." : "Buffering..."}
          </div>
        </div>
      </Show>
      <Show when={error()}>
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div class="text-white">{error()}</div>
        </div>
      </Show>
    </div>
  )
}
