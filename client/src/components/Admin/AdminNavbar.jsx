import React from "react";
import { FiBell, FiMessageSquare } from "react-icons/fi";

const AdminNavbar = () => {
  return (
    <header className="fixed z-100 h-20 w-full bg-white shadow flex items-center justify-between px-6 border-b border-gray-300">
      {/* Left Logo/Title */}
      <div className="items-center gap-2 ">
        <span className="text-2xl bg-black rounded-md p-1 shadow-xl backdrop-blur-2xl">
          ⚡
        </span>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6 text-black px-5">
        <FiMessageSquare className="text-2xl cursor-pointer hover:text-gray-800" />
        <FiBell className="text-2xl cursor-pointer hover:text-gray-800" />
      </div>
    </header>
  );
};

export default AdminNavbar;
