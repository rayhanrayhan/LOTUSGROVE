import React, { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch("./classes.json")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);

  // Slice the first 6 cards
  const currentCards = popularClasses.slice(0, 6);

  return (
    <div>
      <h2>This is the popular section for the assignment</h2>
      <div className="grid grid-cols-3 gap-6">
        {currentCards.map((classItem) => (
          <PopularClassCard key={classItem._id} classItem={classItem} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
