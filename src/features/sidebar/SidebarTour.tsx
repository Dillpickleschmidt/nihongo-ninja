import type { TourStep } from "@/features/tour/types"
import TourGuide from "@/features/tour/components/TourGuide"
import createTourStore from "@/features/tour/utils/tour"

export default function SidebarTour(props: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) {
  const learnTourSteps: TourStep[] = [
    {
      target: "#grammar-notes-link-sidebar-modal",
      title: "Grammar Notes",
      content:
        "Check out the Grammar Notes section for quick reference on grammar points.",
      placement: "bottom",
      // link: "/learn/grammar-notes",
    },
    {
      target: "#conjugation-link-sidebar-modal",
      title: "Tools",
      content:
        "Check out this super nice Conjugation practice tool. You can configure it to practice whatever you're struggling with.",
      placement: "bottom",
      // link: "/learn/conjugation",
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
      // link: "/learn/conjugation",
      onNextFunction: () => {
        props.setIsOpen(false)
        return false
      },
    },
  ]

  const tour = createTourStore(learnTourSteps)
  return (
    <>
      <button onClick={tour.start}>Start Tour</button>
      <TourGuide
        steps={tour.steps}
        isOpen={tour.isOpen()}
        currentStep={tour.currentStep()}
        onNext={tour.next}
        onPrev={tour.prev}
        onClose={tour.stop}
      />
    </>
  )
}
