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
          link="/learn/chapter-7/lesson-5"
          shuffleTerms={true}
        >
          <h1 className="text-7xl font-medium">Now practice the kanji!</h1>
          <div className="mt-12 flex justify-center">
            <div className="leading-10">
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  眼鏡
                </JapaneseFont>{" "}
                - めがね
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  歌
                </JapaneseFont>{" "}
                - うた
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  車
                </JapaneseFont>{" "}
                - くるま
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  長い
                </JapaneseFont>{" "}
                - ながい
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  短い
                </JapaneseFont>{" "}
                - みじがい
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  早い
                </JapaneseFont>{" "}
                - はやい
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  背が高い
                </JapaneseFont>{" "}
                - せがたかい
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  背が低い
                </JapaneseFont>{" "}
                - せがひくい
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  頭がいい
                </JapaneseFont>{" "}
                - あたまがいい
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  可愛い
                </JapaneseFont>{" "}
                - かわいい
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  親切
                </JapaneseFont>{" "}
                - しんせつ
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  便利
                </JapaneseFont>{" "}
                - べんり
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  歌う
                </JapaneseFont>{" "}
                - うたう
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  被る
                </JapaneseFont>{" "}
                - かぶる
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  履く
                </JapaneseFont>{" "}
                - はく
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  知る
                </JapaneseFont>{" "}
                - しる
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  知っています
                </JapaneseFont>{" "}
                - しっています
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  知りません
                </JapaneseFont>{" "}
                - しりません
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  住む
                </JapaneseFont>{" "}
                - すむ
              </li>
            </div>
          </div>
        </LearnVocab>
      </div>
    </Dialog>
  )
}
