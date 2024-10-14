import { Button } from "@/components/ui/button"
import Kikusasaizu from "@/features/kikusasaizu/Kikusasaizu"
import { A } from "@solidjs/router"

export default function page() {
  return (
    <div class="flex w-full items-center justify-center">
      <div class="w-full px-4 pb-32 md:px-16 lg:px-32 xl:px-48">
        <Kikusasaizu src="https://h5p.cee.sfu.ca/h5p/embed/2327" />
      </div>
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-3/chotto">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </div>
  )
}
