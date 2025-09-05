import { useState } from "react";
import {
  FiPackage,
  FiHeart,
  FiMapPin,
  FiLock,
  FiLogOut,
  FiBell,
  FiCreditCard,
} from "react-icons/fi";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("orders");

  const user = {
    name: "Abhinav",
    email: "abhinav@example.com",
    phone: "+91 98765 43210",
    avatar:
      "https://ui-avatars.com/api/?name=Abhinav&background=000000&color=fff",
  };

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

  const wishlist = [
    { id: 1, name: "iPad Pro 12.9 (M2)", price: "₹1,12,900" },
    { id: 2, name: "Dell XPS 15 Laptop", price: "₹1,49,990" },
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      details: "123 Street, Kochi, Kerala, 682001",
      default: true,
    },
    {
      id: 2,
      type: "Work",
      details: "Tech Park, Infopark, Kochi, 682030",
      default: false,
    },
  ];

  const payments = [
    { id: 1, card: "**** **** **** 1234", type: "Visa", expiry: "06/26" },
    { id: 2, card: "**** **** **** 5678", type: "Mastercard", expiry: "09/27" },
  ];

  const notifications = [
    { id: 1, msg: "Your order #ORD67890 has been shipped 🚚", time: "2h ago" },
    {
      id: 2,
      msg: "New product added to wishlist: Dell XPS 15 💻",
      time: "1d ago",
    },
    { id: 3, msg: "Password changed successfully 🔑", time: "3d ago" },
  ];

  const tabs = [
    { id: "orders", label: "My Orders", icon: <FiPackage /> },
    { id: "wishlist", label: "Wishlist", icon: <FiHeart /> },
    { id: "addresses", label: "Addresses", icon: <FiMapPin /> },
    { id: "payments", label: "Payment Methods", icon: <FiCreditCard /> },
    { id: "notifications", label: "Notifications", icon: <FiBell /> },
    { id: "security", label: "Security", icon: <FiLock /> },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block w-80 bg-white shadow-md rounded-xl p-6">
          <div className="flex flex-col items-center">
            <img
              src={user.avatar}
              alt="profile"
              className="w-24 h-24 rounded-full border-4 border-gray-200 shadow-md"
            />
            <h1 className="text-lg font-bold text-gray-900 mt-3">
              {user.name}
            </h1>
            <p className="text-gray-600 text-sm">{user.email}</p>
            <p className="text-gray-600 text-sm">{user.phone}</p>
            <button className="mt-4 px-5 py-2 text-sm bg-black text-white rounded-lg shadow hover:bg-gray-800">
              Edit Profile
            </button>
          </div>

          {/* Menu */}
          <nav className="mt-8 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-black text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}>
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>

          <button className="mt-8 w-full px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 justify-center text-sm hover:bg-red-700">
            <FiLogOut /> Logout
          </button>
        </aside>

        {/* Mobile Tabs */}
        <div className="lg:hidden bg-white rounded-xl shadow-md p-3 flex gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-max px-3 py-2 text-xs rounded-lg transition ${
                activeTab === tab.id
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <main className="flex-1 space-y-5">
          {/* Orders */}
          {activeTab === "orders" &&
            orders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-5 rounded-xl shadow border border-gray-200">
                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Order #{order.id}
                    </h3>
                    <p className="text-sm text-gray-500">{order.date}</p>
                    <p className="font-semibold text-gray-800 mt-2">
                      Total: {order.total}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
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

          {/* Wishlist */}
          {activeTab === "wishlist" && (
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
          )}

          {/* Addresses */}
          {activeTab === "addresses" && (
            <div className="space-y-4">
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                  <div>
                    <h4 className="font-bold text-gray-900">{addr.type}</h4>
                    <p className="text-gray-600 text-sm">{addr.details}</p>
                    {addr.default && (
                      <span className="text-green-600 text-xs">Default</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-xs bg-red-200 text-red-700 rounded-lg hover:bg-red-300">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              <button className="px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-xl shadow text-sm">
                + Add Address
              </button>
            </div>
          )}

          {/* Payment Methods */}
          {activeTab === "payments" && (
            <div className="space-y-4">
              {payments.map((card) => (
                <div
                  key={card.id}
                  className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                  <div>
                    <p className="font-semibold text-gray-900">{card.type}</p>
                    <p className="text-gray-600 text-sm">
                      {card.card} (Exp: {card.expiry})
                    </p>
                  </div>
                  <button className="px-3 py-1 text-xs bg-red-200 text-red-700 rounded-lg hover:bg-red-300">
                    Remove
                  </button>
                </div>
              ))}
              <button className="px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-xl shadow text-sm">
                + Add Card
              </button>
            </div>
          )}

          {/* Notifications */}
          {activeTab === "notifications" &&
            notifications.map((note) => (
              <div
                key={note.id}
                className="bg-white p-3 rounded-xl shadow flex justify-between items-center">
                <p className="text-sm text-gray-800">{note.msg}</p>
                <span className="text-xs text-gray-500">{note.time}</span>
              </div>
            ))}

          {/* Security */}
          {activeTab === "security" && (
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold text-gray-900 mb-3">
                Change Password
              </h3>
              <button className="px-5 py-2 bg-black hover:bg-gray-800 text-white rounded-xl shadow text-sm">
                Update Password
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Profile;
