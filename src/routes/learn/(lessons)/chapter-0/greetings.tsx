import { getVocabularyByPath } from "@/db/statements"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import type { RichVocabItem } from "@/types/vocab"
import { createResource, Show } from "solid-js"
import VocabPair from "@/features/vocab-card/pair/VocabPair"
import VocabSingle from "@/features/vocab-card/single/VocabSingle"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"
import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import SelectText from "@/components/text/MultipleChoiceText"

export default function page() {
  const [data] = createResource<RichVocabItem[]>(
    async (): Promise<RichVocabItem[]> => {
      const vocabItems = await getVocabularyByPath(
        "chapter-0/greetings-common-expressions",
      )

      // Use the local `vocabItems` to get the first 7 entries and the last entry
      const firstSeven: RichVocabItem[] = vocabItems.slice(0, 7)
      const lastEntry: RichVocabItem[] = vocabItems.slice(-1)

      // Combine the first seven and the last entry into one array
      return firstSeven.concat(lastEntry)
    },
  )

  return (
    <>
      <div class="flex flex-col items-center">
        <div class="mx-4 max-w-[1300px] md:mx-8">
          <h1 class="pt-20 text-center text-4xl font-medium leading-[3.25rem]">
            <span class="text-5xl font-medium">Great job</span>, you've finally
            made it! You've now got a strong grasp of Hiragana! Not only can you{" "}
            <span class="text-5xl">read</span> hiragana, but you also have the
            phonetic arsenal to <span class="text-5xl">say</span> pretty much{" "}
            <span class="font-bold">*anything*</span> in Japanese!🔥
          </h1>
          <h2 class="px-8 pb-6 pt-12 text-2xl">
            Now that you're familiar with the basics, let's dive into some
            common Japanese greetings. These phrases will be your first steps
            into conversational Japanese, and they're essential for everyday
            interactions.
          </h2>
        </div>
      </div>
      <Show when={data()}>
        {
          <>
            <VocabCardPairNoBG data={data()!} index={0} />
            <VocabSingle data={data()!} index={2} />
            <VocabCardPairNoBG data={data()!} index={3} />
            <VocabCardPairNoBG data={data()!} index={5} />
            <VocabCardPairNoBG data={data()!} index={7} single />
          </>
        }
      </Show>
      <div class="mt-12 flex flex-col items-center">
        <div class="max-w-[850px] px-4 pb-32 md:px-8">
          <p>
            These phrases are great for everyday use and help convey a friendly,
            approachable tone. As with any language, the context and your
            relationship with the person you're speaking to will guide which
            phrase is most appropriate.
          </p>
          {/* Practice */}
          <div class="space-y-4 text-xl leading-8 [&>*]:space-y-4">
            <h3 class="!pb-6 !pt-32 text-center text-5xl font-bold">
              Practice
            </h3>
            {/* <p>
          Match the following greetings with the appropriate time of day
          (Morning, Afternoon, Evening, Leaving):
        </p>
        <div class="pl-10 font-japanese text-[1.55rem]">
          <p>{"a) ありがとう"}</p>
          <p>{"b) おはようございます"}</p>
          <p>{"c) こんばんは"}</p>
          <p>{"d) またね"}</p>
        </div> */}
            <p>
              You run into a friend in the morning while walking to the store.
              How do you greet them?
            </p>
            <SelectText
              answer="おはようございます"
              a="こんにちは"
              b="こんばんは"
              c="おはようございます"
              d="じゃあね"
            />
            <p>
              Which greeting would you use when leaving a casual meet-up with
              friends in the afternoon?
            </p>
            <SelectText
              answer="じゃあね"
              a="ありがとう"
              b="おはよう"
              c="じゃあね"
              d="さようなら"
            />
            <p>
              You say <span class="font-japanese text-2xl">こんばんは</span> to
              your teacher at 9 AM. Is this correct?
            </p>
            <SelectText answer="No" a="Yes" b="No" />
            <p>
              You've just finished a group project and want to thank everyone
              for their hard work. You say, '___________.
            </p>
            <SelectText
              answer="ありがとうございます"
              a="ありがとう"
              b="ありがとうございます"
              c="またね"
              d="さようなら"
            />
            <p>
              It's 8 PM and you are entering a restaurant. The staff greets you.
              You reply with:
            </p>
            <SelectText
              answer="こんばんは"
              a="おはようございます"
              b="こんばんは"
              c="こんにちは"
              d="じゃあね"
            />
            <p>
              <span class="font-japanese text-2xl">おはよう</span> is a formal
              way to say good morning.
            </p>
            <SelectText answer="False" a="True" b="False" />
            {/* <p>
          You are leaving a business meeting. How do you say goodbye to your
          colleagues?
        </p>
        <SelectText
          answer="さようなら"
          a="さようなら"
          b="じゃあね"
          c="またね"
          d="ありがとう"
        /> */}
          </div>
        </div>
      </div>

      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-0/culture-note-japanese-greetings">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
