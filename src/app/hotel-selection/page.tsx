import Link from "next/link";

const HotelSelection = () => {
  return (
      <div className='w-full h-screen flex flex-col justify-center items-center gap-16'>
        <p className='text-[64px] xl:text-[56px] font-extrabold'>Выберите отель</p>
        <div className='flex text-5xl [&>div]:xl-text-[56px] [&>div]:font-black max-h-[124px] w-[1254px] max-w-[1254px]
           justify-center [&>div]:text-center [&>div]:rounded-[10px] gap-10 [&>div]:transition [&>div]:max-w-[607px] [&>div]:xl:min-w-[556px] flex-auto'>
          <div className='bg-[#0C2722] text-white hover:bg-[#869391] w-full'>
            <Link href='https://arthotel.ivhg.ru/hotel' className='py-[35px]'>#АРТОТЕЛЬ</Link>
          </div>
          <div className='bg-transparent border-black border hover:text-[#869391] w-full'>
            <Link href='https://ivanovohotel.ivhg.ru/hotel' className='py-[35px]'>#ИВАНОВООТЕЛЬ</Link>
          </div>
        </div>
      </div>
  );
};

export default HotelSelection;