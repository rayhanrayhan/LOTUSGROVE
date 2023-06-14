import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import registrationAnimation from "./../../../public/registrationAnimation.json";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Register = () => {
  const { createUser, upDateProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    const { name, photo, email, password } = data;
    const newUser = { name, email, photo, role: "student" };
    createUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        // Additional actions
        upDateProfile(loggedUser, name, photo).then((res) => {
          axios
            .post("https://lotusgrove-server-site.vercel.app/users", newUser)
            .then((data) => {
              if (data.data.insertedId) {
                alert("user create success");
              }
            });
        });
      })
      .catch((error) => {
        console.log("Error creating user:", error.message);
        // Handle error
      });
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setPasswordVisible((prev) => !prev);
    } else if (field === "confirmPassword") {
      setConfirmPasswordVisible((prev) => !prev);
    }
  };

  const password = watch("password", "");

  return (
    <div>
      <Helmet>
        <title>LOTUSGROVE || REGISTER </title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 pt-20">
        <div className="md:flex justify-around items-center mx-2 md:mx-16">
          <div className="text-center mb-8 md:mb-0">
            <h1 className="text-4xl font-bold">Register Now</h1>
            <Lottie className=" " animationData={registrationAnimation} />
          </div>

          <div className="card flex-shrink-0 w-full md:w-6/12 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Type Your full Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">{errors.name.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="write a valid email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      message:
                        "Password must have at least one uppercase letter, one lowercase letter, one number, and one special character",
                    },
                  })}
                  placeholder="Type a new password"
                  className="input input-bordered pr-10"
                />
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
                <div
                  className="absolute top- right-3 transform translate-y-[50px] cursor-pointer"
                  onClick={() => togglePasswordVisibility("password")}
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
                  type={confirmPasswordVisible ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  placeholder="Repeat your password again"
                  className="input input-bordered pr-10"
                />
                {errors.confirmPassword && (
                  <span className="text-red-600">
                    {errors.confirmPassword.message}
                  </span>
                )}
                <div
                  className="absolute top-1/2 right-3 transform translate-y-2 cursor-pointer"
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                >
                  {confirmPasswordVisible ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photo", {
                    required: "Photo URL is required",
                  })}
                  placeholder="Place Your Photo URL"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-600">{errors.photo.message}</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
            <div className="mb-3 mx-auto">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-pink-600">
                  Login Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
