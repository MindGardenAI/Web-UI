import { useMutation } from "react-query"

type AddJournalEntry = {
    title: string
    text: string
}

const submitEntry = (info: AddJournalEntry) => {
    return fetch('',
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