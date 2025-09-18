import React from "react";
import { FiBell, FiMessageSquare } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";

const AdminNavbar = () => {
  return (
    <header className="fixed top-0 z-50 h-20 w-full bg-white shadow flex items-center justify-between px-6 border-b border-gray-200">
      {/* Left Logo/Title */}
      <div className="flex items-center gap-3">
        <span className="text-2xl bg-black rounded-md p-1.5 shadow-xl text-white">
          ⚡
        </span>
        <h1 className="text-lg font-bold text-gray-800 hidden sm:block">
          Admin Dashboard
        </h1>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6 text-gray-700">
        {/* Messages */}
        <div className="relative cursor-pointer">
          <FiMessageSquare className="text-2xl hover:text-black" />
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 rounded-full">
            3
          </span>
        </div>

        {/* Notifications */}
        <div className="relative cursor-pointer">
          <FiBell className="text-2xl hover:text-black" />
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 rounded-full">
            5
          </span>
        </div>

        {/* Profile */}
        <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
          <HiOutlineUserCircle className="text-3xl text-gray-700" />
          <span className="hidden md:block font-medium">Admin</span>
        </button>
      </div>
    </header>
  );
};

export default AdminNavbar;
