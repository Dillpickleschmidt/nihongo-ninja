/*
This function takes in a question object and returns the correct answer text based on the
state of the compareHiragana and compareEnglish booleans.
Ex: If compareHiragana is true and compareEnglish is false, the function will return the
correct hiragana answer.
Ex: If compareHiragana is false and compareEnglish is true, the function will return the
correct english answer.
Ex: If compareHiragana is true and compareEnglish is true, the function will return the
correct hiragana answer followed by a slash and the correct english answer.
*/

export default function GetAnswerFromState(
  compareHiragana: boolean,
  compareEnglish: boolean,
  question: {
    value: { hiragana?: string[]; english?: string[]; mnemonics?: string }
  }
) {
  let correctAnswerText = ""
  if (compareHiragana) {
    correctAnswerText += question.value.hiragana
  }
  if (compareEnglish) {
    if (
      correctAnswerText.length > 0 && // If there is already a correct answer (hiragana)
      question.value.english &&
      question.value.english[0]
    ) {
      // If there is already a correct answer, add a slash + the correct answer
      correctAnswerText += " / "
      correctAnswerText += question.value.english.join(" / ")
    } else if (question.value.english && question.value.english[0]) {
      // If there is no existing correct answer, add the correct answer
      correctAnswerText += question.value.english.join(" / ")
    }
  }
  return correctAnswerText
}
