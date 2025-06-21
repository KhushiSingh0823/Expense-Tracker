import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex items-center justify-between px-6 py-4 sticky top-0 z-50 backdrop-blur-md border-b border-gray-800 bg-[#1a1a1a]/80 shadow-sm">
     
      <button
        className="block lg:hidden text-white"
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      <div className="relative text-center mx-auto lg:mx-0">
        <h2 className="text-[1.7rem] md:text-3xl font-elegant font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-300 bg-clip-text text-transparent tracking-wide drop-shadow-[0_1px_6px_rgba(203,103,255,0.6)]">
          Expense Tracker
        </h2>
        <div className="absolute left-1/2 -bottom-1 w-20 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-300 rounded-full -translate-x-1/2 opacity-70" />
      </div>

      <div className="w-6 lg:w-10"></div>

      {openSideMenu && (
        <div className="fixed top-[61px] left-0 w-64 h-full bg-[#1e1e1e] shadow-lg z-40">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
