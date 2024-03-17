import { useQuery } from "react-query"

const API_URL = process.env['NEXT_PUBLIC_API_URL']

const getGoals = () => {
    return fetch(`${API_URL}/get_user_goals`,{
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          "uid":"google-oauth2|104493244220651796441"
        })
    }).then((res)=>{return res.json()})
}

const useGetGoals = () => {
  return useQuery({
    queryFn: getGoals
  })
}

export default useGetGoals