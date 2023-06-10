import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/footer";
import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LOTUSGROVE || HOME </title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <Footer></Footer>
    </div>
  );
};

export default Home;
