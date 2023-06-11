import React, { useState, useEffect } from "react";
import ExtraClassCard from "./ExtraClassCard";

const ExtraSection = () => {
  const [extraClass, setExtraClass] = useState([]);

  useEffect(() => {
    fetch("./extra.json")
      .then((res) => res.json())
      .then((data) => {
        setExtraClass(data);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 border">
      <div className="text-center py-8">
        <h2 className="text-xl md:text-3xl mb-2 font-bold">
          Your Healthy Choices
        </h2>
        <p className="text-base">
          I'm a passionate advocate for healthy choices and believe in the
          transformative power they have on our lives. From nourishing my body
          with wholesome foods to staying active through regular exercise, I
          prioritize my well-being.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        {extraClass.map((classes) => (
          <ExtraClassCard key={classes._id} classes={classes} />
        ))}
      </div>
    </div>
  );
};

export default ExtraSection;
