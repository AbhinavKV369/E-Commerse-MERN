import React, { } from "react";
import { HiXCircle } from "react-icons/hi";

const CartDrawer = ({drawerOpen,setDrawerOpen}) => {
  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed top-0 z-100 right-0 h-full lg:w-[25%] md:w-[40%] w-[100%] 
        bg-gray-300 shadow-xl transform transition-transform duration-300 
        ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close button */}
        <div className="absolute right-4 top-4 text-black">
          <HiXCircle
            className="h-7 w-7 cursor-pointer"
            onClick={() => setDrawerOpen(false)}
          />
        </div>
        {/* Drawer content */}
        <div className="p-6">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <p>Cart items will appear here...</p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
