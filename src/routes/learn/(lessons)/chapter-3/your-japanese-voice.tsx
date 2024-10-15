import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <>
      <div class="flex w-full items-center justify-center">
        <div class="w-full px-4 pb-32 md:px-48">
          <YouTubeVideo
            videoId="Phr8z5X5Sf4"
            title="Should your 'Japanese voice' sound different?"
            credit="Dogen"
          />
        </div>
      </div>
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-2/ne-yo">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
