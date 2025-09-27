import React from "react";
import { Link } from "react-router-dom";

import LaptopCollection from "../../assets/Laptop.webp";
import SmartPhoneCollection from "../../assets/Smartphone.webp";
import TabletCollection from "../../assets/Gadgets.webp";

const ProductCollections = () => {
  return (
    <section className="m-3 p-4 h-auto bg-gray-100">
      <h1 className="pl-5 text-3xl pt-2 font-bold mb-6">Our Collections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5">
        {/* Laptop */}
        <div className="group perspective">
          <div className="relative w-full h-64 md:h-72 lg:h-80 rounded-xl shadow-lg transition-transform duration-500 transform group-hover:rotate-y-6 group-hover:-rotate-x-3">
            <Link to={``}>
              <img
                src={LaptopCollection}
                alt="Laptops"
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg font-semibold">
                  Explore Laptops
                </p>
              </div>
            </Link>
          </div>
          <h2 className="mt-3 text-xl font-bold text-center">
            Laptop Collections
          </h2>
        </div>

        {/* Mobile */}
        <div className="group perspective">
          <div className="relative w-full h-64 md:h-72 lg:h-80 rounded-xl shadow-lg transition-transform duration-500 transform group-hover:rotate-y-6 group-hover:-rotate-x-3">
            <Link to={``}>
              <img
                src={SmartPhoneCollection}
                alt="Smartphones"
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg font-semibold">
                  Explore Smartphones
                </p>
              </div>
            </Link>
          </div>
          <h2 className="mt-3 text-xl font-bold text-center">
            Mobile Collections
          </h2>
        </div>

        {/* Gadgets */}
        <div className="group perspective">
          <div className="relative w-full h-64 md:h-72 lg:h-80 rounded-xl shadow-lg transition-transform duration-500 transform group-hover:rotate-y-6 group-hover:-rotate-x-3">
            <Link to={`/`}>
              <img
                src="https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&auto=format&fit=crop&q=80"
                alt="Gadgets"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg font-semibold">
                  Explore Tablets
                </p>
              </div>
            </Link>
          </div>
          <h2 className="mt-3 text-xl font-bold text-center">
            Tablet Collections
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ProductCollections;
