import React from "react";
import LoginImage from "../assets/Login.webp";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden w-[90%] max-w-4xl m-6">
        {/* Left - Form */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome 
          </h2>

          <form className="w-full flex flex-col gap-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-xl border-3 border-gray-300 text-gray-800 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-xl border-3 border-gray-300 text-gray-800 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-600 text-white font-semibold py-3 rounded-xl transition shadow-md">
              Login
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-gray-500 font-medium hover:underline">
              Sign up
            </a>
          </p>
        </div>

        {/* Right - Image */}
        <div className="hidden md:flex w-1/2">
          <img
            src={LoginImage}
            alt="Login illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
