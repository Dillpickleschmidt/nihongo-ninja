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
          link="/learn/chapter-7/vocab-learn-lesson-1+2-kanji"
          shuffleTerms={true}
        >
          <h1 className="text-7xl font-medium">Practice the hiragana first!</h1>
          <div className="mt-12 flex justify-center">
            <div className="leading-10">
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  おとうと
                </JapaneseFont>{" "}
                - younger brother
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  きょうだい
                </JapaneseFont>{" "}
                - brothers and sisters
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  おとこのひと
                </JapaneseFont>{" "}
                - man
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  おんなのひと
                </JapaneseFont>{" "}
                - woman
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  しょくどう
                </JapaneseFont>{" "}
                - cafeteria; dining commons
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  デパート
                </JapaneseFont>{" "}
                - department store
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  かみ
                </JapaneseFont>{" "}
                - hair
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  くち
                </JapaneseFont>{" "}
                - mouth
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  め
                </JapaneseFont>{" "}
                - eye
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  めがね
                </JapaneseFont>{" "}
                - glasses
              </li>
            </div>
          </div>
        </LearnVocab>
      </div>
    </Dialog>
  )
}
