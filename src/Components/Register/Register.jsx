import { Link, useNavigate } from "react-router-dom";
import SocialLogins from "../SocialLogins/SocialLogins";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

export default function Register() {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(res => {
                console.log(res.user);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center bg-[#1E3144] px-96 py-8">
                <div className="flex flex-col w-full lg:flex-row-reverse justify-center items-center">
                    <div className="card w-full shadow-2xl bg-[#2C4352]">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h2 className="text-4xl font-bold text-center text-white">Sign Up</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Full Name</span>
                                </label>
                                <input {...register("name")} type="text" placeholder="Name" className="input input-bordered bg-[#1E3144] text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="email" className="input input-bordered bg-[#1E3144] text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input {...register("password")} type="password" placeholder="password" className="input input-bordered bg-[#1E3144] text-white" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="text-white duration-200 border px-4 py-1 border-white cursor-pointer">Sign Up</button>
                                <p className="text-center mt-4 text-white">Already have an account? Please <Link className="text-blue-500 font-bold underline" to="/login">Login</Link></p>
                            </div>
                            <div className="divider divider-[#EEE] text-white">Or</div>

                        </form>
                        <div className="mb-8 -mt-4">
                            <SocialLogins></SocialLogins>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
