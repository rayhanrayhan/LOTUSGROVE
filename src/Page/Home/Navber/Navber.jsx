import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/LotusGrove.png";

const Navber = () => {
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
      <div className="navbar-end">
        {/* <a className="btn">User</a> */}
        <img className="w-16 h-16 border rounded-full" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Navber;
