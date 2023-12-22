import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SocialLogins() {
  return (
    <div className="flex gap-5 justify-center">
      <button className="text-white border border-white px-4 py-1 rounded-lg flex justify-center items-center gap-3"><FcGoogle />Google</button>
      <button className="text-white border border-white px-4 py-1 rounded-lg flex justify-center items-center gap-3"><FaGithub />Github</button>
    </div>
  )
}
