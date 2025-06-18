import Feed from '@/components/Feed';
import Input from '@/components/Input';
import ClientHeader from '@/components/ClientHeader'; 

export default function page() {

  return (
<<<<<<< HEAD
    // <div className='max-w-xl mx-auto border-r border-l min-h-screen'>
    // <div className='w-full max-w-xl mx-auto min-h-screen border-r border-l sm:border-none'>
    <div className="w-full max-w-xl mx-auto min-h-screen border-x sm:border-none px-2 sm:px-4">

      
      {/* <div className='flex justify-between mt-4 mx-auto'>
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
      </div> */}
      <ClientHeader /> 
      <Input />
      <Feed />
    </div>
=======
  <main className="w-full mx-auto max-w-[600px] border-x border-gray-200 min-h-screen px-2 sm:px-4">
    <ClientHeader />
    <Input />
    <Feed />
  </main>
>>>>>>> 52d93ae9075c11f536fe0bcabe26264006f0e402
  );
}
