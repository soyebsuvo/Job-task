import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

export default function SocialLogins() {
    const location = useLocation();
    const navigate = useNavigate();
    const { googleLogin , githubLogin } = useContext(AuthContext);
    const othersLogin = (media) => {
        media().then(result => {
            console.log(result.user);
            navigate(location.state ? location.state : '/');
        }).catch(error => {
            console.log(error)
        })
    }
  return (
    <div className="flex gap-5 justify-center">
      <button onClick={() => othersLogin(googleLogin)} className="text-white border border-white px-4 py-1 rounded-lg flex justify-center items-center gap-3"><FcGoogle />Google</button>
      <button onClick={() => othersLogin(githubLogin)} className="text-white border border-white px-4 py-1 rounded-lg flex justify-center items-center gap-3"><FaGithub />Github</button>
    </div>
  )
}
