import React from "react";

const ProductDetails = () => {
  const product = {
    name: "Samsung Galaxy S23",
    description:
      "The Samsung Galaxy S23 offers a pro-grade camera, Snapdragon processor, and stunning AMOLED display.",
    price: "₹74,999",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1aIzocQ3U_Vo09WyJuazdnxTuiL8Io4uff6XkDpgn5P2kciIzySY1X7yWedOnh83dNIdvWvZAXl4TJdqoXvSayWdUPcxqdmiG0-LRwQFFT6JjUtUUKJ4-5g",
    colors: ["#000000", "#1E40AF", "#DC2626"],
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl shadow-lg w-50 md:w-70 object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mb-6">
            {product.price}
          </p>

          {/* Available Colors */}
          <div className="flex gap-3 mb-6">
            {product.colors.map((color, idx) => (
              <span
                key={idx}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color }}></span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-black hover:text-amber-50 text-white font-medium rounded-xl shadow hover:bg-gray-900 transition">
              Add to Cart
            </button>
            <button className="px-6 py-3 bg-gray-600 text-white font-medium rounded-xl shadow hover:bg-gray-500 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
