
'use client';

import Feed from '@/components/Feed';
import Input from '@/components/Input';
import ClientHeader from '@/components/ClientHeader';

export default function page() {
  return (
    <div className="w-full max-w-xl mx-auto min-h-screen border-x sm:border-none px-2 sm:px-4">
      <ClientHeader />
      <Input />
      <Feed />
    </div>
  );
}
