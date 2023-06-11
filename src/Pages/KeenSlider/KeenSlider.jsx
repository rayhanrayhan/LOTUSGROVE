import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

const KeenSlider = ({ keenTitle }) => {
  const [rotation, setRotation] = React.useState(0);
  const [lastProgress, setLastProgress] = React.useState(0);
  const [sliderRef] = useKeenSlider({
    slides: 2,
    detailsChanged(s) {
      const progress = s.track.details.progress;
      const delta = lastProgress - progress;
      setLastProgress(progress);
      setRotation(delta * 360);
    },
    loop: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((rotation) => rotation + 90);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(${rotation}deg, red 40px , black )`,
        transition: "background 1s ease-in-out",
      }}
      className="background-rotation text-white flex justify-center items-center md:text-4xl"
      ref={sliderRef}
    >
      <span className="text-white md:text-4xl font-bold uppercase">
        {keenTitle}
      </span>
      <div className="background-rotation__inner"></div>
    </div>
  );
};

export default KeenSlider;
