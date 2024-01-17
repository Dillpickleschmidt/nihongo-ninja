import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"
import LearnVocab from "@/app/components/learn-vocab"
import vocabData from "./data.json"

export default function VocabLearnNumbers() {
  return (
    <Dialog variant={"large"} className="border-4 border-black bg-[#191919]">
      <div className="text-white overscroll-y-contain">
        <LearnVocab
          data={vocabData}
          link="/learn/chapter-1/vocab-learn-numbers-11-100"
          shuffleTerms={true}
        />
      </div>
    </Dialog>
  )
}
