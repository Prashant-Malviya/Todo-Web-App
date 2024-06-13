import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "../Axios/axios.js";
import TokenContext from "../context/TokenContext.js";
import loginImg from "./img/login img.png";
import googleicon from "./img/googleicon.png";

function Login() {
  const [formData, setFormData] = useState({});
  const { userToken, tokenDispatch, userDispatch } = useContext(TokenContext);
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("/user/login", formData);
      tokenDispatch({ type: "SET_TOKEN", payload: result.data.token });
      userDispatch({ type: "SET_USER", payload: result.data.user });
      localStorage.setItem("authToken", JSON.stringify(result.data.token));
    } catch (error) {
      console.log(error);
      setError({ message: error.response.data.message });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-amber-200 to-purple-200">
      {userToken && <Navigate to="/" />}
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <img
              src={loginImg}
              className="w-full rounded-lg animate-bounceSlow mt-10"
              alt="loginImg"
            />
          </div>
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg bg-gradient-to-tr from-green-200 via-red-300 to-amber-200">
            <form method="post" onSubmit={handleSubmit}>
              <div className="flex flex-row items-center justify-center lg:justify-start mb-4">
               
                <a
                  className="px-5 py-3 text-black font-bold w-full flex justify-center items-center mb-3 bg-gradient-to-tr from-amber-300 via-blue-300 to-purple-500 rounded-lg"
                  href="#!"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={googleicon}
                    alt="google icon"
                    className="w-6 h-6 mx-2"
                  />
                  Continue with Google
                </a>
              </div>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-white before:mt-0.5 after:flex-1 after:border-t after:border-white py-2 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">Or</p>
              </div>
              {error && (
                <div className="text-center border-2 border-red-600 p-2 mb-2 rounded-md bg-red-200 shadow-2xl">
                  {error.message}
                </div>
              )}
              <div className="mb-6">
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="emailInput"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="passInput"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label font-bold inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to={"/forgotPassword"}
                  className="text-blue-600 font-bold hover:text-blue-700 transition duration-200 ease-in-out"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link
                    to={"/register"}
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                    {" "}
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
