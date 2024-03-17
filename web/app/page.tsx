'use client'
import Image from 'next/image'
import Link from 'next/link'
import heroImage from '../public/images/heroimage.png'

export default function Page() {
  return (
  <div className='flex flex-col'>
    <div className="container mx-auto text-center mt-40 mb-10">
      <h1 className="font-thin text-[2.5rem] sm:text-[3.5rem] lg:text-[5.5rem]">Grow your Happiness</h1>
      <h1 className="font-thin text-xl sm:text-2xl lg:text-3xl">Set goals, journal, while practicing thoughtfulness and gratitude</h1>
    </div>
    <div className='mx-auto'>
      <Link href='/login'><button className="font-bold bg-[var(--primary-color)] w-[156px] h-[76px] rounded-2xl">Get Started</button></Link>
    </div>
    <div className='mx-auto w-[67%] z-[-1]'>
    <Image className=' mx-auto rounded-full drop-shadow-lg my-10' src={heroImage} width={480} height={480} alt="Woman surrounded by plants" />
    </div>
    <div className='mx-auto text-center'>
      <h1 className='text-sm'>Professional Health Resources:</h1>
      <span className='text-sm'>Home | NAMI: National Alliance on Mental Illness</span>
      <hr className='border-black border-1 mb-4'/>
      <p className='text-sm'>National Alliance on Mental Illness (NAMI) Helpline:</p>
      <span className='text-sm'>1-800-950-NAMI (1-800-950-6264)</span>
    </div>
  </div>
  );
}
