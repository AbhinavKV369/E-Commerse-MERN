import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Smartphones",
      price: "$999",
      stock: 20,
      status: "Active",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "MacBook Pro",
      category: "Laptops",
      price: "$1999",
      stock: 5,
      status: "Low Stock",
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Products</h1>

      {/* Search & Add Button */}
      <div className="flex items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white text-gray-800"
        />
        <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
          + Add Product
        </button>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="w-full text-left">
          <thead className="bg-gray-200 text-gray-800 text-sm">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {products.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-12 h-12 rounded-lg object-cover border"
                  />
                </td>
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4">{p.category}</td>
                <td className="p-4 font-semibold">{p.price}</td>
                <td className="p-4">{p.stock}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      p.status === "Active"
                        ? "bg-gray-900 text-white"
                        : "bg-gray-300 text-gray-800"
                    }`}>
                    {p.status}
                  </span>
                </td>
                <td className="p-4 text-center space-x-2">
                  <button className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-black transition">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
