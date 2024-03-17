import { useGetEntry } from "./useGetEntry"

const TodayEntry = () => {
  const entry = useGetEntry();
  return (
    <div>
        <form>
            <input className="border-4 border-black" type="text"></input>
        </form>
        <div>
            <button>{!!entry ? 'Edit' : 'Submit'}</button>
        </div>
    </div>
  )
}

export default TodayEntry