import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"
import Romaji from "@/app/components/romaji"

import { Noto_Sans_JP } from "next/font/google"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

export default function Numbers() {
  return (
    <Dialog
      variant={"large"}
      className={`${JapaneseFont} bg-[#191919] border-red-400 border-dashed border-2`}
    >
      <div className="overflow-y-auto py-9">
        <div className="px-44 mx-auto text-2xl w-[92%] min-h-full bg-[#F8F5E9] rounded-[43px] shadow-black shadow-lg">
          <div className="flex justify-between">
            {/* Col 1 */}
            <div className="w-1/3 p-4">
              <div className="flex flex-row">
                <div
                  className="pt-16 text-3xl text-right tracking-[-0.5rem]
                    [&>*]:py-4"
                >
                  <p>０</p>
                  <p>１</p>
                  <p>２</p>
                  <p>３</p>
                  <p>４</p>
                  <p>５</p>
                  <p>６</p>
                  <p>７</p>
                  <p>８</p>
                  <p>９</p>
                  <p>１０</p>
                </div>
                <div className="ml-8 pt-[4.2rem] [&>*]:py-3">
                  <Romaji romaji={"zero/ree"}>
                    <ruby>
                      ゼロ <rp>(</rp>
                      <rt>ぜろ</rt>
                      <rp>)</rp>
                    </ruby>
                    ・れい
                  </Romaji>
                  <Romaji romaji={"ichi"}>いち</Romaji>
                  <Romaji romaji={"ni"}>に</Romaji>
                  <Romaji romaji={"san"}>さん</Romaji>
                  <Romaji romaji={"yon"}>よん・し</Romaji>
                  <Romaji romaji={"go"}>ご</Romaji>
                  <Romaji romaji={"roku"}>ろく</Romaji>

                  <Romaji romaji={"nana"}>なな・しち</Romaji>
                  <Romaji romaji={"hachi"}>はち</Romaji>
                  <Romaji romaji={"kyuu"}>きゅう・く</Romaji>
                  <Romaji romaji={"juu"}>じゅう</Romaji>
                </div>
              </div>
            </div>
            {/* Col 2 */}
            <div className="w-1/3 p-4 pt-12">
              {/* Numbers Title */}
              <h1 className="mx-auto text-6xl font-semibold tracking-wide underline-offset-8">
                <u>
                  <em>Numbers</em>
                </u>
              </h1>
              <div className="flex flex-row pt-8">
                <div className="[&>*]:py-4 text-3xl text-right tracking-[-0.5rem]">
                  <p>１１</p>
                  <p>１２</p>
                  <p>１３</p>
                  <p>１４</p>
                  <p>１５</p>
                  <p>１６</p>
                  <p>１７</p>
                  <p>１８</p>
                  <p>１９</p>
                  <p>２０</p>
                </div>
                <div className="ml-8 pt-[.85rem] [&>*]:py-3">
                  <Romaji romaji={"juuichi"}>じゅういち</Romaji>
                  <Romaji romaji={"juuni"}>じゅうに</Romaji>
                  <Romaji romaji={"juusan"}>じゅうさん</Romaji>
                  <Romaji romaji={"juuyon"}>じゅうよん</Romaji>
                  <Romaji romaji={"juugo"}>じゅうご</Romaji>
                  <Romaji romaji={"juuroku"}>じゅうろく</Romaji>
                  <Romaji romaji={"juunana"}>じゅうなな</Romaji>
                  <Romaji romaji={"juuhachi"}>じゅうはち</Romaji>
                  <Romaji romaji={"juukyuu"}>じゅうきゅう</Romaji>
                  <Romaji romaji={"nijuu"}>にじゅう</Romaji>
                </div>
              </div>
            </div>
            {/* Col 3 */}
            <div className="w-1/3 p-4 pt-36">
              <div className="flex flex-row">
                <div
                  className="text-3xl text-right tracking-[-0.5rem]
                    [&>*]:py-4"
                >
                  <p>２１</p>
                  <p>３０</p>
                  <p>４０</p>
                  <p>５０</p>
                  <p>６０</p>
                  <p>７０</p>
                  <p>８０</p>
                  <p>９０</p>
                  <p>１００</p>
                </div>
                <div
                  className="ml-8 pt-[.85rem] 
                  [&>*]:py-3"
                >
                  <Romaji romaji={"nijuuichi"}>にじゅういち</Romaji>
                  <Romaji romaji={"sanjuu"}>さんじゅう</Romaji>
                  <Romaji romaji={"yonjuu"}>よんじゅう</Romaji>
                  <Romaji romaji={"gojuu"}>ごじゅう</Romaji>
                  <Romaji romaji={"rokujuu"}>ろくじゅう</Romaji>
                  <Romaji romaji={"nanajuu"}>ななじゅう</Romaji>
                  <Romaji romaji={"hachijuu"}>はちじゅう</Romaji>
                  <Romaji romaji={"kyuujuu"}>きゅうじゅう</Romaji>
                  <Romaji romaji={"hyaku"}>ひゃく</Romaji>
                </div>
              </div>
              <div className="flex flex-row justify-center pt-6">
                <Button
                  link="/learn/chapter-1/vocab-learn-numbers-0-10"
                  autoFocus={true}
                >
                  Memorize Numbers {"->"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
