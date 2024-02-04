import Dialog from "@/components/dialog"
import SignOut from "@/app/auth/components/SignOut"

export default function Profile() {
  return (
    <Dialog variant={"profile"} locked={false}>
      <div className="mt-24 p-6 space-y-4">
        <h1 className="font-bold text-2xl ">Your Profile</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo maiores
          enim molestiae consequuntur ipsa ducimus repellendus optio. At, vel
          recusandae.
        </p>
        {/* <SignOut /> */}
      </div>
    </Dialog>
  )
}
