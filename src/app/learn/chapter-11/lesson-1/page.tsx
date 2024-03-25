import Button from "@/components/Button"
import Dialog from "@/components/Dialog"
import data from "./data.json"
import VocabCardDataMapped from "@/components/spaced-repetition/VocabCardDataMapped"

export default function page() {
  return (
    <Dialog variant={"reading"} className="border-4 border-black bg-[#191919]">
      <div className="pb-16 text-[#F8F5E9]">
        <h1 className="pt-28 px-28 pb-6 text-4xl">Chapter 10 Lesson 1</h1>
        <div className="[&>*]:leading-8 text-xl text-black">
          <VocabCardDataMapped data={data} />
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button
            link="/learn/chapter-11/vocab-learn-lesson-1-kanji"
            autoFocus={true}
          >
            Test your knowledge {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
