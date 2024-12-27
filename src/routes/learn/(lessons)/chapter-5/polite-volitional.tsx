import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import CustomTextArea from "@/components/CustomTextArea"
import Romaji from "@/components/text/Romaji"
import WanakanaWrapper from "@/features/wanakana/WanaKana"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-3/next-lesson"
    >
      <h1 class="px-6 pb-6 pt-28 text-center text-4xl font-semibold sm:px-12 lg:px-28">
        Polite Volitional & Suggestions -{" "}
        <span class="text-nowrap font-japanese text-violet-400">ましょう</span>{" "}
        and{" "}
        <span class="text-nowrap font-japanese text-indigo-200">
          ましょうか
        </span>
      </h1>
      <div class="space-y-6 px-8 pb-32 sm:px-16 md:px-24">
        <p>
          You've already learned how to extend an invitation with{" "}
          <span class="font-japanese text-xl font-semibold text-teal-400">
            ませんか
          </span>
          , but what if you want to be a little more suggestive? Introducing{" "}
          <span class="font-japanese text-xl font-semibold text-indigo-200">
            ましょうか
          </span>
          , meaning <span class="font-black">shall we?</span>.
        </p>

        <hr class="my-6 border-t" />

        <h2 class="text-2xl font-bold">
          1. <span class="font-japanese text-indigo-200">ましょうか</span>
        </h2>
        <h3 class="!mt-3 text-center text-2xl font-medium">
          ます Verb Stem +{" "}
          <span class="font-japanese font-semibold text-indigo-200">
            ましょうか
          </span>
        </h3>

        <div class="flex w-full justify-center font-japanese text-xl">
          <div>
            <div>行きます</div>
            <div>行き</div>
            <div>
              行き<span class="font-semibold text-indigo-200">ましょうか</span>
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold">Example</h3>
        <p class="!mt-3">
          <span class="font-japanese text-xl">
            映画を見
            <span class="font-semibold text-indigo-200">ましょうか</span>。
          </span>
          {"->"} Shall we go watch a movie?
        </p>

        <hr class="my-6 border-t" />

        <p>
          To compare{" "}
          <span class="font-japanese text-xl font-semibold text-teal-400">
            ませんか
          </span>{" "}
          and <span class="font-semibold text-indigo-200">ましょうか</span>,
          take a look at the following description:
        </p>
        <p>
          In the context of asking someone on a date, デートに行きませんか feels
          slightly more formal and could be better for a first-time invitation,
          while デートに行きましょうか feels more casual and might be better
          used between people who are already somewhat familiar with each other.
        </p>
        <p class="text-base text-muted-foreground">
          Similar to the English counterparts of "would you like to go on a
          date?" and "shall we go on a date?"—one makes sense for a first-time
          invitation, while the other indicates that you're already pretty
          comfortable dating (or maybe you're just really confident).
        </p>

        <hr class="my-6 border-t" />

        <h3 class="text-xl font-bold">More examples</h3>
        <ul class="!mt-3 list-disc space-y-4 pl-6">
          <li class="space-y-2">
            <div class="space-y-1">
              <p>
                <span class="font-japanese text-xl">
                  今晩
                  <Romaji romaji="together">
                    <Furigana furigana={<span class="text-sm">いっしょ</span>}>
                      一緒
                    </Furigana>
                    に
                  </Romaji>
                  食べ
                  <span class="font-semibold text-teal-400">ませんか</span>。
                </span>
                {"->"} Would you like to eat together tonight?
              </p>
              <p class="text-base text-muted-foreground">
                You're thinking about cooking dinner for the family, and you're
                asking your father what he thinks.
              </p>
            </div>
            <div class="space-y-1">
              <p>
                <span class="font-japanese text-xl">
                  じゃあ、一緒に食べ
                  <span class="font-semibold text-indigo-200">ましょうか</span>
                  。
                </span>
                {"->"} Well then, shall we eat together?
              </p>
              <p class="text-base text-muted-foreground">
                {/* Dinner's ready, and you're calling your family to the table. */}
                Dinner's ready. Everyone usually eats separately, but you're
                feeling a little festive today.
              </p>
            </div>
          </li>
          <li class="space-y-2">
            <div class="space-y-1">
              <p>
                <span class="font-japanese text-xl">
                  コンビニに行き
                  <span class="font-semibold text-teal-400">ませんか</span>。
                </span>
                {"->"} Would you like go the convenience store (with me)?
              </p>
              <p class="text-base text-muted-foreground">
                You heard that your colleague wanted to buy some snacks, and you
                happen to be leaving for the convenience store.
              </p>
            </div>
            <div class="space-y-1">
              <p>
                <span class="font-japanese text-xl">
                  コンビニに行き
                  <span class="font-semibold text-indigo-200">ましょうか</span>
                  。
                </span>
                {"->"} Shall we go to the convenience store?
              </p>
              <p class="text-base text-muted-foreground">
                A new coworker looks tired during overtime work, and you want to
                suggest getting coffee together.
              </p>
            </div>
          </li>
        </ul>

        <hr class="my-6 border-t" />

        <h2 class="!mt-9 text-2xl font-bold">
          2. <span class="font-japanese text-violet-400">ましょう</span>
        </h2>
        <p>
          If you don't really want them to decline, drop the か to make it a
          suggestion instead of a question.{" "}
          <span class="font-japanese font-semibold text-violet-400">
            ましょう
          </span>{" "}
          means <span class="font-black">let's</span> (do something).
        </p>

        <h3 class="text-xl font-bold">Examples</h3>
        <ul class="!mt-3 list-disc space-y-4 pl-6">
          <li class="space-y-2">
            <span class="font-japanese text-xl">
              映画を見
              <span class="font-semibold text-violet-400">ましょう</span>。
            </span>
            {"->"} Let's watch a movie.
          </li>
          <li class="space-y-2">
            <span class="font-japanese text-xl">
              <Romaji romaji="together">
                <Furigana furigana={<span class="text-sm">いっしょ</span>}>
                  一緒
                </Furigana>
                に
              </Romaji>
              食べ
              <span class="font-semibold text-violet-400">ましょう</span>。
            </span>
            {"->"} Let's eat together.
          </li>
          <li class="space-y-2">
            <span class="font-japanese text-xl">
              コンビニに行き
              <span class="font-semibold text-violet-400">ましょう</span>。
            </span>
            {"->"} Let's go to the convenience store.
          </li>
        </ul>

        {/* <h2 class="!mt-12 text-center text-3xl font-bold">Practice</h2>
        <ol class="list-inside list-decimal space-y-4">
          <li>
            <strong>Create an invitation:</strong>
            <p class="mt-1">
              Invite your classmate,{" "}
              <span class="font-japanese">
                <Furigana furigana={<span class="text-sm">さとう</span>}>
                  佐藤
                </Furigana>
                さん
              </span>
              , to play tennis tonight.
            </p>
            <div class="mt-2">
              <WanakanaWrapper>
                <CustomTextArea
                  spacing={14}
                  class="h-28 w-full resize-none font-japanese text-xl"
                />
              </WanakanaWrapper>
            </div>
          </li>
          <li>
            <strong>Respond to an invitation:</strong>
            <p class="mt-2">
              Your classmate has just invited you for lunch tomorrow. How would
              you respond?
            </p>
            <ol class="mt-2 list-inside list-[lower-alpha] space-y-3">
              <li>
                Accepting:
                <div class="mt-2">
                  <WanakanaWrapper>
                    <CustomTextArea
                      spacing={14}
                      class="h-28 w-full resize-none font-japanese text-xl"
                    />
                  </WanakanaWrapper>
                </div>
              </li>
              <li>
                Declining politely and suggesting an alternative:
                <div class="mt-2">
                  <WanakanaWrapper>
                    <CustomTextArea
                      spacing={14}
                      class="h-28 w-full resize-none font-japanese text-xl"
                    />
                  </WanakanaWrapper>
                </div>
              </li>
            </ol>
          </li>
        </ol> */}
      </div>
    </ContentBox>
  )
}
