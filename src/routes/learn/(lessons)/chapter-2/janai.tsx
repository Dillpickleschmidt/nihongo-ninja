import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import CheckboxQuestion from "@/features/checkbox-question/CheckboxQuestion"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  const questions = [
    "あそこ",
    "傘[かさ]",
    "新聞[しんぶん]",
    "これ",
    "高い[たかい]",
    "野菜[やさい]",
    "おいしい",
    "誰[だれ]",
    "私の本[わたしのほん]",
    "高い本[たかいほん]",
  ]

  const correctQuestions = [
    "傘[かさ]",
    "新聞[しんぶん]",
    "野菜[やさい]",
    "私の本[わたしのほん]",
    "高い本[たかいほん]",
  ]

  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-2/kikusasaizu-2-1"
    >
      <h1 class="px-12 pb-6 pt-28 text-center text-4xl font-semibold lg:px-28">
        <span class="font-japanese text-orange-400">じゃない</span>—The Negative
        Form in Japanese
      </h1>
      <div class="space-y-6 px-8 pb-32 sm:px-16 md:px-24">
        <p>
          The{" "}
          <span class="font-japanese text-xl font-semibold text-orange-400">
            じゃない
          </span>{" "}
          construction in Japanese is used to negate statements, much like
          saying <span class="font-black">is not</span> in English. This lesson
          will explore its basic usage, variations, and some common
          conversational uses.
        </p>

        <div class="flex w-full flex-col items-center">
          <div class="rounded-lg border-2 border-orange-400 p-5 md:w-[450px]">
            <div class="flex w-full">
              <p class="w-56 text-2xl md:w-64">
                X <span class="font-japanese font-bold text-sky-400">は</span> Y{" "}
                <span class="font-japanese">です。</span>
              </p>
              <p class="mr-6 text-xl">{"->"}</p>
              <p class="text-xl">X is Y.</p>
            </div>
            <div class="flex w-full">
              <p class="w-56 text-2xl md:w-64">
                X <span class="font-japanese font-bold text-sky-400">は</span> Y{" "}
                <span class="font-japanese font-semibold text-orange-400">
                  じゃないです。
                </span>
              </p>
              <p class="mr-6 text-xl">{"->"}</p>
              <p class="text-xl">
                X <span class="font-bold text-orange-400">is not</span> Y.
              </p>
            </div>
          </div>
        </div>

        <h3 class="text-2xl font-bold">Basic Usage</h3>
        <p>
          The basic form of negating a noun sentence in Japanese involves
          replacing <span class="font-japanese text-xl">です</span> with{" "}
          <span class="font-japanese text-xl">じゃないです</span>.
        </p>
        <h4 class="!mt-4 text-xl font-bold italic">Example:</h4>
        <ul class="!mt-3 list-inside list-disc space-y-2">
          <li>
            <span class="font-japanese text-xl">これはペンです。</span>
            {"->"} This is a pen.
          </li>
          <li>
            <span class="font-japanese text-xl">
              これはペン
              <span class="font-semibold text-orange-400">じゃないです</span>。
            </span>
            {"->"} This <span class="font-bold">is not</span> a pen.
          </li>
        </ul>

        <h3 class="text-center text-2xl font-bold">Variations of Negation</h3>
        <p class="font-bold">
          There are three common ways to form negative sentences in Japanese:
        </p>
        <ol class="!mt-3 ml-3 list-inside list-decimal space-y-3">
          <li>
            <span class="font-japanese text-xl font-semibold">
              じゃないです
            </span>{" "}
            - Colloquial and commonly used in everyday conversation.
          </li>
          <li>
            <span class="font-japanese text-xl font-semibold">
              じゃありません
            </span>{" "}
            - Slightly more formal, appropriate for polite speech.{" "}
            <span class="font-japanese text-xl">じゃ</span> is a contraction of{" "}
            <span class="font-japanese text-xl">では</span> (de-wa).
          </li>
          <li>
            <span class="font-japanese text-xl font-semibold">
              ではありません
            </span>{" "}
            <span class="text-base text-muted-foreground">
              (de-wa-arimasen)
            </span>{" "}
            - Formal and appropriate for written language or very polite speech.
          </li>
        </ol>
        <p class="!mt-3 text-center text-base italic text-muted-foreground">
          *Notice 2 & 3 don't include{" "}
          <span class="font-japanese text-lg not-italic">です</span>.
        </p>
        <h4 class="!mt-2 text-xl font-bold italic">Examples:</h4>
        <div class="!mt-3 flex flex-wrap justify-center">
          <div class="space-y-2">
            <div class="flex flex-wrap items-end">
              <p class="mx-3">1.</p>
              <p class="w-80 font-japanese text-xl">
                <Furigana furigana={<span class="text-sm">たなか</span>}>
                  田中
                </Furigana>
                さんは
                <Furigana furigana={<span class="text-sm">がくせい</span>}>
                  学生
                </Furigana>
                じゃないです。
              </p>
              <p>
                {"->"}
                <span class="ml-2 text-center font-semibold italic">
                  Colloquial
                </span>
              </p>
            </div>
            <div class="flex flex-wrap items-end">
              <p class="mx-3">2.</p>
              <p class="w-80 font-japanese text-xl">
                田中さんは 学生 じゃありません。
              </p>
              <p>
                {"->"}
                <span class="ml-2 text-center font-semibold italic">
                  Polite
                </span>
              </p>
            </div>
            <div class="flex flex-wrap items-end">
              <p class="mx-3">3.</p>
              <p class="w-80 font-japanese text-xl">
                田中さんは 学生 じゃありません。
              </p>
              <p>
                {"->"}
                <span class="ml-2 text-center font-semibold italic">
                  Formal
                </span>
              </p>
            </div>
          </div>
        </div>
        <h3 class="pt-6 text-2xl font-bold">
          Using <span class="text-orange-400">じゃない</span> to Confirm
        </h3>
        <p>
          In addition to negating statements,{" "}
          <span class="font-japanese text-xl font-bold text-orange-400">
            じゃない
          </span>{" "}
          can be used in conversations to ask someone else to confirm or clarify
          something, similar to to saying <strong>isn't it?</strong> in English.
        </p>
        <h4 class="font-medium italic">Example:</h4>
        <ul class="!mt-3 list-inside list-disc space-y-2">
          <li>
            <span class="font-japanese text-xl">
              これは田中さんの
              <Furigana furigana={<span class="text-sm">ほん</span>}>
                本
              </Furigana>
              じゃないですか。
            </span>
            {"->"} Isn't this Tanaka's book?
          </li>
        </ul>
        <p>
          Literally, it's just a simple negative statement with the{" "}
          <span class="font-japanese text-xl font-semibold text-red-500">
            か
          </span>{" "}
          particle to turn it into a question.
        </p>
        <p class="!mt-2 text-center font-semibold">
          It is not {"->"} Is it not?
        </p>
        <p class="!mt-4 font-semibold">A response might look like this:</p>
        <ul class="!mt-2 ml-6 list-inside list-disc space-y-2">
          <li>
            <span class="font-japanese text-xl">
              はい、田中さんの
              <Furigana furigana={<span class="text-sm">ほん</span>}>
                本
              </Furigana>
              です。
            </span>
            {"->"} Yes, that's Tanaka's book.
          </li>
          <li>
            <span class="font-japanese text-xl">
              いいえ、田中さんの
              <Furigana furigana={<span class="text-sm">ほん</span>}>
                本
              </Furigana>
              じゃないです。
            </span>
            {"->"} No, that's not Tanaka's book.
          </li>
        </ul>

        <h3 class="pt-6 text-2xl font-bold">
          Only Negates Nouns (and na-adjectives)
        </h3>
        <p>
          The{" "}
          <span class="font-japanese text-xl font-bold text-orange-400">
            じゃないです
          </span>{" "}
          form is used exclusively for nouns and na-adjectives{" "}
          <span class="text-base text-muted-foreground">
            (you'll learn about adjective conjugation in Chapter 5)
          </span>
          . It cannot be used to negate i-adjectives or verbs.
        </p>
        <p>
          You haven't practiced any adjectives yet, but soon you'll encounter
          the words{" "}
          <span class="font-japanese text-xl">
            <Furigana furigana={<span class="text-sm">たか</span>}>高</Furigana>
            い
          </span>{" "}
          (expensive) and <span class="font-japanese text-xl">おいしい</span>{" "}
          (delicious). These are adjectives and cannot be negated using{" "}
          <span class="font-japanese text-xl">じゃないです</span> and instead
          follow their own conjugation rules.
        </p>
        <div class="flex w-full items-center">
          <p class="w-1/4 font-medium text-red-500">Incorrect</p>
          <p class="w-3/4">
            <span class="font-japanese text-xl line-through">
              おいしいじゃないです。
            </span>
          </p>
        </div>
        <div class="!mt-1 flex w-full items-center">
          <p class="w-1/4 font-bold">Correct</p>
          <p class="w-3/4">
            <span class="font-japanese text-xl">
              おいし<span class="text-orange-400">くない</span>です。
            </span>
            {"->"} It's not delicious.
          </p>
        </div>

        <div class="flex w-full items-center">
          <p class="w-1/4 font-medium text-red-500">Incorrect</p>
          <p class="w-3/4">
            <span class="font-japanese text-xl line-through">
              <Furigana furigana={<span class="text-sm">たか</span>}>
                高
              </Furigana>
              いじゃないです。
            </span>
          </p>
        </div>
        <div class="!mt-1 flex w-full items-center">
          <p class="w-1/4 font-bold">Correct</p>
          <p class="w-3/4">
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">たか</span>}>
                高
              </Furigana>
              <span class="text-orange-400">くない</span>です。
            </span>
            {"->"} It's not expensive.
          </p>
        </div>
        <p>
          You're not expected to learn adjective conjugations until Chapter 5.
          For now, focus on creating negative statements using nouns + the
          negative variations discussed here.
        </p>

        <div class="space-y-4 leading-8 [&>*]:space-y-4">
          <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
          <p class="text-center font-semibold">
            Check the words that{" "}
            <span class="font-bold underline underline-offset-2">can</span> be
            negated with{" "}
            <span class="font-japanese text-xl font-bold text-orange-400">
              じゃないです。
            </span>
          </p>
          <div class="flex flex-col items-center">
            <CheckboxQuestion
              questions={questions}
              correctQuestions={correctQuestions}
              horizontal
              furiganaSize="0.75rem"
            />
          </div>
        </div>
        <div class="space-y-4 pt-9">
          <p>
            Though a bit advanced, this video will give you a general idea of
            the other ways you'll hear じゃない in real conversations. Besides,
            Kaname's examples are always hilarious!
          </p>
          <YouTubeVideo
            videoId="mapbKTJ9aBs"
            title="How to Use じゃない"
            credit="Kaname Naito"
          />
        </div>
      </div>
    </ContentBox>
  )
}
