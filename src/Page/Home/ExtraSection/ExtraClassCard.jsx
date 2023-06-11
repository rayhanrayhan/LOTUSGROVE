import React, { useState } from "react";
import "aos/dist/aos.css";

const ExtraClassCard = ({ classes }) => {
  const { image, name, description } = classes;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="my-6 flex justify-center">
      <div className="w-full md:w-96">
        <div className="card bg-base-100 border border-[#22bb83] shadow-xl hover:shadow-2xl">
          <figure className="px-6 pt-6 md:px-10 md:pt-10">
            <img src={image} alt="image" className="rounded-xl w-full" />
          </figure>
          <div className="card-body items-center text-center px-6 py-4 md:px-10">
            <h2 className="card-title uppercase font-bold text-xl md:text-2xl">
              {name}
            </h2>
            <p>
              {showFullDescription
                ? description
                : `${description.slice(0, 30)}...`}
              {description.length > 30 && (
                <button
                  className="text-blue-500 hover:underline"
                  onClick={toggleDescription}
                >
                  {showFullDescription ? "See Less" : "See More"}
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraClassCard;
