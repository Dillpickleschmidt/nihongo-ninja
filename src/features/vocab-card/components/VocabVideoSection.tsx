// VocabVideoSection.tsx
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { For, Show, createSignal, onCleanup } from "solid-js"
import type { Video } from "@/types/vocab"
import VideoPlayer from "@/features/video/VideoPlayer"
import { Play } from "lucide-solid"

type VocabVideoSectionProps = {
  videos: Video[] | null | undefined
  onPause?: (pause: () => void) => void
  onVideoPlay?: () => void
}

export default function VocabVideoSection(props: VocabVideoSectionProps) {
  const [selectedVideo, setSelectedVideo] = createSignal<Video | null>(null)
  const [videos, setVideos] = createSignal<HTMLVideoElement[]>([])

  const pauseAllVideos = () => {
    videos().forEach((v) => v.pause())
  }

  const registerVideo = (video: HTMLVideoElement | undefined) => {
    if (video) {
      setVideos((prev) => [...prev.filter((v) => v !== video), video])
      props.onPause?.(() => pauseAllVideos())

      // Handle play event directly here
      video.addEventListener("play", props.onVideoPlay || (() => {}))
    }
  }

  onCleanup(() => {
    setVideos([])
  })

  return (
    <div class="space-y-4">
      <Show
        when={props.videos?.length}
        fallback={<p class="text-gray-500">No videos available</p>}
      >
        <For each={props.videos?.slice(0, 2)}>
          {(video) => (
            <div class="flex flex-col gap-4 sm:flex-row">
              {/* Video Container - Full size on mobile, preview on desktop */}
              <div class="relative w-full sm:w-32">
                <div class="h-48 sm:h-20">
                  {/* Mobile: Full Video */}
                  <div class="block overflow-hidden rounded-lg sm:hidden">
                    <VideoPlayer id={video.src} ref={registerVideo} />
                  </div>

                  {/* Desktop: Preview + Dialog */}
                  <div class="hidden sm:block">
                    <div
                      class="w-32 cursor-pointer overflow-hidden rounded-lg"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <VideoPlayer
                        id={video.src}
                        controls={false}
                        ref={registerVideo}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div class="flex-grow">
                <div class="mb-2 flex items-center gap-2">
                  <button
                    class="rounded-full p-2 hover:bg-neutral-200/50"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <Play class="h-4 w-4" />
                  </button>
                  <span class="text-sm text-gray-500">{video.title}</span>
                </div>
              </div>
            </div>
          )}
        </For>
      </Show>

      {/* Video Dialog (desktop only) */}
      <Dialog
        open={!!selectedVideo()}
        onOpenChange={() => setSelectedVideo(null)}
      >
        <DialogContent class="p-0 sm:min-w-[1000px]">
          <div class="">
            <VideoPlayer id={selectedVideo()?.src || ""} ref={registerVideo} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
