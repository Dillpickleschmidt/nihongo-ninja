// SidebarTour.tsx
import { createSignal, onMount } from "solid-js"
import type { TourStep } from "@/features/tour/types"
import TourGuide from "@/features/tour/components/TourGuide"
import { tourStore } from "@/features/tour/utils/tour"

export default function SidebarTour(props: {
  setIsSidebarOpen: (isOpen: boolean) => void
}) {
  const tourKey = "learn-sidebar"
  const learnTourKey = "learn-page"
  const [controller, setController] =
    createSignal<ReturnType<typeof tourStore.createTourController>>()

  const steps: TourStep[] = [
    {
      target: "#grammar-notes-link-sidebar-modal",
      title: "Grammar Notes",
      content:
        "Check out the Grammar Notes section for quick reference on grammar points.",
      placement: "bottom",
      onPrevFunction: () => {
        props.setIsSidebarOpen(false)

        tourStore.setTourState("learn-page", {
          currentStep: 9,
          isOpen: true,
        })

        // Update the sidebar tour state
        tourStore.setTourState("learn-sidebar", {
          completed: false,
          currentStep: 0,
          isOpen: false,
        })
      },
    },
    {
      target: "#conjugation-link-sidebar-modal",
      title: "Tools",
      content:
        "Check out this super nice Conjugation practice tool. You can configure it to practice whatever you're struggling with.",
      placement: "bottom",
    },
    {
      target: "#sentence-practice-link-sidebar-modal",
      title: "Tools",
      content: (
        <div class="space-y-3">
          <p>
            You can see all the practice sentence modules listed on this page if
            that suits you better.
          </p>
          <p>The same goes for the other buttons listed here.</p>
        </div>
      ),
      placement: "bottom",
      onNextFunction: () => {
        // Close the sidebar
        props.setIsSidebarOpen(false)

        // Update the learn tour state
        tourStore.setTourState(learnTourKey, {
          completed: false,
          currentStep: 13,
          isOpen: true,
        })

        controller()?.stop()
      },
    },
  ]

  onMount(() => {
    const tourController = tourStore.createTourController(steps, tourKey)
    setController(tourController)

    // Check state and start the tour if needed
    setTimeout(() => {
      const sidebarState = tourStore.getTourState(tourKey)
      const learnState = tourStore.getTourState(learnTourKey)

      if (!sidebarState.completed && learnState.currentStep === 10) {
        tourController.start()
      }
    }, 400)
  })

  return (
    <>
      {/* <button onClick={() => controller()?.start()}>Start Tour</button> */}
      <TourGuide
        steps={controller()!.steps}
        isOpen={controller()?.isOpen() || false}
        currentStep={controller()?.currentStep() || 0}
        onNext={() => controller()?.next()}
        onPrev={() => controller()?.prev()}
        onStop={() => controller()?.stop()}
        onPause={() => controller()?.pause()}
        followsOtherTour={true}
      />
    </>
  )
}
