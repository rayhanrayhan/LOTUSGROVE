import React, { useEffect, useState } from "react";

const PopularClasses = () => {
  const [PopulerClass, setPopularClass] = useState([]);
  useEffect(() => {
    fetch("./classes.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h2> THis is popular section for assignment </h2>
    </div>
  );
};

export default PopularClasses;
