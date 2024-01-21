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
          link="/learn/chapter-7/lesson-2"
          shuffleTerms={true}
        >
          <h1 className="text-7xl font-medium">Practice the hiragana first!</h1>
          <div className="mt-12 flex justify-center">
            <div className="leading-10">
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  かぞく
                </JapaneseFont>{" "}
                - family
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  おじいさん
                </JapaneseFont>{" "}
                - grandfather; old man
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  おばあさん
                </JapaneseFont>{" "}
                - grandmother; old woman
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  おにいさん
                </JapaneseFont>{" "}
                - older brother
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  おねえさん
                </JapaneseFont>{" "}
                - older sister
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  ちち
                </JapaneseFont>{" "}
                - my father
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  はは
                </JapaneseFont>{" "}
                - my mother
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  あに
                </JapaneseFont>{" "}
                - my older brother
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  あね
                </JapaneseFont>{" "}
                - my older sister
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  いもうと
                </JapaneseFont>{" "}
                - younger sister
              </li>
            </div>
          </div>
        </LearnVocab>
      </div>
    </Dialog>
  )
}
