import Link from 'next/link';
import { CONTACT_INFO } from '@/utils/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Liên hệ với chúng tôi</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2">🔥</span>
                Hotline: <a href={`tel:${CONTACT_INFO.hotline}`} className="ml-1 hover:text-blue-400">{CONTACT_INFO.hotline}</a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">💬</span>
                Zalo: <a href={CONTACT_INFO.zaloUrl} className="ml-1 hover:text-blue-400">{CONTACT_INFO.hotline}</a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                Email: <a href="mailto:contact@example.com" className="ml-1 hover:text-blue-400">contact@example.com</a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Theo dõi chúng tôi</h3>
            <div className="space-y-2">
              <a 
                href="https://www.facebook.com/hoanganh.hairdesign" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-400"
              >
                <span className="mr-2">📱</span>
                Facebook Page
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} XeDuLichSaiGon.com. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
} 