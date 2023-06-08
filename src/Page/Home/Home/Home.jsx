import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LOTUSGROVE || HOME </title>
      </Helmet>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default Home;
