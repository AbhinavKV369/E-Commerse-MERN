import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "",
    brands: [],
    minPrice: 0,
    maxPrice: 200000,
    ratings: [],
  });
  const [priceRange, setPriceRange] = useState([0, 200000]);

  // Categories
  const categories = [
    "Smartphones",
    "Laptops",
    "Tablets",
    "Headphones",
    "Speakers",
    "Smart TV",
    "Smart Watch",
  ];

  // Options
  const options = {
    brands: ["Samsung", "Apple", "Dell", "HP", "Realme", "Redmi", "Lenovo", "Asus"],
    ratings: ["✰", "✰✰", "✰✰✰", "✰✰✰✰", "✰✰✰✰✰"],
  };

  // Price range handler
  const handlePriceRange = (e) => {
    const value = e.target.value;
    setPriceRange([priceRange[0], value]);
  };

  // Toggle brands
  const toggleBrand = (brand) => {
    setFilters((prev) => {
      let updatedBrands = prev.brands.includes(brand)
        ? prev.brands.filter((b) => b !== brand)
        : [...prev.brands, brand];
      return { ...prev, brands: updatedBrands };
    });
  };

  // Toggle ratings
  const toggleRating = (rating) => {
    setFilters((prev) => {
      let updatedRatings = prev.ratings.includes(rating)
        ? prev.ratings.filter((r) => r !== rating)
        : [...prev.ratings, rating];
      return { ...prev, ratings: updatedRatings };
    });
  };

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      brands: params.brands ? params.brands.split(",") : [],
      ratings: params.ratings ? params.ratings.split(",") : [],
      minPrice: params.minPrice ? Number(params.minPrice) : 0,
      maxPrice: params.maxPrice ? Number(params.maxPrice) : 200000,
    });

    setPriceRange([
      params.minPrice ? Number(params.minPrice) : 0,
      params.maxPrice ? Number(params.maxPrice) : 200000,
    ]);
  }, [searchParams]);

  return (
    <div>
      <aside className="w-80 bg-white shadow-lg px-6 py-1 rounded-xl space-y-6">
        {/* Category Filter */}
        <div className="flex flex-col space-y-2 mt-5 lg:mt-2">
          <h1 className="text-lg font-bold mb-3">Category</h1>
          {categories.map((category) => (
            <button
              onClick={() => setFilters((prev) => ({ ...prev, category }))}
              key={category}
              className={`shadow-sm p-1 border-gray-600/60 border-2 rounded-xl ${
                filters.category === category ? "bg-black text-white" : ""
              }`}>
              {category}
            </button>
          ))}
        </div>

        {/* Price Filter */}
        <div className="mt-4 flex flex-col font-bold space-x-4">
          <h1>Price Range</h1>
          <div className="flex justify-center items-center space-x-4 mt-3">
            <span className="text-sm font-medium text-gray-600">₹0</span>
            <input
              onChange={handlePriceRange}
              type="range"
              min="0"
              max="200000"
              value={priceRange[1]}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-black"
            />
            <span className="text-sm font-medium text-gray-600">
              ₹{priceRange[1]}
            </span>
          </div>
        </div>

        {/* Brands Filter */}
        <div className="mt-4 flex flex-col space-x-4">
          <h1>Brands</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {options.brands.map((brand) => (
              <button
                key={brand}
                onClick={() => toggleBrand(brand)}
                className={`shadow-sm px-3 py-1 border-2  border-gray-500 rounded-xl ${
                  filters.brands.includes(brand) ? "bg-black text-white" : ""
                }`}>
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Ratings Filter */}
        <div className="mt-4 flex flex-col font-bold space-x-4 pb-2">
          <h1>Ratings</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {options.ratings.map((rating) => (
              <button
                key={rating}
                onClick={() => toggleRating(rating)}
                className={`shadow-sm px-3 py-1 border-2 border-gray-500 rounded-xl ${
                  filters.ratings.includes(rating) ? "bg-black text-white" : ""
                }`}>
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
