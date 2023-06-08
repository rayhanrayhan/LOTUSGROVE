import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/LotusGrove.png";

const Navber = () => {
  const [user, setUser] = useState(true);
  const navPages = (
    <>
      <li>
        <Link to={"/"}>Home </Link>
      </li>
      <li>
        <Link to={"/instructor"}>InsTructors Page </Link>
      </li>
      <li>
        <Link to={"/classes"}>Classes Page </Link>
      </li>

      <li>
        <Link to="/login">Login </Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl text-white bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navPages}
          </ul>
        </div>
        <div className="flex">
          <img className="w-16 h-full" src={logo} alt="" />
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            LotusGrove
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navPages}</ul>
      </div>

      {/* user profile  */}
      <div className="navbar-end ">
        {/* user picture  */}
        <div className="relative group">
          <button className="btn btn-ghost btn-circle">
            <img
              className="w-10 h-10 rounded-full  "
              // src={user?.displayName}
              src={logo}
              alt=""
            />
          </button>
          <h1 className="absolute -bottom-10 bg-white  px-6 py-2 rounded-lg opacity-0 invisible shadow-md right-0 group-hover:opacity-100 group-hover:visible duration-300">
            {/* {user?.displayName} */}
            Rayhan khan
          </h1>
        </div>

        {/* login button  */}
        <ul>
          {user ? (
            <li>
              <button>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navber;
