'use client'
import Image from 'next/image'
import heroImage from '../public/images/heroimage.png'

export default function Page() {
  return (
  <>
    <div className="container mx-auto text-center my-10">
      <h1 className="font-thin text-8xl">Grow your Happiness</h1>
      <h2 className="font-thin">Set goals, journal, while practicing thoughtfulness and gratitude</h2>
    </div>
    <button className="bg-[var(--primary-color)] w-[196px] h-[128px]">Get Started</button>
    <Image className='rounded-full' src={heroImage} width={600} height={600} alt="Woman surrounded by plants" />
  </>
  );
}
