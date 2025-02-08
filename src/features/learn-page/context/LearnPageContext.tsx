// LearnPageContext.tsx
import { createContext, useContext, createSignal, onMount } from "solid-js"
import { isServer } from "solid-js/web"
import { AppStorage, storageUtils } from "@/features/local-storage"
import { getUser } from "@/features/supabase/auth"
import type { User } from "@supabase/supabase-js"
import { createAsync } from "@solidjs/router"

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
}

const LearnPageContext = createContext<LearnPageContextType>()

export function LearnPageProvider(props: LearnPageContextProps) {
  const storageKey = AppStorage.learnPage.key("sortOrder")
  const defaultSortOrder = AppStorage.learnPage.defaultValue.sortOrder

  const [chapterIds, setChapterIds] = createSignal<string[]>([])
  const [unitIds, setUnitIds] = createSignal<string[]>([])
  const [sortOrder, internalSetSortOrder] =
    createSignal<sortOrder>(defaultSortOrder)
  const [sortChangeCounter, setSortChangeCounter] = createSignal(0)
  const [user, setUser] = createSignal<User | null>(null)

  const getUserResponse = createAsync(() => getUser())
  const userResponse = getUserResponse()
  if (userResponse && !userResponse.error && userResponse.user) {
    // console.log("User is logged in")
    setUser(userResponse.user)
  }

  // Load from storage only after mount
  onMount(async () => {
    const storedValue = storageUtils.get(storageKey)
    internalSetSortOrder(storedValue.sortOrder)
  })

  const setSortOrder = (newOrder: sortOrder) => {
    internalSetSortOrder(newOrder)
    if (!isServer) {
      storageUtils.set(storageKey, { sortOrder: newOrder })
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
