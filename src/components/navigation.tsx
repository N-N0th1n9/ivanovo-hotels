'use client'

import {Link} from "react-scroll";

const Navigation = () => {
  return (
      <div className='flex flex-col gap-4 sm:gap-2'>
        <p className='font-bold underline sm:row-span-2 '>Навигация</p>
        <Link to="home" spy={true} smooth={true} duration={500} className='cursor-pointer'>Бронирование номеров</Link>
        <Link to="about-us" spy={true} smooth={true} duration={500} className='cursor-pointer'>О нас</Link>
        <Link to="rooms" spy={true} smooth={true} duration={500} className='cursor-pointer'>Номера</Link>
        <Link to="feedback" spy={true} smooth={true} duration={500} className='cursor-pointer'>Отзывы</Link>
        <Link to="address" spy={true} smooth={true} duration={500} className='cursor-pointer'>Как нас найти</Link>
      </div>
  );
};

export default Navigation;