import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularInstractorCard = ({ instructorClass }) => {
  const { image, instructor, instructorImage, email } = instructorClass;

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="my-6 flex justify-center">
      <div
        className="card w-96 bg-base-100 md:shadow-xl md:hover:shadow-xl md:hover:drop-shadow-2xl "
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <figure>
          <img
            src={instructorImage}
            alt="Instructor"
            className="rounded-full w-10/12 "
          />
        </figure>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title text-center text-2xl font-bold uppercase">
            {instructor}
          </h2>
          <div className="card-actions mb-4">
            <div className="flex justify-center">
              <span className="text-red-600 font-bold">{email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstractorCard;
