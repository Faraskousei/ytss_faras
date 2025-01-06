import React from 'react';
import { FaFutbol } from 'react-icons/fa';

const Headbar = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full bg-gradient-to-r from-blue-900 to-indigo-900 shadow-lg">
      <nav className="max-w-10xxl mx-auto px-10 py-7">
        <div className="flex items-center justify-end">
          {/* Tombol Daftar */}
          <a 
            href="https://wa.me/6285161132602"
            className="inline-flex items-center px-6 py-2.5 bg-white rounded-lg text-blue-900 font-semibold text-sm hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <FaFutbol className="mr-2" />
            Daftar Sekarang
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Headbar;
