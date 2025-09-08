import React from "react";

const Orders = () => {
  const orders = [
    {
      id: "ORD12345",
      date: "2025-09-01",
      status: "Delivered",
      total: "₹74,999",
      progress: 100,
      payment: "UPI",
      shippingAddress: "Abhinav, Kochi, Kerala - 682020",
      courier: "BlueDart",
      trackingId: "BLD987654321",
      estimatedDelivery: "2025-09-03",
      items: [{ name: "iPhone 15 Pro Max", qty: 1, price: "₹74,999" }],
    },
    {
      id: "ORD67890",
      date: "2025-08-15",
      status: "Shipped",
      total: "₹41,900",
      progress: 70,
      payment: "Credit Card",
      shippingAddress: "Abhinav, Trivandrum, Kerala - 695001",
      courier: "Delhivery",
      trackingId: "DLV123456789",
      estimatedDelivery: "2025-09-10",
      items: [{ name: "Samsung Galaxy S24", qty: 1, price: "₹41,900" }],
    },
  ];

  return (
    <div className="flex-1 space-y-5">
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white p-5 rounded-xl shadow border border-gray-200">
          {/* Order Header */}
          <div className="flex justify-between flex-wrap gap-2">
            <div>
              <h3 className="font-bold text-gray-900">Order #{order.id}</h3>
              <p className="text-sm text-gray-500">{order.date}</p>
              <p className="font-semibold text-gray-800 mt-2">
                Total: {order.total}
              </p>
              <p className="text-sm text-gray-600">Payment: {order.payment}</p>
              <p className="text-sm text-gray-600">
                Courier: {order.courier} ({order.trackingId})
              </p>
              <p className="text-sm text-gray-600">
                Estimated Delivery: {order.estimatedDelivery}
              </p>
              <p className="text-sm text-gray-600">
                Shipping Address: {order.shippingAddress}
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

          {/* Items */}
          <div className="mt-4 border-t pt-3">
            <h4 className="text-sm font-bold text-gray-800">Items:</h4>
            <ul className="mt-2 space-y-1">
              {order.items.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between text-sm text-gray-700">
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Progress */}
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full"
              style={{ width: `${order.progress}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
