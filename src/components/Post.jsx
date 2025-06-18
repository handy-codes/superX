'use client';

import Link from 'next/link';
import { HiDotsHorizontal } from 'react-icons/hi';
import Icons from './Icons';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

export default function Post({ post, id }) {
  let postDate;

  if (typeof post?.timestamp === 'number') {
    postDate = new Date(post.timestamp);
  } else {
    postDate = null;
  }

  return (
    <div className='flex px-4 py-3 border-b border-gray-200 hover:bg-gray-50 max-w-full'>
      <img
        src={post?.profileImg}
        alt='user-img'
        className='h-8 w-8 rounded-full mr-4 flex-shrink-0'
      />
      <div className='flex-1 overflow-hidden'>
        {/* Top row with name, username, time, dots */}
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-1 text-sm truncate max-w-[85%] sm:max-w-[90%]'>
            <h4 className='font-bold truncate'>{post?.name}</h4>
            <span className='text-gray-500 truncate'>@{post?.username}</span>
            {postDate ? (
              <span className='text-xs text-gray-400 whitespace-nowrap'>
                • <ReactTimeAgo date={postDate} locale='en-US' />
              </span>
            ) : (
              <span className='text-xs text-gray-400 whitespace-nowrap'>• Unknown</span>
            )}
          </div>
          <HiDotsHorizontal className='text-gray-400 text-sm flex-shrink-0' />
        </div>

        {/* Post text */}
        <Link href={`/posts/${id}`}>
          <p className='text-gray-800 text-sm my-3 break-words'>{post?.text}</p>
        </Link>

        {/* Post image */}
        {post?.image && (
          <Link href={`/posts/${id}`}>
            {/* <div className="mt-2 rounded-2xl overflow-hidden w-full">
              <img
                src={post.image}
                alt="post image"
                className="block w-full h-auto rounded-2xl object-cover"
              />
            </div> */}
            <div className="mt-2 rounded-2xl overflow-hidden aspect-[16/9] w-full">
              <img
                src={post.image}
                alt="post image"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        )}

        {/* Icons */}
        <Icons id={id} uid={post.uid} />
      </div>
    </div>
  );
}
