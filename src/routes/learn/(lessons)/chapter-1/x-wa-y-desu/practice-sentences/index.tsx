import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"

export default function page() {
  return (
    <ContentBox
      nextButtonText="See Upcoming Grammar ->"
      nextButtonLink="/learn/chapter-1/everyday-expressions"
    >
      <h1 class="px-20 pb-12 pt-24 text-center text-4xl font-bold">
        <span class="text-orange-400">X</span>
        <span class="font-japanese">は</span>
        <span class="text-emerald-400">Y</span>
        <span class="font-japanese">です</span> Practice Sentences
      </h1>
      <div class="space-y-9 px-16 md:px-24">
        <h3 class="pt-6 text-2xl font-semibold">
          Complete the sentences below by filling in the <u>topic</u> of the
          sentence
        </h3>
        <div class="text-xl">
          <span class="font-bold">Example:</span>{" "}
          <span class="font-japanese">たかし</span> +{" "}
          <span class="font-japanese">だいがくせいです</span> 👇{" "}
          <div class="ml-24 font-japanese">
            <span class="text-orange-400 underline underline-offset-4">
              たかしさん
            </span>
            は
            <span class="text-emerald-400 underline underline-offset-4">
              だいがくせい
            </span>
            です。
          </div>
        </div>
        <div class="w-full font-japanese">
          <div class="flex w-full justify-center">
            <div class="w-full max-w-[450px]">
              <div class="relative w-full overflow-hidden rounded-md pb-[68.42%]">
                <img src="/img/chapter-1/doctor.jpg" alt="doctor" />
              </div>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-end text-3xl">
            <input class="mr-2 mt-3 w-[19rem] bg-card !py-1 text-end text-3xl"></input>
            <div>
              <Furigana furigana={<span>いしゃ</span>}>医者</Furigana>です。
            </div>
          </div>
          <p class="text-end font-inter text-sm">
            *Remember to include the proper honorific! (さん・せんせい)
          </p>
        </div>
        <div class="w-full font-japanese">
          <div class="flex w-full justify-center">
            <div class="w-full max-w-[450px]">
              <div class="relative w-full overflow-hidden rounded-md pb-[68.42%]">
                <img
                  src="/img/chapter-1/office-worker.jpg"
                  alt="office-worker"
                />
              </div>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-end text-3xl">
            <input class="mr-2 mt-3 w-[13rem] bg-card !py-1 text-end text-3xl"></input>
            <div>
              <Furigana furigana={<span>かいしゃいん</span>}>会社員</Furigana>
              です。
            </div>
          </div>
        </div>
        <h3 class="pt-6 text-2xl font-semibold">
          Write the complete sentences for the following using{" "}
          <span class="font-extrabold">X</span>
          <span class="font-japanese">は</span>
          <span class="font-extrabold">Y</span>
          <span class="font-japanese">です</span> structure.
        </h3>
        <div class="flex w-full flex-col items-center">
          <p class="text-xl">
            Mr.{" "}
            <span class="font-japanese">
              <Furigana furigana={<span class="text-sm">よしひろ</span>}>
                義弘
              </Furigana>
            </span>{" "}
            is a lawyer.
          </p>
          <div class="mt-3 flex items-end text-3xl">
            <input class="mr-1 w-[26rem] bg-card !py-1 font-japanese text-3xl"></input>
            。
          </div>
          <p class="mt-12 text-xl">
            <Furigana furigana={<span class="text-sm">ゆうと</span>}>
              悠斗
            </Furigana>{" "}
            is a graduate student.
          </p>
          <div class="mt-3 flex items-end text-3xl">
            <input class="mr-1 w-[31.5rem] bg-card !py-1 font-japanese text-3xl"></input>
            。
          </div>
          <p class="mt-12 text-xl">
            <span class="text-lg text-muted-foreground">(My)</span> major is
            economics.
          </p>
          <div class="mt-3 flex items-end text-3xl">
            <input class="mr-1 w-[22.25rem] bg-card !py-1 font-japanese text-3xl"></input>
            。
          </div>
          <p class="mt-12 text-xl">Grandpa is 60 years old.</p>
          <div class="mt-3 flex items-end text-3xl">
            <input class="mr-1 w-[29.5rem] bg-card !py-1 font-japanese text-3xl"></input>
            。
          </div>
        </div>
        <h3 class="pt-12 text-2xl font-semibold">
          Write something about{" "}
          <span class="font-extrabold underline underline-offset-2">
            yourself!
          </span>{" "}
          🫵
        </h3>
        <div class="flex items-end pb-24 font-japanese text-3xl">
          <div>
            <Furigana furigana={<span>わたし</span>}>私</Furigana>は
          </div>
          <input class="-mb-1 mr-1 w-[22rem] bg-card !py-1 text-3xl"></input>。
        </div>
      </div>
    </ContentBox>
  )
}
