import React from "react";
import Banner from "../../Page/Home/Banner/Banner";
import KeenSlider from "../KeenSlider/KeenSlider";
import { useState } from "react";
import { useEffect } from "react";
import InstructorsCard from "./InstructorsCard";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const [popularInsTructor, setPopularInsTructor] = useState([]);

  useEffect(() => {
    fetch("./classes.json")
      .then((res) => res.json())
      .then((data) => {
        setPopularInsTructor(data);
      });
  }, []);

  return (
    <div className="border containermx-auto">
      <Helmet>
        <title>LOTUSGROVE || All INSTRUCTORS </title>
      </Helmet>
      <KeenSlider keenTitle={"Our InstrucTors"}></KeenSlider>
      <div className=" px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
          {popularInsTructor.map((classItem) => (
            <InstructorsCard
              key={classItem._id}
              classItem={classItem}
            ></InstructorsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
