import Dialog from "@/components/dialog"
import LearnVocab from "@/components/learn-vocab"
import vocabData from "./data.json"
import JapaneseFont from "@/components/JapaneseFont"

export default function VocabLearnNumbers() {
  return (
    <Dialog variant={"large"} className="border-4 border-black bg-[#191919]">
      <div className="text-white overscroll-y-contain">
        <LearnVocab
          data={vocabData}
          link="/learn/chapter-2/lesson-welcome"
          shuffleTerms={true}
          hideTerms={true}
        >
          <h1 className="text-7xl font-medium text-[#F8F5E9]">
            Try numbers 11-100
          </h1>
          <div className="mt-12">
            <li>
              <JapaneseFont className="font-semibold text-4xl text-[#887256]">
                じゅういち
              </JapaneseFont>{" "}
              - Eleven / 11
            </li>
            <li>
              <JapaneseFont className="font-semibold text-4xl">
                じゅうに
              </JapaneseFont>{" "}
              - Twelve / 12
            </li>
            <li>
              <JapaneseFont className="font-semibold text-4xl text-[#887256]">
                じゅうさん
              </JapaneseFont>{" "}
              - Thirteen / 13
            </li>
            <div className="text-7xl flex flex-col items-center leading-10 mb-10 mt-2">
              <div className="">.</div>
              <div className="">.</div>
              <div className="">.</div>
            </div>
            <li>
              <JapaneseFont className="font-semibold text-4xl">
                きゅうじゅう
              </JapaneseFont>{" "}
              - Ninety-eight / 98
            </li>
            <li>
              <JapaneseFont className="font-semibold text-4xl text-[#887256]">
                きゅうじゅうきゅう
              </JapaneseFont>{" "}
              - Ninety-nine / 99
            </li>
            <li>
              <JapaneseFont className="font-semibold text-4xl">
                ひゃく
              </JapaneseFont>{" "}
              - One hundred / 100
            </li>
            <p className="mt-6 text-4xl text-center">30 Questions</p>
          </div>
        </LearnVocab>
      </div>
    </Dialog>
  )
}
