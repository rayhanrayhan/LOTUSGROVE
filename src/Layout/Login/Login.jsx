import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import lottiAnimation from "./../../../public/logsign.json";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div>
      <Helmet>
        <title>LOTUSGROVE || LOGIN</title>
      </Helmet>
      {/* Login form */}
      <div className="hero min-h-screen bg-base-200">
        <div className="md:flex justify-around items-center mx-2 md:mx-16">
          {/* Form section */}
          <div className="text-center mb-8 md:mb-0">
            <h1 className="text-4xl font-bold">Login now!</h1>
            <Lottie className="w-max" animationData={lottiAnimation} />
          </div>
          {/* Form section */}
          <div className="card flex-shrink-0 w-full md:w-auto shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
          {/* Form section */}
        </div>
      </div>
    </div>
  );
};

export default Login;
