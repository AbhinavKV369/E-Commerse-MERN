import React from "react";

const Wishlist = () => {
  const wishlist = [
    {
      id: 1,
      name: "iPad Pro 12.9 (M2)",
      brand: "Apple",
      price: "₹1,12,900",
      oldPrice: "₹1,19,900",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-11-select-202212?wid=940&hei=1112&fmt=png-alpha&.v=1670865938893",
      inStock: true,
    },
    {
      id: 2,
      name: "Dell XPS 15 Laptop",
      brand: "Dell",
      price: "₹1,49,990",
      oldPrice: "₹1,59,990",
      image:
        "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/xps-15-9520-laptop.png",
      inStock: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {wishlist.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between hover:shadow-xl transition cursor-pointer border border-gray-100">
          {/* Product Image */}
          <div className="flex justify-center mb-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-contain rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h3 className="text-md font-semibold text-gray-900">{item.name}</h3>
            <p className="text-xs text-gray-500">{item.brand}</p>
            <div className="mt-2">
              <span className="text-gray-900 font-bold">{item.price}</span>
              {item.oldPrice && (
                <span className="ml-2 text-gray-400 line-through text-sm">
                  {item.oldPrice}
                </span>
              )}
            </div>
            <p
              className={`mt-1 text-xs font-medium ${
                item.inStock ? "text-green-600" : "text-red-500"
              }`}>
              {item.inStock ? "In Stock" : "Out of Stock"}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-4">
            <button
              disabled={!item.inStock}
              className={`flex-1 px-3 py-2 rounded-xl text-sm font-medium shadow text-white transition ${
                item.inStock
                  ? "bg-black hover:bg-gray-800"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}>
              Add to Cart
            </button>
            <button className="flex-1 px-3 py-2 rounded-xl text-sm font-medium shadow bg-red-100 text-red-600 hover:bg-red-200 transition">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
