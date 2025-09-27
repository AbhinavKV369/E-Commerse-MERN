import { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortProducts from "../components/Products/SortProducts";
import { Link } from "react-router-dom";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          id: 1,
          name: "Samsung Galaxy S24 Ultra",
          price: "₹1,29,999",
          image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80", // smartphone
        },
        {
          id: 2,
          name: "Apple MacBook Air M2",
          price: "₹1,09,900",
          image:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80", // laptop
        },
        {
          id: 3,
          name: "Sony WH-1000XM5 Headphones",
          price: "₹29,990",
          image:
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop&q=80", // headphones
        },
        {
          id: 4,
          name: "iPad Pro 12.9 (M2)",
          price: "₹1,12,900",
          image:
            "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&auto=format&fit=crop&q=80", // tablet
        },
        {
          id: 5,
          name: "Dell XPS 15 Laptop",
          price: "₹1,49,990",
          image:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80", // laptop
        },
        {
          id: 6,
          name: "Apple Watch Series 9",
          price: "₹41,900",
          image:
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80", // smartwatch
        },
      ];
      setProducts(fetchedProducts);
    }, 500);
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen py-2 px-4">
      <div className="max-w-7xl mx-auto flex gap-6">
        {/* Sidebar for large devices */}
        <aside className="hidden lg:block w-80 top-0 bottom-0 shadow-2xl">
          <div className="h-full overflow-y-auto scrollbar-hide pr-2">
            <FilterSidebar />
          </div>
        </aside>

        {/* Sidebar for small devices */}
        {filterSidebarOpen && (
          <div
            className="fixed lg:hidden inset-0 bg-black/40 z-40 transition-opacity duration-300"
            onClick={() => setFilterSidebarOpen(false)}
            aria-label="Close Filters"
          />
        )}
        <div
          className={`fixed lg:hidden top-0 left-0 h-full w-80 bg-white shadow-lg z-50 overflow-y-auto scrollbar-hide transform transition-transform duration-300 ${
            filterSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          <button
            onClick={() => setFilterSidebarOpen(false)}
            aria-label="Close Filters"
            className="absolute top-4 right-4 text-gray-600 hover:text-black">
            ✕
          </button>
          <FilterSidebar />
        </div>

        {/* Product List */}
        <main className="flex-1">
          {/* Top bar: Filter + Sort */}
          <div className="flex items-center justify-between my-6">
            {/* Filter button (mobile only) */}
            <div className="lg:hidden">
              <button
                onClick={() => setFilterSidebarOpen(true)}
                className="flex items-center justify-center bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
                aria-label="Open Filters">
                <FiFilter className="h-4 w-4" />
                <span className="mx-2 font-bold">Filter</span>
              </button>
            </div>

            {/* Sort dropdown */}
            <SortProducts />
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition relative">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain mb-4"
                    loading="lazy"
                  />
                  <h2 className="text-sm font-medium text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-lg font-bold text-black mt-2">
                    {product.price}
                  </p>
                </Link>

                <button
                  aria-label={`Add ${product.name} to cart`}
                  className="mt-3 w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CollectionPage;
