import { HiXCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavDrawer = ({ navDrawerOpen, setNavDrawerOpen ,navLinks}) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed z-50 top-0 left-0  h-full w-full backdrop-blur transition-opacity ${
          navDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setNavDrawerOpen(false)}></div>

      {/* Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 z-50 h-full w-[80%] bg-gray-200 shadow-md transform transition-transform duration-300 
        ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Close button */}
        <div className="absolute right-4 top-4 text-black">
          <HiXCircle
            className="h-7 w-7 cursor-pointer"
            onClick={() => setNavDrawerOpen(false)}
          />
        </div>

        {/* Drawer content */}
        <div className="p-6 mt-20 flex flex-col space-y-4">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={`/collections/${item}`}
              className="text-lg font-medium text-gray-700 hover:text-black relative group transition duration-300 uppercase"
              onClick={() => setNavDrawerOpen(false)}>
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-50"></span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavDrawer;
