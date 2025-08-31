import { HiXCircle } from "react-icons/hi";
import CartContents from "../Cart/cartContents";

const CartDrawer = ({ cartDrawerOpen, setCartDrawerOpen }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-opacity-40 transition-opacity z-40 ${
          cartDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setCartDrawerOpen(false)}></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full lg:w-[30%] md:w-[60%] w-full 
        bg-gray-300 shadow-xl transform transition-transform duration-300 
        flex flex-col ${
          cartDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Close button */}
        <div className="absolute right-4 top-4 text-black">
          <HiXCircle
            className="h-7 w-7 cursor-pointer"
            onClick={() => setCartDrawerOpen(false)}
          />
        </div>

        {/* Drawer content */}
        <div className="p-6 flex-1 overflow-y-auto scrollbar-hide">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <CartContents />
        </div>

        {/* Footer button */}
        <div className="p-4 border-t border-gray-400 bg-gray-200 rounded-t-xl shadow-inner">
          {/* Totals */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-700">
              <p className="text-sm">Total Quantity</p>
              <p className="font-bold text-lg text-black">{1}</p>
            </div>
            <div className="text-gray-700 text-right">
              <p className="text-sm">Total Amount</p>
              <p className="font-bold text-lg text-black">₹{1000}</p>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-black hover:bg-gray-900 text-white py-3 rounded-xl font-semibold shadow-md transition">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
