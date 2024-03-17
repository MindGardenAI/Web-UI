'use client'
import { useState } from "react";
import { useGetEntry } from "./useGetEntry"
import useSubmitEntry from "./useSubmitEntry";

const TodayEntry = () => {
  const [entry, setEntry] = useState(null)
  const data = useGetEntry();
  const mutate = useSubmitEntry();
  return (
    <div className="flex flex-col mx-auto">
      <div className="justify-center w-full">
        <form className="">
          <label htmlFor="Journal"></label>
          <textarea className="w-full h-8" name="Journal" id="Journal"></textarea>
        </form>
      </div>
      <div className="mx-auto my-5 justify-center items-center">
          <button onClick={()=>{}} className="font-bold bg-[var(--primary-color)] w-[156px] h-[76px] rounded-2xl">{!!entry ? 'Edit' : 'Submit'}</button>
      </div>
    </div>
  )
}

export default TodayEntry