import ContentBox from "@/components/ContentBox"
import CustomTextArea from "@/components/CustomTextArea"
import PortraitIcon from "@/components/PortraitIcon"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Filler words ->"
      nextButtonLink="/learn/chapter-1/anou-etto"
    >
      <h1 class="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Practice Creating Sentences With{" "}
        <span class="font-japanese font-bold">です</span>,{" "}
        <span class="font-japanese font-bold">は</span>,{" "}
        <span class="font-japanese font-bold">か</span>, and{" "}
        <span class="font-japanese font-bold">の</span>,{" "}
      </h1>

      <div class="mx-6 my-6">
        <div class="ml-[9.5rem] flex justify-around">
          <PortraitIcon src="/img/student.png" class="h-16 w-16" />
          <PortraitIcon src="/img/student.png" class="h-16 w-16" />
          <PortraitIcon src="/img/student.png" class="h-16 w-16" />
          <PortraitIcon src="/img/guru.png" class="h-16 w-16" />
        </div>
        <div class="mt-4 overflow-x-auto rounded-lg text-base shadow-md">
          <table class="min-w-full border-collapse">
            <thead class="bg-neutral-200 dark:bg-card-foreground">
              <tr>
                <th class="w-1/5 border border-primary/15 py-2 font-medium">
                  {" "}
                </th>
                <th class="w-1/5 border border-primary/15 py-2 font-japanese dark:border-gray-700">
                  <Romaji romaji={<span class="text-sm">Sato Taro</span>}>
                    佐藤太郎
                  </Romaji>
                </th>
                <th class="w-1/5 border border-primary/15 py-2 font-japanese dark:border-gray-700">
                  <Romaji romaji={<span class="text-sm">John Smith</span>}>
                    ジョン・スミス
                  </Romaji>
                </th>
                <th class="w-1/5 border border-primary/15 py-2 font-japanese dark:border-gray-700">
                  <Romaji romaji={<span class="text-sm">Kim Min-su</span>}>
                    キム・ミンス
                  </Romaji>
                </th>
                <th class="w-1/5 border border-primary/15 py-2 font-japanese dark:border-gray-700">
                  <Romaji romaji={<span class="text-sm">Li Wei</span>}>
                    リ・ウェイ
                  </Romaji>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-card">
                <td class="border border-primary/15 px-4 py-2">Nationality</td>
                <td class="border border-primary/15 px-4 py-2">Japanese</td>
                <td class="border border-primary/15 px-4 py-2">American</td>
                <td class="border border-primary/15 px-4 py-2">Korean</td>
                <td class="border border-primary/15 px-4 py-2">Chinese</td>
              </tr>
              <tr class="bg-card">
                <td class="border border-primary/15 px-4 py-2">School Year</td>
                <td class="border border-primary/15 px-4 py-2">2nd Year</td>
                <td class="border border-primary/15 px-4 py-2">3rd Year</td>
                <td class="border border-primary/15 px-4 py-2">1st Year</td>
                <td class="border border-primary/15 px-4 py-2">4th Year</td>
              </tr>
              <tr class="bg-card">
                <td class="border border-primary/15 px-4 py-2">School</td>
                <td class="border border-primary/15 px-4 py-2">
                  <Romaji
                    romaji={<span class="text-sm">Kyoto University</span>}
                  >
                    きょうとだいがく
                  </Romaji>
                </td>
                <td class="border border-primary/15 px-4 py-2">
                  <Romaji
                    romaji={<span class="text-sm">Harvard University</span>}
                  >
                    ハーバードだいがく
                  </Romaji>
                </td>
                <td class="border border-primary/15 px-4 py-2">
                  <Romaji
                    romaji={<span class="text-sm">Meisei University</span>}
                  >
                    めいせいだいがく
                  </Romaji>
                </td>
                <td class="border border-primary/15 px-4 py-2">
                  <Romaji
                    romaji={<span class="text-sm">Stanford University</span>}
                  >
                    スタンフォードだいがく
                  </Romaji>
                </td>
              </tr>
              <tr class="bg-card">
                <td class="border border-primary/15 px-4 py-2">Major</td>
                <td class="border border-primary/15 px-4 py-2 font-japanese">
                  けいざい
                </td>
                <td class="border border-primary/15 px-4 py-2 font-japanese">
                  れきし
                </td>
                <td class="border border-primary/15 px-4 py-2 font-japanese">
                  <Furigana
                    furigana={<span class="text-sm">こんぴゅーたー</span>}
                  >
                    コンピューター
                  </Furigana>
                </td>
                <td class="border border-primary/15 px-4 py-2 font-japanese">
                  せいぶつがく
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="space-y-6 px-6 pb-32 md:px-24">
        <small>
          *Both Japanese and Koreans place the family name before the given
          name.
        </small>
        <div>
          <h3 class="pt-2 text-center text-2xl font-bold">Nationality</h3>
          <p class="mt-2 text-center">
            For each student, create a sentence describing their nationality.
          </p>
        </div>
        <p class="text-xl">
          <span class="mr-2 font-bold">Example: </span>{" "}
          <span class="text-center font-japanese">おにいさん</span> {"->"}{" "}
          <span class="font-japanese">おにいさんはにほんじんです。</span>
        </p>
        <div class="flex">
          <h4 class="mt-4 w-48 font-japanese text-2xl">さとうさん:</h4>
          <CustomTextArea
            class="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div class="flex">
          <h4 class="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span class="text-base">すみす</span>}>
              スミス
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            class="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div class="flex">
          <h4 class="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span class="text-base">きむ</span>}>
              キム
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            class="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div class="flex">
          <h4 class="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span class="text-base">うぇい</span>}>
              ウェイ
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            class="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div>
          <h3 class="pt-2 text-center text-2xl font-bold">School Year</h3>
          <p class="mt-2 text-center">
            For each student, create a sentence describing their school year.
          </p>
        </div>
        <p class="text-xl">
          <span class="mr-2 font-bold">Example: </span>{" "}
          <span class="text-center font-japanese">おにいさん</span> {"->"}{" "}
          <span class="font-japanese">おにいさんはにねんせいです。</span>
        </p>
        <div class="flex">
          <h4 class="mt-4 w-48 font-japanese text-2xl">さとうさん:</h4>
          <CustomTextArea
            class="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div class="flex">
          <h4 class="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span class="text-base">すみす</span>}>
              スミス
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            class="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div class="flex">
          <h4 class="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span class="text-base">きむ</span>}>
              キム
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            class="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div class="flex">
          <h4 class="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span class="text-base">うぇい</span>}>
              ウェイ
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            class="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div>
          <h3 class="pt-2 text-center text-2xl font-bold">School</h3>
          <p class="mt-2 text-center">
            For each student, create a sentence describing them in relation to
            their school. Write in hiragana{" "}
            <span class="text-muted-foreground">
              (or katakana if you already know it)
            </span>
            .
          </p>
        </div>
        <p class="text-xl">
          <span class="mr-2 font-bold">Example: </span>{" "}
          <span class="text-center font-japanese">おにいさん</span> {"->"}{" "}
          <span class="font-japanese">
            おにいさんは
            <Furigana furigana={<span class="text-sm">ばーじにあ</span>}>
              バージニア
            </Furigana>
            だいがくのがくせいです。
          </span>{" "}
          {"->"}{" "}
          <span class="text-lg">He's a University of Virginia student.</span>
        </p>
        <div class="flex">
          <h4 class="mt-4 w-48 font-japanese text-2xl">さとうさん:</h4>
          <CustomTextArea
            class="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div class="flex">
          <h4 class="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span class="text-base">すみす</span>}>
              スミス
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            class="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div class="flex">
          <h4 class="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span class="text-base">きむ</span>}>
              キム
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            class="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div class="flex">
          <h4 class="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span class="text-base">うぇい</span>}>
              ウェイ
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            class="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div>
          <h3 class="pt-2 text-center text-2xl font-bold">Questions</h3>
          <p class="mt-2 text-center">
            Answer the following questions using full sentences in Japanese
            (include more than just yes/no in your responses).
          </p>
        </div>
        <div>
          <span class="mr-2 font-bold">Example: </span>{" "}
          <span class="text-center font-japanese">
            <strong>Q:</strong>{" "}
            さとうさんはスタンフォードだいがくのがくせいですか。
          </span>
          <br />
          {"->"}{" "}
          <span class="font-japanese">
            <strong>A:</strong>{" "}
            いいえ、さとうさんはきょうとだいがくのがくせいです。
          </span>
        </div>
        <ol class="list-decimal space-y-4 font-japanese text-xl">
          <li>
            さとうさんの　せんこうは　なんですか。
            <div class="flex justify-end px-6 py-4">
              <CustomTextArea
                class="h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            <Furigana furigana={<span class="text-sm">すみす</span>}>
              スミス
            </Furigana>
            さんは　
            <Furigana furigana={<span class="text-sm">すたんふぉーど</span>}>
              スタンフォード
            </Furigana>
            だいがくの　がくせいですか。
            <div class="flex justify-end px-6 py-4">
              <CustomTextArea
                class="h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            <Furigana furigana={<span class="text-sm">きむ</span>}>
              キム
            </Furigana>
            さんの　せんこうは　なんですか。
            <div class="flex justify-end px-6 py-4">
              <CustomTextArea
                class="h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            <Furigana furigana={<span class="text-sm">うぇい</span>}>
              ウェイ
            </Furigana>
            さんは　スタンフォードだいがくの　がくせいですか。
            <div class="flex justify-end px-6 py-4">
              <CustomTextArea
                class="h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            さとうさんは　なんねんせいですか。
            <div class="flex justify-end px-6 py-4">
              <CustomTextArea
                class="h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            <Furigana furigana={<span class="text-sm">すみす</span>}>
              スミス
            </Furigana>
            さんの　せんこうは　れきしですか。
            <div class="flex justify-end px-6 py-4">
              <CustomTextArea
                class="h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            <Furigana furigana={<span class="text-sm">きむ</span>}>
              キム
            </Furigana>
            さんは　めいせいだいがくの　がくせいですか。
            <div class="flex justify-end px-6 py-4">
              <CustomTextArea
                class="h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
        </ol>
        <h2 class="mt-6 text-center text-2xl font-bold italic">
          Whew, that was a lot of writing. Congradulations on finishing! {"->"}{" "}
          <span class="font-japanese not-italic">おめでとうございます！</span>
        </h2>
        <p>
          Hopefully, you've now got a stronger grip on all the topics we've
          covered up to this point.
        </p>
      </div>
    </ContentBox>
  )
}
