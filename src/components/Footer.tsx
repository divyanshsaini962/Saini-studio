import Image from 'next/image'
import Logo from '@/src/asset/Logo-04.png'




export default function Footer() {
  return (
  <section>
    <footer className=" pt-10 pb-6 justify-center flex flex-wrap">
      <div className="items-center justify-center md:text-left text-center">
        <h1 className="text-3xl font-bold"><a href="#">hi@saini.studio</a></h1>
        <h1 className='my-2'>+91 79857 84998</h1>
        <hr className=' h-1 bg-primeColor my-2' />
        <p className="mb-4">End Of, Majdoor Wali Gali, BadaBazar, PuranaSahar, Jhansi, UttarPradesh 284002</p>
        <h2 className="text-2xl font-semibold">Branding | Web design | Digital marketing</h2>
      </div>
      <div className='mt-2'>
        <a href="#" className='pt-8'>
          <Image
           src={Logo}
           alt='logo'
           className='w-36 h-10 '

          />     
          </a>
      </div>
    </footer>
    <p className='text-center font-semibold my-2'>Copyright © 2024 <a href="https://www.linkedin.com/in/divyanshu-saini-8ab623231/"> Mr.Divyansh saini </a></p>
    </section> 
    
  )
}