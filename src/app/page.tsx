import Image from "next/image";
import BookingForm from "../components/BookingForm";
import { CONTACT_INFO } from '@/utils/constants';
import { CARS_DATA } from '@/data/cars';

export const generateMetadata = () => {
  return {
    alternates: {
      canonical: 'https://xedulichsaigon.com',
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Xe Du Lịch Sài Gòn - Hoàng Anh',
  image: 'https://xedulichsaigon.com/images/logo.png',
  '@id': 'https://xedulichsaigon.com',
  url: 'https://xedulichsaigon.com',
  telephone: CONTACT_INFO.hotline,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Quận 12',
    addressLocality: 'Hồ Chí Minh',
    addressRegion: 'Hồ Chí Minh',
    postalCode: '700000',
    addressCountry: 'VN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.8671, // Thay bằng tọa độ thực
    longitude: 106.6417
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    opens: '00:00',
    closes: '23:59'
  },
  sameAs: [
    CONTACT_INFO.zaloUrl,
    'https://www.facebook.com/hoanganh.hairdesign'
  ]
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative -mx-4 mb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-[90vh] min-h-[600px]">
          <Image
            src="/images/saigon.jpg"
            alt="Thành phố Sài Gòn"
            fill
            priority
            className="object-cover brightness-40"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-[90vh] min-h-[600px] flex items-center pt-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-8 text-white drop-shadow-lg leading-tight">
              XE DU LỊCH SÀI GÒN<br className="hidden sm:block" /> HOÀNG ANH
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 drop-shadow-md">
                Chuyên cung cấp dịch vụ taxi chất lượng cao
              </p>
              
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <p className="text-base sm:text-xl font-medium text-gray-100 mb-2 sm:mb-4">
                  Phục vụ khu vực:
                </p>
                <p className="text-lg sm:text-2xl font-bold text-yellow-400 mb-4 sm:mb-6">
                  Quận 12 • Gò Vấp • Hóc Môn - Sài Gòn
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <a 
                    href={`tel:${CONTACT_INFO.hotline}`}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-xl transition-all transform hover:scale-105"
                  >
                    📞 Gọi Ngay: {CONTACT_INFO.hotline}
                  </a>
                  <a 
                    href="#booking"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-xl transition-all transform hover:scale-105"
                  >
                    🚗 Đặt Xe Trực Tuyến
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-4">
                  <p className="text-2xl sm:text-4xl mb-1 sm:mb-2">🌟</p>
                  <p className="text-[10px] sm:text-base text-white font-medium leading-tight">
                    Dịch vụ<br className="sm:hidden" /> 24/7
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-4">
                  <p className="text-2xl sm:text-4xl mb-1 sm:mb-2">💎</p>
                  <p className="text-[10px] sm:text-base text-white font-medium leading-tight">
                    Xe đời<br className="sm:hidden" /> mới
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-4">
                  <p className="text-2xl sm:text-4xl mb-1 sm:mb-2">👨‍✈️</p>
                  <p className="text-[10px] sm:text-base text-white font-medium leading-tight">
                    Tài xế<br className="sm:hidden" /> chuyên nghiệp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form đặt xe */}
      <section id="booking" className="mb-16 bg-gray-50 py-12 rounded-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Đặt Xe Trực Tuyến
          </h2>
          <BookingForm />
        </div>
      </section>

      {/* Các loại xe */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Đội Xe Chất Lượng Cao
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARS_DATA.map((car) => (
            <div 
              key={car.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{car.name}</h3>
                <p className="text-gray-600 mb-2">{car.description}</p>
                <p className="text-blue-600 font-semibold mb-4">Giá từ: {car.price}</p>
                <a 
                  href={`tel:${CONTACT_INFO.hotline}`}
                  className="inline-block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  📞 Đặt xe ngay
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tuyến đường và Bảng giá */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Tuyến đường */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Tuyến Đường Phổ Biến</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-3 text-2xl">🏖️</span>
              <div>
                <p className="font-semibold">Sài Gòn - Vũng Tàu</p>
                <p className="text-gray-600">Thời gian: ~2 giờ</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl">🌊</span>
              <div>
                <p className="font-semibold">Sài Gòn - Phan Thiết</p>
                <p className="text-gray-600">Thời gian: ~4 giờ</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl">🏖️</span>
              <div>
                <p className="font-semibold">Sài Gòn - Nha Trang</p>
                <p className="text-gray-600">Thời gian: ~7 giờ</p>
              </div>
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-2xl">🌲</span>
              <div>
                <p className="font-semibold">Sài Gòn - Đà Lạt</p>
                <p className="text-gray-600">Thời gian: ~6 giờ</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Bảng giá */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Bảng Giá Tham Khảo</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-4">Giá một chiều:</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>• Xe 4 chỗ</span>
                  <span className="font-semibold">1.300.000đ</span>
                </li>
                <li className="flex justify-between">
                  <span>• Xe 7 chỗ</span>
                  <span className="font-semibold">1.500.000đ</span>
                </li>
                <li className="flex justify-between">
                  <span>• Xe 9 chỗ Limousine</span>
                  <span className="font-semibold">1.800.000đ</span>
                </li>
                <li className="flex justify-between">
                  <span>• Xe 16 chỗ</span>
                  <span className="font-semibold text-blue-600">Liên hệ báo giá</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Ưu đãi đặc biệt:</h3>
              <ul className="space-y-2 text-blue-600">
                <li>✨ Giảm 20% khi đặt 2 chiều</li>
                <li>✨ Hỗ trợ giá đặc biệt cho khách đi khám bệnh</li>
                <li>✨ Giá ưu đãi cho khách đặt xe thường xuyên</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">
          Phục vụ 24/7 - Đặt xe ngay!
        </h2>
        <div className="space-y-4">
          <p className="text-xl">
            Gọi ngay Hotline: <br />
            <a 
              href={`tel:${CONTACT_INFO.hotline}`}
              className="text-3xl font-bold text-white hover:text-blue-200"
            >
              {CONTACT_INFO.hotline}
            </a>
          </p>
          <p className="text-lg">
            Zalo: <a 
              href={CONTACT_INFO.zaloUrl}
              className="font-semibold hover:text-blue-200"
            >
              {CONTACT_INFO.hotline}
            </a>
          </p>
          <div className="mt-6 text-blue-100">
            <p>💡 Tư vấn miễn phí 24/24</p>
            <p>🚗 Xe đời mới, sang trọng</p>
            <p>👨‍✈️ Tài xế chuyên nghiệp, thân thiện</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
