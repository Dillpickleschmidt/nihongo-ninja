import { ErrorRange } from "../types"

interface ComparisonResult {
  userErrors: ErrorRange[]
  answerErrors: ErrorRange[]
  similarity: number
}

export const findDifferences = (
  str1: string,
  str2: string,
): ComparisonResult => {
  const m = str1.length
  const n = str2.length
  const dp: number[][] = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0))
  const backtrack: string[][] = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(""))

  // Fill the dp table and track directions
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        backtrack[i][j] = "diag"
      } else if (dp[i - 1][j] >= dp[i][j - 1]) {
        dp[i][j] = dp[i - 1][j]
        backtrack[i][j] = "up"
      } else {
        dp[i][j] = dp[i][j - 1]
        backtrack[i][j] = "left"
      }
    }
  }

  // Reconstruct the matches and find differences
  const userErrors: ErrorRange[] = []
  const answerErrors: ErrorRange[] = []
  let lastInputPos = 0
  let lastAnswerPos = 0
  let matchCount = 0

  let i = m
  let j = n
  const matches: Array<{ input: number; answer: number }> = []

  while (i > 0 && j > 0) {
    if (backtrack[i][j] === "diag") {
      matches.unshift({ input: i - 1, answer: j - 1 })
      i--
      j--
    } else if (backtrack[i][j] === "up") {
      i--
    } else {
      j--
    }
  }

  // Convert matches into error ranges
  matches.forEach(({ input: inputPos, answer: answerPos }) => {
    if (inputPos > lastInputPos) {
      userErrors.push({
        start: lastInputPos,
        end: inputPos,
      })
    }
    if (answerPos > lastAnswerPos) {
      answerErrors.push({
        start: lastAnswerPos,
        end: answerPos,
      })
    }
    matchCount++
    lastInputPos = inputPos + 1
    lastAnswerPos = answerPos + 1
  })

  // Handle remaining characters
  if (lastInputPos < str1.length) {
    userErrors.push({
      start: lastInputPos,
      end: str1.length,
    })
  }
  if (lastAnswerPos < str2.length) {
    answerErrors.push({
      start: lastAnswerPos,
      end: str2.length,
    })
  }

  return {
    userErrors,
    answerErrors,
    similarity: matchCount / Math.max(str1.length, str2.length),
  }
}
