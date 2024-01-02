export default function GetAnswerFromState(
  compareFirst: boolean,
  compareSecond: boolean,
  question: { value: string[] }
) {
  let correctAnswerText = ""
  if (compareFirst) {
    correctAnswerText += question.value[0]
  }
  if (compareSecond) {
    if (correctAnswerText.length > 0) {
      correctAnswerText += " "
    }
    correctAnswerText += question.value[1]
  }
  return correctAnswerText
}
