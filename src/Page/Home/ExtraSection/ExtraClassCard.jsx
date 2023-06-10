import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ExtraClassCard = ({ classes }) => {
  const { image, name, description } = classes;
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
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image} alt="image" className="rounded-xl " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title uppercase font-bold">{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraClassCard;
