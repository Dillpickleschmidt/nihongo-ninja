import LearnVocab from "@/components/learn-vocab/LearnVocab"
import vocabData from "@/app/learn/chapter-9/lesson-2/data.json"
import Dialog from "@/components/Dialog"
import ConvertToEnglishKey from "@/components/learn-vocab/convertToEnglishKey"

const convertedData = ConvertToEnglishKey({ data: vocabData })

export default function page() {
  return (
    <Dialog variant={"large"} className="border-4 border-black bg-[#191919]">
      <div className="text-white overscroll-y-contain">
        <LearnVocab
          data={convertedData}
          link="/learn/chapter-9/vocab-learn-lesson-2-kanji"
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
