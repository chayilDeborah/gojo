import Image from 'next/image'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import About from './components/About'
import Utilities from './components/Utilities'
import Communities from './components/Communities'

export default function Home() {
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
