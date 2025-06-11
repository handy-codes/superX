'use client';

import { useEffect, useState } from 'react';

export default function News() {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(3);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          'https://newsdata.io/api/1/news?country=ng&language=en&apikey=pub_da36856ea6554f31a074c25986364890'
        );
        const data = await res.json();
        setNews(data.results || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className='bg-white border border-gray-200 shadow-md rounded-xl p-4 space-y-4'>
      <h2 className='text-2xl font-semibold text-gray-800'>📰 Top Naija News</h2>

      {news.slice(0, articleNum).map((article) => (
        <a
          href={article.link}
          target='_blank'
          rel='noopener noreferrer'
          key={article.link}
          className='block transition hover:scale-[1.01] hover:shadow-lg rounded-lg'
        >
          <div className='flex items-start gap-4 p-3 rounded-lg bg-gray-50 hover:bg-gray-100'>
            <div className='flex-1 space-y-1'>
              <h3 className='text-base font-medium text-gray-800 line-clamp-2'>
                {article.title}
              </h3>
              <p className='text-sm text-gray-500'>{article.source_id}</p>
            </div>
            <div className='min-w-[70px]'>
              <img
                src={article.image_url || 'https://via.placeholder.com/70x70?text=News'}
                alt='news'
                width={70}
                height={70}
                className='rounded-md object-cover'
              />
            </div>
          </div>
        </a>
      ))}

      <div className='text-right'>
        <button
          onClick={() => setArticleNum(articleNum + 3)}
          className='text-sm font-medium text-blue-600 hover:underline'
        >
          Load more
        </button>
      </div>
    </div>
  );
}


