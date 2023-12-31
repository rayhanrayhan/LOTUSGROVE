import React, { useContext } from "react";
import { BiBookAdd, BiSelectMultiple, BiUserCircle } from "react-icons/Bi";
import { GiShoppingBag, GiNotebook } from "react-icons/Gi";
import { AiFillHome } from "react-icons/Ai";
import { FiLogOut, FiBookOpen } from "react-icons/fi";

import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import useLoggedUsers from "../hooks/useLoggedUsers";
import { AuthContext } from "../Providers/AuthProvider";

const Dashboard = () => {
  const [loggedUsers] = useLoggedUsers();
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  return (
    <div className="flex items-start gap-5">
      <div className="w-72 h-screen bg-[#f2f2f2]  ">
        <nav>
          <ul className="pl-10 pt-10 flex flex-col gap-4">
            {/* Sidebar content here */}
            {loggedUsers?.role === "student" && (
              <>
                <li className="flex items-center gap-2 py-2 px-2 hover:rounded-md hover:bg-gray-300">
                  <BiSelectMultiple />
                  <Link to="/dashboard/selectedClass">Selected Class</Link>
                </li>
                <li className="flex items-center gap-2 py-2 px-2 hover:rounded-md hover:bg-gray-300">
                  <GiShoppingBag />
                  <Link to="/dashboard/enrolledClass">Enrolled Classes</Link>
                </li>
              </>
            )}
            {loggedUsers?.role === "instructor" && (
              <>
                <li className="flex items-center gap-2 py-2 px-2 hover:rounded-md hover:bg-gray-300">
                  <FiBookOpen />
                  <Link to="/dashboard/myClasses">My Classes</Link>
                </li>
                <li className="flex items-center gap-2 py-2 px-2 hover:rounded-md hover:bg-gray-300">
                  <BiBookAdd />
                  <Link to="/dashboard/addClass">Add a Class</Link>
                </li>
              </>
            )}
            {loggedUsers?.role === "admin" && (
              <>
                <li className="flex items-center gap-2 py-2 px-2 hover:rounded-md hover:bg-gray-300">
                  <GiNotebook />
                  <Link to="/dashboard/manegeClasses">Manage Classes</Link>
                </li>
                <li className="flex items-center gap-2 py-2 px-2 hover:rounded-md hover:bg-gray-300">
                  <BiUserCircle />
                  <Link to="/dashboard/manageUsers">Manage Users</Link>
                </li>
              </>
            )}

            <li className="flex items-center gap-2 py-2 px-2 hover:rounded-md hover:bg-gray-300">
              <AiFillHome />
              <Link to="/">Back to Home</Link>
            </li>

            <li className="flex items-center gap-2 py-2 px-2 hover:rounded-md hover:bg-gray-300">
              <FiLogOut />
              <button onClick={() => logOut(navigate(from, { replace: true }))}>
                LogOut
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
