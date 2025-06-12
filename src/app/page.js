import Feed from '@/components/Feed';
import Input from '@/components/Input';
import ClientHeader from '@/components/ClientHeader'; 

export default function page() {

  return (
  <main className="w-full mx-auto max-w-[600px] border-x border-gray-200 min-h-screen px-2 sm:px-4">
    <ClientHeader />
    <Input />
    <Feed />
  </main>
  );
}
