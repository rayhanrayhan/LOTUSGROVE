import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ClassesAllCard = ({ classItem }) => {
  const { image, price, instructorImage, des, seats, name, students } =
    classItem;

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  const seatLeft = seats - students;

  return (
    <div
      className="my-6 flex justify-center"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="card w-full md:w-96 border border-[#22bb83] bg-base-100 shadow-xl hover:shadow-xl hover:drop-shadow-2xl">
        <figure>
          <img src={image} alt="Shoes" className="w-full" />
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
            <div>
              <p className="text-blue-500 font-medium">
                Total students: {students}
              </p>
              <p>
                <span className="text-red-600 font-bold">
                  Seats left: {seatLeft}
                </span>
              </p>
            </div>
            <div>
              <p>
                Price: $<span className="text-red-600 font-bold">{price}</span>
              </p>
            </div>
          </div>
          <div className="text-center mt-1">
            <button className="btn btn-outline btn-success shadow-md drop-shadow-md text-white hover:drop-shadow-xl">
              Select Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesAllCard;
