import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"

export default function JapanesePunctuation() {
  return (
    <ContentBox
      nextButtonText="See Vocab! ->"
      nextButtonLink="/learn/chapter-0/vocab-list"
    >
      <h1 class="px-12 pt-6 text-center text-[2rem] font-medium leading-[2.875rem] sm:pt-12 lg:px-20 lg:pt-24">
        Just When You Thought It Was Safe...{" "}
        <span class="text-[2.75rem] font-bold">Prepare Yourselves</span>,
        Intrepid Learners, for the World of{" "}
        <span class="text-[3.125rem] font-bold">Japanese Punctuation</span>.
        Uppercase? Lowercase?{" "}
        <span class="text-[2.125rem] font-semibold">Forget about it!</span>{" "}
        Question marks and periods? Oh, they're here, but with a{" "}
        <span class="text-[2.25rem]">
          <em>twist!</em>
        </span>{" "}
        Spaces?{" "}
        <span class="text-[2.125rem] font-bold">
          <em>Who needs them!</em>
        </span>{" "}
        Strap in, because you're about to get wildly... precise!
      </h1>

      <h2 class="mb-4 mt-12 text-center text-3xl font-bold">
        No Uppercase or Lowercase!
      </h2>

      <div class="space-y-9 px-8 pb-32 sm:px-24 lg:px-16">
        <div class="mr-[5.75rem] mt-9 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p>
            Sensei, I've been learning about Hiragana, but I have some questions
            about other parts of Japanese writing. What can you tell me about
            uppercase and lowercase letters in Japanese?
          </p>
        </div>

        <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/guru.png" class="float-end" />
          <p>
            <span class="font-extralight italic">
              *without looking up from his precise brushwork*
            </span>{" "}
            Japanese is a language of elegant simplicity in some aspects. Unlike
            English, Japanese does not distinguish between uppercase and
            lowercase letters. Each character stands proudly on its own, without
            needing to change form.
          </p>
        </div>

        <h2 class="mb-4 mt-12 text-center text-3xl font-bold">Punctuation</h2>

        <div class="mr-[5.75rem] mt-9 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p>What about punctuation, like question marks and periods?</p>
        </div>

        <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/guru.png" class="float-end" />
          <p>
            Ah, punctuation—the tiny marks that guide our understanding. In
            Japanese, we do use question marks and periods, but their usage can
            be a bit different. The Japanese question mark (？) is used
            sparingly, often in informal writing or to add emphasis. In more
            formal contexts, the question is usually indicated by the context
            and the sentence-ending particle{" "}
            <span class="font-japanese text-xl">か</span> (ka).
          </p>
        </div>

        <h3 class="text-2xl font-medium">
          Japanese speakers use <span class="font-japanese">か</span> to
          indicate questions in polite and formal contexts. In casual settings,
          they might drop <span class="font-japanese">か</span> and use a rising
          intonation at the end of their sentence, which is written with a
          question mark (？).
        </h3>

        <p>
          <span class="font-extrabold">Student:</span> Oh, that's weird. I'll
          have to get used to that.
        </p>

        <div class="mr-[5.75rem] mt-9 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p>So, what about periods? Surely, they use those... right Sensei?</p>
        </div>

        <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/guru.png" class="float-end" />
          <p>
            Indeed. The humble period (。) in Japanese is called "句点" (kuten).
            It's used at the end of a sentence, just like in English. But
            instead of a solid dot, it's a hollow circle.
          </p>
        </div>

        <h2 class="mb-4 mt-12 text-center text-3xl font-bold">No Spaces!</h2>

        <div class="mr-[5.75rem] mt-9 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p>
            Do Japanese sentences have spaces between words like in English?
          </p>
        </div>

        <div class="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/guru.png" class="float-end" />
          <p>
            <span class="font-extralight italic">*eye twitching slightly*</span>{" "}
            Oh, spaces... <em>*nervous laughter*</em> Let me tell you about
            spaces. Or rather, the complete and total ABSENCE of spaces! That's
            right - Japanese doesn't use ANY spaces between words! Do you have
            ANY idea how many hours I spent trying to get this website to
            understand where one word ends and another begins?! The computer
            just sits there, staring at an endless stream of characters like
            some kind of confused tourist!
          </p>
          <p class="mt-4">
            <em>*takes deep breath*</em>
          </p>
          <p class="mt-4">
            Traditional Japanese writing flows continuously, like a river. A
            river that occasionally makes web developers question their life
            choices.
            <em>*adjusts collar*</em> But I digress...
          </p>
          <p class="mt-4">
            Modern Japanese sometimes uses spaces in children's books or
            language learning materials to help with readability. Which would
            have made my life SO much easier!
          </p>
          <p class="mt-4">
            <em>*composes self*</em>
          </p>
          <p class="mt-4">Not that I'm bitter about it or anything.</p>
        </div>

        <h3 class="text-2xl font-medium">
          Japanese doesn't use spaces between words. However, when typing,
          you'll notice that characters like 。 and 、 have built-in spaces to
          separate sentences. Additionally, Japanese characters are
          double-width, which means punctuation marks like ? and ! take up more
          space, appearing as ？ and ！.
        </h3>

        <p>
          <span class="font-extrabold">Student:</span> <em>*nervously*</em> That
          sounds... challenging.
        </p>

        <p>
          <span class="font-extrabold">Sensei:</span> It can be at first, but
          with practice, your mind will begin to recognize the patterns and
          break down sentences naturally. It's like learning to read music—once
          you understand the rhythm, you'll be able to play any tune.
        </p>
      </div>
    </ContentBox>
  )
}
