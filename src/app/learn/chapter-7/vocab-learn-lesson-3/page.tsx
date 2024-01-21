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
          link="/learn/chapter-7/lesson-4"
          shuffleTerms={true}
        >
          <h1 className="text-7xl font-medium">Practice the hiragana first!</h1>
          <div className="mt-12 flex justify-center">
            <div className="leading-10">
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  めがね
                </JapaneseFont>{" "}
                - glasses
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  うた
                </JapaneseFont>{" "}
                - song
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  サークル
                </JapaneseFont>{" "}
                - club activity
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  くるま
                </JapaneseFont>{" "}
                - car
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  ながい
                </JapaneseFont>{" "}
                - long
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  みじがい
                </JapaneseFont>{" "}
                - short (length)
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  はやい
                </JapaneseFont>{" "}
                - fast
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  せがたかい
                </JapaneseFont>{" "}
                - tall (stature)
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  せがひくい
                </JapaneseFont>{" "}
                - short (stature)
              </li>
              <li>
                <JapaneseFont className="font-semibold text-3xl">
                  あたまがいい
                </JapaneseFont>{" "}
                - bright, smart, clever
              </li>
            </div>
          </div>
        </LearnVocab>
      </div>
    </Dialog>
  )
}
