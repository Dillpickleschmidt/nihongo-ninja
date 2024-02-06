import LearnVocab from "@/components/learn-vocab"
import vocabData from "@/app/learn/chapter-8/lesson-4/data.json"
import Dialog from "@/components/dialog"
import ConvertToEnglishKey from "@/components/ConvertToEnglishKey"

const convertedData = ConvertToEnglishKey({ data: vocabData })

export default function page() {
  return (
    <Dialog variant={"large"} className="border-4 border-black bg-[#191919]">
      <div className="text-white overscroll-y-contain">
        <LearnVocab
          data={convertedData}
          link="/learn/chapter-8/vocab-learn-lesson-4-kanji"
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
