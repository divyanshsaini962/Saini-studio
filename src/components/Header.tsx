'use client';
import React from 'react'
import Image from 'next/image'
import Logo from '../asset/Logo-04.png'





const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image
       src={Logo}
       alt='Logo'
       width={160}
      />
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a href='/' className="mr-5 hover:text-primeColor font-semibold">Home</a>
      <a href='/branding' className="mr-5 hover:text-primeColor font-semibold">Branding</a>
      <a href='/web-design' className="mr-5 hover:text-primeColor font-semibold">Web Design</a>
      <a href='/digital-marketing' className="mr-5 hover:text-primeColor font-semibold">Digital Marketing</a>
      <a href='/our-work' className="mr-5 hover:text-primeColor font-semibold">Our Work</a>
      <a href='/about' className="mr-5 hover:text-primeColor font-semibold">About Us</a>
    </nav>
    <button className="inline-flex items-center
     bg-primeColor border-1  py-1 px-3 focus:outline-none hover:bg-gray-300
      text-white rounded hover:text-primeColor text-base mt-4 md:mt-0 font-semibold">
      <a href="/contact">
      Let's talk
      </a>
    </button>
  </div>
</header>
    </>
  )
}

export default Header