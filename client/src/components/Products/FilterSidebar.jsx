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
    ramStorage: [],
    connectivity: [],
    cameras: [],
    screenSizes: [],
    batteries: [],
    os: [],
    storageType: [],
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
  const brands = [
    "Samsung",
    "Apple",
    "Dell",
    "HP",
    "Realme",
    "Redmi",
    "Lenovo",
    "Asus",
  ];
  const ratings = ["✰", "✰✰", "✰✰✰", "✰✰✰✰", "✰✰✰✰✰"];
  const ramStorage = [
    "2GB/32GB",
    "3GB/32GB",
    "4GB/64GB",
    "6GB/128GB",
    "8GB/128GB",
    "8GB/256GB",
    "12GB/256GB",
    "16GB/512GB",
    "32GB/1TB",
  ];
  const connectivity = [
    "WiFi",
    "Bluetooth",
    "4G LTE",
    "5G",
    "NFC",
    "Infrared",
    "Ethernet",
    "USB-C",
  ];
  const cameras = [
    "8MP",
    "12MP",
    "16MP",
    "32MP",
    "48MP",
    "50MP",
    "64MP",
    "108MP",
    "200MP",
  ];
  const screenSizes = [
    '5.0"',
    '5.5"',
    '6.0"',
    '6.1"',
    '6.5"',
    '6.7"',
    '6.8"',
    '7.0"',
    '1.2"',
    '1.4"',
    '1.6"',
  ];
  const batteries = [
    "2000mAh",
    "3000mAh",
    "3500mAh",
    "4000mAh",
    "4500mAh",
    "5000mAh",
    "5500mAh",
    "6000mAh",
    "7000mAh",
    "250mAh",
    "350mAh",
    "450mAh",
    "600mAh",
  ];
  const os = ["Android", "iOS", "Windows", "Linux", "WearOS"];
  const storageType = ["eMMC", "UFS 2.1", "UFS 3.1", "SSD", "HDD"];

  const categoryFeatures = {
    Smartphones: [
      "brands",
      "ratings",
      "ramStorage",
      "connectivity",
      "cameras",
      "screenSizes",
      "batteries",
      "os",
    ],
    Laptops: [
      "brands",
      "ratings",
      "ramStorage",
      "storageType",
      "os",
      "screenSizes",
      "batteries",
    ],
    Tablets: ["brands", "ratings", "ramStorage", "os", "screenSizes"],
    Headphones: ["brands", "ratings", "connectivity", "batteries"],
    Speakers: ["brands", "ratings", "connectivity", "batteries"],
    "Smart TV": ["brands", "ratings", "screenSizes", "os"],
    "Smart Watch": [
      "brands",
      "ratings",
      "connectivity",
      "batteries",
      "os",
      "screenSizes",
    ],
  };

  const handlePriceRange = (e) =>{
    const value = e.target.value;
    setPriceRange([priceRange[0],value])
  }

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      brands: params.brand ? params.brand.split(",") : [],
      ratings: params.rating ? params.rating.split(",") : [],
      ramStorage: params.ramStorage ? params.ramStorage.split(",") : [],
      connectivity: params.connectivity ? params.connectivity.split(",") : [],
      cameras: params.cameras ? params.cameras.split(",") : [],
      screenSizes: params.screenSizes ? params.screenSizes.split(",") : [],
      batteries: params.batteries ? params.batteries.split(",") : [],
      os: params.os ? params.os.split(",") : [],
      storageType: params.storageType ? params.storageType.split(",") : [],
      minPrice: params.minPrice ? Number(params.minPrice) : 0,
      maxPrice: params.maxPrice ? Number(params.maxPrice) : 200000,
    });
    console.log(filters)

    setPriceRange([
      params.minPrice ? Number(params.minPrice) : 0,
      params.maxPrice ? Number(params.maxPrice) : 200000,
    ]);
  }, [searchParams]);



  return (
    <div>
      <aside className="w-80 bg-white shadow-lg px-6 py-1 rounded-xl space-y-6">
        <div className="flex flex-col space-y-2 mt-5 lg:mt-2">
          <h1 className="text-lg font-bold mb-3">Category</h1>
          {/* Category filter */}
          {categories.map((category) => (
            <button
              onClick={()=>setFilters((prev)=>({...prev,category}))}
              key={category}
              className={`shadow-sm p-1 border-gray-600/60 border-2 rounded-xl ${filters.category === category ?"bg-black text-white":""}`}>
              {category}
            </button>
          ))}

          {/* Price filter */}
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
        </div>
      </aside>
    </div>
  );
};

export default FilterSidebar;
