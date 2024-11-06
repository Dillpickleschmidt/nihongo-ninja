import { Button } from "@/components/ui/button"
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemLabel,
} from "@/components/ui/radio-group"
import ChapterBoxes from "@/features/learn-page/ChapterBoxes"
import {
  sortOrder,
  sortOrderTypes,
  useLearnPageContext,
} from "@/features/learn-page/context/LearnPageContext"
import DottedScrollbar from "@/features/learn-page/DottedScrollbar"
import Sidebar from "@/features/sidebar/Sidebar"
import { Title } from "@solidjs/meta"
import { For } from "solid-js"

export default function index() {
  const context = useLearnPageContext()

  function toTitleCase(str: string): string {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

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
        <div class="flex w-full justify-center pb-24 pl-6 sm:pl-12 xl:px-16">
          <div class="max-w-[1300px]">
            <div class="my-6 flex min-h-28 w-full items-center justify-center rounded-md border bg-card px-8 py-4 text-muted-foreground">
              No fixed curriculum—Nihongo Ninja aims to be your go-to hub for
              Japanese learning. We've scoured the internet to curate the best
              learning materials, bringing them together in one place for free.
            </div>
            <div class="space-y-2">
              <h4 class="text-base font-medium text-muted-foreground">
                Sort by:
              </h4>
              <RadioGroup
                value={context.sortOrder()}
                onChange={(value) => context.setSortOrder(value as sortOrder)}
                class="space-y-2 hover:cursor-pointer"
              >
                <For each={sortOrderTypes}>
                  {(item) => (
                    <RadioGroupItem
                      value={item}
                      class="flex items-center gap-2"
                    >
                      <RadioGroupItemControl />
                      <RadioGroupItemLabel
                        onClick={() => context.setSortOrder(item as sortOrder)}
                        class="text-sm hover:cursor-pointer"
                      >
                        {toTitleCase(item.replace(/-/g, " "))}
                      </RadioGroupItemLabel>
                    </RadioGroupItem>
                  )}
                </For>
              </RadioGroup>
            </div>

            <ChapterBoxes />
          </div>
        </div>
        {/* Right Slider (relative to offset others) */}
        <div class="relative flex w-14 justify-center md:w-28 xl:w-36 2xl:w-48">
          {/* Fixed positioning */}
          <div class="fixed top-0 flex h-screen flex-col justify-center">
            <DottedScrollbar />
          </div>
        </div>
      </div>
    </>
  )
}
