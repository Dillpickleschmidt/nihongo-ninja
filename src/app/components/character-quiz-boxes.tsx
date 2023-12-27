// Hiragana characters
export const mainKana = [
  "あ",
  "い",
  "う",
  "え",
  "お",
  "か",
  "き",
  "く",
  "け",
  "こ",
  "さ",
  "し",
  "す",
  "せ",
  "そ",
  "た",
  "ち",
  "つ",
  "て",
  "と",
  "な",
  "に",
  "ぬ",
  "ね",
  "の",
  "は",
  "ひ",
  "ふ",
  "へ",
  "ほ",
  "ま",
  "み",
  "む",
  "め",
  "も",
  "や",
  "ゆ",
  "よ",
  "ら",
  "り",
  "る",
  "れ",
  "ろ",
  "わ",
  "を",
  "ん",
]

export const dakuten = [
  "が",
  "ぎ",
  "ぐ",
  "げ",
  "ご",
  "ざ",
  "じ",
  "ず",
  "ぜ",
  "ぞ",
  "だ",
  "ぢ",
  "づ",
  "で",
  "ど",
  "ば",
  "ぱ",
  "び",
  "ぴ",
  "ぶ",
  "ぷ",
  "べ",
  "ぺ",
  "ぼ",
  "ぽ",
]

export const yoon = [
  "きゃ",
  "きゅ",
  "きょ",
  "ぎゃ",
  "ぎゅ",
  "ぎょ",
  "しゃ",
  "しゅ",
  "しょ",
  "じゃ",
  "じゅ",
  "じょ",
  "ちゃ",
  "ちゅ",
  "ちょ",
  "ぢゃ",
  "ぢゅ",
  "ぢょ",
  "にゃ",
  "にゅ",
  "にょ",
  "ひゃ",
  "ひゅ",
  "ひょ",
  "びゃ",
  "びゅ",
  "びょ",
  "ぴゃ",
  "ぴゅ",
  "ぴょ",
  "みゃ",
  "みゅ",
  "みょ",
  "りゃ",
  "りゅ",
  "りょ",
]

export const allKana = [...mainKana, ...dakuten, ...yoon]

// Boxes with a letters in them
function letterBox(letter: string) {
  return (
    <p className="m-1 text-[3.5rem] h-52 bg-[#222222] shadow-lg shadow-[#645947] rounded-[12px]">
      {letter}
      <div className="mt-8 mb-4 text-[2.5rem] text-red-400">
        <input
          type="text"
          className="w-28 bg-[#191919] bg-opacity-0 border-2 border-[#aaaaaa] border-dashed rounded-xl text-center"
        />
      </div>
    </p>
  )
}

// Displays all the letter boxes
export function LetterBoxes({ kana }: { kana: string[] }) {
  const randomizedCharacters = [...kana].sort(() => Math.random() - 0.5)
  return randomizedCharacters.map((character) => letterBox(character))
}
