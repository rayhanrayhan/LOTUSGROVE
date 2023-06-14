import { useEffect } from "react";
import { useState } from "react";
import PopularClassCard from "./PopularClassCard";

const PopularClasses = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    fetch("https://lotusgrove-server-site.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        // Sort classes based on the number of students
        const sortedClass = data.sort((a, b) => b.students - a.students);
        setPopularClass(sortedClass);
      });
  }, []);

  // Slice the first 6 cards
  const currentCards = popularClass.slice(0, 6);

  return (
    <div className="container mx-auto px-4 border">
      <div className="text-2xl md:text-4xl text-center font-bold py-8">
        Popular Classes
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        {currentCards.map((classItem) => (
          <div className="flex justify-center" key={classItem._id}>
            <PopularClassCard classItem={classItem} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularClasses;
