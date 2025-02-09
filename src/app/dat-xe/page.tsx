'use client';

import BookingForm from '@/components/BookingForm';
import { CONTACT_INFO } from '@/utils/constants';

export default function DatXe() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tiêu đề trang */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Đặt Xe Trực Tuyến
        </h1>
        <p className="text-gray-600">
          Điền thông tin để đặt xe hoặc gọi ngay{' '}
          <a href={`tel:${CONTACT_INFO.hotline}`} className="text-red-600 font-bold hover:text-red-700">
            {CONTACT_INFO.hotline}
          </a>
        </p>
      </div>

      {/* Form đặt xe */}
      <div className="max-w-2xl mx-auto">
        <BookingForm />
      </div>
    </div>
  );
} 