'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { HiHome, HiDotsHorizontal } from 'react-icons/hi';

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className='flex flex-col justify-between h-screen p-4'>
      {/* Top section */}
      <div className='flex flex-col gap-4'>
        <Link href='/'>
          <h1 className='text-2xl text-[#003E8F] font-extrabold cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200'>
            SuperX
          </h1>
        </Link>

        <Link
          href='/'
          className='flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit'
        >
          <HiHome className='w-7 h-7' />
          <span className='font-bold hidden xl:inline'>Home</span>
        </Link>

        {/* Sign In / Sign Out Button - Visible on all screen sizes */}
        {session ? (
          <button
            className='bg-blue-500 text-white rounded-full hover:brightness-95 transition-all duration-200 w-full max-w-[12rem] h-10 shadow-md font-semibold'
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        ) : (
          <button
            className='bg-blue-500 text-white rounded-full hover:brightness-95 transition-all duration-200 w-full max-w-[12rem] h-10 shadow-md font-semibold'
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>

      {/* User Profile - Avatar always visible, name/username only on xl */}
      {session && (
        <div className='text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200'>
          <img
            src={session.user.image}
            alt='user-img'
            className='h-10 w-10 rounded-full mr-2'
          />
          <div className=' xl:inline'>
            <h4 className='font-bold'>{session.user.name}</h4>
            <p className='text-gray-500'>@{session.user.username}</p>
          </div>
          <HiDotsHorizontal className='h-5 hidden xl:inline ml-4' />
        </div>
      )}
    </div>
  );
}
