import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import { TextField, TextFieldRoot } from "@/components/ui/textfield"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-1/everyday-expressions"
    >
      <h1 class="px-20 pb-12 pt-24 text-center text-4xl font-bold">
        <span class="text-orange-400">X</span>
        <span class="font-japanese">は</span>
        <span class="text-emerald-400">Y</span>
        <span class="font-japanese">です</span> Practice Sentences
      </h1>
      <div class="space-y-9 px-8 md:px-24">
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
              <div class="relative w-full overflow-hidden rounded-md">
                <img src="/img/chapter-1/doctor.jpg" alt="doctor" />
              </div>
            </div>
          </div>
          <div class="mt-6 items-center justify-end text-3xl md:flex">
            <TextFieldRoot>
              <TextField
                type="text"
                placeholder=""
                class="mr-2 mt-3 w-[19rem] bg-card text-end text-3xl"
              />
            </TextFieldRoot>
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
              <div class="relative w-full overflow-hidden rounded-md">
                <img
                  src="/img/chapter-1/office-worker.jpg"
                  alt="office-worker"
                />
              </div>
            </div>
          </div>
          <div class="mt-6 items-center justify-end text-3xl md:flex">
            <TextFieldRoot>
              <TextField
                type="text"
                placeholder=""
                class="mr-2 mt-3 w-[19rem] bg-card text-end text-3xl"
              />
            </TextFieldRoot>
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
          <div class="mt-3 flex w-full items-end justify-center text-3xl">
            <TextFieldRoot class="w-full max-w-[26rem]">
              <TextField
                type="text"
                placeholder=""
                class="mr-1 w-full max-w-[26rem] bg-card font-japanese text-3xl"
              />
            </TextFieldRoot>
            。
          </div>
          <p class="mt-12 text-xl">
            <Furigana furigana={<span class="text-sm">ゆうと</span>}>
              悠斗
            </Furigana>{" "}
            is a graduate student.
          </p>
          <div class="mt-3 flex w-full items-end justify-center text-3xl">
            <TextFieldRoot class="w-full max-w-[31.5rem]">
              <TextField
                type="text"
                placeholder=""
                class="mr-1 w-full max-w-[31.5rem] bg-card font-japanese text-3xl"
              />
            </TextFieldRoot>
            。
          </div>
          <p class="mt-12 text-xl">
            <span class="text-lg text-muted-foreground">(My)</span> major is
            economics.
          </p>
          <div class="mt-3 flex w-full items-end justify-center text-3xl">
            <TextFieldRoot class="w-full max-w-[22.25rem]">
              <TextField
                type="text"
                placeholder=""
                class="mr-1 w-full max-w-[22.25rem] bg-card font-japanese text-3xl"
              />
            </TextFieldRoot>
            。
          </div>
          <p class="mt-12 text-xl">Grandpa is 60 years old.</p>
          <div class="mt-3 flex w-full items-end justify-center text-3xl">
            <TextFieldRoot class="w-full max-w-[29.5rem]">
              <TextField
                type="text"
                placeholder=""
                class="mr-1 w-full max-w-[29.5rem] bg-card font-japanese text-3xl"
              />
            </TextFieldRoot>
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
        <div class="flex items-end pb-32 font-japanese text-3xl">
          <div>
            <Furigana furigana={<span>わたし</span>}>私</Furigana>は
          </div>
          <TextFieldRoot>
            <TextField
              type="text"
              placeholder=""
              class="-mb-1 mr-1 w-[22rem] bg-card text-3xl"
            />
          </TextFieldRoot>
        </div>
      </div>
    </ContentBox>
  )
}
