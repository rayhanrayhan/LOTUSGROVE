import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import Home from "../../Page/Home/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Instructors from "../../Pages/Instructors/Instructors";

export const router = createBrowserRouter([
  {
    path: "/",
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
    ],
  },
]);
