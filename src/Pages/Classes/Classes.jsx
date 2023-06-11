import React, { useEffect, useState } from "react";
import ClassesAllCard from "./ClassesAllCard";
import KeenSlider from "../KeenSlider/KeenSlider";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [popularClass, setPopularClass] = useState([]);
  useEffect(() => {
    fetch("./classes.json")
      .then((res) => res.json())
      .then((data) => {
        setPopularClass(data);
      });
  }, []);

  return (
    <div className="container mx-auto  border">
      <Helmet>
        <title>LOTUSGROVE || OUR CLASSES </title>
      </Helmet>
      <KeenSlider keenTitle={"Our Classes"}></KeenSlider>
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
          {popularClass.map((classItem) => (
            <ClassesAllCard key={classItem._id} classItem={classItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
