import React from "react";
import AdminNavbar from "../Admin/AdminNavbar";
import AdminDrawer from "../Admin/AdminDrawer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      {/* Top Navbar */}
      <AdminNavbar />

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <div className="hidden md:block w-60 fixed top-16 left-0 h-[calc(100%-4rem)] bg-white border-r">
          <AdminDrawer />
        </div>

        {/* Main Content */}
        <main className="flex-1 ml-0 md:ml-60 p-4 bg-gray-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
