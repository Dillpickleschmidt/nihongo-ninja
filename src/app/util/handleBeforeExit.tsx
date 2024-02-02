import { useEffect } from "react"
export default function HandleBeforeExit() {
  useEffect(() => {
    const handleBeforeExit = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = "You will lose your progress if you leave the page."
    }

    window.addEventListener("beforeunload", handleBeforeExit)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeExit)
    }
  }, [])
}
