import Furigana from "@/components/text/Furigana"

export default function PoliteInvitations() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        Polite Invitations with{" "}
        <span class="font-japanese text-teal-500">ませんか</span>
      </h1>

      <div class="mt-3">
        <h2 class="text-lg font-semibold">Structure</h2>
        <p>
          Verb (negative <span class="font-japanese">ます</span> form) +{" "}
          <span class="font-japanese">か</span>
        </p>
      </div>

      <div class="mt-2 text-center">
        <p class="font-japanese">映画を見ませんか。</p>
        <p class="text-sm">Would you like to watch a movie?</p>
      </div>

      <h2 class="mt-1 text-lg font-semibold">Usage</h2>
      <ul class="list-inside list-disc">
        <li>Polite way to suggest doing something together</li>
        <li>Equivalent to "Won't you...?" or "Why don't we...?" in English</li>
      </ul>

      <div class="mt-2 text-center">
        <p class="font-japanese">一緒に食べませんか。</p>
        <p class="text-sm">Would you like to eat together?</p>
      </div>

      <h2 class="mt-4 text-center text-lg font-semibold">
        Accepting an Invitation
      </h2>
      <p class="mt-1">
        Use <span class="font-japanese">いいです</span> with particles like{" "}
        <span class="font-japanese">ね</span> or{" "}
        <span class="font-japanese">よ</span>:
      </p>

      <div class="mt-2">
        <div class="flex w-full items-center">
          <p class="w-1/4 font-semibold">Invitation:</p>
          <p class="w-3/4 font-japanese">映画を見ませんか。</p>
        </div>
        <div class="flex w-full items-center">
          <p class="w-1/4 font-semibold">Accepting:</p>
          <p class="w-3/4 font-japanese">はい、いいですね。 / いいですよ。</p>
        </div>
      </div>

      <h2 class="mt-4 text-center text-lg font-semibold">
        Declining an Invitation
      </h2>
      <p class="mt-1">Use indirect methods to politely decline:</p>

      <div class="mt-2">
        <h3 class="text-base font-semibold">
          <span class="font-japanese">ちょっと</span> (chotto)
        </h3>
        <ul class="list-inside list-disc">
          <li>Literal meaning: "A little" or "slightly"</li>
          <li>Used as a softener for indirect refusal</li>
        </ul>
        <p class="mt-1 text-center font-japanese">
          あ、今日は
          <span class="font-medium text-orange-500">ちょっと</span>...
        </p>
        <p class="text-center text-sm">Ah, today is a bit...</p>
      </div>

      <div class="mt-1">
        <h3 class="text-base font-semibold">
          <span class="font-japanese">大丈夫</span> (daijōbu)
        </h3>
        <ul class="list-inside list-disc">
          <li>Literal meaning: "All right" or "OK"</li>
          <li>Used for polite refusal</li>
        </ul>
        <p class="mt-1 text-center font-japanese">
          ありがとうございます。でも、
          <span class="font-medium text-green-500">大丈夫</span>です。
        </p>
        <p class="text-center text-sm">Thank you, but I'm fine.</p>
      </div>

      <h2 class="mt-3 text-lg font-semibold">Additional Usage</h2>
      <p>
        <span class="font-japanese">ませんか</span> can occasionally be used to
        confirm a negative statement:
      </p>
      <div class="mt-2 text-center">
        <p class="font-japanese">そうですか。全然しませんか。</p>
        <p class="text-sm">Is that so? He doesn't study at all?</p>
      </div>
    </div>
  )
}
