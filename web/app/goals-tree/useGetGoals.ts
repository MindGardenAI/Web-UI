import { useQuery } from "react-query"

const getGoals = () => {
    return fetch('',{
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({})
    })
}

const useGetGoals = () => {
  return useQuery({
    queryFn: getGoals
  })
}

export default useGetGoals