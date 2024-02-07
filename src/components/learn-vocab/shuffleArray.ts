// Basic Fisher-Yates shuffle algorithm to shuffle an array of vocab objects

export default function ShuffleArray({ vocabArray }: { vocabArray: any[] }) {
  const shuffledArray = [...vocabArray]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}
