import Image from 'next/image'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import About from './components/About'
import Utilities from './components/Utilities'

export default function Home() {
  return (
   <main className='flex justify-center  '>
    <section className='w-full'>
    <Navbar />
    <Homepage />
    <About />
    <Utilities />
 
    </section>
   </main>
  )
}
