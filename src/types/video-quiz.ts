export type QuizItem = {
  image: string
  videoId?: string
  dimensions: {
    width: number
    height: number
  }
  prompt: string
  answers: string[]
}
