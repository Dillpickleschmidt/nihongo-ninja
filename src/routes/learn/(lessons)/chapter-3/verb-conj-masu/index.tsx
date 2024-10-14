import ContentBox from "@/components/ContentBox"
import YouTubeVideo from "@/features/youtube/YouTube"
import GodanEndingChart from "./components/GodanEndingChart"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import IruEruExceptionsChart from "./components/IruEruExceptionsChart"
import IruEruPractice from "./components/IruEruPractice"
import IrregularPractice from "./components/IrregularPractice"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-2/janai"
    >
      <h1 class="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Verb Conjugation -{" "}
        <span class="font-japanese text-emerald-500">ます</span> Form
      </h1>
      <div class="space-y-6 px-12 pb-32 sm:px-16 md:px-24">
        <p>
          Today, you will learn the differences between godan (
          <span class="font-japanese text-xl font-medium">る</span>) and ichidan
          (<span class="font-japanese text-xl font-medium">う</span>) verbs and
          will learn how to conjugate them to describe habitual actions and the
          future tense using the{" "}
          <span class="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          form.
        </p>
        <div>
          <YouTubeVideo
            videoId="ed4rmIY4mL0"
            title="【N5】Genki 1 Lesson 3 Grammar Made Clear | ます CONJUGATION SIMPLIFIED"
            credit="ToKini Andy"
          />
        </div>
        <h2 class="text-center text-3xl font-bold">
          The Two Types of Japanese Verbs
        </h2>
        <p>In Japanese, verbs are divided into two main categories.</p>
        <div class="!mt-6 flex justify-center text-3xl font-semibold">
          <p>Godan</p>
          <p class="mx-10 lg:mx-16">{"->"}</p>
          <p>Ichidan</p>
        </div>
        <h3 class="!mt-9 text-2xl font-bold">Godan Verbs</h3>
        <p class="!mt-4">
          Godan verbs are also known as <strong>U-verbs</strong> because they
          always end with an <span class="font-black">u</span> sound in their
          dictionary form.
        </p>
        <ul class="!mt-4 list-inside list-disc">
          <li>
            <span class="font-japanese text-xl">聞く</span>(kik<u>u</u>) - to
            listen/hear/ask
          </li>
          <li>
            <span class="font-japanese text-xl">読む</span> (yom<u>u</u>) - to
            read
          </li>
          <li>
            <span class="font-japanese text-xl">話す</span> (hanas<u>u</u>) - to
            speak
          </li>
        </ul>
        <p>
          Here are <strong>ALL</strong> the possible endings a godan verb (or
          any verb) might have <span class="">(just for reference)</span>:
        </p>
        <ul class="!mt-0 flex flex-wrap justify-center space-x-3 space-y-3 font-japanese text-4xl font-semibold lg:mx-16">
          <li class="!mt-3">う</li>
          <li>・</li>
          <li>く</li>
          <li>・</li>
          <li>ぐ</li>
          <li>・</li>
          <li>す</li>
          <li>・</li>
          <li>つ</li>
          <li>・</li>
          <li>ぬ</li>
          <li>・</li>
          <li>ぶ</li>
          <li>・</li>
          <li>む</li>
          <li>・</li>
          <li class="">
            <div class="flex items-start">
              る<span class="text-2xl">**</span>
            </div>
          </li>
        </ul>
        <h3 class="!mt-9 text-2xl font-bold">Ichidan Verbs</h3>
        <p class="!mt-4">
          Ichidan verbs are also called <strong>Ru-verbs</strong> because they
          end with either{" "}
          <span class="text-nowrap font-japanese text-xl font-medium">
            いる
          </span>{" "}
          (iru) or{" "}
          <span class="text-nowrap font-japanese text-xl font-medium">
            える
          </span>{" "}
          (eru) in their dictionary form.
        </p>
        <ul class="!mt-4 list-inside list-disc">
          <li>
            <span class="font-japanese text-xl">食べる</span> (tab<u>eru</u>) -
            to eat
          </li>
          <li>
            <span class="font-japanese text-xl">見る</span> (m<u>iru</u>) - to
            see/look at/watch
          </li>
          <li>
            <span class="font-japanese text-xl">起きる</span> (ok<u>iru</u>) -
            to wake up/get up
          </li>
        </ul>
        <p>
          Ichidan verbs are often referred to as{" "}
          <span class="font-japanese font-medium">る</span> verbs in textbooks
          for English speakers learning Japanese, but that can be very confusing
          since <strong>u-verbs</strong> (godan) can also end in{" "}
          <span class="font-japanese font-medium">る</span>, such as the verb{" "}
          <span class="font-japanese font-medium">乗る</span> (noru) - to board.
        </p>
        <p>
          That's why we reccomend you{" "}
          <span class="font-bold italic">forget</span> about calling them{" "}
          <strong>ru-verbs</strong> and instead refer to them as either{" "}
          <strong>iru/eru-verbs</strong> or{" "}
          <span class="font-bold underline">ichidan</span> verbs, which is how
          Japanese kids learn to classify them.
        </p>
        <h4 class="text-xl italic">
          A case for <span class="font-bold">godan</span> &{" "}
          <span class="font-bold">ichidan</span> instead of{" "}
          <span class="font-bold">u</span> &{" "}
          <span class="font-bold">iru/eru</span>:
        </h4>
        <p>
          You'll notice iru/eru still end in an{" "}
          <span class="font-black">u</span> sound, so it might still get a bit
          confusing. Technically, ALL verbs end in an{" "}
          <span class="font-black">u</span> sound in their dictionary
          (unconjugated) form. The rule is, if it's a verb that ends in iru/eru,
          it's an ichidan verb, otherwise, it's a godan verb.
        </p>
        <h2 class="!mt-12 text-center text-3xl font-bold">
          The <span class="font-japanese text-emerald-500">ます</span> Form:
          Habitual Actions & Future Tense (Polite)
        </h2>
        <p class="!mt-9">
          The{" "}
          <span class="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          form is a polite way to express verbs in Japanese. It's versatile and
          has several important uses:
        </p>
        <ol class="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            <p>
              <strong>Habitual Actions: </strong>It can describe regular or
              habitual actions.
            </p>
            <p>
              <span class="text-base font-bold">Example: </span>
              <span class="font-japanese text-xl">
                <span class="text-center">
                  <Romaji romaji="Every day" class="mr-2">
                    <Furigana furigana={<span class="text-sm">まいにち</span>}>
                      毎日
                    </Furigana>
                  </Romaji>
                </span>
                日本語を勉強します。
              </span>
              {"->"} I study Japanese every day.
            </p>
            <p class="!mt-1 text-base italic text-muted-foreground">
              *This uses the <span class="font-japanese not-italic">を</span>{" "}
              particle which you'll learn shortly.
            </p>
          </li>
          <li>
            <p>
              <strong>Future Tense: </strong>It's also used to express future
              actions or intentions.
            </p>
            <p>
              <span class="text-base font-bold">Example: </span>
              <span class="font-japanese text-xl">
                <span class="text-center">
                  <Romaji romaji="Tomorrow" class="mr-2">
                    <Furigana furigana={<span class="text-sm">あした</span>}>
                      明日
                    </Furigana>
                  </Romaji>

                  <Romaji romaji="Tokyo">東京</Romaji>
                </span>
                に行きます。
              </span>
              {"->"} I will go to Tokyo tomorrow.
            </p>
            <p class="!mt-1 text-base italic text-muted-foreground">
              *This uses the <span class="font-japanese not-italic">に</span>{" "}
              particle which you'll learn shortly.
            </p>
          </li>
        </ol>
        <p>
          It's important to note that context often determines whether the{" "}
          <span class="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          form is referring to habitual actions or future tense.
        </p>
        <p>
          If I was to simply say{" "}
          <span class="font-japanese text-xl">東京に行きます</span>, it could
          mean either "I go to Tokyo" or "I will go to Tokyo", which is why it's
          sometimes good to say{" "}
          <span class="text-nowrap font-japanese text-xl">明日</span> (tomorrow)
          explicitly if the context isn't clear.
        </p>
        <p>
          To conjugate verbs into{" "}
          <span class="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          form, you create the{" "}
          <span class="font-bold underline underline-offset-[3px]">
            <span class="font-japanese">ます</span> verb stem
          </span>{" "}
          version of a verb, then add{" "}
          <span class="font-japanese text-xl font-bold text-emerald-500">
            ます
          </span>
          .
        </p>
        <div class="!mt-6 flex items-center justify-center text-3xl font-semibold">
          <div class="rounded-md border-2 border-dashed border-card-foreground bg-card px-5 py-3">
            <span class="font-japanese font-semibold">ます</span> verb stem
          </div>
          <p class="mx-4">+</p>
          <p>
            <span class="font-japanese text-4xl font-semibold text-emerald-500">
              ます
            </span>
          </p>
        </div>
        <p class="text-base italic text-muted-foreground">
          *We call it the "<span class="font-japanese not-italic">ます</span>{" "}
          verb stem" because you'll be reusing that stem in other verb
          conjugations later on.
        </p>
        <h3 class="!mt-9 text-2xl font-bold">
          Creating the{" "}
          <span class="font-japanese text-2xl text-emerald-500">ます</span> Form
          for Godan Verbs
        </h3>
        <ol class="!mt-4 ml-6 list-decimal space-y-2">
          <li>Identify the last syllable of the verb.</li>
          <li>Change it to its "i" counterpart.</li>
          <li>
            Add{" "}
            <span class="font-japanese text-xl font-semibold text-emerald-500">
              ます
            </span>
            .
          </li>
        </ol>
        <GodanEndingChart />
        <p class="text-base italic text-muted-foreground">
          *If you look at the hiragana character chart, you'll notice that
          you're simply shifting each character to the{" "}
          <strong>left by one</strong> (
          <span class="font-japanese not-italic">う</span> column to{" "}
          <span class="font-japanese not-italic">い</span> column).
        </p>
        <h4 class="text-center text-xl font-bold">Examples</h4>
        <div class="!mt-4 flex justify-center">
          <ul class="list-inside list-disc space-y-2">
            <li>
              <span class="font-japanese text-2xl">
                聞<span class="font-bold">く</span>
              </span>{" "}
              (kiku) {"->"}{" "}
              <span class="font-japanese text-2xl">
                聞<span class="font-bold">き</span>
                ます
              </span>{" "}
              (kikimasu)
            </li>
            <li>
              <span class="font-japanese text-2xl">
                読<span class="font-bold">む</span>
              </span>{" "}
              (yomu) {"->"}{" "}
              <span class="font-japanese text-2xl">
                読<span class="font-bold">み</span>
                ます
              </span>{" "}
              (yomimasu)
            </li>
            <li>
              <span class="font-japanese text-2xl">
                話<span class="font-bold">す</span>
              </span>{" "}
              (hanasu) {"->"}{" "}
              <span class="font-japanese text-2xl">
                話<span class="font-bold">し</span>
                ます
              </span>{" "}
              (hanashimasu)
            </li>
          </ul>
        </div>
        <p>
          <span class="font-japanese text-xl">聞く</span> (kiku) changes to{" "}
          <span class="font-japanese text-xl">聞き</span> (kiki), then{" "}
          <span class="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          gets added.
        </p>
        <p class="!mt-2 text-base italic text-muted-foreground">
          *Here,{" "}
          <strong>
            <span class="font-japanese not-italic">聞き</span> (kiki)
          </strong>{" "}
          is the <span class="font-japanese font-normal not-italic">ます</span>{" "}
          verb stem.
        </p>
        <h3 class="!mt-9 text-2xl font-bold">
          Creating the{" "}
          <span class="font-japanese text-2xl text-emerald-500">ます</span> Form
          for Ichidan Verbs
        </h3>
        <ol class="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            Remove the final{" "}
            <span class="font-japanese text-xl font-medium">る</span>.
          </li>
          <li>
            Add{" "}
            <span class="font-japanese text-xl font-semibold text-emerald-500">
              ます
            </span>
            .
          </li>
        </ol>
        <h4 class="text-center text-xl font-bold">Examples</h4>
        <div class="!mt-4 flex justify-center">
          <ul class="list-inside list-disc space-y-2">
            <li>
              <span class="font-japanese text-2xl">
                食べ
                <span class="font-bold underline underline-offset-[3px]">
                  る
                </span>
              </span>{" "}
              (taberu) {"->"}{" "}
              <span class="font-japanese text-2xl">食べます</span> (tabemasu)
            </li>
            <li>
              <span class="font-japanese text-2xl">
                見
                <span class="font-bold underline underline-offset-[3px]">
                  る
                </span>
              </span>{" "}
              (miru) {"->"} <span class="font-japanese text-2xl">見ます</span>{" "}
              (mimasu)
            </li>
            <li>
              <span class="font-japanese text-2xl">
                起き
                <span class="font-bold underline underline-offset-[3px]">
                  る
                </span>
              </span>{" "}
              (okiru) {"->"}{" "}
              <span class="font-japanese text-2xl">起きます</span> (okimasu)
            </li>
          </ul>
        </div>
        <p>
          <span class="font-japanese text-xl">食べる</span> (taberu) changes to{" "}
          <span class="font-japanese text-xl">食べ</span> (tabe), then{" "}
          <span class="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          gets added.
        </p>
        <p class="!mt-2 text-base italic text-muted-foreground">
          *Here,{" "}
          <strong>
            <span class="font-japanese not-italic">食べ</span> (tabe)
          </strong>{" "}
          is the <span class="font-japanese font-normal not-italic">ます</span>{" "}
          verb stem.
        </p>
        <h2 class="!mt-12 text-center text-3xl font-bold">Practice</h2>
        <p>
          Conjugate the following verbs into their{" "}
          <span class="font-japanese text-xl font-semibold">ます</span> form{" "}
          <span class="font-bold">using kanji</span>.
        </p>
        <IruEruPractice />
        <h2 class="!mt-12 text-center text-3xl font-bold">Irregular Verbs</h2>
        <p>
          In addition to Godan and Ichidan verbs, Japanese has a small group of
          irregular verbs which don't follow any standard conjugation rules{" "}
          <span class="text-base text-muted-foreground">
            (You just have to memorize them case-by-case)
          </span>
          . Let's look at the two most common irregular verbs and how they form
          the <span class="font-japanese text-xl font-medium">ます</span> (masu)
          form:
        </p>
        <div class="flex flex-col items-center">
          <h3 class="text-xl font-bold">
            <span class="font-japanese text-2xl">する</span> - to do
          </h3>
          <div class="mt-2">
            <div class="flex w-full items-center">
              <p class="w-32 font-bold text-red-500">Incorrect</p>
              <p>
                <span class="font-japanese text-xl line-through">すります</span>
              </p>
            </div>
            <div class="flex w-full items-center">
              <p class="w-32 font-bold">Correct</p>
              <p>
                <span class="font-japanese text-xl">します</span>
              </p>
            </div>
          </div>

          <h3 class="mt-4 text-xl font-bold">
            <span class="font-japanese text-2xl">
              <Furigana furigana={<span class="text-base">く</span>}>
                来
              </Furigana>
              る
            </span>{" "}
            - to come
          </h3>
          <div class="mt-2">
            <div class="flex w-full items-center">
              <p class="w-32 font-bold text-red-500">Incorrect</p>
              <p>
                <span class="font-japanese text-xl line-through">
                  <Furigana furigana={<span class="text-base">く</span>}>
                    来
                  </Furigana>
                  ります
                </span>
              </p>
            </div>
            <div class="flex w-full items-center">
              <p class="w-32 font-bold">Correct</p>
              <p>
                <span class="font-japanese text-xl">
                  <Furigana furigana={<span class="text-base">き</span>}>
                    来
                  </Furigana>
                  ます
                </span>
              </p>
            </div>
          </div>
        </div>
        <h4 class="text-xl font-bold italic">
          Special Note on{" "}
          <span class="font-japanese text-[1.35rem] not-italic">する</span>
        </h4>
        <p class="!mt-4">
          <span class="font-japanese text-xl font-medium">する</span> is a
          particularly useful verb because it can be combined with many{" "}
          <strong>nouns</strong> to create new <strong>verbs</strong>. For
          example:
        </p>
        <div class="!mt-4 flex justify-center">
          <ul class="list-inside list-disc space-y-2">
            <li>
              <span class="font-japanese text-2xl">勉強する</span> (benkyō suru)
              - to study
            </li>
            <li>
              <span class="font-japanese text-2xl">練習する</span> (renshū suru)
              - to practice
            </li>
            <li>
              <span class="font-japanese text-2xl">掃除する</span> (sōji suru) -
              to clean
            </li>
          </ul>
        </div>
        <p>
          All of these compound verbs follow the same conjugation pattern as
          <span class="text-nowrap font-japanese text-xl font-medium">
            する
          </span>
          :
        </p>
        <div class="!mt-4 flex justify-center">
          <ul class="list-inside list-disc space-y-2">
            <li>
              <span class="font-japanese text-2xl">勉強します</span> (benkyō
              shimasu) - (I) study
            </li>
            <li>
              <span class="font-japanese text-2xl">練習します</span> (renshū
              shimasu) - (I) practice
            </li>
            <li>
              <span class="font-japanese text-2xl">掃除します</span> (sōji
              shimasu) - (I) clean
            </li>
          </ul>
        </div>
        <p class="text-base italic text-muted-foreground">
          *Note that while nouns are typically connected to verbs via the{" "}
          <span class="font-japanese font-semibold not-italic">を</span>{" "}
          particle (more on this later), compound verbs with{" "}
          <span class="font-japanese font-semibold not-italic">する</span> don't
          need that particle, it's just one word.
        </p>
        <h4 class="!mt-9 text-center text-xl font-bold">
          Non-Ichidan iru/eru Verbs
        </h4>
        <p class="!mt-4">
          Some verbs aren't <em>techincally</em> considered irregular by many
          textbooks but they follow godan conjugation despite ending in iru/eru,
          so we'll just call them irregular verbs here. Fortunately, there's
          only about ten of them. Here's a complete list—we'll tell you whenever
          we introduce one to you{" "}
          <span class="text-base text-muted-foreground">
            (no need to memorize them now)
          </span>
          .
        </p>
        <IruEruExceptionsChart />
        <p class="text-sm text-muted-foreground">
          List credit: <strong>ToKini Andy</strong> (give his video a like!)
        </p>
        <p class="text-center text-xl font-bold">
          In every single case besides{" "}
          <span class="font-japanese text-[1.35rem]">る</span> endings, you can
          be sure it's a godan verb.
        </p>
        <p>
          If the verb ends in{" "}
          <span class="font-japanese text-xl font-semibold">る</span>, it can
          either be an ichidan verb or an irregular verb. You should assume it's
          an ichidan verb unless you know it's irregular.
        </p>
        <h2 class="!mt-12 text-center text-3xl font-bold">Practice (harder)</h2>
        <p>
          Conjugate the following verbs into their{" "}
          <span class="font-japanese text-xl font-semibold">ます</span> form{" "}
          <span class="font-bold">using kanji</span>.
        </p>
        <IrregularPractice />
        <h4 class="text-xl font-bold italic">Special Note on Present Tense</h4>
        <p>
          You may have read from textbooks or heard Japanese teachers describe{" "}
          <span class="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          as <strong>present tense</strong>. In this case, what they're actually
          describing is the habitual actions, which isn't really how most people
          think of present tense in English.
        </p>
        <p>
          If you want to say{" "}
          <span class="font-bold italic">
            I am reading <span class="text-base">(currently)</span>
          </span>{" "}
          in Japanese, you <span class="font-bold underline">wouldn't</span> use{" "}
          <span class="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          form. Instead, you would use the{" "}
          <span class="font-semibold text-orange-400">
            <span class="font-japanese text-xl">て</span>
            -form
          </span>
          , which we'll cover later in Chapter 5. For now, we'll just focus on
          using{" "}
          <span class="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          form.
        </p>
        <div class="!mt-4 flex flex-col items-center">
          <div>
            <div class="flex w-full items-center">
              <p class="w-32 font-bold text-red-500">Incorrect</p>
              <p>
                <span class="font-japanese text-xl">読みます。</span>
                {"->"} I read (
                <span class="text-base text-muted-foreground">/reed/</span>{" "}
                habitually).
              </p>
            </div>
            <div class="flex w-full items-center">
              <p class="w-32 font-bold">Correct</p>
              <p>
                <span class="font-japanese text-xl">読んでいます。</span>
                {"->"} I am reading.
              </p>
            </div>
          </div>
        </div>
        <p>
          Remember, practice makes perfect! Keep using these forms in sentences
          and conversations, and they'll become second nature in no time.
        </p>
        <h3 class="text-center">
          <Romaji romaji="Do your best!">
            <span class="font-japanese text-2xl font-semibold">
              がんばってください！
            </span>
          </Romaji>
        </h3>
      </div>
    </ContentBox>
  )
}
