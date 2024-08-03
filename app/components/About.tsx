import Image from 'next/image'
import React from 'react'
import sakuna from '../assets/sakuna.svg'
import cloud from '../assets/cloud.svg'

const About = () => {
    return (
        <main className='w-full  relative mx-auto  lg:mt-[580px] '>
            <div className='content bg-[#000000] relative'>
                <div className='image lg:w-full object-cover h-[1900px] lg:h-[900px]  '></div>

                <section className='absolute mx-auto w-full mx-auto lg:w-full top-0 left-0 right-0 flex flex-col justify-center '>
                    <div className='lg:max-w-[1440px] w-[93%] mx-auto flex justify-center lg:w-full '>
                        <div>
                            <div className='lg:flex justify-center '>
                                <div className='mt-[752px] flex lg:flex-col flex-col lg:mt-[430px]'>
                                    <h1 className='lg:text-[200px] text-[100px] leading-[90px] lg:leading-[180px] -tracking-[2%] font lg:w-[456px] text-[#D9DAD9] text-center ' >About Us</h1>
                                    <Image src={sakuna} alt='sakuna' className='mx-auto lg:ml-auto lg:-mr-[38px] lg:-mt-[193px] mt-[30px] close' />
                                </div>
                                <div className='border-[0.5px] border-[#FF7878] rounded-[24px] lg:rounded-[50px] p-[18px] lg:p-[40px] bg-[#171212] mt-[80px] lg:mt-[340px] lg:w-[729px] lg:h-[558px] '>
                                    <div className='text-[18px] lg:text-[23px] leading-[24px] lg:leading-[30px] -tracking-[2%] text-white '>
                                        <h1>Gojo Bot is a Solana chain WhatsApp Bot that lets you track and trade tokens. Gojo is your WhatsApp sidekick. Ever wished you could trade Solana tokens without leaving WhatsApp? Wish granted!</h1><br />
                                        <h1>Gojo Bot is the very first WhatsApp bot designed exclusively for Solana traders.</h1><br/>
                                        <h1>Our mission is to make trading and on-chain analysis as easy as pie, especially for WhatsApp users. We’re here to sweep away the confusion that usually comes with trading and research bots.</h1><br />
                                        <h1>With Gojo, you can trade and track any token instantly after its launch — all from the cozy confines of your WhatsApp chat.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Image src={cloud} alt='cloud' className='lg:-mt-[371px] -mt-[60px] ' />
            </div>

        </main>
    )
}

export default About
