"use client"

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay} from 'swiper/modules';
import 'swiper/css';
import { useInView } from 'react-intersection-observer';
import {FC, useEffect, useRef} from "react";
import {aboutUsBlock} from "@/app/subdomain/page";

interface AboutUsBlockProps {
  item: aboutUsBlock
  color: string
}

export const AboutUsBlock: FC<AboutUsBlockProps> = ({item, color}) => {
  const [ref, inView] = useInView({
    threshold: 0.7,
  })

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (inView && swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    } else if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
  }, [inView]);

  return (
    <div className='relative mx-auto 3xl:mx-0'>
      <div ref={ref} className='overflow-hidden max-w-[1760px] max-h-[813px] xl:max-h-[600px] flex justify-center items-center rounded-2xl'>
        <Swiper
            loop={true}
            speed={7000}
            modules={[Autoplay]}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            ref={swiperRef}
        >
          <SwiperSlide>
            <Image src={item.image1} alt='' width={1760} height={813} className='sm:min-h-[234px] xs:min-h-[185px] object-cover '/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={item.image2} alt='' width={1760} height={813} className='sm:min-h-[234px] xs:min-h-[185px] object-cover'/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='absolute top-[84%] sm:top-[80%] 600px:top-[84%] w-full px-16 sm:px-2 xs:px-0 flex justify-center gap-[21px] 600px:gap-2
           text-[39px] 2xl:text-[34px] xl:text-2xl md:text-lg 600px:text-base
           [@media(max-width:450px)]:text-sm xs:!text-base xs:!text-center  xs:font-medium'>
        <div className='rounded-3xl 600px:rounded-2xl bg-white flex py-10 px-11 2xl:p-8 sm:p-6 600px:p-5 600px:pl-3 lg:pr-5
             600px:px-2 600px:py-3 gap-8 lg:gap-6 md:gap-4 items-center drop-shadow-xl shadow-black z-10 max-w-[684px] lg:max-w-[440px] md:max-w-[365px] xs:'>
          <div className='rounded-xl sm:rounded-lg w-[200px] h-[166px] xl:w-[150px] xl:h-[123px] md:w-[107px] md:h-[88px]
               sm:w-[80px] sm:h-[80px] 600px:w-[66px] 600px:h-[56px] flex justify-center items-center xs:hidden' style={{ backgroundColor: color}}>
            <Image src={item.icon1} alt='' width={110} height={110} sizes="100vw"
                   className='xl:w-[90px] xl:h-[90px] md:w-[60px] md:h-[60px] sm:w-[55px] sm:h-[55px] 600px:w-[45px] 600px:h-[35px]'/>
          </div>
          <span className='basis-[60%] md:basis-[75%] sm:basis-[60%] xs:basis-full'>{item.text1}</span>
        </div>
        <div className='rounded-3xl 600px:rounded-2xl bg-white flex py-10 px-11 2xl:p-8 sm:p-6 600px:p-5 600px:pl-3 lg:pr-5
             600px:px-2 600px:py-3 gap-8 lg:gap-6 md:gap-4 [@media(max-width:450px)]:gap-2 items-center drop-shadow-xl shadow-black z-10 max-w-[684px] lg:max-w-[440px] md:max-w-[365px]'>
          <div className='rounded-xl sm:rounded-lg w-[200px] h-[166px] xl:w-[150px] xl:h-[123px] md:w-[107px] md:h-[88px]
               sm:w-[80px] sm:h-[80px] 600px:w-[66px] 600px:h-[56px] flex justify-center items-center xs:hidden' style={{ backgroundColor: color}}>
            <Image src={item.icon2} alt='' width={110} height={110} sizes="100vw"
                   className='xl:w-[90px] xl:h-[90px] md:w-[60px] md:h-[60px] sm:w-[55px] sm:h-[55px] 600px:w-[45px] 600px:h-[35px]'/>
          </div>
          <span className='basis-[58%] md:basis-[75%] sm:basis-[60%] xs:basis-full'>{item.text2}</span>
        </div>
      </div>
    </div>
  );
};