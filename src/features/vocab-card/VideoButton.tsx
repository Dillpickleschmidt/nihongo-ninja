import { createResource, Match, Show, Suspense, Switch } from "solid-js"
import { Button } from "@/components/ui/button"
import VideoPlayer from "@/features/video/VideoPlayer"
import { getDriveThumbnail } from "../video/googleDrive"
import { createSignal } from "solid-js"

type VideoButtonProps = {
  videoId: string
}

export function VideoButton(props: VideoButtonProps) {
  const [isOpen, setIsOpen] = createSignal(false)
  const [url] = createResource(
    async () => await getDriveThumbnail(props.videoId),
  )

  const handleToggle = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(!isOpen())
  }

  return (
    <div
      class={`relative z-20 aspect-video hover:bg-transparent ${
        isOpen()
          ? "w-full max-w-[850px] rounded-none"
          : "float-end mx-6 mt-6 w-56"
      } hover:text-inherit`}
    >
      <Show
        when={isOpen()}
        fallback={
          <Button
            class="absolute inset-0 z-30 flex items-center justify-center overflow-hidden bg-transparent hover:bg-transparent"
            onClick={handleToggle}
          >
            <Show when={url.loading}>
              <p class="">Loading thumbnail...</p>
            </Show>
            <Switch>
              <Match when={url.error}>
                <span class="">Error: {url.error}</span>
              </Match>
              <Match when={url()}>
                <img
                  src={url()}
                  class="absolute inset-0 h-full w-full"
                  alt="Video thumbnail"
                />
                <div class="absolute bottom-2 right-2">
                  <img
                    src="/icons/play.png"
                    alt=""
                    class="h-12 w-12 opacity-25"
                  />
                </div>
              </Match>
            </Switch>
          </Button>
        }
      >
        <div class="scale-[100.2%]">
          <VideoPlayer id={props.videoId} initialThumbnail={url()} />
          <Button
            onClick={handleToggle}
            variant="ghost"
            class="absolute right-4 top-4 z-50 p-2 text-xl leading-[0px]"
          >
            &times;
          </Button>
        </div>
      </Show>
    </div>
  )
}
