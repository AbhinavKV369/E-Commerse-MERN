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

  const handleCancel = (orderId) => alert(`Cancel order ${orderId}`);
  const handleInvoice = (orderId) => alert(`View invoice for ${orderId}`);
  const handleTrack = (orderId) => alert(`Track order ${orderId}`);

  return (
    <div className="flex-1 space-y-5 p-5 bg-white min-h-screen">
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white p-5 rounded-xl shadow border border-gray-200 text-gray-800">
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
                  : order.status === "Shipped"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-gray-100 text-gray-700"
              }`}>
              {order.status}
            </span>
          </div>

          {/* Items */}
          <div className="mt-4 border-t border-gray-200 pt-3">
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

          {/* Action Buttons */}
          <div className="mt-4 flex gap-3 flex-wrap">
            {order.status !== "Delivered" && (
              <button
                onClick={() => handleCancel(order.id)}
                className="px-4 py-2 text-sm font-semibold text-white bg-black rounded hover:bg-gray-700">
                Cancel Order
              </button>
            )}
            <button
              onClick={() => handleInvoice(order.id)}
              className="px-4 py-2 text-sm font-semibold text-white bg-black rounded hover:bg-gray-700">
              View Invoice
            </button>
            <button
              onClick={() => handleTrack(order.id)}
              className="px-4 py-2 text-sm font-semibold text-white bg-black rounded hover:bg-gray-700">
              Track Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
