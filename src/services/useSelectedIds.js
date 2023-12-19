import { ApiUrl } from "../constants"

export const useSelectedIds = () => {
    const SelectedIds = (personId) => {
        fetch(`${ApiUrl}/selecionadas`, {
            method: 'POST',
            body: JSON.stringify({personId})
        }) 
        console.log(personId)
    }

    return { SelectedIds }
}


