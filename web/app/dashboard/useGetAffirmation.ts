const { useQuery } = require("react-query")

const API_URL = process.env['NEXT_PUBLIC_API_URL']

const getAffirmation = () => {
    return fetch(`${API_URL}/singleaffirmation`,{
        method: 'GET',
        mode: 'cors',
        headers: {
            "content-type": 'application/json',
            "Access-Control-Allow-Origin": '*'
        }
    })
}

const useGetAffirmation = () => {
    return useQuery({
        queryFn: getAffirmation
    })
}

export default useGetAffirmation