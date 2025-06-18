
'use client';

import Link from 'next/link';
import { useSession, signOut, signIn } from 'next-auth/react';

export default function ClientHeader() {
  const { data: session } = useSession();

  return (
    <div className="w-full flex justify-between items-center px-2 sm:px-0 py-2 sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="py-2 px-3">
        <Link href="/">
          <h1 className="text-2xl font-extrabold text-[#003E8F] sm:text-xl">
            SuperX
          </h1>
        </Link>
      </div>

      {/* Hide button from sm and above */}
      <div className="px-2 sm:hidden">
        {session ? (
          <button
            onClick={() => signOut()}
            className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600 transition"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
