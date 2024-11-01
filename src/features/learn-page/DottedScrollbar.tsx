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
  const [dragStart, setDragStart] = createSignal(0)
  const [lastScrolledId, setLastScrolledId] = createSignal("")
  let scrollTimeout: number
  let containerRef: HTMLDivElement

  const isLargeButton = (id: string) =>
    ["chapter_0", "chapter_13", "chapter_23"].includes(id)

  const formatTitle = (id: string) =>
    id.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())

  const getButtonStyles = (id: string) => {
    const isLarge = isLargeButton(id)
    const scaleAmount = isLarge ? "scale-125" : "scale-150"

    return `origin-center rounded-full ${
      isLarge ? "h-4 w-4" : "h-[0.55rem] w-[0.55rem]"
    } ${
      activeSection() === id ? `${scaleAmount} bg-white/50` : "bg-white/15"
    } group-hover:bg-white/50 group-hover:${scaleAmount} ${
      !isAutoScrolling() && !dragStart() ? "transition-all duration-200" : ""
    } group-hover:transition-all group-hover:duration-200`
  }

  const vibrate = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(10) // Short 20ms vibration
    }
  }

  const scrollToNearest = (clientY: number, smooth = false) => {
    if (!containerRef) return

    const dots = context
      .elementIds()
      .map((id) => {
        const button = containerRef.querySelector(`button[data-id="${id}"]`)
        if (!button) return null
        const rect = button.getBoundingClientRect()
        return { id, distance: Math.abs(rect.top + rect.height / 2 - clientY) }
      })
      .filter(Boolean)
      .sort((a, b) => a!.distance - b!.distance)

    const closest = dots[0]
    if (closest && closest.id !== lastScrolledId()) {
      if (smooth) setIsAutoScrolling(true)
      document
        .querySelector(`#${closest.id}`)
        ?.scrollIntoView(smooth ? { behavior: "smooth" } : undefined)

      // Vibrate when moving to a new section
      vibrate()
      setLastScrolledId(closest.id)
    }
  }

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!dragStart()) return

    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY
    scrollToNearest(clientY)

    if (
      "touches" in e &&
      e.target instanceof Node &&
      containerRef.contains(e.target)
    ) {
      e.preventDefault()
    }
  }

  const handleEnd = (clientY: number) => {
    if (!dragStart()) return
    if (Math.abs(clientY - dragStart()) < 5) {
      scrollToNearest(clientY, true)
    }
    setDragStart(0)
    setLastScrolledId("") // Reset last scrolled id when releasing
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)?.target
        if (visible) setActiveSection(visible.id)
      },
      { rootMargin: "-10% 0px -85% 0px" },
    )

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseup", (e) => handleEnd(e.clientY))
    window.addEventListener("touchmove", handleMove, { passive: false })
    window.addEventListener("touchend", (e) => {
      if (e.changedTouches?.[0]) {
        handleEnd(e.changedTouches[0].clientY)
      }
    })

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseup", (e) => handleEnd(e.clientY))
    window.addEventListener("touchmove", handleMove, { passive: false })
    window.addEventListener("touchend", (e) => {
      if (e.changedTouches?.[0]) {
        handleEnd(e.changedTouches[0].clientY)
      }
    })

    window.addEventListener("scroll", () => {
      if (isAutoScrolling()) {
        clearTimeout(scrollTimeout)
        scrollTimeout = window.setTimeout(() => setIsAutoScrolling(false), 150)
      }
    })

    context.elementIds().forEach((id) => {
      const element = document.querySelector(`#${id}`)
      if (element) observer.observe(element)
    })

    onCleanup(() => {
      observer.disconnect()
      clearTimeout(scrollTimeout)
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("touchmove", handleMove)
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("touchmove", handleMove)
    })
  })

  return (
    <div
      ref={containerRef!}
      class="flex cursor-grab flex-col items-center active:cursor-grabbing"
    >
      <For each={context.elementIds()}>
        {(id) => (
          <Tooltip placement="left">
            <TooltipTrigger>
              <button
                data-id={id}
                onMouseDown={(e) => setDragStart(e.clientY)}
                onTouchStart={(e) => setDragStart(e.touches[0].clientY)}
                onTouchStart={(e) => setDragStart(e.touches[0].clientY)}
                class="group flex w-4 justify-center py-[0.35rem]"
                tabIndex="-1"
              >
                <div class={getButtonStyles(id)} tabIndex="-1" />
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
