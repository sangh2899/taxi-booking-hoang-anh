import Image from 'next/image';
import { CONTACT_INFO } from '@/utils/constants';

// Dữ liệu bài viết mẫu
const tinTucData = [
  {
    id: 1,
    title: 'Kinh Nghiệm Du Lịch Vũng Tàu Tự Túc 2024',
    summary: 'Khám phá những địa điểm must-visit tại Vũng Tàu: Bãi Trước, Bãi Sau, núi Nhỏ, Bạch Dinh, và nhiều điểm check-in đẹp khác. Gợi ý lịch trình 2 ngày 1 đêm tiết kiệm.',
    image: '/images/vung-tau.jpg'
  },
  {
    id: 2,
    title: 'Top 10 Địa Điểm Không Thể Bỏ Qua Ở Phan Thiết',
    summary: 'Khám phá Mũi Né với đồi cát bay, làng chài xưa, và những resort đẳng cấp. Trải nghiệm ẩm thực độc đáo và các hoạt động thể thao biển hấp dẫn.',
    image: '/images/phan-thiet.jpg'
  },
  {
    id: 3,
    title: 'Nha Trang - Thiên Đường Biển Đảo Việt Nam',
    summary: 'Hướng dẫn chi tiết tham quan Vinpearl Land, các đảo đẹp và những bãi biển nổi tiếng. Gợi ý địa điểm ăn uống và lưu trú phù hợp mọi ngân sách.',
    image: '/images/nha-trang.jpg'
  },
  {
    id: 4,
    title: 'Đà Lạt Mùa Đẹp Nhất Trong Năm',
    summary: 'Thời điểm lý tưởng để thăm thành phố ngàn hoa, những điểm check-in "sống ảo" mới nhất và các quán cafe view đẹp không thể bỏ qua.',
    image: '/images/da-lat.jpg'
  }
];

export default function TinTuc() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tiêu đề trang */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Tin Tức Du Lịch
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Cập nhật thông tin và kinh nghiệm du lịch mới nhất về các điểm đến hấp dẫn 
          tại miền Nam Việt Nam
        </p>
      </div>

      {/* Grid bài viết */}
      <div className="grid md:grid-cols-2 gap-8">
        {tinTucData.map((post) => (
          <article 
            key={post.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Hình ảnh bài viết */}
            <div className="relative h-64 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Nội dung bài viết */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.summary}
              </p>
              
              {/* Footer bài viết */}
              <div className="flex justify-between items-center">
                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                  Đọc thêm →
                </button>
                {/* Thêm nút chia sẻ hoặc thông tin khác ở đây */}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA đặt xe */}
      <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Khám Phá Ngay Cùng Xe Du Lịch Sài Gòn - Hoàng Anh
        </h2>
        <p className="text-gray-600 mb-6">
          Đặt xe để trải nghiệm những điểm đến tuyệt vời với giá cả hợp lý nhất!
        </p>
        <div className="space-x-4">
          <a 
            href={`tel:${CONTACT_INFO.hotline}`}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
          >
            📞 Gọi Ngay: {CONTACT_INFO.hotline}
          </a>
          <a 
            href={CONTACT_INFO.zaloUrl}
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            💬 Chat Zalo
          </a>
        </div>
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

export const metadata = {
  title: 'Tin Tức Du Lịch | Xe Du Lịch Sài Gòn',
  description: 'Cập nhật tin tức du lịch mới nhất, kinh nghiệm du lịch các điểm đến hot nhất miền Nam như Vũng Tàu, Đà Lạt, Phan Thiết.',
} 