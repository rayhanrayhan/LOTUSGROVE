import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex items-start gap-5">
      <div className="w-72 h-screen bg-[#f2f2f2]  ">
        <nav>
          <ul className="pl-10 pt-10 flex flex-col gap-4">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/selectedClass">Selected Class</Link>
            </li>
            <li>
              <Link to="/dashboard/enrolledClass">Enrolled Classes</Link>
            </li>
            <li>
              <Link to="/dashboard/myClasses">My Classes</Link>
            </li>
            <li>
              <Link to="/dashboard/addClass">Add a Class</Link>
            </li>
            <li>
              <Link to="/dashboard/manegeClasses">Manage Classes</Link>
            </li>
            <li>
              <Link to="/dashboard/manageUsers">Manage Users</Link>
            </li>
            <li>
              <Link to="/">
                Home
              </Link>
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
