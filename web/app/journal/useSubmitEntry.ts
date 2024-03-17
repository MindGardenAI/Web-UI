import { useMutation } from "react-query"

const API_URL = process.env['NEXT_PUBLIC_API_URL']

type AddJournalEntry = {
    uid?: string
    title: string
    body: string
}

const submitEntry = (info: AddJournalEntry) => {
    return fetch(`${API_URL}/add_entry`,
    {
        method:'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(info)
    })
}

const useSubmitEntry = () => {
  return useMutation<any,void,AddJournalEntry>({
    mutationFn: submitEntry
  })
}

export default useSubmitEntry