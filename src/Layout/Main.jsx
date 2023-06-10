import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Page/Home/Navber/Navber";
import Footer from "../Page/Home/Footer/footer";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
