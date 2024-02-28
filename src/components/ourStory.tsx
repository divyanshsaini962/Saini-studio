import React from 'react'
import Image from 'next/image'
import Peacock from '@/src/asset/Peacock.png'

const ourService = () => {
  return (
    <section className="text-white body-font bg-black">
      <h1 className='text-center text-5xl pt-8 font-bold'>Our Service</h1>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <Image 
       alt="feature" 
       className="object-cover object-center h-full w-full" 
       src={Peacock}/>
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center text-4xl mb-5">
        01
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl title-font font-medium ">BRANDING</h2>
          <p className='mb-3 text-lg'>Eye-catching aesthetics</p>
          <p className="leading-relaxed text-base mb-3">We understand every step of the customers,
             focused branding process as well as what it takes to leave a lasting impression.
          </p>
          <button className='w-36 h-8 rounded border-2 hover:text-black hover:bg-white'>
            <a href="">I WANT IT</a>
          </button>
          <hr className='lg:w-28  mt-8' />
        </div>
      </div>
                           {/* 2nd container */}
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center text-4xl mb-5">
        02
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl title-font font-medium ">WEB DESIGN</h2>
          <p className='mb-3 text-lg'>Crafting digital masterpiece</p>
          <p className="leading-relaxed text-base mb-3">We provide best-in-class web design with eye-catching aesthetics,
            all while keeping the customer journey and commercial goals in mind.
          </p>
          <button className='w-36 h-8 rounded border-2 hover:text-black hover:bg-white'>
            <a href="">I WANT IT</a>
          </button>
          <hr className='lg:w-28  mt-8' />
        </div>
      </div>
                                      {/* 3rd container */}
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center text-4xl mb-5">
        03
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl title-font font-medium ">DIGITAL MARKETING</h2>
          <p className='mb-3 text-lg'>Digital marketing tactics driven by results.</p>
          <p className="leading-relaxed text-base mb-3">Our digital marketing strategy targets the right audience with compelling
           messages , boosting sales while maintaining the brand essence.
          </p>
          <button className='w-36 h-8 rounded border-2 hover:text-black hover:bg-white'>
            <a href="">I WANT IT</a>
          </button>
          <hr className='lg:w-28  mt-8' />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ourService