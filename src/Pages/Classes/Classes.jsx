import { useEffect } from "react";
import { useState } from "react";
import ClassesAllCard from "./ClassesAllCard";
import { Helmet } from "react-helmet-async";
import KeenSlider from "../KeenSlider/KeenSlider";

const Classes = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setPopularClass(data);
      });
  }, []);

  return (
    <div className="container mx-auto border">
      <Helmet>
        <title>LOTUSGROVE || OUR CLASSES </title>
      </Helmet>
      <KeenSlider keenTitle={"Our Classes"}></KeenSlider>
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
          {popularClass.map((classItem) => (
            <div className="flex justify-center" key={classItem._id}>
              <ClassesAllCard classItem={classItem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
