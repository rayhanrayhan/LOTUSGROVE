import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "./../../../assets/banner1.png";
import banner2 from "./../../../assets/banner2.png";
import banner3 from "./../../../assets/banner3.png";
import banner4 from "./../../../assets/banner4.png";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

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
      autoPlay={true}
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

        <div className="absolute top-1/2 md:top-[360px] left-1/2  transform -translate-x-5 -translate-y-16">
          <div className="w-full px-4 md:px-0 md:w-[570px] text-right">
            <Slide>
              <h1 className="md:text-6xl text-xs font-extrabold text-[#ffffff] md:drop-shadow-lg hover:shadow-black ">
                Your Place to Discover Wellness
              </h1>
              <p className="text-white md:text-sm text-[10px] ">
                "Discover the Infinite Possibilities of Wellness: Nourish Your
                Body, Nurture Your Mind, and Illuminate Your Soul for Lasting
                Health and Happiness"!
              </p>
            </Slide>
            <Link to="register">
              <button className="my-5 py-1 md:py-3 px-3 md:px-7 rounded-lg md:text-base text-xs text-white font-semibold md:font-extrabold bg-gradient-to-r from-[#7E90FE]">
                Join With Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src={banner1} className="banner-image" />

        <div className="absolute top-1/2 md:top-[450px] left-1/2  transform -translate-x-5 -translate-y-16 drop-shadow-2xl shadow-black">
          <div className="w-full px-4 md:px-0 md:w-[570px] text-right">
            <Slide>
              <h1 className="md:text-6xl   text-xs font-semibold text-[#ffffff] md:drop-shadow-lg hover:shadow-red-700 ">
                Nurturing Body and Mind.
              </h1>
              <p className="text-white drop-shadow-xl shadow-black md:text-sm text-[10px] ">
                "Nurturing Body and Mind: Embrace Wellness, Elevate Life. Feed
                your body with nourishing care and your mind with empowering
                thoughts.Unlock your full potential, nurturing both your body
                and mind, and embrace a life of fulfillment and vitality."!
              </p>
            </Slide>
            <Link to="register">
              <button className="my-5 py-1 md:py-3 px-3 md:px-7 rounded-lg md:text-base text-xs text-white font-semibold md:font-extrabold bg-gradient-to-r from-[#7E90FE]">
                Join With Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src={banner3} className="banner-image" />

        <div className="absolute top-1/2 md:top-72 drop-shadow-2xl shadow-black left-1/2  transform -translate-x-5 -translate-y-16">
          <div className="w-full px-4 md:px-0 md:w-[570px] text-right">
            <Slide>
              <h1 className="md:text-6xl text-xs font-semibold text-[#ffffff] md:drop-shadow-lg hover:shadow-red-700 ">
                Keeping Your Body at its Best
              </h1>
              <p className="text-white md:text-sm text-[10px] ">
                "Keeping Your Body at its Best: Empower Your Health, Elevate
                Your Performance. By nurturing your body, you optimize your
                energy, strength, and resilience for a journey of excellence."!
              </p>
            </Slide>
            <Link to="register">
              <button className="my-5 py-1 md:py-3 px-3 md:px-7 rounded-lg md:text-base text-xs text-white font-bold md:font-extrabold bg-gradient-to-r from-[#7E90FE]">
                Join With Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src={banner4} className="banner-image" />
        <div className="absolute top-1/2 md:top-72 drop-shadow-2xl shadow-black left-1/2  transform -translate-x-5 -translate-y-16">
          <div className="w-full px-4 md:px-0 md:w-[570px] text-right">
            <Slide>
              <h1 className="md:text-6xl text-xs font-bold text-[#ffffff] md:drop-shadow-lg hover:shadow-red-700 ">
                Nurturing Body and Mind.
              </h1>
              <p className="text-white  md:text-sm text-[10px]">
                "Nurturing Body and Mind: Harmonize your Being, Flourish in
                Life. Cultivate a holistic approach to well-being, nurturing
                your body and mind in unison. Through mindful nourishment and
                intentional growth, thrive in every aspect of your existence."!
              </p>
            </Slide>
            <Link to="register">
              <button className="my-5 py-1 md:py-3 px-3 md:px-7 rounded-lg md:text-base text-xs text-white font-bold md:font-extrabold bg-gradient-to-r from-[#7E90FE]">
                Join With Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
