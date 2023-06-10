import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/footer";
import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstractor from "../PopularInstractor/PopularInstractor";
import ExtraSection from "../ExtraSection/ExtraSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LOTUSGROVE || HOME </title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstractor></PopularInstractor>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
