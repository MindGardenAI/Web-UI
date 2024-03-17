'use client'
import { useState } from "react";
import { useGetEntry } from "./useGetEntry"
import useSubmitEntry from "./useSubmitEntry";
import { useAuth0 } from "@auth0/auth0-react";

const TodayEntry = () => {
  const {user} = useAuth0();
  const [content, setContent] = useState('')
  const [entry, setEntry] = useState(null);
  const {data} = useGetEntry();
  const {mutate} = useSubmitEntry();

  if(data){
    setEntry(data);
    setContent(data['text'])
  }

  return (
    <div className="flex flex-col mx-auto">
      <div className="justify-center w-full">
        <form className="">
          <label htmlFor="Journal"></label>
          <textarea className="w-full h-8" placeholder="Go on write something..." name="Journal" id="Journal" onChange={(e)=>{setContent(e.target.value)}} value={content}></textarea>
        </form>
      </div>
      <div className="mx-auto my-5 justify-center items-center">
          <button onClick={()=>{mutate({title: `Entry ${new Date().toDateString()}`, text: content, uid: user?.sub})}} className="font-bold bg-[var(--primary-color)] w-[156px] h-[76px] rounded-2xl">{!!entry ? 'Edit' : 'Submit'}</button>
      </div>
    </div>
  )
}

export default TodayEntry