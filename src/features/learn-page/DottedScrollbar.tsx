import { For, onMount, onCleanup, createSignal } from "solid-js"
import { useLearnPageContext } from "./context/LearnPageContext"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function DottedScrollbar() {
  const context = useLearnPageContext()
  const [activeSection, setActiveSection] = createSignal("")

  const isLargeButton = (id: string) => {
    return id === "chapter_0" || id === "chapter_13" || id === "chapter_23"
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter for sections that are intersecting
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target)

        if (visibleSections.length > 0) {
          // Get the first visible section's ID
          const firstVisible = visibleSections[0]
          setActiveSection(firstVisible.id)
        }
      },
      {
        root: null, // relative to viewport
        rootMargin: "-10% 0px -85% 0px", // Creates a narrow band near the top of the viewport
        threshold: 0, // trigger as soon as any part of the element is visible
      },
    )

    // Observe all sections
    context.elementIds().forEach((id) => {
      const element = document.querySelector(`#${id}`)
      if (element) observer.observe(element)
    })

    onCleanup(() => observer.disconnect())
  })

  return (
    <div class="flex flex-col items-center">
      <For each={context.elementIds()}>
        {(id) => (
          <Tooltip placement="left">
            <TooltipTrigger>
              <button
                onClick={() => {
                  document
                    .querySelector(`#${id}`)
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
                class="flex w-4 justify-center py-[0.35rem]"
              >
                <div
                  class={`origin-center rounded-full transition-transform duration-200 ${isLargeButton(id) ? "h-4 w-4" : "h-[0.55rem] w-[0.55rem]"} ${
                    activeSection() === id
                      ? `${isLargeButton(id) ? "scale-125" : "scale-150"} bg-white/50`
                      : "bg-white/15"
                  } ${isLargeButton(id) ? "hover:scale-125" : "hover:scale-150"} hover:bg-white/50`}
                />
              </button>
            </TooltipTrigger>
            <TooltipContent class="bg-card text-base font-medium text-white">
              <p>
                {
                  id
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase()) // chapter_0 => Chapter 0
                }
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </For>
    </div>
  )
}
