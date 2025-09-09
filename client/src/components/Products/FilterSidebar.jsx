
const FilterSidebar = () => {

  const categories = [
    "Smartphones",
    "Laptops",
    "Tablets",
    "Headphones",
    "Speakers",
  ];
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
  const ratings = ["✰✰✰✰✰", "✰✰✰✰", "✰✰✰"];
  const ramStorage = ["4GB/64GB", "6GB/128GB", "8GB/256GB"]
  const connectivity = ["WiFi", "Bluetooth", "5G"];

  return (
    <div>
      {/* Sidebar */}
      <aside className="w-80 bg-white shadow-lg p-6 rounded-xl space-y-6">
        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Categories
          </h3>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className="text-left px-3 py-1 rounded hover:bg-gray-100 transition">
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Brands with toggle buttons */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Popular Brands
          </h3>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <button
                key={brand}
                className="px-3 py-1 rounded-full border border-gray-300 hover:bg-black hover:text-white transition">
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range Slider */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Price</h3>
          <div className="flex items-center gap-3">
            <span className="text-gray-600 text-sm">₹0</span>
            <input
              type="range"
              min="0"
              max="200000"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none accent-gray-900"
            />
            <span className="text-gray-600 text-sm">₹2,00,000+</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Min</span>
            <span>Max</span>
          </div>
        </div>

        {/* Ratings */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Customer Ratings
          </h3>
          <div className="flex flex-col gap-2">
            {ratings.map((rating, idx) => (
              <button
                key={idx}
                className="flex items-center gap-2 hover:bg-gray-100 px-3 py-1 rounded transition font-bold first-letter text-xl">
                {rating} <span className="font-normal">& above</span>
              </button>
            ))}
          </div>
        </div>

        {/* RAM / Storage */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            RAM / Storage
          </h3>
          <div className="flex flex-wrap gap-2">
            {ramStorage.map((spec) => (
              <button
                key={spec}
                className="px-3 py-1 rounded-full border border-gray-300 hover:bg-black hover:text-white transition">
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Connectivity */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Connectivity
          </h3>
          <div className="flex flex-wrap gap-2">
            {connectivity.map((conn) => (
              <button
                key={conn}
                className="px-3 py-1 rounded-full border border-gray-300 hover:bg-black hover:text-white transition">
                {conn}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default FilterSidebar;
