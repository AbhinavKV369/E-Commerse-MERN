import React from "react";
import AdminNavbar from "../Admin/AdminNavbar";
import AdminDrawer from "../Admin/AdminDrawer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="h-screen w-full ">
      {/* Top Navbar */}
      <AdminNavbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <AdminDrawer />

        <main className="flex-1 mt-20 h-[80vh] p-2 bg-gray-50 ml-60 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
