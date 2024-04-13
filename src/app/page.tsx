import styles from './page.module.css'
import {getContent} from "@/services/content.service";
import {Inter} from "next/font/google";
import {AboutUsBlock} from "@/components/AboutUsBlock";
import RoomBlock from "@/components/RoomBlock/RoomBlock";
import Feedback from "@/components/Feedback/Feedback";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import AddressIvanovoHotel from "@/components/Address/Address-IvanovoHotel";
import AddressArtHotel from "@/components/Address/Address-ArtHotel";
import {aboutUs} from "@/constants/abouUsLinks";
import {roomsImg} from "@/constants/roomImgLinks";
import {Metadata, ResolvingMetadata} from "next";
import {metaProps} from "@/interfaces/metaProps.interfaec";
import {headers} from "next/headers";
import {log} from "node:util";

const inter = Inter({ subsets: ['latin'], variable: '--var-inter' })

export async function generateMetadata({ params, searchParams }: metaProps, parent: ResolvingMetadata): Promise<Metadata> {

  const content = await getContent(params.subdomain)

  return {
    title: content.main.title.substring(1) + " - отель в Иваново, официальный сайт",
    description: 'Отличный отель в Иваново с потрясающими условиями на любой вкус. Отдых здесь запомнится на долгие годы. Один из сети отелей Ивановоотель и Артотель.',
    keywords: [`${content.main.title.substring(1).toLowerCase()}`, 'отель', 'иваново', 'люкс', 'семейный', 'отдых'],
    openGraph: {
      images: ['public/images/Люкс.jpg'],
    },
  }
}

const Hotel = async ({params}: {
  params: {subdomain: string}
}) => {
  const content = await getContent(params.subdomain)

  const lightBgColor = content.colors.light_bg_color
  const darkBgColor = content.colors.dark_bg_color
  const secondaryColor = content.colors.light_secondary_color
  const darkSecondaryColor = content.colors.dark_secondary_color
  const iconBgColor = content.colors.icon_bg
  const lightTextColor = content.colors.light_text_color
  const darkTextColor = content.colors.dark_text_color

  const rooms = content.rooms.blocks

  const headersList = headers();
  const domain = headersList.get('host') || "";

  let tlScenario = 'tl-search-form-14699';
  let tlScenarioBtn = '14699';

  if (domain === 'arthotel.ivhg.ru') {
    tlScenario = 'tl-search-form-9193';
    tlScenarioBtn = '9193';
  }

  return (
      <div className={`w-full h-full ${styles.link}`} >
        {/* Header-video */}
        <section
            className='relative min-h-screen pt-6 px-20 xl:px-14 lg:px-10 md:px-6 600px:px-4 bg-black bg-opacity-40'
            id='home'
        >
          <div className='max-w-[1760px] min-h-screen flex flex-col justify-between mx-auto'>
            <div>
              <div className={`grid grid-cols-[auto_auto_auto] grid-rows-2 justify-between font-bold items-center sm:mb-[23px]`}
                   style={{ color: lightTextColor}}>
                <a href={`tel:${content.footer.tel}`} className='text-[22px] lg:text-lg sm:text-base xs:text-sm 2xs:text-xs font-medium sm:row-start-2'>
                  {content.footer.tel}
                </a>
                <span className={`text-xl lg:text-lg sm:text-base xs:text-sm 2xs:text-xs sm:row-start-1 ${inter.variable}`}>
                  {content.main.title}
                </span>
                <button className='border-[1px] font-medium px-12 py-4 text-xl lg:text-base sm:text-sm 2xs:text-xs rounded-[10px]
                        outline-none lg:px-8 lg:py-3 sm:px-[22.5px] xs:px-3 xs:py-2 max-w-[246px] sm:row-span-2 sm:col-start-3
                        hover:bg-white hover:!text-black transition'
                        style={{ borderColor: lightBgColor, color: lightTextColor}} data-tl-booking-open="true" data-tl-booking-scenario={tlScenarioBtn}
                >выбрать номер
                </button>
              </div>

              {/*Booking-widget*/}
              <div id='block-search' className='w-full rounded-2xl' style={{backgroundColor: lightBgColor}}>
                <div id={tlScenario} className='tl-container' style={{padding: "0 30px"}}>
                  <noindex><a href='https://www.travelline.ru/products/tl-hotel/' rel='nofollow'
                              target='_blank'>TravelLine</a></noindex>
                </div>
              </div>

            </div>
            <div className='leading-tight mb-20 lg:mb-10' style={{color: lightTextColor}}>
              <h1 className='text-8xl font-extrabold xl:text-[80px] lg:text-[64px] md:text-5xl sm:text-[32px] xs:text-2xl'>{content.main.title}</h1>
              <h2 className='text-[44px] xl:text-4xl lg:text-[32px] md:text-2xl 600px:text-xl 2xs:text-[18px]'>{content.main.sub_title}</h2>
            </div>
          </div>
          <video loop muted autoPlay className='absolute top-0 left-0 w-full h-full object-cover -z-10'>
            <source src='/videos/Иваново%20отель.webm'/>
          </video>
        </section>

        {/* About-us */}
        <section id='about-us' className='pt-20 md:pt-14' style={{ backgroundColor: lightBgColor}}>
          <div className='mb-[218px] sm:mb-32 mx-auto max-w-[1920px] px-20 xl:px-14 lg:px-10 md:px-6 600px:px-4'>
            <p className='flex text-[70px] xl:text-[64px] md:text-[54px] sm:text-[46px] 600px:text-[38px] xs:text-[34px]
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
            <div className='flex text-[70px] xl:text-[64px] md:text-[54px] sm:text-[46px] 600px:text-[38px] xs:text-[32px]
            font-bold mb-16 xl:mb-10 sm:mb-9 600px:mb-4'>
              <span style={{ color: darkSecondaryColor}}>/</span>
              <span style={{ color: lightTextColor}}>{content.rooms.title}</span>
            </div>
            <div className='flex flex-col gap-[85px] lg:gap-12 111'>
              {Object.entries(rooms).map(([roomKey, roomInfo], idx) => (
                  <div key={roomKey}>
                    <RoomBlock
                        room={roomInfo}
                        image={roomsImg[idx]}
                        btnText={content.rooms.button}
                        bg={content.colors.light_bg_color}
                        tlScenarioBtn={tlScenarioBtn}
                    ></RoomBlock>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback */}
        <section id='feedback' className='pt-20 md:pt-14' style={{ backgroundColor: lightBgColor}}>
          <div className='mx-auto max-w-[1920px] px-20 lg:px-10 xl:px-14 md:px-6 600px:px-4'>
            <div className='flex text-[70px] xl:text-[64px] md:text-[54px] sm:text-[46px] 600px:text-[38px] xs:text-[32px]
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
            <div className='flex text-[70px] xl:text-[64px] md:text-[54px] sm:text-[46px] 600px:text-[38px] xs:text-[32px]
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
            <div>
              {content.main.title === '#ИВАНОВООТЕЛЬ' ? <AddressIvanovoHotel></AddressIvanovoHotel> : <AddressArtHotel></AddressArtHotel>}
            </div>
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
                <p className='font-bold underline'>{content.main.title}</p>
                <a href="">Политика конфиденциальности</a>
                <a href="">Публичная оферта</a>
              </div>
              <div className='flex flex-col gap-4 sm:gap-2 sm:col-start-2 sm:row-start-1'>
                <p className='font-bold underline'>Связь с нами</p>
                <a href={`tel:${content.footer.tel}`}>{content.footer.tel}</a>
                <a href={`mailto:${content.footer.email}`}>{content.footer.email}</a>
              </div>
              <div className='flex gap-[70px] lg:gap-12 sm:gap-4 xl:[&>a]:w-14 xl:[&>a]:h-14 md:[&>a]:w-10 md::h-10 sm:[&>a]:w-8 sm:[&>a]:h-8
              col-start-1 col-end-2 sm:col-start-2 sm:row-start-2 xs:grid xs:grid-cols-2 xs:grid-rows-6 xs:gap-y-12 mx-auto'>
                <a href={`${content.footer.vk}`}><Image src='/icons/vk-icon.svg' alt='' width={80} height={80} className='outline-transparent'></Image></a>
                <a href={`${content.footer.class}`}><Image src='/icons/class-icon.svg' alt='' width={80} height={80}></Image></a>
                <a href=''><Image src='/icons/fb-icon.svg' alt='' width={80} height={80}></Image></a>
                <a href=''><Image src='/icons/inst-icon.svg' alt='' width={80} height={80}></Image></a>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Hotel;