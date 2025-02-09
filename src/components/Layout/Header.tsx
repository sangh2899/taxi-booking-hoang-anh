import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Car Icon */}
            <div className="relative w-10 h-10">
              <Image
                src="/images/car_icon.png"
                alt=""
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Logo */}
            <div className="relative w-48 h-12">
              <Image
                src="/images/logo.png"
                alt="Xe Du Lịch Sài Gòn"
                fill
                priority
                className="object-contain"
              />
            </div>
            <span className="sr-only">XeDuLichSaiGon.com</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-blue-600">
              Trang chủ
            </Link>
            <Link href="/gioi-thieu" className="hover:text-blue-600">
              Giới thiệu
            </Link>
            <Link href="/tin-tuc" className="hover:text-blue-600">
              Tin tức
            </Link>
            <Link href="/dat-xe" className="hover:text-blue-600">
              Đặt xe
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="mobile-menu-button p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden hidden mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 hover:bg-gray-100 rounded-md">
              Trang chủ
            </Link>
            <Link href="/gioi-thieu" className="block px-3 py-2 hover:bg-gray-100 rounded-md">
              Giới thiệu
            </Link>
            <Link href="/tin-tuc" className="block px-3 py-2 hover:bg-gray-100 rounded-md">
              Tin tức
            </Link>
            <Link href="/dat-xe" className="block px-3 py-2 hover:bg-gray-100 rounded-md">
              Đặt xe
            </Link>
          </div>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
} 