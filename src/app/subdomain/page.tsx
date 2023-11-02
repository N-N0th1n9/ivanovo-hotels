import {getContent} from "@/services/content.service";
import {NextPage} from "next";
import Footer from "@/components/Footer/Footer";
import {Inter} from "next/font/google";
import AboutUsBlock from "@/components/AboutUsBlock";

const inter = Inter({ subsets: ['latin'], variable: '--var-inter' })

const Subdomain: NextPage = async () => {
  // const content = await getContent.getHotel1()

  // Моменять все текста, цвета

  return (
      <div className='w-full h-full'>
        {/* Header-video */}
        <section className='relative min-h-screen flex flex-col justify-between pt-6 px-20 bg-black bg-opacity-40'>
          {/*Booking-widget*/}
          <div>
            <div className='flex justify-between text-white font-bold mb-14 items-center px-10'>
              <span className='text-[22px] font-medium'>+7 (4932) 93-99-77</span>
              <span className={`text-xl ${inter.variable}`}>#ИВАНОВООТЕЛЬ</span>
              <button className='border-[1px] border-white text-white font-medium px-12 py-4 text-xl rounded-[10px]'>выбрать номер</button>
            </div>
            <div className='w-full bg-white h-[126px] rounded-2xl'></div>
          </div>
          <div className='text-white leading-tight mb-20'>
            <h1 className='text-8xl font-extrabold'>#ИВАНОВООТЕЛЬ</h1>
            <h3 className='text-[44px]'>гостеприимство как искусство</h3>
          </div>
          <video loop muted autoPlay className='absolute top-0 left-0 w-full h-full object-cover -z-10'>
            <source src='/videos/Иваново%20отель.webm'/>
          </video>
        </section>
        {/* About-us */}
        <section className='mt-20 bg-white'>
          <div className='px-20'>
            <div className='flex text-[80px] font-bold'>
              <span className='text-[#BEBEBE]'>/</span>
              <span className='text-black'>O нас</span>
            </div>
            <div>
              <AboutUsBlock/>
            </div>
          </div>
        </section>
        {/* Rooms */}
        <section></section>
        {/* Feedback */}
        <section></section>
        {/* Address */}
        <section></section>
        {/*Footer*/}
        <Footer/>
      </div>
  );
};

export default Subdomain;