import React, { useState } from "react";
import { Trash2, CheckCircle, XCircle } from "lucide-react";

const initialOrders = [
  {
    id: "ORD001",
    customer: "John Doe",
    email: "john@example.com",
    date: "2025-09-15",
    status: "Completed",
    total: 500,
    returnReason: "Damaged product",
    returnStatus: "Pending",
    items: [
      { name: "Laptop", qty: 1, price: 400 },
      { name: "Mouse", qty: 2, price: 50 },
    ],
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    email: "jane@example.com",
    date: "2025-09-16",
    status: "Pending",
    total: 300,
    returnReason: "-",
    returnStatus: "-",
    items: [{ name: "Phone", qty: 1, price: 300 }],
  },
  {
    id: "ORD003",
    customer: "Alice Johnson",
    email: "alice@example.com",
    date: "2025-09-17",
    status: "Completed",
    total: 800,
    returnReason: "Wrong size product",
    returnStatus: "Approved",
    items: [
      { name: "Shoes", qty: 2, price: 200 },
      { name: "T-shirt", qty: 3, price: 100 },
    ],
  },
];

const statusColors = {
  Pending: "bg-gray-100 text-gray-600",
  Completed: "bg-gray-200 text-gray-800",
  Cancelled: "bg-gray-300 text-gray-700",
  Returned: "bg-gray-400 text-gray-900",
  Approved: "bg-gray-200 text-gray-700",
  Rejected: "bg-gray-300 text-gray-800",
};

const AdminOrdersCards = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleStatusChange = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleReturnStatus = (id, newReturnStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, returnStatus: newReturnStatus } : order
      )
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* 👆 pt-20 instead of mt-20 */}
      <h1 className="text-3xl font-bold mb-6 text-gray-900">User Orders</h1>

      <div className="flex flex-col gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="relative bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-transform duration-300">
            {/* Delete button (top-right corner) */}
            <button className="absolute top-4 right-4 px-3 py-1 bg-gray-800 text-white rounded-lg hover:bg-black flex items-center gap-1 transition">
              <Trash2 size={16} /> Delete
            </button>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              {/* Left: Order Info */}
              <div>
                <span className="font-bold text-gray-900 text-lg">
                  {order.id}
                </span>
                <div className="text-gray-700">{order.customer}</div>
                <div className="text-gray-500 text-sm">{order.email}</div>
                <div className="text-gray-400 text-sm">{order.date}</div>
              </div>

              {/* Middle: Status & Total */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    statusColors[order.status]
                  }`}>
                  {order.status}
                </span>
                <span className="font-semibold text-gray-900 text-lg">
                  ${order.total}
                </span>
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="px-3 py-1 rounded-lg text-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition">
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Returned">Returned</option>
                </select>
              </div>

              {/* Right: Return Actions */}
              {order.returnReason && order.returnReason !== "-" && (
                <div className="flex flex-col mt-10 gap-2 bg-gray-50 p-3 rounded-lg max-w-xs">
                  <div className="italic text-gray-700 text-sm">
                    {order.returnReason}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => handleReturnStatus(order.id, "Approved")}
                      className="px-2 py-1 bg-gray-900 text-white text-xs rounded hover:bg-gray-800 flex items-center gap-1 transition">
                      <CheckCircle size={14} /> Approve
                    </button>
                    <button
                      onClick={() => handleReturnStatus(order.id, "Rejected")}
                      className="px-2 py-1 bg-gray-700 text-white text-xs rounded hover:bg-gray-600 flex items-center gap-1 transition">
                      <XCircle size={14} /> Reject
                    </button>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        statusColors[order.returnStatus]
                      }`}>
                      {order.returnStatus}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Ordered Items (only for large screens) */}
            <div className="hidden lg:block mt-6 border-t pt-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Ordered Items
              </h3>
              <ul className="space-y-2">
                {order.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between bg-gray-50 p-2 rounded-lg">
                    <span className="text-gray-700">
                      {item.name} (x{item.qty})
                    </span>
                    <span className="font-medium text-gray-900">
                      ${item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrdersCards;
