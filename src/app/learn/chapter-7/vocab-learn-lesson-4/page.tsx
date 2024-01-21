import LearnVocab from "@/app/components/learn-vocab"
import vocabData from "./data.json"
import Dialog from "@/app/components/dialog"
import JapaneseFont from "@/app/components/JapaneseFont"

export default function VocabLearnLesson71() {
  return (
    <Dialog variant={"large"} className="border-4 border-black bg-[#191919]">
      <div className="text-white overscroll-y-contain">
        <LearnVocab
          data={vocabData}
          link="/learn/chapter-7/vocab-learn-lesson-3+4-kanji"
          shuffleTerms={true}
        >
          <h1 className="text-7xl font-medium">Practice the hiragana first!</h1>
          <div className="mt-12 flex justify-center">
            <div className="leading-10">
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  かわいいめがね
                </JapaneseFont>{" "}
                - cute
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  しんせつ
                </JapaneseFont>{" "}
                - kind
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  べんり
                </JapaneseFont>{" "}
                - convenient
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  うたう
                </JapaneseFont>{" "}
                - to sing
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  かぶる
                </JapaneseFont>{" "}
                - to put on a hat
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  はく
                </JapaneseFont>{" "}
                - to put on items below your waist
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  しる
                </JapaneseFont>{" "}
                - to get to know
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  しっています
                </JapaneseFont>{" "}
                - I know
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  しりません
                </JapaneseFont>{" "}
                - I do not know
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  すむ
                </JapaneseFont>{" "}
                - to live
              </li>
            </div>
          </div>
        </LearnVocab>
      </div>
    </Dialog>
  )
}
