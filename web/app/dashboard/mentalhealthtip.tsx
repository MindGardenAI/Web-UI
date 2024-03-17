import useGetAffirmation from "./useGetAffirmation"

const DailyMentalHealth = () => {
  const {data, isLoading, error} = useGetAffirmation()
  console.log(data)
  console.log(error)
  return (
    <div className="bg-[var(--primary-color)] rounded-[8rem] flex flex-col p-8 drop-shadow-xl">
        <div>
            <h1 className="text-4xl text-center">Daily Mental Health Tip</h1>
        </div>
        <div>
            <p className="text-center text-md my-4">{isLoading ? 'Loading...' : data}</p>
        </div>
    </div>
  )
}

export default DailyMentalHealth