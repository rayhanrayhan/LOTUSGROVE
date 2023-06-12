import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Page/Home/Navber/Navber";
import Footer from "../Page/Home/Footer/footer";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Main;
