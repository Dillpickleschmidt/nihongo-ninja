import { getVocabularyByPath } from "@/db/statements"
import VocabCardPairNoBG from "@/features/vocab-card/pair/VocabCardPairNoBG"
import type { RichVocabItem } from "@/types/vocab"
import { createResource, Show } from "solid-js"
import VocabCardPair from "@/features/vocab-card/pair/VocabCardPair"
import VocabCardSingle from "@/features/vocab-card/single/VocabCardSingle"
import VocabCard4NoBG from "@/features/vocab-card/quadruplet/VocabCard4NoBG"
import SelectText from "@/components/text/MultipleChoiceText"
import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"

export default function page() {
  const [data] = createResource<RichVocabItem[]>(
    async () => await getVocabularyByPath("chapter-1/useful-expressions"),
  )

  return (
    <>
      <h1 class="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Useful Expressions
      </h1>
      <Show when={data()}>
        <VocabCardPairNoBG data={data()!} index={0} />
        <VocabCardSingle data={data()!} index={2} />
        <VocabCardPairNoBG data={data()!} index={3} />
        <VocabCardSingle data={data()!} index={5} />
        <VocabCardPairNoBG data={data()!} index={6} />
        <VocabCardPair data={data()!} index={8} />
        <VocabCardPair data={data()!} index={10} />
        <VocabCardPairNoBG data={data()!} index={12} single />
        <VocabCardPairNoBG data={data()!} index={13} />
        <VocabCardPair data={data()!} index={15} />
        <VocabCard4NoBG data={data()!} index={17} />
      </Show>
      <div class="mt-12 flex flex-col items-center">
        <div class="max-w-[850px] px-4 pb-32 md:px-8">
          {/* Practice */}
          <div class="space-y-4 text-xl leading-8 [&>*]:space-y-4">
            <h3 class="!pb-6 pt-16 text-center text-5xl font-bold">Practice</h3>
            <p>
              What does <span class="font-japanese">わかりましたか。</span>
              mean?
            </p>
            <SelectText
              answer="Do you understand?"
              a="Do you understand?"
              b="Please say it slowly."
              c="I have a question."
              d="Excuse me."
              class="text-xl"
            />
            <p>
              Your teacher explains something and you want to say you
              understood. How do you respond?
            </p>
            <SelectText
              answer="わかりました。"
              a="はじめまして。"
              b="どうぞよろしくおねがいします。"
              c="わかりました。"
              d="ちょっとまってください。"
            />
            <p>
              You didn't understand a word your friend said. What do you say to
              let them know?
            </p>
            <SelectText
              answer="わかりません。"
              a="おなまえは？"
              b="きいてください。"
              c="もういちどいってください。"
              d="わかりません。"
            />
            <p>
              You are having trouble keeping up with the conversation and need
              someone to speak more slowly. What do you request?
            </p>
            <SelectText
              answer="もうちょっとゆっくりおねがいします。"
              a="かいてください。"
              b="もうちょっとゆっくりおねがいします。"
              c="１０ぺージをみてください。"
              d="しつれいします。"
            />
            <p>How do you ask someone to repeat what they just said?</p>
            <SelectText
              answer="もういちどいってください。"
              a="わかりましたか。"
              c="せんせい。"
              d="もういちどいってください。"
              b="あのう、すみません。"
            />
            <p>
              You need a moment and want someone to wait. What phrase do you
              use?
            </p>
            <SelectText
              answer="ちょっとまってください。"
              a="わかりません。"
              c="もうちょっとゆっくりおねがいします。"
              d="ちょっとまってください。"
              b="おなまえは？"
            />
            <p>Which phrase means "Please listen"?</p>
            <SelectText
              answer="きいてください。"
              a="きいてください。"
              c="どうぞよろしくおねがいします。"
              d="どうもありがとうございます。"
              b="もうちょっとゆっくりおねがいします。"
            />
            <p>
              You are looking at a textbook and want someone to turn to a
              specific page. What do you tell them?
            </p>
            <SelectText
              answer="１０ぺージをみてください。"
              a="しつもんがあります。"
              c="しつれいします。"
              d="１０ぺージをみてください。"
              b="もういちどおねがいします。"
            />
            <p>
              You meet someone for the first time and want to introduce
              yourself. What is the appropriate greeting?
            </p>
            <SelectText
              answer="はじめまして。"
              a="すみませんが、えいごでいいですか。"
              c="どうぞよろしくおねがいします。"
              d="ゆっくりいってください。"
              b="はじめまして。"
            />
            <p>How do you tell someone where you are from in Japanese?</p>
            <SelectText
              answer="しゅっしんは[your hometown]です。"
              a="しゅっしんは[your hometown]です。"
              b="せんせい。"
              c="もういちどいってください。"
              d="おなまえは？"
            />
            <p>
              You're about to leave your Japanese teacher's office. What should
              you say before you exit?
            </p>
            <SelectText
              answer="しつれいします。"
              a="しつれいします。"
              b="わかりましたか。"
              c="もういちどいってください。"
              d="どうもありがとうございます。"
            />
            <p>
              You didn't understand what your teacher just said. How do you ask
              them to repeat?
            </p>
            <SelectText
              answer="もういちどおねがいします。"
              a="どうぞよろしくおねがいします。"
              b="もうちょっとゆっくりおねがいします。"
              c="もういちどおねがいします。"
              d="すみませんが、えいごでいいですか。"
            />
            <p>How do you say "Teacher" in Japanese?</p>
            <SelectText
              answer="せんせい"
              a="せんせい"
              b="しつもん"
              c="おなまえ"
              d="しつれい"
            />
            <p>
              You're meeting new coworkers at your new job. What's a good phrase
              to end your self-introduction?
            </p>
            <SelectText
              answer="どうぞよろしくおねがいします。"
              a="はじめまして。"
              b="しつれいします。"
              c="どうぞよろしくおねがいします。"
              d="わかりましたか。"
            />
            <p>
              Your <span class="font-japanese">せんせい</span> said{" "}
              <span class="font-japanese">かいってください</span> today while
              staring right at you from across the classroom! What on earth did
              she mean?
            </p>
            <SelectText
              answer="Please write"
              a="Please listen."
              b="Please write."
              c="Please ask."
              d="Please wake up."
              class="text-xl"
            />
            <p>
              How do you politely get someone's attention by saying "Excuse me"?
            </p>
            <SelectText
              answer="あのう、すみません。"
              a="あのう、すみません。"
              b="おなまえは？"
              c="せんせい"
              d="どうもありがとうございます。"
            />
            <p>
              You want to tell someone your name. How do you say "I am [your
              name]" in Japanese?
            </p>
            <SelectText
              answer="[your name]です。"
              a="[your name] せんせい。"
              b="どうぞよろしくおねがいします。"
              c="[your name]です。"
              d="おなまえは？"
            />
            <p>
              You're a bad uncle who forgot that your sister's kid's stroller is
              parked on a hill, and it starts to roll! Thankfully, a good
              samaritan swept in and saved the day. You want to seriously thank
              them. What's a good response to give?
            </p>
            <SelectText
              answer="どうもありがとうございます。"
              a="どうもありがとうございます。"
              b="すみませんが、えいごでいいですか。"
              c="わかりましたか。"
              d="ちょっとまってください。"
            />
            <p>
              You have a question during class. How do you say "I have a
              question"?
            </p>
            <SelectText
              answer="しつもんがあります。"
              a="おなまえは？"
              b="わかりましたか。"
              c="しつもんがあります。"
              d="ゆっくりいってください。"
            />
          </div>
        </div>
      </div>

      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-1/countries-time">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
