import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import { TextField, TextFieldRoot } from "@/components/ui/textfield"

export default function page() {
  return (
    <ContentBox nextButtonText="Next Lesson ->" nextButtonLink="/learn">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Using <span class="font-japanese text-purple-400">も</span> with{" "}
        <span class="text-[2.6rem] font-bold italic">actions</span>
      </h1>
      <div class="space-y-6 px-8 pb-32 sm:px-16 md:px-24">
        <p>
          You're already familiar with the{" "}
          <span class="font-japanese text-xl font-semibold text-purple-400">
            も
          </span>{" "}
          particle to mean <span class="font-bold italic">also</span>,{" "}
          <span class="font-bold italic">too</span>, or{" "}
          <span class="font-bold italic">as well</span> in English. Here's a
          little extra info about using it with verbs.
        </p>

        <div class="flex w-full flex-col items-center">
          <div class="flex items-center justify-between rounded-lg border-2 border-orange-400 p-5">
            <div>
              <p class="text-2xl">
                B{" "}
                <span class="font-japanese font-bold text-purple-400">も</span>{" "}
                X <span class="font-japanese">です。</span>
              </p>
              <p class="text-2xl">
                B{" "}
                <span class="font-japanese font-bold text-purple-400">も</span>{" "}
                X<span class="font-japanese">をしました。</span>
              </p>
            </div>
            <div>
              <p class="text-xl leading-8">
                {"->"} B is{" "}
                <span class="font-medium text-purple-400">also</span> X.
              </p>
              <p class="text-xl leading-8">
                {"->"} B <span class="font-medium text-purple-400">also</span>{" "}
                did X.
              </p>
            </div>
          </div>
        </div>

        <h3 class="text-2xl font-bold">Basic Usage</h3>
        <ol class="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            When two or more people perform the same activity:
            <ul class="ml-4 list-disc space-y-4 pt-4">
              <li>
                <div class="flex justify-between">
                  <div class="w-2/3 pr-2">
                    A:{" "}
                    <span class="font-japanese text-xl">
                      私<span class="font-semibold text-sky-400">は</span>
                      先週東京に行きました。
                    </span>
                  </div>
                  <div class="w-1/3 self-end text-base">
                    I went to Tokyo last week.
                  </div>
                </div>
              </li>
              <li>
                <div class="flex justify-between">
                  <div class="w-2/3 pr-2">
                    B:{" "}
                    <span class="font-japanese text-xl">
                      ナオミさん
                      <span class="font-semibold text-purple-400">も</span>
                      先週東京に行きました。
                    </span>
                  </div>
                  <div class="w-1/3 self-end text-base">
                    Naomi{" "}
                    <span class="font-semibold text-purple-400">also</span> went
                    to Tokyo last week.
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            When someone performs an action on two or more things:
            <ul class="ml-4 list-disc space-y-4 pt-4">
              <li>
                <div class="flex justify-between">
                  <div class="w-2/3 pr-2">
                    <span class="font-japanese text-xl">
                      ナオミさん
                      <span class="font-semibold text-sky-400">は</span>
                      ゲーム<span class="font-semibold text-red-400">を</span>
                      買いました。
                    </span>
                  </div>
                  <div class="w-1/3 self-end text-base">
                    Naomi bought a game.
                  </div>
                </div>
              </li>
              <li>
                <div class="flex justify-between">
                  <div class="w-2/3 pr-2">
                    <span class="font-japanese text-xl">
                      ナオミさん
                      <span class="font-semibold text-sky-400">は</span>ご飯
                      <span class="font-semibold text-purple-400">も</span>
                      買いました。
                    </span>
                  </div>
                  <div class="w-1/3 self-end text-base">
                    Naomi{" "}
                    <span class="font-semibold text-purple-400">also</span>{" "}
                    bought food.
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ol>

        <p class="text-center text-base italic text-muted-foreground">
          *You'd drop the second "
          <span class="font-japanese not-italic">ナオミさんは</span>" in a
          natural conversation.
        </p>

        <p class="!my-12 rounded-lg border bg-card/50 p-6 font-semibold">
          In the examples above,{" "}
          <span class="font-semibold text-sky-400">は</span> and{" "}
          <span class="font-semibold text-red-400">を</span> have been replaced
          with <span class="font-semibold text-purple-400">も</span>. Other
          particles like <span class="font-semibold text-green-400">に</span>{" "}
          and <span class="font-semibold text-orange-400">で</span> don't get
          replaced but instead are followed by{" "}
          <span class="font-semibold text-purple-400">も</span>.
        </p>

        <ul class="ml-6 list-disc space-y-4">
          <li class="space-y-1">
            <div class="flex justify-between">
              <div class="w-2/3 pr-2">
                <span class="font-japanese text-xl">
                  <span class="text-muted-foreground">(私は)</span>先月
                  <Furigana furigana={<span class="text-xs">おきなわ</span>}>
                    沖縄
                  </Furigana>
                  <span class="font-semibold text-green-400">に</span>
                  行きました。
                </span>
              </div>
              <div class="w-1/3 self-end text-base">
                I went to Okinawa last month.
              </div>
            </div>
            <div class="flex justify-between">
              <div class="w-2/3 pr-2">
                <span class="font-japanese text-xl sm:pl-[5.6rem]">
                  <Furigana furigana={<span class="text-xs">よこはま</span>}>
                    横浜
                  </Furigana>
                  <span class="underline underline-offset-4">
                    <span class="font-semibold text-green-400">に</span>
                    <span class="font-semibold text-purple-400">も</span>
                  </span>
                  行きました。
                </span>
              </div>
              <div class="w-1/3 self-end text-base">
                I went to Yokohama, too.
              </div>
            </div>
          </li>
          <li class="space-y-1">
            <div class="flex justify-between">
              <div class="w-2/3 pr-2">
                <span class="font-japanese text-xl">
                  ナオミさんは月曜日
                  <span class="font-semibold text-green-400">に</span>学校
                  <span class="font-semibold text-green-400">に</span>
                  来ました。
                </span>
              </div>
              <div class="w-1/3 self-end text-base">
                Naomi came to school Monday.
              </div>
            </div>
            <div class="flex justify-between">
              <div class="w-2/3 pr-2">
                <span class="font-japanese text-xl sm:pl-[7.5rem]">
                  金曜日
                  <span class="underline underline-offset-4">
                    <span class="font-semibold text-green-400">に</span>
                    <span class="font-semibold text-purple-400">も</span>
                  </span>
                  学校
                  <span class="font-semibold text-green-400">に</span>
                  来ました。
                </span>
              </div>
              <div class="w-1/3 self-end text-base">
                She came to school Friday, too.
              </div>
            </div>
          </li>

          <li class="space-y-1">
            <div class="flex justify-between">
              <div class="w-2/3 pr-2">
                <span class="font-japanese text-xl">
                  <Furigana furigana={<span class="text-xs">たろう</span>}>
                    太郎
                  </Furigana>
                  君はお寺
                  <span class="font-semibold text-orange-400">で</span>写真
                  <span class="font-semibold text-red-400">を</span>
                  撮りました。
                </span>
              </div>
              <div class="w-1/3 self-end text-base">
                Tarō took pictures at a temple.
              </div>
            </div>
            <div class="flex justify-between">
              <div class="w-2/3 pr-2">
                <span class="font-japanese text-xl sm:pl-[3.75rem]">
                  カフェ
                  <span class="underline underline-offset-4">
                    <span class="font-semibold text-orange-400">で</span>
                    <span class="font-semibold text-purple-400">も</span>
                  </span>
                  写真
                  <span class="font-semibold text-red-400">を</span>
                  撮りました。
                </span>
              </div>
              <div class="w-1/3 self-end text-base">
                He took pictures at a café, too.
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* <div class="space-y-4 px-12 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p>
          Someone asks if Tanaka likes dogs. You want to say "yes, and he also
          likes cats."
        </p>
        <p class="text-base text-muted-foreground">
          *<span class="font-japanese">猫</span> (ねこ) {"->"} cat
        </p>
        <SelectText
          answer="はい、田中さんは猫も好きです。"
          a="はい、田中さんも猫が好きです。"
          b="はい、田中さんも猫は好きです。"
          c="はい、田中さんは猫も好きです。"
          d="はい、田中さんは猫が好きです。"
          class="text-xl"
        />
      </div>

      <div class="space-y-6 px-16 pb-32 md:px-24">
        <h4 class="!mt-6 text-xl font-bold">
          Write the correct particle(s) in the boxes. If no particle is needed,
          write an X.
        </h4>
        <div class="flex justify-center font-japanese text-xl">
          <div class="space-y-4">
            <div class="flex items-end">
              <div>あれ</div>
              <TextFieldRoot class="mx-2 h-8 w-12">
                <TextField type="text" class="text-xl" />
              </TextFieldRoot>
              <div>高 い</div>
              <TextFieldRoot class="mx-2 h-8 w-12">
                <TextField type="text" class="text-xl" />
              </TextFieldRoot>
              <div>です。</div>
            </div>
            <p class="!my-0 font-inter text-base text-muted-foreground">
              *<span class="font-japanese">高い</span> {"->"} expensive
            </p>
            <div class="flex items-end">
              <div>私は 韓国人</div>
              <TextFieldRoot class="mx-2 h-8 w-12">
                <TextField type="text" class="text-xl" />
              </TextFieldRoot>
              <div>です。</div>
            </div>
            <div class="flex items-end">
              <div>先生</div>
              <TextFieldRoot class="mx-2 h-8 w-12">
                <TextField type="text" class="text-xl" />
              </TextFieldRoot>
              <div>わかりません。</div>
            </div>
            <div class="flex items-end">
              <div>あそこ</div>
              <TextFieldRoot class="mx-2 h-8 w-12">
                <TextField type="text" class="text-xl" />
              </TextFieldRoot>
              <div>コンビニです。</div>
            </div>
            <p class="!my-0 font-inter text-base text-muted-foreground">
              *<span class="font-japanese">コンビニ</span> {"->"} convenience
              store
            </p>
            <div class="flex items-end">
              <div>自転車</div>
              <TextFieldRoot class="mx-2 h-8 w-12">
                <TextField type="text" class="text-xl" />
              </TextFieldRoot>
              <div>ください。</div>
            </div>
            <div class="flex items-end">
              <div>私の 出身</div>
              <TextFieldRoot class="mx-2 h-8 w-12">
                <TextField type="text" class="text-xl" />
              </TextFieldRoot>
              <div>中国 です。</div>
            </div>
          </div>
        </div>
      </div> */}
    </ContentBox>
  )
}
