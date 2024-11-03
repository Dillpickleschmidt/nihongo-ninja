import { createContext, useContext, createSignal } from "solid-js"

type LearnPageContextProps = {
  children: any
}

export const sortOrderTypes = ["module-type", "chronological"] as const

export type sortOrder = (typeof sortOrderTypes)[number]

type LearnPageContextType = {
  elementIds: () => string[]
  setElementIds: (ids: string[]) => void
  sortOrder: () => sortOrder
  setSortOrder: (order: sortOrder) => void
}

const LearnPageContext = createContext<LearnPageContextType>()

export function LearnPageProvider(props: LearnPageContextProps) {
  const [elementIds, setElementIds] = createSignal<string[]>([])
  const [sortOrder, setSortOrder] = createSignal<sortOrder>("module-type")

  return (
    <LearnPageContext.Provider
      value={{
        elementIds,
        setElementIds,
        sortOrder,
        setSortOrder,
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
