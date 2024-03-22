import Dialog from "@/components/Dialog"
import Button from "@/components/Button"
import Romaji from "@/components/text/Romaji"

import { Noto_Sans_JP } from "next/font/google"

const JapaneseFont = Noto_Sans_JP({ subsets: ["latin"] })

export default function Numbers() {
  return (
    <Dialog
      variant={"large"}
      className={`${JapaneseFont} bg-[#191919] border-black border-2`}
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
                <div className="ml-8 pt-[3.7rem] text-[1.65rem]">
                  <div className="[&>*]:my-[0.65rem] [&>*]:block">
                    <div>
                      <Romaji romaji="zero">
                        <ruby>
                          ゼロ <rp>(</rp>
                          <rt>ぜろ</rt>
                          <rp>)</rp>
                        </ruby>
                      </Romaji>
                      ・<Romaji romaji={"rei"}>れい</Romaji>
                    </div>
                    <div>
                      <Romaji romaji={"ichi"}>いち</Romaji>
                    </div>
                    <div>
                      <Romaji romaji={"ni"}>に</Romaji>
                    </div>
                    <div>
                      <Romaji romaji={"san"}>さん</Romaji>
                    </div>
                    <div>
                      <Romaji romaji={"yon"}>よん</Romaji>・
                      <Romaji romaji={"shi"}>し</Romaji>
                    </div>
                    <div>
                      <Romaji romaji={"go"}>ご</Romaji>
                    </div>
                    <div>
                      <Romaji romaji={"roku"}>ろく</Romaji>
                    </div>
                    <div>
                      <Romaji romaji={"nana"}>なな</Romaji>・
                      <Romaji romaji={"shichi"}>しち</Romaji>
                    </div>
                    <div>
                      <Romaji romaji={"hachi"}>はち</Romaji>
                    </div>
                    <div>
                      <Romaji romaji={"kyuu"}>きゅう</Romaji>・
                      <Romaji romaji={"ku"}>く</Romaji>
                    </div>
                    <div>
                      <Romaji romaji={"juu"}>じゅう</Romaji>
                    </div>
                  </div>
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
                <div
                  className="ml-8 mt-[.3rem] text-[1.65rem]
                  [&>*]:my-[0.65rem] [&>*]:block"
                >
                  <div>
                    <Romaji romaji={"juuichi"}>
                      じゅう<span className="text-orange-400">いち</span>
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"juuni"}>
                      じゅう<span className="text-orange-400">に</span>
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"juusan"}>
                      じゅう<span className="text-orange-400">さん</span>
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"juuyon"}>
                      じゅう<span className="text-orange-400">よん</span>
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"juugo"}>
                      じゅう<span className="text-orange-400">ご</span>
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"juuroku"}>
                      じゅう<span className="text-orange-400">ろく</span>
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"juunana"}>
                      じゅう<span className="text-orange-400">なな</span>
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"juuhachi"}>
                      じゅう<span className="text-orange-400">はち</span>
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"juukyuu"}>
                      じゅう<span className="text-orange-400">きゅう</span>
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"nijuu"}>
                      <span className="text-red-400">に</span>じゅう
                    </Romaji>
                  </div>
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
                  className="ml-8 mt-[.3rem] text-[1.65rem]
                  [&>*]:my-[0.65rem] [&>*]:block"
                >
                  <div>
                    <Romaji romaji={"nijuuichi"}>
                      <span className="text-red-400">に</span>じゅう
                      <span className="text-orange-400">いち</span>
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"sanjuu"}>
                      <span className="text-red-400">さん</span>じゅう
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"yonjuu"}>
                      <span className="text-red-400">よん</span>じゅう
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"gojuu"}>
                      <span className="text-red-400">ごじ</span>ゅう
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"rokujuu"}>
                      <span className="text-red-400">ろく</span>じゅう
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"nanajuu"}>
                      <span className="text-red-400">なな</span>じゅう
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"hachijuu"}>
                      <span className="text-red-400">はち</span>じゅう
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"kyuujuu"}>
                      <span className="text-red-400">きゅう</span>じゅう
                    </Romaji>
                  </div>
                  <div>
                    <Romaji romaji={"hyaku"}>
                      <span className="text-blue-500">ひゃく</span>
                    </Romaji>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center py-4">
                <Button link="/learn/chapter-1/vocab-learn-numbers-0-10">
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
