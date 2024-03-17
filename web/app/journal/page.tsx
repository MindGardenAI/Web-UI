'use client'
import TodayEntry from './currententry'
import Studies from './studies'

const Journal = () => {
  return (
    <div className='flex flex-col'>
        <div className='container mx-0'>
          <h1>Journal</h1>
          <h2>{new Date().toDateString()}</h2>
        </div>
        <div>
          <TodayEntry/>
        </div>
        <div>
          <Studies/>
        </div>
    </div>
  )
}

export default Journal