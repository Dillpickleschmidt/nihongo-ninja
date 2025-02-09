import { createEffect, createSignal, onCleanup } from "solid-js"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import VideoPlayer from "@/features/video/VideoPlayer"
import type { EmblaCarouselType } from "embla-carousel"

const videos = [
  "173YLCjdJNvHc12nt4ONNMug-dsW4vt5v",
  "1EG28jm5wfOgF1N-CJ9DCsMLEc0P0EaqD",
  "1iYXjY8X1ry3-dW_02GUZa_s9YsmPIfbr",
]

type ToolPreviewCarouselProps = {
  currentIndex: number
  onIndexChange?: (index: number) => void
}

export default function ToolPreviewCarousel(props: ToolPreviewCarouselProps) {
  const [api, setApi] = createSignal<EmblaCarouselType>()
  let cleanupCurrentVideo: (() => void) | undefined

  const playVideo = async (videoElement: HTMLVideoElement) => {
    try {
      videoElement.muted = true
      await videoElement.play()
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Error playing video:", error)
      }
    }
  }

  createEffect(() => {
    const embla = api()
    if (!embla) return

    const handleSlideChange = () => {
      // Cleanup previous video
      if (cleanupCurrentVideo) {
        cleanupCurrentVideo()
        cleanupCurrentVideo = undefined
      }

      const selectedIndex = embla.selectedScrollSnap()
      const slideNodes = embla.slideNodes()
      const videoElement = slideNodes[selectedIndex].querySelector(
        "video",
      ) as HTMLVideoElement

      if (!videoElement) return

      const handleEnded = () => {
        embla.scrollNext()
      }

      videoElement.addEventListener("ended", handleEnded)
      playVideo(videoElement)

      cleanupCurrentVideo = () => {
        videoElement.removeEventListener("ended", handleEnded)
        videoElement.pause()
        videoElement.currentTime = 0
      }
    }

    embla.on("select", handleSlideChange)
    handleSlideChange() // Initial play

    onCleanup(() => {
      embla.off("select", handleSlideChange)
      if (cleanupCurrentVideo) {
        cleanupCurrentVideo()
      }
    })
  })

  return (
    <>
      <style>
        {`
          .asbplayer-drag-zone-initial {
            position: static !important;
            width: 100% !important;
            left: 0 !important;
            right: 0 !important;
            display: none !important;
          }
        `}
      </style>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          startIndex: props.currentIndex,
        }}
      >
        <CarouselContent class="!ml-0">
          {videos.map((videoId) => (
            <CarouselItem class="!pl-0">
              <div class="aspect-video w-full">
                <VideoPlayer
                  id={videoId}
                  controls={false}
                  muted // Add this to help with autoplay
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          class="absolute left-0 top-1/2 h-full w-10 -translate-y-1/2 rounded-none border-none bg-transparent duration-100 hover:bg-black/25"
          data-carousel-prev
        />
        <CarouselNext
          class="absolute right-0 top-1/2 h-full w-10 -translate-y-1/2 rounded-none border-none bg-transparent duration-100 hover:bg-black/25"
          data-carousel-next
        />
      </Carousel>
    </>
  )
}
