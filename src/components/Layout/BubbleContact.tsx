'use client';

import Image from 'next/image';
import { CONTACT_INFO } from '@/utils/constants';

export default function BubbleContact() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-4 z-50">
      {/* Nút Zalo */}
      <a
        href={CONTACT_INFO.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center animate-bounce"
      >
        <span className="sr-only">Chat Zalo</span>
        <div className="relative w-6 h-6">
          <Image
            src="/images/zalo.png"
            alt="Zalo"
            fill
            className="object-contain"
          />
        </div>
      </a>

      {/* Nút gọi điện */}
      <a
        href={`tel:${CONTACT_INFO.hotline}`}
        className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors flex items-center justify-center animate-bounce"
      >
        <span className="sr-only">Gọi điện</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </div>
  );
} 