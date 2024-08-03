"use client"
import React, {useEffect} from "react"
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import About from './components/About'
import Utilities from './components/Utilities'
import Communities from './components/Communities'
import Aos from "aos"
import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    Aos.init({
       offset: 0,
       duration: 1200,
       easing: "ease",
       delay: 0,
    })
  }, [])

  return (
   <main className='flex justify-center  '>
    <section className='w-full'>
    {/* <Navbar /> */}
    <Homepage />
    <About />
    <Utilities />
    <div>
    <Communities />
    </div>
    </section>
   </main>
  )
}
