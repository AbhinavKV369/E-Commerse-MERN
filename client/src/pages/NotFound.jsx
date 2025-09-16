import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-900 text-center px-4">
      {/* Animated Flash */}
      <div className="relative">
        <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center animate-bounce shadow-xl">
          <span className="text-6xl">⚡</span>
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-2 animate-bounce bg-black rounded-full blur-sm"></div>
      </div>

      {/* 404 Title */}
      <h1 className="mt-10 text-7xl font-extrabold tracking-widest">404</h1>
      <p className="mt-4 text-xl text-gray-900">
        Oops! The page you’re looking for has vanished into the void.
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="mt-8 inline-block px-6 py-3 text-lg font-semibold bg-black text-white rounded-xl shadow hover:bg-gray-900 transition">
        Back to Home 
      </Link>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-300 opacity-30 pointer-events-none"></div>
    </div>
  );
};

export default NotFound;
