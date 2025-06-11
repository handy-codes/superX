'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function ClientHeader() {
  const { data: session } = useSession();

  return (
    <div className='flex justify-between mt-4 mx-auto'>
      <div className='py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
        <Link href='/'>
          <h1 className='text-xl font-extrabold text-[#003E8F]'>SuperX</h1>
        </Link>
      </div>
      {session ? (
        <button
          onClick={() => signOut()}
          className='sm:hidden text-sm bg-blue-500 text-white p-2 mr-2 hover:bg-blue-600 transition'
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className='sm:hidden text-sm bg-blue-500 text-white p-2 mr-2 hover:bg-blue-600 transition'
        >
          Sign In
        </button>
      )}
    </div>
  );
}
