'use client';

import { useState } from 'react';

// Dữ liệu các điểm đến
const DESTINATIONS = [
  'Vũng Tàu',
  'Phan Thiết',
  'Nha Trang',
  'Đà Lạt',
  'Bình Dương',
  'Đồng Nai',
  'Long An'
];

// Các loại xe
const CAR_TYPES = [
  { id: '4cho', name: 'Xe 4 chỗ', price: '1.300.000đ' },
  { id: '7cho', name: 'Xe 7 chỗ', price: '1.500.000đ' },
  { id: '9cho', name: 'Xe 9 chỗ Limousine', price: '1.800.000đ' },
  { id: '16cho', name: 'Xe 16 chỗ', price: 'Liên hệ' },
];

// Format ngày hiện tại YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];

// Format giờ hiện tại HH:mm
const now = new Date();
const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    destination: '',
    date: today, // Set default là ngày hiện tại
    time: currentTime, // Set default là giờ hiện tại
    carType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Đã nhận thông tin đặt xe! Chúng tôi sẽ liên hệ lại sớm.');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 md:p-8">
      <div className="space-y-6">
        {/* Họ tên */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="fullName">
            Họ và Tên
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
            Số Điện Thoại
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        {/* Điểm đi - Disabled */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Điểm Đi
          </label>
          <input
            type="text"
            value="Sài Gòn"
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700"
            disabled
          />
        </div>

        {/* Điểm đến */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="destination">
            Điểm Đến
          </label>
          <select
            id="destination"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            value={formData.destination}
            onChange={(e) => setFormData({...formData, destination: e.target.value})}
          >
            <option value="">Chọn điểm đến</option>
            {DESTINATIONS.map((dest) => (
              <option key={dest} value={dest}>
                {dest}
              </option>
            ))}
          </select>
        </div>

        {/* Ngày và giờ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="date">
              Ngày Đi
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              min={today}
              lang="vi-VN"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
            {/* Hiển thị ngày đã chọn dạng tiếng Việt */}
            {formData.date && (
              <p className="mt-1 text-sm text-gray-600">
                {new Date(formData.date).toLocaleDateString('vi-VN', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="time">
              Giờ Đón
            </label>
            <input
              type="time"
              id="time"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
            />
            {/* Hiển thị giờ đã chọn */}
            {formData.time && (
              <p className="mt-1 text-sm text-gray-600">
                {new Date(`2000-01-01T${formData.time}`).toLocaleTimeString('vi-VN', {
                  hour: '2-digit',
                  minute: '2-digit'
                })} 
              </p>
            )}
          </div>
        </div>

        {/* Loại xe */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="carType">
            Loại Xe
          </label>
          <select
            id="carType"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            value={formData.carType}
            onChange={(e) => setFormData({...formData, carType: e.target.value})}
          >
            <option value="">Chọn loại xe</option>
            {CAR_TYPES.map((car) => (
              <option key={car.id} value={car.id}>
                {car.name} - {car.price}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Nút đặt xe */}
      <div className="mt-8">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors"
        >
          Đặt Xe Ngay
        </button>
      </div>
    </form>
  );
} 