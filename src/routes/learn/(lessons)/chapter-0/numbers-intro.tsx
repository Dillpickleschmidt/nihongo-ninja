import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"

export default function JapanesePronunciation() {
  return (
    <ContentBox nextButtonLink="/learn/chapter-0/numbers-0-100">
      <h1 class="px-4 pb-16 pt-36 text-center text-5xl font-medium leading-[4rem] sm:px-20">
        <span class="text-6xl font-bold">Ditch the Charades:</span>{" "}
        <span class="text-5xl">Conquer</span> Japanese Numbers and{" "}
        <span class="text-6xl font-bold underline">Win at Life</span>
      </h1>
      <h2 class="pb-8 text-center text-xl font-semibold">
        <em>Huh?</em>
      </h2>
      <div class="flex">
        <div class="rounded-br-md bg-background-secondary px-8 sm:px-12 md:px-16">
          <p class="mt-6 py-12 text-3xl font-medium leading-[2.5rem] text-primary-foreground">
            Imagine you're in Japan, walking into a shop. You see ten{" "}
            <span class="font-semibold">beautiful</span> fans, but you only want
            two. How do you convey this without frantically waving your arms?{" "}
            <span class="font-extrabold">Numbers</span>, my friend!
          </p>
        </div>
        <div class="min-w-[55%] px-16 sm:px-20 md:px-24">
          <p class="mt-12 py-12 text-3xl font-medium leading-[2.5rem]">
            Or picture this: You're at a lively party in Tokyo. Someone asks
            your age. Do you start a game of charades, or do you confidently say{" "}
            <span class="font-japanese">にじゅうさい</span> (20 years old)?
            Numbers save the day again!
          </p>
        </div>
      </div>
      <div class="px-20">
        <p class="py-24 text-3xl font-medium leading-[2.5rem]">
          And let's not forget about telling time. Miss your train because you
          couldn't understand "
          <span class="font-japanese text-[2rem]">ごぜんくじ</span>" (9 AM)?
          ...I hope your friends missed you, at least. 🥹
        </p>
      </div>
      <div class="bg-background-secondary px-20 pb-20">
        <PortraitIcon src="/img/guru.png" class="mt-28 h-14 w-14" />
        <p class="py-24 text-3xl font-medium leading-[2.5rem] text-primary-foreground">
          Numbers in Japanese aren't just digits; they're your key to avoiding
          awkward silences, wild gestures, and the dreaded mime routine. So,
          let's count our way to greatness!
        </p>
      </div>
    </ContentBox>
  )
}
