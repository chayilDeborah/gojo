import Image from 'next/image'
import React from 'react'
import gojo from '../assets/gojo.png'
import twitter from '../assets/twitter.svg'
import telegram from '../assets/telegram.svg'
import whatsapp from '../assets/whatsapp.png'
import Link from 'next/link'

const Communities = () => {
  return (
    <section>
    <main className='w-full overflow-hidden relative mx-auto mt-[2150px] lg:-mt-[65px] '>
        <div className='content bg-[#000000] relative'>
        <div className='image3 lg:w-full object-cover h-[615px] lg:h-[925px] lg:mb-[50px] '></div>

        <section className='absolute mx-auto w-full mx-auto lg:w-full top-0 left-0 right-0 flex flex-col justify-center '>
        <div className='lg:max-w-[1440px] w-[93%] mx-auto flex justify-center lg:w-full '>
            <div>
                <Image src={gojo} alt='gojo' className='mt-[50px] lg:-mt-[300px] '  data-aos="fade-up" data-duration="1400"/>
                <h1  className='lg:text-[200px] text-[80px] leading-[90px]  -tracking-[2%] font text-[#D9DAD9] text-center lg:mt-[270px] mt-[80px] lg:mb-[110px] mb-[58px] ' data-aos="fade-up" data-duration="1600">Community</h1>
                <div className='lg:flex w-fit mx-auto mb-[80px] lg:mb-[145px]'>
                    <Link href='https://x.com/thegojobot'>
                    <button className='border-[1px] border-[#E6E7E6] flex w-[235px] h-[68px] rounded-[12px]  px-[15.5px] '  data-aos="fade-up" data-duration="1800">
                        <Image src={twitter} alt='twitter' className='my-auto' />
                        <h1 className='text-[31px] leading-[37.2px] -tracking-[2%] text-white ml-[20px] my-auto   hover:text-[#FF7878]'>X/Twitter</h1>
                    </button>
                    </Link>
                    <Link href='https://t.me/gojobotportal'>
                    <button className='border-[1px] border-[#E6E7E6] flex w-[235px] h-[68px] rounded-[12px]  px-[15.5px] lg:ml-[60px] lg:mt-[0px] mt-[30px] '  data-aos="fade-up" data-duration="2000">
                        <Image src={telegram} alt='telegram' className='my-auto' />
                        <h1 className='text-[31px] leading-[37.2px] -tracking-[2%] text-white ml-[20px] my-auto  hover:text-[#FF7878] '>Telegram</h1>
                    </button>
                    </Link>
                    <Link href='https://bit.ly/gojobot'>
                    <button className='border-[1px] border-[#E6E7E6] flex w-[235px] h-[68px] rounded-[12px]  px-[15.5px] lg:ml-[60px] lg:mt-[0px] mt-[30px] '  data-aos="fade-up" data-duration="2200">
                        <Image src={whatsapp} alt='whatsapp' className='my-auto w-[48px] ' />
                        <h1 className='text-[31px] leading-[37.2px] -tracking-[2%] text-white ml-[10px] my-auto  hover:text-[#FF7878]  '>WhatsApp</h1>
                    </button>
                    </Link>


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
