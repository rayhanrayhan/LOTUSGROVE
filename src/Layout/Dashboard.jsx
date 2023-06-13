import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-80 h-screen bg-[#f2f2f2]  ">
        <nav>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/selectedClass">Selected Class</Link>
            </li>
            <li>
              <Link to="/dashboard/enrolledClass">Enroll Class</Link>
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
