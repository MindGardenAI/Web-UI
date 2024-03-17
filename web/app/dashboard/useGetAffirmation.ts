const { useQuery } = require("react-query")

const API_URL = process.env['NEXT_PUBLIC_API_URL']

const getAffirmation = () => {
    return fetch(`${API_URL}/singleaffirmation`,{
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": '*'
        }
    }).then((res) => {
        return res.text()
    })
}

const useGetAffirmation = () => {
    return useQuery({
        queryFn: getAffirmation
    })
}

export default useGetAffirmation