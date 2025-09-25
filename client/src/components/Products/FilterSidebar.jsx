import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "",
    brands: [],
    ratings: [],
    minPrice: 0,
    maxPrice: 200000,
  });
  const [priceRange, setPriceRange] = useState([0, 200000]);

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

  // Sync filters with URL params
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      brands: params.brands ? params.brands.split(",") : [],
      ratings: params.ratings ? params.ratings.split(",") : [],
      minPrice: Number(params.minPrice) || 0,
      maxPrice: Number(params.maxPrice) || 200000,
    });
    setPriceRange([0, Number(params.maxPrice) || 200000]);
  }, [searchParams]);

  // Handle filter change
  const handleFilterChange = (key, value) => {
    let newFilters = { ...filters };

    if (key === "category") {
      newFilters.category = value;
    } else if (key === "brands") {
      newFilters.brands = newFilters.brands.includes(value)
        ? newFilters.brands.filter((b) => b !== value)
        : [...newFilters.brands, value];
    } else if (key === "ratings") {
      newFilters.ratings = newFilters.ratings.includes(value)
        ? newFilters.ratings.filter((r) => r !== value)
        : [...newFilters.ratings, value];
    } else if (key === "maxPrice") {
      newFilters.maxPrice = value;
      setPriceRange([0, value]);
    }

    setFilters(newFilters);

    const params = {};
    if (newFilters.category) params.category = newFilters.category;
    if (newFilters.brands.length > 0)
      params.brands = newFilters.brands.join(",");
    if (newFilters.ratings.length > 0)
      params.ratings = newFilters.ratings.join(",");
    if (newFilters.minPrice) params.minPrice = newFilters.minPrice;
    if (newFilters.maxPrice) params.maxPrice = newFilters.maxPrice;

    setSearchParams(params);
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
              onClick={() => handleFilterChange("category", category)}
              className={`shadow-sm p-1 border-2 rounded-xl ${
                filters.category === category
                  ? "bg-black text-white"
                  : "border-gray-600/60"
              }`}>
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
              value={filters.maxPrice}
              onChange={(e) =>
                handleFilterChange("maxPrice", Number(e.target.value))
              }
              className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer accent-black"
            />
            <span className="text-sm font-medium text-gray-600">
              ₹{priceRange[1]}
            </span>
          </div>
        </div>

        {/* Brands */}
        <div className="flex flex-col">
          <h1 className="text-lg font-bold mb-2">Brands</h1>
          <div className="flex flex-wrap gap-2">
            {options.brands.map((brand) => (
              <button
                key={brand}
                onClick={() => handleFilterChange("brands", brand)}
                className={`px-3 py-1 rounded-lg border ${
                  filters.brands.includes(brand)
                    ? "bg-black text-white"
                    : "border-gray-400"
                }`}>
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
                onClick={() => handleFilterChange("ratings", rating)}
                className={`px-3 py-1 rounded-lg border ${
                  filters.ratings.includes(rating)
                    ? "bg-black text-white"
                    : "border-gray-400"
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
