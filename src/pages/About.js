import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const achievements = [
    {
      icon: "🏆",
      title: "Juara 1 Turnamen Bogor Junior League 2023 (U-12)", 
      description: "Tim U-12 berhasil menjuarai turnamen bergengsi dengan mengalahkan 16 tim peserta"
    },
    {
      icon: "🥈",
      title: "Runner Up Liga Internal Kota Bogor 2023 (U-10)",
      description: "Prestasi membanggakan dari tim junior kita di kompetisi tingkat kota"
    },
    {
      icon: "🏅", 
      title: "Top Scorer Turnamen Bogor Cup 2022",
      description: "Striker kami, Ahmad, mencetak 12 gol sepanjang turnamen"
    },
    {
      icon: "🌟",
      title: "5 Pemain Terpilih untuk Tim Porda Kota Bogor",
      description: "Membuktikan kualitas pembinaan pemain muda kami"
    }
  ];

  return (
    <div className="min-h-screen pt-16 lg:ml-0 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mb-6">Tentang Tiger Soccer School</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Visi Kami</h2>
          <p className="mb-4">
            Menjadi sekolah sepak bola terbaik di Bogor yang menghasilkan pemain-pemain muda berbakat
            dengan karakter yang kuat.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">Misi Kami</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Memberikan pelatihan sepak bola berkualitas untuk anak-anak</li>
            <li>Mengembangkan karakter sportif dan disiplin</li>
            <li>Menciptakan lingkungan berlatih yang menyenangkan</li>
            <li>Membangun komunitas sepak bola yang positif</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Prestasi & Tim Kami</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img 
                src="/assets/juaraIJSL2023.jpg" 
                alt="Tim Tiger Soccer School" 
                className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setShowModal(true)}
              />
              <div className="text-center">
                <p className="text-sm text-gray-600">Tim U-12 Tiger Soccer School</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Pencapaian Kami</h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-yellow-500 mr-2">{achievement.icon}</span>
                    {achievement.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-3xl w-full p-6 relative">
              <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setShowModal(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid md:grid-cols-2 gap-6">
                <img 
                  src="/assets/juaraIJSL2023.jpg" 
                  alt="Tim Tiger Soccer School" 
                  className="w-full rounded-lg shadow-md"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Pencapaian Kami</h3>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="border-b pb-3">
                        <div className="flex items-center mb-2">
                          <span className="text-yellow-500 mr-2 text-xl">{achievement.icon}</span>
                          <h4 className="font-bold">{achievement.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Fasilitas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">⚽ Lapangan Standar</h3>
              <p>Lapangan rumput sintetis berkualitas</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">🥅 Peralatan Lengkap</h3>
              <p>Bola, cone, gawang portable, dan perlengkapan latihan</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">🏥 Klinik Cedera</h3>
              <p>Penanganan cedera oleh tim medis profesional</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">🚿 Ruang Ganti</h3>
              <p>Fasilitas ruang ganti dan toilet yang bersih</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
