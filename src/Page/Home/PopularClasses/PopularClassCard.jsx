import React, { useState } from "react";

const PopularClassCard = ({ classItem }) => {
  const { image, price, instructorImage, des, seats, name, students } =
    classItem;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="my-6 flex justify-center">
      <div className="card w-96 bg-base-100 md:shadow-xl md:hover:shadow-xl md:hover:drop-shadow-2xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {showFullDescription ? des : `${des.slice(0, 30)}...`}
            {des.length > 30 && (
              <button
                className="text-blue-500 hover:underline"
                onClick={toggleDescription}
              >
                {showFullDescription ? "See Less" : "See More"}
              </button>
            )}
          </p>
          <div className="card-actions justify-between">
            <div className="">
              Price: $<span className="text-red-600 font-bold">{price}</span>
            </div>
            <div className="">
              Seats: <span className="text-red-600 font-bold">{seats}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClassCard;
