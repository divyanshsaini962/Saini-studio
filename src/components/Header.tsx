'use client';
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../asset/Logo-04.png'
import { usePathname } from 'next/navigation';
import {HiMenuAlt2} from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";




const Header = () => {

  const pathname = usePathname();
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = ():void =>{
    setisClick(!isClick)
  }
  const navBarList = [
    {
        title:"Home",
        link:"/",
    },
    {
        title:"Service",
        link:"service",
    },
    {
        title:"Web Design",
        link:"/web-design",
    },
    {
        title:"Branding",
        link:"/branding",
    },
    {
        title:"About Us",
        link:"/about-us",
    },
    {
        title:"Contact",
        link:"/contact",
    },
];

  return (
    <>
      <nav className='w-full h-20 bg-white border-b-[1px] border-b-gray-400 sticky justify-between'>
        <div className='h-full max-w-screen-xl md:mx-auto flex items-center justify-between '>
             <div className='flex w-1/2 mx-4 '>
                  <Link href={'/'}>
                      <Image 
                         src={Logo}
                         alt='logo img'
                         width={200}
                      />
                  </Link>
             </div>
             <div className='hidden md:inline-flex items-end gap-2 justify-end w-1/2'>
             {navBarList.map((item)=>(
                <Link href={item?.link} key={item?.link} className={`flex hover:font-medium w-35 h-6 justify-center items-center px-2
                 text-regal-blue hover:underline underline-offset-4 decoration-[1px] hover:text-primeColor md:border-r-[2px]
                 border-r-gray-600 duration-200 last:border-r-0 ${pathname === item ?. link && "text-gray-950 underline"}`}>
                    {item?.title}
                </Link>
             ))}

           </div>

           <div className='md:hidden flex justify-end'>
               <button className='inline-flex items-center justify-center p-2 rounded-md text-primeColor md:text-black
               hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black'
               onClick={toggleNavbar}>
                 {isClick ? (
                  <MdOutlineClose className="inline-flex hover:text-red-600 md:hidden cursor-pointer w-8 h-6"  />  
                 ):(
                  <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer w-8 h-6 "/>
                 )}
               </button>
             </div> 
           



             


        </div>
        {
          isClick && (
            <div className='md:hidden bg-white'>
               <div className='px-2 pt-2  pb-3 space-y-1 sm:px-3'>
               {navBarList.map((item)=>(
                <Link href={item?.link} key={item?.link} className={`flex hover:font-medium w-35 h-10 px-8 items-center
                text-primeColor hover:text-white hover:bg-primeColor underline-offset-4 decoration-[1px] hover:text-blue md:border-r-[2px]
                 border-r-gray-600 duration-200 last:border-r-0 `}>
                    {item?.title}
                </Link>
             ))}
               </div>
            </div>
          )
        }

      </nav>
    </>
  )
}

export default Header