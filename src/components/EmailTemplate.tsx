import * as React from 'react';

interface EmailTemplateProps {
  fullName: string;
  phone: string;
  destination: string;
  date: string;
  time: string;
  carType: string;
}

const DESTINATIONS: Record<string, string> = {
  'vung-tau': 'Vũng Tàu',
  'phan-thiet': 'Phan Thiết',
  'can-tho': 'Cần Thơ',
  'tay-ninh': 'Tây Ninh'
};

const CAR_TYPES: Record<string, string> = {
  '4cho': 'Xe 4 chỗ',
  '7cho': 'Xe 7 chỗ',
  '16cho': 'Xe 16 chỗ',
  'limousine': 'Xe Limousine'
};

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

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = (data: EmailTemplateProps) => (
  <div>
    <h1>Khách hàng vừa đặt một chuyến xe mới. Hãy liên lạc ngay!</h1>
    <p>Họ và tên: {data.fullName}</p>
    <p>Số điện thoại: {data.phone}</p>
    <p>Điểm đi: Sài Gòn</p>
    <p>Điểm đến: {DESTINATIONS[data.destination]}</p>
    <p>Ngày và giờ: {data.date} {data.time}</p>
    <p>Loại xe: {CAR_TYPES[data.carType]}</p>
    <p>Giá đã báo khách: {PRICE_BY_DESTINATION[data.destination][data.carType]}</p>
  </div>
);