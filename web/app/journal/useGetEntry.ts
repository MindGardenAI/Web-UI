import { useQuery } from "react-query"

// Get today's journal section (Can be null)
const getJournalEntry = () => {
    return fetch('',{
        method: 'GET'
    }).then((res) => {
        return res.json()
    })
}

export const useGetEntry = () => {
  return useQuery({
    queryFn : getJournalEntry
  })
}
