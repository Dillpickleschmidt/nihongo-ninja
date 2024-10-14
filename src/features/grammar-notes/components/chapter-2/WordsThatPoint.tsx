export default function WordsThatPoint() {
  return (
    <div class="relative h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">Words That Point</h1>
      <div class="mt-4 overflow-x-auto text-base">
        <table class="min-w-full border-collapse">
          <thead class="bg-neutral-200 dark:bg-white/85">
            <tr>
              <th class="border border-black py-1 font-medium"> </th>
              <th class="border border-black py-1">Things</th>
              <th class="border border-black py-1">Things (more specific)</th>
              <th class="border border-black py-1">Place</th>
              <th class="border border-black py-1">Person / Direction</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white/50">
              <td class="border border-black px-4 py-1">
                Close to the speaker
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                これ
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                この
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                ここ
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                こちら
              </td>
            </tr>
            <tr class="bg-white/50">
              <td class="border border-black px-4 py-1">
                Close to the listener
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                それ
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                その
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                そこ
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                そちら
              </td>
            </tr>
            <tr class="bg-white/50">
              <td class="border border-black px-4 py-1">Far from both</td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                あれ
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                あの
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                あそこ
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                あちら
              </td>
            </tr>
            <tr class="bg-white/50">
              <td class="border border-black px-4 py-1">Which?</td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                どれ
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                どの
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                どこ
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                どちら
              </td>
            </tr>
            <tr class="bg-white/50">
              <td class="border border-black px-4 py-1 leading-5">
                Can stand{" "}
                <span class="font-semibold text-emerald-500">alone</span> / Must
                have a <span class="font-semibold text-indigo-500">noun</span>
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                <span class="text-emerald-500">●</span>
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                <span class="text-indigo-500">○</span>
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                <span class="text-emerald-500">●</span>
              </td>
              <td class="whitespace-nowrap border border-black px-4 py-1 text-center font-japanese text-lg">
                <span class="text-emerald-500">●</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="ml-1 mt-3 italic">
        *Question words like <span class="font-japanese not-italic">どれ</span>,{" "}
        <span class="font-japanese not-italic">どの</span>, and{" "}
        <span class="font-japanese not-italic">なに</span> cannot be followed by
        the particle <span class="font-japanese not-italic">は</span>. Instead,
        they are followed by <span class="font-japanese not-italic">が</span>.
      </p>

      <div class="mt-2 flex justify-center">
        <div class="mb-3 border-b-2 border-black">
          <h2 class="text-lg font-semibold italic">Example Sentences</h2>
        </div>
      </div>
      <p>
        <span class="font-japanese">
          <span class="font-semibold text-sky-400">これ</span>
          はペンです。
        </span>{" "}
        {"->"} This is a pen.
      </p>
      <p>
        <span class="font-japanese">
          <span class="font-semibold text-sky-400">それ</span>
          はペンです。
        </span>{" "}
        {"->"} That is a pen.
      </p>
      <p>
        <span class="font-japanese">
          <span class="font-semibold text-sky-400">あれ</span>はペンです。
        </span>{" "}
        {"->"} That (over there) is a pen.
      </p>
      <p>
        <span class="font-japanese">
          <span class="font-semibold text-sky-400">どれ</span>
          がペンですか。
        </span>{" "}
        {"->"} Which one is the pen?
      </p>

      <p class="mt-2">
        <span class="font-japanese">
          <span class="font-semibold text-red-500">この</span>
          ペンは高いです。
        </span>{" "}
        {"->"} This pen is expensive.
      </p>
      <p>
        <span class="font-japanese">
          <span class="font-semibold text-red-500">その</span>
          そのペンは高いです。
        </span>{" "}
        {"->"} That pen is expensive.
      </p>
      <p>
        <span class="font-japanese">
          <span class="font-semibold text-red-500">あの</span> ペンは高いです。
        </span>{" "}
        {"->"} That pen (over there) is expensive.
      </p>
      <p>
        <span class="font-japanese">
          <span class="font-semibold text-red-500">どの</span>
          ペンが高いですか。
        </span>{" "}
        {"->"} Which pen is expensive?
      </p>

      <p class="mt-2">
        <span class="font-japanese">
          <span class="font-semibold text-orange-400">ここ</span>
          はオフィスです。
        </span>{" "}
        {"->"} Here is the office.
      </p>
      <p>
        <span class="font-japanese">
          <span class="font-semibold text-orange-400">そこ</span>
          はオフィスです。
        </span>{" "}
        {"->"} There is the office.
      </p>
      <p>
        <span class="font-japanese">
          <span class="font-semibold text-orange-400">あそこ</span>
          はオフィスです。
        </span>{" "}
        {"->"} Over there is the office.
      </p>
      <p>
        <span class="font-japanese">
          オフィスは
          <span class="font-semibold text-orange-400">どこ</span>
          ですか。
        </span>{" "}
        {"->"} Where is the office?
      </p>

      <p class="mt-2">
        <span class="font-japanese">
          <span class="font-semibold text-green-400">こちら</span>
          は田中さんです。
        </span>{" "}
        {"->"} This is Mr. Tanaka.
      </p>
      <p>
        <span class="font-japanese">
          <span class="font-semibold text-green-400">そちら</span>
          は山田さんですか。
        </span>{" "}
        {"->"} Is that Mr. Yamada?
      </p>
      <p>
        <span class="font-japanese">
          <span class="font-semibold text-green-400">あちら</span>
          は部長です。
        </span>{" "}
        {"->"} That is the department manager over there.
      </p>
      <p>
        <span class="font-japanese">
          <span class="font-semibold text-green-400">どちら</span>
          様ですか。
        </span>{" "}
        {"->"} Who are you? (very polite)
      </p>

      <p class="mt-2 text-center text-sm italic">
        *Japanese doesn't distinguish singular from plural!
      </p>
    </div>
  )
}
