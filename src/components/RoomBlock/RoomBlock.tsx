'use client'

import {RoomInfo} from "@/interfaces/content.interfaces";
import {FC} from "react";
import Image from "next/image";
import styles from './RoomBlock.module.scss'

interface RoomProps {
  room: RoomInfo,
  image: string,
  bg: string
  btnText: string,
}

const RoomBlock: FC<RoomProps> = ({room, image, btnText, bg}) => {
  return (
      <div className={`py-5 ${styles.mainBlock}`}>
        <div className={`w-full flex gap-16 py-16 pl-16 pr-12 rounded-2xl 3xl:pl-14 3xl:pr-11
          max-w-[1900px]:pr-4 max-w-[1900px]:pl-2 ${styles.subBlock}`} style={{backgroundColor: `${bg}10`}}>
          <div className={`-my-[83px] basis-[80%] flex ${styles.img}`}>
            <Image src={image} alt='' width={887} height={708} className={`rounded-xl`}/>
          </div>
          <div className={`text-2xl basis-[60%] flex flex-col justify-between max-h-[541px] ${styles.textBlock}`}>
            <div style={{color: bg}}>
              <h3 className='text-4xl font-bold mb-4'>{room.title}</h3>
              <h4 className='font-bold mb-2'>{room.short_description}</h4>
              <ul className='font-normal mb-10'>
                {room.features.map((feature) =>
                    <li className='flex gap-1 mb-1' key={feature}><span>—</span>{feature}</li>
                )}
              </ul>
            </div>
            <button className={`px-[75px] text-black py-4 font-bold rounded-xl w-[80%] max-w-[416px] bg-white border-white
                    border-[1px] border-darkPurple hover:bg-darkPurple hover:border-darkPurple hover:text-white hover:bg-transparent transition
                    ${styles.button}`}>{btnText}</button>
          </div>
        </div>
      </div>
  );
};

export default RoomBlock;