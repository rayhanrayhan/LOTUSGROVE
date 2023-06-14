import React, { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import lottiAnimation from "./../../../public/logsign.json";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const { signIn, googleSignIn, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSignInGoogle = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        const newUser = {
          name: user?.displayName,
          email: user?.email,
          photo: user?.photoURL,
          role: "student",
        };
        axios
          .post("https://lotusgrove-server-site.vercel.app/users", newUser)
          .then((data) => {
            if (data.data.insertedId) {
              alert("user create success");
            }
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Validation
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    setLoading(true);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
        form.reset();
        setLoading(false);
      });
  };

  const handleCaptcha = (event) => {
    event.preventDefault(); // Prevent form submission

    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="">
      <Helmet>
        <title>LOTUSGROVE || LOGIN</title>
      </Helmet>
      {/* Login form */}
      <div className="hero min-h-screen bg-base-200 py-24">
        <div className="md:flex justify-around items-center mx-2 md:mx-16">
          {/* Form section */}
          <div className="text-center mb-8 md:mb-0">
            <h1 className="text-4xl font-bold">Login now!</h1>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <Lottie className="md:w-96" animationData={lottiAnimation} />
          </div>

          {/* Form section */}
          <div className="card md:w-96 shadow-2xl bg-base-100">
            {/* social media btn */}
            <div className="w-10/12 mx-auto pt-6">
              {/* google */}
              <button
                onClick={handleSignInGoogle}
                type="button"
                className="py-2  mb-3 px-4 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                </svg>
                Sign in with Google
              </button>
            </div>

            {/* form main body */}
            <form onSubmit={handleLogin} className="card-body">
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
                  className="absolute top-[122px] right-3 transform -translate-y-[72px] cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <div className="border rounded-lg py-1 px-1">
                    <LoadCanvasTemplate />
                  </div>
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="type captcha carefully"
                  className="input input-bordered"
                />
                <button
                  onClick={handleCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary "
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="mb-3 mx-auto">
              <p>
                Not a Member?{" "}
                <Link to="/register" className="text-pink-600">
                  Sign Up Now
                </Link>
              </p>
            </div>
          </div>

          {/* Form section end */}
        </div>
      </div>
    </div>
  );
};

export default Login;
