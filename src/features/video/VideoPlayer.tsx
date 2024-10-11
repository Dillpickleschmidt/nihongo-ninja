import {
  createEffect,
  createSignal,
  onCleanup,
  Show,
  onMount,
  createResource,
} from "solid-js"
import { formatDuration } from "@/util/timeFormat"
import PlaybackSpeedBtn from "./PlaybackSpeedBtn"
import { Timeline } from "./Timeline"
import { getDriveThumbnail } from "./googleDrive" // Assuming this function exists

type VideoPlayerProps = {
  id: string
  initialThumbnail?: string
}

export default function VideoPlayer(props: VideoPlayerProps) {
  const [video, setVideo] = createSignal<HTMLVideoElement>()
  const [loaded, setLoaded] = createSignal<boolean>(false)
  const [paused, setPaused] = createSignal<boolean>(true)
  const [fullScreen, setFullScreen] = createSignal<boolean>(false)
  const [volumeLevel, setVolumeLevel] = createSignal<"muted" | "low" | "high">(
    "high",
  )
  const [totalTime, setTotalTime] = createSignal<string>("0:00")
  const [currentTime, setCurrentTime] = createSignal<string>("0:00")
  const [captionsOn, setCaptionsOn] = createSignal<boolean>(false)
  const [playbackSpeed, setPlaybackSpeed] = createSignal(1)
  const [error, setError] = createSignal<string | undefined>()
  const [isFocused, setIsFocused] = createSignal<boolean>(false)

  let volumeSlider: HTMLInputElement
  let containerRef: HTMLDivElement

  const [videoSrc, setVideoSrc] = createSignal<string>()

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
    console.log("Component mounted")
    const apiUrl = `/api/video/${props.id}`
    setVideoSrc(apiUrl)
    console.log("Video source set:", apiUrl)
  })

  const handleLoadedMetadata = () => {
    const videoElement = video()
    if (videoElement) {
      setTotalTime(formatDuration(videoElement.duration))
      setLoaded(true)
      console.log("Video started!")
      if (videoElement.textTracks[0])
        videoElement.textTracks[0].mode = "showing"
    }
  }

  const handleError = (e: Event) => {
    const videoElement = e.target as HTMLVideoElement
    const videoError = videoElement.error
    const errorMessage = `Failed to load video: ${videoError?.message || "Unknown error"}`
    setError(errorMessage)
  }

  const handleTimeUpdate = () => {
    const videoElement = video()
    if (videoElement) {
      setCurrentTime(formatDuration(videoElement.currentTime))
    }
  }

  const handleVolumeChange = () => {
    const videoElement = video()
    if (videoElement) {
      if (videoElement.muted || videoElement.volume === 0) {
        setVolumeLevel("muted")
      } else if (videoElement.volume >= 0.5) {
        setVolumeLevel("high")
      } else {
        setVolumeLevel("low")
      }
    }
  }

  const handleFullscreenChange = () =>
    setFullScreen(!!document.fullscreenElement)

  // Control functions
  function togglePause(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    const videoElement = video()
    if (videoElement) {
      videoElement.paused ? videoElement.play() : videoElement.pause()
    }
  }

  function toggleFullScreen(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    const videoElement = video()
    if (videoElement) {
      document.fullscreenElement
        ? document.exitFullscreen()
        : videoElement.requestFullscreen()
    }
  }

  function toggleMute(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    const videoElement = video()
    if (videoElement) {
      videoElement.muted = !videoElement.muted
    }
  }

  function toggleMiniPlayer(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    const videoElement = video()
    if (videoElement) {
      if (document.pictureInPictureElement) {
        document.exitPictureInPicture()
      } else if (document.pictureInPictureEnabled) {
        videoElement.requestPictureInPicture()
      }
    }
  }

  function toggleCaptions(e: Event) {
    e.preventDefault()
    e.stopPropagation()
    setCaptionsOn(!captionsOn())
  }

  function skipTime(seconds: number, e?: Event) {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    const videoElement = video()
    if (videoElement) {
      videoElement.currentTime += seconds
    }
  }

  // Keyboard controls
  const handleKeyDown = (event: KeyboardEvent) => {
    if (!isFocused()) return
    const tagName = document.activeElement?.tagName.toLowerCase()
    if (tagName === "input" || tagName === "textarea") return
    if (tagName === "button" && event.key.toLowerCase() === " ") return

    switch (event.key.toLowerCase()) {
      case " ":
      case "k":
        togglePause(event)
        break
      case "f":
        toggleFullScreen(event)
        break
      case "m":
        toggleMute(event)
        break
      case "c":
        toggleCaptions(event)
        break
      case "i":
        toggleMiniPlayer(event)
        break
      case "arrowleft":
      case "j":
        skipTime(-5, event)
        break
      case "arrowright":
      case "l":
        skipTime(5, event)
        break
    }
  }

  // Focus management
  const handleFocus = () => {
    setIsFocused(true)
    document.addEventListener("keydown", handleKeyDown)
  }

  const handleBlur = () => {
    setIsFocused(false)
    document.removeEventListener("keydown", handleKeyDown)
  }

  // Effects
  createEffect(() => {
    const videoElement = video()
    if (videoElement && videoSrc()) {
      console.log("Video source changed, updating")
      videoElement.src = videoSrc()!
    }
  })

  createEffect(() => {
    const videoElement = video()
    if (videoElement) {
      videoElement.playbackRate = playbackSpeed()
      if (!isNaN(videoElement.duration)) {
        setTotalTime(formatDuration(videoElement.duration))
      }
      setCurrentTime(formatDuration(videoElement.currentTime))

      if (videoElement.textTracks.length > 0) {
        const track = videoElement.textTracks[0]
        track.mode = captionsOn() ? "showing" : "hidden"
      }

      if (volumeSlider) {
        videoElement.volume = parseFloat(volumeSlider.value)
        videoElement.muted = parseFloat(volumeSlider.value) === 0
      }

      handleVolumeChange()
    }
  })

  const getBufferedEnd = () => {
    const videoElement = video()
    if (
      videoElement &&
      videoElement.buffered &&
      videoElement.buffered.length > 0
    ) {
      return videoElement.buffered.end(videoElement.buffered.length - 1)
    }
    return 0
  }

  onMount(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    if (containerRef) {
      containerRef.addEventListener("focus", handleFocus)
      containerRef.addEventListener("blur", handleBlur)
    }
  })

  // onCleanup(() => {
  //   document.removeEventListener("fullscreenchange", handleFullscreenChange)
  //   document.removeEventListener("keydown", handleKeyDown)
  // if (containerRef) {
  //   containerRef.removeEventListener("focus", handleFocus)
  //   containerRef.removeEventListener("blur", handleBlur)
  // }
  // })

  return (
    <div>
      <style>
        {`
          .controls-gradient {
            position: absolute;
            bottom: 0;
            background: linear-gradient(to top, rgba(0,0,0, 0.75), transparent);
            width: 100%;
            aspect-ratio: 6/1;
            z-index: -1;
            pointer-events: none;
          }
          .volume-container {
            display: flex;
            align-items: center;
          }
          .volume-slider-wrapper {
            width: 0;
            overflow: hidden;
            transition: width 150ms ease-in-out;
          }
          .volume-container:hover .volume-slider-wrapper,
          .volume-slider-wrapper:focus-within {
            width: 100px;
          }
          .volume-slider {
            width: 100px;
          }
        `}
      </style>

      <div
        id="video-container"
        class="relative aspect-video w-full"
        ref={containerRef!}
        tabIndex={0}
      >
        <Show
          when={!error()}
          fallback={
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 p-8 text-white">
              <div class="z-10">{error()}</div>
            </div>
          }
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <img
              src={thumbnailUrl()}
              alt="Video thumbnail"
              class="h-full w-full object-cover"
            />
            <div class="absolute z-10">Loading...</div>
          </div>
          <video
            ref={setVideo}
            src={videoSrc()}
            class="absolute inset-0 z-20 h-full w-full"
            preload="auto"
            onLoadedMetadata={handleLoadedMetadata}
            onError={handleError}
            onPlay={() => setPaused(false)}
            onPause={() => setPaused(true)}
            onTimeUpdate={handleTimeUpdate}
            onVolumeChange={handleVolumeChange}
          >
            Your browser does not support the video tag.
          </video>

          <Show when={loaded()}>
            <div
              id="controls-container"
              onClick={togglePause}
              class={`absolute inset-0 z-30 flex flex-col justify-end transition-opacity duration-150 ease-in-out focus-within:opacity-100 hover:opacity-100 ${
                !paused() ? "opacity-0" : "opacity-100"
              }`}
            >
              <Show when={video()}>
                <Timeline videoRef={video()!} buffered={getBufferedEnd()} />
              </Show>
              <div tabIndex={-1} class="controls-gradient" />
              <div
                id="controls"
                class="z-20 flex w-full items-center gap-2 p-1 text-sm text-white"
              >
                <button
                  id="play-pause"
                  onClick={togglePause}
                  class="flex h-[30px] w-[30px] items-center justify-center opacity-85 transition-opacity duration-150 ease-in-out hover:opacity-100"
                >
                  {paused() ? (
                    <svg
                      class="play-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M320-200v-560l440 280-440 280Z" />
                    </svg>
                  ) : (
                    <svg
                      class="pause-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z" />
                    </svg>
                  )}
                </button>
                <div id="volume-container" class="volume-container">
                  <button onClick={toggleMute}>
                    {volumeLevel() === "high" ? (
                      <svg
                        class="volume-high"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320Z" />
                      </svg>
                    ) : volumeLevel() === "low" ? (
                      <svg
                        class="volume-low"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M200-360v-240h160l200-200v640L360-360H200Zm440 40v-322q45 21 72.5 65t27.5 97q0 53-27.5 96T640-320Z" />
                      </svg>
                    ) : (
                      <svg
                        class="volume-mute"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Z" />
                      </svg>
                    )}
                  </button>
                  <div class="volume-slider-wrapper">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value="0.8"
                      ref={volumeSlider!}
                      onClick={(e) => e.stopPropagation()}
                      class="volume-slider accent-[red] hover:cursor-pointer"
                    />
                  </div>
                </div>
                <div
                  id="duration-container"
                  class="flex flex-grow items-center gap-1"
                >
                  <div>{currentTime()}</div>/<div>{totalTime()}</div>
                </div>
                <button
                  id="captions-btn"
                  onClick={(e) => toggleCaptions(e)}
                  class={`${
                    captionsOn()
                      ? "border-b-2 border-red-500"
                      : "border-b-2 border-transparent opacity-85"
                  } transition-all duration-150 ease-in-out hover:opacity-100`}
                >
                  <svg
                    class="captions-btn"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v480q0 33-23.5 56.5T760-160H200Zm80-200h120q17 0 28.5-11.5T440-400v-40h-60v20h-80v-120h80v20h60v-40q0-17-11.5-28.5T400-600H280q-17 0-28.5 11.5T240-560v160q0 17 11.5 28.5T280-360Zm280 0h120q17 0 28.5-11.5T720-400v-40h-60v20h-80v-120h80v20h60v-40q0-17-11.5-28.5T680-600H560q-17 0-28.5 11.5T520-560v160q0 17 11.5 28.5T560-360Z" />
                  </svg>
                </button>
                <PlaybackSpeedBtn
                  playbackSpeed={playbackSpeed()}
                  setPlaybackSpeed={setPlaybackSpeed}
                />
                <button
                  id="mini-window"
                  onClick={(e) => toggleMiniPlayer(e)}
                  class="flex h-[30px] w-[30px] items-center justify-center opacity-85 transition-opacity duration-150 ease-in-out hover:opacity-100"
                >
                  <svg
                    class="mini-window"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="m402-654 118 117v-89h80v226H374v-80h90L346-598l56-56Zm358 494q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-600 0q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v240h-80v-240H160v480h400v80H160Z" />
                  </svg>
                </button>
                <button
                  id="fullscreen"
                  onClick={(e) => toggleFullScreen(e)}
                  class="flex h-[30px] w-[30px] items-center justify-center text-[1.1rem] opacity-85 transition-opacity duration-150 ease-in-out hover:opacity-100"
                >
                  {fullScreen() ? (
                    <svg
                      class="fullscreen-exit"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M240-120v-120H120v-80h200v200h-80Zm400 0v-200h200v80H720v120h-80ZM120-640v-80h120v-120h80v200H120Zm520 0v-200h80v120h120v80H640Z" />
                    </svg>
                  ) : (
                    <svg
                      class="fullscreen"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </Show>
        </Show>
      </div>
    </div>
  )
}
