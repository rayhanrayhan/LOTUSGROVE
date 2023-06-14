import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Page/Home/Navber/Navber";
import Footer from "../Page/Home/Footer/footer";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { DotLoader } from "react-spinners";

const Main = () => {
  const { loading, user } = useContext(AuthContext);
  let content;
  if (loading) {
    content = <DotLoader color="#36d7b7" />;
  } else if (!loading) {
    content = <Outlet></Outlet>;
  }
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
