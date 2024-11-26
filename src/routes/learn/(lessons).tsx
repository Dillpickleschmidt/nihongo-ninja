import StandardBackground from "@/components/StandardBackground"

export default function lessons(props: { children: any }) {
  return (
    <>
      <StandardBackground />
      {props.children}
    </>
  )
}
