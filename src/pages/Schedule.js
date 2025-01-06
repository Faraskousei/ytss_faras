import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

const Schedule = () => {
  return (
    <div className="min-h-screen pt-16 lg:ml-0 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mb-6">Jadwal Latihan</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Jadwal Reguler */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Program Reguler</h2>
            <div className="space-y-4">
              <div className="border-b pb-2">
                <h3 className="font-bold">Usia 4-6 Tahun (Pemula)</h3>
                <p>Selasa & Kamis: 15:00 - 16:30</p>
                <p>Sabtu: 07:00 - 08:30</p>
              </div>
              <div className="border-b pb-2">
                <h3 className="font-bold">Usia 7-9 Tahun (Junior)</h3>
                <p>Selasa & Kamis: 16:00 - 17:30</p>
                <p>Sabtu: 08:00 - 09:30</p>
              </div>
              <div className="border-b pb-2">
                <h3 className="font-bold">Usia 10-12 Tahun (Senior)</h3>
                <p>Rabu & Jumat: 15:00 - 17:00</p>
                <p>Minggu: 07:00 - 09:00</p>
              </div>
              <div>
                <h3 className="font-bold">Usia 13-16 Tahun (Pro)</h3>
                <p>Rabu & Jumat: 16:00 - 18:00</p>
                <p>Minggu: 08:00 - 10:00</p>
              </div>
            </div>
          </div>

          {/* Program Khusus */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Program Khusus</h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-800">Private Training</h3>
                <p>Jadwal fleksibel sesuai kesepakatan</p>
                <p className="text-sm text-green-600">*Maksimal 3 orang per sesi</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-800">Goalkeeper Training</h3>
                <p>Setiap Sabtu: 15:00 - 17:00</p>
                <p className="text-sm text-green-600">*Khusus usia 10 tahun ke atas</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-800">Holiday Camp</h3>
                <p>Selama liburan sekolah</p>
                <p className="text-sm text-green-600">*Program intensif 5 hari</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
