import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Hotels',
  description: 'Страница с выбора одного из ивановских отелей: Ивановоотель и Артотель. Хорошие отели Иваново',
  keywords: ['Ивановоотель', 'Артотель', 'Ivanovootel', 'Artotel', 'Ивановские отели', 'Хорошие отели', 'Отличные отели']
}

const HotelSelection = () => {
  return (
      <div className='w-full h-screen flex flex-col justify-center items-center gap-16 lg:px-12 sm:px-6'>
        <p className='text-[64px] lg:text-[60px] md:text-[52px] sm:text-[40px] xs:text-[38px] font-extrabold text-center leading-tight'>Выберите отель</p>
        <div className='flex sm:flex-col items-center text-5xl lg:[&>div]:text-[40px] md:[&>div]:text-[32px] sm:[&>div]:text-[28px] xs:[&>div]:text-[24px]
           [&>div]:font-black [&>div]:h-[110px] sm:[&>div]:h-[85px] w-[1254px] justify-center [&>div]:text-center [&>div]:rounded-[10px]
           gap-10 [&>div]:transition [&>div]:max-w-[607px] lg:w-full'>
          <div className='bg-[#0C2722] text-white hover:bg-[#869391] w-full h-full'>
            <Link href='https://arthotel.ivhg.ru' className='h-full flex justify-center items-center'>#АРТОТЕЛЬ</Link>
          </div>
          <div className='bg-transparent border-black border hover:text-[#869391] w-full'>
            <Link href='https://ivanovohotel.ivhg.ru' className='h-full flex justify-center items-center'>#ИВАНОВООТЕЛЬ</Link>
          </div>
        </div>
      </div>
  );
};

export default HotelSelection;