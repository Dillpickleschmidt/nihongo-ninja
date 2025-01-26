import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import { TextField, TextFieldRoot } from "@/components/ui/textfield"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-1/worksheet-1"
    >
      <h1 class="px-12 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:px-28 lg:pt-24">
        Mastering the <span class="font-japanese text-orange-500">の</span>{" "}
        Particle in Japanese
      </h1>
      <div class="space-y-3 px-8 pb-32 md:px-24">
        <p>
          Today, we're gonna make our first step towards making longer and more
          complex sentences. Say hello to{" "}
          <span class="font-japanese text-xl font-bold">の</span>
          <span class="text-muted-foreground">(no)</span>—the particle which
          connects nouns.
        </p>

        <YouTubeVideo
          videoId="MFPOPg34INI"
          title="The Japanese の Particle in 2 minutes!"
          credit="ToKini Andy"
        />

        <h2 class="py-3 text-center text-2xl font-bold">
          The Basics: Possession with{" "}
          <span class="font-japanese text-[1.6rem] text-orange-500">の</span>
        </h2>
        <p>
          The <span class="font-japanese">の</span> particle is used to connect
          two nouns, indicating possession or a close relationship. It's similar
          to the apostrophe-s ('s) in English.
        </p>
        <p>
          Example: <br />
          <span class="font-japanese">
            たけしさん<span class="text-orange-500">の</span>
          </span>
          <Furigana furigana={<span class="text-sm">でんわばんごう</span>}>
            電話番号
          </Furigana>{" "}
          (Takeshi-san no denwa bangou) <br />
          <span class="font-bold">Takeshi's phone number</span>
        </p>
        <p>Here's the structure:</p>
        <h3 class="py-3 text-center text-[1.75rem] font-medium">
          [Noun 1] +{" "}
          <span class="font-japanese text-[2rem] text-orange-500">の</span> +
          [Noun 2]
        </h3>
        <small>*Noun 1 is the owner, and Noun 2 is the posessive</small>
        <p>More Examples:</p>
        <ul class="ml-4 list-inside list-disc space-y-2">
          <li>
            <span class="font-japanese text-xl">
              わたしの{" "}
              <Furigana furigana={<span class="text-sm">ほん</span>}>
                本
              </Furigana>
            </span>{" "}
            - <span class="font-bold">My book</span>
          </li>
          <li>
            <span class="font-japanese text-xl">
              せんせいの{" "}
              <Furigana furigana={<span class="text-sm">くるま</span>}>
                車
              </Furigana>
            </span>{" "}
            - <span class="font-bold">Teacher's car</span>
          </li>
          <li>
            <span class="font-japanese text-xl">
              ともだちの{" "}
              <Furigana furigana={<span class="text-sm">とけい</span>}>
                時計
              </Furigana>
            </span>{" "}
            - <span class="font-bold">Friend's watch</span>
          </li>
        </ul>
        <h2 class="pb-3 pt-6 text-center text-2xl font-bold">
          More Practical Examples
        </h2>
        <p>
          Since you've recently learned family terms, countries, majors, and
          occupations, let's use these topics for more examples.
        </p>
        <ul class="ml-4 list-inside list-disc space-y-2">
          <li>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">さとう</span>}>
                佐藤
              </Furigana>
              さんのおかあさん -{" "}
            </span>
            <span class="font-bold">Satou's mother</span>
          </li>
          <li>
            <span class="font-japanese text-xl">
              おとうさんの
              <Furigana furigana={<span class="text-sm">くるま</span>}>
                車
              </Furigana>
            </span>{" "}
            - <span class="font-bold">Father's car</span>
          </li>
          <li>
            <span class="font-japanese text-xl">おかあさんのせんこう</span> -{" "}
            <span class="font-bold">Mother's major</span>
          </li>
          <li>
            <span class="font-japanese text-xl">
              おにいさんの
              <Furigana furigana={<span class="text-sm">こんぴゅーたー</span>}>
                コンピューター
              </Furigana>
            </span>{" "}
            - <span class="font-bold">Older brother's computer</span>
          </li>
          <li>
            <span class="font-japanese text-xl">
              いもうとの{" "}
              <Furigana furigana={<span class="text-sm">ほん</span>}>
                本
              </Furigana>
            </span>{" "}
            - <span class="font-bold">Younger sister's book</span>
          </li>
          <li>
            <span class="font-japanese text-xl">
              ともだちの
              <Furigana furigana={<span class="text-sm">けいたい</span>}>
                携帯
              </Furigana>
            </span>{" "}
            - <span class="font-bold">Friend's cellphone</span>
          </li>
        </ul>
        <p class="pb-2 pt-6 font-bold">
          You can connect more than just two nouns in a single sentence:
        </p>
        <ul class="ml-4 list-inside list-disc space-y-2">
          <li>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">あめりか</span>}>
                アメリカ
              </Furigana>
              <span class="text-orange-500">の</span>ともだち
              <span class="text-orange-500">の</span>
              <Furigana furigana={<span class="text-sm">かめら</span>}>
                カメラ
              </Furigana>
            </span>{" "}
            - <span class="font-bold">American friend's camera</span>
          </li>
          <li>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">にほんご</span>}>
                日本語
              </Furigana>
              <span class="text-orange-500">の</span>{" "}
              <Furigana furigana={<span class="text-sm">せんせい</span>}>
                先生
              </Furigana>
            </span>{" "}
            <span class="font-japanese text-xl">
              <span class="text-orange-500">の</span>
              <Furigana furigana={<span class="text-sm">とけい</span>}>
                時計
              </Furigana>
            </span>{" "}
            - <span class="font-bold">Japanese teacher's watch</span>
          </li>
          <li>
            <span class="font-japanese text-xl">
              <Furigana furigana={<span class="text-sm">ふらんす</span>}>
                フランス
              </Furigana>
              <span class="text-orange-500">の</span>
              <Furigana furigana={<span class="text-sm">がくせい</span>}>
                学生
              </Furigana>
              <span class="text-orange-500">の</span>
              <Furigana furigana={<span class="text-sm">のーと</span>}>
                ノート
              </Furigana>
            </span>{" "}
            - <span class="font-bold">French student's notebook</span>
          </li>
        </ul>
        <p class="pt-6">And that's it!</p>
        <p>
          In the future, you'll encounter a couple more uses for the{" "}
          <span class="font-japanese text-xl">の</span> particle, but you can
          worry about them once you reach the later chapters. For now, try to
          link nouns together to show possession.
        </p>
        <h2 class="pb-3 pt-6 text-center text-2xl font-bold">
          Activity: Who Owns What?
        </h2>
        <p>
          Let's play a quick game to reinforce what we've learned. Connect the
          following pictures using the{" "}
          <span class="font-japanese text-xl">の</span> particle.
        </p>
        <h3 class="pt-6 text-center font-japanese text-2xl font-medium">
          <Romaji
            romaji={<span class="font-inter text-muted-foreground">Who</span>}
          >
            <Furigana furigana={<span class="text-base">だれ</span>}>
              誰
            </Furigana>
          </Romaji>
          の
          <Furigana furigana={<span class="text-base">ほん</span>}>本</Furigana>
          ですか。
        </h3>
        <div class="flex items-center justify-center pb-6">
          <div class="h-48 w-48 rounded-md bg-card"></div>
          <div class="mx-12 text-4xl">+</div>
          <div class="h-48 w-48 rounded-md bg-card"></div>
        </div>
        <div class="flex justify-center pb-6">
          <div>
            <TextFieldRoot class="bg-card text-lg">
              <TextField type="text" placeholder="" />
            </TextFieldRoot>
          </div>
        </div>

        <h3 class="pt-6 text-center font-japanese text-2xl font-medium">
          <Furigana furigana={<span class="text-base">だれ</span>}>誰</Furigana>
          の
          <Furigana furigana={<span class="text-base">こんぴゅーたー</span>}>
            コンピューター
          </Furigana>
          ですか。
        </h3>
        <div class="flex items-center justify-center pb-6 pt-3">
          <div class="h-48 w-48 rounded-md bg-card"></div>
          <div class="mx-12 text-4xl">+</div>
          <div class="h-48 w-48 rounded-md bg-card"></div>
        </div>
        <div class="flex justify-center pb-6">
          <div>
            <TextFieldRoot class="bg-card text-lg">
              <TextField type="text" placeholder="" />
            </TextFieldRoot>
          </div>
        </div>

        <h2 class="pb-3 pt-6 text-2xl font-bold">Summary</h2>
        <p>
          By now, you should feel more comfortable using{" "}
          <span class="font-japanese">の</span> to show possession and make your
          sentences richer in detail. If not, don't worry because you'll
          practice creating more sentences in the next lesson.
        </p>
      </div>
    </ContentBox>
  )
}
