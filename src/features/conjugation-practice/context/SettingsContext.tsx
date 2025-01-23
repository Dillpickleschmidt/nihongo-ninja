import { createContext, useContext, createEffect, createSignal } from "solid-js"
import { useSearchParams } from "@solidjs/router"
import type { Settings } from "../types"
import { AppStorage, storageUtils } from "@/features/local-storage"

type SettingsContextProps = {
  children: any
}

type SettingsContextValue = {
  settings: () => Settings
  updateSettings: (newSettings: Partial<Settings>) => void
}

/**
 * Converts URL search parameters into settings object
 * Only includes parameters that differ from defaults
 */
const parseUrlParams = (searchParams: URLSearchParams): Partial<Settings> => {
  const result: Partial<Settings> = {}
  const defaultSettings = AppStorage.conjugationSettings.defaultValue

  Object.entries(defaultSettings).forEach(([key, defaultValue]) => {
    const value = searchParams.get(key)
    if (!value) return

    const settingKey = key as keyof Settings

    // Handle different setting types
    if (typeof defaultValue === "boolean") {
      // Convert "true"/"false" strings to boolean
      ;(result[settingKey] as boolean | undefined) = value === "true"
    }
    // Handle JLPT level selection
    else if (
      key === "jlptLevel" &&
      ["n5", "n4", "n3", "n2", "n1"].includes(value)
    ) {
      result.jlptLevel = value as Settings["jlptLevel"]
    }
    // Handle numerical amount (1-100)
    else if (key === "amount") {
      const amount = parseInt(value, 10)
      if (!isNaN(amount) && amount >= 1 && amount <= 100) {
        result.amount = amount
      }
    }
  })

  return result
}

// Store initial URL parameters when the component mounts
let initialUrlParams: URLSearchParams | null = null

// URL parameter utils
const updateUrlParams = (settings: Settings): void => {
  // Initialize initialUrlParams if not set
  if (!initialUrlParams) {
    initialUrlParams = new URLSearchParams(location.search)
  }

  const params = new URLSearchParams(initialUrlParams.toString())
  const defaultSettings = AppStorage.conjugationSettings.defaultValue

  Object.entries(settings).forEach(([key, value]) => {
    const defaultValue = defaultSettings[key as keyof Settings]
    const initialValue = initialUrlParams!.get(key)

    if (value !== defaultValue) {
      // Update param if it differs from default
      params.set(key, value.toString())
    } else if (initialValue === null) {
      // Remove param if it matches default and wasn't in initial URL
      params.delete(key)
    }
    // Keep initial value if value matches default but was in initial URL
  })

  const queryString = params.toString()
  const newUrl = `${window.location.pathname}${queryString ? "?" + queryString : ""}`
  window.history.replaceState({}, "", newUrl)
}

// Context creation
const SettingsContext = createContext<SettingsContextValue>()

export function SettingsContextProvider(props: SettingsContextProps) {
  const [searchParams] = useSearchParams<Record<string, string>>()
  const [settings, setSettings] = createSignal<Settings>(
    AppStorage.conjugationSettings.defaultValue,
  )

  // Load initial settings
  createEffect(() => {
    const baseSettings = storageUtils.get(
      AppStorage.conjugationSettings.key,
      AppStorage.conjugationSettings.defaultValue,
    )
    const urlSettings = parseUrlParams(new URLSearchParams(location.search))

    setSettings({
      ...baseSettings,
      ...urlSettings,
    })
  })

  // Watch for URL changes
  createEffect(() => {
    const params = new URLSearchParams()
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value !== undefined) params.set(key, value)
    })

    const urlSettings = parseUrlParams(params)
    if (Object.keys(urlSettings).length > 0) {
      setSettings((current) => ({ ...current, ...urlSettings }))
    }
  })

  const updateSettings = (newSettings: Partial<Settings>) => {
    const updatedSettings = { ...settings(), ...newSettings }
    setSettings(updatedSettings)
    storageUtils.set(AppStorage.conjugationSettings.key, updatedSettings)
    updateUrlParams(updatedSettings)
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export function useSettingsContext() {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error(
      "useSettingsContext must be used within a SettingsContextProvider",
    )
  }
  return context
}
