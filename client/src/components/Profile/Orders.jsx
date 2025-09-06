import React from 'react'

const Orders = () => {
    const orders = [
      {
        id: "ORD12345",
        date: "2025-09-01",
        status: "Delivered",
        total: "₹74,999",
        progress: 100,
      },
      {
        id: "ORD67890",
        date: "2025-08-15",
        status: "Shipped",
        total: "₹41,900",
        progress: 70,
      },
    ];
  return (
    <div className="flex-1 space-y-5 ">
      {/* Orders */}
      { orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-5 rounded-xl shadow border border-gray-200">
            <div className="flex justify-between flex-wrap gap-2">
              <div>
                <h3 className="font-bold text-gray-900">Order #{order.id}</h3>
                <p className="text-sm text-gray-500">{order.date}</p>
                <p className="font-semibold text-gray-800 mt-2">
                  Total: {order.total}
                </p>
              </div>
              <span
                className={`flex items-center px-3 py-1 text-xs font-bold rounded-full ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}>
                {order.status}
              </span>
            </div>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-black h-2 rounded-full"
                style={{ width: `${order.progress}%` }}></div>
            </div>
          </div>
        ))}
    </div>
  );
}


export default Orders