import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:"Our Work"
}
const OurWork = () => {
  return (
    <div className='w-full bg-primeColor'>
        <h1 className='text-5xl text-white'>
            We are working 
        </h1>
    </div>
  )
}

export default OurWork