import { createContext, useContext, createEffect, createSignal } from "solid-js"
import type { Settings } from "../types"

type SettingsContextProps = {
  children: any
}

type SettingsContextValue = {
  settings: () => Settings
  updateSettings: (newSettings: Partial<Settings>) => void
}

const DEFAULT_SETTINGS: Settings = {
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
  verb: true,
  iAdjective: false,
  naAdjective: false,
  polite: true,
  plain: true,
  nonPast: true,
  past: false,
  positive: true,
  negative: false,
  jlptLevel: "n5",
  leaveOutSuru: false,
  reverse: false,
  amount: 20,
  showMeaning: true,
  noFurigana: false,
  emoji: true,
}

const SettingsContext = createContext<SettingsContextValue>()

export function SettingsContextProvider(props: SettingsContextProps) {
  const [settings, setSettings] = createSignal<Settings>(DEFAULT_SETTINGS)

  createEffect(() => {
    const storedSettings = localStorage.getItem("japaneseConjugationSettings")
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings))
    }
  })

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }))
    localStorage.setItem(
      "japaneseConjugationSettings",
      JSON.stringify({ ...settings(), ...newSettings }),
    )
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
