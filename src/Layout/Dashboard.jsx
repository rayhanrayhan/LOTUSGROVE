import React, { useContext } from "react";
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
                <li>
                  <Link to="/dashboard/selectedClass">Selected Class</Link>
                </li>
                <li>
                  <Link to="/dashboard/enrolledClass">Enrolled Classes</Link>
                </li>
              </>
            )}
            {loggedUsers?.role === "instructor" && (
              <>
                <li>
                  <Link to="/dashboard/myClasses">My Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/addClass">Add a Class</Link>
                </li>
              </>
            )}
            {loggedUsers?.role === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/manegeClasses">Manage Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageUsers">Manage Users</Link>
                </li>
              </>
            )}

            <li>
              <Link to="/">Back to Home</Link>
            </li>

            <li>
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
