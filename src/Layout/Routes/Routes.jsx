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
import EnrolledClasses from "../../Pages/Dashboard/EnrolledClasses";
import MyClasses from "../../Pages/Dashboard/MyClasses";
import AddAClass from "../../Pages/Dashboard/AddAClass";
import ManageClasses from "../../Pages/Dashboard/ManageClasses";
import ManageUsers from "../../Pages/Dashboard/ManageUsers";
import Feedback from "../../Pages/Dashboard/Feedback";
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
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "feedback/:id",
        element: <Feedback></Feedback>,
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
      {
        path: "enrolledClass",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "addClass",
        element: <AddAClass></AddAClass>,
      },
      {
        path: "manegeClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
