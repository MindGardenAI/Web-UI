import { useQuery } from "react-query"

// Get today's journal section (Can be null)
const getJournalEntry = () => {
    return fetch('',{
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({})
    })
}

export const useGetEntry = () => {
  return useQuery({
    queryFn : getJournalEntry
  })
}
