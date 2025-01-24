// tour.ts
import { createSignal } from "solid-js"
import type { TourStep } from "../types"
import { AppStorage, storageUtils } from "@/features/local-storage"

// Global cache of tour signals
const tourSignals = new Map<
  string,
  {
    currentStep: ReturnType<typeof createSignal<number>>
    isOpen: ReturnType<typeof createSignal<boolean>>
  }
>()

// Get or create signals for a tour
function getSignalsForTour(tourKey: string) {
  if (!tourSignals.has(tourKey)) {
    const savedState = storageUtils.get(AppStorage.tour.key(tourKey))
    tourSignals.set(tourKey, {
      currentStep: createSignal(savedState.currentStep || 0),
      isOpen: createSignal(false),
    })
  }
  return tourSignals.get(tourKey)!
}

export const tourStore = {
  getTourState(tourKey: string) {
    const signals = getSignalsForTour(tourKey)
    const [currentStep] = signals.currentStep
    const [isOpen] = signals.isOpen
    const savedState = storageUtils.get(AppStorage.tour.key(tourKey))

    return {
      completed: savedState.completed || false,
      currentStep: currentStep(),
      isOpen: isOpen(),
    }
  },

  setTourState(
    tourKey: string,
    state: { completed?: boolean; currentStep?: number; isOpen?: boolean },
  ) {
    const signals = getSignalsForTour(tourKey)
    const [, setCurrentStep] = signals.currentStep
    const [, setIsOpen] = signals.isOpen

    if (state.currentStep !== undefined) {
      setCurrentStep(state.currentStep)
    }
    if (state.isOpen !== undefined) {
      setIsOpen(state.isOpen)
    }
    if (state.completed !== undefined || state.currentStep !== undefined) {
      storageUtils.set(AppStorage.tour.key(tourKey), {
        completed: state.completed ?? this.getTourState(tourKey).completed,
        currentStep:
          state.currentStep ?? this.getTourState(tourKey).currentStep,
      })
    }
  },

  createTourController(steps: TourStep[], tourKey: string) {
    const signals = getSignalsForTour(tourKey)
    const [currentStep] = signals.currentStep

    return {
      steps,
      currentStep,
      isOpen: signals.isOpen[0],

      start() {
        tourStore.setTourState(tourKey, { isOpen: true })
      },

      pause() {
        tourStore.setTourState(tourKey, { isOpen: false })
      },

      stop() {
        tourStore.setTourState(tourKey, {
          isOpen: false,
          currentStep: 0,
          completed: true,
        })
      },

      next() {
        if (currentStep() < steps.length - 1) {
          const step = steps[currentStep()]
          if (step?.onNextFunction) {
            // Override the default next() logic
            step.onNextFunction()
          } else {
            tourStore.setTourState(tourKey, { currentStep: currentStep() + 1 })
          }
        } else {
          const step = steps[currentStep()]
          if (step?.onNextFunction) {
            step.onNextFunction()
          } // Don't bother overriding the default next() logic
          tourStore.setTourState(tourKey, {
            isOpen: false,
            currentStep: 0,
            completed: true,
          })
        }
      },

      prev() {
        const step = steps[currentStep()]
        if (step?.onPrevFunction) {
          // Override the default prev() logic
          step.onPrevFunction()
        } else {
          if (currentStep() > 0) {
            tourStore.setTourState(tourKey, { currentStep: currentStep() - 1 })
          }
        }
      },

      reset() {
        tourStore.setTourState(tourKey, {
          currentStep: 0,
          isOpen: false,
          completed: false,
        })
      },
    }
  },
}
