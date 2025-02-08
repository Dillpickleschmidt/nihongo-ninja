import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox nextButtonLink="/learn/chapter-2/janai">
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        How to say <span class="text-[2.6rem] font-bold italic">also</span> with{" "}
        <span class="font-japanese text-purple-400">も</span>
      </h1>
      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          The{" "}
          <span class="font-japanese text-xl font-semibold text-purple-400">
            も
          </span>{" "}
          (mo) particle in Japanese is used to indicate that something is
          similar or in addition to something else. It translates to{" "}
          <span class="font-bold italic">also</span>,{" "}
          <span class="font-bold italic">too</span>, or{" "}
          <span class="font-bold italic">as well</span> in English.
          Understanding where to place{" "}
          <span class="font-japanese text-xl font-semibold text-purple-400">
            も
          </span>{" "}
          in a sentence is crucial for conveying the correct meaning.
        </p>

        <div class="flex w-full flex-col items-center">
          <div class="rounded-lg border-2 border-orange-400 p-5">
            <div class="flex">
              <p class="mx-4 text-2xl">
                A <span class="font-japanese font-bold text-sky-400">は</span> X{" "}
                <span class="font-japanese">です。</span>
              </p>
              <p class="mx-4 text-xl">{"->"}</p>
              <p class="mx-4 w-28 text-xl">A is X.</p>
            </div>
            <div class="flex">
              <p class="mx-4 text-2xl">
                B{" "}
                <span class="font-japanese font-bold text-purple-400">も</span>{" "}
                X <span class="font-japanese">です。</span>
              </p>
              <p class="mx-4 text-xl">{"->"}</p>
              <p class="mx-4 w-28 text-xl">
                B is <span class="font-medium text-purple-400">also</span> X.
              </p>
            </div>
          </div>
        </div>

        <YouTubeVideo
          videoId="M27oQwq4jqg"
          title="「も」- The Inclusive Particle MO - JLPT N5 Grammar ┃ Genki Lesson 2"
          credit="Game Gengo ゲーム言語"
        />

        <h3 class="text-2xl font-bold">Basic Usage</h3>
        <ol class="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            <span class="">When adding similar information:</span>
            <ul class="list-inside list-disc">
              <li class="mt-2">
                A:{" "}
                <span class="font-japanese text-xl">
                  <Furigana furigana={<span class="text-xs">わたし</span>}>
                    私
                  </Furigana>
                  <span class="font-semibold text-sky-400">は</span>
                  <Furigana furigana={<span class="text-xs">がくせい</span>}>
                    学生
                  </Furigana>
                  です。
                </span>{" "}
                {"->"} I am a student.
              </li>
              <li class="mt-2">
                B:{" "}
                <span class="font-japanese text-xl">
                  <Furigana furigana={<span class="text-xs">わたし</span>}>
                    私
                  </Furigana>
                  <span class="font-semibold text-purple-400">も</span>
                  <Furigana furigana={<span class="text-xs">がくせい</span>}>
                    学生
                  </Furigana>
                  です。
                </span>
                {"->"} I am{" "}
                <span class="font-semibold text-purple-400">also</span> a
                student.
              </li>
            </ul>
          </li>
          <li>
            <span class="">When listing multiple similar items:</span>
            <ul class="list-inside list-disc">
              <li class="mt-2">
                <span class="font-japanese text-xl">
                  <Furigana furigana={<span class="text-sm">ねこ</span>}>
                    猫
                  </Furigana>
                  <span class="font-semibold text-purple-400">も</span>
                  <Furigana furigana={<span class="text-sm">いぬ</span>}>
                    犬
                  </Furigana>
                  <span class="font-semibold text-purple-400">も</span>
                  <Furigana furigana={<span class="text-sm">す</span>}>
                    好
                  </Furigana>
                  きです。
                </span>
                {"->"} <span class="text-muted-foreground">(I)</span> like{" "}
                <em>both</em> cats <em>and</em> dogs.
              </li>
            </ul>
          </li>
        </ol>

        <p class="text-center text-base italic">
          **The particle <span class="font-japanese not-italic">も</span> must
          be placed directly after the noun it is modifying.**
        </p>

        <h4 class="text-xl font-semibold italic">Example Sentences</h4>
        <ol class="!mt-3 list-inside list-decimal">
          <li>
            <ul class="ml-6 list-inside list-disc">
              <li>
                <span class="font-japanese text-xl">
                  <Furigana furigana={<span class="text-sm">たなか</span>}>
                    田中
                  </Furigana>
                  は
                  <Furigana furigana={<span class="text-sm">にほんじん</span>}>
                    日本人
                  </Furigana>
                  です。
                </span>{" "}
                {"->"} Takana is Japanese.
              </li>
              <li class="mt-1">
                <span class="font-japanese text-xl">
                  <Furigana furigana={<span class="text-sm">いしだ</span>}>
                    石田
                  </Furigana>
                  も
                  <Furigana furigana={<span class="text-sm">にほんじん</span>}>
                    日本人
                  </Furigana>
                  です。
                </span>
                {"->"} Ishida is also Japanese.
              </li>
            </ul>
          </li>
          <li>
            <ul class="ml-6 list-inside list-disc">
              <li>
                <span class="font-japanese text-xl">
                  これは
                  <Furigana furigana={<span class="text-sm">わたし</span>}>
                    私
                  </Furigana>
                  の
                  <Furigana furigana={<span class="text-sm">かばん</span>}>
                    鞄
                  </Furigana>
                  です。
                </span>{" "}
                {"->"} This is my bag.
              </li>
              <li class="mt-1">
                <span class="font-japanese text-xl">
                  これも
                  <Furigana furigana={<span class="text-sm">わたし</span>}>
                    私
                  </Furigana>
                  の
                  <Furigana furigana={<span class="text-sm">かばん</span>}>
                    鞄
                  </Furigana>
                  です。
                </span>{" "}
                {"->"} This is also my bag.
              </li>
            </ul>
          </li>

          <li>
            <ul class="ml-6 list-inside list-disc">
              <li>
                <span class="font-japanese text-xl">
                  この
                  <Furigana furigana={<span class="text-sm">かばん</span>}>
                    鞄
                  </Furigana>
                  は
                  <Furigana furigana={<span class="text-sm">たなか</span>}>
                    田中
                  </Furigana>
                  さんの
                  <Furigana furigana={<span class="text-sm">かばん</span>}>
                    鞄
                  </Furigana>
                  です。
                </span>{" "}
                {"->"} This bag is Tanaka's bag.
              </li>
              <li class="mt-1">
                <span class="font-japanese text-xl">
                  あの
                  <Furigana furigana={<span class="text-sm">かばん</span>}>
                    鞄
                  </Furigana>
                  も
                  <Furigana furigana={<span class="text-sm">たなか</span>}>
                    田中
                  </Furigana>
                  さんの
                  <Furigana furigana={<span class="text-sm">かばん</span>}>
                    鞄
                  </Furigana>
                  です。
                </span>{" "}
                {"->"} That bag <span class="text-base">(over there)</span> is
                also Tanaka's bag.
              </li>
            </ul>
          </li>
        </ol>

        <h3 class="text-center text-2xl font-bold">
          Positioning{" "}
          <span class="font-japanese text-[1.6rem] font-bold text-purple-400">
            も
          </span>{" "}
          in Sentences
        </h3>
        <p>
          The position of{" "}
          <span class="font-japanese text-xl font-semibold text-purple-400">
            も
          </span>{" "}
          in a sentence can change its meaning. Compare the following sentences:
        </p>
        <ol class="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">わたし</span>}>
                私
              </Furigana>
              <span class="font-japanese font-semibold text-purple-400">
                も
              </span>
              <Furigana furigana={<span class="text-xs">せんこう</span>}>
                専攻
              </Furigana>
              <span class="font-japanese font-semibold text-sky-400">は</span>
              <Furigana furigana={<span class="text-xs">にほんご</span>}>
                日本語
              </Furigana>
              です。
            </span>
            {"->"} I'm also a Japanese major.{" "}
            <span class="text-base">
              (Implying other people are Japanese majors, and I am too.)
            </span>
          </li>
          <li>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">わたし</span>}>
                私
              </Furigana>
              <span class="font-japanese font-semibold text-sky-400">は</span>
              <Furigana furigana={<span class="text-xs">にほんご</span>}>
                日本語
              </Furigana>
              <span class="font-japanese font-semibold text-purple-400">
                も
              </span>
              <Furigana furigana={<span class="text-xs">せんこう</span>}>
                専攻
              </Furigana>
              です。
            </span>
            {"->"} As for me, I also have a Japanese major.{" "}
            <span class="text-base">
              (Implying I have other majors, and Japanese is one of them.)
            </span>
          </li>
        </ol>
        <p class="text-base italic text-muted-foreground">
          *Place <span class="font-japanese not-italic">も</span> after the noun
          there are more than one of.
        </p>
        <p>
          In the first sentence, <span class="font-japanese text-xl">も</span>{" "}
          is placed after 私 (I), indicating that the speaker, like someone
          else, is a Japanese major. In the second sentence,{" "}
          <span class="font-japanese text-xl">も</span> is placed after{" "}
          <span class="font-japanese text-xl">日本語</span> (Japanese),
          indicating that the speaker has multiple majors, and Japanese is one
          of them.
        </p>

        <h3 class="text-center text-2xl font-bold">
          When not to use{" "}
          <span class="font-japanese text-[1.6rem] font-bold text-purple-400">
            も
          </span>
        </h3>
        <p>
          For questions using words like{" "}
          <Furigana furigana={<span class="text-sm">だれ</span>}>誰</Furigana>,{" "}
          <Furigana furigana={<span class="text-sm">なに</span>}>何</Furigana>,{" "}
          <span class="font-japanese">どこ</span>, etc., using{" "}
          <span class="font-japanese font-semibold text-green-500">が</span> is
          more appropriate.{" "}
          <span class="font-japanese font-semibold text-purple-400">も</span>{" "}
          would imply something else entirely which we'll look at in a later
          chapter.
        </p>

        <div class="flex w-full flex-col items-center">
          <p class="mx-4 font-japanese text-2xl line-through">
            <Furigana furigana={<span class="text-base">だれ</span>}>
              誰
            </Furigana>
            <span class="font-bold text-purple-400">も</span>
            <Furigana furigana={<span class="text-base">き</span>}>来</Furigana>
            ますか。
          </p>
          <div class="flex items-end">
            <p class="mx-4 font-japanese text-2xl">
              <Furigana furigana={<span class="text-base">だれ</span>}>
                誰
              </Furigana>
              <span class="font-bold text-green-500">が</span>
              <Furigana furigana={<span class="text-base">き</span>}>
                来
              </Furigana>
              ますか。
            </p>
            <p class="mx-4 text-xl">{"->"}</p>
            <p class="mx-4 w-40 text-xl">Who is coming?</p>
          </div>
        </div>

        <div class="text-muted-foreground">
          <p>If you want to specifically say "who else", you'd use ほかに.</p>
          <ul class="mt-2 list-inside list-disc">
            <li>
              <span class="font-japanese text-xl">ほかに誰が来ますか。</span>
              {"->"} Who else is coming?
            </li>
          </ul>
          <p class="mt-2 text-base italic">
            *We'll cover that later—you're not expected to learn that at this
            stage.
          </p>
        </div>
      </div>

      <div class="space-y-4 px-12 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
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
        <p>Someone asks who is coming to the party.</p>
        <SelectText
          answer="誰が来ますか。"
          a="誰が来ますか。"
          b="誰も来ますか。"
          class="text-xl"
        />
        <p>
          Which sentence correctly states that both your brother and sister like
          shoes?
        </p>
        <SelectText
          answer="お兄さんも妹も靴が好きです。"
          a="お兄さんも妹も靴が好きです。"
          b="お兄さんも妹は靴が好きです。"
          c="お兄さんも妹も靴は好きです。"
          d="お兄さんも妹は靴は好きです。"
          class="text-xl"
        />
      </div>

      <div class="space-y-6 px-16 pb-32 md:px-24">
        <h4 class="!mt-6 text-xl font-bold">
          Where can <span class="font-japanese">も</span> appear in a sentence?
          Fill in the blanks. If <span class="font-japanese">も</span> cannot be
          used, then write an X.
        </h4>
        <div class="flex justify-center font-japanese text-xl">
          <div class="space-y-4">
            <div class="flex items-end">
              <div>あれ</div>
              <TextFieldRoot class="mx-2 h-8 w-12">
                <TextField type="text" class="text-xl" />
              </TextFieldRoot>
              <div>
                <Furigana furigana={<span class="text-sm">たか</span>}>
                  高
                </Furigana>
                い
              </div>
              <TextFieldRoot class="mx-2 h-8 w-12">
                <TextField type="text" class="text-xl" />
              </TextFieldRoot>
              <div>です。</div>
            </div>
            <p class="!my-0 font-inter text-base text-muted-foreground">
              *<span class="font-japanese">高い</span> {"->"} expensive
            </p>
            <div class="flex items-end">
              <div>
                私は
                <Furigana furigana={<span class="text-sm">かんこくじん</span>}>
                  韓国人
                </Furigana>
              </div>
              <TextFieldRoot class="mx-2 h-8 w-12">
                <TextField type="text" class="text-xl" />
              </TextFieldRoot>
              <div>です。</div>
            </div>
            <div class="flex items-end">
              <div>
                <Furigana furigana={<span class="text-sm">せんせい</span>}>
                  先生
                </Furigana>
              </div>
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
              <div>
                <Furigana furigana={<span class="text-sm">じてんしゃ</span>}>
                  自転車
                </Furigana>
              </div>
              <TextFieldRoot class="mx-2 h-8 w-12">
                <TextField type="text" class="text-xl" />
              </TextFieldRoot>
              <div>ください。</div>
            </div>
            <div class="flex items-end">
              <div>
                私の
                <Furigana furigana={<span class="text-sm">しゅっしん</span>}>
                  出身
                </Furigana>
              </div>
              <TextFieldRoot class="mx-2 h-8 w-12">
                <TextField type="text" class="text-xl" />
              </TextFieldRoot>
              <div>
                <Furigana furigana={<span class="text-sm">ちゅうごく</span>}>
                  中国
                </Furigana>
                です。
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentBox>
  )
}
