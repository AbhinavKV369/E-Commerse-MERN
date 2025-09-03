import React from "react";

import LaptopImg from "../../assets/Laptop.webp";
import GadgetImg from "../../assets/Gadgets.webp";
import BannerImg from "../../assets/Banner.webp";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    price: "₹1,29,999",
    image: GadgetImg,
  },
  {
    id: 2,
    name: "Apple MacBook Air M2",
    price: "₹1,09,900",
    image: BannerImg,
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    price: "₹29,990",
    image: GadgetImg,
  },
  { id: 4, name: "iPad Pro 12.9 (M2)", price: "₹1,12,900", image: GadgetImg },
  { id: 5, name: "Dell XPS 15 Laptop", price: "₹1,49,990", image: GadgetImg },
  { id: 6, name: "Apple Watch Series 9", price: "₹41,900", image: LaptopImg },
];

const ProductGrid = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 font-medium">{item.price}</p>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg shadow hover:bg-gray-700 transition">
                    Add to Cart
                  </button>
                  <button className="flex-1 px-4 py-2 border border-gray-400 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
