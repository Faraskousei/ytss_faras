import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

const Home = () => {
  return (
    <div className="min-h-screen pt-16 lg:ml-0 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs />
        
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-8 lg:p-10 mb-12 shadow-2xl border border-blue-400/20">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-indigo-100">
              Tiger Soccer School
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
              Membentuk Bakat Sepak Bola Anak Usia 4-16 Tahun di Bogor dengan Metode Pelatihan Modern
            </p>
            <button className="group relative inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-blue-100 transition-all duration-300 group-hover:scale-105"></span>
              <span className="relative text-blue-600 font-bold">
                Daftar Sekarang
              </span>
            </button>
          </div>
          <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 w-2/5 h-full opacity-15">
            <img src="/assets/ssb.png" alt="Background" className="w-full h-full object-cover rotate-12" />
          </div>
        </div>

        {/* Keunggulan Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50 hover:border-blue-200 hover:-translate-y-1">
            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">⚽</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pelatih Profesional</h3>
            <p className="text-gray-600 leading-relaxed">
              Tim pelatih bersertifikasi nasional dengan pengalaman lebih dari 10 tahun di bidang pembinaan sepak bola usia muda
            </p>
          </div>

          <div className="group bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50 hover:border-blue-200 hover:-translate-y-1">
            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🏆</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Kompetisi Berkala</h3>
            <p className="text-gray-600 leading-relaxed">
              Kesempatan mengikuti turnamen lokal dan nasional untuk mengembangkan pengalaman bertanding
            </p>
          </div>

          <div className="group bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50 hover:border-blue-200 hover:-translate-y-1">
            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">📋</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Kurikulum Terstruktur</h3>
            <p className="text-gray-600 leading-relaxed">
              Program latihan yang disesuaikan dengan usia dan kemampuan untuk perkembangan optimal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
