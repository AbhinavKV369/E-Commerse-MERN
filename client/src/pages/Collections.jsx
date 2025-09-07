import React from "react";
import ProductGrid from "../components/Products/ProductGrid";

// Dummy products
const products = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    price: "₹1,29,999",
    image: "/assets/Gadgets.png",
  },
  {
    id: 2,
    name: "Apple MacBook Air M2",
    price: "₹99,999",
    image: "/assets/Laptop.png",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    price: "₹29,999",
    image: "/assets/Headphones.png",
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    price: "₹45,999",
    image: "/assets/Watch.png",
  },
];

const CollectionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 pt-6 text-center">
        Our Collection
      </h1>

      {/* Product Grid */}
     <ProductGrid products={products} />
      </div>
  );
};

export default CollectionPage;
