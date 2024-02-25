import React from 'react'
import Image from 'next/image'
import Ram from '../asset/shri ram.jpg'
import Ishant from '../asset/ishant.jpg'
import Aman from '../asset/aman.jpg'

const Team = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className='w-full justify-center items-center '>
           <h1 className='text-center text-3xl my-4 px-32 font-bold'>FOUNDING TEAM</h1>
           <p className='text-center px-12'>Our Founding Team fearlessly ignites change, shaping our path to success at Saini Studio. With unwavering <br />
             commitment, we create a future embodying their visionary spirit. Together, we honor their audacity,<br />
             passion, and dedication, forging ahead.</p>
        </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image 
           alt="testimonial" 
           className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block 
            border-2 border-gray-200 bg-gray-100" 
            src={Ram}/>
          <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Shri Ram</h2>
          <p className="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <Image 
           alt="testimonial" 
           className="w-40 h-40 mb-8 object-cover object-center rounded-full 
           inline-block border-2 border-gray-200 bg-gray-100" 
           src={Ishant}/>
          <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Ishant Saini</h2>
          <p className="text-gray-500">Digital Creater</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <Image 
           alt="testimonial" 
           className="w-40 h-40 mb-8 object-cover object-center rounded-full 
            inline-block border-2 border-gray-200 bg-gray-100" 
            src={Aman}/>
          <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Aman Saini</h2>
          <p className="text-gray-500">Ui Designer</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Team