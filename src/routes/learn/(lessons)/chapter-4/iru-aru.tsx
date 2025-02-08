import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"

export default function ExistencePossession() {
  return (
    <ContentBox nextButtonLink="/learn/chapter-2/next-lesson">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        <span class="font-japanese text-sky-400">います</span> and{" "}
        <span class="font-japanese text-orange-400">あります</span>
      </h1>

      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          In this lesson, we'll explore how to use{" "}
          <span class="font-japanese text-xl">います</span> and{" "}
          <span class="font-japanese text-xl">あります</span> to express that
          something exists somewhere or that someone has something. While
          English uses "have" for possession, Japanese describes things as
          "existing" in relation to people or places.
        </p>

        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <p class="text-2xl">
            <span class="text-xl font-light">(location)</span> に{" "}
            <span class="text-xl font-light">(thing)</span> が{" "}
            <span class="text-nowrap font-medium text-sky-400">います</span>・
            <span class="text-nowrap font-medium text-orange-400">
              あります
            </span>
          </p>
          <p class="mx-4 text-xl">
            There is/are <span class="text-lg font-light">(thing)</span> at{" "}
            <span class="text-lg font-light">(location)</span>
          </p>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">Basic Usage</h3>
        <div class="!mt-2 list-inside list-disc space-y-2">
          <div>
            <span class="font-japanese text-xl font-bold">います</span> - Used
            for animate objects (things that can move on their own):
            <ul class="ml-6 mt-1 list-inside list-disc">
              <li>People</li>
              <li>Animals</li>
              <li>Ghosts 👻</li>
            </ul>
          </div>
          <div>
            <span class="font-japanese text-xl font-bold">あります</span> - Used
            for inanimate objects:
            <ul class="ml-6 mt-1 list-inside list-disc">
              <li>Objects</li>
              <li>Places</li>
              <li>Buildings</li>
            </ul>
          </div>
        </div>

        <div class="w-full space-y-2 text-center">
          <p class="font-japanese text-2xl">
            公園に犬が<span class="font-bold text-sky-400">います</span>。
          </p>
          <p class="text-lg">There's a dog in the park.</p>
          <p class="pt-2 font-japanese text-2xl">
            <span class="text-muted-foreground">(ここに)</span>コンビニが
            <span class="font-bold text-orange-400">あります</span>。
          </p>
          <p class="text-lg">
            There's a convenience store{" "}
            <span class="text-muted-foreground">(here)</span>.
          </p>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">Having Things in Japanese</h3>
        <p>
          In Japanese, instead of saying we "have" things, we express that
          things "exist in relation to us":
        </p>

        <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <p class="text-2xl">
            <span class="text-xl font-light">(person)</span> は{" "}
            <span class="text-xl font-light">(thing)</span> が{" "}
            <span class="text-nowrap font-medium text-sky-400">います</span>・
            <span class="text-nowrap font-medium text-orange-400">
              あります
            </span>
          </p>
          <p class="mx-4 text-xl">
            <span class="text-lg font-light">(person)</span> has{" "}
            <span class="text-lg font-light">(thing)</span>
          </p>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">に vs は</h3>
        <ul class="!mt-2 list-inside list-disc space-y-2">
          <li>
            <span class="font-japanese text-xl">に</span> - Emphasizes the
            location where something exists
          </li>
          <li>
            <span class="font-japanese text-xl">は</span> - Simple statement
            about what someone has
          </li>
        </ul>
        <div class="space-y-1">
          <p>田中さんは猫がいます。{"->"} Tanaka-san has cats/a cat</p>
          <p class="text-base italic text-muted-foreground">
            Lit. As for Tanaka-san, cat exist.
          </p>
          <p class="pt-1">
            田中さんの家に猫がいます。{"->"} There is/are cat(s) at Tanaka-san's
            house
          </p>
          <p class="text-base italic text-muted-foreground">
            Lit. At Tanaka-san's house, cat exist.
          </p>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">Confusing Cases</h3>

        <div class="space-y-6">
          <div>
            <p class="mb-2 text-center font-bold">Plants</p>
            <div class="flex w-full items-center">
              <p class="w-1/4 font-bold text-red-500">Incorrect</p>
              <p class="w-3/4">
                <span class="font-japanese text-xl text-muted-foreground">
                  庭に木がいます。
                </span>
              </p>
            </div>
            <div class="flex w-full items-center">
              <p class="w-1/4 font-bold">Correct</p>
              <p class="w-3/4">
                <span class="font-japanese text-xl">庭に木があります。</span>
                {"->"} There's a tree in the garden.
              </p>
            </div>
            <p class="text-base text-muted-foreground">
              *Even though they're living, plants are considered inanimate since
              they don't move freely
            </p>
          </div>

          <div>
            <p class="mb-2 text-center font-bold">Robots</p>
            <p class="text-base text-muted-foreground">
              *While they can move, robots are usually treated as inanimate
              objects → あります (However, in stories or when treated as
              characters, or possibly AI robots, います might be used)
            </p>
          </div>

          <div>
            <p class="mb-2 text-center font-bold">Animals as Food</p>
            <div class="flex w-full items-center">
              <p class="w-1/4 font-bold text-red-500">Incorrect</p>
              <p class="w-3/4">
                <span class="font-japanese text-xl text-muted-foreground">
                  テーブルに魚がいます。
                </span>
              </p>
            </div>
            <div class="flex w-full items-center">
              <p class="w-1/4 font-bold">Correct</p>
              <p class="w-3/4">
                <span class="font-japanese text-xl">
                  テーブルに魚があります。
                </span>
                {"->"} There's fish on the table.
              </p>
            </div>
            <p class="text-base text-muted-foreground">
              *When talking about animals as food (fish, meat, etc.), they're
              treated as inanimate objects (since they're no longer alive)
            </p>
          </div>
        </div>

        <h3 class="!mt-9 text-2xl font-bold">Common Pitfalls</h3>
        <div class="space-y-2">
          <div>
            <div class="flex w-full items-center">
              <p class="w-1/4 font-bold text-red-500">Incorrect</p>
              <p class="w-3/4">
                <span class="font-japanese text-xl text-muted-foreground">
                  あそこにモスバーガーです。
                </span>
              </p>
            </div>
            <p class="text-base text-muted-foreground">
              You can't use に with です directly - に needs a verb like
              あります to show existence
            </p>
          </div>
          <div>
            <div class="flex w-full items-center">
              <p class="w-1/4 font-bold text-red-500">Incorrect</p>
              <p class="w-3/4">
                <span class="font-japanese text-xl text-muted-foreground">
                  モスバーガーはあそこにです。
                </span>
              </p>
            </div>
            <p class="text-base text-muted-foreground">
              Similar to above - です cannot be used with に. Also, you can't
              end a sentence with に
            </p>
          </div>
          <div>
            <div class="flex w-full items-center">
              <p class="w-1/4 font-bold">Correct</p>
              <p class="w-3/4">
                <span class="font-japanese text-xl">
                  モスバーガー
                  <span class="underline underline-offset-2">はあそこです</span>
                  。
                </span>
              </p>
            </div>
            <p class="text-base text-muted-foreground">X は Y です pattern</p>
          </div>
          <div>
            <div class="flex w-full items-center">
              <p class="w-1/4 font-bold">Correct</p>
              <p class="w-3/4">
                <span class="font-japanese text-xl">
                  モスバーガーは
                  <span class="underline underline-offset-2">
                    あそこにあります
                  </span>
                  。
                </span>
              </p>
            </div>
          </div>
          <div>
            <div class="flex w-full items-center">
              <p class="w-1/4 font-bold">Correct</p>
              <p class="w-3/4">
                <span class="font-japanese text-xl">
                  <span class="underline underline-offset-2">あそこに</span>
                  モスバーガーが
                  <span class="underline underline-offset-2">あります</span>。
                </span>
              </p>
            </div>
          </div>
        </div>

        <h3 class="!mt-9 text-center text-2xl font-bold">
          Functions of に Learned so Far
        </h3>
        <p>
          Now that you've come this far, let's review the functions of に you've
          learned up to this point:
        </p>
        <ol class="list-inside list-decimal">
          <li>Direction of movement (家に帰ります)</li>
          <li>Specific time (七時に帰ります)</li>
          <li>Place where thing is/exists (公園にお母さんがいます)</li>
        </ol>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-24 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Choose the correct verb for each situation*
        </p>

        <p>How would you say "There's a cat in the room"?</p>
        <SelectText
          answer="部屋に猫がいます。"
          a="部屋に猫がいます。"
          b="部屋に猫があります。"
          class="text-xl"
        />

        <p>How would you say "There's a computer on the desk"?</p>
        <SelectText
          answer="机にパソコンがあります。"
          a="机にパソコンがいます。"
          b="机にパソコンがあります。"
          class="text-xl"
        />

        <p>How would you say "I have an older sister"?</p>
        <SelectText
          answer={["私は姉がいます。", "私には姉がいます。"]}
          a="私は姉がいます。"
          b="私は姉があります。"
          c="私には姉がいます。"
          class="text-xl"
        />

        <p>How would you say "There's a test tomorrow"?</p>
        <SelectText
          answer="明日テストがあります。"
          a="明日テストがいます。"
          b="明日にテストがいます。"
          c="明日テストがあります。"
          d="明日にテストがあります。"
          class="text-xl"
        />

        <p>How would you say "There are flowers in the park"?</p>
        <SelectText
          answer="公園に花があります。"
          a="公園に花がいます。"
          b="公園に花があります。"
          class="text-xl"
        />
      </div>
    </ContentBox>
  )
}
