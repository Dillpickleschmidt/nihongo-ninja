import SelectText from "@/components/text/MultipleChoiceText"
import Furigana from "@/components/text/Furigana"
import VocabCardSingleBlank from "@/features/vocab-card/single/VocabCardSingleBlank"
import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"

export default function page() {
  return (
    <>
      {/* <h1 class="px-20 pb-12 pt-24 text-center text-3xl font-medium leading-[2.75rem]">
        Exhausted from dancing with digits all day? Are you feeling like a ninja
        calculator from Japan, secretly number-crunching in the shadows? Fear
        not! We've got the perfect antidote—a single, magical word that's your
        golden ticket to broadcasting your vast knowledge to the world.
      </h1> */}
      <h1 class="px-28 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:pt-24">
        Everyday Expressions
      </h1>
      <div class="mt-12 flex flex-col items-center">
        <div class="max-w-[850px] px-4 pb-32 md:px-8">
          <VocabCardSingleBlank
            index={0}
            kana={"（～を）おねがいします"}
            english="X please. / I'd like to request X."
          >
            <li>
              <span class="font-bold">Usage: </span>Used when politely
              requesting something or asking for a favor.
            </li>
            <li>
              <span class="font-bold">Context: </span>This phrase is commonly
              heard in restaurants, shops, and formal situations. It conveys a
              high level of politeness and respect, making it suitable for
              professional and respectful interactions.
            </li>
            <li>
              <span class="font-bold">Example Usage: </span>
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-sm">みず</span>}>
                  水
                </Furigana>
                をおねがいします。
              </span>{" "}
              {"->"} Water, please.
            </li>
            <li>
              Note that in this context, we use the{" "}
              <span class="font-japanese">～を</span>(o) particle to indicate
              the object we're referring to (more on this in a later lesson).
            </li>
            <li>
              ～ is the Japanese equavalent of "X" or "_", meaning
              "fill-in-the-blank." Japanese speakers might read it aloud as{" "}
              <span class="font-japanese">なになに</span>.
            </li>
          </VocabCardSingleBlank>
          <p class="my-6 px-16">
            In Japan, showing politeness and respect in social interactions is
            crucial. The phrase{" "}
            <span class="font-japanese">（～を）おねがいします</span> is often
            used when you want to make a request politely. For instance, in a
            restaurant, you might use it to ask for water, or at a store, you
            could use it when requesting assistance. It emphasizes your
            politeness and consideration for the other person's effort. This
            phrase is versatile and can be used in both formal and informal
            settings to show a high level of respect.
          </p>

          <VocabCardSingleBlank
            index={1}
            kana={"（～を）ください"}
            english="Please give me X."
            light
          >
            <li>
              <span class="font-bold">Usage: </span>Used when asking for
              something directly.
            </li>
            <li>
              <span class="font-bold">Context: </span>This phrase is slightly
              less formal than{" "}
              <span class="font-japanese text-xl">（～を）おねがいします</span>{" "}
              but still polite and widely used in shops, restaurants, and casual
              situations.
            </li>
            <li>
              <span class="font-bold">Example Usage: </span>
              <span class="font-japanese text-xl">
                <Furigana furigana={<span class="text-sm">こーひー</span>}>
                  コーヒー
                </Furigana>
                をください。
              </span>{" "}
              {"->"} Please give me a coffee.
            </li>
            <li>
              Note that the long dash "ー" extends the vowel of the previous
              character, making it a long vowel. It's typically used with
              katakana words.
            </li>
          </VocabCardSingleBlank>
          <p class="my-6 px-16">
            The phrase{" "}
            <span class="font-japanese text-xl">（～を）ください</span> is
            another way to ask for something. It is often used when ordering
            food or drinks in a restaurant or requesting an item in a shop.
            While still polite, it is more direct and less formal than{" "}
            <span class="font-japanese text-xl">（～を）おねがいします</span>,
            but still very suitable for everyday interactions. The key
            difference between{" "}
            <span class="font-japanese text-xl">ください</span> and{" "}
            <span class="font-japanese text-xl">おねがいします</span> lies in
            the level of formality:{" "}
            <span class="font-japanese text-xl">おねがいします</span> can be
            roughly translated to "if you please", while{" "}
            <span class="font-japanese text-xl">ください</span> is more of a
            direct "please."
          </p>

          <VocabCardSingleBlank
            index={2}
            kana={"じゃあ"}
            english="Well then / So"
          >
            <li>
              <span class="font-bold">Usage: </span>Used to transition between
              topics or to signal a change in the conversation.
            </li>
            <li>
              <span class="font-bold">Context: </span>Informal, often used among
              friends or in casual settings.
            </li>
            <li>
              <span class="font-bold">Example Usage: </span>
              <span class="font-japanese text-xl">
                じゃあ、
                <Furigana furigana={<span class="text-sm">い</span>}>
                  行
                </Furigana>
                きましょう。
              </span>{" "}
              {"->"} Well then, let's go.
            </li>
          </VocabCardSingleBlank>
          <p class="my-6 px-16">
            In conversational Japanese,{" "}
            <span class="font-japanese">じゃあ</span> is a versatile and
            commonly used phrase to indicate a transition. It's often used when
            deciding on the next action or wrapping up a conversation. For
            example, after discussing plans with friends, you might say,
            "じゃあ、行きましょう" (Well then, let's go). It helps to move the
            conversation along smoothly and naturally, making it an essential
            phrase in everyday interactions.
          </p>

          <VocabCardSingleBlank
            index={3}
            kana={"どうぞ"}
            english="Please / Go ahead"
            light
          >
            <li>
              <span class="font-bold">Usage: </span>Used when offering something
              to someone or inviting them to do something.
            </li>
            <li>
              <span class="font-bold">Context: </span>Can be used in both formal
              and informal situations.
            </li>
            <li>
              <span class="font-bold">Example Usage: </span>
              <span class="font-japanese text-xl">
                どうぞ、お
                <Furigana furigana={<span class="text-sm">はい</span>}>
                  入
                </Furigana>
                りください。
              </span>{" "}
              {"->"} Please, come in.
            </li>
          </VocabCardSingleBlank>
          <p class="my-6 px-16">
            <span class="font-japanese">どうぞ</span> is a polite phrase used to
            offer something or invite someone to do something. It's often heard
            when entering someone's home or being offered a seat. For example,
            <span class="font-japanese">"どうぞ、お入りください"</span> (Please,
            come in) is a common phrase used to welcome guests. It conveys a
            sense of hospitality and consideration, making it an essential
            phrase in Japanese culture. Using{" "}
            <span class="font-japanese">どうぞ</span> shows that you are
            considerate and respectful, whether in a formal or informal setting.
          </p>

          <VocabCardSingleBlank index={4} kana={"どうも"} english="Thanks / Hi">
            <li>
              <span class="font-bold">Usage: </span>A versatile word that can
              mean "thanks," "hello," or "excuse me," depending on the context
              and intonation.
            </li>
            <li>
              <span class="font-bold">Context: </span>Informal, often used among
              friends or in casual encounters.
            </li>
            <li>
              <span class="font-bold">Example Usage: </span>
              <span class="font-japanese text-xl">
                どうも、ありがとう。
              </span>{" "}
              {"->"}
              Thanks a lot.
            </li>
          </VocabCardSingleBlank>
          <p class="mt-6 px-16">
            <span class="font-japanese">どうも</span> is a multi-purpose phrase
            that can be used in various contexts. It can mean "thanks" by
            itself, or it might be followed by{" "}
            <span class="font-japanese">ありがとう</span> (arigatou), as in{" "}
            <span class="font-japanese">"どうも、ありがとう"</span> (Thanks a
            lot). It can also be used as a casual greeting, similar to "hi" or
            "hello." The versatility of{" "}
            <span class="font-japanese">どうも</span> makes it a convenient
            phrase for many everyday interactions, though it's generally used in
            more casual settings. Using{" "}
            <span class="font-japanese">どうも</span> shows friendliness and
            ease, making it an essential part of informal Japanese
            communication.
          </p>
          <div class="space-y-4 text-xl leading-8 [&>*]:space-y-4">
            <h3 class="!pb-6 pt-16 text-center text-5xl font-bold">Practice</h3>
            <p class="text-center text-2xl font-bold">
              You are in a restaurant and want to order water.
            </p>
            <p>
              <span class="font-bold">Waiter: </span>
              <span class="font-japanese text-2xl">
                ご<Furigana furigana="ちゅうもん">注文</Furigana>は？
              </span>{" "}
              (What would you like to order?)
            </p>
            <p class="!mt-0">
              <span class="font-bold">You:</span>
            </p>
            <SelectText
              answer="（～を）ください"
              a="（～を）おねがいします"
              b="じゃあ"
              c="どうも"
              d="（～を）ください"
            />

            <p class="pt-12 text-center text-2xl font-bold">
              You are visiting a friend's house and they invite you in.
            </p>
            <p>
              <span class="font-bold">Friend: </span>
              <span class="font-japanese text-2xl">
                どうぞ、お<Furigana furigana="はい">入り</Furigana>ください。
              </span>{" "}
              (Please, come in.)
            </p>
            <p class="!mt-0">
              <span class="font-bold">You:</span>
            </p>
            <SelectText
              answer="どうも"
              a="じゃあ"
              b="どうぞ"
              c="どうも"
              d="（～を）おねがいします"
            />

            <p class="pt-12 text-center text-2xl font-bold">
              You are transitioning to a new topic while talking with a friend.
            </p>
            <p>
              <span class="font-bold">Friend: </span>The weather is nice today,
              isn't it?
            </p>
            <p class="!mt-0">
              <span class="font-bold">You: </span>
              <u>Well then</u>,{" "}
              <span class="text-base">(how was the movie yesterday?)</span>
            </p>
            <SelectText
              answer="じゃあ"
              a="どうも"
              b="じゃあ"
              c="おねがいします"
              d="どうぞ"
            />

            <p class="pt-12 text-center text-2xl font-bold">
              You are at a store and want to buy a pen.
            </p>
            <p>
              <span class="font-bold">Shopkeeper: </span>
              <span class="font-japanese text-2xl">
                何をお<Furigana furigana="さが">探</Furigana>
                しですか？
              </span>{" "}
              (What are you looking for?)
            </p>
            <p class="!mt-0">
              <span class="font-bold">You: </span>
            </p>
            <SelectText
              answer="（～を）ください"
              a="どうも"
              b="おねがいします"
              c="じゃあ"
              d="（～を）ください"
            />

            <p class="pt-12 text-center text-2xl font-bold">
              You receive a gift from a friend.
            </p>
            <p>
              <span class="font-bold">Friend: </span>
              This is a gift for you.
            </p>
            <p class="!mt-0">
              <span class="font-bold">You:</span>
            </p>
            <SelectText
              answer="どうも"
              a="どうも"
              b="じゃあ"
              c="おねがいします"
              d="どうぞ"
            />

            <p class="pt-12 text-center text-2xl font-bold">
              You are at a restaurant and want to ask for the menu.
            </p>
            <p>
              <span class="font-bold">You:</span>
            </p>
            <SelectText
              answer="（～を）おねがいします"
              a="じゃあ"
              b="（～を）おねがいします"
              c="どうも"
              d="（～を）ください"
            />
          </div>
        </div>
      </div>

      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-1/self-introductions">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
