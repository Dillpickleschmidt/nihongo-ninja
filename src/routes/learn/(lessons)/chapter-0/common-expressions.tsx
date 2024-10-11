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

export default function test2() {
  const [data] = createResource<RichVocabItem[]>(
    async (): Promise<RichVocabItem[]> => {
      const vocabItems = await getVocabularyByPath(
        "chapter-0/greetings-common-expressions",
      )
      // Get #7 to second last item
      return vocabItems.slice(7, vocabItems.length - 1)
    },
  )
  return (
    <>
      <div class="flex flex-col items-center">
        <div class="mx-4 max-w-[1300px] md:mx-8">
          <h1 class="pb-6 pt-20 text-center text-4xl font-medium leading-[3.25rem]">
            Welcome to your next lesson. We've got a lot to talk about. This one
            will be well worth your time. Good luck!
          </h1>
        </div>
      </div>
      <Show when={data()}>
        <VocabSingle data={data()!} index={0} />
        <div class="flex flex-col items-center">
          <div class="max-w-[850px] px-4 pb-16 md:px-8">
            <div class="space-y-8 px-6 py-8 md:px-12">
              <p>
                <strong>As an Apology:</strong> In situations where a light
                apology is needed, &quot;Sumimasen&quot; is often used. For
                instance, if you accidentally bump into someone, you can say
                &quot;Sumimasen&quot; to apologize. <br />
                You may have also heard{" "}
                <span class="font-japanese text-xl">ごめんなさい</span>, which
                also means sorry.{" "}
                <span class="text-nowrap font-japanese text-xl">
                  すみません
                </span>{" "}
                is more like saying "<strong>excuse my rudeness</strong>" while{" "}
                <span class="font-japanese text-xl">ごめんなさい</span> is a
                more direct "<strong>I'm sorry</strong>." You'll naturally pick
                up which to use in different situations, but{" "}
                <span class="font-japanese text-xl">すみません</span> is always
                a safe bet.
              </p>
              <p>
                <strong>To Get Someone's Attention:</strong> It's also used to
                politely get someone's attention, like a waiter in a restaurant
                or when you're asking for directions. <br />
                Public Spaces: Saying &quot;Sumimasen&quot; before asking a
                question or making a request is common courtesy in Japan. {
                  "->"
                }{" "}
                <span class="font-japanese">あのう、すみません</span> "Umm,
                excuse me..."
              </p>
              <p>
                <strong>Expressing Gratitude:</strong> Interestingly,
                "Sumimasen" can also be a way to express gratitude, especially
                when someone has gone out of their way to help you. In this
                context, it conveys a sense of indebtedness or apology for the
                trouble, along with gratitude. <br />
                Example: If someone picks up something you dropped and hands it
                to you, saying &quot;Sumimasen&quot; can express both thanks and
                a light apology for the inconvenience caused to them.
              </p>
              <p>
                <strong>Indirectness:</strong> The Japanese language often
                favors indirectness and politeness. &quot;Sumimasen&quot; is a
                perfect example of this, as it softly conveys apology, request,
                or gratitude without being too direct or forceful. <br />
                <strong>Frequent Use:</strong> You'll hear &quot;Sumimasen&quot;
                very frequently in Japan due to the high value placed on
                politeness and humility in Japanese culture.
              </p>
            </div>
            <p>
              Think of <span class="font-japanese text-xl">すみません</span> as
              the Swiss Army knife of Japanese phrases - it's super versatile
              and always handy. It's the polite magic word that covers
              everything from &quot;My bad!&quot; to &quot;Excuse me!&quot; and
              &quot;Thanks a lot!&quot; all rolled into one. In Japan, where
              politeness is practically a sport, &quot;Sumimasen&quot; is your
              MVP phrase, getting you through all sorts of social jams with just
              the right touch of courtesy and charm.
            </p>
            <p>
              So, whenever you're in doubt, a friendly &quot;Sumimasen&quot; is
              often the perfect thing to say. It's the duct tape of Japanese
              conversation - fixes everything and keeps things smoothly running!
            </p>
          </div>
        </div>
        <VocabSingle data={data()!} index={1} />
        <VocabCardPairNoBG data={data()!} index={2} />
        <VocabPair data={data()!} index={4} />
        <VocabSingle data={data()!} index={6} />
        <VocabPair data={data()!} index={7} />
        <VocabCardPairNoBG data={data()!} index={9} />
        <VocabCardPairNoBG data={data()!} index={11} />
        <div class="mt-12 flex flex-col items-center">
          <div class="max-w-[850px] px-4 pb-32 md:px-8">
            <p>
              And there you have it, the essential phrases to not act like a
              rude person in Japanese! Use them wisely, use them often, and
              watch as you magically transform into a social samurai! 🎎
            </p>
            {/* Practice */}
            <div class="space-y-4 pb-32 text-xl leading-8 [&>*]:space-y-4">
              <h3 class="!pb-6 !pt-32 text-center text-5xl font-bold">
                Practice
              </h3>
              <p>
                You're leaving for school and say goodbye to your family. What
                do you say?
              </p>
              <SelectText
                answer="いってきます"
                a="いただきます"
                b="いってきます"
                c="ただいま"
                d="おやすみなさい"
              />
              <p>
                You just got back home from work. You open the door and say,
                '__________.'
              </p>
              <SelectText
                answer="ただいま"
                a="いってきます"
                b="いただきます"
                c="ただいま"
                d="すみません"
              />
              <p>
                It's late at night and you're about to go to bed. How do you
                wish your roommate a good night?
              </p>
              <SelectText
                answer="おやすみなさい"
                a="おやすみなさい"
                b="いってらっしゃい"
                c="ごちそうさまでした"
                d="よろしく おねがいします"
              />
              <p>
                You say 'ごちそうさまでした' after finishing a meal to express
                gratitude.
              </p>
              <SelectText answer="True" a="True" b="False" />
              <p>
                You meet someone for the first time and say 'はじめまして'. Is
                this correct?
              </p>
              <SelectText answer="Yes" a="Yes" b="No" />
              {/* <p>Match the following expressions with their meanings:</p>
        <p>
          a. いいえ <br />
          b. すみません <br />
          c. おかえりなさい <br />
          d. よろしく おねがいします <br />
          Meanings: [Polite refusal or disagreement, Greeting someone returning
          home, Expression of request for good relations, Polite way to get
          attention or apologize]
        </p> */}
              <p>Your friend is leaving for a trip. You say:</p>
              <SelectText
                answer="いってらっしゃい"
                a="ただいま"
                b="いってらっしゃい"
                c="いただきます"
                d="おかえりなさい"
              />
              <p>
                You accidentally step on someone's foot in a crowded train. You
                quickly say:
              </p>
              <SelectText
                answer="すみません"
                a="いいえ"
                b="すみません"
                c="おやすみなさい"
                d="いただきます"
              />
              <p>
                You're at a Japanese pet cafe, and a mischievous cat decides to
                jump onto your table. The cafe staff rushes over and asks if the
                cat is yours. You laugh and respond:
              </p>
              <SelectText
                answer="いいえ"
                a="おかえりなさい"
                b="すみません"
                c="いいえ"
                d="いただきます"
              />
              <p>
                Explanation: Using &quot;いいえ&quot; in this context is a
                light-hearted way to clarify the comical misunderstanding - no,
                this café-hopping creature isn't your pet! The other options
                would create amusingly absurd responses, like welcoming the cat
                home or thanking it as if it were a meal! 🐱🤣🚫
              </p>
            </div>
          </div>
        </div>
        <div class="absolute bottom-16 right-16">
          <A href="/learn/chapter-0/practice/greetings-common-expressions">
            <Button>Next Lesson {"->"}</Button>
          </A>
        </div>
      </Show>
    </>
  )
}
