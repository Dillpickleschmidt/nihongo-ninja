// LearnPageTour.tsx
import type { TourStep } from "@/features/tour/types"
import TourGuide from "@/features/tour/components/TourGuide"
import { tourStore } from "@/features/tour/utils/tour"
import { Clock } from "lucide-solid"
import { createSignal, onMount, Show, createEffect } from "solid-js"
import { useBreakpoints } from "@/hooks/useMediaQuery"

export default function LearnPageTour(props: {
  isSidebarOpen: boolean
  setIsSidebarOpen: (isOpen: boolean) => void
}) {
  const [isMounted, setIsMounted] = createSignal(false)
  const breakpoints = useBreakpoints()
  const [controller, setController] =
    createSignal<ReturnType<typeof tourStore.createTourController>>()

  onMount(() => {
    const steps: TourStep[] = [
      {
        title: <div class="text-center">Welcome to Nihongo Ninja!</div>,
        content: (
          <div class="mt-1 space-y-5">
            <p class="text-lg font-medium">
              Let's take a quick tour to get you started.{" "}
            </p>
            <div class="flex items-center justify-center text-base text-muted-foreground">
              <Clock width={16} class="mr-1" /> 90 seconds.
            </div>
            <p class="text-muted-foreground">
              You can go to any page during the tour and pick up right where you
              left off when you come back.
            </p>
          </div>
        ),
        dialog: true,
      },
      {
        target: "#chapter-boxes",
        title: "Learning Modules",
        content:
          "Here, you'll find all the main content, organized by chapter.",
        placement: "top",
        overflowPadding: 75,
        scroll: true,
      },
      {
        target: "#lesson-tour-example",
        title: "Module Types",
        content: (
          <div class="space-y-3">
            <p>Different types of modules are categorize by icon and color.</p>
            <p>These green books are grammar lessons.</p>
          </div>
        ),
        placement: breakpoints.sm() ? "right-end" : "top",
        scroll: true,
      },
      {
        target: "#unique-lesson-tour-example",
        title: "Module Types",
        content: (
          <div class="space-y-3">
            <p>
              We typically follow the Genki textbook ordering of things, but
              occasionally there are additional lessons that fill in important
              gaps left uncovered by Genki.
            </p>
          </div>
        ),
        placement: breakpoints.sm() ? "top-start" : "top",
        scroll: true,
      },
      {
        target: "#vocab-tour-example",
        title: "Module Types",
        content: (
          <div class="space-y-3">
            <p>These blue +books are short vocabulary lists.</p>
            <p>
              They include detailed explanations and mnemonics to help you
              remember them.
            </p>
          </div>
        ),
        placement: breakpoints.sm() ? "right-end" : "top",
        scroll: true,
      },
      {
        target: "#vocab-list-tour-example",
        title: "Module Types",
        content: (
          <div class="space-y-3">
            <p>
              If you want to see all the vocab for the chapter at a glance,
              click here.
            </p>
            <p>
              You can also find it by clicking the <strong>Vocab List</strong>{" "}
              button on the left sidebar.
            </p>
          </div>
        ),
        placement: breakpoints.sm() ? "right-end" : "bottom",
        scroll: true,
      },
      {
        target: "#vocab-practice-tour-example",
        title: "Module Types",
        content: (
          <div class="space-y-3">
            <p>
              Once you've finished glancing through the vocab, you can practice
              here using this intelligent tool to help you memorize it as
              quickly as possible.
            </p>
            <p>
              You only work with a handful of words at a time. First, you'll
              select the correct word in multiple-choice mode, then you'll type
              it to demonstrate you've mastered it.
            </p>
          </div>
        ),
        placement: breakpoints.sm() ? "right-end" : "top",
        scroll: true,
        class: "max-w-80",
      },
      {
        target: "#sentence-practice-tour-example",
        title: "Module Types",
        content: (
          <div class="space-y-3">
            <p>
              Many lessons have an accompanying{" "}
              <strong>Sentence Practice</strong> module. If you can master the
              sentences, you'll be able to use the grammar in real-life
              situations.
            </p>
          </div>
        ),
        placement: breakpoints.sm() ? "right-end" : "bottom",
        scroll: true,
      },
      // {
      //   target: "#conjugation-practice-tour-example",
      //   title: "Module Types",
      //   content: (
      //     <div class="space-y-3">
      //       <p>
      //         These <strong>Conjugation</strong> modules are super helpful for
      //         practicing the various forms of verbs and adjectives.
      //       </p>
      //       <p>
      //         There are others types of modules (Vocab Tests, Counter Practice,
      //         etc.), but these are the main ones.
      //       </p>
      //     </div>
      //   ),
      //   placement: breakpoints.sm() ? "right-end" : "top",
      //   scroll: true,
      // },
      {
        target: "#sort-controls",
        title: "Sorting Options",
        content: (
          <div class="space-y-3">
            <p>Change how modules are organized using these controls.</p>
            <p>
              If you want to work through chapters from start to finish, select{" "}
              <strong>Chronological</strong>.
            </p>
            <p>
              If you just use Nihongo Ninja as a reference and want to find
              specific modules at a glance, select <strong>Module Type</strong>.
            </p>
            <p class="pl-6 font-yuji_boku text-xl">Try it out!</p>
          </div>
        ),
        placement: breakpoints.sm() ? "right-start" : "bottom",
        class: "max-w-96",
        scroll: true,
      },
      {
        target: "#dotted-scrollbar",
        title: "Module Navigation",
        content:
          "You can quickly navigate to any chapter by clicking on its dot.",
        placement: breakpoints.sm() ? "left-start" : "left",
        onNextFunction: () => {
          if (!breakpoints.sm()) {
            props.setIsSidebarOpen(true)

            tourStore.setTourState("learn-page", {
              currentStep: 10,
              isOpen: false,
            })

            // Update the sidebar tour state
            tourStore.setTourState("learn-sidebar", {
              completed: false,
            })
          } else {
            tourStore.setTourState("learn-page", {
              currentStep: 10,
            })
          }
        },
      },
      {
        target: "#grammar-notes-link-sidebar",
        title: "Grammar Notes",
        content:
          "Check out the Grammar Notes section for quick reference on grammar points.",
        placement: "right-start",
      },
      {
        target: "#conjugation-link-sidebar",
        title: "Tools",
        content:
          "Check out this super nice Conjugation practice tool. You can configure it to practice whatever you're struggling with.",
        placement: "right",
      },
      {
        target: "#sentence-practice-link-sidebar",
        title: "Tools",
        content: (
          <div class="space-y-3">
            <p>
              You can see all the practice sentence modules listed on this page
              if that suits you better.
            </p>
            <p>The same goes for the other buttons listed here.</p>
          </div>
        ),
        placement: "right-start",
      },
      {
        title: "おめでとう",
        content: (
          <div class="space-y-3">
            <p>You're finished, congrats. Enjoy your studies!</p>
            <p class="text-muted-foreground">
              Nihongo Ninja is still in alpha! If you have questions or bug
              reports, contact me @dillpickleschmidt
              <img
                src="/icons/discord.png"
                alt=""
                class="ml-1 inline h-4 w-4"
              />{" "}
              on Discord.
            </p>
          </div>
        ),
        dialog: true,
        onPrevFunction: () => {
          if (!breakpoints.sm()) {
            // Open the sidebar
            props.setIsSidebarOpen(true)

            tourStore.setTourState("learn-page", {
              completed: false,
              currentStep: 9,
              isOpen: false,
            })

            // Update the sidebar tour state
            setTimeout(() => {
              tourStore.setTourState("learn-sidebar", {
                completed: false,
                currentStep: 2,
                isOpen: true,
              })
            }, 400)
          } else {
            tourStore.setTourState("learn-page", {
              currentStep: tourStore.getTourState("learn-page").currentStep - 1,
            })
          }
        },
      },
    ]

    const tourKey = "learn-page"
    const tourController = tourStore.createTourController(steps, tourKey)

    // Automatically start the tour if not completed
    const state = tourStore.getTourState(tourKey)
    if (!state.completed) {
      if (state.currentStep === 10 && !breakpoints.sm()) {
        props.setIsSidebarOpen(true)
      } else {
        tourController.start()
      }
    }

    setController(tourController)
    setIsMounted(true)
  })

  return (
    <Show when={isMounted()}>
      {/* <button onClick={() => controller()?.start()}>Start Tour</button> */}
      <TourGuide
        steps={controller()!.steps}
        isOpen={controller()!.isOpen()}
        currentStep={controller()!.currentStep()}
        onNext={controller()!.next}
        onPrev={controller()!.prev}
        onStop={controller()!.stop}
        onPause={controller()!.pause}
      />
    </Show>
  )
}
