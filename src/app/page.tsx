import Image from "next/image"
import Lesson3 from "./components/Lesson3"
import Hero from "./components/Hero"
import Button from "@/components/button"

export default function Home() {
  return (
    <main>
      <div className="scroll-smooth overscroll-auto">
        <Hero />
        <div className="h-[500px] bg-[#F6E7D2] flex flex-col justify-center items-center text-black">
          <div className="xl:mx-64 mx-24 space-y-12">
            <h2 className="text-6xl font-medium">
              Ever felt like language apps <u>just don't cut it</u>? Craving
              something a little{" "}
              <span className="font-semibold text-7xl">more? </span>
            </h2>
            <h3 className="text-4xl">
              Nihongo Ninja is here for you! All of our lessons are based on
              material from real teachers in college courses.
            </h3>
          </div>
        </div>
        <div className="relative w-full flex justify-center">
          <Image
            src={"/img/lesson-page.png"}
            width={1400}
            height={1080}
            alt="games-preview-image"
            className="relative"
          />
        </div>
        <div className="h-[500px] bg-[#F6E7D2] flex flex-col justify-center items-center text-black">
          <div className="xl:mx-64 mx-24 space-y-12">
            <h2 className="text-5xl">
              <span className="font-semibold text-7xl">Need feedback?</span> Our
              conversational AI evolves with you, offering dynamic feedback in
              Japanese based on the mistakes you make.
            </h2>
            <h3 className="text-3xl">
              We use a custom knowledgebase to craft a tailored and effective AI
              that matches its vocabulary to what you've learned so far. It's
              like chatting with a robot who's majored in Japanese—tailored
              feedback, but without the judgmental looks. 🧑‍🎓
            </h3>
          </div>
        </div>
        <div className="flex justify-end h-[1670px] my-12">
          <Lesson3 />
        </div>
        <div className="h-[500px] bg-[#F6E7D2] flex flex-col justify-center items-center text-black">
          <div className="xl:mx-64 mx-24 space-y-12">
            <h2 className="text-5xl">
              <span className="font-semibold text-7xl">Games?</span> Oh, we've
              got games. They're not just fun; they're 'learn Japanese without
              realizing you're learning' fun.
            </h2>
            <h3 className="text-3xl">
              Struggle with directions or telling time in Japanese? Our games
              will have you navigating Tokyo streets and scheduling sushi dates
              in no time, minus the actual sushi. 🍣
            </h3>
          </div>
        </div>
        <div className="relative h-screen w-full">
          <Image
            src={"/img/numbers-game-preview.jpg"}
            fill={true}
            alt="games-preview-image"
            className="relative opacity-20"
          />
          <div className="absolute h-full w-full flex flex-col justify-center items-center">
            <div className="text-8xl text-center font-bold space-y-12">
              <h2>Not yet developed</h2>
            </div>
          </div>
        </div>
        <div className="h-[500px] bg-[#F6E7D2] flex flex-col justify-center items-center text-black">
          <div className="xl:mx-64 mx-24 space-y-12">
            <h2 className="text-5xl">
              <span className="font-semibold text-7xl">Flashcards?</span> Even
              better—adaptive and performance-based use of multiple-choice and
              written answers for faster comprehension.
            </h2>
            <h3 className="text-3xl">
              Plus, there's a twist—every new word comes with a mnemonic so
              bizarre, you'll wonder what we were thinking. But hey, if it helps
              you remember 'cat' in Japanese, isn't that worth it?
            </h3>
          </div>
        </div>
        <div className="z-1 w-full flex justify-center">
          <video width="1400" height="1080" loop autoPlay muted>
            <source src="/video/learn-vocab-preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="h-[500px] bg-[#F6E7D2] flex flex-col justify-center items-center text-black">
          <div className="xl:mx-64 mx-24 space-y-12">
            <h2 className="text-5xl">
              <span className="font-semibold text-7xl">Forget vocabulary?</span>{" "}
              Impossible with the FSRS algorithm, a memory tool so powerful,
              you'll remember Japanese words longer than your own phone number.
            </h2>
            <h3 className="text-3xl">
              It's a proven method—the same algorithm currently used by Anki, a
              program that's almost universally regarded as the best way to
              memorize Japanese vocabulary. 💠
            </h3>
          </div>
        </div>
        <div className="z-1 w-full flex justify-center">
          <video width="1400" height="1080" loop autoPlay muted>
            <source src="/video/flashcard-preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="h-[500px] bg-[#F6E7D2] flex flex-col justify-center items-center text-black">
          <div className="xl:mx-64 mx-24 space-y-12">
            <h2 className="text-5xl">
              <span className="font-semibold text-7xl">Kanji.</span> Just the
              word is scary, right? But don't worry, we offer timely lessons on
              kanji radicals (with super useful mnemonics) that coincide with
              new vocabulary.
            </h2>
            <h3 className="text-3xl">
              We'll break words down with radicals and mnemonics so fun, you'll
              start doodling them everywhere. Yes, even there.
            </h3>
          </div>
        </div>
        <div className="w-full h-[800px] bg-[#222222] flex flex-col justify-center items-center">
          <h2 className="text-7xl font-medium p-24 bg-neutral-800 border-2 border-dashed border-neutral-500 rounded-[45px]">
            Not yet developed
          </h2>
        </div>
        <div className="h-[500px] bg-[#F6E7D2] flex flex-col justify-center items-center text-black">
          <div className="xl:mx-64 mx-24 space-y-12">
            <h2 className="text-5xl">
              <span className="font-semibold text-7xl">
                Crave the depth of textbooks?
              </span>{" "}
              Our lessons are like a comedy show meets Japanese class. You'll
              learn about culture, context, and why exactly that word means what
              it means—all while chuckling. 📖
            </h2>
            <h3 className="text-3xl">
              Education or entertainment? Why not both?
            </h3>
          </div>
        </div>
        <div className="flex justify-end h-[1670px] my-12">
          <Lesson3 />
        </div>
        <div className="h-[500px] bg-[#F6E7D2] flex flex-col justify-center items-center text-black">
          <div className="xl:mx-64 mx-24 space-y-12">
            <h2 className="text-5xl">
              <span className="font-semibold text-7xl">
                Don't you just wish you had someone to talk to?
              </span>{" "}
              Maybe not. But in Japanese, you'll surely want to get some
              practice speaking and listening.
            </h2>
            <h3 className="text-3xl">
              Nihongo Ninja integrates OpenAI's Whisper for top-notch speech
              recognition, so you can quickly answer Japanese questions with
              speed and confidence. But what's learning without a voice
              answering back?
            </h3>
          </div>
        </div>
        <div className="w-full h-[800px] bg-[#222222] flex flex-col justify-center items-center">
          <h2 className="text-7xl font-medium p-24 bg-neutral-800 border-2 border-dashed border-neutral-500 rounded-[45px]">
            Nearly completed
          </h2>
        </div>
        <div className="h-[500px] bg-[#F6E7D2] flex flex-col justify-center items-center text-black">
          <div className="xl:mx-64 mx-24 space-y-12">
            <h2 className="text-5xl">
              <span className="font-semibold text-7xl">
                We've also integrated Voicepeak
              </span>
              , our favorite tool for text-to-speech. It gives you a total of 6
              very high-quality male and female voices for read-aloud and
              conversation.
            </h2>
            <h3 className="text-3xl">
              Now, you'll be able to speak, listen, and interact in Japanese,
              and receive real-time feedback. It's like having a conversation in
              a Tokyo café, minus the jet lag.
            </h3>
          </div>
        </div>
        <div className="w-full h-[800px] bg-[#222222] flex flex-col justify-center items-center">
          <h2 className="text-7xl font-medium p-24 bg-neutral-800 border-2 border-dashed border-neutral-500 rounded-[45px]">
            In development
          </h2>
        </div>
        <div className="h-[500px] bg-[#F6E7D2] flex flex-col justify-center items-center text-black">
          <div className="xl:mx-64 mx-24 space-y-12">
            <h2 className="text-6xl">
              Sound interesting?{" "}
              <Button
                variant={"system"}
                link="learn/"
                className="font-semibold text-7xl hover:text-[5rem] hover:text-black"
              >
                Try your first lesson!
              </Button>
            </h2>
          </div>
        </div>
        {/* 
        <p></p> */}
      </div>
    </main>
  )
}
