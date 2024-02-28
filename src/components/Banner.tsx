import React from 'react';
import Image from 'next/image';
import HeroImg from '@/src/asset/Hero.png';
import { IoLogoInstagram } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <div className="relative h-screen">
        <Image 
          src={HeroImg} 
          alt="Hero Image" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
        />
        <div className="absolute inset-0  bg-opacity-75"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="container mx-auto text-center">
            <h1 className="md:text-6xl text-2xl text-center font-bold text-white mb-4">Uplifting your digital presence<br />through creative solutions</h1>
            <div className='flex items-center justify-center p-5'>
            <button 
             className='w-10 h-10 bg-gray-500 items-center justify-center flex mx-1 rounded hover:bg-pink-300'>
              <a href="https://www.instagram.com/saini.std/" target='_blank'>
              <IoLogoInstagram className=' h-7 w-7 text-white' />
              </a>
            </button>
                            {/* email icon */}
            <button 
             className='w-10 h-10 bg-gray-500 items-center justify-center mx-1 flex rounded hover:bg-pink-300'>
              <a href="hi@saini.studio" target='_blank'>
              <MdEmail className=' h-7 w-7 text-white' />
              </a>
            </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

