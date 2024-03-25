import LearnVocab from "@/components/learn-vocab/LearnVocab"
import vocabData from "@/app/learn/chapter-11/lesson-1/data.json"
import Dialog from "@/components/Dialog"

export default function page() {
  return (
    <Dialog variant={"large"} className="border-4 border-black bg-[#191919]">
      <div className="text-white overscroll-y-contain">
        <LearnVocab
          data={vocabData}
          link="/learn/chapter-10/vocab-learn-lesson-1"
          shuffleTerms={true}
        >
          <h1 className="text-7xl font-medium text-[#F8F5E9]">
            Practice the kanji first!
          </h1>
        </LearnVocab>
      </div>
    </Dialog>
  )
}
