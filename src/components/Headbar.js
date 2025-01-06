import React from 'react';
import { FaFutbol } from 'react-icons/fa';

const Headbar = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-r from-blue-900 to-indigo-900 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo dan Brand */}
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/ssb.png" 
              alt="Tiger Soccer School Logo" 
              className="h-10 w-10 rounded-full object-cover border-2 border-blue-400/30" 
            />
            <div>
              <h1 className="text-xl font-bold text-white">
                Tiger Soccer School
              </h1>
              <p className="text-xs text-blue-200">
                Akademi Sepak Bola Terbaik
              </p>
            </div>
          </div>

          {/* Tombol Daftar */}
          <a 
            href="https://wa.me/your-number"
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
