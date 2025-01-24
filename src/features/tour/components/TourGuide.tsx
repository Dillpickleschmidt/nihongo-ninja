// TourGuide.tsx
import {
  createEffect,
  createSignal,
  Match,
  Show,
  Switch,
  onCleanup,
} from "solid-js"
import { Popover as PopoverPrimitive } from "@kobalte/core/popover"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button, buttonVariants } from "@/components/ui/button"
import type { TourStep } from "../types"
import { cn } from "@/libs/cn"

export default function TourGuide(props: {
  steps: TourStep[]
  isOpen: boolean
  currentStep: number
  onNext: () => void
  onPrev: () => void
  onStop: () => void
  onPause: () => void
  followsOtherTour?: boolean
}) {
  let highlightRef: HTMLDivElement | undefined
  const [showExitConfirm, setShowExitConfirm] = createSignal(false)
  const [position, setPosition] = createSignal({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    visible: false,
  })

  // Handle initial scroll when step changes
  createEffect(() => {
    if (!props.isOpen) return

    const currentStep = props.steps[props.currentStep]
    if (!currentStep?.target || !currentStep.scroll) return

    const targetElement = document.querySelector(currentStep.target)
    if (!targetElement) return

    const rect = targetElement.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const targetScrollTop = window.scrollY + rect.top - windowHeight / 2

    window.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    })
  })

  // Handle position updates
  createEffect(() => {
    if (!props.isOpen) {
      setPosition((prev) => ({ ...prev, visible: false }))
      return
    }

    const updatePosition = () => {
      const currentStep = props.steps[props.currentStep]
      if (!currentStep?.target) {
        setPosition((prev) => ({ ...prev, visible: false }))
        return
      }

      const targetElement = document.querySelector(currentStep.target)
      if (!targetElement) {
        setPosition((prev) => ({ ...prev, visible: false }))
        return
      }

      const rect = targetElement.getBoundingClientRect()
      setPosition({
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
        visible: true,
      })
    }

    updatePosition()
    window.addEventListener("scroll", updatePosition, { passive: true })
    onCleanup(() => window.removeEventListener("scroll", updatePosition))
  })

  const getAnchorRect = () => {
    const pos = position()
    return {
      x: pos.x,
      y: pos.y,
      width: pos.width,
      height: pos.height,
      top: pos.y,
      right: pos.x + pos.width,
      bottom: pos.y + pos.height,
      left: pos.x,
    }
  }

  // Handle preventing close when clicking target
  const handlePointerDownOutside = (
    event: CustomEvent<{ originalEvent: PointerEvent }>,
  ) => {
    const currentStep = props.steps[props.currentStep]
    if (!currentStep?.target) return

    const targetElement = document.querySelector(currentStep.target)
    if (!targetElement) return

    // If click was on target element, prevent close
    if (targetElement.contains(event.target as Node)) {
      event.preventDefault()
      return
    }

    // For clicks outside, show confirmation dialog
    event.preventDefault()
    setShowExitConfirm(true)
  }

  return (
    <Show when={props.isOpen}>
      {/* Highlight */}
      <style>
        {`
        .animated-border {
          position: relative;
          z-index: 0;
        }

        .animated-border:before {
          content: '';
          position: absolute;
          inset: -4px;
          padding: 3px;
          border-radius: inherit;
          background: linear-gradient(90deg, #f0f, #0ff, #f0f);
          background-size: 300% 100%;
          mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          mask-composite: exclude;
          animation: border-rotate 3s linear infinite;
        }

        @keyframes border-rotate {
          to {
            background-position: 300% 0;
          }
        }
      `}
      </style>
      <Show when={position().visible}>
        <div
          class="pointer-events-none fixed z-50"
          style={{
            top: `${position().y - 8}px`,
            left: `${position().x - 8}px`,
            width: `${position().width + 16}px`,
            height: `${position().height + 16}px`,
          }}
        >
          <div
            ref={highlightRef}
            class="animated-border h-full w-full rounded-lg bg-transparent"
            style={{
              "box-shadow": "0 0 0 9999px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      </Show>

      <AlertDialog open={showExitConfirm()} onOpenChange={setShowExitConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Exit Tour?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to exit the tour? You can either stop it or
              pause it to save your progress so you can continue later.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter class="sm:justify-between">
            <AlertDialogClose onClick={() => setShowExitConfirm(false)}>
              Cancel
            </AlertDialogClose>
            <div class="flex w-full space-x-2 sm:w-auto">
              <AlertDialogAction
                onClick={() => {
                  setShowExitConfirm(false)
                  props.onStop()
                }}
                class={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "w-1/2 text-nowrap text-white md:mt-0",
                )}
              >
                Stop Tour
              </AlertDialogAction>
              <AlertDialogAction
                onClick={() => {
                  setShowExitConfirm(false)
                  props.onPause()
                }}
                class="w-1/2 text-nowrap"
              >
                Pause Tour
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Switch>
        {/* Dialog */}
        <Match when={props.steps[props.currentStep].dialog}>
          <Dialog
            open={props.isOpen}
            onOpenChange={() => setShowExitConfirm(true)}
          >
            <DialogContent
              overlayClass="bg-black/50"
              class="rounded-lg border-2 border-violet-400 bg-background"
            >
              <DialogHeader>
                <Show when={props.steps[props.currentStep].title}>
                  <DialogTitle class="text-2xl">
                    {props.steps[props.currentStep].title}
                  </DialogTitle>
                </Show>
                <DialogDescription class="text-base text-white">
                  {props.steps[props.currentStep].content}
                </DialogDescription>
              </DialogHeader>
              <div class="flex justify-between">
                <Show
                  when={props.followsOtherTour ? true : props.currentStep > 0}
                  fallback={<div />}
                >
                  <Button variant="secondary" onClick={props.onPrev}>
                    Previous
                  </Button>
                </Show>

                <Button onClick={props.onNext}>
                  {props.currentStep === props.steps.length - 1
                    ? "Finish"
                    : "Next"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </Match>

        {/* Popover */}
        <Match when={!props.steps[props.currentStep].dialog}>
          <Popover
            open={props.isOpen}
            onOpenChange={() => setShowExitConfirm(true)}
            getAnchorRect={getAnchorRect}
            gutter={0}
            placement={props.steps[props.currentStep].placement}
            fitViewport
            overlap
            flip
            slide
            overflowPadding={props.steps[props.currentStep].overflowPadding}
          >
            <PopoverContent
              class={cn(
                "border-none bg-background",
                props.steps[props.currentStep].class,
              )}
              onPointerDownOutside={handlePointerDownOutside}
            >
              <PopoverPrimitive.Arrow size={55} />
              <Show when={props.steps[props.currentStep].title}>
                <PopoverTitle class="mb-2 text-lg font-bold">
                  {props.steps[props.currentStep].title}
                </PopoverTitle>
              </Show>
              <PopoverDescription class="mb-4 font-normal">
                {props.steps[props.currentStep].content}
              </PopoverDescription>
              <div class="flex justify-between">
                <Show
                  when={props.followsOtherTour ? true : props.currentStep > 0}
                  fallback={<div />}
                >
                  <Button variant="secondary" onClick={props.onPrev}>
                    Previous
                  </Button>
                </Show>
                <Button onClick={props.onNext}>
                  {props.currentStep === props.steps.length - 1
                    ? "Finish"
                    : "Next"}
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </Match>
      </Switch>
    </Show>
  )
}
