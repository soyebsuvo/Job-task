import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-[#1E3144] h-screen">
      <h2 className="text-5xl text-white font-bold py-2">404</h2>
      <p className="text-xl text-white">Page Not Found</p>
      <Link to="/"><button className="text-white px-3 py-1 border border-white font-bold mt-4">Go Home</button></Link>
    </div>
  )
}
