import { useMutation } from "react-query"

const API_URL = process.env['NEXT_PUBLIC_API_URL']

// Get today's journal section (Can be null)
const getJournalEntry = (sub: string) => {
    return fetch(`${API_URL}/get_todays_entries`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "uid": sub
        })
    }).then((res) => {
      return res.json()
    })
}

export const useGetEntry = () => {
  return useMutation({
    mutationFn: getJournalEntry
  })
}
