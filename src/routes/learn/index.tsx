import { Button } from "@/components/ui/button"
import ChapterBoxes from "@/features/learn-page/ChapterBoxes"
import DottedScrollbar from "@/features/learn-page/DottedScrollbar"
import Sidebar from "@/features/sidebar/Sidebar"
import { Title } from "@solidjs/meta"

export default function index() {
  return (
    <>
      <Title>Nihongo Ninja - Learn Japanese</Title>
      <div class="px-10 pb-2 pt-10 text-center font-inter text-6xl font-medium text-primary opacity-50 dark:text-muted-foreground dark:opacity-100 lg:pb-[4.5rem] lg:pt-24">
        <h1 class="hidden md:inline-flex">
          日本語<span class="ml-6 italic">Nｉｎｊａ</span>
        </h1>
        <span>
          <h1 class="text-6xl md:hidden">
            日本語 <br />
            <span class="italic">
              <span class="font-normal">N</span>ｉｎｊａ
            </span>
          </h1>
        </span>
      </div>
      <div class="flex">
        <Sidebar />
        <div class="w-full pb-24 pl-6 sm:pl-12 xl:px-16">
          <div class="max-w-[1085px]">
            <div class="my-6 flex min-h-28 w-full items-center justify-center rounded-md border bg-card px-8 py-4 text-muted-foreground">
              No fixed curriculum—Nihongo Ninja aims to be your go-to hub for
              Japanese learning. We've scoured the internet to curate the best
              learning materials, bringing them together in one place for free.
            </div>
            <ChapterBoxes />
          </div>
        </div>
        {/* Right Slider (relative to offset others) */}
        <div class="relative flex w-14 justify-center md:w-28 xl:w-36 2xl:w-48">
          {/* Fixed positioning */}
          <div class="fixed top-0 flex h-screen flex-col justify-center">
            {/* <div class="relative h-[450px]">
              <div class="absolute h-full border-r-2 border-dashed border-neutral-500/25" />
              <div class="absolute -top-1 ml-[-.45rem] h-4 w-4 rounded-full bg-neutral-700" />
              {[...Array(11)].map((_, index) => (
                <div
                  class={`absolute ml-[-.175rem] h-2 w-2 rounded-full bg-neutral-700`}
                  style={{ top: `${(index + 1) * 4.16}%` }}
                />
              ))}
              <div class="absolute top-1/2 ml-[-.45rem] h-4 w-4 translate-y-[-0.15rem] rounded-full bg-neutral-700" />
              {[...Array(11)].map((_, index) => (
                <div
                  class={`absolute ml-[-.175rem] h-2 w-2 rounded-full bg-neutral-700`}
                  style={{ top: `${(index + 13) * 4.16 + 1.5}%` }}
                />
              ))}
              <div class="absolute bottom-0 ml-[-.45rem] h-4 w-4 rounded-full bg-neutral-700" />
            </div> */}
            <DottedScrollbar />
          </div>
        </div>
      </div>
    </>
  )
}
