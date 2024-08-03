import Image from 'next/image'
import React from 'react'
import sakuna from '../assets/sakuna.svg'
import cloud from '../assets/cloud.svg'

const About = () => {
    return (
        <main className='w-full  relative mx-auto '>
            <div className='content bg-[#000000] relative'>
                <div className='image lg:w-full object-cover h-[615px] lg:h-[760px]  '></div>

                <section className='absolute mx-auto w-full mx-auto lg:w-full top-0 left-0 right-0 flex flex-col justify-center '>
                    <div className='lg:max-w-[1440px] w-[93%] mx-auto flex justify-center lg:w-full '>
                        <div>
                            <div className='flex justify-center '>
                                <div className='mt-[246px]'>
                                    <h1 className='text-[200px] leading-[180px] -tracking-[2%] font w-[456px] text-[#D9DAD9] text-center ' >About Us</h1>
                                    <Image src={sakuna} alt='sakuna' className='ml-auto -mr-[11px] -mt-[42%] close' />
                                </div>
                                <div className='border-[0.5px] border-[#FF7878] -ml-[35px] lg:rounded-[50px] p-[40px] bg-[#171212] mt-[166px] w-[729px] h-[440px] '>
                                    <h2 className='text-[23px] leading-[30px] -tracking-[2%] text-white '>Lexi AI is poised to transform the crypto space by making blockchain technology and cryptocurrency trading more accessible and user-friendly, particularly for WhatsApp users. Through AI-driven solutions and intuitive tools, Lexi AI aims to simplify and enhance the user experience, empowering both new and experienced users alike.
                                    Our vision is to demystify the complexities of blockchain technology and cryptocurrency trading, offering seamless, AI-powered solutions that cater specifically to the needs of WhatsApp users. Lexi AI aims to empower both new and experienced users by providing intuitive tools that streamline their interactions with the crypto world.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Image src={cloud} alt='cloud' className='-mt-[15%] ' />
            </div>

        </main>
    )
}

export default About
