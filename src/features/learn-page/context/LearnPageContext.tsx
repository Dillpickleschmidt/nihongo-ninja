import { createContext, useContext, createSignal, onMount } from "solid-js"
import { isServer } from "solid-js/web"
import { AppStorage, storageUtils } from "@/features/local-storage"
import { getUser } from "@/features/supabase/auth"
import { createAsync } from "@solidjs/router"
import { getCompletedModules } from "@/features/supabase/db"
import type { User } from "@supabase/supabase-js"

type LearnPageContextProps = {
  children: any
}

export const sortOrderTypes = ["module-type", "chronological"] as const
export type sortOrder = (typeof sortOrderTypes)[number]

type LearnPageContextType = {
  chapterIds: () => string[]
  setChapterIds: (ids: string[]) => void
  unitIds: () => string[]
  setUnitIds: (ids: string[]) => void
  sortOrder: () => sortOrder
  setSortOrder: (order: sortOrder) => void
  sortChangeCounter: () => number
  user: () => User | null
  completedModules: () => {
    data?: { module_path: string }[]
    error?: string
  }
}

const LearnPageContext = createContext<LearnPageContextType>()

export function LearnPageProvider(props: LearnPageContextProps) {
  const [chapterIds, setChapterIds] = createSignal<string[]>([])
  const [unitIds, setUnitIds] = createSignal<string[]>([])
  const [sortOrder, internalSetSortOrder] = createSignal<sortOrder>(
    AppStorage.learnPage.defaultValue.sortOrder,
  )
  const [sortChangeCounter, setSortChangeCounter] = createSignal(0)

  const userData = createAsync(() => getUser())
  const user = () => userData()?.user || null

  const completedModules = createAsync(async () => {
    const currentUser = user()
    if (!currentUser) return { data: [] }
    return await getCompletedModules(currentUser.id)
  })

  onMount(() => {
    const storedValue = storageUtils.get(AppStorage.learnPage.key("sortOrder"))
    internalSetSortOrder(storedValue.sortOrder)
  })

  const setSortOrder = (newOrder: sortOrder) => {
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
        completedModules: () => completedModules() || { data: [] },
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
