import PracticeMode from "@/features/practice-mode/PracticeMode"
import { getVocabularyByPath } from "@/db/statements"
import { RichVocabItem } from "@/types/vocab"
import { Match, Show, Switch } from "solid-js"
import { createAsync, useLocation } from "@solidjs/router"

export default function page() {
  // example path: /learn/chapter-13/practice/day-count-and-misc-kana
  const getFormattedName = (pathname: string) => {
    // Get text between last "/" and last "-"
    const match = pathname.match(/\/([^/]*)-[^-]*$/)?.[1] || "" // gets "day-count-and-misc"

    // Convert to title case and replace hyphens with spaces
    return match
      .split("-")
      .map((word) =>
        word === "and" ? "&" : word.charAt(0).toUpperCase() + word.slice(1),
      )
      .join(" ")
  }

  const location = useLocation()
  const lastSegment = location.pathname.split("-").pop() || "" // captures "kana" or "readings"
  // console.log(lastSegment)
  const path = location.pathname
    .replace("/learn/", "")
    .replace("/practice", "")
    .replace(/-[^-]*$/, "") // removes last hyphen and everything after it
  // console.log(path)
  const name = getFormattedName(location.pathname) // "Day Count & Misc"
  // console.log(name)
  const data = createAsync<RichVocabItem[]>(() => getVocabularyByPath(path))

  return (
    <>
      <Show when={data()} fallback={<h1>Loading...</h1>}>
        <Switch>
          <Match when={lastSegment === "readings"}>
            <PracticeMode
              data={data()!}
              deckName={
                <>
                  {name} <span class="text-sky-400">Readings</span>
                </>
              }
              mode="readings"
            />
          </Match>
          <Match when={lastSegment === "kana"}>
            <PracticeMode
              data={data()!}
              deckName={
                <>
                  {name} <span class="text-orange-400">Kana</span>
                </>
              }
              mode="kana"
            />
          </Match>
        </Switch>
      </Show>
    </>
  )
}
