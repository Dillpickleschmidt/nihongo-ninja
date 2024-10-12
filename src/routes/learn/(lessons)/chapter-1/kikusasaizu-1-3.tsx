import YouTubeVideo from "@/features/youtube/YouTube"
import { Button } from "@/components/ui/button"
import { A } from "@solidjs/router"

export default function page() {
  return (
    <div class="flex w-full items-center justify-center">
      <div class="w-full px-4 pb-32 md:px-48">
        <YouTubeVideo
          videoId="VKETvr5uXsk"
          title="kikusasaizu-1-3"
          credit="Nihongo Kikusasaizu"
        />
      </div>
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-1/my-kikitori-conversation-3">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </div>
  )
}
