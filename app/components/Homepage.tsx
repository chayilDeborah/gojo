import React from 'react'

const Homepage = () => {
  return (


    <div className='w-full  relative mx-auto '>
      <div className='content bg-[#000000] relative'>
        <div className='image lg:w-full object-cover h-[615px] lg:h-[600px]  '></div>

        <section className='absolute mx-auto w-full mx-auto lg:w-full top-0 left-0 right-0 flex flex-col justify-center '>
          <div className='lg:max-w-[1440px] w-[93%] flex justify-center lg:w-full '>
            <div className='mx-auto text-white pt-[27px] '>
              <div className='mx-auto flex justify-center '>
                <div className='mx-auto flex justify-center  lg:w-[289px] homebtn lg:mx-[0px] mx-auto w-[220px] h-[39px] rounded-[12px] text-[#FFFFFF] p-[0.6px]'>
                  <div className='flex justify-center items-center rounded-[12px] bg-[#000401] flex h-full w-full items-center justify-center'>
                    <h1 className='text-[16px] leading-[19.2px] -tracking-[2%] hometext mx-[10px] '>Trading web3 tokens on WhatsApp</h1>
                  </div>
                </div>
              </div>
              <div className='mt-[10px]'>
                <h1 className='text-[98.7px] leading-[88.8px] -tracking-[2%] font lg:w-[840px] text-center '>Empowering  Your Crypto Investments</h1>
                <h2 className='text-[16px] leading-[19.2px] -tracking-[2%] smalltext text-center mt-[19px]  '>Trading web3 tokens on WhatsApp</h2>
                <div className='mx-auto flex justify-center mt-[23%] '>
                  <button className='mx-auto flex justify-center  lg:w-[183px] homebtn lg:mx-[0px] mx-auto w-[220px] h-[38px] rounded-[18px] text-[#FFFFFF] p-[0.6px]'>
                    <div className='flex justify-center items-center rounded-[18px] bg-[#000401] flex h-full w-full items-center justify-center'>
                      <h1 className='text-[16px] leading-[19.2px] -tracking-[2%] text-[#E6F6E8]'>TRADE NOW</h1>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>



  )
}

export default Homepage
