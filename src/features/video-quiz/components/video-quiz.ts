import { QuizItem } from "@/types/video-quiz"

export function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5)
}

export function presentVideoQuestion(quizData: QuizItem[]): QuizItem {
  if (quizData.length < 1) {
    throw new Error("Entries is empty, cannot pick a correct key.")
  }

  return quizData[0]
}

export function handleVideoAnswer(
  userAnswer: string,
  correctOption: QuizItem,
): boolean {
  return correctOption.answers.includes(userAnswer)
}

export function preloadVideos(quizData: QuizItem[]): void {
  quizData.forEach((item, index) => {
    if (item.videoId) {
      const video = document.createElement("video")
      video.src = `/api/video/${item.videoId}`
      video.preload = "auto"
      // Add a small delay to each subsequent video to avoid overwhelming the network
      setTimeout(() => {
        document.body.appendChild(video)
        document.body.removeChild(video)
      }, index * 100)
    }
  })
}
