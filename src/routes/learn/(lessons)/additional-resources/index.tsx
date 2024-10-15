import { Title } from "@solidjs/meta"
import { A } from "@solidjs/router"

export default function page() {
  return (
    <>
      <Title>Nihongo Ninja - Additional Resources</Title>
      <div class="min-h-screen px-12 pb-28 sm:px-16 md:px-24">
        {/* <ListeningMaterial /> */}
        <ol class="list-decimal space-y-6 pt-24 text-2xl">
          <li>
            <A
              href="/learn/additional-resources/kanji-practice-sheet"
              class="font-japanese text-sky-400 hover:cursor-pointer"
            >
              漢字練習シート
            </A>
          </li>
        </ol>
      </div>
    </>
  )
}
