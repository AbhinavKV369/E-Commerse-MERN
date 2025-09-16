import React from "react";
import { HiTrash } from "react-icons/hi";

const CartContents = () => {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 15",
      price: 79999,
      qty: 1,
      image:
        "",
      colors: ["#000000", "#1E40AF", "#DC2626"],
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: 74999,
      qty: 1,
      image:
        "",
      colors: ["#10B981", "#A78BFA", "#FBBF24"],
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Headphones",
      price: 29999,
      qty: 1,
      image: "",
      colors: ["#000000", "#E5E7EB"],
    },
    {
      id: 4,
      name: "Apple MacBook Air M2",
      price: 114999,
      qty: 1,
      image:
        "https://store.storeimages.c",
      colors: ["#374151", "#F9FAFB", "#FDE68A"],
    },
    {
      id: 5,
      name: "Nike Air Max 270",
      price: 12999,
      qty: 1,
      image:
        "",
      colors: ["#FFFFFF", "#000000", "#F97316"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 p-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="relative shadow-md bg-gray-100 rounded-lg p-3 hover:shadow-lg transition duration-200">
          {/* Remove button */}
          <button className="absolute top-2 right-2 bg-gray-900 text-red-600 rounded-full p-1 hover:bg-red-500 hover:text-white transition">
            <HiTrash className="h-5 w-5" />
          </button>

          {/* Product image */}
          <img
            src={item.image}
            alt={item.name}
            className="h-40 w-full rounded-lg object-contain bg-gray-50"
            loading="lazy"
          />

          {/* Product name */}
          <h2 className="text-sm font-semibold mt-2 truncate">{item.name}</h2>

          {/* Price */}
          <p className="text-sm font-medium text-gray-800">
            ₹{item.price.toLocaleString("en-IN")}
          </p>

          {/* Colors */}
          <div className="flex gap-2 mt-2">
            {item.colors.map((color, idx) => (
              <span
                key={idx}
                className="w-5 h-5 rounded-full border shadow-sm"
                style={{ backgroundColor: color }}></span>
            ))}
          </div>
          <div className="flex items-center pt-3 justify-center space-x-4 ">
            <button className="bg-blue-900 hover:bg-gray-800 px-2 rounded-full text-white">
              -
            </button>
            <h2 className="font-bold text-xl">{item.qty}</h2>
            <button className="bg-blue-900 hover:bg-gray-800 px-2 rounded-full text-white">
              +
            </button>
          </div>

          {/* Buy button */}
          <button className="bg-black text-white px-2 py-1 mt-2 rounded-sm hover:bg-gray-800 w-full">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
