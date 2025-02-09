import './globals.css'
import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import BubbleContact from '@/components/Layout/BubbleContact'

export const metadata: Metadata = {
  title: {
    default: 'Xe Du Lịch Sài Gòn - Hoàng Anh',
    template: '%s | Xe Du Lịch Sài Gòn'
  },
  description: 'Dịch vụ xe du lịch chất lượng cao tại Sài Gòn. Đội xe đời mới, sang trọng, giá cả hợp lý. Phục vụ các tuyến Vũng Tàu, Đà Lạt, Phan Thiết, Nha Trang.',
  keywords: ['xe du lịch sài gòn', 'thuê xe du lịch', 'xe đi vũng tàu', 'xe đi đà lạt', 'xe đi phan thiết', 'xe đi nha trang', 'dịch vụ xe du lịch'],
  authors: [{ name: 'Hoàng Anh' }],
  creator: 'Hoàng Anh',
  publisher: 'Xe Du Lịch Sài Gòn',
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://xedulichsaigon.com',
    siteName: 'Xe Du Lịch Sài Gòn',
    title: 'Xe Du Lịch Sài Gòn - Hoàng Anh',
    description: 'Dịch vụ xe du lịch chất lượng cao tại Sài Gòn. Đội xe đời mới, sang trọng, giá cả hợp lý.',
    images: [
      {
        url: '/images/og-image.jpg', // Cần tạo ảnh og-image.jpg
        width: 1200,
        height: 630,
        alt: 'Xe Du Lịch Sài Gòn',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'your-google-site-verification', // Thêm sau khi verify Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <BubbleContact />
        </div>
      </body>
    </html>
  )
}
