import React from 'react'
import TodayEntry from './currententry'
import Studies from './studies'

const Journal = () => {
  return (
    <div>
        <h1>Journal</h1>
        <h2>{new Date().toDateString()}</h2>
        <TodayEntry/>
        <Studies/>
    </div>
  )
}

export default Journal