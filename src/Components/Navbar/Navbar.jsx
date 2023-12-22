import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/Task.png'
import './navbar.css'
import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"

export default function Navbar() {
    const { user , logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout().then().catch()
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/rules">Rules</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>
    return (
        <div className={`md:px-16 absolute max-w-7xl mx-auto w-full`}>
            <nav className="w-full">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <a className="text-xl">
                            <img src={logo} className="w-40" alt="" />
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-white">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ? <button onClick={handleLogout} className="text-white hover:shadow-lg hover:shadow-white duration-200 border px-4 py-1 border-white cursor-pointer">Logout</button> : 
                        <Link to="/login"><button className="text-white hover:shadow-lg hover:shadow-white duration-200 border px-4 py-1 border-white cursor-pointer">Login</button></Link>
                        }
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}
