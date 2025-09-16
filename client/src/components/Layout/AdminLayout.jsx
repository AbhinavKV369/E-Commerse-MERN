import React from "react";
import AdminNavbar from "../Admin/AdminNavbar";
import AdminDrawer from "../Admin/AdminDrawer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      {/* Top Navbar */}
      <AdminNavbar />
      <div className="flex flex-1">
        {/* Sidebar */}
        <AdminDrawer />
        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-50 overflow-y-auto ml-60">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
