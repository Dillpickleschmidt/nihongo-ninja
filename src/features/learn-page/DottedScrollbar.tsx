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
  const [isAutoScrolling, setIsAutoScrolling] = createSignal(false)
  let scrollTimeout: number

  const isLargeButton = (id: string) =>
    ["chapter_0", "chapter_13", "chapter_23"].includes(id)

  const formatTitle = (id: string) =>
    id.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) // chapter_0 => Chapter 0

  const getButtonStyles = (id: string) => {
    const isLarge = isLargeButton(id)
    const isActive = activeSection() === id
    const baseSize = isLarge ? "h-4 w-4" : "h-[0.55rem] w-[0.55rem]"
    const scaleAmount = isLarge ? "scale-125" : "scale-150"

    return `origin-center rounded-full ${baseSize} ${
      isActive ? `${scaleAmount} bg-white/50` : "bg-white/15"
    } group-hover:bg-white/50 group-hover:${scaleAmount} ${
      !isAutoScrolling() ? "transition-all duration-200" : ""
    } group-hover:transition-all group-hover:duration-200`
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstVisible = entries.find(
          (entry) => entry.isIntersecting,
        )?.target
        if (firstVisible) setActiveSection(firstVisible.id)
      },
      {
        root: null,
        rootMargin: "-10% 0px -85% 0px",
        threshold: 0,
      },
    )

    const handleScroll = () => {
      if (isAutoScrolling()) {
        clearTimeout(scrollTimeout)
        scrollTimeout = window.setTimeout(() => setIsAutoScrolling(false), 150)
      }
    }

    window.addEventListener("scroll", handleScroll)
    context.elementIds().forEach((id) => {
      const element = document.querySelector(`#${id}`)
      if (element) observer.observe(element)
    })

    onCleanup(() => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    })
  })

  return (
    <div class="flex flex-col items-center">
      <For each={context.elementIds()}>
        {(id) => (
          <Tooltip placement="left">
            <TooltipTrigger>
              <button
                onClick={() => {
                  setIsAutoScrolling(true)
                  document
                    .querySelector(`#${id}`)
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
                class="group flex w-4 justify-center py-[0.35rem]"
              >
                <div class={getButtonStyles(id)} />
              </button>
            </TooltipTrigger>
            <TooltipContent class="bg-card text-base font-medium text-white">
              <p>{formatTitle(id)}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </For>
    </div>
  )
}
