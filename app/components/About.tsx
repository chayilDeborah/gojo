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
                            <div className='lg:flex justify-center '>
                                <div className='mt-[100px] flex lg:flex-col flex-col lg:mt-[246px]'>
                                    <h1 className='lg:text-[200px] text-[100px] leading-[90px] lg:leading-[180px] -tracking-[2%] font lg:w-[456px] text-[#D9DAD9] text-center ' >About Us</h1>
                                    <Image src={sakuna} alt='sakuna' className='mx-auto lg:ml-auto lg:-mr-[11px] lg:-mt-[42%] mt-[30px] close' />
                                </div>
                                <div className='border-[0.5px] border-[#FF7878] lg:-ml-[35px] rounded-[24px] lg:rounded-[50px] p-[18px] lg:p-[40px] bg-[#171212] mt-[80px] lg:mt-[166px] lg:w-[729px] lg:h-[440px] '>
                                    <h2 className='text-[18px] lg:text-[23px] leading-[24px] lg:leading-[30px] -tracking-[2%] text-white '>Lexi AI is poised to transform the crypto space by making blockchain technology and cryptocurrency trading more accessible and user-friendly, particularly for WhatsApp users. Through AI-driven solutions and intuitive tools, Lexi AI aims to simplify and enhance the user experience, empowering both new and experienced users alike.
                                    Our vision is to demystify the complexities of blockchain technology and cryptocurrency trading, offering seamless, AI-powered solutions that cater specifically to the needs of WhatsApp users. Lexi AI aims to empower both new and experienced users by providing intuitive tools that streamline their interactions with the crypto world.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Image src={cloud} alt='cloud' className='lg:-mt-[15%] -mt-[25%] ' />
            </div>

        </main>
    )
}

export default About
