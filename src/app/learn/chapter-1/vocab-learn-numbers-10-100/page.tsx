import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"
import LearnVocab from "@/app/components/learn-vocab"
import vocabData from "./data.json"

export default function VocabLearnNumbers() {
  return (
    <Dialog variant={"large"} className="border-4 border-black bg-[#191919]">
      <div className="h-full overflow-y-auto text-white overscroll-y-contain no-scrollbar">
        <LearnVocab data={vocabData} shuffleTerms={true} />
      </div>
    </Dialog>
  )
}
