'use client'
import { useEffect, useState } from "react";
import { useGetEntry } from "./useGetEntry"
import useSubmitEntry from "./useSubmitEntry";
import { useAuth0 } from "@auth0/auth0-react";

const TodayEntry = () => {
  const {user} = useAuth0();
  const [content, setContent] = useState('')
  const [entry, setEntry] = useState<any>(null);
  const {mutateAsync: getEntry} = useGetEntry()
  const {mutate} = useSubmitEntry();

  useEffect(() => {
    if(user?.sub){
      getEntry(user.sub).then((res)=>{
        if(res.length !== 0){
          setEntry(res[0])
          setContent(res[0].body)
        }
        
      })
    }
  }, [user])

  return (
    <div className="flex flex-col mx-auto">
      <div className="justify-center mx-[5%]">
        <form className="">
          <label htmlFor="Journal"></label>
          <textarea className="w-full h-8 p-1" placeholder="Go on write something..." name="Journal" id="Journal" onChange={(e)=>{setContent(e.target.value)}} value={content}></textarea>
        </form>
      </div>
      <div className="mx-auto my-5 justify-center items-center">
          <button onClick={()=>{mutate({title: `Entry ${new Date().toDateString()}`, body: content, uid: user?.sub})}} className="font-bold bg-[var(--primary-color)] w-[156px] h-[76px] rounded-2xl">{!!entry ? 'Edit' : 'Submit'}</button>
      </div>
    </div>
  )
}

export default TodayEntry