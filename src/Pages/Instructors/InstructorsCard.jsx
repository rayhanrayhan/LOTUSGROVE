import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InstructorsCard = ({ classItem }) => {
  const { classes, instructor, instructorImage, email } = classItem;
  console.log(classItem);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="my-6 flex justify-center">
      <div
        className="card w-96 border border-[#22bb83] bg-base-100 md:shadow-xl md:hover:shadow-xl md:hover:drop-shadow-2xl"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <figure>
          <img
            src={instructorImage}
            alt="Instructor"
            className="rounded-full py-3 w-10/12"
          />
        </figure>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title text-center text-2xl font-bold uppercase">
            {instructor}
          </h2>
          <div className="card-actions mb-4 text-center">
            <div className="">
              <span className="text-red-600 font-bold">{email}</span>
              <p>Number Of Classes: {classes}</p>
              <button className="btn btn-outline btn-success  shadow-md  drop-shadow-md text-white hover:drop-shadow-xl  my-1">
                See Classes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;
