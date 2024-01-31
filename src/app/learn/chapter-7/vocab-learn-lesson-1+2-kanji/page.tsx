import LearnVocab from "@/components/learn-vocab"
import vocabData from "./data.json"
import Dialog from "@/components/dialog"
import JapaneseFont from "@/components/JapaneseFont"

export default function VocabLearnLesson71Kanji() {
  return (
    <Dialog variant={"large"} className="border-4 border-black bg-[#191919]">
      <div className="text-white overscroll-y-contain">
        <LearnVocab
          data={vocabData}
          link="/learn/chapter-7/lesson-3"
          shuffleTerms={true}
        >
          <h1 className="text-7xl font-medium text-[#F8F5E9]">
            Now practice the kanji!
          </h1>
        </LearnVocab>
      </div>
    </Dialog>
  )
}
