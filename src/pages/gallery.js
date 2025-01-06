import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import photo1 from '../assets/1.jpg'
import photo2 from '../assets/2.jpg'
import photo3 from '../assets/3.jpeg'
import photo4 from '../assets/4.jpeg'
import photo5 from '../assets/5.jpg'
import photo6 from '../assets/6.jpg'

const Gallery = () => {
  return (
    <div className="min-h-screen pt-16 lg:ml-0 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Foto 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src={photo1} 
              alt="Latihan Teknik Dasar"
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Latihan Teknik Dasar</h3>
              <p className="text-gray-600 text-sm mb-4">
                Para siswa Tiger Soccer School sedang berlatih teknik dasar sepak bola di bawah pengawasan pelatih profesional.
              </p>
              <span className="text-blue-600 text-xs">12 Januari 2024</span>
            </div>
          </div>

          {/* Foto 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src={photo2}
              alt="Turnamen Antar Akademi"
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Turnamen Antar Akademi</h3>
              <p className="text-gray-600 text-sm mb-4">
                Tim U-12 Tiger Soccer School berhasil menjuarai turnamen antar akademi sepak bola se-Bogor Raya.
              </p>
              <span className="text-blue-600 text-xs">5 Februari 2024</span>
            </div>
          </div>

          {/* Foto 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src={photo3} 
              alt="Sesi Coaching Clinic"
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sesi Foto Bersama</h3>
              <p className="text-gray-600 text-sm mb-4">
                foto bersama pelatih nasional untuk meningkatkan kualitas pembinaan di Tiger Soccer School.
              </p>
              <span className="text-blue-600 text-xs">20 Februari 2024</span>
            </div>
          </div>

          {/* Foto 4 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src={photo4}
              alt="Latihan Fisik"
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Latihan Fisik</h3>
              <p className="text-gray-600 text-sm mb-4">
                Sesi latihan fisik dan ketahanan untuk meningkatkan stamina para pemain muda Tiger Soccer School.
              </p>
              <span className="text-blue-600 text-xs">1 Maret 2024</span>
            </div>
          </div>

          {/* Foto 5 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src={photo5}
              alt="Evaluasi Tim"
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Evaluasi Tim</h3>
              <p className="text-gray-600 text-sm mb-4">
                Sesi evaluasi mingguan bersama seluruh pelatih untuk membahas perkembangan setiap pemain.
              </p>
              <span className="text-blue-600 text-xs">8 Maret 2024</span>
            </div>
          </div>

          {/* Foto 6 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src={photo6}
              alt="Pertandingan Persahabatan"
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pertandingan Persahabatan</h3>
              <p className="text-gray-600 text-sm mb-4">
                Tim U-10 Tiger Soccer School mengadakan pertandingan persahabatan dengan akademi sepak bola lainnya.
              </p>
              <span className="text-blue-600 text-xs">15 Maret 2024</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gallery;
