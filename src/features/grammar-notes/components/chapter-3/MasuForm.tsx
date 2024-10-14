import Furigana from "@/components/text/Furigana"

export default function MasuForm() {
  return (
    <div class="relative h-full w-full p-8 text-base text-black">
      <h1 class="mb-4 text-center text-2xl font-bold">
        Godan/Ichidan Verbs and{" "}
        <span class="font-japanese text-emerald-500">ます</span> Form
      </h1>

      <div>
        <h2 class="mb-1 text-xl font-semibold">Types of Japanese Verbs</h2>
        <ol class="list-inside list-decimal space-y-1">
          <li>
            <span class="font-bold">
              Godan (<span class="font-japanese">五段</span>) Verbs
            </span>
            <ul class="ml-4 list-inside list-disc">
              <li>Also known as U-verbs</li>
              <li>
                End with an <span class="font-japanese">う</span> sound in
                dictionary form
              </li>
              <li>
                Examples: <span class="font-japanese">聞く</span> (kiku),{" "}
                <span class="font-japanese">読む</span> (yomu),{" "}
                <span class="font-japanese">話す</span> (hanasu)
              </li>
            </ul>
          </li>
          <li>
            <span class="font-bold">
              Ichidan (<span class="font-japanese">一段</span>) Verbs
            </span>
            <ul class="ml-4 list-inside list-disc">
              <li>
                End with <u>iru</u> or <u>eru</u> sound in dictionary form
              </li>
              <li>
                Examples: <span class="font-japanese">食べる</span> (tab
                <u>eru</u>), <span class="font-japanese">見る</span> (m
                <u>iru</u>), <span class="font-japanese">起きる</span> (ok
                <u>iru</u>)
              </li>
            </ul>
          </li>
          <li>
            <span class="font-bold">Irregular Verbs</span>
            <ul class="ml-4 list-inside list-disc">
              <li>Don't follow standard rules</li>
              <li>
                Main examples: <span class="font-japanese">する</span> (suru),{" "}
                <span class="font-japanese">来る</span> (kuru)
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div class="absolute right-14 mt-6 text-right">
        <h2 class="mb-2 mr-1 text-3xl font-semibold">
          <span class="font-japanese font-bold text-emerald-500">ます</span>{" "}
          Form
        </h2>
        <p>Polite form used for:</p>
        <ol class="text-xl font-semibold">
          <li>Habitual actions</li>
          <li>Future tense</li>
        </ol>
      </div>

      <h2 class="mb-1 mt-4 text-xl font-semibold">Conjugation Rules</h2>
      <ol class="list-inside list-decimal space-y-1">
        <li>
          <span class="font-bold">Godan Verbs:</span>
          <ul class="ml-4 list-inside list-disc">
            <li class="underline">Change last syllable to "i" sound</li>
            <li>
              Add <span class="font-japanese">ます</span>
            </li>
            <li>
              Example:{" "}
              <span class="font-japanese">
                聞<span class="underline underline-offset-2">く</span>
              </span>{" "}
              (kiku) {"->"}{" "}
              <span class="font-japanese">
                聞<span class="underline underline-offset-2">き</span>ます
              </span>{" "}
              (kikimasu)
            </li>
          </ul>
        </li>
        <li>
          <span class="font-bold">Ichidan Verbs:</span>
          <ul class="ml-4 list-inside list-disc">
            <li class="underline">
              Remove <span class="font-japanese">る</span>
            </li>
            <li>
              Add <span class="font-japanese">ます</span>
            </li>
            <li>
              Example:{" "}
              <span class="font-japanese">
                食べ<span class="underline underline-offset-2">る</span>
              </span>{" "}
              (taberu) {"->"} <span class="font-japanese">食べます</span>{" "}
              (tabemasu)
            </li>
          </ul>
        </li>
        <li>
          <span class="font-bold">Irregular Verbs:</span>
          <ul class="ml-4 list-inside list-disc">
            <li>
              <span class="font-japanese">する</span> {"->"}{" "}
              <span class="font-japanese">します</span> (shimasu)
            </li>
            <li>
              <span class="font-japanese">来る</span> {"->"}{" "}
              <span class="font-japanese">来ます</span> (kimasu)
            </li>
          </ul>
        </li>
      </ol>

      <div class="mt-2 flex items-center justify-between">
        <h2 class="max-w-32 text-center font-semibold">
          Godan Verb Ending Examples
        </h2>
        <div class="flex w-full justify-center">
          <div class="grid grid-cols-3 gap-x-6 gap-y-0 font-japanese text-lg">
            <div>
              <Furigana furigana={<span class="text-xs">うた</span>}>
                歌
              </Furigana>
              <span class="font-medium">う</span>{" "}
              <span class="font-inter">{"->"}</span> 歌
              <span class="font-medium">い</span>ます
            </div>
            <div>
              <Furigana furigana={<span class="text-xs">き</span>}>聞</Furigana>
              <span class="font-medium">く</span>{" "}
              <span class="font-inter">{"->"}</span> 聞
              <span class="font-medium">き</span>ます
            </div>
            <div>
              <Furigana furigana={<span class="text-xs">およ</span>}>
                泳
              </Furigana>
              <span class="font-medium">ぐ</span>{" "}
              <span class="font-inter">{"->"}</span> 泳
              <span class="font-medium">ぎ</span>ます
            </div>
            <div>
              <Furigana furigana={<span class="text-xs">はな</span>}>
                話
              </Furigana>
              <span class="font-medium">す</span>{" "}
              <span class="font-inter">{"->"}</span> 話
              <span class="font-medium">し</span>ます
            </div>
            <div>
              <Furigana furigana={<span class="text-xs">も</span>}>持</Furigana>
              <span class="font-medium">つ</span>{" "}
              <span class="font-inter">{"->"}</span> 持
              <span class="font-medium">ち</span>ます
            </div>
            <div>
              <Furigana furigana={<span class="text-xs">し</span>}>死</Furigana>
              <span class="font-medium">ぬ</span>{" "}
              <span class="font-inter">{"->"}</span> 死
              <span class="font-medium">に</span>ます
            </div>
            <div>
              <Furigana furigana={<span class="text-xs">あそ</span>}>
                遊
              </Furigana>
              <span class="font-medium">ぶ</span>{" "}
              <span class="font-inter">{"->"}</span>遊
              <span class="font-medium">び</span>ます
            </div>
            <div>
              <Furigana furigana={<span class="text-xs">の</span>}>飲</Furigana>
              <span class="font-medium">む</span>{" "}
              <span class="font-inter">{"->"}</span>
              <span class="font-medium">み</span>ます
            </div>
            <div>
              <Furigana furigana={<span class="text-xs">かえ</span>}>
                帰
              </Furigana>
              <span class="font-medium">る</span>{" "}
              <span class="font-inter">{"->"}</span>帰
              <span class="font-medium">り</span>ます
            </div>
          </div>
        </div>
      </div>

      <div class="absolute right-6 text-sm font-light italic">
        *Think shifting characters from the{" "}
        <span class="font-japanese not-italic">う</span> to the{" "}
        <span class="font-japanese not-italic">い</span> column.
      </div>

      <div class="mt-3">
        <h2 class="text-lg font-semibold">
          Note on <span class="font-japanese">する</span> Compounds
        </h2>
        <ul class="list-inside list-disc">
          <li>
            Many nouns + <span class="font-japanese">する</span> create compound
            verbs
          </li>
          <li>
            Example: <span class="font-japanese">勉強する</span> {"->"}{" "}
            <span class="font-japanese">勉強します</span>
          </li>
        </ul>
      </div>

      <div class="absolute bottom-4 right-6 text-sm italic">
        *Change{" "}
        <span class="font-japanese not-italic text-emerald-500">ます</span> to{" "}
        <span class="font-japanese not-italic text-orange-400">ません</span> for
        negative!
      </div>
    </div>
  )
}
