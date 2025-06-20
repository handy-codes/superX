import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import News from '@/components/News';
import SessionWrapper from '@/components/SessionWrapper';
import CommentModal from '@/components/CommentModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SuperX',
  description: 'A clone of X website built with Next.js, Firebase and Tailwind CSS',
};

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex justify-between max-w-6xl mx-auto">
            {/* Sidebar (fixed height, non-scrollable) */}
            <div className="hidden md:block sticky top-0 h-screen border-r">
              <Sidebar />
            </div>

            {/* Feed (scrollable, responsive) */}
            <div className="flex-1 w-full max-w-2xl px-2 sm:px-4 overflow-y-auto h-screen">
              {children}
            </div>

            {/* News section (scrollable) */}
            <div className="hidden lg:flex flex-col p-3 h-screen border-l w-[24rem] overflow-y-auto">
              <div className="sticky top-0 bg-white py-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2"
                />
              </div>
              <News />
            </div>
          </div>

          <CommentModal />
        </body>
      </html>
    </SessionWrapper>
  );
}
