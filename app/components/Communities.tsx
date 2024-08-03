import Image from 'next/image'
import React from 'react'
import gojo from '../assets/gojo.png'
import twitter from '../assets/twitter.svg'
import telegram from '../assets/telegram.svg'

const Communities = () => {
  return (
    <section>
    <main className='w-full  relative mx-auto mt-[600%] lg:mt-[0px] '>
        <div className='content bg-[#000000] relative'>
        <div className='imae lg:w-full object-cover  '></div>

        <section className='absolute mx-auto w-full mx-auto lg:w-full top-0 left-0 right-0 flex flex-col justify-center '>
        <div className='lg:max-w-[1440px] w-[93%] mx-auto flex justify-center lg:w-full '>
            <div>
                <Image src={gojo} alt='gojo' className='' />
                <h1  className='lg:text-[200px] text-[80px] leading-[90px]  -tracking-[2%] font text-[#D9DAD9] text-center mt-[80px] mb-[58px] '>Community</h1>
                <div className='lg:flex w-fit mx-auto mb-[50px] lg:mb-[145px]'>
                    <button className='border-[1px] border-[#E6E7E6] flex w-[235px] h-[68px] rounded-[12px]  px-[15.5px] '>
                        <Image src={twitter} alt='twitter' className='my-auto' />
                        <h1 className='text-[31px] leading-[37.2px] -tracking-[2%] text-white ml-[20px] my-auto  '>X/Twitter</h1>
                    </button>
                    <button className='border-[1px] border-[#E6E7E6] flex w-[235px] h-[68px] rounded-[12px]  px-[15.5px] lg:ml-[60px] lg:mt-[0px] mt-[30px] '>
                        <Image src={telegram} alt='telegram' className='my-auto' />
                        <h1 className='text-[31px] leading-[37.2px] -tracking-[2%] text-white ml-[20px] my-auto  '>Telegram</h1>
                    </button>


                </div>
            </div>
        </div>
        </section>
        </div>
    </main>
    </section>
  )
}

export default Communities
