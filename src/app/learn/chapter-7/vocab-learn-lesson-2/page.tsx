import LearnVocab from "@/components/learn-vocab/LearnVocab"
import vocabData from "./data.json"
import Dialog from "@/components/Dialog"
import JapaneseFont from "@/components/text/JapaneseFont"

export default function VocabLearnLesson71() {
  return (
    <Dialog variant={"large"} className="border-4 border-black bg-[#191919]">
      <div className="text-white overscroll-y-contain">
        <LearnVocab
          data={vocabData}
          link="/learn/chapter-7/vocab-learn-lesson-1+2-kanji"
          shuffleTerms={true}
        >
          <h1 className="text-7xl font-medium text-[#F8F5E9]">
            Practice the hiragana first!
          </h1>
        </LearnVocab>
      </div>
    </Dialog>
  )
}
