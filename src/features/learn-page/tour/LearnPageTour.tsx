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
        target: "#lesson-tour-example",
        title: "Module Types",
        content: (
          <div class="space-y-3">
            <p>These often have videos and links to external resources.</p>
            <p>
              These lessons are always free—there's a lot of great material out
              there, and we aim to curate and provide them to you when they're
              most helpful.
            </p>
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
        target: "#sentence-practice-tour-example",
        title: "Module Types",
        content: (
          <div class="space-y-3">
            <p>
              Many lessons have an accompanying{" "}
              <strong>Sentence Practice</strong> module. I find these to be the
              most helpful for solidifying grammar points.
            </p>
            <p>
              They're pretty flexible too, letting you write in multiple ways
              and giving you feedback on your answers.
            </p>
          </div>
        ),
        placement: breakpoints.sm() ? "right-end" : "bottom",
        scroll: true,
      },
      {
        target: "#vocab-tour-example",
        title: "Module Types",
        content: (
          <div class="space-y-3">
            <p>
              Many units are grouped in folders if they focus on the same topic.
            </p>
          </div>
        ),
        placement: breakpoints.sm() ? "right-end" : "top",
        scroll: true,
      },
      {
        target: "#vocab-tour-example",
        title: "Module Types",
        content: (
          <div class="space-y-3">
            <p>The blue +books are short vocabulary lists.</p>
            <p>
              They include detailed explanations and mnemonics to help you
              remember them.
            </p>
            <p>
              You also typically get anime video examples of the words in use.
              :)
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
        target: "#vocab-tour-example",
        title: "Module Types",
        content: (
          <div class="space-y-3">
            <p>
              Once you've finished looking at the vocab, you can use the orange
              practice tool to memorize them as quickly as possible.
            </p>
            <p>
              These are highly efficient—first, you'll select the correct word
              in multiple-choice mode, then you'll type it to demonstrate you've
              mastered it.
            </p>
            <p>
              You only work with a handful of words at a time for maximum reps.
            </p>
          </div>
        ),
        placement: breakpoints.sm() ? "right-end" : "top",
        scroll: true,
        class: "max-w-80",
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
        onNextFunction: () => {
          if (!breakpoints.sm()) {
            props.setIsSidebarOpen(true)

            tourStore.setTourState("learn-page", {
              currentStep: 11,
              isOpen: false,
            })

            // Update the sidebar tour state
            tourStore.setTourState("learn-sidebar", {
              completed: false,
            })
          } else {
            tourStore.setTourState("learn-page", {
              currentStep: 11,
            })
          }
        },
        class: "max-w-96",
        scroll: true,
      },
      // {
      //   target: "#dotted-scrollbar",
      //   title: "Module Navigation",
      //   content: (
      //     <div class="space-y-3">
      //       <p>
      //         You can quickly navigate to any chapter by clicking on these dots.
      //       </p>
      //       <p class="text-sm text-muted-foreground">
      //         Because I'm not expecting you all to have to doom scroll.
      //       </p>
      //     </div>
      //   ),
      //   placement: breakpoints.sm() ? "left-start" : "left",
      //   onNextFunction: () => {
      //     if (!breakpoints.sm()) {
      //       props.setIsSidebarOpen(true)

      //       tourStore.setTourState("learn-page", {
      //         currentStep: 11,
      //         isOpen: false,
      //       })

      //       // Update the sidebar tour state
      //       tourStore.setTourState("learn-sidebar", {
      //         completed: false,
      //       })
      //     } else {
      //       tourStore.setTourState("learn-page", {
      //         currentStep: 11,
      //       })
      //     }
      //   },
      // },
      {
        target: "#grammar-notes-link-sidebar",
        title: "Grammar Notes",
        content: (
          <div class="space-y-3">
            <p>Grammar notes—for quick references about grammar points.</p>
            <p>
              These are condensed summaries of the lessons and are super handy
              to reference!
            </p>
            <p class="text-muted-foreground">
              Sometimes I skip the lesson and just read these if I'm in a rush
              :P
            </p>
          </div>
        ),
        placement: "right-start",
      },
      {
        target: "#conjugation-link-sidebar",
        title: "Tools",
        content: (
          <div class="space-y-3">
            <p>
              My pride and joy—this super nice Conjugation practice tool. You
              can configure it to practice whatever conjugation that you're
              struggling with.
            </p>
            <p class="text-muted-foreground">super underrated imo</p>
          </div>
        ),
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
              currentStep: 10,
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
