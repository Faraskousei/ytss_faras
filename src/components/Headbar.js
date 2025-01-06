import React, { useState } from 'react';
import { FaFutbol, FaBars, FaTimes } from 'react-icons/fa';

const Headbar = ({ toggleSidebar }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg transition-all duration-300 hover:from-emerald-700 hover:to-teal-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600 transition-all duration-300"
          >
            <FaBars className="h-6 w-6" />
          </button>

          <div className="flex-1 flex justify-center lg:justify-end">
            <a
              href="https://wa.me/6285161132602"
              className={`
                group relative inline-flex items-center px-6 py-3 
                rounded-xl font-semibold text-sm
                overflow-hidden transition-all duration-300
                ${isHovered ? 'transform scale-105' : ''}
              `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="absolute inset-0 w-full h-full bg-white transition-all duration-300 group-hover:bg-emerald-50"></span>
              <span className="relative flex items-center text-emerald-600 font-bold">
                <FaFutbol className="mr-2 animate-spin-slow" />
                Daftar Sekarang
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Headbar;
