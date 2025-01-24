// SidebarTour.tsx
import { createSignal, onMount } from "solid-js"
import type { TourStep } from "@/features/tour/types"
import TourGuide from "@/features/tour/components/TourGuide"
import createTourStore from "@/features/tour/utils/tour"
import { AppStorage, storageUtils } from "@/features/local-storage"

export default function SidebarTour(props: {
  setIsSidebarOpen: (isOpen: boolean) => void
}) {
  const tourKey = "learn-sidebar"
  const learnTourKey = "learn-page"
  const [tour, setTour] = createSignal<ReturnType<typeof createTourStore>>()

  const learnTourSteps: TourStep[] = [
    {
      target: "#grammar-notes-link-sidebar-modal",
      title: "Grammar Notes",
      content:
        "Check out the Grammar Notes section for quick reference on grammar points.",
      placement: "bottom",
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
        storageUtils.set(AppStorage.tour.key(learnTourKey), {
          completed: false,
          currentStep: 4,
        })

        // Mark the sidebar tour as completed
        tour()?.stop()
      },
    },
  ]

  onMount(() => {
    // Initialize the tour
    const tourStore = createTourStore(learnTourSteps, tourKey)
    setTour(tourStore)

    // Check state and start the tour if needed
    setTimeout(() => {
      const savedState = storageUtils.get(AppStorage.tour.key(tourKey))
      const learnCurrentState = storageUtils.get(
        AppStorage.tour.key(learnTourKey),
      )

      console.log("learnTourCurrentStep", learnCurrentState.currentStep)

      if (!savedState.completed && learnCurrentState.currentStep === 1) {
        tourStore.start()
      }
    }, 400)
  })

  return (
    <>
      <button onClick={() => tour()?.start()}>Start Tour</button>
      <TourGuide
        steps={tour()!.steps}
        isOpen={tour()?.isOpen() || false}
        currentStep={tour()?.currentStep() || 0}
        onNext={() => tour()?.next()}
        onPrev={() => tour()?.prev()}
        onStop={() => tour()?.stop()}
        onPause={() => tour()?.pause()}
      />
    </>
  )
}
