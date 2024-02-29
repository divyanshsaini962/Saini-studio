import React from 'react'
import Image from 'next/image'
import FeedbackImg from '@/src/asset/Feedbackimg.png'

const Feedback = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-16 ">
    <div className="flex flex-wrap ">
      <div className="p-6 md:w-1/2 flex flex-col items-start">
        <h2 className="sm:text-3xl text-2xl title-font font-bold text-gray-900 mt-4 mb-4 pl-2 md:pl-32">
        WHAT OUR CLIENTS <br />
        <span className='text-primeColor pt-3'>SAY ABOUT US</span>
        </h2>
      </div>
      <div className="p-6 md:w-1/2 flex flex-col items-start">
        <p className="leading-relaxed mb-2 font-semibold">
          Discover testimonials from some of <br />
          the outstanding companies we've <br />
          collaborated with, making us their <br />
          top choice creative agency
        </p>
      </div>
    </div>
  </div>
  <Image 
    src={FeedbackImg}
    alt='feedback'
  />

</section>
  )
}

export default Feedback