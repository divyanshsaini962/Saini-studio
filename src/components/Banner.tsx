import React from 'react'
import Image from 'next/image'
import BannerImg from '@/src/asset/digital-marketing-banner.png'

const Banner = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We Grow You Revenue
        <br className="hidden lg:inline-block"/>With Results-driven SEO.
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-primeColor border-0 py-2 px-6
          focus:outline-none hover:bg-purple-600 rounded text-lg"><a href="/contact"> Contact Us</a> </button>
        <button className="ml-4 inline-flex text-gray-700 hover:text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-primeColor rounded text-lg">About Us</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" width={350} height={350} alt="hero" src={BannerImg}/>
    </div>
  </div>
</section>
    </>
  )
}

export default Banner