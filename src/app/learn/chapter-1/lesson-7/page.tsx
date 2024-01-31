import Dialog from "@/components/dialog"
import Button from "@/components/button"
import VocabCard from "@/components/VocabCard"
import SelectText from "@/components/SelectText"

export default function Lesson7() {
  return (
    <Dialog variant={"reading"} className="border-4 border-black bg-[#191919]">
      <div className="pb-16 text-[#F8F5E9]">
        <h1 className="pt-28 pb-12 text-4xl font-medium leading-[3.25rem] text-center px-20">
          Welcome to your next lesson. We've got a lot to talk about. This one
          will be well worth your time. Good luck!
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
            "Sumimasen" is primarily used as a polite way to say "excuse me" or
            "I'm sorry." It's a way to acknowledge an inconvenience you might
            have caused someone or to politely get someone's attention. <br />
            <br />
            This expression is a versatile and essential part of the Japanese
            language, often used in various contexts. It also highlights some of
            the major differences between Japanese and Western cultures, so
            let's break down its uses and nuances:
          </VocabCard>
          <div className="py-0 text-[#F8F5E9] px-16">
            <div className="mx-12">
              <p className="py-4">
                <strong>As an Apology:</strong> In situations where a light
                apology is needed, "Sumimasen" is often used. For instance, if
                you accidentally bump into someone, you can say "Sumimasen" to
                apologize. <br />
                <strong>Politeness Level:</strong> It's more polite than
                "ごめんなさい (Gomen nasai)," which is more casual.
              </p>
              <p className="py-4">
                <strong>To Get Someone's Attention:</strong> It's also used to
                politely get someone's attention, like a waiter in a restaurant
                or when you're asking for directions. <br />
                Public Spaces: Saying "Sumimasen" before asking a question or
                making a request is common courtesy in Japan.
              </p>
              <p className="py-4">
                <strong>Expressing Gratitude:</strong> Interestingly,
                "Sumimasen" can also be a way to express gratitude, especially
                when someone has gone out of their way to help you. In this
                context, it conveys a sense of indebtedness or apology for the
                trouble, along with gratitude. <br />
                Example: If someone picks up something you dropped and hands it
                to you, saying "Sumimasen" can express both thanks and a light
                apology for the inconvenience caused to them.
              </p>
              <p className="py-4">
                <strong>Indirectness:</strong> The Japanese language often
                favors indirectness and politeness. "Sumimasen" is a perfect
                example of this, as it softly conveys apology, request, or
                gratitude without being too direct or forceful. <br />
                <strong>Frequent Use:</strong> You'll hear "Sumimasen" very
                frequently in Japan due to the high value placed on politeness
                and humility in Japanese culture.
              </p>
            </div>
            <p className="py-4">
              Think of すみません as the Swiss Army knife of Japanese phrases -
              it's super versatile and always handy. It's the polite magic word
              that covers everything from "My bad!" to "Excuse me!" and "Thanks
              a lot!" all rolled into one. In Japan, where politeness is
              practically a sport, "Sumimasen" is your MVP phrase, getting you
              through all sorts of social jams with just the right touch of
              courtesy and charm.
            </p>
            <p>
              So, whenever you're in doubt, a friendly "Sumimasen" is often the
              perfect thing to say. It's the duct tape of Japanese conversation
              - fixes everything and keeps things smoothly running!
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
            It's like saying "No, thank you," or “Don't mention it” without
            making the other party feel obligated. It's the kind of "No" that
            comes with a bow and a smile. Picture yourself at a sushi bar: if
            the chef asks if you want more wasabi and you're already breathing
            fire, a gentle "いいえ" is your go-to. In Japanese, where the art of
            being polite is pretty much a national sport, "いいえ" is your
            essential tool for saying "No" without any of the harshness. It's
            the perfect blend of firmness and respect!
          </VocabCard>
          <VocabCard
            light={true}
            title="3. おやすみ・おやすみなさい - Goodnight"
            pronunciation="o-ya-su-mi / o-ya-su-mi-na-sa-i"
            hiragana="おやすみ・おやすみなさい"
          >
            The universal "Goodnight" but with a Japanese twist. "Oyasumi" is
            for your buddies, and "Oyasuminasai" is for when you want to impress
            your cat with your politeness.
          </VocabCard>
          <VocabCard
            title="4. いってきます - I'll go and come back"
            pronunciation="i-tte-ki-ma-su"
            hiragana="いってきます"
          >
            What you say when leaving the house, meaning "I'll go and come
            back." It's like a boomerang promise to your family.
          </VocabCard>
          <VocabCard
            light={true}
            title="5. いってらっしゃい - Go and come back"
            pronunciation="i-tte-ra-ssha-i"
            hiragana="いってらっしゃい"
          >
            The response to "いってきます," meaning "Go and come back." It's
            like saying, "You better come back, or the cat gets your dinner,"
            but in a polite way.
          </VocabCard>
          <VocabCard
            title="6. ただいま - I'm home"
            pronunciation="ta-da-i-ma"
            hiragana="ただいま"
          >
            What you say when you return home, meaning "I'm home." It's like
            announcing your grand entrance to an audience of houseplants.
          </VocabCard>
          <VocabCard
            light={true}
            title="7. おかえり・おかえりなさい - Welcome home"
            pronunciation="o-ka-e-ri / o-ka-e-ri-na-sa-i"
            hiragana="おかえり・おかえりなさい"
          >
            The response to "ただいま," meaning "Welcome home." It's the warm
            fuzzy feeling of being back, in word form.
          </VocabCard>
          <VocabCard
            title="8. いただきます - Thanks for the food"
            pronunciation="i-ta-da-ki-ma-su"
            hiragana="いただきます"
          >
            Said before eating, it's like a mini-gratitude speech to the food
            gods. "Thanks for this feast that I'm about to demolish."
          </VocabCard>
          <VocabCard
            light={true}
            title="9. ごちそうさまでした - That was delicious"
            pronunciation="go-chi-so-u-sa-ma-de-shi-ta"
            hiragana="ごちそうさまでした"
          >
            Said after eating, it's the classy way to say "That was delicious."
            It's like a mic drop at the end of a meal.
          </VocabCard>
          <VocabCard
            title="10. はじめまして - Nice to meet you"
            pronunciation="ha-ji-me-ma-shi-te"
            hiragana="はじめまして"
          >
            The cool, casual "Nice to meet you." Use it when you meet someone
            new or your friend's pet tarantula.
          </VocabCard>
          <VocabCard
            light={true}
            title="11. よろしく おねがいします - Please be kind to me"
            pronunciation="yo-ro-shi-ku o-ne-ga-i-shi-ma-su"
            hiragana="よろしく おねがいします"
          >
            This one's tricky to translate, but it's a mix of "Please be kind to
            me," "Let's get along," and "I'm counting on you." It's the ultimate
            ice-breaker and friend-maker.
          </VocabCard>
          <p className="py-0 text-[#F8F5E9] px-16">
            And there you have it, the essential phrases to not act like a rude
            person in Japanese! Use them wisely, use them often, and watch as
            you magically transform into a social samurai! 🌟🗣️🎉
          </p>
        </div>
        {/* Practice */}
        <div className="px-28 text-2xl leading-8 space-y-7 [&>*]:space-y-4">
          <h3 className="!pt-32 !pb-6 text-6xl font-bold text-center">
            Practice
          </h3>

          <p>
            You're leaving for school and say goodbye to your family. What do
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
            It's late at night and you're about to go to bed. How do you wish
            your roommate a good night?
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
            You meet someone for the first time and say 'はじめまして'. Is this
            correct?
          </p>
          <SelectText answer="Yes" a="Yes" b="No" />
          <p>Match the following expressions with their meanings:</p>
          <p>
            a. いいえ <br />
            b. すみません <br />
            c. おかえりなさい <br />
            d. よろしく おねがいします <br />
            Meanings: [Polite refusal or disagreement, Greeting someone
            returning home, Expression of request for good relations, Polite way
            to get attention or apologize]
          </p>

          <p>"Your friend is leaving for a trip. You say:"</p>
          <SelectText
            answer="いってらっしゃい"
            a="ただいま"
            b="いってらっしゃい"
            c="いただきます"
            d="おかえりなさい"
          />
          <p>
            "You accidentally step on someone's foot in a crowded train. You
            quickly say:"
          </p>
          <SelectText
            answer="すみません"
            a="いいえ"
            b="すみません"
            c="おやすみなさい"
            d="いただきます"
          />
          <p>
            You're at a Japanese pet cafe, and a mischievous cat decides to jump
            onto your table. The cafe staff rushes over and asks if the cat is
            yours. You laugh and respond:
          </p>
          <SelectText
            answer="いいえ"
            a="おかえりなさい"
            b="すみません"
            c="いいえ"
            d="いただきます"
          />
          <p>
            Explanation: Using "いいえ" in this context is a light-hearted way
            to clarify the comical misunderstanding - no, this café-hopping
            feline isn't your sneaky pet! The other options would create
            amusingly absurd responses, like welcoming the cat home or thanking
            it as if it were a meal! 🐱🤣🚫
          </p>
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-1/lesson-8-1" autoFocus={true}>
            Next Lesson {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
