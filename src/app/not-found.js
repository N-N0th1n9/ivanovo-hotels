import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center px-4'>
      <section className='flex flex-col text-center gap-10'>
        <h1 className='text-6xl'>Ops... Error :(</h1>
        <Link href="/" className='bg-black text-white rounded py-4'>
          Go main page
        </Link>
      </section>
    </div>
  );
};

export default NotFound;