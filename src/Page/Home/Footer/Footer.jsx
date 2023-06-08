import React from "react";
import logo from "./../../../assets/LotusGrove.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10  bg-opacity-70 max-w-screen-xl text-white bg-[#040509]">
      <div>
        <img className="w-20 " src={logo} alt="" />
        <p>
          LOTUS GROVE
          <br />
          Unlock Your Potential for Wellness and Flourishing
        </p>
      </div>

      {/* latest news */}
      <div>
        <span className=" text-3xl drop-shadow-2xl font-normal font-serif ">
          Latest News
        </span>
        <div>
          <h4>
            Smoothie Recipes Loaded With <br /> Winter Superfoods.
          </h4>
          <p> 20.1.2018</p>
        </div>
        <hr className="bg-black w-32  " />
        <div>
          <h4>
            Smoothie Recipes Loaded With <br /> Winter Superfoods.
          </h4>
          <p> 20.1.2018</p>
        </div>
        <hr className="bg-black w-32  " />
      </div>
      {/* recent projects */}
      <div>
        <span className=" text-3xl drop-shadow-2xl font-medium font-serif ">
          Health Conditions
        </span>
        <Link className="link link-hover">Nutrition & Supplements</Link>
        <Link className="link link-hover">Healthy Living</Link>
        <Link className="link link-hover">Procedures & Tests</Link>
        <Link className="link link-hover">Food Suggestion </Link>
        <Link className="link link-hover">Contact US</Link>
      </div>
      {/* Legal */}
      <div>
        <span className=" text-3xl drop-shadow-2xl font-medium font-serif ">
          Legal
        </span>
        <Link className="link link-hover">Privacy Policy</Link>
        <Link className="link link-hover">Terms of Service</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Food Suggestion </Link>
        <Link className="link link-hover">Cookie policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
