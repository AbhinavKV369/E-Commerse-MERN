import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginImage from "../assets/Login.webp"; 

const Register = () => {
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(name,password);
    }
  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center">
      {/* Container */}
      <div className="flex bg-white shadow-2xl rounded-2xl w-[90%] max-w-3xl">
        {/* Left Side  */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50 p-4">
          <img
            src={LoginImage}
            alt="Register"
            className="w-[70%] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center justify-center flex-1 p-6">
          <div className="w-full max-w-xs">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Create your Account
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm">
              Please fill in the details to register
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-gray-600 mb-1 text-sm">
                  Full Name
                </label>
                <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-600 mb-1 text-sm">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none text-sm"
                />
              </div>

              {/* Password */}
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

              {/* Confirm Password */}
              <div>
                <label className="block text-gray-600 mb-1 text-sm">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none text-sm"
                />
              </div>

              {/* Terms */}
              <div className="flex items-center text-xs">
                <input type="checkbox" className="rounded text-black mr-2" />
                <span className="text-gray-600">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-black font-medium hover:underline">
                    Terms & Conditions
                  </a>
                </span>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-lg font-semibold shadow-md transition text-sm">
                Register
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-black font-medium hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
