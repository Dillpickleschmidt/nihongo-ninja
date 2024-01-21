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
          link="/learn/chapter-7/vocab-learn-lesson-5-kanji"
          shuffleTerms={true}
        >
          <h1 className="text-7xl font-medium">Practice the hiragana first!</h1>
          <div className="mt-12 flex justify-center">
            <div className="leading-10">
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  はたらく
                </JapaneseFont>{" "}
                - to work
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  ふとる
                </JapaneseFont>{" "}
                - to gain weight
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  ふとっています
                </JapaneseFont>{" "}
                - to be on the heavy side; overweight
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  めがねをかける
                </JapaneseFont>{" "}
                - to put on glasses
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  きる
                </JapaneseFont>{" "}
                - to put on clothes above your waist
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  やせる
                </JapaneseFont>{" "}
                - to lose weight
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  やせています
                </JapaneseFont>{" "}
                - to be thin
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  けっこんする
                </JapaneseFont>{" "}
                - to get married
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  ～が
                </JapaneseFont>{" "}
                - ...but
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  なにも + negative
                </JapaneseFont>{" "}
                - not...anything
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  ～にん
                </JapaneseFont>{" "}
                - counter for people
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  ひとり
                </JapaneseFont>{" "}
                - one person
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  ふたり
                </JapaneseFont>{" "}
                - two people
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  べつに + negative
                </JapaneseFont>{" "}
                - nothing in particular
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  もちろん
                </JapaneseFont>{" "}
                - of course
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  よかったら
                </JapaneseFont>{" "}
                - if you like
              </li>
            </div>
          </div>
        </LearnVocab>
      </div>
    </Dialog>
  )
}
