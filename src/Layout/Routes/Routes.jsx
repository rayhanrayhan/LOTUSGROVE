import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../Page/Home/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Instructors from "../../Pages/Instructors/Instructors";
import Classes from "../../Pages/Classes/Classes";
import Error from "../../Pages/Error/Error";
import Dashboard from "../Dashboard";
import SelectedClasses from "../../Pages/Dashboard/SelectedClasses";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "instructor",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "selectedClass",
        element: <SelectedClasses></SelectedClasses>,
      },
    ],
  },
]);
