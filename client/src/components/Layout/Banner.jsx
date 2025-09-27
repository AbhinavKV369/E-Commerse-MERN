import React from "react";
import BannerImage from "../../assets/Banner.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] px-2 flex justify-center">
      {/* Background Image */}
      <img
        src={BannerImage}
        alt="Hero Banner"
        className="absolute px-2 inset-0 w-full h-full object-cover rounded-xl z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 rounded-xl z-10"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-end md:justify-end items-center md:items-start px-6 md:px-20 pb-16 md:pb-24 text-center md:text-left z-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold px-4 py-2 text-black mb-4 rounded-xl leading-tight">
          Welcome to Volt-Ex ⚡
        </h1>
        <p className="text-lg sm:text-xl text-black font-bold px-4 py-2 mb-6 max-w-lg rounded-md">
          Your one-stop shop for smartphones, laptops, speakers, and headphones.
          Quality gadgets at lightning speed!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/collections/all">
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition">
              Shop Now
            </button>
          </Link>

          <button className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
