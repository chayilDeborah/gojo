import Image from 'next/image'
import React from 'react'
import gojo from '../assets/gojo.png'
import twitter from '../assets/twitter.svg'
import telegram from '../assets/telegram.svg'

const Communities = () => {
  return (
    <main className='w-full  relative mx-auto mt-[34%] '>
        <div className='content bg-[#000000] relative'>
        <div className='imae lg:w-full object-cover  '></div>

        <section className='absolute mx-auto w-full mx-auto lg:w-full top-0 left-0 right-0 flex flex-col justify-center '>
        <div className='lg:max-w-[1440px] w-[93%] mx-auto flex justify-center lg:w-full '>
            <div>
                <Image src={gojo} alt='gojo' className='' />
                <h1  className='text-[200px] leading-[180px] -tracking-[2%] font text-[#D9DAD9] text-center mt-[80px] mb-[58px] '>Community</h1>
                <div className='flex w-fit mx-auto  mb-[145px]'>
                    <div className='border-[1px] border-[#E6E7E6] flex w-[235px] h-[68px] rounded-[12px]  px-[15.5px] '>
                        <Image src={twitter} alt='twitter' className='' />
                        <h1 className='text-[31px] leading-[37.2px] -tracking-[2%] text-white ml-[20px] my-auto  '>X/Twitter</h1>
                    </div>
                    <div className='border-[1px] border-[#E6E7E6] flex w-[235px] h-[68px] rounded-[12px]  px-[15.5px] ml-[60px] '>
                        <Image src={telegram} alt='telegram' className='' />
                        <h1 className='text-[31px] leading-[37.2px] -tracking-[2%] text-white ml-[20px] my-auto  '>Telegram</h1>
                    </div>


                </div>
            </div>
        </div>
        </section>
        </div>
    </main>
  )
}

export default Communities
