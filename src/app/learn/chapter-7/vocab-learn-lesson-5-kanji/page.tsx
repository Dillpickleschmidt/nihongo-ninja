import LearnVocab from "@/app/components/learn-vocab"
import vocabData from "./data.json"
import Dialog from "@/app/components/dialog"
import JapaneseFont from "@/app/components/JapaneseFont"

export default function page() {
  return (
    <Dialog variant={"large"} className="border-4 border-black bg-[#191919]">
      <div className="text-white overscroll-y-contain">
        <LearnVocab
          data={vocabData}
          link="/learn/chapter-7/lesson-6"
          shuffleTerms={true}
        >
          <h1 className="text-7xl font-medium">Now practice the kanji!</h1>
          <div className="mt-12 flex justify-center">
            <div className="leading-10">
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  働く
                </JapaneseFont>{" "}
                - はたらく
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  太る
                </JapaneseFont>{" "}
                - ふとる
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  太っています
                </JapaneseFont>{" "}
                - ふとっています
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  眼鏡を掛ける
                </JapaneseFont>{" "}
                - めがねをかける
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  着る
                </JapaneseFont>{" "}
                - きる
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  痩せる
                </JapaneseFont>{" "}
                - やせる
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  痩せています
                </JapaneseFont>{" "}
                - やせています
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  結婚する
                </JapaneseFont>{" "}
                - けっこんする
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  何も
                </JapaneseFont>{" "}
                - なにも + negative
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  ～人
                </JapaneseFont>{" "}
                - ～にん
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  一人
                </JapaneseFont>{" "}
                - ひとり
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  二人
                </JapaneseFont>{" "}
                - ふたり
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  別に + negative
                </JapaneseFont>{" "}
                - べつに + negative
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  勿論
                </JapaneseFont>{" "}
                - もちろん
              </li>
            </div>
          </div>
        </LearnVocab>
      </div>
    </Dialog>
  )
}
