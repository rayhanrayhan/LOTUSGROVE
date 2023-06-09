import React, { useState } from "react";

import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import registrationAnimation from "./../../../public/registrationAnimation.json";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div>
      <Helmet>
        <title>LOTUSGROVE || REGISTER</title>
      </Helmet>
      {/* Login form */}
      <div className="hero min-h-screen bg-base-200">
        <div className="md:flex justify-around items-center mx-2 md:mx-16">
          {/* Form section */}
          <div className="text-center mb-8 md:mb-0">
            <h1 className="text-4xl font-bold">Register Now</h1>
            <Lottie
              className="w-[550px] "
              animationData={registrationAnimation}
            />
          </div>

          {/* Form section */}
          <form className="card flex-shrink-0 w-full md:w-6/12 shadow-2xl bg-base-100">
            <div className="card-body">
              {/* social media btn  */}
              <div className=""></div>
              {/* form main body  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type Your full Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="write a valid email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="type a new password"
                  className="input input-bordered pr-10"
                />
                <div
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </div>
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="repeat your password again"
                  className="input input-bordered pr-10"
                />
                <div
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Place Your Photo URL"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
            <div className="mb-3 mx-auto">
              <p>
                You Have a Account ??
                <Link to="/login" className="text-pink-600">
                  Login Now
                </Link>
              </p>
            </div>
          </form>

          {/* Form section end */}
        </div>
      </div>
    </div>
  );
};

export default Register;
