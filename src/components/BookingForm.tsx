'use client';

import { useState } from 'react';

const DESTINATIONS = [
  { id: 'vung-tau', name: 'Vũng Tàu' },
  { id: 'phan-thiet', name: 'Phan Thiết' },
  { id: 'can-tho', name: 'Cần Thơ' },
  { id: 'tay-ninh', name: 'Tây Ninh' }
];

const CAR_TYPES = [
  { id: '4cho', name: 'Xe 4 chỗ' },
  { id: '7cho', name: 'Xe 7 chỗ' },
  { id: '16cho', name: 'Xe 16 chỗ' },
  { id: 'limousine', name: 'Xe Limousine' },
];

interface BookingDataForm {
  fullName: string;
  phone: string;
  destination: string;
  date: string;
  time: string;
  carType: string;
}

const PRICE_BY_DESTINATION: Record<string, Record<string, string>> = {
  'vung-tau': {
    '4cho': '1.300.000đ',
    '7cho': '1.500.000đ',
    '16cho': 'Liên hệ',
    'limousine': 'Liên hệ'
  },
  'phan-thiet': {
    '4cho': '1.800.000đ',
    '7cho': '2.000.000đ',
    '16cho': 'Liên hệ',
    'limousine': 'Liên hệ'
  },
  'can-tho': {
    '4cho': '1.800.000đ',
    '7cho': '2.000.000đ',
    '16cho': 'Liên hệ',
    'limousine': 'Liên hệ'
  },
  'tay-ninh': {
    '4cho': '1.200.000đ',
    '7cho': '1.400.000đ',
    '16cho': 'Liên hệ',
    'limousine': 'Liên hệ'
  }
};

// Format ngày hiện tại YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];

// Format giờ hiện tại HH:mm
const now = new Date();
const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    destination: '',
    date: today, // Set default là ngày hiện tại
    time: currentTime, // Set default là giờ hiện tại
    carType: ''
  });

  const updatePrice = (form: BookingDataForm) => {
    if (form.destination && form.carType) {
      setSelectedPrice(PRICE_BY_DESTINATION[form.destination][form.carType]);
    } else {
      setSelectedPrice('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: selectedPrice
        }),
      });

      if (!response.ok) {
        throw new Error('Gửi thông tin thất bại');
      }

      setSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        destination: '',
        date: today,
        time: currentTime,
        carType: ''
      });
      setSelectedPrice('');
    } catch (err) {
      setError('Có lỗi xảy ra. Vui lòng thử lại sau.');
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
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
            onChange={(e) => {
              setFormData({...formData, destination: e.target.value});
              updatePrice({...formData, destination: e.target.value});
            }}
          >
            <option value="">Chọn điểm đến</option>
            {DESTINATIONS.map((dest) => (
              <option key={dest.id} value={dest.id}>
                {dest.name}
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
            onChange={(e) => {
              setFormData({...formData, carType: e.target.value});
              updatePrice({...formData, carType: e.target.value});
            }}
          >
            <option value="">Chọn loại xe</option>
            {CAR_TYPES.map((car) => (
              <option key={car.id} value={car.id}>
                {car.name}
              </option>
            ))}
          </select>
        </div>

        {/* Hiển thị giá */}
        {selectedPrice && (
          <div className="mt-4">
            <span className="font-bold">Giá: </span>
            <span>{selectedPrice}</span>
          </div>
        )}
      </div>

      {error && (
        <div className="text-red-600 mt-4">{error}</div>
      )}
      
      {success && (
        <div className="text-green-600 mt-4">
          Đã nhận thông tin đặt xe! Chúng tôi sẽ liên hệ lại sớm.
        </div>
      )}

      {/* Nút đặt xe */}
      <div className="mt-8">
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400"
        >
          {loading ? 'Đang gửi...' : 'Đặt xe'}
        </button>
      </div>
    </form>
  );
}