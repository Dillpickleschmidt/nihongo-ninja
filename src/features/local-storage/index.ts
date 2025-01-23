// src/features/local-storage/local-storage.ts
import type { Settings } from "@/features/conjugation-practice/types"

/**
 * Central data structure defining all stored data
 */
export const AppStorage = {
  // Conjugation practice settings
  conjugationSettings: {
    key: "japaneseConjugationSettings",
    defaultValue: {
      // Form types
      normal: true,
      teForm: false,
      volitional: false,
      taiForm: false,
      tariForm: false,
      potential: false,
      imperative: false,
      conditional: false,
      passive: false,
      causative: false,
      causativePassive: false,

      // Parts of speech
      verb: true,
      iAdjective: false,
      naAdjective: false,

      // Speech levels and tenses
      polite: true,
      plain: true,
      nonPast: true,
      past: false,
      positive: true,
      negative: false,

      // Special options
      jlptLevel: "n5",
      leaveOutSuru: false,
      reverse: false,
      amount: 20,
      showMeaning: true,
      noFurigana: false,
      emoji: true,
    } as Settings,
  },

  // Vocabulary test enabled settings
  vocabEnabled: {
    key: (path: string) => `vocab-enabled-${path}`,
    defaultValue: [] as string[],
  },

  // Tour progress tracking
  tour: {
    key: (tourKey: string) => `tour-${tourKey}`,
    defaultValue: {
      completed: false,
      currentStep: 0,
    },
  },
}

/**
 * Helper functions to interact with localStorage
 */
export const storageUtils = {
  get<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },

  set(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Failed to save to localStorage: ${key}`, error)
    }
  },

  remove(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`Failed to remove from localStorage: ${key}`, error)
    }
  },

  clear(): void {
    try {
      localStorage.clear()
    } catch (error) {
      console.error("Failed to clear localStorage", error)
    }
  },
}
