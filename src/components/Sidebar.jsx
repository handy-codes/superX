'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { HiHome, HiDotsHorizontal } from 'react-icons/hi';

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <>
      {/* Top Navbar for Mobile */}
      {/* <div className="md:hidden flex justify-between items-center px-4 py-3 border-b shadow-sm sticky top-0 z-50 bg-white">
        <Link href='/'>
          <h1 className='text-xl font-extrabold text-[#003E8F]'>SuperX</h1>
        </Link>
        {session ? (
          <button
            onClick={() => signOut()}
            className='text-sm bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition'
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className='text-sm bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition'
          >
            Sign In
          </button>
        )}
      </div>
 */}
      {/* Sidebar for Desktop */}
      {/* <div className='md:flex flex-col justify-between p-3 h-screen w-64 border-r'> */}
      <div className='hidden top-20 md:flex flex-col justify-between p-3 h-[100vh] w-64 border-r sticky overflow-y-auto'>
        <div className='flex flex-col gap-4'>
          <Link href='/'>
            <h1 className='text-3xl text-[#003E8F] font-extrabold cursor-pointer p-3 hover:bg-gray-100 rounded-full'>
              SuperX
            </h1>
          </Link>
          <Link
            href='/'
            className='flex items-center p-3 hover:bg-gray-100 rounded-full transition gap-2 w-fit'
          >
            <HiHome className='w-7 h-7' />
            <span className='font-bold hidden sm:inline'>Home</span>
          </Link>
          {session ? (
            <button
              onClick={() => signOut()}
              className='bg-blue-400 text-white rounded-full hover:brightness-95 w-48 h-9 shadow-md hidden sm:inline font-semibold'
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className='bg-blue-400 text-white rounded-full hover:brightness-95 w-48 h-9 shadow-md hidden sm:inline font-semibold'
            >
              Sign In
            </button>
          )}
        </div>
        {session && (
          <div className='text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full'>
            <img
              src={session.user.image}
              alt='user-img'
<<<<<<< HEAD
              className='h-8 w-8 rounded-full xl:mr-2'
            />
            <div className='xl:inline'>
              <h4 className='font-bold'>{session.user.name}</h4>
              <p className='text-gray-500'>@{session.user.username}</p>
=======
              className='h-10 w-10 hidden md:inline rounded-full xl:mr-2'
            />
            <div className='hidden sm:inline'>
              <h4 className='font-bold truncate'>{session.user.name}</h4>
              <p className='text-gray-500 truncate'>@{session.user.username}</p>
>>>>>>> 52d93ae9075c11f536fe0bcabe26264006f0e402
            </div>
            <HiDotsHorizontal className='h-5 xl:ml-8 hidden xl:inline' />
          </div>
        )}
      </div>
    </>
  );
}
