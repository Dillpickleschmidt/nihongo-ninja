import ContentBox from "@/components/ContentBox"
import SelectText from "@/components/text/MultipleChoiceText"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-3/next-lesson"
    >
      <h1 class="px-12 pb-6 pt-28 text-center text-4xl font-semibold lg:px-28">
        Modifying Nouns with Adjectives
      </h1>
      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          Instead of just saying{" "}
          <span class="font-japanese">バスは新しいです</span> (The bus is new),
          we'll now learn how to modify nouns with adjectives to say things like
          "<strong>The new bus</strong>."
        </p>

        <div class="space-y-4">
          <h2 class="!mt-9 text-center text-2xl font-bold">
            <span class="text-teal-400">い</span>-Adjectives
          </h2>
          <p>Simply place before the noun (keep the い)</p>
          <ul class="ml-6 list-disc space-y-4">
            <li class="space-y-2">
              <span class="font-japanese text-xl">高い + 建物</span>
              <div class="w-full space-y-4 rounded-lg border-2 border-border bg-card/50 px-3 py-5 text-center">
                <div>
                  <span class="font-japanese text-xl">高い建物</span>
                  <p class="text-base">tall building</p>
                </div>
              </div>
            </li>
            <li class="space-y-2">
              <span class="font-japanese text-xl">おもしろい + 映画</span>
              <div class="w-full space-y-4 rounded-lg border-2 border-border bg-card/50 px-3 py-5 text-center">
                <div>
                  <span class="font-japanese text-xl">おもしろい映画</span>
                  <p class="text-base">interesting movie</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h2 class="!mt-12 text-center text-2xl font-bold">
            <span class="text-yellow-400">な</span>-Adjectives
          </h2>
          <p>Add な between the adjective and noun</p>
          <ul class="ml-6 list-disc space-y-4">
            <li class="space-y-2">
              <span class="font-japanese text-xl">きれい + 写真</span>
              <div class="space-y-2 rounded-lg border bg-card/50 p-4">
                <div class="flex w-full items-center">
                  <p class="w-1/4 font-bold text-red-500">Incorrect</p>
                  <p class="w-3/4">
                    <span class="font-japanese text-xl line-through">
                      きれい写真
                    </span>
                  </p>
                </div>
                <div class="flex w-full items-center">
                  <p class="w-1/4 font-bold">Correct</p>
                  <p class="w-3/4">
                    <span class="font-japanese text-xl">きれいな写真</span>{" "}
                    {"->"} pretty picture
                  </p>
                </div>
              </div>
            </li>
            <li class="space-y-2">
              <span class="font-japanese text-xl">静か + 部屋</span>
              <div class="space-y-2 rounded-lg border bg-card/50 p-4">
                <div class="flex w-full items-center">
                  <p class="w-1/4 font-bold text-red-500">Incorrect</p>
                  <p class="w-3/4">
                    <span class="font-japanese text-xl line-through">
                      静か部屋
                    </span>
                  </p>
                </div>
                <div class="flex w-full items-center">
                  <p class="w-1/4 font-bold">Correct</p>
                  <p class="w-3/4">
                    <span class="font-japanese text-xl">静かな部屋</span> {"->"}{" "}
                    quiet room
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <p class="pt-4">
            When the adjective is in its negative form (ex.{" "}
            <span class="font-japanese">静かじゃない</span>), the な is no
            longer required.
          </p>
          <ul class="ml-6 list-disc space-y-4">
            <li class="space-y-2">
              <span class="font-japanese text-xl">静かじゃない + 図書館</span>
              <div class="space-y-2 rounded-lg border bg-card/50 p-4">
                <div class="flex w-full items-center">
                  <p class="w-1/4 font-bold text-red-500">Incorrect</p>
                  <p class="w-3/4">
                    <span class="font-japanese text-xl line-through">
                      静かじゃないな図書館
                    </span>
                  </p>
                </div>
                <div class="flex w-full items-center">
                  <p class="w-1/4 font-bold">Correct</p>
                  <p class="w-3/4">
                    <span class="font-japanese text-xl">
                      静かじゃない図書館
                    </span>{" "}
                    {"->"} the not-quiet library
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <p class="text-center">
          That's really it! The only hard part is remember which adjectives are
          な-adjectives.
        </p>

        <h2 class="!mt-12 text-2xl font-bold">
          Bonus: Making Adjectives Stronger or Weaker
        </h2>
        <p>Want to spice up your descriptions? Use these degree words:</p>
        <ul class="ml-6 list-disc space-y-4">
          <li class="space-y-2">
            <span class="font-japanese text-xl font-bold">とても</span>
            <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
              <div>
                <span class="font-japanese text-xl">
                  ここはとてもきれいな公園です。
                </span>
                <p class="text-base">This is a very beautiful park.</p>
              </div>
            </div>
          </li>
          <li class="space-y-2">
            <span class="font-japanese text-xl font-bold">すごく</span>
            <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
              <div>
                <span class="font-japanese text-xl">
                  すごくおいしいレストランを見つけました。
                </span>
                <p class="text-base">I found a very delicious restaurant.</p>
              </div>
            </div>
          </li>
          <li class="space-y-2">
            <span class="font-japanese text-xl font-bold">ちょっと</span>
            <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
              <div>
                <span class="font-japanese text-xl">
                  ちょっと高いケーキを買いました。
                </span>
                <p class="text-base">I bought a somewhat expensive cake.</p>
              </div>
            </div>
          </li>
          <li class="space-y-2">
            <span class="font-japanese text-xl font-bold">全然</span>
            <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
              <div>
                <span class="font-japanese text-xl">
                  全然静かじゃない図書館でした。
                </span>
                <p class="text-base">
                  It was a library that wasn't quiet at all.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Choose the correct form when modifying nouns with adjectives*
        </p>

        <p>You want to say "This is a really expensive computer"</p>
        <SelectText
          answer="これはとても高いパソコンです。"
          a="これはとても高なパソコンです。"
          b="これはとても高いパソコンです。"
          c="これはとても高のパソコンです。"
          d="これはとても高くパソコンです。"
          class="text-xl"
        />
        <p>How would you say "I go to a quiet café every morning"?</p>
        <SelectText
          answer="毎朝静かなカフェに行きます。"
          a="毎朝静かのカフェに行きます。"
          b="毎朝静かカフェに行きます。"
          c="毎朝静かなカフェに行きます。"
          d="毎朝静かいカフェに行きます。"
          class="text-xl"
        />
        <p>Your friend's cat is super cute. How would you say that?</p>
        <SelectText
          answer="すごくかわいい猫ですね。"
          a="すごくかわいな猫ですね。"
          b="すごくかわいい猫ですね。"
          c="すごいかわいい猫ですね。"
          d="すごくかわいの猫ですね。"
          class="text-xl"
        />
        <p>You want to complain "This is a not-so-clean restaurant"</p>
        <SelectText
          answer="これはあまりきれいじゃないレストランです。"
          a="これはあまりきれいなレストランじゃないです。"
          b="これはあまりきれいじゃないレストランです。"
          c="これはあまりきれいくないレストランです。"
          d="これはあまりきれいのレストランじゃないです。"
          class="text-xl"
        />
        <p>
          You're impressed by Mt. Fuji: "That's an extremely tall mountain!"
        </p>
        <SelectText
          answer="あれはすごく高い山ですね。"
          a="あれはすごい高い山ですね。"
          b="あれはすごく高な山ですね。"
          c="あれはすごく高い山ですね。"
          d="あれはすごく高の山ですね。"
          class="text-xl"
        />
        <p>
          Your friend says their test was hard. You want to say "It wasn't a
          difficult test at all!"
        </p>
        <SelectText
          answer="全然難しくないテストでしたよ。"
          a="全然難しいじゃないテストでしたよ。"
          b="全然難しくないテストでしたよ。"
          c="全然難しなテストじゃないでしたよ。"
          d="全然難しいないテストでしたよ。"
          class="text-xl"
        />
        <p>
          You're complaining about your dorm: "This is a rather small room..."
        </p>
        <SelectText
          answer="ちょっと小さい部屋ですね。"
          a="ちょっと小さな部屋ですね。"
          b="ちょっと小さい部屋ですね。"
          c="ちょっとの小さい部屋ですね。"
          d="ちょっと小さく部屋ですね。"
          class="text-xl"
        />
        {/* <p>How would you describe "a very clean and quiet café"?</p>
        <SelectText
          answer="とてもきれいで静かなカフェ"
          a="とてもきれいと静かなカフェ"
          b="とてもきれいで静かいカフェ"
          c="とてもきれいで静かなカフェ"
          d="とてもきれいな静かなカフェ"
          class="text-xl"
        /> */}
      </div>
    </ContentBox>
  )
}
