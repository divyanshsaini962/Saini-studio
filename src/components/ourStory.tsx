import React from 'react'
import Image from 'next/image'
import { TbBrandMyOppo } from "react-icons/tb";
import { GiStumpRegrowth } from "react-icons/gi";
import { FaHandshakeSimple } from "react-icons/fa6";

const ourStory = () => {
  return (
    <div>
<section className="text-gray-600 body-font">
    <div className='items-center text-center justify-center'>
        <h3 className='font-bold mx-2' >Our Story</h3>
        <h1 className='text-3xl my-2 font-bold'>SHAPING THE FUTURE OF BRANDS WITH TODAY'S <br /> VISIONARY MINDS</h1>
        <p className='text-lg px-4 lg:px-24'>We've been in your shoes, building and growing a D2C business. We know the journey well – the late nights, 
            the investments, and the burning passion. When you partner with a team that shares your vision, you're
            placing your brand's mission in capable hands, and together, we embark on an exciting adventure to make 
            it thrive.</p>
    </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl hover:border-8 overflow-hidden">
         <div className='lg:h-48 md:h-36 py-5 lg:py-0 items-center justify-center flex'>
          <TbBrandMyOppo className=' w-20 h-20 items-center' />
         </div>
          
          <div className="p-6 text-center">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Incubate My Brand</h1>
            <p className="leading-relaxed mb-3">
                One Fourth’s incubation program takes a futuristic and profitable approach, providing entrepreneurs 
                with necessary capital, expertise, and resources to successfully launch digital brands</p>
            <div className="flex items-center flex-wrap justify-center cursor-pointer">
              <a href='/contact' className="text-primeColor hover:text-gray-500 inline-flex items-center md:mb-2 lg:mb-0 text-center">Know More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div> 
                                       {/* 2nd container */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 hover:border-8 rounded-2xl overflow-hidden">
         <div className='lg:h-48 md:h-36 py-5 lg:py-0 items-center justify-center flex'>
          <GiStumpRegrowth className=' w-20 h-20 items-center'/>
          </div>
          <div className="p-6 text-center">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Grow My Brand</h1>
            <p className="leading-relaxed mb-3">
               Maximize your brand’s potential with us. Share a portion of your business to access our expertise, while 
               retaining control. Together, we’ll optimize your brand and unlock growth opportunities.</p>
            <div className="flex items-center flex-wrap justify-center cursor-pointer">
              <a className="text-primeColor hover:text-gray-500 inline-flex items-center md:mb-2 lg:mb-0 text-center">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
                                   {/* 3rd container */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 hover:border-8 rounded-2xl overflow-hidden">
            <div className='lg:h-48 md:h-36 py-5 lg:py-0 items-center justify-center flex'>        
                <FaHandshakeSimple className=' w-20 h-20 items-center' />
            </div>

        
          <div className="p-6 text-center">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Acquire My Brand</h1>
            <p className="leading-relaxed mb-3">
              Making things simple is our priority. We’re always on the lookout for outstanding digital brands to acquire.
               Profitably exit or continue while we optimize your business with abundant resources.</p>
            <div className="flex items-center flex-wrap justify-center cursor-pointer ">
              <a className="text-primeColor hover:text-gray-500 inline-flex items-center md:mb-2 lg:mb-0 text-center">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default ourStory