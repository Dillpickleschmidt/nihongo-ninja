/*
This component has the following logic:

It converts the JSON object to an array of { key, value } objects
It creates a duplicate array
It gets the index of the term entry
It gets the term entry using the index
It shuffles the duplicate array within the bounds of the lowest range to the highest range (based around the index of the term entry)
It selects the first 3 entries from the shuffled range in the duplicate array
If the term entry exists and is not already in the random entries, it adds it
If randomEntries still has less than 4 entries, it adds more from the array in the shuffled range
It shuffles the random entries

In essence, it's keeping a range of x entries from the array based around the index of the term that's matched, and shuffling that range, and then selecting the first 3 entries from that shuffled range. Then it adds the term entry if it's not already in the random entries, and then adds more entries from the array in the shuffled range if randomEntries still has less than 4 entries. Finally, it shuffles the 4 entries.
*/

type ShuffleProps = {
  vocabArray: { key: string; value: string[] }[]
  currentVocabArrayIndex: number
}

export default function ShuffleRange({
  vocabArray,
  currentVocabArrayIndex,
}: ShuffleProps) {
  // Create a duplicate array
  const duplicateArray = [...vocabArray]

  // Get the term entry using the index
  const termEntry =
    currentVocabArrayIndex !== -1
      ? duplicateArray[currentVocabArrayIndex]
      : undefined

  var lowestRange = currentVocabArrayIndex - 3
  var highestRange = currentVocabArrayIndex + 7

  if (lowestRange < 0) {
    // If the lowest range is less than 0, increase the highest range by the absolute value of the lowest range
    highestRange = highestRange - lowestRange
    lowestRange = 0
  }
  if (highestRange > duplicateArray.length) {
    // If the highest range is greater than the length of the duplicate array, decrease the lowest range by the difference between the highest range and the length of the duplicate array
    lowestRange = lowestRange - (highestRange - duplicateArray.length)
    highestRange = duplicateArray.length
  }

  // Shuffle from lowestRange to highestRange in the duplicate array
  const rangeToShuffle = duplicateArray.slice(lowestRange, highestRange)
  for (let i = rangeToShuffle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[rangeToShuffle[i], rangeToShuffle[j]] = [
      rangeToShuffle[j],
      rangeToShuffle[i],
    ]
  }
  // Update the shuffled range back into the duplicate array
  duplicateArray.splice(lowestRange, rangeToShuffle.length, ...rangeToShuffle)

  // Select the first 3 entries from the shuffled range in the duplicate array
  const randomEntries = duplicateArray.slice(lowestRange, lowestRange + 3)

  // If the term exists and is not already in the random entries, add it
  if (termEntry && !randomEntries.includes(termEntry)) {
    randomEntries.push(termEntry)
  }

  // If randomEntries still has less than 4 entries, add more from the array in the shuffled range
  while (randomEntries.length < 4) {
    const nextEntry = duplicateArray[lowestRange + randomEntries.length + 1]
    if (nextEntry && !randomEntries.includes(nextEntry)) {
      randomEntries.push(nextEntry)
    }
  }

  // Shuffle the random entries
  for (let i = 0; i < randomEntries.length; i++) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[randomEntries[i], randomEntries[j]] = [randomEntries[j], randomEntries[i]]
  }

  // Return values
  // If the value has more than 1 entry, the first entry is the hiragana
  const hiraganaValues = randomEntries.map(
    (entry) => entry.value.length > 1 && entry.value[0]
  )
  // If the value has more than 1 entry, the second entry is the english. Else, the first entry is the english
  const englishValues = randomEntries.map((entry) =>
    entry.value.length > 1 ? entry.value[1] : entry.value[0]
  )

  // Return keys
  const termKey = termEntry?.key
  const keys = randomEntries.map((entry) => entry.key)

  return [hiraganaValues, englishValues, termKey, keys]
}
