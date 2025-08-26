import { HiOutlineShoppingBag, HiOutlineUser, HiSearch} from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="backdrop:blur bg-neutral-600/20 p-3 items-center ">
        <div className="flex justify-between items-center p-3">
          <div className="">
            <Link to="#" className="text-xl font-bold pl-3">
              Volt-Ex <span className="bg-blue-700 rounded-xl">⚡</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-5 font-bold text-xl uppercase">
            <Link to="#">Men</Link>
            <Link to="#">Women</Link>
            <Link to="#">Top Wear</Link>
            <Link to="#">Bottom Wear</Link>
          </div>
          <div className="flex items-center space-x-3 text-2xl">
            <a href="#" className="">
              <HiOutlineUser className="h-5" />
            </a>
            <a href="#" className="">
              <HiOutlineShoppingBag className="h-5" />
            </a>
            <a href="#" className="">
              <HiSearch className="h-5" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
