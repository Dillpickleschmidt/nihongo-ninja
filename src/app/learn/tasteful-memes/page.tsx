import Dialog from "@/components/Dialog"

export default function TastefulMemes() {
  return (
    <Dialog variant={"blank"}>
      <div className="">
        <iframe
          src="https://giphy.com/embed/CLrEXbY34xfPi"
          width="480"
          height="376"
          className="mx-auto mt-24 giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
    </Dialog>
  )
}
