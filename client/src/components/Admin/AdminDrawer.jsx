import React from "react";
import { NavLink } from "react-router-dom";
import { HiHome, HiUser, HiCube, HiShoppingCart } from "react-icons/hi";

const AdminDrawer = () => {
  const links = [
    { to: "/admin/dashboard", label: "Dashboard", icon: HiHome },
    { to: "/admin/users", label: "Users", icon: HiUser },
    { to: "/admin/products", label: "Products", icon: HiCube },
    { to: "/admin/orders", label: "Orders", icon: HiShoppingCart },
  ];

  return (
    <aside className="fixed top-20 left-0 h-screen bg-gray-100 w-60 shadow-lg border-r border-gray-200">
      <nav className="relative top-0 bottom-0 h-screen flex flex-col p-4 space-y-2 pt-10 bg-white">
        {links.map((link) => (
          <NavLink
            key={link}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 transition ${
                isActive ? "bg-gray-800 text-white font-semibold" : ""
              }`
            }>
           <link.icon className="text-xl"/>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminDrawer;
