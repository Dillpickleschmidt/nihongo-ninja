// utils/tour.ts
import { createSignal } from "solid-js"
import { TourStep } from "../types"

export default function createTourStore(steps: TourStep[]) {
  const [currentStep, setCurrentStep] = createSignal(0)
  const [isOpen, setIsOpen] = createSignal(false)

  const handleNavigation = () => {
    const step = steps[currentStep()]
    if (step?.link) {
      window.location.href = step.link
    }
  }

  return {
    steps,
    currentStep,
    isOpen,
    start: () => setIsOpen(true),
    stop: () => {
      setIsOpen(false)
      setCurrentStep(0)
    },
    next: () => {
      if (currentStep() < steps.length - 1) {
        if (steps[currentStep()]?.onNextFunction) {
          // Execute onNextFunction and check its return value
          const shouldOverride = steps[currentStep()]?.onNextFunction!()

          // Only override if the function returns true
          if (shouldOverride !== false) {
            console.log("onNextFunction override")
            return // Stop here if we're overriding
          }
        }

        // Default behavior
        handleNavigation()
        setCurrentStep((prev) => prev + 1)
      } else {
        // End of tour
        if (steps[currentStep()]?.onNextFunction) {
          const shouldOverride = steps[currentStep()]?.onNextFunction!()
          if (shouldOverride !== false) {
            return
          }
        }

        // Default end behavior
        handleNavigation()
        setIsOpen(false)
        setCurrentStep(0)
      }
    },
    prev: () => {
      if (currentStep() > 0) {
        setCurrentStep((prev) => prev - 1)
      }
    },
  }
}
