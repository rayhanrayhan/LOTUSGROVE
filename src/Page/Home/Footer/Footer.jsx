import React from "react";
import logo from "./../../../assets/LotusGrove.png";
import paymentIcon from "./../../../assets/SSL.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
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
      {/* Footer end icons  */}
      <footer className="footer text-white  text-center md:items-center p-4 bg-neutral   ">
        {/* copyright act  */}
        <div className="items-center grid-flow-col justify-self-center">
          <p>Copyright © 2023 - All right reserved</p>
        </div>

        {/* paymetn icon  */}
        <div className="mx-10">
          <img src={paymentIcon} alt="" />
        </div>
        {/* social icons */}
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end justify-self-center">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
