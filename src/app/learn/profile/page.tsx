import Dialog from "@/app/components/dialog"

export default function Profile() {
  return (
    <Dialog variant={"profile"} locked={false}>
      <h1 className="text-3xl text-center">Profile</h1>
    </Dialog>
  )
}
