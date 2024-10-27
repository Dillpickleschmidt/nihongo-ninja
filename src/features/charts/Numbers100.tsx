import Romaji from "@/components/text/Romaji"

export default function Numbers100() {
  return (
    <div class="relative mx-auto min-h-full w-[92%] rounded-xl px-12 pb-6 text-xl shadow-lg dark:bg-[#F1E8DA] lg:px-20 xl:px-32 2xl:px-64">
      <img
        src="/img/dust-splatter-1.png"
        class="absolute inset-0 h-full w-full opacity-[7%]"
        alt=""
      />
      <div class="relative z-10 grid grid-cols-2 text-nowrap lg:grid-cols-3">
        {/* Col 1 */}
        <div class="p-4">
          <div class="flex flex-row">
            <div class="pt-16 text-right text-2xl tracking-[-0.5rem] [&>*]:py-4">
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
            <div class="ml-8 pt-[3.7rem] text-[1.65rem]">
              <div class="[&>*]:my-[0.65rem] [&>*]:block">
                <div class="flex [&>*]:inline-flex">
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
        <div class="p-4 pt-12">
          {/* Numbers Title */}
          <h1 class="mx-auto text-5xl font-semibold tracking-wide underline underline-offset-8">
            <em>Numbers</em>
          </h1>
          <div class="flex flex-row pt-8">
            <div class="text-right text-2xl tracking-[-0.5rem] [&>*]:py-4">
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
            <div class="ml-8 mt-[.3rem] text-[1.65rem] [&>*]:my-[0.65rem] [&>*]:block">
              <div>
                <Romaji romaji={"juuichi"}>
                  じゅう<span class="text-orange-400">いち</span>
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"juuni"}>
                  じゅう<span class="text-orange-400">に</span>
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"juusan"}>
                  じゅう<span class="text-orange-400">さん</span>
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"juuyon"}>
                  じゅう<span class="text-orange-400">よん</span>
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"juugo"}>
                  じゅう<span class="text-orange-400">ご</span>
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"juuroku"}>
                  じゅう<span class="text-orange-400">ろく</span>
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"juunana"}>
                  じゅう<span class="text-orange-400">なな</span>
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"juuhachi"}>
                  じゅう<span class="text-orange-400">はち</span>
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"juukyuu"}>
                  じゅう<span class="text-orange-400">きゅう</span>
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"nijuu"}>
                  <span class="text-red-400">に</span>じゅう
                </Romaji>
              </div>
            </div>
          </div>
        </div>
        {/* Col 3 */}
        <div class="p-4 lg:pt-36">
          <div class="flex flex-row">
            <div class="text-right text-2xl tracking-[-0.5rem] [&>*]:py-4">
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
            <div class="ml-8 mt-[.3rem] text-[1.65rem] [&>*]:my-[0.65rem] [&>*]:block">
              <div>
                <Romaji romaji={"nijuuichi"}>
                  <span class="text-red-400">に</span>じゅう
                  <span class="text-orange-400">いち</span>
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"sanjuu"}>
                  <span class="text-red-400">さん</span>じゅう
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"yonjuu"}>
                  <span class="text-red-400">よん</span>じゅう
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"gojuu"}>
                  <span class="text-red-400">ごじ</span>ゅう
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"rokujuu"}>
                  <span class="text-red-400">ろく</span>じゅう
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"nanajuu"}>
                  <span class="text-red-400">なな</span>じゅう
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"hachijuu"}>
                  <span class="text-red-400">はち</span>じゅう
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"kyuujuu"}>
                  <span class="text-red-400">きゅう</span>じゅう
                </Romaji>
              </div>
              <div>
                <Romaji romaji={"hyaku"}>
                  <span class="text-emerald-500">ひゃく</span>
                </Romaji>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
