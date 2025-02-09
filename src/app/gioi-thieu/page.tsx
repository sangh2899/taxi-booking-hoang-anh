import { CONTACT_INFO } from '@/utils/constants';

export default function GioiThieu() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tiêu đề */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
        Giới Thiệu Dịch Vụ Du Lịch Hoàng Anh
      </h1>

      {/* Nội dung chính */}
      <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
        {/* Giới thiệu chung */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Về Chúng Tôi</h2>
          <p className="mb-4">
            Dịch Vụ Du Lịch Hoàng Anh được thành lập từ năm 2015, là đơn vị chuyên cung cấp dịch vụ 
            vận chuyển hành khách chất lượng cao tại khu vực TP.HCM và các tỉnh lân cận. Với đội ngũ 
            tài xế chuyên nghiệp và đội xe đời mới, chúng tôi tự hào mang đến cho khách hàng những 
            trải nghiệm di chuyển thoải mái và an toàn nhất.
          </p>
        </section>

        {/* Phương châm */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Phương Châm Hoạt Động</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">✓</span>
              Đặt sự hài lòng của khách hàng lên hàng đầu
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">✓</span>
              Cam kết giá cả cạnh tranh, minh bạch
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">✓</span>
              Phục vụ tận tâm, chuyên nghiệp 24/7
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">✓</span>
              Đảm bảo an toàn tuyệt đối cho hành khách
            </li>
          </ul>
        </section>

        {/* Đội xe */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Đội Xe Chất Lượng Cao</h2>
          <div className="space-y-3">
            <p className="mb-4">
              Hoàng Anh tự hào sở hữu đội xe đời mới, đa dạng từ 4 đến 16 chỗ, đáp ứng mọi nhu cầu 
              di chuyển của khách hàng:
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="mr-2">🚗</span>
                Xe 4 chỗ: Toyota Vios, Camry
              </li>
              <li className="flex items-center">
                <span className="mr-2">🚐</span>
                Xe 7 chỗ: Innova, Fortuner
              </li>
              <li className="flex items-center">
                <span className="mr-2">🚐</span>
                Xe 9 chỗ: Limousine cao cấp
              </li>
              <li className="flex items-center">
                <span className="mr-2">🚌</span>
                Xe 16 chỗ: Ford Transit
              </li>
            </ul>
          </div>
        </section>

        {/* Cam kết giá */}
        <section className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Cam Kết Về Giá</h2>
          <ul className="space-y-3">
            <li className="flex items-center text-blue-800">
              <span className="mr-2">💎</span>
              Giá cả cạnh tranh nhất thị trường
            </li>
            <li className="flex items-center text-blue-800">
              <span className="mr-2">💎</span>
              Không phát sinh chi phí phụ thu
            </li>
            <li className="flex items-center text-blue-800">
              <span className="mr-2">💎</span>
              Ưu đãi đặc biệt cho khách hàng thân thiết
            </li>
            <li className="flex items-center text-blue-800">
              <span className="mr-2">💎</span>
              Giảm giá cho khách đặt xe hai chiều
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Đặt Xe Ngay - Phục Vụ 24/24</h2>
          <p className="mb-6">
            Liên hệ ngay để được tư vấn và báo giá tốt nhất!
          </p>
          <div className="space-y-4">
            <a 
              href={`tel:${CONTACT_INFO.hotline}`}
              className="block w-full md:w-auto md:inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              📞 Gọi Ngay: {CONTACT_INFO.hotline}
            </a>
            <a 
              href={CONTACT_INFO.zaloUrl}
              className="block w-full md:w-auto md:inline-block md:ml-4 bg-blue-500 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-400 transition-colors"
            >
              💬 Chat Zalo
            </a>
          </div>
        </section>
      </div>

      {/* Nút gọi điện cố định */}
      <div className="fixed bottom-4 right-4 bg-red-600 text-white p-4 rounded-full shadow-lg animate-bounce">
        <a href={`tel:${CONTACT_INFO.hotline}`} className="flex items-center">
          <span className="mr-2">📞</span>
          {CONTACT_INFO.hotline}
        </a>
      </div>
    </div>
  );
} 