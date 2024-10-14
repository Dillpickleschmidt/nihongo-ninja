import Furigana from "@/components/text/Furigana"

export default function WoDeNiEParticles() {
  return (
    <div class="relative h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        Understanding The <span class="font-japanese text-red-500">を</span>,{" "}
        <span class="font-japanese text-orange-400">で</span>,{" "}
        <span class="font-japanese text-green-500">に</span>, and{" "}
        <span class="font-japanese text-sky-400">へ</span> Particles
      </h1>

      <div class="mt-3">
        <h2 class="text-lg font-semibold">
          Function of{" "}
          <span class="font-japanese text-xl font-bold text-red-500">を</span>{" "}
          (o)
        </h2>
        <p>
          The particle{" "}
          <span class="font-japanese font-semibold text-red-500">を</span> marks
          the <u>direct object</u> of an action verb. It indicates what or who
          is receiving the action.
        </p>
      </div>

      <div class="mt-2 text-center">
        <p>
          <span class="font-japanese">本を読みます。</span> - I read a book.
        </p>
        <p>
          <span class="font-japanese">日本語を勉強します。</span> - I study
          Japanese.
        </p>
      </div>

      <h2 class="mt-4 text-lg font-semibold">
        Function of{" "}
        <span class="font-japanese text-xl font-bold text-orange-400">で</span>{" "}
        (de)
      </h2>
      <p>
        The particle{" "}
        <span class="font-japanese font-semibold text-orange-400">で</span>{" "}
        indicates the <u>means</u> by which an action is performed, the{" "}
        <u>location</u> where an action takes place, or <u>reason/cause</u>.
      </p>
      <p class="mt-2">
        <strong>Think "utilization":</strong> If you can rephrase the sentence
        as "I utilize A to do B," then{" "}
        <span class="font-japanese font-semibold text-orange-400">で</span> is
        likely correct.
      </p>

      <div class="mt-2 text-center">
        <p>
          <span class="font-japanese">ペンで書きます。</span> - I write with a
          pen.
        </p>
        <p>
          <span class="font-japanese">図書館で 勉強します。</span> - I study at
          the library.
        </p>
      </div>

      <h2 class="mt-4 text-lg font-semibold">
        Function of{" "}
        <span class="font-japanese text-xl font-bold text-green-500">に</span>{" "}
        (ni) and{" "}
        <span class="font-japanese text-xl font-bold text-sky-400">へ</span> (e)
      </h2>
      <p>
        The particles{" "}
        <span class="font-japanese font-semibold text-green-500">に</span> and{" "}
        <span class="font-japanese font-semibold text-sky-400">へ</span> are
        often used interchangeably to indicate <u>direction</u> or{" "}
        <u>destination</u>.
      </p>
      <p class="mt-2">
        <span class="font-japanese font-semibold text-green-500">に</span> has
        additional uses:
      </p>
      <ul class="list-inside list-disc">
        <li>Specific point in time</li>
        <li>Indirect object</li>
        <li>
          Location of existence (with <span class="font-japanese">いる</span>{" "}
          and <span class="font-japanese">ある</span>)
        </li>
      </ul>

      <div class="mt-2 text-center">
        <p>
          <span class="font-japanese">学校に行きます。</span> /{" "}
          <span class="font-japanese">学校へ行きます。</span> - I go to school.
        </p>
        <p>
          <span class="font-japanese">7時に起きます。</span> - I wake up at 7
          o'clock.
        </p>
        <p>
          <span class="font-japanese">友達に プレゼントをあげます。</span> - I
          give a present to my friend.
        </p>
      </div>

      <h2 class="mt-6 text-lg font-semibold">
        Key Differences: <span class="font-japanese text-orange-400">で</span>{" "}
        vs <span class="font-japanese text-green-500">に</span>
      </h2>
      <p>
        Use <span class="font-japanese font-semibold text-orange-400">で</span>{" "}
        for locations where actions occur. Use{" "}
        <span class="font-japanese font-semibold text-green-500">に</span> for
        destinations, points in time, or locations of existence.
      </p>

      <div class="mt-2 text-center">
        <p>
          <span class="font-japanese">
            図書館<span class="font-bold text-orange-400">で</span>
            勉強します。
          </span>{" "}
          - I study at the library. (Action location)
        </p>
        <p>
          <span class="font-japanese">
            図書館<span class="font-bold text-green-500">に</span>行きます。
          </span>{" "}
          - I go to the library. (Destination)
        </p>
        <p>
          <span class="font-japanese">
            図書館<span class="font-bold text-green-500">に</span>
            本があります。
          </span>{" "}
          - There are books in the library. (Existence)
        </p>
      </div>
    </div>
  )
}
