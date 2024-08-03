import Image from 'next/image'
import React from 'react'
import gojologo from '../assets/gojologo.jpg'

const Navbar = () => {
  return (
    <main className='flex justify-center  '>
<section className='lg:max-w-[1440px] w-[93%] mx-auto lg:w-full '>
      <div className='w-full  '>
        <Image src={gojologo} alt='logo' className='rounded-[50%] w-[100px] ' />
      </div>
    </section>
      
    </main>

  )
}

export default Navbar
 