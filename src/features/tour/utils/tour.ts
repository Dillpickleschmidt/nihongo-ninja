// tour.ts
import { createSignal } from "solid-js"
import type { TourStep } from "../types"
import { AppStorage, storageUtils } from "@/features/local-storage"

export default function createTourStore(steps: TourStep[], tourKey: string) {
  const storageKey = AppStorage.tour.key(tourKey)

  // Initialize state with localStorage defaults
  const savedState = storageUtils.get(storageKey)
  console.log("Saved State: ", savedState)
  const [currentStep, setCurrentStep] = createSignal(
    savedState.currentStep || 0,
  )
  const [isOpen, setIsOpen] = createSignal(false)

  // Save the current state to localStorage
  const saveState = () => {
    console.log("Current Step: ", currentStep())
    storageUtils.set(storageKey, {
      completed: false,
      currentStep: currentStep() || 0,
    })
  }

  // Sync state with storage
  const syncState = () => {
    const state = storageUtils.get(storageKey)
    console.log("Sync State: ", state)
    setCurrentStep(state.currentStep)
  }

  const tourMethods = {
    steps,
    currentStep,
    isOpen,

    // Start the tour
    start: () => {
      // Prevent race condition with "if (currentStep())"
      if (currentStep()) {
        syncState() // Synchronize signals with storage
      }
      setIsOpen(true)
      saveState()
    },

    // Pause the tour (close without resetting or completing)
    pause: () => {
      setIsOpen(false)
      saveState()
    },

    // Stop the tour (reset current step and close)
    stop: () => {
      setIsOpen(false)
      setCurrentStep(0)
      saveState()
      tourMethods.complete()
    },

    // Move to the next step
    next: () => {
      if (currentStep() < steps.length - 1) {
        const step = steps[currentStep()]

        // Execute custom logic if defined in `onNextFunction`
        if (step?.onNextFunction) {
          step.onNextFunction()
        }

        setCurrentStep((prev) => prev + 1)
        saveState()
      } else {
        const step = steps[currentStep()]
        // Execute custom logic if defined in `onNextFunction`
        if (step?.onNextFunction) {
          step.onNextFunction()
        }
        tourMethods.complete() // Mark the tour as completed if on the last step
      }
    },

    // Move to the previous step
    prev: () => {
      if (currentStep() > 0) {
        const step = steps[currentStep()]
        // Execute custom logic if defined in `onNextFunction`
        if (step?.onPrevFunction) {
          step.onPrevFunction()
        }
        setCurrentStep((prev) => prev - 1)
        saveState()
      }
    },

    // Mark the tour as completed
    complete: () => {
      setCurrentStep(0)
      setIsOpen(false)
      storageUtils.set(storageKey, { completed: true, currentStep: 0 })
    },

    // Reset the tour to the beginning
    reset: () => {
      setCurrentStep(0)
      setIsOpen(false)
      storageUtils.set(storageKey, { completed: false, currentStep: 0 })
    },
  }

  return tourMethods
}
