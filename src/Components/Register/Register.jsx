import { Link } from "react-router-dom";
import SocialLogins from "../SocialLogins/SocialLogins";

export default function Register() {
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center bg-[#1E3144] px-96 py-8">
                <div className="flex flex-col w-full lg:flex-row-reverse justify-center items-center">
                    <div className="card w-full shadow-2xl bg-[#2C4352]">
                        <form className="card-body">
                            <h2 className="text-4xl font-bold text-center text-white">Sign Up</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Full Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered bg-[#1E3144] text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered bg-[#1E3144] text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered bg-[#1E3144] text-white" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="text-white duration-200 border px-4 py-1 border-white cursor-pointer">Sign Up</button>
                                <p className="text-center mt-4 text-white">Already have an account? Please <Link className="text-blue-500 font-bold" to="/login">Login</Link></p>
                            </div>
                            <div className="divider divider-[#EEE] text-white">Or</div>
                            <div className="mb-6">
                                <SocialLogins></SocialLogins>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
