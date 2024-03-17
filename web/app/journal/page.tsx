'use client'
import TodayEntry from './currententry'
import Studies from './studies'

const Journal = () => {
  return (
    <div className='flex flex-col'>
        <div className='container mt-40 mx-auto text-center'>
          <h1 className='text-7xl'>Journal</h1>
          <h2 className='text-2xl font-thin'>{new Date().toDateString()}</h2>
          <hr className='border-black border-1 mx-[5%] mb-4'/>
        </div>
        <div className='container mx-auto drop-shadow-lg'>
          <TodayEntry/>
        </div>
        <div className='container mx-auto drop-shadow-lg'>
          <Studies/>
        </div>
    </div>
  )
}

export default Journal