'use client'
import Image from 'next/image'
import Link from 'next/link'
import heroImage from '../public/images/heroimage.png'
import Footer from './components/footer/footer';

export default function Page() {
  return (
  <div className='flex flex-col'>
    <div className="container mx-auto text-center mt-40 mb-10">
      <h1 className="font-thin text-[2.5rem] sm:text-[3.5rem] lg:text-[5.5rem]">Grow your Happiness</h1>
      <h1 className="font-thin text-xl sm:text-2xl lg:text-3xl">Set goals, journal, while practicing thoughtfulness and gratitude</h1>
    </div>
    <div className='mx-auto'>
      <Link href='/login'><button className="font-bold drop-shadow-md bg-[var(--primary-color)] w-[156px] h-[76px] rounded-2xl">Get Started</button></Link>
    </div>
    <div className='mx-auto w-[67%] z-[-1]'>
    <Image className=' mx-auto rounded-full border-8 border-white drop-shadow-xl my-10' src={heroImage} width={470} height={470} alt="Woman surrounded by plants" />
    </div>
    <Footer/>
  </div>
  );
}
