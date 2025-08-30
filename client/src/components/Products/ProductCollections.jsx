import React from "react";
import { Link } from "react-router-dom";

import LaptopCollection from "../../assets/Laptop.png";
import SmartPhoneCollection from "../../assets/Smartphone.png";
import GadgetCollection from "../../assets/Gadgets.png";

const ProductCollections = () => {
  return (
    <section className="m-3 p-4 h-auto bg-gray-100">
      <h1 className="pl-5 text-3xl pt-2 font-bold mb-6">Our Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5">
        <div>
          <h2 className="font-bold text-xl pb-2">Laptop Collections</h2>
          <Link to="/">
            <img
              src={LaptopCollection}
              alt="Laptops"
              className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg"
            />
          </Link>
        </div>
        <div>
          <h2 className="font-bold text-xl pb-2">Mobile Collections</h2>
          <Link to="/">
            <img
              src={SmartPhoneCollection}
              alt="Smartphones"
              className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg"
            />
          </Link>
        </div>
        <div>
          <h2 className="font-bold text-xl pb-2">Gadget Collections</h2>
          <Link to="/">
            <img
              src={GadgetCollection}
              alt="Gadgets"
              className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCollections;
