import React from "react";

const FilterSidebar = () => {
  const categories = [
    "Smartphones",
    "Laptops",
    "Tablets",
    "Headphones",
    "Speakers",
    "Smart TV",
    "Smart Watch",
  ];

  const options = {
    brands: [
      "Samsung",
      "Apple",
      "Dell",
      "HP",
      "Realme",
      "Redmi",
      "Lenovo",
      "Asus",
    ],
    ratings: ["✰", "✰✰", "✰✰✰", "✰✰✰✰", "✰✰✰✰✰"],
  };

  return (
    <div>
      <aside className="w-80 bg-white shadow-lg px-6 py-4 rounded-xl space-y-6">
        {/* Category */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-lg font-bold mb-2">Category</h1>
          {categories.map((category) => (
            <button
              key={category}
              className="shadow-sm p-1 border-2 rounded-xl border-gray-600/60">
              {category}
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="flex flex-col font-bold">
          <h1>Price Range</h1>
          <div className="flex items-center space-x-4 mt-3">
            <span className="text-sm font-medium text-gray-600">₹0</span>
            <input
              type="range"
              min="0"
              max="200000"
              className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer accent-black"
            />
            <span className="text-sm font-medium text-gray-600">₹200000</span>
          </div>
        </div>

        {/* Brands */}
        <div className="flex flex-col">
          <h1 className="text-lg font-bold mb-2">Brands</h1>
          <div className="flex flex-wrap gap-2">
            {options.brands.map((brand) => (
              <button
                key={brand}
                className="px-3 py-1 rounded-lg border border-gray-400">
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Ratings */}
        <div className="flex flex-col">
          <h1 className="text-lg font-bold mb-2">Ratings</h1>
          <div className="flex gap-2 flex-wrap">
            {options.ratings.map((rating) => (
              <button
                key={rating}
                className="px-3 py-1 rounded-lg border border-gray-400">
                {rating}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default FilterSidebar;
