import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaCalendarAlt, FaWhatsapp, FaTrophy, FaUserFriends, FaFacebook, FaInstagram, FaYoutube, FaBars, FaTimes, FaImages } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Toggle Button untuk Mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white lg:hidden hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay untuk Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-all duration-500"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 h-screen w-80 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 z-50
        transform transition-transform duration-500 ease-out shadow-2xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:sticky flex flex-col
        border-r border-blue-100/50 dark:border-blue-800/30
      `}>
        {/* Logo & Brand Section */}
        <div className="relative p-6 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-blue-900/50">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <img 
                src="/assets/ssb.png" 
                alt="Logo"
                className="relative w-16 h-16 rounded-full border-2 border-blue-400/30 shadow-xl transform group-hover:scale-105 transition-all duration-500" 
              />
              <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-2 shadow-lg">
                <FaTrophy className="w-3.5 h-3.5 text-blue-900" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Tiger Soccer
              </h2>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Akademi Sepak Bola
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-8 px-4">
          <div className="space-y-2">
            <Link to="/" onClick={toggleSidebar} className="flex items-center gap-4 px-6 py-3.5 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 transition-all duration-300 group">
              <FaHome className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Beranda</span>
            </Link>
            
            <Link to="/about" onClick={toggleSidebar} className="flex items-center gap-4 px-6 py-3.5 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 transition-all duration-300 group">
              <FaInfoCircle className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Tentang Kami</span>
            </Link>
            
            <Link to="/schedule" onClick={toggleSidebar} className="flex items-center gap-4 px-6 py-3.5 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 transition-all duration-300 group">
              <FaCalendarAlt className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Jadwal</span>
            </Link>

            <Link to="/gallery" onClick={toggleSidebar} className="flex items-center gap-4 px-6 py-3.5 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 transition-all duration-300 group">
              <FaImages className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Galeri</span>
            </Link>
          </div>

          {/* Program Section */}
          <div className="mt-8">
            <h3 className="px-6 mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Program Usia
            </h3>
            <div className="space-y-2">
              {['4-6 tahun', '7-9 tahun', '10-12 tahun', '13-16 tahun'].map((age) => (
                <button 
                  key={age} 
                  className="w-full flex items-center gap-4 px-6 py-3 text-slate-600 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 rounded-xl transition-all duration-300 group"
                >
                  <FaUserFriends className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{age}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Footer Section */}
        <div className="p-6 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-blue-900/50 border-t border-blue-100/50 dark:border-blue-800/30">
          <a 
            href="https://wa.me/6285161132602"
            className="flex items-center justify-center gap-3 bg-gradient-to-br from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500 text-white py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-0.5"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span className="font-semibold">Hubungi Admin</span>
          </a>

          <div className="flex justify-center gap-6 mt-6">
            {[FaFacebook, FaInstagram, FaYoutube].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="p-2.5 rounded-lg text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
