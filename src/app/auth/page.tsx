import MainForm from "./components/MainForm"

export default async function page() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[500px] border shadow-sm p-5 rounded-sm space-y-4">
        <h1 className="font-bold text-2xl ">Welcome to NihongoNinja!</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo maiores
          enim molestiae consequuntur ipsa ducimus repellendus optio. At, vel
          recusandae.
        </p>
        <MainForm />
      </div>
    </div>
  )
}
