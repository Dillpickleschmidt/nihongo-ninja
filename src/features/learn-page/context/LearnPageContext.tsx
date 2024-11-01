import { createContext, useContext, createSignal } from "solid-js"

type LearnPageContextProps = {
  children: any
}

type LearnPageContextType = {
  elementIds: () => string[]
  setElementIds: (ids: string[]) => void
}

const LearnPageContext = createContext<LearnPageContextType>()

export function LearnPageProvider(props: LearnPageContextProps) {
  const [elementIds, setElementIds] = createSignal<string[]>([])

  // // Callback function to receive IDs from child
  // const handleIdsUpdate = (ids: string[]) => {
  //   setElementIds(ids)
  //   console.log("Updated IDs in parent:", ids)
  // }

  return (
    <LearnPageContext.Provider
      value={{
        elementIds,
        setElementIds,
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
