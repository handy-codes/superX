'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function ClientHeader() {
  const { data: session } = useSession();

  return (
    <div className='w-full flex justify-between items-center w-full px-2 sm:px-0 py-2 sticky top-0 z-50 bg-white border-b border-gray-200'>
      <div className='py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
        <Link href='/'>
<<<<<<< HEAD
          <h1 className='text-2xl font-extrabold text-[#003E8F]'>SuperX</h1>
=======
          <h1 className='text-xl font-extrabold sm:hidden text-[#003E8F]'>SuperX</h1>
>>>>>>> 52d93ae9075c11f536fe0bcabe26264006f0e402
        </Link>
      </div>
      {session ? (
        <button
          onClick={() => signOut()}
          className='sm:hidden text-sm bg-blue-500 rounded-md text-white p-2 mr-2 hover:bg-blue-600 transition'
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
