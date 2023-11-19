import {getContent} from "@/services/content.service";
import {NextPage} from "next";
import {Inter} from "next/font/google";
import {AboutUsBlock} from "@/components/AboutUsBlock";
import RoomBlock from "@/components/RoomBlock/RoomBlock";
import Feedback from "@/components/Feedback/Feedback";
import Image from "next/image";
import Navigation from "@/components/navigation";
import AddressIvanovoHotel from "@/components/Address/Address-IvanovoHotel";

const inter = Inter({ subsets: ['latin'], variable: '--var-inter' })

export interface aboutUsBlock {
  image1: string
  image2: string
  icon1: string
  icon2: string
  text1: string
  text2: string
}

const aboutUs= [
  {
    image1: "/images/Удобные_спальни_1.jpg",
    image2: "/images/Удобные_спальни_2.jpg",
    icon1: "/icons/bed.svg",
    icon2: "/icons/wifi.svg",
    text1: "Удобные спальни",
    text2: "Бесплатный wi-fi"
  },
  {
    image1: "/images/Уборка_номеров_1.jpg",
    image2: "/images/Уборка_номеров_2.jpg",
    icon1: "/icons/clear.svg",
    icon2: "/icons/dishes.svg",
    text1: "Регулярная уборка",
    text2: "Еда к вам в номер"
  },
  {
    image1: "/images/Высокий_уровень_безопасности_1.jpg",
    image2: "/images/Высокий_уровень_безопасности_2.jpg",
    icon1: "/icons/car.png",
    icon2: "/icons/protect.svg",
    text1: "Бесплатный охраняемый паркинг",
    text2: "Высокий уровень безопасности"
  }
]

const roomsImg = [
  "/images/Стандарт_с_большой_кроватью.jpg",
  "/images/Стандарт_с_раздельными_кроватями.jpg",
  "/images/Стандарт_трехместный.jpg",
  "/images/Семейный.jpg",
  "/images/Люкс.jpg",
]

const Subdomain: NextPage = async () => {
  const content = await getContent.getHotel1()

  const lightBgColor = content.colors.light_bg_color
  const darkBgColor = content.colors.dark_bg_color
  const secondaryColor = content.colors.light_secondary_color
  const darkSecondaryColor = content.colors.dark_secondary_color
  const iconBgColor = content.colors.icon_bg
  const lightTextColor = content.colors.light_text_color
  const darkTextColor = content.colors.dark_text_color

  const rooms = content.rooms.blocks

  // Поменять пути к фоткам из API на путь к ним на сервере
  // Сделать 404
  // Настроить meta
  return (
      <div className='w-full h-full'>
        {/* Header-video */}
        <section
          className='relative min-h-screen pt-6 px-20 xl:px-14 lg:px-10 md:px-6 600px:px-4 bg-black bg-opacity-40'
          id='home'
          >
          <div className='max-w-[1760px] min-h-screen flex flex-col justify-between mx-auto'>
            <div>
              <div className={`grid grid-cols-[auto_auto_auto] grid-rows-2 justify-between font-bold items-center sm:mb-[23px]`}
                   style={{ color: lightTextColor}}>
                <a href='tel:+74932939977' className='text-[22px] lg:text-lg sm:text-base xs:text-sm 2xs:text-xs font-medium sm:row-start-2'>
                  {content.main.phone}
                </a>
                <span className={`text-xl lg:text-lg sm:text-base xs:text-sm 2xs:text-xs sm:row-start-1 ${inter.variable}`}>
                  {content.main.title}
                </span>
                <button className='border-[1px] font-medium px-12 py-4 text-xl lg:text-base sm:text-sm 2xs:text-xs rounded-[10px]
                        outline-none lg:px-8 lg:py-3 sm:px-[22.5px] xs:px-3 xs:py-2 max-w-[246px] sm:row-span-2 sm:col-start-3
                        hover:bg-white hover:!text-black transition'
                        style={{ borderColor: lightBgColor, color: lightTextColor}}
                >выбрать номер
                </button>
              </div>
              {/*Booking-widget*/}
              <div className='w-full h-[126px] rounded-2xl' style={{ backgroundColor: lightBgColor}}></div>
              {/*Booking-widget*/}
            </div>
            <div className='leading-tight mb-20 lg:mb-10' style={{ color: lightTextColor}}>
              <h1 className='text-8xl font-extrabold xl:text-[80px] lg:text-[64px] md:text-5xl sm:text-[32px] xs:text-2xl'>{content.main.title}</h1>
              <h3 className='text-[44px] xl:text-4x lg:text-[32px] md:text-2xl 600px:text-xl 2xs:text-[18px]'>{content.main.sub_title}</h3>
            </div>
          </div>
          <video loop muted autoPlay className='absolute top-0 left-0 w-full h-full object-cover -z-10'>
            <source src='/videos/Иваново%20отель.webm'/>
          </video>
        </section>
        {/* About-us */}
        <section id='about-us' className='pt-20 md:pt-14' style={{ backgroundColor: lightBgColor}}>
          <div className='mb-[218px] sm:mb-32 mx-auto max-w-[1920px] px-20 xl:px-14 lg:px-10 md:px-6 600px:px-4'>
            <p className='flex text-[80px] xl:text-[64px] md:text-[54px] sm:text-[46px] 600px:text-[38px] xs:text-[34px]
            font-bold mb-16 xl:mb-10 sm:mb-9 600px:mb-4'>
              <span style={{ color: secondaryColor}}>/</span>
              <span style={{ color: darkTextColor}}>{content.about_us.title}</span>
            </p>
            <div className='flex flex-col gap-[217px] md:gap-40 sm:gap-24'>
              {aboutUs.map((item, idx) =>
                  <AboutUsBlock item={item} color={`${iconBgColor}15`} key={idx}/>
              )}
            </div>
          </div>
        </section>
        {/* Rooms */}
        <section id='rooms' className='pt-20 pb-[85px] sm:pb-2 md:pt-14' style={{ backgroundColor: darkBgColor}}>
          <div className='px-20 xl:px-14 lg:px-10 md:px-6 600px:px-4 mx-auto max-w-[1920px] mb-[85px]'>
            <div className='flex text-[80px] xl:text-[64px] md:text-[54px] sm:text-[46px] 600px:text-[38px] xs:text-[32px]
            font-bold mb-16 xl:mb-10 sm:mb-9 600px:mb-4'>
              <span style={{ color: darkSecondaryColor}}>/</span>
              <span style={{ color: lightTextColor}}>{content.rooms.title}</span>
            </div>
            <div className='flex flex-col gap-[85px] lg:gap-12'>
              {Object.entries(rooms).map(([roomKey, roomInfo], idx) => (
                  <div key={roomKey}>
                    <RoomBlock room={roomInfo} image={roomsImg[idx]} btnText={content.rooms.button} bg={content.colors.light_bg_color}></RoomBlock>
                  </div>
              ))}
            </div>
          </div>
        </section>
        {/* Feedback */}
        <section id='feedback' className='pt-20 md:pt-14' style={{ backgroundColor: lightBgColor}}>
          <div className='mx-auto max-w-[1920px] px-20 lg:px-10 xl:px-14 md:px-6 600px:px-4'>
            <div className='flex text-[80px] xl:text-[64px] md:text-[54px] sm:text-[46px] 600px:text-[38px] xs:text-[32px]
             font-bold mb-16 xl:mb-10 sm:mb-9 600px:mb-4'>
              <span style={{ color: secondaryColor}}>/</span>
              <span style={{ color: darkTextColor}}>{content.feedbacks.title}</span>
            </div>
            <div className='mx-auto'>
              <Feedback borderColor={content.colors.dark_bg_color} feedbacks={content.feedbacks.blocks}/>
            </div>
          </div>
        </section>
        {/* Address */}
        <section id='address' className='pt-20 md:pt-14 pb-32 md:pb-16' style={{backgroundColor: content.colors.dark_bg_color}}>
          <div className='max-w-[1920px] mx-auto px-20 xl:px-14 lg:px-10 md:px-6 600px:px-4'>
            <div className='flex text-[80px] xl:text-[64px] md:text-[54px] sm:text-[46px] 600px:text-[38px] xs:text-[32px]
            font-bold mb-16 xl:mb-10 sm:mb-9 600px:mb-4'>
              <span style={{ color: content.colors.dark_secondary_color}}>/</span>
              <span style={{ color: content.colors.light_text_color}}>{content.address.title}</span>
            </div>
            <p className='text-[44px] xl:text-[36px] md:text-[24px] sm:text-[20px] 600px:text-[16px] xs:text-[14px] font-bold mb-14 xl:mb-6 sm:mb-4
              flex gap-4 md:gap-3 items-center' style={{color: content.colors.light_text_color}}>
              <img className='w-[30px] h-[45px] xl:w-[25px] xl:h-[40px] md:w-[20px] md:h-[35px] 600px:w-[15px] 600px:h-[30px]'
                   src='/icons/location.svg' alt=''/>
              {content.address.address}
            </p>
            {/*Сдлеать проверку*/}
            {<AddressIvanovoHotel/>}
          </div>
        </section>
        {/*Footer*/}
        <section className='border-t py-20 sm:pt-12 sm:pb-0 text-3xl font-light xl:text-2xl md:text-lg sm:text-sm'
                 style={{backgroundColor: darkBgColor, color: lightTextColor, borderColor:`${lightBgColor}20`}}>
          <div className='max-w-[1920px] mx-auto px-20 xl:px-14 lg:px-10 md:px-6 600px:px-4'>
            <div className='grid grid-cols-[auto_auto_auto] sm:grid-rows-5 sm:grid-cols-[auto_auto] sm:max-h-[400px]
                  gap-x-16 lg:gap-x-8 xs:gap-x-0 justify-between gap-y-20 sm:gap-y-14 xs:gap-y-24'>
              <Navigation/>
              <div className='flex flex-col gap-4 sm:gap-2 sm:row-span-2 sm:row-start-3'>
                <p className='font-bold underline'>#ИВАНОВООТЕЛЬ</p>
                  <a href="">Политика конфиденциальности</a>
                  <a href="">Публичная оферта</a>
              </div>
              <div className='flex flex-col gap-4 sm:gap-2 sm:col-start-2 sm:row-start-1'>
                <p className='font-bold underline'>Связь с нами</p>
                  <a href="tel:+74932939977">+7 (4932) 93-99-77</a>
                  <a href="mailto:ivanovohotel@inbox.ru">ivanovohotel@inbox.ru</a>
              </div>
              <div className='flex gap-[70px] lg:gap-12 sm:gap-4 xl:[&>a]:w-14 xl:[&>a]:h-14 md:[&>a]:w-8 md:[&>a]:h-8
              col-start-1 col-end-2 sm:col-start-2 sm:row-start-2 xs:grid xs:grid-cols-2 xs:grid-rows-6 xs:gap-y-12 mx-auto'>
                <a href=''><Image src='/icons/vk-icon.svg' alt='' width={80} height={80} className=''></Image></a>
                <a href=''><Image src='/icons/class-icon.svg' alt='' width={80} height={80}></Image></a>
                <a href=''><Image src='/icons/fb-icon.svg' alt='' width={80} height={80}></Image></a>
                <a href=''><Image src='/icons/inst-icon.svg' alt='' width={80} height={80}></Image></a>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Subdomain;