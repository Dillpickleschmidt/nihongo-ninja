import GrammarNotes from "@/features/grammar-notes/GrammarNotes"
import {
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
} from "@/features/grammar-notes/data"
import { Title } from "@solidjs/meta"

export default function page() {
  return (
    <>
      <Title>Nihongo Ninja - Grammar Notes</Title>
      <div class="px-12 pb-16">
        <h1 class="pt-24 text-center text-6xl font-semibold">Grammar Notes</h1>
        <h2 class="mx-32 mb-4 mt-20 text-center text-4xl font-bold">
          Chapter 1
        </h2>
        <GrammarNotes gridCols={3} items={chapter1} />
        <h2 class="mx-32 mb-4 mt-20 text-center text-4xl font-bold">
          Chapter 2
        </h2>
        <GrammarNotes gridCols={3} items={chapter2} />
        <h2 class="mx-32 mb-4 mt-20 text-center text-4xl font-bold">
          Chapter 3
        </h2>
        <GrammarNotes gridCols={3} items={chapter3} />
        <h2 class="mx-32 mb-4 mt-20 text-center text-4xl font-bold">
          Chapter 4
        </h2>
        <GrammarNotes gridCols={3} items={chapter4} />
        <h2 class="mx-32 mb-4 mt-20 text-center text-4xl font-bold">
          Chapter 5
        </h2>
        <GrammarNotes gridCols={3} items={chapter5} />
      </div>
    </>
  )
}
