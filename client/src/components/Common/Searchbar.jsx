import { useEffect, useState } from "react";
import { HiSearch, HiXCircle } from "react-icons/hi";

const suggestions = [
  // 🔹 Brands
  "Samsung",
  "Lenovo",
  "HP",
  "Dell",
  "Realme",
  "Redmi",
  "Infinix",
  "iPhone",
  "Motorola",
  "Asus",
  "Boat",
  "Zebronics",
  "Acer",
  "Microsoft Surface",
  "OnePlus",
  "Oppo",
  "Vivo",
  "Nothing",
  "Sony",
  "LG",
  "Nokia",
  "Honor",
  "Mi",
  "JBL",
  "Noise",
  "Skullcandy",
  "Beats",
  "Logitech",
  "Razer",

  // 🔹 Popular Smartphones
  "Samsung Galaxy S24 Ultra",
  "iPhone 15 Pro Max",
  "OnePlus 12R",
  "Google Pixel 8 Pro",
  "Realme GT 6",
  "Xiaomi 14 Pro",
  "Motorola Edge 50",
  "Nothing Phone 2a",

  // 🔹 Popular Laptops
  "MacBook Air M2",
  "MacBook Pro M3",
  "Dell XPS 13",
  "HP Spectre x360",
  "Lenovo ThinkPad X1 Carbon",
  "Asus ROG Zephyrus G14",
  "Acer Predator Helios",
  "Microsoft Surface Laptop 5",

  // 🔹 Audio & Accessories
  "AirPods Pro 2",
  "Samsung Galaxy Buds 2 Pro",
  "Sony WH-1000XM5",
  "JBL Flip 6",
  "Boat Rockerz 550",
  "Noise ColorFit Smartwatch",
  "Apple Watch Series 9",
  "Samsung Galaxy Watch 6",
];


const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [placeholder, setPlaceholder] = useState("Samsung");
  const [isOpen, setIsOpen] = useState(false);

  // Rotate placeholder
  useEffect(() => {
    const random = suggestions[Math.floor(Math.random() * suggestions.length)];
    setPlaceholder(random);

    const interval = setInterval(() => {
      const random =
        suggestions[Math.floor(Math.random() * suggestions.length)];
      setPlaceholder(random);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const toggleSearch = () => setIsOpen((prev) => !prev);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    setIsOpen(false);
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isOpen
          ? "flex items-center justify-center absolute h-25 w-full top-0 left-0 right-0 bg-white z-50"
          : ""
      }`}>
      {isOpen ? (
        <form
          className="relative w-full flex justify-center"
          onSubmit={handleSearch}>
          <div className="flex w-3/5 md:w-1/2 border-2 rounded-full overflow-hidden">
            <input
              className="p-5 w-full h-12 outline-none"
              type="text"
              aria-label="Search products"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder={placeholder}
            />
            <button
              type="submit"
              className="px-4 flex items-center justify-center hover:bg-gray-200 transition">
              <HiSearch className="h-6 w-6 text-gray-900" />
            </button>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={toggleSearch}
            className="absolute right-8 top-2 text-gray-600 hover:text-black transition">
            <HiXCircle className="w-10 h-10" />
          </button>
        </form>
      ) : (
        <button
          onClick={toggleSearch}
          className="p-2 rounded-full hover:bg-black hover:text-white transition duration-300">
          <HiSearch className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
