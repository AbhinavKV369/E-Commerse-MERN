import React from "react";
import { FiBell } from "react-icons/fi";
import { HiSearch, HiBell, HiUserCircle, HiChevronDoubleLeft } from "react-icons/hi";

const AdminNavbar = () => {
  return (
    <header className="fixed h-20 w-full bg-white shadow flex items-center justify-between px-6 border-b border-gray-300">
      {/* Left Logo/Title */}
      <div className="items-center gap-2 hidden lg:flex">
        <span className="text-2xl bg-black rounded-md p-1 shadow-xl">⚡</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-3 w-72">
        <HiSearch className="text-black mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none flex-1 text-sm"
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6 text-black px-5">
        <FiBell className="text-2xl cursor-pointer hover:text-gray-800" />
      </div>
    </header>
  );
};

export default AdminNavbar;
