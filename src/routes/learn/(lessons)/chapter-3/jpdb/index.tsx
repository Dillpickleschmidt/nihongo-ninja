import YouTubeVideo from "@/features/youtube/YouTube"
import APIKeyForm from "./components/APIKeyForm"
import { BookPlus } from "lucide-solid"
import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"

export default function page() {
  return (
    <>
      <div class="flex w-full justify-center pb-32">
        <div class="max-w-[750px] space-y-6 px-6 lg:px-0">
          <h1 class="mb-3 pt-20 text-center text-4xl leading-[3.25rem]">
            <span class="text-[2.75rem] font-semibold">Welcome</span> to your{" "}
            <span class="text-[2.75rem] font-bold italic">most important</span>{" "}
            lesson—
            <span class="text-5xl font-black">
              <a href="https://jpdb.io/" target="_blank">
                jpdb.io
              </a>
            </span>
          </h1>
          <p class="!my-12">
            At <span class="font-bold">Nihongo Ninja</span>, we are passionate
            about helping you achieve mastery in Japanese. While our practice
            modules are excellent for building short-term memory, we highly
            reccomend <span class="font-bold">jpdb.io</span> for anything
            long-term. We are not sponsored by or even affiliated with or{" "}
            <span class="font-bold">jpdb.io</span>, but we highly value the
            effectiveness of their learning system, and here's why we reccomend
            you use it alongside this course.
          </p>
          <h3 class="text-center text-xl font-semibold">
            <a
              href="https://jpdb.io/"
              target="_blank"
              class="text-sky-400 underline"
            >
              Link to jpdb.io
            </a>
          </h3>
          <h2 class="text-4xl font-bold">Why We Recommend jpdb.io</h2>
          <h3 class="text-xl font-semibold">
            Integrated Vocabulary and Kanji Learning
          </h3>
          <p>
            <strong>jpdb.io</strong> adopts a vocabulary-first approach. As you
            learn new words, jpdb.io automatically breaks each word down into
            parts, ensuring you know all the kanji necessary to read those
            words. This approach ensures that you're not just memorizing
            vocabulary but also understanding the kanji that compose them,
            creating a comprehensive learning experience.
          </p>
          <p>
            We share many of the same values about learning Kanji with Andy in
            the video below, and <strong>jpdb.io</strong> manages to address
            every issue presented in this video all in 1 place.
          </p>
          <div>
            <YouTubeVideo
              videoId="RKWrWRFyfYo"
              title="Japanese Kanji 101 (and How I'd Learn Kanji Starting Over)"
              credit="ToKini Andy"
            />
          </div>
          <p class="text-sm italic text-muted-foreground">
            *Note that for Nihongo Ninja, we've designed the course to
            compliment college Japanese courses where vocabulary is taught in
            the order of the Genki textbooks.
          </p>
          <h2 class="text-4xl font-bold">
            The Bottom-Up Approach to Kanji Learning
          </h2>
          <h3 class="text-xl font-semibold">
            Dynamic and Relevant Learning Order
          </h3>
          <p>
            Unlike traditional methods that follow a rigid order,{" "}
            <strong>jpdb.io</strong> teaches kanji dynamically based on the
            vocabulary words <u>you tell it</u> you want to learn. This method
            ensures that you're always learning interesting and relevant
            information, making your study sessions more efficient and engaging.
          </p>
          <h3 class="text-xl font-semibold">Example of Bottom-Up Learning:</h3>
          <p>
            For example, let's say you want to learn the word{" "}
            <span class="font-japanese">子豚</span> (piglet). You will be
            automatically taught the following characters in roughly this order:
          </p>
          <div class="flex justify-center">
            <ul class="space-y-2">
              <li>
                <span class="font-japanese text-xl">一</span> (one)
              </li>
              <li>
                <span class="font-japanese text-xl">日</span> (sun)
              </li>
              <li>
                <span class="font-japanese text-xl">丿</span> (slash left)
              </li>
              <li>
                <span class="font-japanese text-xl">亅</span> (hook)
              </li>
              <li>
                <span class="font-japanese text-xl">月</span> (moon) {"->"}{" "}
                <span class="font-japanese">丿 + 亅 + 日</span>
              </li>
              <li>
                <span class="font-japanese text-xl">勹</span> (plastic wrapper){" "}
                {"->"} <span class="font-japanese">丿 + 亅 + 一</span>
              </li>
              <li>
                <span class="font-japanese text-xl">勿</span> (must not) {"->"}{" "}
                <span class="font-japanese">勹 + 丿 + 丿</span>
              </li>
              <li>
                <span class="font-japanese text-xl">⺊</span> (divining rod)
              </li>
              <li>
                <span class="font-japanese text-xl">豕</span> (wild pig) {"->"}{" "}
                <span class="font-japanese">勿 + 一 + ⺊</span>
              </li>
              <li>
                <span class="font-japanese text-xl">豚</span> (pig) {"->"}{" "}
                <span class="font-japanese">月 + 豕</span>
              </li>
              <li>
                <span class="font-japanese text-xl">乛</span> (Mario cap)
              </li>
              <li>
                <span class="font-japanese text-xl">子</span> (child) {"->"}{" "}
                <span class="font-japanese">乛 + 亅 + 一</span>
              </li>
              <li>
                <span class="font-japanese text-xl">子豚</span> (piglet) {"->"}{" "}
                <span class="font-japanese">子 + 豚</span>
              </li>
            </ul>
          </div>
          <p>
            <span class="font-bold">jpdb.io</span>{" "}
            <span class="font-light italic">
              "automatically decompos[es] each word into kanji, and those kanji
              into components, and [will] teach everything to you bottom-up, so
              that the next thing you're learning always builds upon what you've
              already learned."
            </span>
          </p>
          <p class="!mt-3 text-sm italic text-muted-foreground">—jpdb FAQ</p>
          <p class="font-bold">
            And all these parts can be reused for any the future vocabulary you
            encounter!
          </p>
          <h2 class="!mt-12 text-4xl font-bold">Mnemonics</h2>
          <h3 class="text-xl font-semibold">
            Furthermore, <strong>jpdb</strong> includes mnemonics for several
            kanji at various stages.
          </h3>
          <div class="mx-6 lg:mx-9">
            <div class="flex justify-center text-orange-400">
              <h4 class="flex items-center text-2xl">
                <p class="font-japanese text-4xl">勿</p>
                <p class="ml-2">(must not)</p>
              </h4>
            </div>
            <p class="mt-3 font-light italic">
              "A pictograph of what looks like some tasty grilled pork ribs...{" "}
              <u>must not</u>... eat... the ribs..."
            </p>

            <div class="flex justify-center text-orange-400">
              <h4 class="flex items-center text-2xl">
                <p class="font-japanese text-4xl">豕</p>
                <p class="ml-2">(wild pig)</p>
              </h4>
            </div>
            <p class="mt-3 font-light italic">
              <span class="font-normal underline">One</span>{" "}
              <span class="font-normal underline">must not</span> beat a{" "}
              <span class="font-bold">wild pig</span> with a{" "}
              <span class="font-normal underline">divining rod</span>. Not only
              you'll probably break your divining rod, but you'll piss off the
              pig and it'll eat all of your crops in revenge.
            </p>
          </div>
          <h2 class="!mt-12 text-4xl font-bold">Better Keywords</h2>
          <p>
            <strong>jpdb.io</strong> builds upon James Heisig's acclaimed{" "}
            <em>Remembering The Kanji</em>, but offers several improvements in
            areas where it was criticised to reduce mental gymnastics and make
            learning more effective. See the{" "}
            <a
              target="_blank"
              href="https://jpdb.io/faq#KanjiKeywords"
              class="font-bold text-sky-400 hover:scale-125"
            >
              jpdb FAQ
            </a>{" "}
            to learn more.
          </p>
          <h2 class="!mt-12 text-4xl font-bold">Sentences</h2>
          <p>
            After you've conquored the prerequisite kanji for a new word, you'll
            be taught the pronunciation of the word placed within the context of{" "}
            <span class="font-bold italic">real</span> Japanese sentences{" "}
            <span class="text-base">(with audio)</span>!
          </p>
          <ul class="list-disc space-y-44">
            <li>
              <strong>Automatic i+1 sentence cards: </strong>
              <span class="text-base font-thin italic">
                "As you learn new vocabulary we will automatically turn all of
                your vocabulary cards into i+1 sentence cards. That is, along
                with the word you want to learn we will also automatically show
                you an example sentence where you already know all of the words,
                except the word you're learning. This allows you to learn new
                vocabulary in context instead of only memorizing the dictionary
                definitions." —jpdb
              </span>
            </li>
          </ul>
          <p>
            To build on that, you'll be working hands-on with every vocabulary
            word you learn in Nihongo Ninja.
          </p>
          <h2 class="!mt-12 text-4xl font-bold">Additional Features</h2>
          <ul class="list-disc space-y-4">
            <li>
              <strong>Thousands of Prebuilt Decks: </strong>
              <span class="text-base font-thin italic">
                "Do you have a favorite anime you'd like to be able to watch
                without subtitles? We have 21381 prebuilt decks with vocabulary
                from 1396 different anime waiting for you. Or perhaps you prefer
                visual novels? Or light novels? Or web novels? We have
                vocabulary decks for all kinds of Japanese media." —jpdb
              </span>
            </li>
            <li>
              <strong>Helps you find your next show to watch: </strong>
              <span class="text-base font-thin italic">
                "Since we track which words you've learned we can also suggest
                which piece of media you should consume next. Want to find an
                anime or a novel where you're guaranteed to know 90% of the
                vocabulary? We can find it for you." —jpdb
              </span>
            </li>
          </ul>
          <p>
            This is{" "}
            <span class="font-bold italic tracking-widest">insanely</span>{" "}
            powerful because you will be able to see how much vocabulary you
            know of your favorite anime, novel, etc.{" "}
            <span class="text-base font-semibold italic">
              based on the vocabulary you've been practicing
            </span>
            . <span class="font-bold italic tracking-widest">And</span>, you can
            target <strong>exactly</strong> the vocabulary of your favorite
            media using a prebuilt deck to understand it natively!
          </p>
          <ul class="list-disc space-y-4">
            <li>
              <strong>Imports your existing Anki database: </strong>
              <span class="text-base font-thin italic">
                "Already an Anki user? We can partially import your Anki
                database so that you don't have to start your learning journey
                from zero." —jpdb
              </span>
            </li>
            <li>
              <strong>Large Dictionary: </strong>jpdb.io is also a comprehensive
              dictionary where you can search any word and see each kanji that
              makes up the word, along with the meaning of each kanji. This is a
              great way to learn new words and kanji you encounter in the wild.
            </li>
          </ul>

          <h2 class="!mt-12 text-4xl font-bold">In summary</h2>
          <ol class="!mt-9 list-decimal space-y-4">
            <li>
              <strong>Nihongo Ninja + jpdb</strong> follows the Genki textbook
              vocabulary order taught in Japanese college courses taught in the
              United States.
            </li>
            <li>
              <strong>jpdb</strong> first teaches the English meanings of each
              Kanji for each vocabulary word you learn, where every word is
              broken down into reusable sub-parts.
            </li>
            <li>
              <strong>jpdb</strong> uses the best spaced-repetition (SRS)
              flashcard system out there{" "}
              <span class="text-base text-muted-foreground">
                (the scheduling felt a lot better than Anki and even WaniKani,
                which we had used before)
              </span>
              , with excellent analytics to easily track your progress.
            </li>
            <li>
              <p>
                After the <u>meaning</u> and <u>writing</u> of each word is
                learned, <strong>jpdb</strong> presents the{" "}
                <u>vocabulary word</u> you placed in the deck within the context
                of one or more <u>Japanese sentences</u>{" "}
                <span class="text-base">(with audio)</span>. You will{" "}
                <span class="font-bold italic underline">never</span> have to
                think about the kanji "readings" (kun'yomi, on'yomi) of the
                words you learn.
              </p>
              <p class="text-base text-muted-foreground">
                Additionally, you will get even more practice with the
                vocabulary words via Nihongo Ninja lessons, games, and practice
                materials.
              </p>
            </li>
          </ol>
          <h3 class="!mt-12 text-2xl font-bold">What Tools to Use When?</h3>
          <ul class="list-disc space-y-4">
            <li>
              Use <strong>Nihongo Ninja</strong> to learn tough grammar subjects
              and start making varied sentences in weeks or months instead of
              years{" "}
              <span class="text-base italic text-muted-foreground">
                (that's the goal at least! (•̀ᴗ•́)و ̑̑)
              </span>
              .
            </li>
            <li>
              Use <strong>Nihongo Ninja</strong> to quickly pick up new
              vocabulary and reinforce your short-term memory so you can start
              utilizing that knowledge immediately.
            </li>
            <li>
              Use <strong>jpdb.io</strong> alongside{" "}
              <strong>Nihongo Ninja</strong> lessons to retain vocabulary
              long-term.
            </li>
            <li>
              Use <strong>jpdb.io</strong> in the future when you want to start
              memorizing native material beyond Nihongo Ninja.
            </li>
            <li>
              <strong>Nihongo Ninja's</strong> extensive grammar lessons prep
              you to fully understand Japanese sentences{" "}
              <span class="text-base">
                (like those found in <strong>jpdb</strong> and in{" "}
                <strong>native material</strong>)
              </span>
              , while our practice modules are designed to complement your
              learning on <strong>jpdb.io</strong>{" "}
              <span class="text-base">
                (and <strong>classroom courses</strong>)
              </span>
              .
            </li>
          </ul>
          <h3 class="text-bold text-2xl">
            This powerful combination ensures a fun yet balanced approach to
            mastering Japanese.
          </h3>

          <h3 class="!mt-12 text-2xl font-bold">How to get started?</h3>
          <ul class="list-disc space-y-4">
            <li>
              <strong>Nihongo Ninja</strong> automatically adds vocabulary to
              your jpdb decks when you encounter them, once you link your
              account.
            </li>
          </ul>
          <ol class="ml-6 list-decimal space-y-4 font-medium">
            <li>
              Go to{" "}
              <a href="https://jpdb.io/" target="_blank">
                jpdb.io
              </a>{" "}
              and create an account.
            </li>
            <li>
              Click the{" "}
              <a href="https://jpdb.io/" target="_blank">
                Settings
              </a>{" "}
              button in the top right (next to Logout).
            </li>
            <li>
              Scroll to the very bottom and copy your API key. It should look
              something along the lines of this:{" "}
              <span class="text-base font-light text-muted-foreground">
                d72a3c594fe2a5b1074b6d8f97de083c (this one's a fake key).
              </span>{" "}
            </li>
            <li>
              Paste it here and submit.
              <div class="mt-3 flex flex-col items-center">
                <APIKeyForm />
              </div>
            </li>
            <li>
              When you reach the bottom of any page marked by a{" "}
              <BookPlus
                size={22}
                class="inline-flex text-sky-400 saturate-[75%]"
              />{" "}
              <span class="text-base text-muted-foreground">
                (excluding Chapter 0)
              </span>
              , <u>you'll see a popup</u> prompting you to add the vocabulary to
              your <strong>jpdb deck</strong>. Click <strong>'Add'</strong> and
              the cards will automatically be added to a deck named{" "}
              <span class="text-xl font-bold">Nihongo Ninja: Chapter [X].</span>
            </li>
            <li>
              We understand you may end up going at a faster pace here on
              Nihongo Ninja than on jpdb.io, which is{" "}
              <span class="text-xl font-bold">okay</span>. However, we'd
              reccomend you try to fall <u>no more than a full chapter</u>{" "}
              behind! <span class="italic">Pace yourself</span>, and make sure
              you're <u>never missing a day</u> on <strong>jpdb</strong> so you
              can keep a good pace here on <strong>Nihongo Ninja</strong>.
            </li>
          </ol>
        </div>
      </div>
      <div class="absolute bottom-16 right-16">
        <A href="/learn/chapter-1/kanji-numbers">
          <Button>Next Lesson {"->"}</Button>
        </A>
      </div>
    </>
  )
}
