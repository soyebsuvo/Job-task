import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function MainLayouts() {
    const location = useLocation();
    let isLog = location.pathname === "/login" || location.pathname === "/register";
    return (
        <div className="max-w-7xl mx-auto">
            <div className={`${isLog ? 'hidden' : 'flex'}`}>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className={`${isLog ? 'hidden' : 'flex'}`}>
                <Footer></Footer>
            </div>
        </div>
    )
}
