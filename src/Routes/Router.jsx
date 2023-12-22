import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Components/Register/Register";
// import Dashboard from "../Pages/Dashboard/Dashboard";
import Dboard from "../Pages/Dashboard/Dboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
            path : "/login",
            element : <Login></Login>
        },
        {
            path : '/register',
            element : <Register></Register>
        },
        {
            path : '/dashboard',
            // element : <Dashboard></Dashboard>
            element : <Dboard></Dboard>
        }
      ]
    },
  ]);

  export default router;