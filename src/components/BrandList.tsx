import React from 'react'
import Image from 'next/image'
import SainiBanner from '@/src/asset/saini banner.png'

const BrandList = () => {
  return (
     <section>
        <div>
           <Image 
            src={SainiBanner}
            layout="responsive"
            alt='Banner saini'
           />
        </div>
        <div className='w-full pl-0 md:pl-44'>
          <div className='w-96 p-5 md:p-0'>
          <p className='font-semibold'>
            Saini Studio is a Jhansi, Uttar Pradesh-based
            creative agency dedicated to improving digital
            presence through creative thinking.
            <br />
            <br />
            We are committed to elevating brands through
            innovative solutions that captivate and engage
            customers.
            <br />
            <br />
            We work to help our clients reach their full
            potential and identify themselves in their
            industries by putting a focus on excellence and
            pushing boundaries. At our core, we are motivated
            by a desire to assist creators in elevating the world
            around us.
          </p>
          <button className='w-36 h-8 rounded border-2 border-black hover:text-white hover:bg-black my-5 font-semibold'>
            <a href="">Let's talk</a>
          </button>
          </div>
        </div>
     </section>
  )
}

export default BrandList