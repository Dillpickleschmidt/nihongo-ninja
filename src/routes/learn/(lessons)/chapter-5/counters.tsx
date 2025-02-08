import ContentBox from "@/components/ContentBox"
import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import GenericCounters from "@/features/charts/GenericCounters"
import Furigana from "@/components/text/Furigana"

export default function page() {
  return (
    <ContentBox nextButtonLink="/learn/chapter-3/next-lesson">
      <h1 class="px-6 pb-6 pt-6 text-center text-4xl font-semibold sm:px-12 sm:pt-12 lg:px-28 lg:pt-24">
        Generic Counters: One Thing, Two Things, etc.
      </h1>
      <div class="space-y-6 px-8 pb-32 sm:px-16 md:px-24">
        <p>
          It makes sense to get early exposure to these generic counters—they're
          really useful to know, and you'll be using them a lot.
        </p>

        <hr class="my-6 border-t" />

        <h2 class="mt-12 text-center text-2xl font-bold">
          Introduction to Generic Counters
        </h2>
        <p>
          Japanese uses counters to quantify things. While English sometimes
          uses counter words{" "}
          <span class="italic text-muted-foreground">
            (3 <u>sheets</u> of paper, 2 <u>pieces</u> of bread)
          </span>
          , it more often doesn't{" "}
          <span class="italic text-muted-foreground">
            (ex. 4 <u>plates</u>)
          </span>
          . However, Japanese <span class="font-black">always</span> uses
          specific counter words to indicate the type or shape of objects being
          counted, with the generic counter <b>～つ</b> as the baseline.
        </p>
        <p>
          Generic counters like <b>～つ</b> are versatile and can count many
          types of objects that don’t fit neatly into a specific category.
        </p>

        <div class="flex w-full justify-center p-6">
          <GenericCounters />
        </div>

        <hr class="my-6 border-t" />

        <h3 class="mt-8 text-xl font-semibold">
          Example sentences using counters:
        </h3>
        <ul class="list-disc space-y-2 pl-6">
          <li>
            <span class="font-japanese text-xl">
              りんごを
              <Furigana furigana={<span class="text-xs">み</span>}>
                <strong>三</strong>
              </Furigana>
              つ食べました
            </span>{" "}
            {"->"} I ate three apples.
          </li>
          <li>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-xs">かみ</span>}>
                紙
              </Furigana>
              を
              <Furigana furigana={<span class="text-xs">ごまい</span>}>
                <strong>五枚</strong>
              </Furigana>
              買いました
            </span>{" "}
            {"->"} I bought five sheets of paper.
          </li>
          <li>
            <span class="font-japanese text-xl">
              本を
              <Furigana furigana={<span class="text-xs">ごさつ</span>}>
                <strong>五冊</strong>
              </Furigana>
              読みました
            </span>{" "}
            {"->"} I read five books.
          </li>
          <li>
            <span class="font-japanese text-xl">
              お
              <Furigana furigana={<span class="text-xs">さら</span>}>
                皿
              </Furigana>
              は<strong>いくつ</strong>ありますか?
            </span>{" "}
            {"->"} How many plates are there?
          </li>
        </ul>

        <hr class="my-6 border-t" />

        <h2 class="mt-12 text-center text-2xl font-bold">New Counter: ～枚</h2>
        <p>
          The counter <b>～枚 (まい)</b> is used for counting flat, thin objects
          like paper, tickets, or plates. Unlike <b>～つ</b>, it applies to more
          specific categories of items. Here are a few examples:
        </p>
        <ul class="list-disc pl-6">
          <li>
            <strong>一枚の紙</strong> (いちまいのかみ) {"->"} one sheet of paper
          </li>
          <li>
            <strong>三枚のチケット</strong> (さんまいのチケット) {"->"} three
            tickets
          </li>
          <li>
            <strong>二枚のお皿</strong> (にまいのおさら) {"->"} two plates
          </li>
        </ul>

        <hr class="my-6 border-t" />

        <h2 class="mt-12 text-center text-2xl font-bold">
          Comparing Counters in English and Japanese
        </h2>
        <p>
          English sometimes uses counters too, though not as systematically as
          Japanese. For example:
        </p>
        <ul class="list-disc pl-6">
          <li>
            <strong>Three sheets of paper</strong> {"->"} uses "sheets" as a
            counter, similar to <b>～枚</b> in Japanese.
          </li>
          <li>
            <strong>Two pieces of bread</strong> {"->"} uses "pieces" to
            indicate the quantity of individual slices. We wouldn't say "two
            breads" or "two bread."
          </li>
        </ul>
        <p>
          However, unlike Japanese, English often omits the counter altogether.
          For example:
        </p>
        <ul class="list-disc pl-6">
          <li>
            <i>Two plates</i> doesn’t need "sheets" or "pieces" because "plates"
            already conveys the idea.
          </li>
        </ul>
        <p>
          In Japanese, you cannot omit the counter. Each number needs one to
          clarify the object’s category or type.
        </p>
      </div>
    </ContentBox>
  )
}
