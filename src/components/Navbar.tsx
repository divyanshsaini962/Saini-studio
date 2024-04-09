"use client"
import { useState } from 'react';
import Logo from '../asset/Logo-04.png';
import Link from 'next/link'
import Image from 'next/image'
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navbar,setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-white  top-0 left-0 right-0 z-10 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image src={Logo} height={30} alt='Logo-img'/>
              </Link>
              <button className="
                   bg-primeColor border-1  py-1 px-3 focus:outline-none hover:bg-gray-300 md:hidden
                   text-white rounded hover:text-primeColor text-base font-semibold">
                   <a href="/contact">
                   Let's talk
                   </a>
                </button>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    // <Image src={Close}width={30} height={30} alt="logo" />
                    <IoCloseSharp className='text-primeColor' height={30} width={30}/>
                  ) : (
                    <GiHamburgerMenu className='text-primeColor' height={30} width={30} />

                  )}
                </button>
              </div>
              
            </div>
          </div>
          <div>
            <div
              className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex text-gray-600 font-bold">
                <li className=" text-1xl py-4	md:py-0 md:px-6 text-center border-b-2 md:border-b-0   border-primeColor  hover:text-primeColor md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="text-1xl px-6 py-4	md:py-0 text-center  border-b-2 md:border-b-0   border-primeColor  hover:text-primeColor md:hover:bg-transparent">
                  <Link href="/branding" onClick={() => setNavbar(!navbar)}>
                    Branding
                  </Link>
                </li>
                <li className="text-1xl  px-6 py-4	md:py-0 text-center  border-b-2 md:border-b-0   border-primeColor  hover:text-primeColor md:hover:bg-transparent">
                  <Link href="/web-design" onClick={() => setNavbar(!navbar)}>
                    Web Design
                  </Link>
                </li>
                <li className="text-1xl py-4	md:py-0 px-6 text-center  border-b-2 md:border-b-0   border-primeColor  hover:text-primeColor md:hover:bg-transparent">
                  <Link href="digital-marketing" onClick={() => setNavbar(!navbar)}>
                     Digital Marketing
                  </Link>
                </li>
                <li className="text-1xl py-4	md:py-0 px-6 text-center  border-b-2 md:border-b-0   border-primeColor  hover:text-primeColor md:hover:bg-transparent">
                  <Link href="our-work" onClick={() => setNavbar(!navbar)}>
                     Our Work
                  </Link>
                </li>
                <li className="text-1xl py-4	md:py-0 px-6 text-center  border-b-2 md:border-b-0   border-primeColor  hover:text-primeColor md:hover:bg-transparent">
                  <Link href="about" onClick={() => setNavbar(!navbar)}>
                     About Us
                  </Link>
                </li>
                <button className="
                   bg-primeColor border-1  py-1 px-3 focus:outline-none hover:bg-gray-300 hidden md:flex
                   text-white rounded hover:text-primeColor text-base mt-4 md:mt-0 font-semibold">
                   <a href="/contact">
                   Let's talk
                   </a>
                </button>
              </ul>
              
            </div>
            
          </div>
        </div>
        
      </nav>
    </div>
   
  );
};

export default Navbar;