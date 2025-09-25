import React from "react";
import { FiBell } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";

const AdminNotificationPage = () => {
  // Dummy notifications (static UI)
  const notifications = [
    {
      id: 1,
      message: "New order #ORD1023 placed by John Doe",
      read: false,
      createdAt: "2025-09-19T10:30:00.000Z",
    },
    {
      id: 2,
      message: "Payment received for order #ORD1020",
      read: true,
      createdAt: "2025-09-19T09:45:00.000Z",
    },
    {
      id: 3,
      message: "Product 'iPhone 16' stock is low",
      read: false,
      createdAt: "2025-09-18T18:00:00.000Z",
    },
    {
      id: 4,
      message: "New user Mike Johnson registered",
      read: true,
      createdAt: "2025-09-18T16:30:00.000Z",
    },
  ];

  return (
    <div className=" p-6 bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold flex items-center gap-2 text-3xl ">
          <FiBell className="text-gray-600 text-3xl " /> Notifications
        </h1>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow-sm hover:bg-gray-800 transition">
          Mark All as Read
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-start gap-3 p-5 rounded-xl border transition 
              ${
                notification.read
                  ? "bg-white border-gray-200"
                  : "bg-white border-gray-300 shadow-sm"
              }
              hover:shadow-md`}>
            {/* Icon */}
            <div className="text-2xl mt-1">
              {notification.read ? (
                <AiOutlineCheckCircle className="text-gray-400" />
              ) : (
                <FiBell className="text-gray-700" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <p
                className={`${
                  notification.read
                    ? "text-gray-600"
                    : "text-gray-900 font-medium"
                }`}>
                {notification.message}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(notification.createdAt).toLocaleString()}
              </p>
            </div>

            {/* Badge */}
            {!notification.read && (
              <span className="text-xs bg-gray-900 text-white px-2 py-0.5 rounded-full">
                New
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminNotificationPage;
