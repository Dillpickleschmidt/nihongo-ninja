// learn.tsx
// Acts as a layout component for the learn page
import { LearnPageProvider } from "@/features/learn-page/context/LearnPageContext"

export default function learn(props: { children: any }) {
  return (
    <>
      <main>
        <LearnPageProvider>{props.children}</LearnPageProvider>
      </main>
    </>
  )
}
