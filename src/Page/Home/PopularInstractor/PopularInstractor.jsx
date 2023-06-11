import React, { useEffect, useState } from "react";
import PopularInstractorCard from "./PopularInstractorCard";

const PopularInstractor = () => {
  const [popularInstractorClass, setPopularInstractorClass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        // Sort classes based on the number of students
        const sortedInsClass = data.sort((a, b) => b.students - a.students);
        setPopularInstractorClass(sortedInsClass);
      });
  }, []);

  // Slice the first 6 cards
  const currentInsCard = popularInstractorClass.slice(0, 6);

  return (
    <div className="container mx-auto px-4 border">
      <div className="text-2xl md:text-4xl text-center font-bold py-8">
        Our Popular instructor
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        {currentInsCard.length > 0 &&
          currentInsCard.map((instructorClass) => (
            <PopularInstractorCard
              key={instructorClass._id}
              instructorClass={instructorClass}
            />
          ))}
      </div>
    </div>
  );
};

export default PopularInstractor;
