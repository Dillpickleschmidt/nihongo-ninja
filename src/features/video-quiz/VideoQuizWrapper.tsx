import { VideoQuizProvider } from "./context/VideoQuizContext"
import VideoQuiz from "./VideoQuiz"

export default function VideoQuizWrapper() {
  return (
    <VideoQuizProvider>
      <VideoQuiz />
    </VideoQuizProvider>
  )
}
