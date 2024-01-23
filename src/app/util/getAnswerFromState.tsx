export default function GetAnswerFromState(
  compareFirst: boolean,
  compareSecond: boolean,
  question: { value: { hiragana: string; english: string; mnemonics?: string } }
) {
  let correctAnswerText = ""
  if (compareFirst) {
    correctAnswerText += question.value.hiragana
  }
  if (compareSecond) {
    if (correctAnswerText.length > 0) {
      correctAnswerText += " / "
    }
    correctAnswerText += question.value.english
  }
  return correctAnswerText
}
