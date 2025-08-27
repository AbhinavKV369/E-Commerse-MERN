import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiMenuAlt3,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi";
import Searchbar from "./Searchbar";
import CartDrawer from "../Layout/CartDrawer";
import MenuDrawer from "../Layout/MenuDrawer";

const Navbar = () => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [menuOpen,setMenuOpen] = useState();
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 p-2.5 z-50 backdrop-blur bg-white/70 shadow-sm">
        <div className="flex justify-between items-center  mx-auto py-5">
          {/* Logo */}
          <Link
            to="#"
            className="text-2xl font-extrabold tracking-wide text-black">
            Volt-Ex{" "}
            <span className="bg-black text-white px-2 py-0.5 rounded-lg">
              ⚡
            </span>
          </Link>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-8 font-medium text-lg uppercase text-black">
            {["Smart Phone", "Laptop", "Speakers", "Head Phones"].map(
              (item) => (
                <Link
                  key={item}
                  to="#"
                  className="relative group transition duration-300">
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-1 text-black">
            <a
              href="#"
              className="p-2 rounded-full hover:bg-black hover:text-white transition duration-300">
              <HiOutlineUser className="h-6 w-6" />
            </a>
            <a
              onClick={() => setCartDrawer(true)}
              className="p-2 mr-3 rounded-full hover:bg-black hover:text-white transition duration-300 flex -top-1.5">
              <HiOutlineShoppingBag className="h-6 w-6" />
              <span className="rounded-full px-2 bg-red-800 text-white absolute -bottom-0 mx-4 my-12">
                1
              </span>
            </a>
            {/* Searchbar */}
            <Searchbar />
            <button className="md:hidden font-bold p-2 rounded-full hover:bg-black hover:text-white" onClick={()=>setMenuOpen(!menuOpen)}>
              <HiMenuAlt3 className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
      {/* Card Drawer*/}
      <CartDrawer drawerOpen={cartDrawer} setDrawerOpen={setCartDrawer} />
      {/* Menu Drawer*/}
      <MenuDrawer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Navbar;
