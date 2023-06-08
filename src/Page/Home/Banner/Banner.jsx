import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "./../../../assets/banner1.png";
import banner2 from "./../../../assets/banner2.png";
import banner3 from "./../../../assets/banner3.png";
import banner4 from "./../../../assets/banner4.png";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  const onChange = (index) => {
    console.log("Slide changed to index:", index);
    // Perform any necessary actions when the active slide changes
  };

  const onClickItem = (index) => {
    console.log("Clicked on item at index:", index);
    // Perform any necessary actions when a slide item is clicked
  };

  const onClickThumb = (index) => {
    console.log("Clicked on thumbnail at index:", index);
    // Perform any necessary actions when a thumbnail is clicked
  };

  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      infiniteLoop={true}
      autoPlay={false}
      interval={5000}
      stopOnHover={false}
      emulateTouch={true}
      swipeable={true}
      showIndicators={true}
      selectedItem={0}
      centerSlidePercentage={80}
    >
      <div className="relative">
        <img src={banner2} className="banner-image" />

        <div className="absolute top-52  -right-20">
          <div className="w-full mx-4 md:mx-0 md:w-[570px] text-right">
            <h1 className="text-7xl font-extrabold text-[#ffffff]">
              Your Place to Discover Wellness
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis repellendus impedit, magni maxime consequatur vero
              velit quidem sunt eum itaque!
            </p>
            <button className="my-5 py-1 md:py-5 px-3 md:px-7 rounded-lg text-sm text-white font-bold md:font-extrabold bg-gradient-to-r from-from-[#7E90FE] from-[#9873FF]">
              Get Started
            </button>
          </div>
          <div className="md:w-[816px]">
            <img src="/man.png" alt="" />
          </div>
        </div>
      </div>

      <div>
        <img src={banner1} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={banner3} />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src={banner4} />
        <p className="legend">Legend 4</p>
      </div>
    </Carousel>
  );
};

export default Banner;
