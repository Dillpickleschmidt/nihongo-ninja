import Dialog from "@/components/Dialog"
import LearnVocab from "@/components/learn-vocab/LearnVocab"
import vocabData from "./data.json"

export default function VocabLearnNumbers() {
  return (
    <Dialog variant={"large"} className="border-4 border-black bg-[#191919]">
      <div className="text-white overscroll-y-contain">
        <LearnVocab
          data={vocabData}
          link="/learn/chapter-1/vocab-learn-numbers-11-100"
          shuffleTerms={true}
          tutorial={true}
        >
          <h1 className="text-7xl font-medium text-[#F8F5E9]">
            Practice numbers 0-10
          </h1>
        </LearnVocab>
      </div>
    </Dialog>
  )
}
