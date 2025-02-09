// LearnPageContext.tsx
import { createContext, useContext, createSignal, onMount } from "solid-js"
import { isServer } from "solid-js/web"
import { AppStorage, storageUtils } from "@/features/local-storage"
import { getUser } from "@/features/supabase/auth"
import { createAsync } from "@solidjs/router"
import { getCompletedModules } from "@/features/supabase/db"
import type { User } from "@supabase/supabase-js"

export const sortOrderTypes = ["module-type", "chronological"] as const
export type SortOrder = (typeof sortOrderTypes)[number]

export type CompletedModules = {
  data?: { module_path: string }[]
  error?: string
}

type LearnPageContextProps = {
  children: any
}

type LearnPageContextType = {
  chapterIds: () => string[]
  setChapterIds: (ids: string[]) => void
  unitIds: () => string[]
  setUnitIds: (ids: string[]) => void
  sortOrder: () => SortOrder
  setSortOrder: (order: SortOrder) => void
  sortChangeCounter: () => number
  user: () => User | null
  completedModules: () => CompletedModules
  setCompletedModules: (modules: CompletedModules) => void
}

const LearnPageContext = createContext<LearnPageContextType>()

export function LearnPageProvider(props: LearnPageContextProps) {
  const [chapterIds, setChapterIds] = createSignal<string[]>([])
  const [unitIds, setUnitIds] = createSignal<string[]>([])
  const [sortOrder, internalSetSortOrder] = createSignal<SortOrder>(
    AppStorage.learnPage.defaultValue.sortOrder,
  )
  const [sortChangeCounter, setSortChangeCounter] = createSignal(0)
  const [manualModules, setManualModules] =
    createSignal<CompletedModules | null>(null)

  const userData = createAsync(() => getUser())
  const user = () => userData()?.user || null

  const asyncModules = createAsync(async () => {
    const currentUser = user()
    if (!currentUser) return Promise.resolve({ data: [] })
    return await getCompletedModules(currentUser.id)
  })

  onMount(() => {
    const storedValue = storageUtils.get(AppStorage.learnPage.key("sortOrder"))
    internalSetSortOrder(storedValue.sortOrder)
  })

  const setSortOrder = (newOrder: SortOrder) => {
    internalSetSortOrder(newOrder)
    if (!isServer) {
      storageUtils.set(AppStorage.learnPage.key("sortOrder"), {
        sortOrder: newOrder,
      })
    }
    setSortChangeCounter((c) => c + 1)
  }

  return (
    <LearnPageContext.Provider
      value={{
        chapterIds,
        setChapterIds,
        unitIds,
        setUnitIds,
        sortOrder,
        setSortOrder,
        sortChangeCounter,
        user,
        completedModules: () =>
          manualModules() ?? asyncModules() ?? { data: [] },
        setCompletedModules: setManualModules,
      }}
    >
      {props.children}
    </LearnPageContext.Provider>
  )
}

export function useLearnPageContext() {
  const context = useContext(LearnPageContext)
  if (!context) {
    throw new Error(
      "useLearnPageContext must be used within a LearnPageProvider",
    )
  }
  return context
}
