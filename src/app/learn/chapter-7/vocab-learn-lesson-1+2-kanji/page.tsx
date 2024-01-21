import LearnVocab from "@/app/components/learn-vocab"
import vocabData from "./data.json"
import Dialog from "@/app/components/dialog"
import JapaneseFont from "@/app/components/JapaneseFont"

export default function VocabLearnLesson71Kanji() {
  return (
    <Dialog variant={"large"} className="border-4 border-black bg-[#191919]">
      <div className="text-white overscroll-y-contain">
        <LearnVocab
          data={vocabData}
          link="/learn/chapter-7/lesson-3"
          shuffleTerms={true}
        >
          <h1 className="text-7xl font-medium">Now practice the kanji!</h1>
          <div className="mt-12 flex justify-center">
            <div className="leading-10">
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  家族
                </JapaneseFont>{" "}
                - かぞく
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  お兄さん
                </JapaneseFont>{" "}
                - おにいさん
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  お姉さん
                </JapaneseFont>{" "}
                - おねえさん
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  父
                </JapaneseFont>{" "}
                - ちち
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  母
                </JapaneseFont>{" "}
                - はは
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  兄
                </JapaneseFont>{" "}
                - あに
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  姉
                </JapaneseFont>{" "}
                - あね
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  弟
                </JapaneseFont>{" "}
                - おとうと
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  兄弟
                </JapaneseFont>{" "}
                - きょうだい
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  男の人
                </JapaneseFont>{" "}
                - おんなのひと
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  食堂
                </JapaneseFont>{" "}
                - しょくどう
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  デパート
                </JapaneseFont>{" "}
                - デパート
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  髪
                </JapaneseFont>{" "}
                - かみ
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  口
                </JapaneseFont>{" "}
                - くち
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  目
                </JapaneseFont>{" "}
                - め
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  眼鏡
                </JapaneseFont>{" "}
                - めがね
              </li>
            </div>
          </div>
        </LearnVocab>
      </div>
    </Dialog>
  )
}
