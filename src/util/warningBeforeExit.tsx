import { useEffect } from "react"
export default function warningBeforeExit() {
  useEffect(() => {
    const warningBeforeExit = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = "You will lose your progress if you leave the page."
    }

    window.addEventListener("beforeunload", warningBeforeExit)

    return () => {
      window.removeEventListener("beforeunload", warningBeforeExit)
    }
  }, [])
}
