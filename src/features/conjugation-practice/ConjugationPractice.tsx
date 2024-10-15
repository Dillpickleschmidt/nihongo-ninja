import { SettingsContextProvider } from "./context/SettingsContext"
import ConjugationPracticePageHandler from "./ConjugationPracticePageHandler"

export default function ConjugationPractice() {
  return (
    <SettingsContextProvider>
      <ConjugationPracticePageHandler />
    </SettingsContextProvider>
  )
}
