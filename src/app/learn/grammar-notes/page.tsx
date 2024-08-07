import BackgroundImage from "@/features/content-box/components/BackgroundImage"
import GrammarNotes from "@/features/grammar-notes/GrammarNotes"
import { chapter1, chapter2, chapter3 } from "@/features/grammar-notes/data"

export default function page() {
  return (
    <>
      <BackgroundImage
        backgroundImage="/img/dust-splatter-1.png"
        backgroundImageSize="1215px"
        backgroundImageOpacity={5}
      />
      <div className="px-12 pb-16">
        <h1 className="mt-32 text-center text-6xl font-semibold">
          Grammar Notes
        </h1>
        <h2 className="mx-32 mb-4 mt-20 text-center text-4xl font-bold">
          Chapter 1
        </h2>
        <GrammarNotes gridCols={3} items={chapter1} />
        <h2 className="mx-32 mb-4 mt-20 text-center text-4xl font-bold">
          Chapter 2
        </h2>
        <GrammarNotes gridCols={3} items={chapter2} />
        <h2 className="mx-32 mb-4 mt-20 text-center text-4xl font-bold">
          Chapter 3
        </h2>
        <GrammarNotes gridCols={3} items={chapter3} />
      </div>
    </>
  )
}
