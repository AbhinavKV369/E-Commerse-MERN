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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {wishlist.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-xl shadow flex gap-4 items-center border border-gray-200">
          {/* Product Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-contain rounded-lg"
          />

          {/* Product Info */}
          <div className="flex-1">
            <p className="font-semibold text-gray-900">{item.name}</p>
            <p className="text-xs text-gray-500">{item.brand}</p>

            <div className="mt-1">
              <span className="text-gray-900 font-bold">{item.price}</span>
              {item.oldPrice && (
                <span className="ml-2 text-gray-400 line-through text-sm">
                  {item.oldPrice}
                </span>
              )}
            </div>

            <p
              className={`text-xs mt-1 ${
                item.inStock ? "text-green-600" : "text-red-500"
              }`}>
              {item.inStock ? "In Stock" : "Out of Stock"}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2">
            <button
              disabled={!item.inStock}
              className={`px-3 py-2 rounded-lg text-xs shadow ${
                item.inStock
                  ? "bg-black hover:bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}>
              Add to Cart
            </button>
            <button className="px-3 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg text-xs shadow">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
