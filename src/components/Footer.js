import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
np
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="container mx-auto px-6 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/ssb.png" 
                alt="Tiger Soccer School" 
                className="h-12 w-12 rounded-full border-2 border-blue-400/50" 
              />
              <div>
                <h3 className="text-xl font-bold text-white">Tiger Soccer School</h3>
                <p className="text-blue-300 text-sm">Akademi Sepak Bola Terbaik</p>
              </div>
            </div>
            <p className="text-blue-200/80 text-sm">
              Membentuk bakat sepak bola anak usia 4-16 tahun di Bogor dengan metode pelatihan modern.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Menu Utama</h4>
            <nav className="grid gap-2">
              {[
                {name: 'Beranda', path: '/'},
                {name: 'Tentang Kami', path: '/about'},
                {name: 'Program', path: '/program'},
                {name: 'Kontak', path: '/contact'}
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-blue-200 hover:text-white text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Hubungi Kami</h4>
            <div className="space-y-2 text-sm text-blue-200">
              <p>Telp: 0812-XXXX-XXXX</p>
              <p>Email: info@tigersoccer.id</p>
              <p>Lapangan Sepak Bola, Bogor</p>
            </div>
            <a 
              href="https://wa.me/your-number" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg mt-4 text-sm hover:bg-green-600"
            >
              <FaWhatsapp />
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-blue-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-300/80">
            &copy; {new Date().getFullYear()} Tiger Soccer School Bogor
          </p>
          <div className="flex gap-4">
            {[FaFacebook, FaInstagram, FaYoutube].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-blue-300 hover:text-white"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
