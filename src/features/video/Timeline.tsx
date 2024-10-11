import { createSignal, createEffect, onMount, onCleanup } from "solid-js"

type TimelineProps = {
  videoRef: HTMLVideoElement
  buffered: number
}

export function Timeline(props: TimelineProps) {
  const [isScrubbing, setIsScrubbing] = createSignal(false)
  const [wasPaused, setWasPaused] = createSignal(false)
  const [playbackPercent, setPlaybackPercent] = createSignal(0)
  const [previewPosition, setPreviewPosition] = createSignal(0)

  let timelineContainer!: HTMLDivElement
  let rafId: number | null = null

  createEffect(() => {
    if (props.videoRef && props.videoRef.duration > 0) {
      setPlaybackPercent(props.videoRef.currentTime / props.videoRef.duration)
    }
  })

  function updatePlaybackPercent() {
    if (props.videoRef && props.videoRef.duration > 0) {
      setPlaybackPercent(props.videoRef.currentTime / props.videoRef.duration)
    }
    rafId = requestAnimationFrame(updatePlaybackPercent)
  }

  onMount(() => {
    function handleMove(e: MouseEvent | TouchEvent) {
      handleTimelineUpdate(e)
    }
    function handleStart(e: MouseEvent | TouchEvent) {
      e.preventDefault()
      e.stopPropagation()
      toggleScrubbing(e, true)
    }
    function handleEnd(e: MouseEvent | TouchEvent) {
      if (isScrubbing()) {
        e.preventDefault()
        e.stopPropagation()
        toggleScrubbing(e, false)
      }
    }

    timelineContainer.addEventListener("mousemove", handleMove)
    timelineContainer.addEventListener("mousedown", handleStart)
    timelineContainer.addEventListener("touchmove", handleMove, {
      passive: false,
    })
    timelineContainer.addEventListener("touchstart", handleStart, {
      passive: false,
    })
    document.addEventListener("mouseup", handleEnd)
    document.addEventListener("touchend", handleEnd)

    rafId = requestAnimationFrame(updatePlaybackPercent)

    onCleanup(() => {
      timelineContainer.removeEventListener("mousemove", handleMove)
      timelineContainer.removeEventListener("mousedown", handleStart)
      timelineContainer.removeEventListener("touchmove", handleMove)
      timelineContainer.removeEventListener("touchstart", handleStart)
      document.removeEventListener("mouseup", handleEnd)
      document.removeEventListener("touchend", handleEnd)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    })
  })

  function getClientXFromEvent(e: MouseEvent | TouchEvent): number {
    if ("touches" in e) {
      return e.touches[0]?.clientX ?? e.changedTouches[0]?.clientX ?? 0
    }
    return (e as MouseEvent).clientX
  }

  function handleTimelineUpdate(e: MouseEvent | TouchEvent) {
    e.preventDefault()
    e.stopPropagation()
    const rect = timelineContainer.getBoundingClientRect()
    const clientX = getClientXFromEvent(e)
    const percent =
      Math.min(Math.max(0, clientX - rect.x), rect.width) / rect.width
    setPreviewPosition(percent)

    if (isScrubbing()) {
      setPlaybackPercent(percent)
      if (props.videoRef) {
        props.videoRef.currentTime = percent * props.videoRef.duration
      }
    }
  }

  function toggleScrubbing(e: MouseEvent | TouchEvent, isStarting: boolean) {
    const rect = timelineContainer.getBoundingClientRect()
    const clientX = getClientXFromEvent(e)
    const percent =
      Math.min(Math.max(0, clientX - rect.x), rect.width) / rect.width
    setIsScrubbing(isStarting)
    setPlaybackPercent(percent)
    if (isStarting) {
      setWasPaused(props.videoRef.paused)
      props.videoRef.pause()
    } else {
      props.videoRef.currentTime = percent * props.videoRef.duration
      if (!wasPaused()) props.videoRef.play()
    }

    handleTimelineUpdate(e)
  }

  return (
    <>
      <style>
        {`
        .timeline {
          height: 3px;
          width: 100%;
          position: relative;
          background-color: rgba(100,100,100,0.5);
        }
        .buffer-bar, .progress-bar, .cursor-bar {
          position: absolute;
          height: 100%;
          top: 0;
          left: 0;
        }
        .buffer-bar {
          background-color: rgb(150,150,150);
          z-index: 2;
        }
        .cursor-bar {
          background-color: rgba(255, 255, 255, 0.5);
          z-index: 3;
          pointer-events: none;
          display: none;
        }
        .progress-bar {
          background-color: red;
          z-index: 4;
        }
        .timeline .thumb-indicator {
          --scale: 0;
          position: absolute;
          transform: translateX(-50%) scale(var(--scale));
          height: 200%;
          top: -50%;
          background-color: red;
          border-radius: 50%;
          transition: transform 150ms ease-in-out;
          aspect-ratio: 1/1;
          z-index: 5;
        }
        .timeline-container:hover .timeline,
        .timeline-container:active .timeline {
          height: 7px;
        }
        .timeline-container:hover .thumb-indicator,
        .timeline-container:active .thumb-indicator {
          --scale: 1;
        }
        .timeline-container:hover .cursor-bar,
        .timeline-container:active .cursor-bar {
          display: block;
        }
        `}
      </style>
      <div class="z-50 -mb-1 px-2" onClick={(e) => e.stopPropagation()}>
        <div
          id="timeline-container"
          class="timeline-container relative flex h-4 w-full cursor-pointer items-center pt-1"
          ref={timelineContainer}
          role="slider"
          aria-label="Video progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={playbackPercent() * 100}
        >
          <div id="timeline" class="timeline" aria-hidden="true">
            <div
              id="buffer-bar"
              class="buffer-bar"
              aria-hidden="true"
              style={{
                right: `calc(100% - ${(props.buffered / props.videoRef.duration) * 100}%)`,
              }}
            />
            <div
              id="cursor-bar"
              class="cursor-bar"
              aria-hidden="true"
              style={{ right: `calc(100% - ${previewPosition() * 100}%)` }}
            />
            <div
              id="progress-bar"
              class="progress-bar"
              aria-hidden="true"
              style={{ right: `calc(100% - ${playbackPercent() * 100}%)` }}
            />
            <div
              id="thumb-indicator"
              class="thumb-indicator"
              aria-hidden="true"
              style={{ left: `${playbackPercent() * 100}%` }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
