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
        handleNavigation()
        setCurrentStep((prev) => prev + 1)
      } else {
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
