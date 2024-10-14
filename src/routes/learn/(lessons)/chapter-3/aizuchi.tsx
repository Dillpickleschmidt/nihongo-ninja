import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <>
      <div class="flex w-full items-center justify-center">
        <div class="w-full px-4 pb-32 md:px-48">
          <YouTubeVideo
            videoId="r0io_xgmcSs"
            title="Aizuchi: The Noises Japanese Make"
            credit="Kaname Naito"
          />
        </div>
      </div>
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-3/and-so-but">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
