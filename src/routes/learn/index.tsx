import BackgroundImage from "@/components/BackgroundImage"
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemLabel,
} from "@/components/ui/radio-group"
import ChapterBoxes from "@/features/learn-page/ChapterBoxes"
import type { SortOrder } from "@/features/learn-page/context/LearnPageContext"
import {
  sortOrderTypes,
  useLearnPageContext,
} from "@/features/learn-page/context/LearnPageContext"
import DottedScrollbar from "@/features/learn-page/DottedScrollbar"
import LearnPageTour from "@/features/learn-page/tour/LearnPageTour"
import Sidebar from "@/features/sidebar/Sidebar"
import { Title } from "@solidjs/meta"
import { createSignal, For } from "solid-js"
import { createEffect } from "solid-js"

export default function index() {
  const context = useLearnPageContext()
  const [isSidebarOpen, setIsSidebarOpen] = createSignal(false)

  createEffect(() => {
    console.log("Sidebar open state changed:", isSidebarOpen())
  })

  function toTitleCase(str: string): string {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <>
      <LearnPageTour
        isSidebarOpen={isSidebarOpen()}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <style>
        {`
        .custom-gradient-mask {
          mask-image: linear-gradient(to bottom, 
            transparent 0%,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 73%
          );
          -webkit-mask-image: linear-gradient(to bottom, 
            transparent 0%,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 73%
          );
        }
        `}
      </style>

      {/* Background Elements */}
      <div class="fixed inset-0 z-[-2] overflow-hidden">
        <img
          src="/img/japanese-gate.png"
          class="custom-gradient-mask pointer-events-none h-full w-full min-w-[800px] object-cover opacity-[0.05]"
        />
      </div>
      <BackgroundImage
        class="!fixed z-[-1]"
        backgroundImage="/img/dust-splatter-1.png"
        backgroundImageSize="1215px"
        backgroundImageOpacity={4}
      />
      <BackgroundImage
        class="!fixed z-[-1]"
        backgroundImage="/img/dots.svg"
        backgroundImageSize="400px"
        backgroundImageOpacity={3}
      />

      <Title>Nihongo Ninja - Learn Japanese</Title>

      {/* Full-width header */}
      <div class="w-full border-b-2 border-neutral-400 py-10 text-center font-inter text-6xl font-medium text-muted-foreground dark:border-input lg:py-16">
        Nihongo Ninja
      </div>

      {/* Main content area */}
      <div class="flex min-h-screen justify-center">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen()} setIsOpen={setIsSidebarOpen} />

        {/* Centered content */}
        <div class="w-full max-w-[1300px] pl-4 sm:pl-6 lg:pl-8">
          <div class="mt-8">
            {/* Controls Header */}
            <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div id="sort-controls" class="space-y-2">
                <h4 class="text-base font-medium text-muted-foreground">
                  Sort by:
                </h4>
                <RadioGroup
                  value={context.sortOrder()}
                  onChange={(value) => context.setSortOrder(value as SortOrder)}
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
                          onClick={() =>
                            context.setSortOrder(item as SortOrder)
                          }
                          class="text-sm hover:cursor-pointer"
                        >
                          {toTitleCase(item.replace(/-/g, " "))}
                        </RadioGroupItemLabel>
                      </RadioGroupItem>
                    )}
                  </For>
                </RadioGroup>
              </div>

              <div class="text-base italic text-primary/75">
                Questions? contact @dillpickleschmidt
                <img
                  src="/icons/discord.png"
                  alt=""
                  class="ml-2 inline h-6 w-6"
                />
              </div>
            </div>

            {/* Main Content */}
            <div id="chapter-boxes" class="mt-8 pb-24">
              <ChapterBoxes />
            </div>
          </div>
        </div>

        {/* Dotted Scrollbar */}
        <div class="relative flex w-14 justify-center md:w-28 xl:w-36 2xl:w-56">
          <div class="fixed top-0 flex h-screen items-center justify-center">
            <DottedScrollbar />
          </div>
        </div>
      </div>
    </>
  )
}
