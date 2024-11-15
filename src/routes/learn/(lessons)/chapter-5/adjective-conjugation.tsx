import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-3/next-lesson"
    >
      <h1 class="px-12 pb-6 pt-28 text-center text-4xl font-semibold lg:px-28">
        Japanese Adjectives: <span class="font-japanese text-teal-400">い</span>{" "}
        and <span class="font-japanese text-yellow-400">な</span>
      </h1>

      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          Japanese adjectives come in two varieties - each type follows its own
          rules for conjugation and modifying nouns.
        </p>

        <div class="!mt-12 w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
          <div class="flex justify-around gap-4 font-japanese text-xl lg:text-2xl">
            <div class="flex flex-col items-start space-y-1">
              <div class="mb-2 w-full text-center font-bold">
                <span class="font-japanese text-teal-400">い</span>-Adjectives
              </div>
              <div>
                寒い<span class="font-medium text-teal-400">です</span>
              </div>
              <div>
                寒<span class="font-medium text-teal-400">くないです</span>
              </div>
              <div>
                寒<span class="font-medium text-teal-400">かったです</span>
              </div>
              <div>
                寒<span class="font-medium text-teal-400">くなかったです</span>
              </div>
            </div>
            <div class="flex flex-col items-start space-y-1">
              <div class="mb-2 w-full text-center font-bold">
                <span class="font-japanese text-yellow-400">な</span>-Adjectives
              </div>
              <div>
                静か<span class="font-medium text-yellow-400">です</span>
              </div>
              <div>
                静か
                <span class="font-medium text-yellow-400">じゃないです</span>
              </div>
              <div>
                静か<span class="font-medium text-yellow-400">でした</span>
              </div>
              <div>
                静か
                <span class="font-medium text-yellow-400">
                  じゃなかったです
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="space-y-4">
            <h2 class="!mt-12 text-2xl font-bold">
              <span class="text-teal-400">い</span>-Adjectives
            </h2>
            <div class="space-y-2"></div>
            <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <span class="font-japanese text-xl">高い</span>
                  <p class="text-base">tall</p>
                </div>
                <div>
                  <span class="font-japanese text-xl">安い</span>
                  <p class="text-base">cheap</p>
                </div>
                <div>
                  <span class="font-japanese text-xl">寒い</span>
                  <p class="text-base">cold</p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h2 class="!mt-12 text-2xl font-bold">
              <span class="text-yellow-400">な</span>-Adjectives
            </h2>
            <div class="space-y-2"></div>
            <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <span class="font-japanese text-xl">静か</span>
                  <p class="text-base">quiet</p>
                </div>
                <div>
                  <span class="font-japanese text-xl">元気</span>
                  <p class="text-base">healty, energetic</p>
                </div>
                <div>
                  <span class="font-japanese text-xl">*きれい</span>
                  <p class="text-base">beautiful, clean</p>
                </div>
              </div>
            </div>
            <p class="text-base text-muted-foreground">
              Fun fact: many な-adjectives originally come from China/other
              countries.
            </p>
          </div>
        </div>

        <h2 class="!mt-12 text-center text-3xl font-bold">
          Present Tense Conjugation
        </h2>

        <div class="space-y-4">
          <h3 class="text-2xl font-bold">
            <span class="text-teal-400">い</span>-Adjectives
          </h3>

          <div class="flex items-center">
            <div class="mr-2 text-3xl font-bold text-red-500">+</div>
            <div>
              <strong>Positive:</strong> Just add です (for polite form)
            </div>
          </div>
          <div class="ml-6 space-y-4">
            <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
              <div>
                <span class="font-japanese text-xl">
                  寒い → 寒い
                  <span class="font-medium text-teal-400">です</span>
                </span>
                <p class="text-base">It's cold</p>
              </div>
            </div>
            <p class="text-base italic text-muted-foreground">
              *You can leave off the <span class="not-italic">です</span> to
              sound less formal. This is the short-form. You'll learn more about
              short form in later chapters.
            </p>
          </div>
          <div class="flex items-center">
            <div class="mr-2 text-3xl font-bold text-red-500">-</div>
            <div>
              <strong>Negative:</strong> Replace い with くない
            </div>
          </div>
          <div class="ml-6 space-y-4">
            <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
              <div>
                <span class="font-japanese text-xl">
                  寒い → 寒
                  <span class="font-medium text-teal-400">くないです</span>
                </span>
                <p class="text-base">It's not cold</p>
              </div>
            </div>
            <p class="text-base text-muted-foreground">
              Extra formal: <span class="font-japanese">寒くありません</span>
            </p>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-2xl font-bold">
            <span class="text-yellow-400">な</span>-Adjectives
          </h3>

          <div class="flex items-center">
            <div class="mr-2 text-3xl font-bold text-red-500">+</div>
            <div>
              <strong>Positive:</strong> Add です (for polite form)
            </div>
          </div>
          <div class="ml-6 space-y-4">
            <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
              <div>
                <span class="font-japanese text-xl">
                  元気 → 元気
                  <span class="font-medium text-yellow-400">です</span>
                </span>
                <p class="text-base">I'm healthy</p>
              </div>
            </div>
            <p class="text-base italic text-muted-foreground">
              *You can leave off the <span class="not-italic">です</span> to
              sound less formal. This is the short-form. You'll learn more about
              short form in later chapters.
            </p>
          </div>
          <div class="flex items-center">
            <div class="mr-2 text-3xl font-bold text-red-500">-</div>
            <div>
              <strong>Negative:</strong> Replace です with じゃないです (just
              like a noun)
            </div>
          </div>
          <div class="ml-6 space-y-4">
            <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
              <div>
                <span class="font-japanese text-xl">
                  元気 → 元気
                  <span class="font-medium text-yellow-400">じゃないです</span>
                </span>
                <p class="text-base">I'm not healthy</p>
              </div>
            </div>
            <p class="text-base text-muted-foreground">
              Extra formal:{" "}
              <span class="font-japanese">元気ではありません</span>
            </p>
          </div>
        </div>

        <h2 class="!mt-12 text-center text-3xl font-bold">
          Past Tense Conjugation
        </h2>

        <div class="space-y-4">
          <h3 class="text-2xl font-bold">
            <span class="text-teal-400">い</span>-Adjectives
          </h3>

          <div class="flex items-center">
            <div class="mr-2 text-3xl font-bold text-red-500">+</div>
            <div>
              <strong>Positive:</strong> Replace い with かった
            </div>
          </div>
          <div class="ml-6 space-y-4">
            <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
              <div>
                <span class="font-japanese text-xl">
                  寒い → 寒
                  <span class="font-medium text-teal-400">かったです</span>
                </span>
                <p class="text-base">It was cold</p>
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <div class="mr-2 text-3xl font-bold text-red-500">-</div>
            <div>
              <strong>Negative:</strong> Replace い with くなかった
            </div>
          </div>
          <div class="ml-6 space-y-4">
            <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
              <div>
                <span class="font-japanese text-xl">
                  寒い → 寒
                  <span class="font-medium text-teal-400">くなかったです</span>
                </span>
                <p class="text-base">It wasn't cold</p>
              </div>
            </div>
            <p class="text-base text-muted-foreground">
              Extra formal:{" "}
              <span class="font-japanese">寒くありませんでした</span>
            </p>
            <p>
              Another way to think about past tense negative conjugation is to
              stack the present-negative with the past-positive.
            </p>
            <p>
              (寒い {"->"} 寒
              <span class="font-medium text-teal-400">くない</span>)
            </p>
            <p>
              Then use the past tense positive rule on the い of{" "}
              <span class="text-nowrap font-medium text-teal-400">くない</span>:
            </p>
            <p>
              寒くない {"->"} 寒くな
              <span class="font-medium text-teal-400">かった</span>.
            </p>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-2xl font-bold">
            <span class="text-yellow-400">な</span>-Adjectives
          </h3>

          <div class="flex items-center">
            <div class="mr-2 text-3xl font-bold text-red-500">+</div>
            <div>
              <strong>Positive:</strong> Replace です with でした (just like a
              noun)
            </div>
          </div>
          <div class="ml-6 space-y-4">
            <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
              <div>
                <span class="font-japanese text-xl">
                  元気 → 元気
                  <span class="font-medium text-yellow-400">でした</span>
                </span>
                <p class="text-base">I was healthy</p>
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <div class="mr-2 text-3xl font-bold text-red-500">-</div>
            <div>
              <strong>Negative:</strong> Replace です with じゃなかったです
            </div>
          </div>
          <div class="ml-6 space-y-4">
            <div class="w-full space-y-4 rounded-lg border-2 border-border px-3 py-5 text-center">
              <div>
                <span class="font-japanese text-xl">
                  元気 → 元気
                  <span class="font-medium text-yellow-400">
                    じゃなかったです
                  </span>
                </span>
                <p class="text-base">I wasn't healthy</p>
              </div>
            </div>
            <p class="text-base text-muted-foreground">
              Extra formal:{" "}
              <span class="font-japanese">元気ではありませんでした</span>
            </p>
            <p>
              Another way to think about past tense negative conjugation is to
              stack the present-negative with the past-positive.
            </p>
            <p>
              (元気 {"->"} 元気
              <span class="font-medium text-yellow-400">じゃない</span>)
            </p>
            <p>
              Treat じゃない like an い-adj to use the past tense positive rule
              on the い of{" "}
              <span class="text-nowrap font-medium text-teal-400">
                じゃない
              </span>
              :
            </p>
            <p>
              元気じゃない {"->"} 元気じゃな
              <span class="font-medium text-teal-400">かった</span>.
            </p>
          </div>
        </div>

        <div class="!mt-16 rounded-lg border border-l-4 border-l-yellow-400 bg-card/50 p-4">
          <p class="font-bold">
            ⚠️ Not all words ending in い are い-adjectives!
          </p>
          <ul class="mt-2 list-disc space-y-1 pl-6">
            <li>
              <span class="font-japanese">きれい</span> (pretty) - な-adjective
            </li>
            <li>
              <span class="font-japanese">嫌い</span> (dislike) - な-adjective
            </li>
          </ul>
          <p class="mt-2">
            You'll just have to memorize which words are い-adjectives and which
            are な-adjectives. If it doesn't end in い, you can at least safely
            say it's not an い-Adjective.
          </p>
        </div>

        <div class="space-y-4 rounded-lg border bg-card/50 p-6">
          <h3 class="font-bold">Special Note About いい (Good)</h3>
          <p>
            Pro tip: <span class="font-japanese">いい</span> is actually the
            conversational, plain form of{" "}
            <span class="font-japanese">良い</span> (よい). Why does this
            matter? Because all conjugations use よ- as the base:
          </p>
          <ul class="list-inside list-disc space-y-1">
            <li>
              Present: <span class="font-japanese">いい / よい</span>{" "}
              <span class="text-3xl text-red-500">-</span> Negative:{" "}
              <span class="font-japanese">よくない</span>
            </li>
            <li>
              Past: <span class="font-japanese">よかった</span>{" "}
              <span class="text-3xl text-red-500">-</span> Negative:{" "}
              <span class="font-japanese">よくなかった</span>
            </li>
          </ul>
          <div class="flex w-full items-center">
            <p class="w-1/4 font-bold text-red-500">Incorrect</p>
            <p class="w-3/4">
              <span class="font-japanese text-xl line-through">
                天気はいくないです。
              </span>
            </p>
          </div>
          <div class="flex w-full items-center">
            <p class="w-1/4 font-bold">Correct</p>
            <p class="w-3/4">
              <span class="font-japanese text-xl">
                天気は
                <Furigana furigana={<span class="text-xs">よ</span>}>
                  良
                </Furigana>
                くないです。
              </span>
              {"->"} The weather isn't good.
            </p>
          </div>
        </div>

        <div class="!mt-16 mr-[5.75rem] rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          Why are な-adjectives called な-adjectives? I don't see any なs being
          used!
        </div>

        <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/guru.png" class="float-end" />
          <p>
            You'll see in the next lesson where you'll learn to{" "}
            <u>modify nouns</u> with adjectives!
          </p>
        </div>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          *Choose the correct answer in each situation*
        </p>

        <p>How would you say "This movie is interesting"?</p>
        <SelectText
          answer="この映画はおもしろいです。"
          a="この映画はおもしろです。"
          b="この映画はおもしろいだ。"
          c="この映画はおもしろいです。"
          d="この映画はおもしろでした。"
          class="text-xl"
        />

        <p>How would you say "That room isn't quiet"?</p>
        <SelectText
          answer="あの部屋は静かじゃないです。"
          a="あの部屋は静かじゃです。"
          b="あの部屋は静かくないです。"
          c="あの部屋は静かじゃないです。"
          d="あの部屋は静かではないです。"
          class="text-xl"
        />

        <p>How would you say "Today is cold"?</p>
        <SelectText
          answer="今日は寒いです。"
          a="今日は寒です。"
          b="今日は寒いだ。"
          c="今日は寒いです。"
          d="今日は寒でした。"
          class="text-xl"
        />

        <p>If something was cold yesterday, how would you say it?</p>
        <SelectText
          answer="寒かったです。"
          a="寒いでした。"
          b="寒かったです。"
          c="寒いました。"
          d="寒でした。"
          class="text-xl"
        />

        <p>How would you say "I'm not busy today"?</p>
        <SelectText
          answer="今日は忙しくないです。"
          a="今日は忙しいじゃないです。"
          b="今日は忙しくないです。"
          c="今日は忙しないです。"
          d="今日は忙しではないです。"
          class="text-xl"
        />

        <p>How would you say "That person wasn't kind"?</p>
        <SelectText
          answer="あの人は親切じゃなかったです。"
          a="あの人は親切くなかったです。"
          b="あの人は親切じゃなかったです。"
          c="あの人は親切でわなかったです。"
          d="あの人は親切ないでした。"
          class="text-xl"
        />

        <p>How would you say "This cake was delicious"?</p>
        <SelectText
          answer="このケーキはおいしかったです。"
          a="このケーキはおいしいでした。"
          b="このケーキはおいしかったです。"
          c="このケーキはおいしでした。"
          d="このケーキはおいしいました。"
          class="text-xl"
        />

        <p>How would you say "Japanese wasn't difficult"?</p>
        <SelectText
          answer="日本語は難しくなかったです。"
          a="日本語は難しいじゃなかったです。"
          b="日本語は難しくなかったです。"
          c="日本語は難しかないです。"
          d="日本語は難しいくないでした。"
          class="text-xl"
        />
      </div>
    </ContentBox>
  )
}
