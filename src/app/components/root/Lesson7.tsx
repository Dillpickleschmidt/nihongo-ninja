"use client"
import JapaneseFont from "@/components/text/JapaneseFont"
import Button from "@/components/Button"
import VocabCard from "@/components/spaced-repetition/VocabCard"
import SelectText from "@/components/text/MultipleChoiceText"
import { use, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Lesson7() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8, 0.9], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0.1, 0.2], [0.9, 1])
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 0.9],
    ["20", "0%", "0%", "10%"]
  )

  return (
    <motion.div
      style={{ opacity, x, scale }}
      ref={targetRef}
      className="relative w-[45%] border-4 border-black rounded-[60px] bg-[#222222] z-[-2] overflow-hidden"
    >
      <h1 className="mt-[-1900px] pt-28 pb-12 text-4xl font-medium leading-[3.25rem] text-center px-20">
        Welcome to your next lesson. We&apos;ve got a lot to talk about. This
        one will be well worth your time. Good luck!
      </h1>
      <div className="text-xl leading-8 text-black">
        <h2 className="py-0 text-[#F8F5E9] text-center px-16 font-bold text-2xl">
          The big word...
        </h2>
        <VocabCard
          title="1. すみません - Excuse Me"
          pronunciation="su-mi-ma-sen"
          hiragana="すみません"
        >
          &quot;Sumimasen&quot; is primarily used as a polite way to say
          &quot;excuse me&quot; or &quot;I&apos;m sorry.&quot; It&apos;s a way
          to acknowledge an inconvenience you might have caused someone or to
          politely get someone&apos;s attention. <br />
          <br />
          This expression is a versatile and essential part of the Japanese
          language, often used in various contexts. It also highlights some of
          the major differences between Japanese and Western cultures, so
          let&apos;s break down its uses and nuances:
        </VocabCard>
        <div className="py-0 text-[#F8F5E9] px-16">
          <div className="mx-12">
            <p className="py-4">
              <strong>As an Apology:</strong> In situations where a light
              apology is needed, &quot;Sumimasen&quot; is often used. For
              instance, if you accidentally bump into someone, you can say
              &quot;Sumimasen&quot; to apologize. <br />
              <strong>Politeness Level:</strong> It&apos;s more polite than
              &quot;ごめんなさい (Gomen nasai),&quot; which is more casual.
            </p>
            <p className="py-4">
              <strong>To Get Someone&apos;s Attention:</strong> It&apos;s also
              used to politely get someone&apos;s attention, like a waiter in a
              restaurant or when you&apos;re asking for directions. <br />
              Public Spaces: Saying &quot;Sumimasen&quot; before asking a
              question or making a request is common courtesy in Japan.
            </p>
            <p className="py-4">
              <strong>Expressing Gratitude:</strong> Interestingly, "Sumimasen"
              can also be a way to express gratitude, especially when someone
              has gone out of their way to help you. In this context, it conveys
              a sense of indebtedness or apology for the trouble, along with
              gratitude. <br />
              Example: If someone picks up something you dropped and hands it to
              you, saying &quot;Sumimasen&quot; can express both thanks and a
              light apology for the inconvenience caused to them.
            </p>
            <p className="py-4">
              <strong>Indirectness:</strong> The Japanese language often favors
              indirectness and politeness. &quot;Sumimasen&quot; is a perfect
              example of this, as it softly conveys apology, request, or
              gratitude without being too direct or forceful. <br />
              <strong>Frequent Use:</strong> You&apos;ll hear
              &quot;Sumimasen&quot; very frequently in Japan due to the high
              value placed on politeness and humility in Japanese culture.
            </p>
          </div>
          <p className="py-4">
            Think of すみません as the Swiss Army knife of Japanese phrases -
            it&apos;s super versatile and always handy. It&apos;s the polite
            magic word that covers everything from &quot;My bad!&quot; to
            &quot;Excuse me!&quot; and &quot;Thanks a lot!&quot; all rolled into
            one. In Japan, where politeness is practically a sport,
            &quot;Sumimasen&quot; is your MVP phrase, getting you through all
            sorts of social jams with just the right touch of courtesy and
            charm.
          </p>
          <p>
            So, whenever you&apos;re in doubt, a friendly &quot;Sumimasen&quot;
            is often the perfect thing to say. It&apos;s the duct tape of
            Japanese conversation - fixes everything and keeps things smoothly
            running!
          </p>
        </div>
        <h2 className="py-0 text-[#F8F5E9] text-center px-16 font-bold text-2xl">
          Now for the rest.
        </h2>
        <VocabCard
          title="2. いいえ - No"
          pronunciation="ii-e"
          hiragana="いいえ"
        >
          It&apos;s like saying &quot;No, thank you,&quot; or &quot;Don&apos;t
          mention it&quot; without making the other party feel obligated.
          It&apos;s the kind of &quot;No&quot; that comes with a bow and a
          smile. Picture yourself at a sushi bar: if the chef asks if you want
          more wasabi and you&apos;re already breathing fire, a gentle "いいえ"
          is your go-to. In Japanese, where the art of being polite is pretty
          much a national sport, &quot;いいえ&quot; is your essential tool for
          saying &quot;No&quot; without any of the harshness. It&apos;s the
          perfect blend of firmness and respect!
        </VocabCard>
        <VocabCard
          light={true}
          title="3. おやすみ・おやすみなさい - Goodnight"
          pronunciation="o-ya-su-mi / o-ya-su-mi-na-sa-i"
          hiragana="おやすみ・おやすみなさい"
        >
          The universal &quot;Goodnight&quot; but with a Japanese twist.
          &quot;Oyasumi&quot; is for your buddies, and &quot;Oyasuminasai&quot;
          is for when you want to impress your cat with your politeness.
        </VocabCard>
        <VocabCard
          title="4. いってきます - I'll go and come back"
          pronunciation="i-tte-ki-ma-su"
          hiragana="いってきます"
        >
          What you say when leaving the house, meaning &quot;I&apos;ll go and
          come back.&quot; It&apos;s like a boomerang promise to your family.
        </VocabCard>
        <VocabCard
          light={true}
          title="5. いってらっしゃい - Go and come back"
          pronunciation="i-tte-ra-ssha-i"
          hiragana="いってらっしゃい"
        >
          The response to &quot;いってきます,&quot; meaning "Go and come back."
          It&apos;s like saying, "You better come back, or the cat gets your
          dinner," but in a polite way.
        </VocabCard>
        <VocabCard
          title="6. ただいま - I'm home"
          pronunciation="ta-da-i-ma"
          hiragana="ただいま"
        >
          What you say when you return home, meaning &quot;I&apos;m home.&quot;
          It&apos;s like announcing your grand entrance to an audience of
          houseplants.
        </VocabCard>
        <VocabCard
          light={true}
          title="7. おかえり・おかえりなさい - Welcome home"
          pronunciation="o-ka-e-ri / o-ka-e-ri-na-sa-i"
          hiragana="おかえり・おかえりなさい"
        >
          The response to &quot;ただいま,&quot; meaning &quot;Welcome
          home.&quot; It&apos;s the warm fuzzy feeling of being back, in word
          form.
        </VocabCard>
        <VocabCard
          title="8. いただきます - Thanks for the food"
          pronunciation="i-ta-da-ki-ma-su"
          hiragana="いただきます"
        >
          Said before eating, it&apos;s like a mini-gratitude speech to the food
          gods. &quot;Thanks for this feast that I&apos;m about to
          demolish.&quot;
        </VocabCard>
        <VocabCard
          light={true}
          title="9. ごちそうさまでした - That was delicious"
          pronunciation="go-chi-so-u-sa-ma-de-shi-ta"
          hiragana="ごちそうさまでした"
        >
          Said after eating, it&apos;s the classy way to say &quot;That was
          delicious.&quot; It&apos;s like a mic drop at the end of a meal.
        </VocabCard>
        <VocabCard
          title="10. はじめまして - Nice to meet you"
          pronunciation="ha-ji-me-ma-shi-te"
          hiragana="はじめまして"
        >
          The cool, casual &quot;Nice to meet you.&quot; Use it when you meet
          someone new or your friend&apos;s pet tarantula.
        </VocabCard>
        <VocabCard
          light={true}
          title="11. よろしく おねがいします - Please be kind to me"
          pronunciation="yo-ro-shi-ku o-ne-ga-i-shi-ma-su"
          hiragana="よろしく おねがいします"
        >
          This one&apos;s tricky to translate, but it&apos;s a mix of
          &quot;Please be kind to me,&quot; &quot;Let&apos;s get along,&quot;
          and &quot;I&apos;m counting on you.&quot; It&apos;s the ultimate
          ice-breaker and friend-maker.
        </VocabCard>
        <p className="py-0 text-[#F8F5E9] px-16">
          And there you have it, the essential phrases to not act like a rude
          person in Japanese! Use them wisely, use them often, and watch as you
          magically transform into a social samurai! 🌟🗣️🎉
        </p>
      </div>
      {/* Practice */}
      <div className="px-28 text-2xl leading-8 space-y-7 [&>*]:space-y-4">
        <h3 className="!pt-32 !pb-6 text-6xl font-bold text-center">
          Practice
        </h3>

        <p>
          You&apos;re leaving for school and say goodbye to your family. What do
          you say?
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
          &apos;__________.&apos;
        </p>
        <SelectText
          answer="ただいま"
          a="いってきます"
          b="いただきます"
          c="ただいま"
          d="すみません"
        />
        <p>
          It&apos;s late at night and you&apos;re about to go to bed. How do you
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
          You say &apos;ごちそうさまでした&apos; after finishing a meal to
          express gratitude.
        </p>
        <SelectText answer="True" a="True" b="False" />
        <p>
          You meet someone for the first time and say &apos;はじめまして&apos;.
          Is this correct?
        </p>
        <SelectText answer="Yes" a="Yes" b="No" />
        <p>Match the following expressions with their meanings:</p>
        <p>
          a. いいえ <br />
          b. すみません <br />
          c. おかえりなさい <br />
          d. よろしく おねがいします <br />
          Meanings: [Polite refusal or disagreement, Greeting someone returning
          home, Expression of request for good relations, Polite way to get
          attention or apologize]
        </p>

        <p>Your friend is leaving for a trip. You say:</p>
        <SelectText
          answer="いってらっしゃい"
          a="ただいま"
          b="いってらっしゃい"
          c="いただきます"
          d="おかえりなさい"
        />
        <p>
          You accidentally step on someone&apos;s foot in a crowded train. You
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
          You&apos;re at a Japanese pet cafe, and a mischievous cat decides to
          jump onto your table. The cafe staff rushes over and asks if the cat
          is yours. You laugh and respond:
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
          light-hearted way to clarify the comical misunderstanding - no, this
          café-hopping feline isn&apos;t your sneaky pet! The other options
          would create amusingly absurd responses, like welcoming the cat home
          or thanking it as if it were a meal! 🐱🤣🚫
        </p>
      </div>
      <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
        <Button link="/learn/chapter-1/lesson-8-1" autoFocus={true}>
          Next Lesson {"->"}
        </Button>
      </div>
    </motion.div>
  )
}
