import React from 'react'

const Wishlist = () => {

 
  const wishlist = [
    { id: 1, name: "iPad Pro 12.9 (M2)", price: "₹1,12,900" },
    { id: 2, name: "Dell XPS 15 Laptop", price: "₹1,49,990" },
  ];


  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {wishlist.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-900">{item.name}</p>
            <p className="text-gray-600 text-sm">{item.price}</p>
          </div>
          <button className="px-3 py-2 bg-black hover:bg-gray-800 text-white rounded-lg text-xs shadow">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist