import React from 'react'
import { HiXCircle } from 'react-icons/hi'

const MenuDrawer = ({menuOpen,setMenuOpen}) => {
  return (
    <>
      {menuOpen ? (
        <div className="lg:hidden fixed z-90 top-0 shadow-sm bg-gray-200 h-[100%] w-[80%]">
          <div className="absolute right-4 top-4 text-black">
            <HiXCircle
              className="h-7 w-7 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default MenuDrawer