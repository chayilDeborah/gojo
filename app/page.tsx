import Image from 'next/image'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

export default function Home() {
  return (
   <main className='flex justify-center  '>
    <section className='w-full'>
    <Navbar />
    <Homepage />
 
    </section>
   </main>
  )
}
