import React, { useState } from "react";
import { Link } from "react-router-dom"
import LoginImage from "../assets/Login.webp";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center">
      {/* Container */}
      <div className="flex bg-white shadow-2xl rounded-2xl w-[90%] max-w-4xl">
        {/* Left Side - Image */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50 p-4">
          <img
            src={LoginImage}
            alt="Login"
            className="w-[70%] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side - Small Form */}
        <div className="flex flex-col items-center justify-center flex-1 p-6">
          <div className="w-full max-w-xs">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Welcome Back User
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm">
              Please login to your account
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-600 mb-1 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1 text-sm">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none text-sm"
                />
              </div>

              <div className="flex justify-between items-center text-xs">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-black" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-black hover:underline font-medium">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-lg font-semibold shadow-md transition text-sm">
                Login
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-6">
              Don’t have an account?{" "}
              <Link to="/register" className="text-black font-medium hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
